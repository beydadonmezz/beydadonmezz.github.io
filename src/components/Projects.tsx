"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Award, Game, Project } from "@/data/types";
import { countProjects } from "@/lib/project-counts";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

type Filter = "all" | "web" | "mobile" | "games";

type Item = {
  key: string;
  name: string;
  description: string;
  href: string | null;
  external: boolean;
  category: Exclude<Filter, "all">;
  awards: Award[];
  image: string | null;
  width: number;
  height: number;
  tint?: string;
};

const INITIAL_COUNT = 12;
const labels: Record<Filter, string> = { all: "All", web: "Web", mobile: "Mobile", games: "Games" };

export function Projects({ projects, games }: { projects: Project[]; games: Game[] }) {
  const items = useMemo<Item[]>(
    () => [
      ...projects.map((p) => ({
        key: p.slug,
        name: p.name,
        description: p.description,
        href: p.url,
        external: true,
        category: p.category,
        awards: p.awards ?? [],
        image: p.image,
        width: p.width,
        height: p.height,
      })),
      ...games.map((g) => ({
        key: `game-${g.slug}`,
        name: g.name,
        description: g.tagline,
        href: `/${g.slug}/`,
        external: false,
        category: "games" as const,
        awards: [],
        image: g.screenshots[0]?.src ?? g.icon,
        width: g.screenshots[0]?.width ?? 1024,
        height: g.screenshots[0]?.height ?? 1024,
        tint: g.theme.accent,
      })),
    ],
    [projects, games],
  );

  const [filter, setFilter] = useState<Filter>("all");
  const [expanded, setExpanded] = useState(false);
  const [touched, setTouched] = useState(false);
  // Heading, tabs and "Show all" all read from this one count.
  const counts = countProjects(projects, games);
  const filtered = filter === "all" ? items : items.filter((i) => i.category === filter);
  const filteredCount = counts[filter];
  const visible = expanded ? filtered : filtered.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" aria-labelledby="projects-title" className="gutter relative py-28 md:py-40">
      <SectionLabel index="02">Work</SectionLabel>
      <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
        <Reveal>
          <h2
            id="projects-title"
            className="font-display text-[clamp(3rem,9vw,8.5rem)] leading-[0.9] font-semibold tracking-[-0.05em]"
          >
            Selected
            <br />
            <span className="font-serif font-normal tracking-[-0.02em] text-accent-fg italic">projects</span>
            <sup
              data-count="heading"
              className="ml-2 align-super font-mono text-[0.16em] font-normal tracking-normal text-muted"
            >
              ({counts.all})
            </sup>
          </h2>
        </Reveal>

        <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-1.5 sm:gap-2">
          {(Object.keys(labels) as Filter[]).map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => {
                setFilter(f);
                setTouched(true);
              }}
              className={`relative h-11 rounded-full border px-4 text-sm sm:px-5 transition-colors duration-300 ${
                filter === f
                  ? "border-fg bg-fg text-bg"
                  : "border-line text-fg/80 hover:border-fg/40 hover:text-fg"
              }`}
            >
              {labels[f]}
              <span className={`ml-1.5 font-mono text-[0.7rem] ${filter === f ? "text-bg/60" : "text-muted"}`}>
                <span data-count={f}>{counts[f]}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Only fade the list when the visitor switches filters, never on first render. */}
      <ProjectList key={filter} items={visible} fade={touched} />

      {filteredCount > INITIAL_COUNT && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
            className="h-14 rounded-full border border-fg/25 px-8 font-medium transition-colors duration-500 hover:border-fg hover:bg-fg hover:text-bg"
          >
            {expanded ? (
              "Show fewer"
            ) : (
              <>
                Show all <span data-count="show-all">{filteredCount}</span>
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}

function ProjectList({ items, fade }: { items: Item[]; fade: boolean }) {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState<Item | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 28, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 260, damping: 28, mass: 0.5 });

  function onMove(e: React.PointerEvent) {
    if (e.pointerType !== "mouse") return;
    x.set(e.clientX);
    y.set(e.clientY);
  }

  return (
    <div className="relative mt-16 md:mt-24" onPointerMove={onMove} onPointerLeave={() => setHovered(null)}>
      <motion.ul
        className="group/list border-t border-line"
        initial={fade ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {items.map((item, i) => (
          <li key={item.key} className="border-b border-line">
            <Row item={item} index={i} onHover={setHovered} />
          </li>
        ))}
      </motion.ul>

      {/* Cursor-following preview, only for mouse users. */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-30 hidden pointer-fine:block"
        style={{ x: reduce ? x : sx, y: reduce ? y : sy }}
      >
        <AnimatePresence>
          {hovered?.image && (
            <motion.div
              key={hovered.key}
              className="absolute -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl shadow-2xl shadow-shadow/50"
              style={{
                ...previewSize(hovered),
                background: hovered.tint ?? "var(--bg-raised)",
              }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={hovered.image}
                alt=""
                className="size-full object-cover"
                decoding="async"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

/** Landscape preview box: this width, at a 1.6 aspect ratio. */
const LANDSCAPE_WIDTH = "min(26vw, 380px)";
const LANDSCAPE_RATIO = 1.6;

/**
 * Landscape covers use the fixed landscape box (cropped to 1.6).
 * Portrait and square images keep their real aspect ratio, capped so they are
 * never wider than the landscape box is tall, and never taller than 55vh.
 */
function previewSize(item: Item): React.CSSProperties {
  const r = item.width / item.height;
  if (r > 1) return { width: LANDSCAPE_WIDTH, aspectRatio: String(Math.min(r, LANDSCAPE_RATIO)) };
  return {
    width: `min(calc(${LANDSCAPE_WIDTH} / ${LANDSCAPE_RATIO}), calc(55vh * ${r.toFixed(4)}))`,
    aspectRatio: `${item.width} / ${item.height}`,
  };
}

function Row({ item, index, onHover }: { item: Item; index: number; onHover: (i: Item | null) => void }) {
  const content = (
    <>
      {item.image && (
        <div
          className="relative mb-5 aspect-[16/10] overflow-hidden rounded-lg bg-bg-raised md:col-span-2 md:mb-0 md:hidden md:pointer-coarse:block"
          style={item.tint ? { background: item.tint } : undefined}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt=""
            width={item.width}
            height={item.height}
            loading="lazy"
            decoding="async"
            className={`size-full ${item.category === "games" ? "object-contain" : "object-cover"}`}
          />
        </div>
      )}
      <span className="hidden font-mono text-xs text-muted md:col-span-1 md:block">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="flex items-start justify-between gap-4 md:col-span-3 md:pointer-coarse:col-span-2">
        <span className="font-display text-2xl leading-tight font-medium tracking-tight transition-transform duration-500 ease-out-expo md:text-[1.75rem] md:group-hover/row:translate-x-3">
          {item.name}
        </span>
        {item.href && (
          <span aria-hidden className="mt-1 text-lg text-muted md:hidden">
            {item.external ? "↗" : "→"}
          </span>
        )}
      </span>
      <span className="mt-2 block text-sm leading-relaxed text-fg/65 md:col-span-4 md:mt-0 md:pointer-coarse:col-span-3">
        {item.description}
      </span>
      <span className="mt-4 flex flex-wrap items-center gap-2 md:col-span-3 md:mt-0 md:justify-end">
        {item.awards.map((a) => (
          <AwardBadge key={a.name} award={a} />
        ))}
        <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.65rem] tracking-wider text-muted uppercase">
          {item.category}
        </span>
      </span>
      <span
        aria-hidden
        className="hidden text-right text-xl text-muted transition-[transform,color] duration-500 ease-out-expo group-hover/row:text-accent-fg md:col-span-1 md:block md:group-hover/row:-translate-y-0.5 md:group-hover/row:translate-x-0.5"
      >
        {item.href ? (item.external ? "↗" : "→") : ""}
      </span>
    </>
  );

  const className =
    "group/row grid py-7 transition-opacity duration-500 md:grid-cols-12 md:items-center md:gap-6 md:py-8 pointer-fine:group-hover/list:opacity-35 pointer-fine:hover:!opacity-100 focus-visible:!opacity-100";
  const handlers = {
    onPointerEnter: (e: React.PointerEvent) => e.pointerType === "mouse" && onHover(item),
    onFocus: () => onHover(null),
  };

  // Site offline: still listed (and previewed on hover), but not a link.
  if (!item.href) {
    return (
      <div className={className} onPointerEnter={handlers.onPointerEnter}>
        {content}
      </div>
    );
  }

  return item.external ? (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...handlers}
    >
      {content}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  ) : (
    <Link href={item.href} className={className} {...handlers}>
      {content}
    </Link>
  );
}

export function AwardBadge({ award }: { award: Award }) {
  const text = award.count && award.count > 1 ? `${award.count}× ${award.name}` : award.name;
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-badge px-2.5 py-1 text-[0.7rem] font-medium text-badge-fg">
      <svg aria-hidden viewBox="0 0 16 16" className="size-3 fill-current">
        <path d="M8 .8l2.1 4.6 5 .5-3.8 3.4 1.1 4.9L8 11.7l-4.4 2.5 1.1-4.9L.9 5.9l5-.5z" />
      </svg>
      {text}
    </span>
  );
}
