// Post-build: the root layout renders <html lang="en"> for every page, but /lingrid/ is the Turkish LINGRID page.
// Set lang="tr" on exactly that file; fails `npm run build` (and so the deploy) if the tag is not found once.
import fs from "node:fs";

const pages = [{ file: "../out/lingrid/index.html", lang: "tr" }];
for (const { file, lang } of pages) {
  const url = new URL(file, import.meta.url);
  const html = fs.readFileSync(url, "utf8");
  const tags = html.match(/<html\b[^>]*\blang="[^"]*"/g) ?? [];
  if (tags.length !== 1) {
    console.error(`✗ set-html-lang: expected one <html lang> in ${file}, found ${tags.length}`);
    process.exit(1);
  }
  fs.writeFileSync(url, html.replace(/(<html\b[^>]*\blang=")[^"]*"/, `$1${lang}"`));
  console.log(`✓ set-html-lang: ${file} -> lang="${lang}"`);
}
