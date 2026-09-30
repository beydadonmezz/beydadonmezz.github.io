import type { Game } from "@/data/types";

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 814 1000" aria-hidden className={className} fill="currentColor">
      <path d="M788 341c-6 4-108 62-108 190 0 149 131 201 135 203-1 3-21 72-69 142-43 62-88 124-156 124s-85-40-164-40c-77 0-104 41-166 41s-106-57-156-127C46 792 0 665 0 544c0-194 126-297 250-297 66 0 121 43 162 43 40 0 102-46 177-46 29 0 131 3 199 97zM554 159c31-37 53-88 53-139 0-7-1-14-2-20-51 2-111 34-147 76-28 32-55 83-55 135 0 8 1 16 2 18 3 1 9 1 14 1 45 0 103-30 135-71z" />
    </svg>
  );
}

export function AppStoreButton({ game }: { game: Game }) {
  if (!game.appStoreUrl) {
    return (
      <span
        role="link"
        aria-disabled="true"
        className="inline-flex h-16 cursor-not-allowed items-center gap-3 rounded-2xl border border-dashed border-fg/30 px-5 text-fg/75"
      >
        <AppleLogo className="size-7 opacity-60" />
        <span className="flex flex-col leading-tight">
          <span className="text-[0.7rem] tracking-wide text-muted">Coming soon to the</span>
          <span className="text-lg font-semibold tracking-tight">App Store</span>
        </span>
      </span>
    );
  }
  return (
    <a
      href={game.appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-16 items-center gap-3 rounded-2xl bg-fg px-5 text-bg transition-transform duration-500 hover:-translate-y-0.5 active:scale-95"
    >
      <AppleLogo className="size-7" />
      <span className="flex flex-col leading-tight">
        <span className="text-[0.7rem] tracking-wide">Download on the</span>
        <span className="text-lg font-semibold tracking-tight">App Store</span>
      </span>
    </a>
  );
}
