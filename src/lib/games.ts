import { notFound } from "next/navigation";
import { games } from "@/data/games";

export function getGame(slug: string) {
  const game = games.find((g) => g.slug === slug);
  if (!game) notFound();
  return game;
}

export function gameStyle(game: { theme: { accent: string; secondary: string } }) {
  return {
    "--game-accent": game.theme.accent,
    "--game-secondary": game.theme.secondary,
  } as React.CSSProperties;
}
