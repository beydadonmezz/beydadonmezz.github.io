import { appStoreUrl, playUrl } from "@/lib/lingrid-links";

const btn =
  "inline-flex h-16 items-center gap-3 rounded-2xl bg-fg px-5 text-bg transition-transform duration-500 hover:-translate-y-0.5 active:scale-95";

function AppleLogo() {
  return (
    <svg viewBox="0 0 814 1000" aria-hidden className="size-7" fill="currentColor">
      <path d="M788 341c-6 4-108 62-108 190 0 149 131 201 135 203-1 3-21 72-69 142-43 62-88 124-156 124s-85-40-164-40c-77 0-104 41-166 41s-106-57-156-127C46 792 0 665 0 544c0-194 126-297 250-297 66 0 121 43 162 43 40 0 102-46 177-46 29 0 131 3 199 97zM554 159c31-37 53-88 53-139 0-7-1-14-2-20-51 2-111 34-147 76-28 32-55 83-55 135 0 8 1 16 2 18 3 1 9 1 14 1 45 0 103-30 135-71z" />
    </svg>
  );
}

function PlayLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-7" fill="currentColor">
      <path d="M4.5 2.6a1.4 1.4 0 0 0-.5 1.1v16.6c0 .45.19.84.5 1.1L13.8 12 4.5 2.6Zm10.7 10.2-2.6 2.6 0 0L5.6 22.2c.4.2.9.2 1.4-.1l10.7-6.1-2.5-3.2Zm0-1.6 2.5-3.2L7 1.9c-.5-.3-1-.3-1.4-.1l7 6.9 2.6 2.5Zm3.6.8-1.6-.9-2.8 3.5 2.8 2.8 1.6-.9c.9-.5.9-1.6 0-2.1l0-2.4Z" />
    </svg>
  );
}

/** Static links (work without JavaScript). The inline script on /lingrid/ adds ?s= sources. */
export function StoreButtons({ lang }: { lang: "tr" | "en" }) {
  const t =
    lang === "tr"
      ? { pre: "", app: "App Store'dan indir", play: "Google Play'den indir" }
      : { pre: "", app: "Download on the App Store", play: "Get it on Google Play" };
  return (
    <div className="flex flex-wrap items-center gap-4" lang={lang}>
      <a data-store="ios" href={appStoreUrl(null)} className={btn}>
        <AppleLogo />
        <span className="text-lg font-semibold tracking-tight">{t.app}</span>
      </a>
      <a data-store="android" href={playUrl(null)} className={btn}>
        <PlayLogo />
        <span className="text-lg font-semibold tracking-tight">{t.play}</span>
      </a>
    </div>
  );
}
