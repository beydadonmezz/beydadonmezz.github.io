"use client";

import { useLenis } from "lenis/react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { scrollToId } from "@/lib/scroll";

export const navLinks = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "games", label: "Games" },
  { id: "contact", label: "Contact" },
] as const;

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const lenis = useLenis();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > 240 && y > prev && !open);
  });

  // Highlight the section currently in view.
  useEffect(() => {
    if (!isHome) return;
    const els = ["top", ...navLinks.map((l) => l.id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id === "top" ? null : e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [isHome]);

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, lenis]);

  function go(e: React.MouseEvent, id: string) {
    if (!isHome) {
      setOpen(false);
      return; // let Next navigate to /#id
    }
    e.preventDefault();
    setOpen(false);
    // Wait a frame so the menu can release the scroll lock first.
    requestAnimationFrame(() => scrollToId(id, lenis));
  }

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className={`gutter flex h-16 items-center justify-between transition-[background-color,border-color,backdrop-filter] duration-500 md:h-20 ${
            scrolled || open
              ? "border-b border-line bg-bg/75 backdrop-blur-xl"
              : "border-b border-transparent"
          }`}
        >
          <Link
            href="/"
            onClick={(e) => go(e, "top")}
            className="group flex items-center gap-3 font-display text-base font-semibold tracking-tight"
            aria-label={`${profile.name}, home`}
          >
            <span className="grid size-8 place-items-center rounded-full bg-fg text-[0.8rem] font-bold text-bg transition-transform duration-500 group-hover:rotate-[-12deg]">
              BD
            </span>
            <span className="hidden sm:inline">{profile.name}</span>
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1 rounded-full border border-line bg-bg-raised/60 p-1 backdrop-blur">
              {navLinks.map((l) => {
                const isActive = isHome && active === l.id;
                return (
                  <li key={l.id} className="relative">
                    <Link
                      href={`/#${l.id}`}
                      onClick={(e) => go(e, l.id)}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative z-10 block rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                        isActive ? "text-accent-ink" : "text-fg/80 hover:text-fg"
                      }`}
                    >
                      {l.label}
                    </Link>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-accent"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <a
            href={`mailto:${profile.email}`}
            className="hidden items-center gap-2 text-sm text-fg/80 transition-colors hover:text-fg md:flex"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Say hello
          </a>

          <button
            type="button"
            className="relative grid size-11 place-items-center rounded-full border border-line md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span
              className={`absolute h-px w-4 bg-fg transition-transform duration-500 ${open ? "rotate-45" : "-translate-y-[3px]"}`}
            />
            <span
              className={`absolute h-px w-4 bg-fg transition-transform duration-500 ${open ? "-rotate-45" : "translate-y-[3px]"}`}
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-40 flex flex-col justify-between bg-bg px-[var(--gutter)] pt-24 pb-10 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <nav aria-label="Mobile">
              <ul className="space-y-1">
                {navLinks.map((l, i) => (
                  <li key={l.id} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.05 + i * 0.06, duration: 0.8 }}
                    >
                      <Link
                        href={`/#${l.id}`}
                        onClick={(e) => go(e, l.id)}
                        className="flex items-baseline gap-4 py-1 font-display text-6xl font-semibold tracking-tight"
                      >
                        <span className="font-mono text-xs text-accent">0{i + 1}</span>
                        {l.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </nav>
            <motion.div
              className="space-y-4 border-t border-line pt-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <a href={`mailto:${profile.email}`} className="block break-all text-lg">
                {profile.email}
              </a>
              <div className="flex gap-6 text-sm text-muted">
                {profile.socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label} ↗
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
