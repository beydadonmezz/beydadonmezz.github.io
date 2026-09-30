export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";
export const themeColors: Record<Theme, string> = { dark: "#0c0c0b", light: "#f3f1ea" };

/**
 * Runs inline in <head> before first paint, so the page never flashes the
 * wrong theme. Order: ?theme= (not saved) → saved choice → system preference.
 */
export const themeInitScript = `(function(){try{var d=document.documentElement,t=null,q=null;try{q=new URLSearchParams(location.search).get("theme")}catch(e){}if(q==="light"||q==="dark")t=q;if(!t){try{var s=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});if(s==="light"||s==="dark")t=s}catch(e){}}if(!t)t=window.matchMedia&&matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";d.setAttribute("data-theme",t);var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",t==="light"?${JSON.stringify(themeColors.light)}:${JSON.stringify(themeColors.dark)})}catch(e){}})();`;
