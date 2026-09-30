"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "li" | "section" | "p" | "span";
};

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

/**
 * Fades and lifts content in when it scrolls into view (plain CSS transition).
 *
 * Content is visible by default (server HTML, no JS, reduced motion). It is
 * only hidden, and then revealed on intersection, when it starts fully below
 * the fold, so anything in or above the viewport on load or after navigation
 * is never left invisible. Measured in useEffect, i.e. after ScrollManager has
 * placed the scroll position for the new page.
 */
export function Reveal({ children, className, delay = 0, y = 32, as = "div" }: Props) {
  const Comp = as;
  const ref = useRef<HTMLElement>(null);
  const reduce = usePrefersReducedMotion();
  const [state, setState] = useState<"visible" | "waiting" | "revealing">("visible");

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return; // in or above the viewport
    setState("waiting");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setState("revealing");
        io.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  const style: React.CSSProperties | undefined =
    state === "waiting"
      ? { opacity: 0, transform: `translate3d(0, ${y}px, 0)` }
      : state === "revealing"
        ? { transition: `opacity 1s ${EASE} ${delay}s, transform 1s ${EASE} ${delay}s` }
        : undefined;

  return (
    <Comp ref={ref as React.Ref<never>} className={className} style={style}>
      {children}
    </Comp>
  );
}
