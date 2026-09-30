import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="gutter grid min-h-[100svh] place-content-center text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-4 font-display text-[clamp(4rem,16vw,12rem)] leading-none font-semibold tracking-[-0.05em]">
        Lost<span className="text-accent-fg">.</span>
      </h1>
      <p className="mt-4 text-fg/70">This page doesn&rsquo;t exist, or it moved.</p>
      <Link
        href="/"
        className="mx-auto mt-10 inline-flex h-14 items-center rounded-full bg-accent px-7 font-medium text-accent-ink"
      >
        Back home
      </Link>
    </main>
  );
}
