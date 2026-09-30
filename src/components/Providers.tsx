"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig, useReducedMotion } from "motion/react";

export function Providers({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user" transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.9 }}>
      {reduce ? (
        children
      ) : (
        <ReactLenis root options={{ lerp: 0.1, wheelMultiplier: 1, anchors: false }}>
          {children}
        </ReactLenis>
      )}
    </MotionConfig>
  );
}
