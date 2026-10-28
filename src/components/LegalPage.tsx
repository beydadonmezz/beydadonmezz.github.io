import type { Game, LegalDoc, LegalSection } from "@/data/types";
import { SectionLabel } from "./SectionLabel";

export type LegalNavLink = { href: string; label: string; current?: boolean };
export type LegalAlternate = { href: string; label: string; lang: string; title: string };

const words = {
  en: { effective: "Effective", updated: "Last updated", policy: "Policy", help: "Help", pages: "Pages" },
  tr: { effective: "Yürürlük tarihi", updated: "Son güncelleme", policy: "Politika", help: "Yardım", pages: "Sayfalar" },
};

/**
 * A privacy policy, terms or support page hosted on this site, in the game pages' type and spacing.
 * `nav` links the game's other hosted pages in the same language; `alternate` is the same page in the other language.
 */
export function LegalPage({
  game,
  doc,
  lang = "en",
  nav,
  alternate,
  label,
}: {
  game: Game;
  doc: LegalDoc;
  lang?: "en" | "tr";
  nav?: LegalNavLink[];
  alternate?: LegalAlternate;
  /** Section label next to the text; defaults to "Policy" (dated docs) or "Help". */
  label?: string;
}) {
  const w = words[lang];
  return (
    <main id="main" tabIndex={-1} lang={lang}>
      <section className="gutter relative overflow-hidden pt-12 pb-14 md:pt-20 md:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-72 left-1/2 size-[110vw] max-w-[1100px] max-h-[1100px] -translate-x-1/2 rounded-full opacity-20 md:left-[75%]"
          style={{ background: "radial-gradient(closest-side, var(--game-accent), transparent)" }}
        />
        <div className="relative">
          <p className="eyebrow" style={{ color: "var(--game-fg)" }}>
            {game.name}
            {doc.effective && (
              <>
                {" · "}
                {w.effective} {doc.effective}
              </>
            )}
            {doc.updated && (
              <>
                {" · "}
                {w.updated} {doc.updated}
              </>
            )}
          </p>
          <h1
            tabIndex={-1}
            className="mt-4 font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.9] font-semibold tracking-[-0.05em] break-words"
          >
            {doc.title}
          </h1>
          {doc.intro && (
            <p className="mt-8 max-w-[52ch] text-[clamp(1.15rem,1.8vw,1.4rem)] leading-snug tracking-tight">{doc.intro}</p>
          )}
          {(nav || alternate) && (
            <nav aria-label={w.pages} className="mt-10 flex flex-wrap items-center gap-2.5 text-sm">
              {nav?.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  aria-current={l.current ? "page" : undefined}
                  className={`rounded-full border px-4 py-2 transition-colors duration-500 ${
                    l.current ? "border-fg/40 text-fg" : "border-line text-fg/75 hover:border-fg/30 hover:text-fg"
                  }`}
                >
                  {l.label}
                </a>
              ))}
              {alternate && (
                <a
                  href={alternate.href}
                  hrefLang={alternate.lang}
                  lang={alternate.lang}
                  title={alternate.title}
                  className="rounded-full px-4 py-2 text-fg/75 underline underline-offset-4 transition-colors hover:text-fg"
                >
                  {alternate.label}
                </a>
              )}
            </nav>
          )}
        </div>
      </section>

      <section className="gutter border-t border-line py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel index="01">{label ?? (doc.effective ? w.policy : w.help)}</SectionLabel>
          </div>
          <div className="space-y-12 md:col-span-8">
            {doc.summary && (
              <div className="rounded-3xl border border-line bg-bg-raised p-7 md:p-8">
                <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{doc.summary.heading}</h2>
                <ul className="mt-5 max-w-[68ch] list-disc space-y-2 pl-5 text-lg leading-relaxed text-fg/75">
                  {doc.summary.items.map((li, j) => (
                    <li key={j}>{li}</li>
                  ))}
                </ul>
              </div>
            )}
            {doc.sections.map((s) => (
              <div key={s.heading} id={s.id} className="scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{s.heading}</h2>
                <Body section={s} />
                {s.subsections?.map((sub) => (
                  <div key={sub.heading} id={sub.id} className="mt-8 scroll-mt-28">
                    <h3 className="font-display text-xl font-semibold tracking-tight">{sub.heading}</h3>
                    <Body section={sub} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Body({ section }: { section: LegalSection }) {
  if (section.body.length === 0) return null;
  return (
    <div className="mt-4 space-y-4">
      {section.body.map((b, i) =>
        Array.isArray(b) ? (
          <ul key={i} className="max-w-[68ch] list-disc space-y-2 pl-5 text-lg leading-relaxed text-fg/75">
            {b.map((li, j) => (
              <li key={j}>{li}</li>
            ))}
          </ul>
        ) : (
          <p key={i} className="max-w-[68ch] text-lg leading-relaxed text-fg/75">
            {b}
          </p>
        ),
      )}
    </div>
  );
}
