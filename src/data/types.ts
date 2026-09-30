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

export type LegalLinks = { privacy: string; terms?: string; support?: string };

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
  /** Support contact shown on the game page. */
  supportEmail: string | null;
  /** The game's own website, if it has one. */
  website?: string;
  /**
   * The legal and support pages submitted to App Store Connect. They are the
   * single source: this site only links to them and never copies them.
   */
  legal: LegalLinks & { tr?: Partial<LegalLinks> };
};
