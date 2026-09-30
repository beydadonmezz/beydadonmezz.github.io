"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { profile } from "@/data/profile";
import { Marquee } from "./Marquee";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function About() {
  const { about, experience, education, skills, highlights } = profile;

  return (
    <section id="about" aria-labelledby="about-title" className="relative py-28 md:py-40">
      <div className="gutter">
        <SectionLabel index="01">About</SectionLabel>
        <h2 id="about-title" className="sr-only">
          About
        </h2>
        <Statement text={about.statement} />

        <div className="mt-20 grid gap-16 md:mt-32 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="mb-5 max-w-[46ch] text-lg leading-relaxed text-fg/80">{p}</p>
              </Reveal>
            ))}
            <Reveal className="mt-12 grid grid-cols-2 gap-6 border-t border-line pt-8">
              {about.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-6xl font-semibold tracking-tighter md:text-7xl">
                    {s.value}
                  </p>
                  <p className="eyebrow mt-2">{s.label}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <Reveal>
              <h3 className="eyebrow mb-6">Experience</h3>
            </Reveal>
            <ul className="border-t border-line">
              {experience.map((job, i) => (
                <Reveal as="li" key={job.company} delay={i * 0.08} className="border-b border-line py-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <p className="font-display text-2xl font-medium tracking-tight md:text-3xl">
                      {job.company}
                    </p>
                    <p className="font-mono text-xs text-muted">{job.period}</p>
                  </div>
                  <p className="mt-1 text-fg/70">
                    {job.role} · {job.place}
                  </p>
                  {job.summary && <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-muted">{job.summary}</p>}
                </Reveal>
              ))}
              <Reveal as="li" className="border-b border-line py-7">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <p className="font-display text-2xl font-medium tracking-tight md:text-3xl">{education.school}</p>
                  <p className="font-mono text-xs text-muted">{education.period}</p>
                </div>
                <p className="mt-1 text-fg/70">{education.degree}</p>
              </Reveal>
            </ul>
          </div>
        </div>

        <div className="mt-24 md:mt-36">
          <Reveal>
            <h3 className="eyebrow mb-6">Selected clients &amp; recognition</h3>
          </Reveal>
          <ul className="grid border-t border-line sm:grid-cols-2">
            {highlights.map((h, i) => (
              <Reveal
                as="li"
                key={h.name}
                delay={(i % 2) * 0.06}
                y={20}
                className="flex flex-col justify-center gap-1 border-b border-line py-5 sm:odd:pr-8 sm:even:border-l sm:even:pl-8"
              >
                <span className="font-display text-xl font-medium tracking-tight">{h.name}</span>
                {h.note && <span className="text-sm text-muted">{h.note}</span>}
              </Reveal>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-24 md:mt-36" aria-label="Skills">
        <h3 className="gutter eyebrow mb-6">Toolbox</h3>
        <Marquee
          items={skills}
          duration={55}
          separator="/"
          className="border-y border-line py-6 font-display text-3xl font-medium tracking-tight text-fg/85 md:text-5xl"
        />
      </div>
    </section>
  );
}

/** Large statement whose words light up as it scrolls through the viewport. */
function Statement({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");

  return (
    <p
      ref={ref}
      className="mt-10 max-w-[22ch] font-display text-[clamp(2.1rem,5.6vw,5.5rem)] leading-[1.02] font-medium tracking-[-0.035em]"
    >
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {w}
        </Word>
      ))}
    </p>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  // 0 → 1 as the word scrolls in; the dimmed floor (--dim) is a theme token so
  // unlit words always keep 3:1 contrast.
  const lit = useTransform(progress, range, [0, 1]);
  return (
    <>
      <motion.span
        className="opacity-[calc(var(--dim)+(1-var(--dim))*var(--lit))]"
        style={{ "--lit": lit } as unknown as React.CSSProperties}
      >
        {children}
      </motion.span>{" "}
    </>
  );
}
