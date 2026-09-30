"use client";

import { useEffect, useState } from "react";

export function LocalTime({ timeZone, className }: { timeZone: string; className?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, [timeZone]);

  return (
    <span className={className} suppressHydrationWarning>
      {time ?? "--:--"} <span className="text-muted">GMT+3</span>
    </span>
  );
}
