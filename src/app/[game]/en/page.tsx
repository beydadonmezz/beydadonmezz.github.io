import type { Metadata } from "next";
import { LingridLanding, lingridMetadata } from "@/components/LingridLanding";

export const dynamicParams = false;

/** English version of the LINGRID page (/lingrid/en/). No redirect runs here. */
export function generateStaticParams() {
  return [{ game: "lingrid" }];
}

export function generateMetadata(): Metadata {
  return lingridMetadata("en");
}

export default function LingridEnPage() {
  return <LingridLanding lang="en" />;
}
