"use client";

import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";

const HEADER_OFFSET = 80; // matches `scroll-padding-top: 5rem` in globals.css

/**
 * Owns the scroll position across client-side navigations.
 *
 * Lenis animates towards its own target on every frame. If a link is clicked
 * while it is still gliding, that animation survives the route change and
 * drags the new page back to the old page's scroll position (clamped to the
 * new page's height), overriding Next.js's scroll-to-top. So on every pathname
 * change, in the same commit (before paint), this cancels the glide and sets
 * the position deterministically:
 *   - back/forward  → the position the page had when it was left
 *   - URL with hash → the anchor
 *   - otherwise     → the top
 */
export function ScrollManager() {
  const pathname = usePathname();
  const lenis = useLenis();
  const lenisRef = useRef(lenis);
  lenisRef.current = lenis;
  const pathRef = useRef(pathname);
  const positions = useRef(new Map<string, number>());
  const isPop = useRef(false);
  const first = useRef(true);
  // Scroll position at the moment a link was clicked (Lenis may keep gliding
  // until the route commits; "back" should return to where the user clicked).
  const leaving = useRef<{ path: string; y: number } | null>(null);

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    const onPop = () => {
      isPop.current = true;
    };
    // Remember where each page was, so browser back can return to it.
    const onScroll = () => positions.current.set(pathRef.current, window.scrollY);
    const onClick = (e: MouseEvent) => {
      if ((e.target as Element | null)?.closest?.("a[href]")) {
        leaving.current = { path: pathRef.current, y: window.scrollY };
      }
    };
    window.addEventListener("popstate", onPop);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick, true);
    return () => {
      window.removeEventListener("popstate", onPop);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  useLayoutEffect(() => {
    const prev = pathRef.current;
    if (leaving.current?.path === prev && prev !== pathname) positions.current.set(prev, leaving.current.y);
    leaving.current = null;
    pathRef.current = pathname;
    // The first render is a full page load: the browser already placed it.
    if (first.current) {
      first.current = false;
      return;
    }
    // From here on, page transitions may animate (see .page-enter in globals.css).
    document.documentElement.dataset.nav = "client";
    const pop = isPop.current;
    isPop.current = false;

    let y = 0;
    const hash = decodeURIComponent(window.location.hash.slice(1));
    const anchor = hash ? document.getElementById(hash) : null;
    if (pop && positions.current.has(pathname)) y = positions.current.get(pathname)!;
    else if (anchor) y = anchor.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    y = Math.max(0, Math.min(y, document.documentElement.scrollHeight - window.innerHeight));

    const l = lenisRef.current;
    // Stop any in-flight glide explicitly: Lenis.scrollTo() returns early (and
    // leaves a running duration animation alone) when the target equals its
    // current target, so it can't be relied on to cancel the animation.
    // stop() and start() both reset() Lenis, which stops the animation and
    // syncs its internal position to the real one.
    l?.stop();
    l?.resize(); // the new page's height
    window.scrollTo(0, y);
    l?.start();
    positions.current.set(pathname, y);
  }, [pathname]);

  return null;
}
