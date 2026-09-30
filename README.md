# beydadonmezz.github.io

Portfolio of Beydanur Dönmez plus landing, privacy and support pages for her iOS games.
Next.js (App Router, static export) · Tailwind CSS 4 · Motion · Lenis. Deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`.

```bash
nvm use            # Node 22
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out
```

## Add a project

1. Put a cover image in `public/projects/<slug>.webp` (max 1600px wide, e.g.
   `sips --resampleWidth 1600 in.png && cwebp -q 78 in.png -o public/projects/<slug>.webp`).
2. Add an entry to `src/data/projects.ts` where you want it to appear (the array order is the display order):

```ts
{
  slug: "my-project",
  name: "My Project",
  description: "One sentence about what it is.",
  url: "https://example.com",
  category: "web",            // "web" | "mobile" (App Store links are "mobile")
  award: "Awwwards HM",       // optional badge
  image: "/projects/my-project.webp",
  width: 1600,
  height: 804,
},
```

## Add a game

1. Copy assets into `public/games/<slug>/`: `icon.png` (1024px, used for social previews),
   `icon-512.webp` (shown on the site) and `screen-1.webp`… (store screenshots, ~800px wide).
   Then run `sh scripts/game-image-variants.sh` to create the smaller `icon-128/256.webp` and
   `screen-N-480.webp` variants the pages serve via `srcset` (the build fails if one is missing).
2. Add an entry to `src/data/games.ts`. The landing page `/<slug>/` is generated automatically.
3. Put the game's published privacy / terms / support URLs in `legal` (Turkish versions under
   `legal.tr`). This site only links to them: legal pages are never copied into this repo, so the
   pages submitted to App Store Connect stay the single source.
4. When the game goes live, set `appStoreUrl` to its App Store link. While it is `null` the page shows a
   disabled "Coming soon to the App Store" button.

Theme colours (`theme.accent`, `theme.secondary`) come from the app icon; `accent` must stay readable on
the near-black background.

## Build checks

`npm run build` runs two guards after `next build` and fails (so nothing deploys) if either fails:

- `scripts/check-counts.mjs`: the project counts rendered on the home page agree
  (heading = All = Web + Mobile + Games, and "Show all N"). Games count as projects. All counts
  come from `countProjects()` in `src/lib/project-counts.ts`.
- `scripts/check-assets.mjs`: every local `src` / `srcset` in the built HTML exists.

## Things that must keep working

- `public/app-ads.txt` is served at `/app-ads.txt`. AdMob reads it because this domain is the
  Marketing URL of the apps in App Store Connect. Don't remove it.
- **The `lingrid-site` and `fishburg-site` repositories must stay published.** App Store Connect (and
  AdMob's consent message, and the apps themselves) point to their pages:
  `https://beydadonmezz.github.io/lingrid-site/privacy`, `/support`, `/terms`, `/tr/…` and
  `https://beydadonmezz.github.io/fishburg-site/privacy/` (incl. `#choices`), `/support/`, `/terms/`,
  `/tr/…`. GitHub Pages serves those project repos on their paths ahead of this repo. Don't unpublish or
  rename them, and don't create `lingrid-site/` or `fishburg-site/` folders here.
- Bubble Sway and Puzzle Numbers publish their legal pages on their own domains
  (`bubblesway.app`, `puzzlenumbers.app`).
