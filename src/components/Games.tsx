import Link from "next/link";
import type { Game } from "@/data/types";
import { GameIcon } from "./GameIcon";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Games({ games }: { games: Game[] }) {
  return (
    <section id="games" aria-labelledby="games-title" className="gutter relative py-28 md:py-40">
      <SectionLabel index="03">Games</SectionLabel>
      <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
        <Reveal className="md:col-span-8">
          <h2
            id="games-title"
            className="font-display text-[clamp(3rem,9vw,8.5rem)] leading-[0.9] font-semibold tracking-[-0.05em]"
          >
            Indie
            <span className="font-serif font-normal tracking-[-0.02em] text-accent italic"> games</span>
          </h2>
        </Reveal>
        <Reveal className="md:col-span-4" delay={0.1}>
          <p className="max-w-[38ch] text-lg leading-relaxed text-fg/75">
            Independent iOS games I design and build end to end, from the first prototype to the App Store.
          </p>
        </Reveal>
      </div>

      <ul className="mt-16 grid gap-4 md:mt-24 md:grid-cols-2 md:gap-5">
        {games.map((game, i) => (
          <Reveal as="li" key={game.slug} delay={(i % 2) * 0.1}>
            <Link
              href={`/${game.slug}/`}
              className="group relative flex h-full min-h-[22rem] flex-col overflow-hidden rounded-[1.75rem] border border-line bg-bg-raised p-6 transition-colors duration-500 hover:border-fg/25 md:min-h-[28rem] md:p-9"
              style={{ "--game-accent": game.theme.accent } as React.CSSProperties}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-1/4 -bottom-1/2 size-[120%] rounded-full opacity-25 transition-[opacity,transform] duration-700 ease-out-expo group-hover:scale-110 group-hover:opacity-40"
                style={{ background: `radial-gradient(closest-side, ${game.theme.accent}, transparent)` }}
              />
              <span className="relative flex items-start justify-between gap-4">
                <GameIcon
                  game={game}
                  size={88}
                  className="transition-transform duration-700 ease-out-expo group-hover:-translate-y-1 group-hover:-rotate-6"
                />
                <span className="rounded-full border border-fg/15 bg-bg/40 px-3 py-1 font-mono text-[0.65rem] tracking-wider text-fg/80 uppercase backdrop-blur">
                  {game.appStoreUrl ? "On the App Store" : "Coming soon"}
                </span>
              </span>
              <span className="relative mt-auto block pt-16">
                <span className="block font-display text-4xl leading-none font-semibold tracking-[-0.03em] md:text-5xl">
                  {game.name}
                </span>
                <span className="mt-3 block max-w-[40ch] text-fg/70">{game.tagline}</span>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium" style={{ color: game.theme.accent }}>
                  Explore the game
                  <span aria-hidden className="transition-transform duration-500 ease-out-expo group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
