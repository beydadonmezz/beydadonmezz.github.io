"use client";

import { useLenis } from "lenis/react";
import { profile } from "@/data/profile";
import { LocalTime } from "./LocalTime";

export function Footer() {
  const lenis = useLenis();

  function toTop() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (lenis && !reduce) lenis.scrollTo(0, { duration: 1.6 });
    else window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    // Move focus to the page's main heading (not the skip link), so keyboard
    // and screen-reader users continue from the top without a visible artefact.
    document.querySelector<HTMLElement>("main h1")?.focus({ preventScroll: true });
  }

  return (
    <footer className="gutter border-t border-line pt-10 pb-8">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">
            {profile.title} · {profile.location} · <LocalTime timeZone={profile.timeZone} />
          </p>
        </div>
        <button
          type="button"
          onClick={toTop}
          className="group inline-flex h-12 items-center gap-3 rounded-full border border-line px-5 text-sm transition-colors duration-500 hover:border-fg"
        >
          Back to top
          <span aria-hidden className="transition-transform duration-500 group-hover:-translate-y-0.5">
            ↑
          </span>
        </button>
      </div>
      <div className="mt-10 flex flex-wrap justify-between gap-4 border-t border-line pt-6 font-mono text-xs text-muted">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <ul className="flex gap-5">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fg">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
