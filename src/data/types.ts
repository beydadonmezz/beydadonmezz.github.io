export type ProjectCategory = "web" | "mobile";

export type Award = {
  /** e.g. "Altın Örümcek 1st Place", "Awwwards Honorable Mention". */
  name: string;
  /** How many times it was won (shown as "4×"); defaults to 1. */
  count?: number;
};

export type Project = {
  slug: string;
  name: string;
  /** One sentence shown in the list. */
  description: string;
  /**
   * The client's live site (or App Store page). null when the site is offline:
   * the project is still listed, just not linked.
   */
  url: string | null;
  category: ProjectCategory;
  /** Each award becomes a badge; projects are ordered by total award count. */
  awards?: Award[];
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
  /**
   * Colours taken from the app icon. `accent` is used for glows and as text on
   * the dark theme; `accentOnLight` is the same hue, dark enough for text on the
   * light theme (≥ 4.5:1 on #f3f1ea).
   */
  theme: { accent: string; accentOnLight: string; secondary: string };
  /** null renders a disabled "Coming soon to the App Store" state. */
  appStoreUrl: string | null;
  platforms: string;
  /** Support contact shown on the game page. */
  supportEmail: string | null;
  /** The game's own website, if it has one. */
  website?: string;
  /**
   * The legal and support pages submitted to App Store Connect. They are the
   * single source: this site only links to them and never copies them, except
   * for games whose pages live here (`hostedLegal` in src/data/legal/).
   */
  legal: LegalLinks & { tr?: Partial<LegalLinks> };
};

/** One section of a legal or support page hosted on this site. */
export type LegalSection = {
  heading: string;
  /** Anchor id (e.g. "choices" for /<slug>/privacy/#choices); keep ids stable, other pages and apps link to them. */
  id?: string;
  /** Paragraphs; a string[] entry renders as a bulleted list. */
  body: (React.ReactNode | React.ReactNode[])[];
  /** Smaller sub-headings under this section (h3), e.g. the questions of a support page. */
  subsections?: LegalSection[];
};

export type LegalDoc = {
  title: string;
  /** e.g. "18 October 2026"; omitted for the support page. */
  effective?: string;
  /** Date of the latest change, if later than `effective`. */
  updated?: string;
  /** Short intro shown under the title. */
  intro?: React.ReactNode;
  /** "The short version": a highlighted list shown before the sections. */
  summary?: { heading: string; items: React.ReactNode[] };
  sections: LegalSection[];
};

/**
 * Legal and support pages served at /<slug>/privacy/, /<slug>/terms/ and /<slug>/support/, and the Turkish
 * versions in `tr` at /<slug>/tr/privacy/ ... (src/app/[game]/...).
 */
export type HostedLegal = {
  privacy: LegalDoc;
  support: LegalDoc;
  terms?: LegalDoc;
  tr?: { privacy?: LegalDoc; terms?: LegalDoc; support?: LegalDoc };
};
