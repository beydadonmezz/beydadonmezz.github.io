"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** TR / EN switch for the LINGRID pages (shown in the game header). */
export function LangSwitch({ slug }: { slug: string }) {
  const path = usePathname() ?? "";
  if (slug !== "lingrid" || !path.startsWith("/lingrid")) return null;
  const onEn = path.replace(/\/+$/, "") === "/lingrid/en";
  return (
    <Link
      href={onEn ? "/lingrid/" : "/lingrid/en/"}
      hrefLang={onEn ? "tr" : "en"}
      className="inline-flex h-9 items-center rounded-full border border-line px-3 font-mono text-xs tracking-wide text-fg/85 transition-colors hover:border-fg"
      aria-label={onEn ? "Türkçe sürüm" : "English version"}
    >
      {onEn ? "TR" : "EN"}
    </Link>
  );
}
