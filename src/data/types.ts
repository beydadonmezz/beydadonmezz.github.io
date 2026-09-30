export type ProjectCategory = "web" | "mobile";

export type Project = {
  slug: string;
  name: string;
  /** One sentence shown in the list. */
  description: string;
  /** External link (live site or App Store page). */
  url: string;
  category: ProjectCategory;
  /** Award text rendered as a badge, e.g. "Awwwards Honorable Mention". */
  award?: string | null;
  /** Cover image in /public, e.g. "/projects/park-studio.webp". */
  image: string;
  width: number;
  height: number;
};

export type GameFeature = { title: string; body: string };

export type GameScreenshot = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type Game = {
  /** Route segment: /<slug>/, /<slug>/privacy/, /<slug>/support/ */
  slug: string;
  name: string;
  /** App Store subtitle. */
  subtitle: string;
  /** One short line for cards and the hero. */
  tagline: string;
  /** Paragraphs for the game page. */
  description: string[];
  /** 3 to 6 highlights. */
  features: GameFeature[];
  /** Icon shown on the page (512px webp), or null to show a placeholder. */
  icon: string | null;
  /** 1024px PNG used for social previews. */
  iconLarge: string | null;
  screenshots: GameScreenshot[];
  /** Colours taken from the app icon. `accent` must read well on near-black. */
  theme: { accent: string; secondary: string };
  /** null renders a disabled "Coming soon to the App Store" state. */
  appStoreUrl: string | null;
  platforms: string;
  /** Contact address shown on the support page. */
  supportEmail: string | null;
  /**
   * Where each legal page was originally published (the URLs submitted to
   * Apple / AdMob). Those URLs must keep working; the pages on this site are
   * mirrors and link back to them.
   */
  officialLinks: Partial<Record<"privacy" | "terms" | "support" | "website", string>>;
};
