import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { games } from "@/data/games";
import { getGame } from "@/lib/games";
import { hasLegal, legalTitles } from "@/lib/legal";

export const dynamicParams = false;

export function generateStaticParams() {
  return games.filter((g) => hasLegal(g.slug, "terms")).map((g) => ({ game: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ game: string }> }): Promise<Metadata> {
  const game = getGame((await params).game);
  const title = `${legalTitles.terms} · ${game.name}`;
  return {
    title,
    description: `${legalTitles.terms} for ${game.name}, an iOS game by Beydanur Dönmez.`,
    alternates: { canonical: `/${game.slug}/terms/` },
    robots: hasLegal(game.slug, "terms") ? undefined : { index: false },
  };
}

export default async function TermsPage({ params }: { params: Promise<{ game: string }> }) {
  const game = getGame((await params).game);
  return <LegalPage game={game} kind="terms" />;
}
