/** Re-mounts on every navigation inside a game, so each page eases in. */
export default function GameTemplate({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
