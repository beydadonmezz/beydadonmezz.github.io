import type { Game } from "@/data/types";
import { iconSrcSet } from "@/lib/images";

/**
 * App icon with iOS-style corner radius, or a tinted monogram placeholder.
 * Lazy by default: React preloads every eager <img>, so only above-the-fold
 * uses (page header, game hero) should pass `eager`.
 */
export function GameIcon({
  game,
  size = 96,
  className = "",
  eager = false,
  priority = false,
  sizes,
}: {
  game: Game;
  size?: number;
  className?: string;
  eager?: boolean;
  /** The page's LCP image. */
  priority?: boolean;
  /** Override when CSS renders the icon at a different size than `size`. */
  sizes?: string;
}) {
  const style = { width: size, height: size, borderRadius: size * 0.2237 };
  if (game.icon) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={game.icon}
        srcSet={iconSrcSet(game.icon)}
        sizes={sizes ?? `${size}px`}
        loading={eager || priority ? undefined : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        alt={`${game.name} app icon`}
        width={size}
        height={size}
        style={style}
        className={`shrink-0 shadow-lg shadow-shadow/40 ${className}`}
      />
    );
  }
  const initials = game.name
    .split(/[\s:]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <span
      role="img"
      aria-label={`${game.name} icon placeholder`}
      style={{
        ...style,
        background: `linear-gradient(145deg, ${game.theme.accent}, ${game.theme.secondary})`,
        fontSize: size * 0.36,
      }}
      className={`grid shrink-0 place-items-center font-display font-bold text-black/80 shadow-lg shadow-shadow/40 ${className}`}
    >
      {initials}
    </span>
  );
}
