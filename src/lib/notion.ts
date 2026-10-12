import type { Project } from "@/data/portfolio";
import { projects as fallbackProjects } from "@/data/portfolio";
import { cacheLife } from "next/cache";

type NotionRichText = { plain_text?: string; text?: { content?: string } };
type NotionProperty =
  | { type: "title"; title?: NotionRichText[] }
  | { type: "rich_text"; rich_text?: NotionRichText[] }
  | { type: "number"; number?: number | null }
  | { type: "select"; select?: { name?: string } | null }
  | { type: "multi_select"; multi_select?: { name?: string }[] }
  | { type: "url"; url?: string | null }
  | { type: "date"; date?: { start?: string } | null }
  | { type: "checkbox"; checkbox?: boolean }
  | { type: "people"; people?: unknown[] }
  | { type: "files"; files?: unknown[] }
  | { type: "formula"; formula?: { string?: string; number?: number } }
  | { type: "unknown" };

type NotionPage = {
  id: string;
  url?: string;
  cover?: { external?: { url?: string }; file?: { url?: string } } | null;
  icon?: { type?: string; emoji?: string; external?: { url?: string } } | null;
  properties?: Record<string, NotionProperty>;
  last_edited_time?: string;
};

const NOTION_VERSION = "2022-06-28";

function richTextToString(rt?: NotionRichText[]): string {
  if (!Array.isArray(rt)) return "";
  return rt.map((t) => t.plain_text ?? t.text?.content ?? "").join("");
}

function pickText(page: NotionPage, keys: string[]): string {
  const props = page.properties ?? {};
  for (const key of keys) {
    const match = Object.keys(props).find(
      (k) => k.toLowerCase() === key.toLowerCase(),
    );
    if (!match) continue;
    const prop = props[match] as {
      title?: NotionRichText[];
      rich_text?: NotionRichText[];
    };
    const value = richTextToString(prop.title ?? prop.rich_text);
    if (value) return value;
  }
  return "";
}

function pickUrl(page: NotionPage, keys: string[]): string | undefined {
  const props = page.properties ?? {};
  for (const key of keys) {
    const match = Object.keys(props).find(
      (k) => k.toLowerCase() === key.toLowerCase(),
    );
    if (!match) continue;
    const prop = props[match] as { url?: string | null };
    if (prop.url) return prop.url;
  }
  return undefined;
}

function pickMultiSelect(page: NotionPage, keys: string[]): string[] {
  const props = page.properties ?? {};
  for (const key of keys) {
    const match = Object.keys(props).find(
      (k) => k.toLowerCase() === key.toLowerCase(),
    );
    if (!match) continue;
    const prop = props[match] as { multi_select?: { name?: string }[] };
    if (Array.isArray(prop.multi_select)) {
      return prop.multi_select
        .map((s) => s.name)
        .filter((name): name is string => Boolean(name));
    }
  }
  return [];
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function isNotionConfigured(): boolean {
  return Boolean(process.env.NOTION_TOKEN && process.env.NOTION_DATABASE_ID);
}

async function notionFetch(path: string, init?: RequestInit) {
  const token = process.env.NOTION_TOKEN;
  if (!token) throw new Error("NOTION_TOKEN manquant");

  return fetch(`https://api.notion.com/v1${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });
}

export async function getProjectsFromNotion(): Promise<{
  projects: Project[];
  source: "notion" | "fallback";
}> {
  "use cache";
  cacheLife("minutes");
  if (!isNotionConfigured()) {
    return { projects: fallbackProjects, source: "fallback" };
  }

  try {
    const databaseId = process.env.NOTION_DATABASE_ID!;
    const res = await notionFetch(`/databases/${databaseId}/query`, {
      method: "POST",
      body: JSON.stringify({
        page_size: 50,
        sorts: [{ timestamp: "last_edited_time", direction: "descending" }],
      }),
    });

    if (!res.ok) {
      console.error("Notion query failed:", res.status, await res.text());
      return { projects: fallbackProjects, source: "fallback" };
    }

    const data = (await res.json()) as { results?: NotionPage[] };
    const pages = data.results ?? [];

    const projects: Project[] = pages.map((page, index) => {
      const title =
        pickText(page, ["Name", "Titre", "Title", "Nom"]) ||
        `Projet ${index + 1}`;
      const slug =
        pickText(page, ["Slug", "ID"]) ||
        slugify(title) ||
        `projet-${index + 1}`;

      return {
        number: String(index + 1).padStart(2, "0"),
        title,
        meta:
          pickText(page, ["Meta", "Sous-titre", "Subtitle", "Type"]) ||
          "Projet",
        year:
          pickText(page, ["Année", "Annee", "Year"]) ||
          new Date().getFullYear().toString(),
        image:
          pickUrl(page, ["Image", "Cover", "Screenshot"]) ||
          "/projects/placeholder.svg",
        imageAlt: pickText(page, ["Alt", "Description image"]) || title,
        challenge:
          pickText(page, ["Défi", "Defi", "Challenge", "Problème"]) ||
          "Défi à renseigner dans Notion.",
        solution:
          pickText(page, ["Solution", "Réponse"]) ||
          "Solution à renseigner dans Notion.",
        resultStat: pickText(page, ["Stat", "Résultat chiffre", "Metric"]) || "—",
        resultText:
          pickText(page, ["Résultat", "Result", "Impact"]) ||
          "Impact à renseigner dans Notion.",
        stack: pickMultiSelect(page, ["Stack", "Technologies", "Tech"]),
        demo: pickUrl(page, ["Demo", "Démonstration", "Lien demo", "URL"]),
        repo: pickUrl(page, ["Repo", "GitHub", "Code"]),
        notionId: page.id,
        slug,
        cover:
          page.cover?.external?.url ?? page.cover?.file?.url ?? undefined,
      };
    });

    if (projects.length === 0) {
      return { projects: fallbackProjects, source: "fallback" };
    }

    return { projects, source: "notion" };
  } catch (error) {
    console.error("Notion indisponible, fallback local :", error);
    return { projects: fallbackProjects, source: "fallback" };
  }
}

export async function getNotionRecordMap(pageId: string) {
  "use cache";
  cacheLife("hours");
  const token = process.env.NOTION_TOKEN;
  if (!token) return null;

  try {
    const { NotionAPI } = await import("notion-client");
    const api = new NotionAPI({ authToken: token });
    return await api.getPage(pageId);
  } catch (error) {
    console.error("Erreur chargement page Notion :", error);
    return null;
  }
}
