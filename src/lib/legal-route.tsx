import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/LegalPage";
import {
  hostedLegalPages,
  legalDoc,
  legalKinds,
  legalLabels,
  legalPath,
  type LegalKind,
  type LegalLang,
} from "@/data/legal";
import { getGame } from "@/lib/games";

type Params = { params: Promise<{ game: string }> };

const sectionLabel: Record<LegalLang, Record<LegalKind, string>> = {
  en: { privacy: "Policy", terms: "Terms", support: "Help" },
  tr: { privacy: "Politika", terms: "Koşullar", support: "Yardım" },
};

/**
 * Everything one hosted legal route needs (src/app/[game]/<kind>/page.tsx and src/app/[game]/tr/<kind>/page.tsx).
 * Static params cover only the games that have this page in this language (src/data/legal/).
 */
export function legalRoute(kind: LegalKind, lang: LegalLang) {
  const other: LegalLang = lang === "en" ? "tr" : "en";

  function generateStaticParams() {
    return hostedLegalPages.filter((p) => p.kind === kind && p.lang === lang).map((p) => ({ game: p.slug }));
  }

  async function generateMetadata({ params }: Params): Promise<Metadata> {
    const game = getGame((await params).game);
    const doc = legalDoc(game.slug, kind, lang);
    if (!doc) notFound();
    const path = legalPath(game.slug, kind, lang);
    const title = `${doc.title} · ${game.name}`;
    const languages: Record<string, string> = { [lang]: path };
    if (legalDoc(game.slug, kind, other)) languages[other] = legalPath(game.slug, kind, other);
    if (legalDoc(game.slug, kind, "en")) languages["x-default"] = legalPath(game.slug, kind, "en");
    return {
      title,
      description:
        lang === "tr" ? `${game.name} için ${doc.title.toLocaleLowerCase("tr")}.` : `${doc.title} for ${game.name}.`,
      alternates: { canonical: path, languages },
      openGraph: { title, url: path, locale: lang === "tr" ? "tr_TR" : "en_US" },
    };
  }

  async function Page({ params }: Params) {
    const game = getGame((await params).game);
    const doc = legalDoc(game.slug, kind, lang);
    if (!doc) notFound();
    const nav = legalKinds
      .filter((k) => legalDoc(game.slug, k, lang))
      .map((k) => ({ href: legalPath(game.slug, k, lang), label: legalLabels[lang][k], current: k === kind }));
    const alternate = legalDoc(game.slug, kind, other)
      ? {
          href: legalPath(game.slug, kind, other),
          label: other === "tr" ? "Türkçe" : "English",
          lang: other,
          title: other === "tr" ? "Bu sayfanın Türkçesi" : "This page in English",
        }
      : undefined;
    return <LegalPage game={game} doc={doc} lang={lang} nav={nav} alternate={alternate} label={sectionLabel[lang][kind]} />;
  }

  return { generateStaticParams, generateMetadata, Page };
}
