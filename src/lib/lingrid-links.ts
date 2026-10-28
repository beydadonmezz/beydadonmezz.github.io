/**
 * LINGRID smart link: store targets, allowed ?s= sources and the inline redirect script.
 * Everything that decides a store URL lives here, so the static buttons (build time),
 * the button rewrite and the redirect (both in the inline script) always agree.
 */

/** App Store Connect provider token for campaign links (pt=). The lead fills this. */
export const APP_STORE_PROVIDER_TOKEN = "129466681";

export const APP_STORE_ID = "6815554304";
export const PLAY_PACKAGE = "com.beyda.lingrid";
export const SMART_LINK_PATH = "/lingrid";
export const SMART_LINK_URL = "https://beydadonmezz.github.io/lingrid";
/** The QR code encodes this URL (source "qr"). */
export const QR_TARGET = `${SMART_LINK_URL}?s=qr`;

/** Allowed ?s= values. Anything else counts as "no source". */
export const SOURCES = ["ig", "fb", "tt", "bio", "ig-ad", "fb-ad", "tt-ad", "qr"] as const;
export type Source = (typeof SOURCES)[number];

export function cleanSource(s: string | null | undefined): Source | null {
  return (SOURCES as readonly string[]).includes(s ?? "") ? (s as Source) : null;
}

export function appStoreUrl(source: Source | null): string {
  const ct = source ? `&ct=${source}` : "";
  return `https://apps.apple.com/app/apple-store/id${APP_STORE_ID}?pt=${APP_STORE_PROVIDER_TOKEN}${ct}&mt=8`;
}

export function playUrl(source: Source | null): string {
  const base = `https://play.google.com/store/apps/details?id=${PLAY_PACKAGE}`;
  if (!source) return base;
  const referrer = encodeURIComponent(`utm_source=${source}&utm_medium=social&utm_campaign=launch`);
  return `${base}&referrer=${referrer}`;
}

/**
 * Inline script for /lingrid/ ONLY. Runs while the HTML is parsed (before hydration).
 * - Redirects iPhone/iPad/iPod (and iPadOS with a desktop UA) to the App Store and Android to Google Play.
 *   The path check makes it a no-op anywhere except /lingrid and /lingrid/.
 * - Rewrites the static store buttons with the source from ?s= once the DOM is ready.
 * No cookies, storage, network requests or third-party code.
 */
export const redirectScript = `(function(){
var SRC=${JSON.stringify(SOURCES)};
var PT=${JSON.stringify(APP_STORE_PROVIDER_TOKEN)};
if(location.pathname.replace(/\\/+$/,"")!==${JSON.stringify(SMART_LINK_PATH)})return;
var s="";try{s=new URLSearchParams(location.search).get("s")||""}catch(e){}
if(SRC.indexOf(s)<0)s="";
var ios="https://apps.apple.com/app/apple-store/id${APP_STORE_ID}?pt="+PT+(s?"&ct="+s:"")+"&mt=8";
var and="https://play.google.com/store/apps/details?id=${PLAY_PACKAGE}"+(s?"&referrer="+encodeURIComponent("utm_source="+s+"&utm_medium=social&utm_campaign=launch"):"");
var ua=navigator.userAgent||"";
var isIos=/iPhone|iPad|iPod/.test(ua)||(/Macintosh/.test(ua)&&navigator.maxTouchPoints>1);
var isAnd=!isIos&&/Android/.test(ua);
if(isIos){location.replace(ios);return}
if(isAnd){location.replace(and);return}
if(s)document.addEventListener("DOMContentLoaded",function(){
var a=document.querySelectorAll("a[data-store]");
for(var i=0;i<a.length;i++)a[i].setAttribute("href",a[i].getAttribute("data-store")==="ios"?ios:and);
});
})();`;
