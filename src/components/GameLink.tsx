import Link from "next/link";
import type { Game } from "@/data/types";

type Props = Omit<React.ComponentProps<"a">, "href"> & { game: Pick<Game, "slug" | "staticSite"> };

/** Link to a game's /<slug>/ page: a plain <a> for static pages in public/<slug>/, which the router doesn't know. */
export function GameLink({ game, ...props }: Props) {
  const href = `/${game.slug}/`;
  return game.staticSite ? <a href={href} {...props} /> : <Link href={href} {...props} />;
}
