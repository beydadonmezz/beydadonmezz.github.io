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
    tagline: "Turkish clue, English answer: a crossword for learning English.",
    description: [
      "LINGRID is a crossword for Turkish speakers learning English: every clue is a Turkish word, and its answer is the English translation.",
      "More than 350 puzzles across four CEFR levels from A1 to B2, and a new Daily Puzzle every day, the same for everyone, with leaderboards on Game Center (iPhone) and Google Play Games (Android). Stuck? Reveal a letter or a whole word with points, or in level puzzles by watching a short ad.",
      "The app's menus and clues are in Turkish; the answers are in English. No account needed. Free on the App Store and Google Play.",
    ],
    features: [
      {
        title: "Turkish clue, English answer",
        body: "Every clue is a Turkish word and every answer is its English translation, so each solved grid builds vocabulary.",
      },
      { title: "350+ puzzles, A1 to B2", body: "Puzzles across four CEFR levels, from first words to upper-intermediate." },
      {
        title: "A new puzzle every day",
        body: "One Daily Puzzle, the same for everyone, with leaderboards on Game Center (iPhone) and Google Play Games (Android).",
      },
      { title: "Streaks and medals", body: "Keep your streak by playing every day, and earn a medal for every finished puzzle." },
      { title: "Themes to unlock", body: "Earn diamonds by playing and spend them on new color themes, in light or dark." },
      { title: "Hints when you need them", body: "Stuck? Reveal a letter or a word with points, or in level puzzles by watching an ad. No account needed." },
    ],
    icon: "/games/lingrid/icon-512.webp",
    iconLarge: "/games/lingrid/icon.png",
    screenshots: [
      { src: "/games/lingrid/screen-1.webp", width: 800, height: 1738, alt: "Solving the Daily Puzzle: Turkish clues, English answers" },
      { src: "/games/lingrid/screen-2.webp", width: 800, height: 1738, alt: "A level puzzle mid-solve" },
      { src: "/games/lingrid/screen-3.webp", width: 800, height: 1738, alt: "Stuck? Reveal a letter by watching an ad or with points" },
      { src: "/games/lingrid/screen-4.webp", width: 800, height: 1738, alt: "A solved puzzle: score, time and medal" },
      { src: "/games/lingrid/screen-5.webp", width: 800, height: 1738, alt: "Level select: A1 to B2" },
      { src: "/games/lingrid/screen-6.webp", width: 800, height: 1738, alt: "Color themes, unlocked with diamonds" },
    ],
    theme: { accent: "#9d91ff", accentOnLight: "#4a3ae3", secondary: "#4a3ae3" },
    appStoreUrl: "https://apps.apple.com/app/lingrid/id6815554304",
    platforms: "iPhone and Android",
    supportEmail: "lingrid.sandbox@outlook.com",
    legal: {
      privacy: "https://beydadonmezz.github.io/lingrid/privacy",
      terms: "https://beydadonmezz.github.io/lingrid/terms",
      support: "https://beydadonmezz.github.io/lingrid/support",
      tr: {
        privacy: "https://beydadonmezz.github.io/lingrid/tr/gizlilik",
        terms: "https://beydadonmezz.github.io/lingrid/tr/kosullar",
        support: "https://beydadonmezz.github.io/lingrid/tr/destek",
      },
    },
  },
  {
    slug: "fishburg",
    name: "Fishburg: Aquarium",
    subtitle: "A fish tank to decorate",
    tagline: "A calm aquarium that keeps swimming while you're away.",
    // The page itself is static HTML (staticSite below): this text only feeds cards and metadata.
    description: [
      "Fishburg: Aquarium is a relaxing aquarium game about fish care in a real-time 3D tank. Buy fish eggs, watch them hatch and raise each fish from baby to adult.",
      "Feed them on time, wipe the glass clean with the sponge and sell grown fish for coins and XP. Then decorate your aquarium your way and visit your friends' tanks.",
      "Plays in landscape on phones and tablets.",
    ],
    features: [
      {
        title: "From egg to adult",
        body: "22 fish species that grow in real time, from fast growers ready in minutes to rare fish that take days.",
      },
      { title: "Keep them happy", body: "Feed your fish on time and wipe the glass clean with the sponge." },
      {
        title: "Decorate your way",
        body: "34 decorations and 22 plants, 9 water scenes and 10 kinds of sand. Edit Mode lets you move, rotate, flip and resize every piece.",
      },
      { title: "50 levels, up to 5 tanks", body: "Every level unlocks something new as your aquarium grows." },
      { title: "Something every day", body: "Daily tasks, a reward chest, a free gift and a login calendar." },
      { title: "Friends", body: "Add friends by player ID, visit their tanks, like them and clean their glass." },
    ],
    icon: "/games/fishburg/icon-512.webp",
    iconLarge: "/games/fishburg/icon.png",
    screenshots: [],
    theme: { accent: "#ff9a3c", accentOnLight: "#a8460c", secondary: "#1e8fd8" },
    appStoreUrl: null,
    platforms: "For iPhone, iPad and Android",
    supportEmail: "fishburg.sandbox@outlook.com",
    // Static pages copied from the Fishburg repo's site/ folder (its site/README.md); never edit them here.
    // The old address /fishburg-site/ (its own repo) redirects to these pages and must stay published.
    staticSite: ["", "privacy", "terms", "support", "delete-account", "tr", "tr/privacy", "tr/terms", "tr/support", "tr/delete-account"],
    legal: {
      privacy: "/fishburg/privacy/",
      terms: "/fishburg/terms/",
      support: "/fishburg/support/",
      tr: {
        privacy: "/fishburg/tr/privacy/",
        terms: "/fishburg/tr/terms/",
        support: "/fishburg/tr/support/",
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
    theme: { accent: "#36dff5", accentOnLight: "#0a6f8f", secondary: "#ff6f61" },
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
    subtitle: "Race your friends live",
    tagline: "The sliding number puzzle, raced live against your friends.",
    description: [
      "Puzzle Numbers turns the classic sliding number puzzle into a live race. You and your opponent get the same board at the same moment, and you watch each other's progress as you play.",
      "Race a random player or a friend in Duo, race up to 8 players on one board in a Group race, and compare today's Daily with your friends, replays side by side. Every result is checked by the server.",
      "Solo modes are still here and work offline: Classic, Daily, Speed and Challenge, from 3×3 to 7×7, with seven themes. Online races need an internet connection. iPhone and Android, 11 languages, leaderboards on Game Center and Google Play Games.",
    ],
    features: [
      {
        title: "Duo, live",
        body: "Race a random player, or add a friend with their friend code and invite them. Same board, same moment.",
      },
      { title: "Group race, up to 8", body: "Create a room, share its code and see who finishes first." },
      {
        title: "Daily with friends",
        body: "One Daily puzzle, the same for everyone. Compare times and watch replays side by side.",
      },
      {
        title: "Solo, offline too",
        body: "Classic, Daily, Speed and Challenge, from 3×3 to 7×7, with seven themes. No connection needed.",
      },
      { title: "Gold", body: "A one-time purchase: unlimited races, a gold frame and a crown, and no ads." },
      {
        title: "11 languages",
        body: "Leaderboards on Game Center (iPhone) and Google Play Games (Android).",
      },
    ],
    icon: "/games/puzzle-numbers/icon-512.webp",
    iconLarge: "/games/puzzle-numbers/icon.png",
    screenshots: [
      { src: "/games/puzzle-numbers/screen-1.webp", width: 800, height: 1731, alt: "A live Duo race with the opponent's progress" },
      { src: "/games/puzzle-numbers/screen-2.webp", width: 800, height: 1731, alt: "Winning a Duo race" },
      { src: "/games/puzzle-numbers/screen-3.webp", width: 800, height: 1731, alt: "A Group race lobby with its code" },
      { src: "/games/puzzle-numbers/screen-4.webp", width: 800, height: 1731, alt: "Daily replays side by side" },
      { src: "/games/puzzle-numbers/screen-5.webp", width: 800, height: 1731, alt: "Gold: unlimited races" },
      { src: "/games/puzzle-numbers/screen-6.webp", width: 800, height: 1731, alt: "Solo modes and seven themes" },
    ],
    theme: { accent: "#f8db53", accentOnLight: "#0b57d0", secondary: "#3d9bff" },
    // Release day: "https://apps.apple.com/app/id6815660932" and
    // "https://play.google.com/store/apps/details?id=com.beyda.puzzlenumbers".
    appStoreUrl: null,
    playStoreUrl: null,
    platforms: "For iPhone and Android",
    supportEmail: "puzzlenumbers.sandbox@gmail.com",
    website: "https://puzzlenumbers.app/",
    legal: {
      privacy: "https://puzzlenumbers.app/privacy",
      terms: "https://puzzlenumbers.app/terms",
      deleteData: "https://puzzlenumbers.app/delete",
    },
  },
  {
    slug: "snugdoku",
    name: "Snugdoku",
    subtitle: "3 logic puzzles, 3 dailies",
    tagline: "Three puzzles in one app: Place, Connect and Divide.",
    description: [
      "Snugdoku brings three logic puzzles together in one app. Place: put one piece in every row, column and colour region; pieces never touch, not even diagonally. Connect: draw one path from 1 through every number in order and fill every square. Divide: split the board into rectangles, one number in each, and the number is its area.",
      "Every day brings three daily puzzles, the same for everyone, with one shared streak and leaderboards for your times on Game Center and Google Play Games. Every puzzle has exactly one solution, and a hint places the next correct step on the board.",
      "Hundreds of levels in each mode, light and dark mode, iPhone, iPad and Android, 11 languages, no account needed. It plays offline.",
    ],
    features: [
      { title: "Place", body: "One piece in every row, column and colour region. Pieces never touch, not even diagonally." },
      { title: "Connect", body: "One path from 1 through every number in order, filling every square." },
      { title: "Divide", body: "Split the board into rectangles: one number in each, and the number is its area." },
      { title: "Three dailies, one streak", body: "Three new daily puzzles for everyone, a shared streak and leaderboards for your times." },
      { title: "One solution, always", body: "Every puzzle is checked to have exactly one solution; hints place the next correct step." },
      { title: "Offline, no account", body: "Light and dark mode, iPhone, iPad and Android, 11 languages." },
    ],
    icon: "/games/snugdoku/icon-512.webp",
    iconLarge: "/games/snugdoku/icon.png",
    screenshots: [
      { src: "/games/snugdoku/screens/1-modes.webp", width: 660, height: 1434, alt: "Snugdoku home screen with the three puzzles, Place, Connect and Divide, and today's daily puzzles" },
      { src: "/games/snugdoku/screens/2-place.webp", width: 660, height: 1434, alt: "Place: one piece in every row, column and colour region" },
      { src: "/games/snugdoku/screens/3-connect.webp", width: 660, height: 1434, alt: "Connect: a path from 1 through every number in order" },
      { src: "/games/snugdoku/screens/4-divide.webp", width: 660, height: 1434, alt: "Divide: the board split into rectangles, one number in each" },
      { src: "/games/snugdoku/screens/5-daily.webp", width: 660, height: 1434, alt: "The result screen after a daily puzzle, with time and streak" },
      { src: "/games/snugdoku/screens/6-ranks.webp", width: 660, height: 1434, alt: "Daily leaderboards on Game Center" },
    ],
    theme: { accent: "#fdb449", accentOnLight: "#9a5c00", secondary: "#7fd8c4" },
    appStoreUrl: null,
    platforms: "For iPhone, iPad and Android",
    supportEmail: "snugdoku.sandbox@outlook.com",
    legal: {
      // Hosted here since 2026-10-28 (src/data/legal/snugdoku.tsx); snugdoku-site only redirects to these.
      privacy: "/snugdoku/privacy/",
      terms: "/snugdoku/terms/",
      support: "/snugdoku/support/",
      tr: {
        privacy: "/snugdoku/tr/privacy/",
        terms: "/snugdoku/tr/terms/",
        support: "/snugdoku/tr/support/",
      },
    },
  },
  {
    slug: "sledpaws",
    name: "Sledpaws: Snow Slide",
    subtitle: "Launch, slide, save the pups",
    tagline: "Pull back, aim at the bullseye and let go! Slide through 38 maps with animal riders and bring every lost pup home.",
    description: [
      "Press down the spring launcher, aim at the bullseye on the snow and let go! Your rider shoots down a long track and slides as far as the speed takes it.",
      "Collect coins, upgrade, and go further every run until you cross the finish line and a new world opens. There are 38 maps in 20 themes, from snowy streets, frozen lakes and a lantern village to desert dunes, a candy town, cloud castles, moon craters, a giant toy room and a volcano valley, and every map brings its own twist: trams crossing the road, bounce pads, cracked ice, side wind, rolling snowballs, waves, geysers, low gravity and whirlwinds.",
      "Little lost pups wait along every track. Touch one and it jumps on behind you; bring it home for bonus treasure, but hold on, because a crash sends them tumbling. Every few minutes a bonus slide opens high above the clouds, full of coins. Daily rewards, daily tasks, a free chest and a piggy bank keep every day fresh, and there is no energy and no tickets: play as long as you like.",
    ],
    features: [
      { title: "Hit the bullseye", body: "Press, aim and let go. Slide right through the target's centre for a Perfect start." },
      { title: "38 maps, 20 themes", body: "Every map has its own twist, from cracked ice and side wind to waves, geysers and low gravity on the moon." },
      { title: "Save the lost pups", body: "Pick up pups along the track, bring them home for treasure and fill your pup album." },
      { title: "Bonus sky slides", body: "Every few minutes a coin-filled bonus slide opens above the clouds. Stay on it as long as you can." },
      { title: "11 riders, 25 rides", body: "A cat, panda, penguin, koala, fox, bear, bunny, puppy, giraffe, hedgehog or raccoon in 26 looks, on 25 sleds and themed rides." },
      { title: "A launcher that grows", body: "Upgrades are never lost: your toy spring launcher grows from wood to chrome, crystal ice, gold and rainbow. Daily rewards, tasks and a free chest, and no energy to wait for." },
    ],
    icon: "/games/sledpaws/icon-512.webp",
    iconLarge: "/games/sledpaws/icon.png",
    screenshots: [
      { src: "/games/sledpaws/screen-1.webp", width: 800, height: 1422, alt: "Home screen: the cat on its sled on the chrome spring launcher, with the Launcher, Ride and Treasure upgrades" },
      { src: "/games/sledpaws/screen-2.webp", width: 800, height: 1422, alt: "Sliding down an icy track through a snowy valley" },
      { src: "/games/sledpaws/screen-3.webp", width: 800, height: 1422, alt: "Pressing down the spring launcher and aiming at the target in the candy town" },
      { src: "/games/sledpaws/screen-4.webp", width: 800, height: 1422, alt: "A bonus run on a coin-filled slide above the clouds" },
      { src: "/games/sledpaws/screen-5.webp", width: 800, height: 1422, alt: "Sliding over the moon craters with a saved pup on board" },
      { src: "/games/sledpaws/screen-6.webp", width: 800, height: 1422, alt: "Run results with coins earned, pups brought home and an optional bonus spin" },
      { src: "/games/sledpaws/screen-7.webp", width: 800, height: 1422, alt: "A new pup joins the album: a raccoon in a green scarf" },
    ],
    theme: { accent: "#5bb8f5", accentOnLight: "#1f7fc4", secondary: "#ffd23f" },
    appStoreUrl: null,
    platforms: "For iPhone, iPad and Android",
    supportEmail: "sledpaws.sandbox@outlook.com",
    // Hosted here (src/data/legal/sledpaws.tsx).
    legal: {
      privacy: "/sledpaws/privacy/",
      terms: "/sledpaws/terms/",
      support: "/sledpaws/support/",
      tr: {
        privacy: "/sledpaws/tr/privacy/",
        terms: "/sledpaws/tr/terms/",
        support: "/sledpaws/tr/support/",
      },
    },
  },
];
