import type { Game, LegalDoc } from "@/data/types";
import { SectionLabel } from "./SectionLabel";

/** A privacy policy or support page hosted on this site, in the game pages' type and spacing. */
export function LegalPage({ game, doc }: { game: Game; doc: LegalDoc }) {
  return (
    <main id="main" tabIndex={-1}>
      <section className="gutter relative overflow-hidden pt-12 pb-14 md:pt-20 md:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-72 left-1/2 size-[110vw] max-w-[1100px] max-h-[1100px] -translate-x-1/2 rounded-full opacity-20 md:left-[75%]"
          style={{ background: "radial-gradient(closest-side, var(--game-accent), transparent)" }}
        />
        <div className="relative">
          <p className="eyebrow" style={{ color: "var(--game-fg)" }}>
            {game.name}
            {doc.effective && <> · Effective {doc.effective}</>}
          </p>
          <h1
            tabIndex={-1}
            className="mt-4 font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.9] font-semibold tracking-[-0.05em]"
          >
            {doc.title}
          </h1>
          {doc.intro && (
            <p className="mt-8 max-w-[52ch] text-[clamp(1.15rem,1.8vw,1.4rem)] leading-snug tracking-tight">{doc.intro}</p>
          )}
        </div>
      </section>

      <section className="gutter border-t border-line py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel index="01">{doc.effective ? "Policy" : "Help"}</SectionLabel>
          </div>
          <div className="space-y-12 md:col-span-8">
            {doc.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{s.heading}</h2>
                <div className="mt-4 space-y-4">
                  {s.body.map((b, i) =>
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
