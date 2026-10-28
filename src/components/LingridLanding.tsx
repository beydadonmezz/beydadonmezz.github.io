import QRCode from "qrcode";
import Link from "next/link";
import { GameIcon } from "@/components/GameIcon";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { StoreButtons } from "@/components/StoreButtons";
import { games } from "@/data/games";
import { profile } from "@/data/profile";
import { getGame, isExternal } from "@/lib/games";
import { screenSrcSet } from "@/lib/images";
import { QR_TARGET, redirectScript } from "@/lib/lingrid-links";

type Lang = "tr" | "en";

const tr = {
  eyebrow: "Türkçe ipucu, İngilizce cevap",
  tagline: "Her ipucu bir Türkçe kelime, cevap İngilizce karşılığı: İngilizce öğreten bir bulmaca.",
  meta: "iPhone ve Android · Ücretsiz · Hesap gerekmez",
  qrTitle: "Telefonunla tara",
  qrText: "Kamerayı karekoda tut, mağaza sayfası açılsın.",
  qrAlt: "LINGRID indirme karekodu",
  about: "Oyun",
  aboutH: "LINGRID hakkında",
  description: [
    "LINGRID, İngilizce öğrenen Türkçe konuşurlar için bir bulmaca: her ipucu bir Türkçe kelime, cevabı ise İngilizce karşılığı.",
    "A1'den B2'ye dört CEFR seviyesinde 350'den fazla bulmaca ve her gün herkes için aynı yeni bir Günün Bulmacası. Liderlik tabloları iPhone'da Game Center, Android'de Google Play Oyunlar ile. Takıldın mı? Bir harfi ya da bütün kelimeyi puanla aç; seviye bulmacalarında kısa bir reklam izleyerek de açabilirsin.",
    "Uygulamanın menüleri ve ipuçları Türkçe, cevaplar İngilizce. Hesap gerekmez. App Store ve Google Play'de ücretsiz.",
  ],
  features: [
    { title: "Türkçe ipucu, İngilizce cevap", body: "Her ipucu bir Türkçe kelime, her cevap onun İngilizce karşılığı. Çözdüğün her bulmaca kelime hazneni büyütür." },
    { title: "350+ bulmaca, A1'den B2'ye", body: "Dört CEFR seviyesinde, ilk kelimelerden orta-ileri seviyeye kadar bulmacalar." },
    { title: "Her gün yeni bir bulmaca", body: "Herkes için aynı Günün Bulmacası; liderlik tabloları iPhone'da Game Center, Android'de Google Play Oyunlar ile." },
    { title: "Seriler ve madalyalar", body: "Her gün oynayarak serini koru, bitirdiğin her bulmacada madalya kazan." },
    { title: "Açılan temalar", body: "Oynayarak elmas kazan, elmaslarla yeni renk temalarının kilidini aç; açık ya da koyu." },
    { title: "İhtiyacın olunca ipucu", body: "Takıldın mı? Harfi ya da kelimeyi puanla aç, seviye bulmacalarında reklam izleyerek de. Hesap gerekmez." },
  ],
  highlights: "Öne çıkanlar",
  screens: "Ekran görüntüleri",
  screensLabel: "LINGRID ekran görüntüleri, yatay kaydır",
  alts: [
    "Günün Bulmacası çözülürken: Türkçe ipuçları, İngilizce cevaplar",
    "Bir seviye bulmacası çözülürken",
    "Takıldın mı? Reklam izleyerek ya da puanla harf aç",
    "Çözülen bulmaca: puan, süre ve madalya",
    "Seviye seçimi: A1'den B2'ye",
    "Elmaslarla açılan renk temaları",
  ],
  help: "Yardım ve yasal",
  helpH: "Yardım ve yasal bilgiler",
  support: "Destek",
  privacy: "Gizlilik Politikası",
  terms: "Kullanım Koşulları",
  more: "Diğer oyunlar",
  email: "E-posta",
};

export async function LingridLanding({ lang }: { lang: Lang }) {
  const game = getGame("lingrid");
  const en = lang === "en";
  const qr = await QRCode.toString(QR_TARGET, { type: "svg", margin: 1, errorCorrectionLevel: "M", color: { dark: "#14121f", light: "#ffffff" } });
  const qrSrc = `data:image/svg+xml;utf8,${encodeURIComponent(qr)}`;
  const t = en
    ? {
        eyebrow: game.subtitle,
        tagline: game.tagline,
        meta: "iPhone and Android · Free · No account needed",
        qrTitle: "Scan with your phone",
        qrText: "Point the camera at the code to open the store page.",
        qrAlt: "LINGRID download QR code",
        about: "The game",
        aboutH: `About ${game.name}`,
        description: game.description,
        features: game.features,
        highlights: "Highlights",
        screens: "Screenshots",
        screensLabel: "LINGRID screenshots, scroll horizontally",
        alts: game.screenshots.map((s) => s.alt),
        help: "Help & legal",
        helpH: "Help and legal",
        support: "Support",
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        more: "More games",
        email: "Email",
      }
    : tr;
  const l = en ? game.legal : { ...game.legal, ...game.legal.tr };
  const legal = [
    { label: t.support, href: l.support },
    { label: t.privacy, href: l.privacy },
    { label: t.terms, href: l.terms },
  ].filter((x): x is { label: string; href: string } => !!x.href);
  const shots = game.screenshots;
  const others = games.filter((g) => g.slug !== game.slug);
  const phoneW = (fluid: string, maxPx: number, maxVh: number) =>
    `min(${fluid}, ${maxPx}px, calc(${maxVh}vh * ${(800 / 1738).toFixed(4)}))`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: game.name,
    description: t.tagline,
    inLanguage: lang,
    gamePlatform: ["iOS", "Android"],
    operatingSystem: "iOS, Android",
    applicationCategory: "Game",
    author: { "@type": "Person", name: profile.name, url: profile.siteUrl },
    image: `${profile.siteUrl}${game.iconLarge}`,
  };

  return (
    <main id="main" tabIndex={-1} lang={lang}>
      {/* Smart link: only the Turkish main page carries the redirect script. */}
      {!en && <script dangerouslySetInnerHTML={{ __html: redirectScript }} />}

      <section className="gutter relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-48 left-1/2 size-[140vw] max-w-[1400px] max-h-[1400px] -translate-x-1/2 rounded-full opacity-30 md:left-[70%]"
          style={{ background: "radial-gradient(closest-side, var(--game-accent), transparent)" }}
        />
        <div className="relative grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <GameIcon game={game} size={112} eager sizes="(max-width: 767px) 96px, 112px" className="max-md:!size-24" />
            <p className="eyebrow mt-10" style={{ color: "var(--game-fg)" }}>
              {t.eyebrow}
            </p>
            <h1 tabIndex={-1} className="mt-4 font-display text-[clamp(3.25rem,11vw,9.5rem)] leading-[0.9] font-semibold tracking-[-0.05em] break-words">
              {game.name}
            </h1>
            <p className="mt-8 max-w-[30ch] text-[clamp(1.25rem,2.2vw,1.75rem)] leading-snug tracking-tight">{t.tagline}</p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-6">
              <StoreButtons lang={lang} />
            </div>
            <p className="mt-5 text-sm text-muted">{t.meta}</p>
            <div className="mt-8 hidden max-w-sm items-center gap-5 rounded-2xl border border-line p-4 md:flex">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={qrSrc} alt={t.qrAlt} width={112} height={112} className="size-28 shrink-0 rounded-lg" />
              <p className="text-sm leading-snug">
                <span className="block font-display text-lg font-semibold tracking-tight">{t.qrTitle}</span>
                <span className="text-muted">{t.qrText}</span>
              </p>
            </div>
          </div>

          <div className="relative flex justify-center lg:col-span-5">
            <div className="relative translate-x-[16%]" style={{ width: phoneW("62vw", 300, 70) }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={shots[1].src}
                srcSet={screenSrcSet(shots[1])}
                sizes="(max-width: 480px) 54vw, 260px"
                fetchPriority="low"
                alt=""
                width={800}
                height={1738}
                className="absolute top-[6%] -left-[42%] w-[86%] rotate-[-8deg] rounded-[1.6rem] opacity-70 shadow-2xl shadow-shadow/60"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={shots[0].src}
                srcSet={screenSrcSet(shots[0])}
                sizes="(max-width: 480px) 62vw, 300px"
                alt={t.alts[0]}
                width={800}
                height={1738}
                fetchPriority="high"
                className="relative w-full rotate-[4deg] rounded-[1.8rem] shadow-2xl shadow-shadow/70"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="gutter border-t border-line py-20 md:py-32" aria-labelledby="about-game">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel index="01">{t.about}</SectionLabel>
            <h2 id="about-game" className="sr-only">
              {t.aboutH}
            </h2>
          </div>
          <div className="space-y-6 md:col-span-8">
            {t.description.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p
                  className={
                    i === 0
                      ? "font-display text-[clamp(1.6rem,3.4vw,2.75rem)] leading-[1.12] font-medium tracking-[-0.025em]"
                      : "max-w-[62ch] text-lg leading-relaxed text-fg/75"
                  }
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="gutter border-t border-line py-20 md:py-32" aria-labelledby="features">
        <SectionLabel index="02">{t.highlights}</SectionLabel>
        <h2 id="features" className="sr-only">
          {t.highlights}
        </h2>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.map((f, i) => (
            <Reveal as="li" key={f.title} delay={(i % 3) * 0.08} className="rounded-3xl border border-line bg-bg-raised p-7 md:p-8">
              <span className="font-mono text-xs" style={{ color: "var(--game-fg)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-3 leading-relaxed text-fg/70">{f.body}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="border-t border-line py-20 md:py-32" aria-labelledby="screens">
        <div className="gutter">
          <SectionLabel index="03">{t.screens}</SectionLabel>
          <h2 id="screens" className="sr-only">
            {t.screens}
          </h2>
        </div>
        <ul
          className="gutter mt-12 flex snap-x snap-mandatory scroll-px-[var(--gutter)] gap-4 overflow-x-auto pb-6 [scrollbar-width:thin] md:gap-6"
          tabIndex={0}
          aria-label={t.screensLabel}
        >
          {shots.map((s, i) => (
            <li key={s.src} className="shrink-0 snap-start" style={{ width: phoneW("68vw", 280, 62) }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.src}
                srcSet={screenSrcSet(s)}
                sizes="(max-width: 480px) 68vw, 280px"
                alt={t.alts[i]}
                width={s.width}
                height={s.height}
                loading="lazy"
                decoding="async"
                className="w-full rounded-[1.6rem] border border-line"
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="gutter border-t border-line py-20 md:py-28" aria-labelledby="help">
        <SectionLabel index="04">{t.help}</SectionLabel>
        <h2 id="help" className="sr-only">
          {t.helpH}
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {legal.map((x) => (
            <li key={x.href}>
              <a
                href={x.href}
                {...(isExternal(x.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-line p-6 transition-colors duration-500 hover:border-fg/30"
              >
                <span className="font-display text-xl font-medium tracking-tight">{x.label}</span>
                <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
        {game.supportEmail && (
          <p className="mt-6 text-sm text-muted">
            {t.email}{" "}
            <a
              href={`mailto:${game.supportEmail}?subject=${encodeURIComponent(`${game.name} support`)}`}
              className="text-fg/85 underline underline-offset-4 hover:text-fg"
            >
              {game.supportEmail}
            </a>
          </p>
        )}
      </section>

      <section className="gutter border-t border-line py-20 md:py-28" aria-labelledby="more-games">
        <h2 id="more-games" className="eyebrow">
          {t.more}
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {others.map((g) => (
            <li key={g.slug}>
              <Link
                href={`/${g.slug}/`}
                lang="en"
                className="group flex items-center gap-4 rounded-2xl border border-line p-4 transition-colors duration-500 hover:border-fg/30"
              >
                <GameIcon game={g} size={56} className="transition-transform duration-500 group-hover:-rotate-6" />
                <span className="min-w-0">
                  <span className="block truncate font-display text-lg font-semibold tracking-tight">{g.name}</span>
                  <span className="block truncate text-sm text-muted">{g.subtitle}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}

export function lingridMetadata(lang: Lang) {
  const game = getGame("lingrid");
  const en = lang === "en";
  const title = en ? `${game.name}: ${game.subtitle}` : `${game.name}: Türkçe ipucu, İngilizce cevap`;
  const description = en ? game.tagline : tr.tagline;
  const path = en ? "/lingrid/en/" : "/lingrid/";
  return {
    title,
    description,
    alternates: { canonical: path, languages: { tr: "/lingrid/", en: "/lingrid/en/", "x-default": "/lingrid/" } },
    openGraph: {
      title,
      description,
      url: path,
      locale: en ? "en_US" : "tr_TR",
      images: [{ url: game.iconLarge!, width: 1024, height: 1024, alt: `${game.name}` }],
    },
    twitter: { card: "summary" as const, title, description },
  };
}
