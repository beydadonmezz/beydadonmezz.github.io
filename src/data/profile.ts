export const profile = {
  name: "Beydanur Dönmez",
  firstName: "Beydanur",
  lastName: "Dönmez",
  title: "Senior Frontend Developer",
  headline:
    "I turn ambitious designs into fast, animation-rich interfaces, and the component systems that keep them that way.",
  location: "Mersin, Türkiye",
  timeZone: "Europe/Istanbul",
  email: "beydaacar1@gmail.com",
  siteUrl: "https://beydadonmezz.github.io",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/beydadonmez" },
    { label: "GitHub", href: "https://github.com/beydadonmezz" },
  ],

  about: {
    statement:
      "5+ years of shipping interfaces for brands in finance, e-commerce, AI, energy, architecture and consumer products, where the details are the product.",
    paragraphs: [
      "I'm a Senior Frontend Developer working with React, Next.js, TypeScript and React Native. Across 70+ projects I've focused on frontend architecture, reusable component systems and animation-rich interfaces, and on building them against real REST APIs.",
      "Just as much of the job happens around the code: collaborating closely with clients, reviewing code and mentoring other developers so that teams ship with confidence.",
    ],
    stats: [
      { value: "5+", label: "Years in frontend" },
      { value: "70+", label: "Projects shipped" },
    ],
  },

  experience: [
    {
      role: "Co-Founder & Engineer",
      company: "Create UI",
      period: "Jan 2026 – Present",
      place: "Remote",
      summary:
        "Frontend implementation and technical decisions across reusable UI, product flows and developer-facing features.",
    },
    {
      role: "Senior Frontend Developer",
      company: "Basework Studio",
      period: "Jun 2021 – Present",
      place: "Istanbul",
      summary: null,
    },
  ],

  education: {
    degree: "BSc Civil Engineering",
    school: "Selçuk University",
    period: "2017 – 2022",
  },

  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "React Native",
    "HTML5",
    "CSS3",
    "SCSS",
    "Tailwind",
    "Bootstrap",
    "BEM",
    "CSS Modules",
    "REST",
    "Supabase",
    "Zustand",
    "GSAP",
    "Git",
    "GitHub",
    "Figma",
  ],

  highlights: [
    {
      name: "Greenwich Coffee",
      note: "5 Altın Örümcek awards, incl. 1st Place E-Commerce",
    },
    {
      name: "Midas",
      note: "Altın Örümcek 2022, 1st Place Banking & Finance",
    },
    {
      name: "Yurdaer Architecture",
      note: "Four Altın Örümcek 1st Places, Awwwards Honorable Mention 2025",
    },
    {
      name: "Park Studio",
      note: "Led frontend. Awwwards HM, FWA of the Day, London Design Awards 2024 Gold",
    },
    { name: "Lu Community", note: null },
    { name: "Intenseye", note: null },
    { name: "Eşarj", note: null },
    { name: "Şeren Döviz", note: null },
    { name: "Treeo VC", note: null },
    { name: "A-Han Mimarlık", note: null },
  ],

  /** Shown in the marquee under the hero. */
  awards: [
    "Awwwards Honorable Mention",
    "FWA of the Day",
    "London Design Awards 2024 Gold",
    "Altın Örümcek 1st Place E-Commerce",
    "Altın Örümcek 2022 1st Place Banking & Finance",
    "4× Altın Örümcek 1st Place",
  ],
} as const;
