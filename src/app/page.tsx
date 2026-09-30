import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Games } from "@/components/Games";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { games } from "@/data/games";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    url: profile.siteUrl,
    email: `mailto:${profile.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Mersin", addressCountry: "TR" },
    sameAs: profile.socials.map((s) => s.href),
    knowsAbout: profile.skills,
  };

  return (
    <>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <div aria-label="Awards" className="border-y border-line py-6 md:py-8">
          <Marquee
            items={profile.awards}
            duration={45}
            className="font-display text-2xl font-medium tracking-tight md:text-4xl"
          />
        </div>
        <About />
        <Projects projects={projects} games={games} />
        <Games games={games} />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
