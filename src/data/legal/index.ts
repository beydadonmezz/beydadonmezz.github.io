import type { HostedLegal, LegalDoc } from "../types";
import { sledpawsLegal } from "./sledpaws";

/**
 * Games whose legal and support pages live on this site (/<slug>/privacy/, /<slug>/terms/, /<slug>/support/ and
 * the Turkish /<slug>/tr/...). Every other game publishes them elsewhere and `legal` in games.ts only links to them.
 * Quiltdoku (hosted here until 2026-10-23) was retired: /quiltdoku/... are static redirects in public/quiltdoku/.
 */
export const hostedLegal: Record<string, HostedLegal> = {
  sledpaws: sledpawsLegal,
};

export const hostedLegalSlugs = Object.keys(hostedLegal);

export type LegalKind = "privacy" | "terms" | "support";
export type LegalLang = "en" | "tr";

export const legalKinds: LegalKind[] = ["privacy", "terms", "support"];

/** Page names, per language (navigation between the pages and page titles). */
export const legalLabels: Record<LegalLang, Record<LegalKind, string>> = {
  en: { privacy: "Privacy Policy", terms: "Terms of Use", support: "Support" },
  tr: { privacy: "Gizlilik Politikası", terms: "Kullanım Koşulları", support: "Destek" },
};

/** The hosted document, or undefined when the game has no such page in that language. */
export function legalDoc(slug: string, kind: LegalKind, lang: LegalLang): LegalDoc | undefined {
  const set = hostedLegal[slug];
  if (!set) return undefined;
  return lang === "tr" ? set.tr?.[kind] : set[kind];
}

/** Site path of a hosted page, with the trailing slash the static export uses. */
export function legalPath(slug: string, kind: LegalKind, lang: LegalLang) {
  return `/${slug}/${lang === "tr" ? "tr/" : ""}${kind}/`;
}

/** Every hosted page that exists (static params, sitemap). */
export const hostedLegalPages = hostedLegalSlugs.flatMap((slug) =>
  (["en", "tr"] as const).flatMap((lang) =>
    legalKinds.filter((kind) => legalDoc(slug, kind, lang)).map((kind) => ({ slug, kind, lang })),
  ),
);
