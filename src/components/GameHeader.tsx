import Link from "next/link";
import type { Game } from "@/data/types";
import { GameIcon } from "./GameIcon";

export function GameHeader({ game }: { game: Game }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/75 backdrop-blur-xl">
      <div className="gutter flex h-16 items-center justify-between gap-4 md:h-20">
        <Link href="/#games" className="group flex min-w-0 items-center gap-3 text-sm">
          <span
            aria-hidden
            className="grid size-9 shrink-0 place-items-center rounded-full border border-line transition-transform duration-500 group-hover:-translate-x-0.5"
          >
            ←
          </span>
          <span className="hidden text-fg/75 sm:inline">All games</span>
          <span className="sr-only sm:hidden">Back to all games</span>
        </Link>

        <Link href={`/${game.slug}/`} className="flex min-w-0 items-center gap-2.5">
          <GameIcon game={game} size={28} />
          <span className="truncate font-display font-semibold tracking-tight">{game.name}</span>
        </Link>

        <a
          href={game.legal.privacy}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden text-sm text-fg/75 transition-colors hover:text-fg sm:inline"
        >
          Privacy ↗
        </a>
        <span className="w-9 sm:hidden" aria-hidden />
      </div>
    </header>
  );
}
