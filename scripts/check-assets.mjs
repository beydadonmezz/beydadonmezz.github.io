// Post-build guard: every local src / srcset / og:image referenced by the
// built HTML must exist in out/ (e.g. generated image variants).
import fs from "node:fs";
import path from "node:path";

const out = path.join(path.dirname(new URL(import.meta.url).pathname), "..", "out");
const html = [];
(function walk(d) {
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, f.name);
    if (f.isDirectory()) walk(p);
    else if (f.name.endsWith(".html")) html.push(p);
  }
})(out);

const missing = new Set();
let checked = 0;
for (const file of html) {
  const s = fs.readFileSync(file, "utf8");
  const refs = [
    ...[...s.matchAll(/\s(?:src|href)="(\/[^"#?]+)"/g)].map((m) => m[1]),
    ...[...s.matchAll(/\ssrcSet="([^"]+)"|\ssrcset="([^"]+)"/g)].flatMap((m) =>
      (m[1] || m[2]).split(",").map((x) => x.trim().split(/\s+/)[0]),
    ),
  ].filter((u) => u.startsWith("/") && !u.startsWith("//"));
  for (const u of refs) {
    checked++;
    const p = path.join(out, decodeURIComponent(u));
    const ok = fs.existsSync(p) && (fs.statSync(p).isFile() || fs.existsSync(path.join(p, "index.html")));
    if (!ok) missing.add(`${u}  (in ${path.relative(out, file)})`);
  }
}
if (missing.size) {
  console.error(`✗ Missing assets referenced by the built HTML:\n  - ${[...missing].join("\n  - ")}\n  Run: sh scripts/game-image-variants.sh`);
  process.exit(1);
}
console.log(`✓ Assets: ${checked} local references in ${html.length} pages all exist`);
