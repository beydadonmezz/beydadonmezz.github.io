import Link from "next/link";
import type { Game } from "@/data/types";
import { getLegal, legalTitles, type LegalKind } from "@/lib/legal";
import { GameIcon } from "./GameIcon";

export function LegalPage({ game, kind, children }: { game: Game; kind: LegalKind; children?: React.ReactNode }) {
  const doc = getLegal(game.slug, kind);
  const title = legalTitles[kind];

  return (
    <main id="main" className="gutter pt-14 pb-28 md:pt-20">
      <div className="mx-auto max-w-3xl">
        <Link href={`/${game.slug}/`} className="inline-flex items-center gap-3">
          <GameIcon game={game} size={48} />
          <span className="text-sm text-fg/75">{game.name}</span>
        </Link>
        <h1 className="mt-8 font-display text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95] font-semibold tracking-[-0.045em]">
          {title}
        </h1>

        {doc && game.officialLinks[kind] && (
          <p className="mt-6 max-w-[60ch] text-sm text-muted">
            Also published at{" "}
            <a
              href={game.officialLinks[kind]}
              className="break-all text-fg/80 underline underline-offset-4 hover:text-fg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {game.officialLinks[kind]!.replace(/^https:\/\//, "")}
            </a>
            .
          </p>
        )}

        {children}

        {doc ? (
          <article className="prose-legal mt-12" dangerouslySetInnerHTML={{ __html: doc.html }} />
        ) : (
          kind !== "support" && <TodoBlock game={game} kind={kind} />
        )}
      </div>
    </main>
  );
}

export function TodoBlock({ game, kind }: { game: Game; kind: LegalKind }) {
  return (
    <div
      role="note"
      className="mt-12 rounded-2xl border-2 border-dashed border-amber-400/60 bg-amber-400/5 p-6 md:p-8"
    >
      <p className="font-mono text-xs tracking-widest text-amber-300 uppercase">TODO · Not yet published</p>
      <p className="mt-3 text-lg text-fg">
        The {legalTitles[kind].toLowerCase()} for {game.name} hasn&rsquo;t been published yet.
      </p>
      <p className="mt-2 text-fg/70">
        Add it as <code className="font-mono text-sm text-fg">src/content/legal/{game.slug}/{kind}.md</code> and
        rebuild. Until then, questions can be sent to{" "}
        <a className="underline underline-offset-4" href={`mailto:${game.supportEmail ?? "beydaacar1@gmail.com"}`}>
          {game.supportEmail ?? "beydaacar1@gmail.com"}
        </a>
        .
      </p>
    </div>
  );
}
