import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { games } from "@/data/games";
import { profile } from "@/data/profile";
import { getGame } from "@/lib/games";

export const dynamicParams = false;

export function generateStaticParams() {
  return games.map((g) => ({ game: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ game: string }> }): Promise<Metadata> {
  const game = getGame((await params).game);
  return {
    title: `Support · ${game.name}`,
    description: `Help and contact for ${game.name}, an iOS game by ${profile.name}.`,
    alternates: { canonical: `/${game.slug}/support/` },
  };
}

export default async function SupportPage({ params }: { params: Promise<{ game: string }> }) {
  const game = getGame((await params).game);
  const email = game.supportEmail ?? profile.email;
  const subject = encodeURIComponent(`${game.name} support`);

  return (
    <LegalPage game={game} kind="support">
      <div className="mt-10 rounded-2xl border border-line bg-bg-raised p-6 md:p-8">
        <p className="eyebrow">Contact</p>
        <p className="mt-3 text-lg text-fg/85">
          Found a bug, lost progress or have an idea? Send an email and include your device model and iOS version.
        </p>
        <a
          href={`mailto:${email}?subject=${subject}`}
          className="mt-6 inline-flex h-12 max-w-full items-center gap-2 rounded-full px-6 font-medium text-black"
          style={{ background: "var(--game-accent)" }}
        >
          <span className="truncate">{email}</span> <span aria-hidden>→</span>
        </a>
      </div>
    </LegalPage>
  );
}
