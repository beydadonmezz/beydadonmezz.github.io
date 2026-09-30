export function Marquee({
  items,
  duration = 40,
  className,
  separator = "✦",
}: {
  items: readonly string[];
  duration?: number;
  className?: string;
  separator?: string;
}) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="flex items-center whitespace-nowrap">
          <span className="px-6 md:px-10">{item}</span>
          <span className="text-accent" aria-hidden>
            {separator}
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={`marquee relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] ${className ?? ""}`}
    >
      <div className="marquee-track" style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}>
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
