"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Game } from "@/data/types";
import { GameIcon } from "./GameIcon";

export function GameHeader({ game, legal }: { game: Game; legal: { href: string; label: string }[] }) {
  const pathname = usePathname();
  const links = [{ href: `/${game.slug}/`, label: "Overview" }, ...legal];

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

        <nav aria-label={`${game.name} pages`} className="hidden md:block">
          <ul className="flex gap-1 text-sm">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full px-3.5 py-2 transition-colors ${
                      active ? "bg-fg text-bg" : "text-fg/75 hover:text-fg"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <span className="w-9 md:hidden" aria-hidden />
      </div>
      <nav aria-label={`${game.name} pages`} className="gutter border-t border-line md:hidden">
        <ul className="-mx-2 flex gap-1 overflow-x-auto py-2 text-sm">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href} className="shrink-0">
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-full px-3.5 py-2 ${active ? "bg-fg text-bg" : "text-fg/75"}`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
