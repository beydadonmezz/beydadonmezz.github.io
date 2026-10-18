import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { hostedLegal, hostedLegalSlugs } from "@/data/legal";
import { getGame } from "@/lib/games";

export const dynamicParams = false;

/** Only games whose legal pages live on this site (src/data/legal/) get /<slug>/privacy/. */
export function generateStaticParams() {
  return hostedLegalSlugs.map((game) => ({ game }));
}

export async function generateMetadata({ params }: { params: Promise<{ game: string }> }): Promise<Metadata> {
  const game = getGame((await params).game);
  const title = `Privacy Policy · ${game.name}`;
  return {
    title,
    description: `Privacy Policy for ${game.name}.`,
    alternates: { canonical: `/${game.slug}/privacy/` },
    openGraph: { title, url: `/${game.slug}/privacy/` },
  };
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ game: string }> }) {
  const game = getGame((await params).game);
  return <LegalPage game={game} doc={hostedLegal[game.slug].privacy} />;
}
