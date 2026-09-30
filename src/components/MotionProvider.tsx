"use client";

import { MotionConfig } from "motion/react";

/** Motion defaults for the pages that use it (the home page). */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.9 }}>
      {children}
    </MotionConfig>
  );
}
