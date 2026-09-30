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
2. Add an entry to `src/data/games.ts`. Pages are generated automatically:
   `/<slug>/`, `/<slug>/support/`, `/<slug>/privacy/`, and `/<slug>/terms/` if a terms file exists.
3. Add the legal copy as Markdown in `src/content/legal/<slug>/privacy.md`, `terms.md`, `support.md`.
   A missing `privacy.md` renders a clearly marked TODO block (and the page is `noindex`).
4. When the game goes live, set `appStoreUrl` to its App Store link. While it is `null` the page shows a
   disabled "Coming soon to the App Store" button.

Theme colours (`theme.accent`, `theme.secondary`) come from the app icon; `accent` must stay readable on
the near-black background.

## Things that must keep working

- `public/app-ads.txt` is served at `/app-ads.txt`. AdMob reads it because this domain is the
  Marketing URL of the apps in App Store Connect. Don't remove it.
- The URLs already submitted to Apple for LINGRID and Fishburg live under `/lingrid-site/…` and
  `/fishburg-site/…`. Those are served by the separate `lingrid-site` and `fishburg-site` repositories
  (GitHub Pages project sites take priority over this repo on those paths). Keep those repos published,
  and don't create `lingrid-site/` or `fishburg-site/` folders here.
