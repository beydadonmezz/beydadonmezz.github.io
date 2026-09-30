import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

export type LegalKind = "privacy" | "terms" | "support";

export const legalTitles: Record<LegalKind, string> = {
  privacy: "Privacy Policy",
  terms: "Terms of Use",
  support: "Support",
};

const root = path.join(process.cwd(), "src/content/legal");

/**
 * Reads src/content/legal/<slug>/<kind>.md at build time.
 * Returns null when the file does not exist yet.
 */
export function getLegal(slug: string, kind: LegalKind): { html: string } | null {
  const file = path.join(root, slug, `${kind}.md`);
  if (!fs.existsSync(file)) return null;
  const md = fs.readFileSync(file, "utf8");
  return { html: marked.parse(md, { async: false, gfm: true }) };
}

export function hasLegal(slug: string, kind: LegalKind) {
  return fs.existsSync(path.join(root, slug, `${kind}.md`));
}
