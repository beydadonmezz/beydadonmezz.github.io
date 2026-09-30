// Post-build guard: the counts rendered on the home page must agree.
// Fails `npm run build` (and so the deploy) if they don't.
import fs from "node:fs";

// React separates adjacent text nodes with <!-- -->; drop them before matching.
const html = fs.readFileSync(new URL("../out/index.html", import.meta.url), "utf8").replace(/<!-- -->/g, "");
const read = (key) => {
  const m = html.match(new RegExp(`data-count="${key}"[^>]*>\\(?(\\d+)\\)?<`));
  if (!m) throw new Error(`check-counts: no rendered count for "${key}" in out/index.html`);
  return Number(m[1]);
};

const c = {
  heading: read("heading"),
  all: read("all"),
  web: read("web"),
  mobile: read("mobile"),
  games: read("games"),
  showAll: read("show-all"),
};
const errors = [];
if (c.web + c.mobile + c.games !== c.all) errors.push(`Web ${c.web} + Mobile ${c.mobile} + Games ${c.games} ≠ All ${c.all}`);
if (c.heading !== c.all) errors.push(`heading (${c.heading}) ≠ All (${c.all})`);
if (c.showAll !== c.all) errors.push(`"Show all ${c.showAll}" ≠ All (${c.all})`);

if (errors.length) {
  console.error(`✗ Project counts disagree:\n  - ${errors.join("\n  - ")}`);
  process.exit(1);
}
console.log(`✓ Project counts agree: heading ${c.heading} = All ${c.all} = Web ${c.web} + Mobile ${c.mobile} + Games ${c.games}; Show all ${c.showAll}`);
