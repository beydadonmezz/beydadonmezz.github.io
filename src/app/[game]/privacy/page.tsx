import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { games } from "@/data/games";
import { getGame } from "@/lib/games";
import { hasLegal, legalTitles } from "@/lib/legal";

export const dynamicParams = false;

export function generateStaticParams() {
  return games.map((g) => ({ game: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ game: string }> }): Promise<Metadata> {
  const game = getGame((await params).game);
  const title = `${legalTitles.privacy} · ${game.name}`;
  return {
    title,
    description: `${legalTitles.privacy} for ${game.name}, an iOS game by Beydanur Dönmez.`,
    alternates: { canonical: `/${game.slug}/privacy/` },
    robots: hasLegal(game.slug, "privacy") ? undefined : { index: false },
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ game: string }> }) {
  const game = getGame((await params).game);
  return <LegalPage game={game} kind="privacy" />;
}
