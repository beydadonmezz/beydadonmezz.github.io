import { notFound } from "next/navigation";
import { games } from "@/data/games";
import type { Game } from "@/data/types";

export function getGame(slug: string) {
  const game = games.find((g) => g.slug === slug);
  if (!game) notFound();
  return game;
}

/** Inline CSS variables for a game; pair with the `game-scope` class (see globals.css). */
export function gameStyle(game: Pick<Game, "theme">) {
  return {
    "--game-accent": game.theme.accent,
    "--game-accent-light": game.theme.accentOnLight,
    "--game-secondary": game.theme.secondary,
  } as React.CSSProperties;
}
