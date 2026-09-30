import type Lenis from "lenis";

/** Smooth-scroll to an in-page section, falling back to native scrolling. */
export function scrollToId(id: string, lenis?: Lenis | null) {
  const el = document.getElementById(id);
  if (!el) return false;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (lenis && !reduce) {
    lenis.scrollTo(el, { offset: id === "top" ? 0 : -24, duration: 1.4 });
  } else {
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }
  history.replaceState(null, "", id === "top" ? "/" : `/#${id}`);
  return true;
}
