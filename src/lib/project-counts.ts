import type { Project } from "@/data/types";

export type ProjectCounts = { all: number; web: number; mobile: number; games: number };

/**
 * The single source for every project count shown on the site.
 * Games count as projects: All = client projects + games.
 * Throws (and so fails the static build) if the parts don't add up to All.
 */
export function countProjects(projects: Pick<Project, "category">[], games: readonly unknown[]): ProjectCounts {
  const counts: ProjectCounts = {
    all: projects.length + games.length,
    web: projects.filter((p) => p.category === "web").length,
    mobile: projects.filter((p) => p.category === "mobile").length,
    games: games.length,
  };
  if (counts.web + counts.mobile + counts.games !== counts.all) {
    throw new Error(
      `Project counts disagree: web ${counts.web} + mobile ${counts.mobile} + games ${counts.games} ≠ all ${counts.all}. ` +
        "Every project needs category \"web\" or \"mobile\".",
    );
  }
  return counts;
}
