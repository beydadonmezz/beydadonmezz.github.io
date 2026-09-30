import type { Metadata } from "next";
import Link from "next/link";
import { AppStoreButton } from "@/components/AppStoreButton";
import { GameIcon } from "@/components/GameIcon";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { games } from "@/data/games";
import { profile } from "@/data/profile";
import { getGame } from "@/lib/games";
import { hasLegal, legalTitles, type LegalKind } from "@/lib/legal";

export const dynamicParams = false;

export function generateStaticParams() {
  return games.map((g) => ({ game: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ game: string }> }): Promise<Metadata> {
  const game = getGame((await params).game);
  const title = `${game.name}: ${game.subtitle}`;
  return {
    title,
    description: game.tagline,
    alternates: { canonical: `/${game.slug}/` },
    openGraph: {
      title,
      description: game.tagline,
      url: `/${game.slug}/`,
      images: game.iconLarge
        ? [{ url: game.iconLarge, width: 1024, height: 1024, alt: `${game.name} app icon` }]
        : ["/og.png"],
    },
    twitter: { card: "summary", title, description: game.tagline },
  };
}

export default async function GamePage({ params }: { params: Promise<{ game: string }> }) {
  const game = getGame((await params).game);
  const shots = game.screenshots;
  const kinds: LegalKind[] = ["support", "privacy", ...(hasLegal(game.slug, "terms") ? (["terms"] as const) : [])];
  const others = games.filter((g) => g.slug !== game.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: game.name,
    description: game.tagline,
    gamePlatform: game.platforms,
    operatingSystem: "iOS",
    applicationCategory: "Game",
    author: { "@type": "Person", name: profile.name, url: profile.siteUrl },
    ...(game.iconLarge ? { image: `${profile.siteUrl}${game.iconLarge}` } : {}),
    ...(game.appStoreUrl ? { url: game.appStoreUrl } : {}),
  };

  return (
    <main id="main">
      {/* Hero */}
      <section className="gutter relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
        <div
          aria-hidden
          className="pointer-events-none absolute top-[-20%] left-1/2 size-[140vw] max-w-[1400px] max-h-[1400px] -translate-x-1/2 rounded-full opacity-30 md:left-[70%]"
          style={{ background: "radial-gradient(closest-side, var(--game-accent), transparent)" }}
        />
        <div className="relative grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <GameIcon game={game} size={112} className="max-md:!size-24" />
            <p className="eyebrow mt-10" style={{ color: "var(--game-accent)" }}>
              {game.subtitle}
            </p>
            <h1
              className={`mt-4 font-display leading-[0.9] font-semibold tracking-[-0.05em] break-words ${
                game.name.length > 16
                  ? "text-[clamp(2.75rem,7vw,6.5rem)]"
                  : "text-[clamp(3.25rem,11vw,9.5rem)]"
              }`}
            >
              {game.name}
            </h1>
            <p className="mt-8 max-w-[30ch] text-[clamp(1.25rem,2.2vw,1.75rem)] leading-snug tracking-tight">
              {game.tagline}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <AppStoreButton game={game} />
              <p className="text-sm text-muted">
                {game.platforms}
                {game.officialLinks.website && (
                  <>
                    {" · "}
                    <a
                      href={game.officialLinks.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-fg/80 underline underline-offset-4 hover:text-fg"
                    >
                      {new URL(game.officialLinks.website).hostname}
                    </a>
                  </>
                )}
              </p>
            </div>
          </div>

          {shots.length > 0 && (
            <div className="relative mx-auto flex w-full max-w-md justify-center lg:col-span-5 lg:max-w-none">
              {shots[1] && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={shots[1].src}
                  alt=""
                  width={shots[1].width}
                  height={shots[1].height}
                  className="absolute top-8 left-[4%] w-[52%] rotate-[-8deg] rounded-[1.6rem] opacity-70 shadow-2xl shadow-black/60"
                />
              )}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={shots[0].src}
                alt={shots[0].alt}
                width={shots[0].width}
                height={shots[0].height}
                fetchPriority="high"
                className="relative w-[60%] translate-x-[18%] rotate-[4deg] rounded-[1.8rem] shadow-2xl shadow-black/70"
              />
            </div>
          )}
        </div>
      </section>

      {/* About the game */}
      <section className="gutter border-t border-line py-20 md:py-32" aria-labelledby="about-game">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel index="01">The game</SectionLabel>
            <h2 id="about-game" className="sr-only">
              About {game.name}
            </h2>
          </div>
          <div className="space-y-6 md:col-span-8">
            {game.description.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p
                  className={
                    i === 0
                      ? "font-display text-[clamp(1.6rem,3.4vw,2.75rem)] leading-[1.12] font-medium tracking-[-0.025em]"
                      : "max-w-[62ch] text-lg leading-relaxed text-fg/75"
                  }
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="gutter border-t border-line py-20 md:py-32" aria-labelledby="features">
        <SectionLabel index="02">Highlights</SectionLabel>
        <h2 id="features" className="sr-only">
          Highlights
        </h2>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {game.features.map((f, i) => (
            <Reveal
              as="li"
              key={f.title}
              delay={(i % 3) * 0.08}
              className="rounded-3xl border border-line bg-bg-raised p-7 md:p-8"
            >
              <span className="font-mono text-xs" style={{ color: "var(--game-accent)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-3 leading-relaxed text-fg/70">{f.body}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Screenshots */}
      {shots.length > 0 && (
        <section className="border-t border-line py-20 md:py-32" aria-labelledby="screens">
          <div className="gutter">
            <SectionLabel index="03">Screenshots</SectionLabel>
            <h2 id="screens" className="sr-only">
              Screenshots
            </h2>
          </div>
          <ul
            className="gutter mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 [scrollbar-width:thin] md:gap-6"
            tabIndex={0}
            aria-label={`${game.name} screenshots, scroll horizontally`}
          >
            {shots.map((s) => (
              <li key={s.src} className="w-[68vw] max-w-[320px] shrink-0 snap-start sm:w-[42vw]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.src}
                  alt={s.alt}
                  width={s.width}
                  height={s.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-[1.6rem] border border-line"
                />
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Help + legal */}
      <section className="gutter border-t border-line py-20 md:py-28" aria-labelledby="help">
        <SectionLabel index={shots.length ? "04" : "03"}>Help &amp; legal</SectionLabel>
        <h2 id="help" className="sr-only">
          Help and legal
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {kinds.map((k) => (
            <li key={k}>
              <Link
                href={`/${game.slug}/${k}/`}
                className="group flex h-full items-center justify-between rounded-2xl border border-line p-6 transition-colors duration-500 hover:border-fg/30"
              >
                <span className="font-display text-xl font-medium tracking-tight">{legalTitles[k]}</span>
                <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* More games */}
      <section className="gutter border-t border-line py-20 md:py-28" aria-labelledby="more-games">
        <h2 id="more-games" className="eyebrow">
          More games
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {others.map((g) => (
            <li key={g.slug}>
              <Link
                href={`/${g.slug}/`}
                className="group flex items-center gap-4 rounded-2xl border border-line p-4 transition-colors duration-500 hover:border-fg/30"
              >
                <GameIcon game={g} size={56} className="transition-transform duration-500 group-hover:-rotate-6" />
                <span className="min-w-0">
                  <span className="block truncate font-display text-lg font-semibold tracking-tight">{g.name}</span>
                  <span className="block truncate text-sm text-muted">{g.subtitle}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
