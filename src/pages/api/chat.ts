export const prerender = false;

import type { APIRoute } from "astro";
import "dotenv/config";
import { getItKnowledgeBase } from "../../lib/itKnowledgeBase";

const MODEL = "claude-sonnet-5";
const MAX_TOKENS = 1024;
const MAX_HISTORY_MESSAGES = 16; // last N messages kept, oldest trimmed first
const MAX_MESSAGE_LENGTH = 2000;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_INSTRUCTIONS = `Tu es l'assistant TI du Consortium de coopération des entreprises collectives, pour son site de services TI destiné aux coopératives, mutuelles et OBNL du Québec.

Règles :
- Réponds uniquement à partir des informations fournies dans la base de connaissances ci-dessous. N'invente jamais un prix, un délai ou une fonctionnalité qui n'y figure pas.
- Si l'information demandée n'est pas dans la base de connaissances, dis-le clairement et oriente vers /fr/contact ou ti@leconsortium.coop plutôt que de deviner.
- Réponds dans la langue utilisée par la personne (français par défaut, anglais si elle écrit en anglais).
- Reste concis : réponses courtes et concrètes, pas de longs préambules. Utilise des puces seulement si ça aide réellement la lisibilité.
- Tu donnes de l'information générale seulement. Tu n'es pas un avis juridique, comptable, fiscal ou professionnel, et tu ne peux ni activer un service ni confirmer un prix final — ces étapes passent par un humain.
- Tu ne réponds qu'aux questions liées aux services TI du Consortium (sécurité, sauvegarde, gestion TI proactive, migration, formation, conseil, support, matériel Dell, automatisation) et aux ressources associées (guide employé, lexique, questionnaire). Pour toute autre demande, invite poliment la personne à utiliser /fr/contact.

Base de connaissances :
${getItKnowledgeBase()}`;

function isValidMessage(m: unknown): m is ChatMessage {
  if (!m || typeof m !== "object") return false;
  const { role, content } = m as Record<string, unknown>;
  return (role === "user" || role === "assistant") && typeof content === "string" && content.length > 0;
}

export const POST: APIRoute = async ({ request }) => {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("❌ ANTHROPIC_API_KEY missing — chat endpoint cannot run");
    return new Response(JSON.stringify({ error: "L'assistant n'est pas encore configuré. Réessayez plus tard ou contactez-nous." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Requête invalide." }), { status: 400, headers: { "Content-Type": "application/json" } });
  }

  const rawMessages = (body as Record<string, unknown>)?.messages;
  if (!Array.isArray(rawMessages) || !rawMessages.every(isValidMessage) || rawMessages.length === 0) {
    return new Response(JSON.stringify({ error: "Requête invalide." }), { status: 400, headers: { "Content-Type": "application/json" } });
  }

  const messages = (rawMessages as ChatMessage[])
    .slice(-MAX_HISTORY_MESSAGES)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_LENGTH) }));

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: MAX_TOKENS,
        system: [
          {
            type: "text",
            text: SYSTEM_INSTRUCTIONS,
            cache_control: { type: "ephemeral" },
          },
        ],
        messages,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("❌ Anthropic API error:", res.status, errText);
      return new Response(JSON.stringify({ error: "L'assistant a rencontré un problème. Réessayez dans un instant." }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }

    const data = await res.json();
    const reply = data?.content?.find((block: { type: string }) => block.type === "text")?.text;
    if (!reply) {
      console.error("❌ Anthropic response had no text block:", JSON.stringify(data));
      return new Response(JSON.stringify({ error: "L'assistant n'a pas pu générer de réponse. Réessayez." }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ reply }), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (err) {
    console.error("❌ Chat API error:", err);
    return new Response(JSON.stringify({ error: "Erreur réseau. Réessayez dans un instant." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
