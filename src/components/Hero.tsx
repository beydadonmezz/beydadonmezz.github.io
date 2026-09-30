"use client";

import { useLenis } from "lenis/react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { profile } from "@/data/profile";
import { scrollToId } from "@/lib/scroll";
import { LocalTime } from "./LocalTime";
import { Magnetic } from "./Magnetic";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const lenis = useLenis();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const [lead, emphasis, rest] = splitHeadline(profile.headline, "animation-rich");

  return (
    <section
      id="top"
      ref={ref}
      aria-label="Introduction"
      className="gutter relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-28 pb-10 md:pb-14"
    >
      <motion.div
        aria-hidden
        style={{ y: glowY }}
        className="pointer-events-none absolute -top-[30vh] right-[-20vw] size-[90vw] max-w-[1100px] max-h-[1100px] rounded-full bg-[radial-gradient(closest-side,rgb(220_247_110/0.16),transparent)] md:right-[-10vw]"
      />

      <div className="relative mb-auto flex flex-wrap items-start justify-between gap-4 pt-6">
        <p className="eyebrow fade-in" style={{ "--i": 0 } as React.CSSProperties}>
          <span className="text-fg">{profile.title}</span>
        </p>
        <p className="eyebrow fade-in text-right" style={{ "--i": 1 } as React.CSSProperties}>
          {profile.location} · <LocalTime timeZone={profile.timeZone} className="text-fg" />
        </p>
      </div>

      <motion.h1
        style={{ y: nameY }}
        className="relative mt-16 font-display text-[21vw] md:text-[clamp(3.6rem,17.5vw,17.5rem)] leading-[0.84] font-semibold tracking-[-0.055em]"
      >
        <span className="reveal-line">
          <span style={{ "--i": 0 } as React.CSSProperties}>{profile.firstName}</span>
        </span>
        <span className="reveal-line text-right md:pr-[4vw]">
          <span style={{ "--i": 1 } as React.CSSProperties}>
            {profile.lastName}
            <span className="text-accent">.</span>
          </span>
        </span>
        <span className="sr-only">, {profile.title}</span>
      </motion.h1>

      <div className="relative mt-10 grid gap-8 md:mt-14 md:grid-cols-12 md:items-end">
        <p
          className="rise-in max-w-[34ch] text-[clamp(1.25rem,2.2vw,1.9rem)] leading-[1.25] tracking-tight md:col-span-7"
          style={{ "--i": 2 } as React.CSSProperties}
        >
          {lead}
          <em className="font-serif text-[1.12em] font-normal text-accent">{emphasis}</em>
          {rest}
        </p>
        <div
          className="fade-in flex flex-wrap gap-3 md:col-span-5 md:justify-end"
          style={{ "--i": 3 } as React.CSSProperties}
        >
          <Magnetic>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("projects", lenis);
              }}
              className="group inline-flex h-14 items-center gap-3 rounded-full bg-accent px-7 font-medium text-accent-ink transition-transform duration-500 active:scale-95"
            >
              See the work
              <span aria-hidden className="transition-transform duration-500 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("contact", lenis);
              }}
              className="inline-flex h-14 items-center rounded-full border border-fg/25 px-7 font-medium transition-colors duration-500 hover:border-fg hover:bg-fg hover:text-bg"
            >
              Get in touch
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}

function splitHeadline(text: string, word: string): [string, string, string] {
  const i = text.indexOf(word);
  if (i === -1) return [text, "", ""];
  return [text.slice(0, i), word, text.slice(i + word.length)];
}
