import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { hostedLegal, hostedLegalSlugs } from "@/data/legal";
import { getGame } from "@/lib/games";

export const dynamicParams = false;

/** Only games whose legal pages live on this site (src/data/legal/) get /<slug>/support/. */
export function generateStaticParams() {
  return hostedLegalSlugs.map((game) => ({ game }));
}

export async function generateMetadata({ params }: { params: Promise<{ game: string }> }): Promise<Metadata> {
  const game = getGame((await params).game);
  const title = `Support · ${game.name}`;
  return {
    title,
    description: `Support for ${game.name}.`,
    alternates: { canonical: `/${game.slug}/support/` },
    openGraph: { title, url: `/${game.slug}/support/` },
  };
}

export default async function SupportPage({ params }: { params: Promise<{ game: string }> }) {
  const game = getGame((await params).game);
  return <LegalPage game={game} doc={hostedLegal[game.slug].support} />;
}
