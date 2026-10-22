import type { HostedLegal } from "../types";

/**
 * Games whose privacy policy and support page live on this site (/<slug>/privacy/, /<slug>/support/).
 * Every other game publishes them elsewhere and `legal` in games.ts only links to them.
 */
export const hostedLegal: Record<string, HostedLegal> = {};
// Quiltdoku (the only hosted game) was retired on 2026-10-23: /quiltdoku/... are static redirects in public/quiltdoku/.

export const hostedLegalSlugs = Object.keys(hostedLegal);
