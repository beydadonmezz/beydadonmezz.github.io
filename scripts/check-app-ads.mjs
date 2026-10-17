// Post-build guard: out/app-ads.txt must exist and carry the exact DIRECT lines of every live ad seller: AdMob
// publisher pub-6308223268641775 and the mediation networks Unity Ads and Liftoff Monetize (AdMob and the networks
// crawl https://beydadonmezz.github.io/app-ads.txt because this domain is the apps' Marketing URL). Also fails if
// out/ would shadow the project-page repos whose legal pages App Store Connect links to (lingrid-site,
// fishburg-site, snugpath-site).
// Usage: node scripts/check-app-ads.mjs [--self-test]
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const REQUIRED_LINES = [
  "google.com, pub-6308223268641775, DIRECT, f08c47fec0942fa0",
  "unity.com, 145056162, DIRECT, 96cabb5fbdde37a7",
  "vungle.com,6ad3d55956c1b4e3f258fe9a,DIRECT,c107d686becd2d77",
];
const REQUIRED_LINE = REQUIRED_LINES[0];
const ALL_REQUIRED = REQUIRED_LINES.join("\n");
const SHADOWED = ["lingrid-site", "fishburg-site", "snugpath-site"];

function check(outDir) {
  const errors = [];
  const file = path.join(outDir, "app-ads.txt");
  if (!fs.existsSync(file)) errors.push("out/app-ads.txt is missing");
  else {
    const lines = fs.readFileSync(file, "utf8").split(/\r?\n/).map((l) => l.trim());
    for (const req of REQUIRED_LINES) if (!lines.includes(req)) errors.push(`out/app-ads.txt lacks the exact line "${req}"`);
  }
  for (const d of SHADOWED) if (fs.existsSync(path.join(outDir, d))) errors.push(`out/${d}/ would shadow the ${d} repo`);
  return errors;
}

if (process.argv.includes("--self-test")) {
  const cases = [
    ["good", { "app-ads.txt": `${ALL_REQUIRED}\n` }, true],
    ["good with other lines", { "app-ads.txt": `# ads\nexample.com, pub-1, DIRECT\n${ALL_REQUIRED}\n` }, true],
    ["missing file", {}, false],
    ["wrong publisher", { "app-ads.txt": `${ALL_REQUIRED.replace("pub-6308223268641775", "pub-6308223268641776")}\n` }, false],
    ["AdMob line only (no mediation lines)", { "app-ads.txt": `${REQUIRED_LINE}\n` }, false],
    ["empty file", { "app-ads.txt": "" }, false],
    ["shadowing folder", { "app-ads.txt": `${ALL_REQUIRED}\n`, "lingrid-site/index.html": "x" }, false],
    ["shadowing snugpath-site", { "app-ads.txt": `${ALL_REQUIRED}\n`, "snugpath-site/privacy.html": "x" }, false],
  ];
  let wrong = 0;
  for (const [name, files, shouldPass] of cases) {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "app-ads-"));
    for (const [rel, body] of Object.entries(files)) {
      fs.mkdirSync(path.dirname(path.join(dir, rel)), { recursive: true });
      fs.writeFileSync(path.join(dir, rel), body);
    }
    const ok = (check(dir).length === 0) === shouldPass;
    if (!ok) wrong++;
    console.log(`self-test: ${shouldPass ? "accept" : "reject"} "${name}" -> ${ok ? "OK" : "WRONG"}`);
    fs.rmSync(dir, { recursive: true, force: true });
  }
  if (wrong) { console.error(`check-app-ads self-test FAILED (${wrong} wrong)`); process.exit(1); }
  console.log("check-app-ads self-test OK: 2 good accepted, 6 bad rejected");
  process.exit(0);
}

const out = path.join(path.dirname(new URL(import.meta.url).pathname), "..", "out");
const errors = check(out);
if (errors.length) {
  for (const e of errors) console.error(`check-app-ads FAIL: ${e}`);
  process.exit(1);
}
console.log("check-app-ads OK: out/app-ads.txt carries the AdMob, Unity and Liftoff DIRECT lines; no shadowing folders");
