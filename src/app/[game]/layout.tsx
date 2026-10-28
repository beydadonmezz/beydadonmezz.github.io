import { Footer } from "@/components/Footer";
import { GameHeader } from "@/components/GameHeader";
import { generatedGameParams, getGame, gameStyle } from "@/lib/games";

export const dynamicParams = false;

export function generateStaticParams() {
  return generatedGameParams();
}

export default async function GameLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ game: string }>;
}) {
  const game = getGame((await params).game);

  return (
    <div className="game-scope" style={gameStyle(game)}>
      <GameHeader game={game} />
      {children}
      <Footer />
    </div>
  );
}
