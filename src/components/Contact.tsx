"use client";

import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { profile } from "@/data/profile";
import { Magnetic } from "./Magnetic";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = profile.email;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2400);
  }

  const [user, domain] = profile.email.split("@");

  return (
    <section id="contact" aria-labelledby="contact-title" className="gutter relative overflow-hidden py-28 md:py-40">
      <SectionLabel index="04">Contact</SectionLabel>
      <Reveal>
        <h2
          id="contact-title"
          className="mt-10 font-display text-[clamp(3rem,9vw,8.5rem)] leading-[0.9] font-semibold tracking-[-0.05em]"
        >
          Let&rsquo;s build
          <br />
          something <span className="font-serif font-normal tracking-[-0.02em] text-accent italic">good</span>
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-16 md:mt-24">
        <button
          type="button"
          onClick={copy}
          className="group block w-full border-y border-line py-8 text-left md:py-12"
          aria-describedby="copy-hint"
        >
          <span className="eyebrow mb-4 flex items-center gap-2" id="copy-hint">
            <span className="relative inline-grid h-4 overflow-hidden">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={copied ? "done" : "idle"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.35 }}
                  className={copied ? "text-accent" : undefined}
                >
                  {copied ? "✓ Copied to clipboard" : "Click to copy email"}
                </motion.span>
              </AnimatePresence>
            </span>
          </span>
          <span className="block font-display text-[clamp(1.6rem,8.2vw,6.5rem)] leading-none font-medium tracking-[-0.04em] break-words transition-colors duration-500 group-hover:text-accent">
            {user}
            <wbr />
            <span className="text-muted transition-colors duration-500 group-hover:text-accent/70">@{domain}</span>
          </span>
        </button>
        <span className="sr-only" role="status" aria-live="polite">
          {copied ? "Email address copied to clipboard" : ""}
        </span>
      </Reveal>

      <Reveal delay={0.15} className="mt-10 flex flex-wrap items-center gap-3">
        <Magnetic>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-14 items-center gap-3 rounded-full bg-accent px-7 font-medium text-accent-ink active:scale-95"
          >
            Write an email <span aria-hidden>→</span>
          </a>
        </Magnetic>
        {profile.socials.map((s) => (
          <Magnetic key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center gap-2 rounded-full border border-fg/25 px-7 font-medium transition-colors duration-500 hover:border-fg hover:bg-fg hover:text-bg"
            >
              {s.label} <span aria-hidden>↗</span>
            </a>
          </Magnetic>
        ))}
      </Reveal>
    </section>
  );
}
