export const prerender = false;

import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import "dotenv/config";

// Helper: row with blue-gray label header + white value row
function fieldRow(label: string, value: string): string {
  return `
<tr bgcolor="#EAF2FA">
  <td colspan="2">
    <font style="font-family: sans-serif; font-size:12px;"><strong>${label}</strong></font>
  </td>
</tr>
<tr bgcolor="#FFFFFF">
  <td width="20">&nbsp;</td>
  <td>
    <font style="font-family: sans-serif; font-size:12px;">${value}</font>
  </td>
</tr>`;
}

// Helper: section divider row
function sectionRow(title: string): string {
  return `<tr>
  <td colspan="2" style="font-size:14px; font-weight:bold; background-color:#EEE; border-bottom:1px solid #DFDFDF; padding:7px 7px">${title}</td>
</tr>`;
}

// Normalize radio/select values to readable labels
function normalize(val: string): string {
  const map: Record<string, string> = {
    oui: "Oui", non: "Non", ne_sais_pas: "Ne sais pas",
    cooperative: "Coopérative", mutuelle: "Mutuelle", obnl: "OBNL", autre: "Autre",
    yes: "Yes", no: "No",
  };
  return map[val] ?? val;
}

// Tenant display names
const tenantDisplayNames: Record<string, string> = {
  consortium: "Consortium",
  eesad: "Réseau de coopération des EÉSAD",
  fqcs: "FQCS",
};

// Fields that are handled explicitly (skip in leftover loop)
const KNOWN_FIELDS = new Set([
  "company_name", "is_member", "is_federation", "company_type", "heard_about", "service_type", "service_name",
  "street_address", "city", "province", "postal_code",
  "contact_person", "contact_title", "consent", "form_type", "contact_source", "contact_subject",
  "conseil_type", "support_plan",
  "migration_users", "contact_users", "quote_users", "activation_users",
  "contact_email", "dell_email", "migration_email", "automate_email",
  "quote_email", "conseil_email", "support_email",
  "contact_tel", "contact_phone", "dell_tel", "migration_phone",
  "automate_tel", "quote_phone", "conseil_tel", "support_tel",
  "contact_message", "dell_msg", "migration_msg", "automate_msg",
  "quote_notes", "conseil_msg", "support_msg",
  // Survey fields
  "client_nom", "client_email", "client_org", "client_phone",
  "score_total", "score_percent", "score_message",
  "cf-turnstile-response",
]);

// Verify a Cloudflare Turnstile token server-side. This is the actual
// anti-bot boundary — the widget in the form is just UX, this call is
// what a script can't fake.
async function verifyTurnstile(token: string | undefined, remoteip: string | undefined): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error("❌ TURNSTILE_SECRET_KEY missing — refusing to accept unverified submissions");
    return false;
  }
  if (!token) return false;

  try {
    const params = new URLSearchParams({ secret, response: token });
    if (remoteip) params.set("remoteip", remoteip);

    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params,
    });
    const data = await res.json() as { success: boolean };
    return data.success === true;
  } catch (err) {
    console.error("❌ Turnstile verification request failed:", err);
    return false;
  }
}

export const POST: APIRoute = async (context) => {
  console.log("API /api/submit reached");
  const { request } = context;

  try {
    const body = await request.json() as Record<string, string>;
    console.log("Body received:", body);

    let clientAddress: string | undefined;
    try { clientAddress = context.clientAddress; } catch { /* not available on this adapter/mode — fine, remoteip is optional */ }

    const turnstileOk = await verifyTurnstile(body["cf-turnstile-response"], clientAddress);
    if (!turnstileOk) {
      console.warn("⚠️ Turnstile verification failed — rejecting submission");
      return new Response("Captcha verification failed", { status: 400 });
    }

    const isActivation = Object.keys(body).some((k) => k.startsWith("activation_"));
    const isContact = body["form_type"] === "contact";
    const formSource = body["contact_source"] || "";

    const tenantName = tenantDisplayNames[process.env.TENANT || "consortium"] || "Consortium";

    // Resolve shared fields that have different names per form
    const email =
      body["contact_email"] || body["client_email"] || body["dell_email"] || body["migration_email"] ||
      body["automate_email"] || body["quote_email"] || body["conseil_email"] || body["support_email"] || "";

    const phone =
      body["contact_tel"] || body["contact_phone"] || body["client_phone"] || body["dell_tel"] ||
      body["migration_phone"] || body["automate_tel"] || body["quote_phone"] ||
      body["conseil_tel"] || body["support_tel"] || "";

    const message =
      body["contact_message"] || body["dell_msg"] || body["migration_msg"] ||
      body["automate_msg"] || body["quote_notes"] || body["conseil_msg"] || body["support_msg"] || "";

    const users = body["migration_users"] || body["contact_users"] || body["quote_users"] || body["activation_users"] || "";

    const companyName = body["company_name"] || "";
    const companyType = body["company_type"] ? normalize(body["company_type"]) : "";

    // Preamble
    const preamble = companyName
      ? `<p style="font-family: sans-serif; font-size: 14px; margin: 0 0 8px 0;">Nous venons de recevoir une nouvelle demande de service de <strong>${companyName}${companyType ? ` (${companyType})` : ""}</strong>.</p><p style="font-family: sans-serif; font-size: 14px; margin: 0 0 16px 0;">Voici les détails relatifs à cette demande.</p>`
      : "";

    let rows = "";

    // ── Entité ─────────────────────────────────────────────────────────────
    rows += fieldRow("Entité", tenantName);

    // ── Service rendu à ────────────────────────────────────────────────────
    rows += sectionRow("Service rendu à :");
    if (body["service_type"])
      rows += fieldRow("Service(s) requis", body["service_type"]);

    // ── Qualification ──────────────────────────────────────────────────────
    if (body["is_member"])
      rows += fieldRow("Votre entreprise est-elle déjà membre du Consortium?", normalize(body["is_member"]));
    if (body["heard_about"])
      rows += fieldRow("Où avez-vous entendu parler de nous?", body["heard_about"]);
    if (body["is_federation"])
      rows += fieldRow("Votre entreprise est-elle membre d'une fédération, d'un regroupement ou d'un réseau?", normalize(body["is_federation"]));
    if (companyType)
      rows += fieldRow("Type d'entreprise", companyType);

    // ── Nom de l'entreprise ────────────────────────────────────────────────
    if (companyName)
      rows += fieldRow("Nom de l'entreprise", companyName);

    // ── Adresse ─────────────────────────────────────────────────────────────
    if (body["street_address"]) {
      const cityLine = [body["city"], body["province"], body["postal_code"]].filter(Boolean).join(", ");
      const addressParts = [body["street_address"], cityLine, "Canada"].filter(Boolean);
      const addressForMap = addressParts.join(" ");
      const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressForMap)}`;
      const addressHtml = addressParts.join("<br>") + `<br><a href="${mapUrl}">Map It</a>`;
      rows += fieldRow("Adresse", addressHtml);
    }

    // ── Personne contact ────────────────────────────────────────────────────
    if (body["contact_person"]) rows += fieldRow("Personne contact", body["contact_person"]);
    if (body["client_nom"])     rows += fieldRow("Nom", body["client_nom"]);
    if (body["contact_title"])  rows += fieldRow("Titre au sein de l'organisation", body["contact_title"]);
    if (body["client_org"])     rows += fieldRow("Organisation", body["client_org"]);
    if (email) rows += fieldRow("Courriel", `<a href="mailto:${email}">${email}</a>`);
    if (phone) rows += fieldRow("Téléphone", phone);

    // ── Précision de la demande ─────────────────────────────────────────────
    rows += sectionRow("Précision de la demande");

    if (body["contact_subject"]) rows += fieldRow("Sujet", body["contact_subject"]);
    if (body["conseil_type"])    rows += fieldRow("Type de consultation", body["conseil_type"]);
    if (body["support_plan"])    rows += fieldRow("Plan de support", body["support_plan"]);
    if (users)                   rows += fieldRow("Nombre d'utilisateurs", users);

    // Services checkboxes (RMM form — fields with value "yes" not in KNOWN_FIELDS)
    const checkedServices = Object.entries(body)
      .filter(([k, v]) => !KNOWN_FIELDS.has(k) && !k.startsWith("activation_") && v === "yes")
      .map(([k]) => k);
    if (checkedServices.length) {
      rows += fieldRow(
        "Service(s) requis",
        `<ul>${checkedServices.map((s) => `<li>${s}</li>`).join("")}</ul>`,
      );
    }

    if (message) rows += fieldRow("Description du mandat", message.replace(/\n/g, "<br>"));

    // ── Réponses questionnaire (sliders q1, q2, …) ─────────────────────────
    const sliderEntries = Object.entries(body)
      .filter(([k]) => /^q\d+$/.test(k))
      .sort(([a], [b]) => parseInt(a.slice(1)) - parseInt(b.slice(1)));
    if (sliderEntries.length) {
      rows += sectionRow("Réponses au questionnaire");
      sliderEntries.forEach(([k, v]) => {
        const label = body[`${k}_text`] || k.toUpperCase();
        rows += fieldRow(label, v);
      });
      if (body["score_total"])   rows += fieldRow("Score total", body["score_total"]);
      if (body["score_percent"]) rows += fieldRow("Score (%)", body["score_percent"]);
      if (body["score_message"]) rows += fieldRow("Niveau de maturité", body["score_message"]);
    }

    const html = `${preamble}
<table width="99%" border="0" cellpadding="1" cellspacing="0" bgcolor="#EAEAEA"><tr><td>
<table width="100%" border="0" cellpadding="5" cellspacing="0" bgcolor="#FFFFFF">
${rows}
</table>
</td></tr></table>`;

    // ── SMTP ────────────────────────────────────────────────────────────────
    const host      = process.env.SMTP_HOST || "smtp.office365.com";
    const port      = Number(process.env.SMTP_PORT || 587);
    const user      = process.env.SMTP_USER;
    const pass      = process.env.SMTP_PASS;
    const recipient = process.env.MAIL_TO || user;

    if (!user || !pass) {
      console.error("❌ SMTP_USER or SMTP_PASS missing");
      return new Response("SMTP ERROR: missing credentials", { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host, port, secure: false,
      auth: { user, pass },
      tls: { ciphers: "TLSv1.2" },
    });

    const isSurvey = body["form_type"] === "survey";
    const serviceName = body["service_name"] || formSource || companyName || "Nouveau formulaire";
    const emailSubject = isContact
      ? `Demande de service TI — ${tenantName} — ${body["contact_subject"] || "Nouveau message"} — Contact général`
      : isSurvey
        ? `Questionnaire TI — ${tenantName}`
        : `Demande de service TI — ${tenantName} — ${serviceName}`;

    await transporter.sendMail({
      from: `"Services TI" <${process.env.SMTP_USER}>`,
      to: recipient,
      subject: emailSubject,
      html,
    });

    console.log("📤 Email sent successfully!");
    return new Response("OK", { status: 200 });
  } catch (err: any) {
    console.error("❌ API ERROR:", err);
    return new Response(err?.message || "Erreur serveur", { status: 500 });
  }
};
