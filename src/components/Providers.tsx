"use client";

import { ReactLenis } from "lenis/react";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";
import { ScrollManager } from "./ScrollManager";

/**
 * Site-wide providers: smooth scroll (off for reduced motion) and scroll
 * management. Motion's config lives in MotionProvider on the home page only,
 * so game pages don't download the animation library.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  const reduce = usePrefersReducedMotion();

  return reduce ? (
    <>
      <ScrollManager />
      {children}
    </>
  ) : (
    <ReactLenis root options={{ lerp: 0.1, wheelMultiplier: 1, anchors: false }}>
      <ScrollManager />
      {children}
    </ReactLenis>
  );
}
