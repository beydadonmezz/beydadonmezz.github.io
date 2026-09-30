import { Footer } from "@/components/Footer";
import { GameHeader } from "@/components/GameHeader";
import { games } from "@/data/games";
import { getGame, gameStyle } from "@/lib/games";
import { hasLegal, type LegalKind } from "@/lib/legal";

export const dynamicParams = false;

export function generateStaticParams() {
  return games.map((g) => ({ game: g.slug }));
}

export default async function GameLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ game: string }>;
}) {
  const game = getGame((await params).game);
  const kinds: LegalKind[] = ["support", "privacy", ...(hasLegal(game.slug, "terms") ? (["terms"] as const) : [])];
  const short: Record<LegalKind, string> = { support: "Support", privacy: "Privacy", terms: "Terms" };
  const legal = kinds.map((k) => ({ href: `/${game.slug}/${k}/`, label: short[k] }));

  return (
    <div style={gameStyle(game)}>
      <GameHeader game={game} legal={legal} />
      {children}
      <Footer />
    </div>
  );
}
