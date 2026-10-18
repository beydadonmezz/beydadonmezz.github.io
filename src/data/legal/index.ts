import type { HostedLegal } from "../types";
import { quiltdokuLegal } from "./quiltdoku";

/**
 * Games whose privacy policy and support page live on this site (/<slug>/privacy/, /<slug>/support/).
 * Every other game publishes them elsewhere and `legal` in games.ts only links to them.
 */
export const hostedLegal: Record<string, HostedLegal> = {
  quiltdoku: quiltdokuLegal,
};

export const hostedLegalSlugs = Object.keys(hostedLegal);
