import type { Game } from "./types";

/**
 * Independent iOS games. Each entry gets a landing page at /<slug>/.
 * `legal` holds the privacy/terms/support URLs submitted to App Store Connect;
 * the game page links to them (they are never copied into this repo).
 * Set `appStoreUrl` once the game is live to enable the App Store button.
 */
export const games: Game[] = [
  {
    slug: "lingrid",
    name: "LINGRID",
    subtitle: "Turkish clues, English answers",
    tagline: "Turkish clue, English answer: an arrowword puzzle for learning English.",
    description: [
      "LINGRID is a crossword for Turkish speakers learning English: every clue is a Turkish word, and its answer is the English translation.",
      "111 puzzles across four CEFR levels from A1 to B2, a new Daily Puzzle every day with a Game Center leaderboard, and color themes you unlock with diamonds. Stuck? Reveal a letter or a whole word.",
      "The app's menus and clues are in Turkish; the answers are in English. No account needed, and it plays offline.",
    ],
    features: [
      {
        title: "Turkish clue, English answer",
        body: "Every clue is a Turkish word and every answer is its English translation, so each solved grid builds vocabulary.",
      },
      { title: "111 puzzles, A1 to B2", body: "Puzzles across four CEFR levels, from first words to upper-intermediate." },
      {
        title: "A new puzzle every day",
        body: "One Daily Puzzle for everyone worldwide, with its own Game Center leaderboard.",
      },
      { title: "Streaks and medals", body: "Keep your streak by playing every day, and earn a medal for every finished puzzle." },
      { title: "Themes to unlock", body: "Earn diamonds by playing and spend them on new color themes, in light or dark." },
      { title: "Offline, no account", body: "Play anywhere without signing up, with an optional daily reminder." },
    ],
    icon: "/games/lingrid/icon-512.webp",
    iconLarge: "/games/lingrid/icon.png",
    screenshots: [
      { src: "/games/lingrid/screen-1.webp", width: 800, height: 1738, alt: "Solving a grid: Turkish clue, English answer" },
      { src: "/games/lingrid/screen-2.webp", width: 800, height: 1738, alt: "The Daily Puzzle mid-solve" },
      { src: "/games/lingrid/screen-3.webp", width: 800, height: 1738, alt: "Level select with 111 puzzles from A1 to B2" },
      { src: "/games/lingrid/screen-4.webp", width: 800, height: 1738, alt: "Home screen with the daily streak" },
      { src: "/games/lingrid/screen-5.webp", width: 800, height: 1738, alt: "A grid in the purple dark theme" },
      { src: "/games/lingrid/screen-6.webp", width: 800, height: 1738, alt: "Puzzle completion screen with a medal" },
    ],
    theme: { accent: "#9d91ff", secondary: "#4a3ae3" },
    appStoreUrl: null,
    platforms: "For iPhone",
    supportEmail: "lingrid.sandbox@outlook.com",
    legal: {
      privacy: "https://beydadonmezz.github.io/lingrid-site/privacy",
      terms: "https://beydadonmezz.github.io/lingrid-site/terms",
      support: "https://beydadonmezz.github.io/lingrid-site/support",
      tr: {
        privacy: "https://beydadonmezz.github.io/lingrid-site/tr/gizlilik",
        terms: "https://beydadonmezz.github.io/lingrid-site/tr/kosullar",
        support: "https://beydadonmezz.github.io/lingrid-site/tr/destek",
      },
    },
  },
  {
    slug: "fishburg",
    name: "Fishburg: Aquarium",
    subtitle: "Cozy fish tank to decorate",
    tagline: "A cozy aquarium that keeps swimming while you're away.",
    description: [
      "Fishburg: Aquarium is a cozy real-time fish tank. Buy fish eggs, watch them hatch and raise each fish from baby to adult.",
      "Feed them on time, wipe the glass clean with the sponge and sell grown fish for coins and XP. Then make the reef yours with decorations, plants and living decor like a hermit crab, a baby octopus and a starfish.",
      "Plays in landscape on iPhone, and on iPad.",
    ],
    features: [
      {
        title: "From egg to adult",
        body: "16 fish species that grow in real time, from fast growers ready in minutes to rare fish that take days.",
      },
      { title: "Keep them happy", body: "Feed your fish on time and wipe the glass clean with the sponge." },
      {
        title: "Decorate your way",
        body: "32 decorations and 22 plants. Edit Mode lets you move, flip, resize and layer every piece.",
      },
      { title: "50 levels, up to 5 tanks", body: "Every level unlocks something new as your aquarium grows." },
      { title: "Something every day", body: "Daily tasks, a reward chest, a free gift and a login calendar." },
      { title: "Game Center", body: "A leaderboard and achievements to chase." },
    ],
    icon: null,
    iconLarge: null,
    screenshots: [],
    theme: { accent: "#5ec8e5", secondary: "#ff9a7a" },
    appStoreUrl: null,
    platforms: "For iPhone and iPad",
    supportEmail: "fishburg.sandbox@outlook.com",
    legal: {
      privacy: "https://beydadonmezz.github.io/fishburg-site/privacy/",
      terms: "https://beydadonmezz.github.io/fishburg-site/terms/",
      support: "https://beydadonmezz.github.io/fishburg-site/support/",
      tr: {
        privacy: "https://beydadonmezz.github.io/fishburg-site/tr/privacy/",
        terms: "https://beydadonmezz.github.io/fishburg-site/tr/terms/",
        support: "https://beydadonmezz.github.io/fishburg-site/tr/support/",
      },
    },
  },
  {
    slug: "bubblesway",
    name: "Bubble Sway",
    subtitle: "Glide through moving gaps",
    tagline: "Dodge, collect, and sway through a colourful underwater adventure.",
    description: [
      "Bubble Sway is a quick, one-finger arcade game about slipping through gaps.",
      "Swipe or drag left and right to steer your bubble through gaps that slide from side to side as they drift toward you. Collect bubbles, catch rare golden bubbles and dodge the spiky puffers. One touch ends the run, so every gap counts.",
      "Purchases are optional and protected by a Parent Check. No sign-up needed.",
    ],
    features: [
      {
        title: "One-finger arcade",
        body: "Swipe to steer through gaps that slide side to side, or switch on tilt control in Settings.",
      },
      { title: "Catch golden bubbles", body: "Collect bubbles, chase the rare golden ones and dodge the spiky puffers." },
      { title: "Make your bubble yours", body: "Earn Gold and spend it on new bubbles, trails and pop effects." },
      { title: "Six themes", body: "Unlock six colorful themes, from Coral Pop to Deep Space." },
      {
        title: "Rewards every day",
        body: "A seven-day Daily ladder, daily and weekly Missions, and Achievements to earn as you play.",
      },
      { title: "Short runs", body: "Easy to start and hard to put down. No sign-up needed." },
    ],
    icon: "/games/bubblesway/icon-512.webp",
    iconLarge: "/games/bubblesway/icon.png",
    screenshots: [
      { src: "/games/bubblesway/screen-1.webp", width: 800, height: 1738, alt: "Gameplay in the Coral Pop theme" },
      { src: "/games/bubblesway/screen-2.webp", width: 800, height: 1689, alt: "Gameplay in the Neon Deep Sea theme with a trail" },
      { src: "/games/bubblesway/screen-3.webp", width: 800, height: 1738, alt: "Customising the bubble" },
      { src: "/games/bubblesway/screen-4.webp", width: 800, height: 1738, alt: "Theme selection" },
      { src: "/games/bubblesway/screen-5.webp", width: 800, height: 1738, alt: "Seven-day daily rewards" },
      { src: "/games/bubblesway/screen-6.webp", width: 800, height: 1738, alt: "Achievements" },
    ],
    theme: { accent: "#36dff5", secondary: "#ff6f61" },
    appStoreUrl: null,
    platforms: "For iPhone",
    supportEmail: "support@bubblesway.app",
    website: "https://bubblesway.app/",
    legal: {
      privacy: "https://bubblesway.app/privacy/",
      support: "https://bubblesway.app/support/",
    },
  },
  {
    slug: "puzzle-numbers",
    name: "Puzzle Numbers: Slide & Solve",
    subtitle: "Slide the numbers into order",
    tagline: "The classic sliding number puzzle, polished for iPhone.",
    description: [
      "Puzzle Numbers is the classic sliding number puzzle, made for touch. Drag the tiles into the empty space and put every number back in order.",
      "A fresh Daily puzzle every day, four ways to play, seven free themes and Game Center leaderboards. Grab any tile in line with the gap and the whole row or column slides together.",
      "Every puzzle is generated on your device, so you can play without an internet connection.",
    ],
    features: [
      {
        title: "Four ways to play",
        body: "Classic at your own pace, Daily, Speed against the clock and Challenge within a move limit.",
      },
      { title: "A new puzzle every day", body: "One Daily board, the same for every player, with its own leaderboard." },
      {
        title: "3×3 up to 7×7",
        body: "Complete a grid once to unlock the next size up. Classic puzzles come with three free hints.",
      },
      { title: "Slide, don't tap", body: "Drag a whole row or column into the gap. Every drag counts as one move." },
      { title: "Seven free themes", body: "Default, Emerald, Sunset, Neon, Frost, Sugar and Midnight." },
      { title: "Game Center", body: "Climb the Global, Weekly and Daily leaderboards." },
    ],
    icon: "/games/puzzle-numbers/icon-512.webp",
    iconLarge: "/games/puzzle-numbers/icon.png",
    screenshots: [
      { src: "/games/puzzle-numbers/screen-1.webp", width: 800, height: 1731, alt: "Sliding the numbers into order" },
      { src: "/games/puzzle-numbers/screen-2.webp", width: 800, height: 1731, alt: "Classic, Daily, Challenge and Speed modes" },
      { src: "/games/puzzle-numbers/screen-3.webp", width: 800, height: 1731, alt: "The Daily puzzle" },
      { src: "/games/puzzle-numbers/screen-4.webp", width: 800, height: 1731, alt: "Seven free themes" },
      { src: "/games/puzzle-numbers/screen-5.webp", width: 800, height: 1731, alt: "Game Center leaderboards" },
    ],
    theme: { accent: "#f8db53", secondary: "#3d9bff" },
    appStoreUrl: null,
    platforms: "For iPhone",
    supportEmail: "puzzlenumbers.sandbox@gmail.com",
    website: "https://puzzlenumbers.app/",
    legal: {
      privacy: "https://puzzlenumbers.app/privacy",
      terms: "https://puzzlenumbers.app/terms",
    },
  },
];
