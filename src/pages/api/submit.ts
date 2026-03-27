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

// Fields that are handled explicitly (skip in leftover loop)
const KNOWN_FIELDS = new Set([
  "company_name", "is_member", "is_federation", "company_type",
  "street_address", "city", "province", "postal_code",
  "contact_person", "contact_title", "consent", "form_type", "contact_source", "contact_subject",
  "conseil_type", "support_plan",
  "migration_users", "contact_users", "quote_users",
  "contact_email", "dell_email", "migration_email", "automate_email",
  "quote_email", "conseil_email", "support_email",
  "contact_tel", "contact_phone", "dell_tel", "migration_phone",
  "automate_tel", "quote_phone", "conseil_tel", "support_tel",
  "contact_message", "dell_msg", "migration_msg", "automate_msg",
  "quote_notes", "conseil_msg", "support_msg",
]);

export const POST: APIRoute = async ({ request }) => {
  console.log("API /api/submit reached");

  try {
    const body = await request.json() as Record<string, string>;
    console.log("Body received:", body);

    const isActivation = Object.keys(body).some((k) => k.startsWith("activation_"));
    const isContact = body["form_type"] === "contact";
    const formSource = body["contact_source"] || "";

    // Resolve shared fields that have different names per form
    const email =
      body["contact_email"] || body["dell_email"] || body["migration_email"] ||
      body["automate_email"] || body["quote_email"] || body["conseil_email"] || body["support_email"] || "";

    const phone =
      body["contact_tel"] || body["contact_phone"] || body["dell_tel"] ||
      body["migration_phone"] || body["automate_tel"] || body["quote_phone"] ||
      body["conseil_tel"] || body["support_tel"] || "";

    const message =
      body["contact_message"] || body["dell_msg"] || body["migration_msg"] ||
      body["automate_msg"] || body["quote_notes"] || body["conseil_msg"] || body["support_msg"] || "";

    const users = body["migration_users"] || body["contact_users"] || body["quote_users"] || "";

    let rows = "";

    // ── Entité ─────────────────────────────────────────────────────────────
    rows += fieldRow("Entité", body["company_name"] || "—");

    // ── Qualification ──────────────────────────────────────────────────────
    if (body["is_member"])
      rows += fieldRow("Votre entreprise est-elle déjà membre ou cliente du Consortium?", normalize(body["is_member"]));
    if (body["is_federation"])
      rows += fieldRow("Membre d'une fédération, d'un regroupement ou d'un réseau?", normalize(body["is_federation"]));
    if (body["company_type"])
      rows += fieldRow("Type d'entreprise", normalize(body["company_type"]));

    // ── Adresse ─────────────────────────────────────────────────────────────
    if (body["street_address"]) rows += fieldRow("Adresse postale", body["street_address"]);
    const cityProv = [body["city"], body["province"]].filter(Boolean).join(", ");
    if (cityProv) rows += fieldRow("Ville / Province", cityProv);
    if (body["postal_code"]) rows += fieldRow("Code postal", body["postal_code"]);

    // ── Personne contact ────────────────────────────────────────────────────
    if (body["contact_person"]) rows += fieldRow("Personne contact", body["contact_person"]);
    if (body["contact_title"]) rows += fieldRow("Titre au sein de l'organisation", body["contact_title"]);
    if (email) rows += fieldRow("Courriel", `<a href="mailto:${email}">${email}</a>`);
    if (phone) rows += fieldRow("Téléphone", phone);

    // ── Précision de la demande ─────────────────────────────────────────────
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
        "Services sélectionnés",
        `<ul>${checkedServices.map((s) => `<li>${s}</li>`).join("")}</ul>`,
      );
    }

    if (message) rows += fieldRow("Message / Notes", message.replace(/\n/g, "<br>"));

    // Activation-specific fields
    if (isActivation) {
      Object.entries(body)
        .filter(([k]) => k.startsWith("activation_"))
        .forEach(([k, v]) => {
          rows += fieldRow(k.replace("activation_", ""), String(v));
        });
    }

    const html = `
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

    const emailSubject = isActivation
      ? "Demande d'activation — Sauvegarde Microsoft 365"
      : isContact
      ? `Contact — ${body["contact_subject"] || "Nouveau message"}`
      : formSource
      ? `Demande — ${formSource}`
      : `Demande — ${body["company_name"] || "Nouveau formulaire"}`;

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
