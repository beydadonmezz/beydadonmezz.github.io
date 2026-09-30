"use client";

import { useEffect, useRef, useState } from "react";
import { THEME_STORAGE_KEY, themeColors, type Theme } from "@/lib/theme";

const options: { value: Theme; label: string; icon: React.ReactNode }[] = [
  {
    value: "light",
    label: "Light",
    icon: (
      <svg viewBox="0 0 16 16" aria-hidden className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="8" cy="8" r="3" />
        <path
          strokeLinecap="round"
          d="M8 1.2v1.6M8 13.2v1.6M1.2 8h1.6M13.2 8h1.6M3.2 3.2l1.1 1.1M11.7 11.7l1.1 1.1M3.2 12.8l1.1-1.1M11.7 4.3l1.1-1.1"
        />
      </svg>
    ),
  },
  {
    value: "dark",
    label: "Dark",
    icon: (
      <svg viewBox="0 0 16 16" aria-hidden className="size-3.5" fill="currentColor">
        <path d="M13.6 10.2A6 6 0 0 1 5.8 2.4a6 6 0 1 0 7.8 7.8Z" />
      </svg>
    ),
  },
];

function readStored(): Theme | null {
  try {
    const v = localStorage.getItem(THEME_STORAGE_KEY);
    return v === "light" || v === "dark" ? v : null;
  } catch {
    return null;
  }
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce) {
    root.classList.add("theme-switching");
    window.setTimeout(() => root.classList.remove("theme-switching"), 500);
  }
  root.setAttribute("data-theme", theme);
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", themeColors[theme]);
}

/**
 * Light / Dark segmented control styled like the nav pill. The active pill is
 * positioned by CSS from <html data-theme>, so it is right before hydration.
 */
export function ThemeToggle({ compact = false, className = "" }: { compact?: boolean; className?: string }) {
  const [theme, setTheme] = useState<Theme | null>(null);
  const userChose = useRef(false);

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => {
      const t = root.getAttribute("data-theme");
      setTheme(t === "light" || t === "dark" ? t : null);
    };
    sync();
    // Keep several toggles (and other tabs' changes) in sync.
    const mo = new MutationObserver(sync);
    mo.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

    // Follow the system until the visitor picks a theme.
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onSystem = () => {
      if (!userChose.current && !readStored()) applyTheme(mq.matches ? "light" : "dark");
    };
    mq.addEventListener("change", onSystem);
    return () => {
      mo.disconnect();
      mq.removeEventListener("change", onSystem);
    };
  }, []);

  function choose(value: Theme) {
    userChose.current = true;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, value);
    } catch {
      // Storage unavailable (private mode, blocked): the choice lasts for this page view.
    }
    if (document.documentElement.getAttribute("data-theme") !== value) applyTheme(value);
  }

  return (
    <div
      role="group"
      aria-label="Colour theme"
      className={`relative grid grid-cols-2 rounded-full border border-line bg-bg-raised/60 p-1 backdrop-blur ${className}`}
    >
      <span
        aria-hidden
        className="theme-pill absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full bg-accent"
      />
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          data-value={o.value}
          aria-pressed={theme === o.value}
          onClick={() => choose(o.value)}
          className={`theme-seg relative z-10 flex items-center justify-center gap-1.5 rounded-full py-2 text-sm transition-colors duration-300 ${
            compact ? "px-2.5" : "px-4"
          }`}
        >
          {o.icon}
          <span className={compact ? "sr-only" : undefined}>{o.label}</span>
        </button>
      ))}
    </div>
  );
}
