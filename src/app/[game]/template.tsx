/** Re-mounts on every navigation, so client-side navigations into a game page ease in (see .page-enter). */
export default function GameTemplate({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
