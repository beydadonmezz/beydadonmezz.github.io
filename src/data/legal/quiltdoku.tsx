import type { HostedLegal } from "../types";

/**
 * Quiltdoku's privacy policy and support page. These pages ARE the single source (App Store Connect, Play Console,
 * AdMob and the app's Settings link here). Every statement follows the app's code (Quiltdoku repo:
 * src/services/ads.ts, usPrivacy.ts, purchases/, durable.ts, cloudBackup.ts, leaderboards.ts, src/economy.ts,
 * ads.config.json, plugins/withAndroidBackup.js); update the
 * effective date whenever the app's data handling changes.
 */
const EMAIL = "quiltdoku.sandbox@outlook.com";

const mail = (
  <a href={`mailto:${EMAIL}`} className="legal-link">
    {EMAIL}
  </a>
);

const ext = (href: string, label: string) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="legal-link">
    {label}
  </a>
);

export const quiltdokuLegal: HostedLegal = {
  privacy: {
    title: "Privacy Policy",
    effective: "19 October 2026",
    sections: [
      {
        heading: "The short version",
        body: [
          "Quiltdoku has no account and no sign-up. We never ask for your name, email address, phone number or location.",
          "Your progress and your diamonds are saved on your device. We do not run a server, and the game has no analytics, crash reporting or tracking tools of its own. All puzzles are built into the app; it downloads nothing from us.",
          "Ads are provided by Google AdMob together with its ad partners Unity Ads, Liftoff Monetize and Mintegral. They are personalised only if you agree (on iPhone and iPad in Apple's tracking prompt; in the EEA, the UK and Switzerland also in Google's consent form; in some US states you can opt out). Otherwise you get non-personalised ads.",
          "Purchases (Remove Ads, diamond packs) are handled entirely by Apple or Google. We never see your payment details.",
          "Leaderboards are handled by Apple Game Center or Google Play Games, if you are signed in to them.",
          "The game works the same whatever you choose in any privacy prompt.",
        ],
      },
      {
        heading: "1. Who we are",
        body: [
          <>
            Quiltdoku is made by BEYDANUR DONMEZ (Beydanur Dönmez) (&ldquo;we&rdquo;, &ldquo;us&rdquo;), the data
            controller for the app. Contact: {mail}. Google, Apple and the ad partners named in section 3 provide some
            services inside the app (ads, purchases, leaderboards); they handle the data they collect under their own
            privacy policies, linked below.
          </>,
        ],
      },
      {
        heading: "2. Data on your device",
        body: [
          "The game saves on your device: your level progress and best times, the daily puzzles you solved, your daily times and streak, puzzles you have started, how many games you finished since the last ad, leaderboard scores waiting to be sent, your settings (theme, accent colour, sound, haptics, language), your diamond balance, the colour themes and level blocks you unlocked, how many free-diamond ads you watched today, whether you bought Remove Ads, and the store transaction numbers of diamond packs already added to your balance (so a purchase is never counted twice).",
          "So that deleting and reinstalling the game on the same device does not reset your streak, level or diamonds, a small copy of that progress (your highest level, the number of finished puzzles, the days you solved the daily puzzle and your best daily time, the ad counter, whether you have seen the tutorial, and the diamond, theme, level block, free-ad and purchase data listed above) is also kept in your device's iOS Keychain (on iPhone and iPad, not synced through iCloud Keychain) or in Google Block Store (on Android). It stays on your device and in your own device backups; it is never sent to us.",
          "On Android, the game's progress is also included in Android's own backup of your phone (Google account backup and transfer to a new phone) if you use it. The iPhone and iPad version does not sync your progress through iCloud.",
        ],
      },
      {
        heading: "3. Ads",
        body: [
          "The game shows a full-screen ad after every second finished level, starting from level 7. There are never ads during the six tutorial levels, during a puzzle, or before or after the daily puzzle. Players who bought Remove Ads never see these ads.",
          "You can also choose to watch a rewarded video ad for an extra hint in a level, for free diamonds (at most five a day) or to double the diamonds of a level you just finished. These are always optional and labelled; the reward is given only when the ad network confirms you watched it. There are no banner ads.",
          <>
            Ads are requested through Google&rsquo;s Mobile Ads SDK (Google AdMob). AdMob lets these ad partners bid to
            show an ad, and their SDKs are part of the app for that purpose: Unity Ads (Unity Technologies), Liftoff
            Monetize (Liftoff Mobile, formerly Vungle) and Mintegral (Mintegral International Limited). Google and
            these partners collect device and usage data such as your IP address, device type, operating system, app
            version and ad interactions, and, if you allow it, your device&rsquo;s advertising identifier, to show ads,
            measure them and prevent fraud. They receive it directly from their SDKs; it does not pass through us. See{" "}
            {ext("https://policies.google.com/technologies/partner-sites", "how Google uses data from apps that use its services")},{" "}
            {ext("https://policies.google.com/privacy", "Google's Privacy Policy")},{" "}
            {ext("https://unity.com/legal/game-player-and-app-user-privacy-policy", "Unity's Privacy Policy")},{" "}
            {ext("https://liftoff.io/privacy-policy/", "Liftoff's Privacy Policy")} and{" "}
            {ext("https://www.mintegral.com/en/privacy", "Mintegral's Privacy Policy")}.
          </>,
          "Ads are limited to content rated for teens and older (Google's \"T\" rating) or lower.",
        ],
      },
      {
        heading: "4. Your privacy choices",
        body: [
          "iPhone and iPad: the game asks for permission to track through Apple's prompt. If you choose \"Ask App Not to Track\", ads are non-personalised. You can change it any time in iOS Settings → Privacy & Security → Tracking.",
          "EEA, UK and Switzerland: Google's consent form appears before ads load. You can change your choices any time in the game: Settings → Ad privacy options. Your choice is passed to the ad partners through the IAB consent framework.",
          "United States: where state privacy laws give you the right to opt out of the sale or sharing of personal data for targeted ads, you can do so in Settings → Ad privacy options. The game passes your choice to Google and to Unity Ads, Liftoff Monetize and Mintegral.",
          "Android: you can reset or delete your advertising ID in your phone's settings (Google → Ads).",
        ],
      },
      {
        heading: "5. Purchases and diamonds",
        body: [
          "You can buy Remove Ads (a one-time purchase that turns off the full-screen ads between levels; the optional rewarded ads stay available) and diamond packs. Purchases are made through the Apple App Store or Google Play under their terms; they handle your payment details and send the game only a confirmation with a transaction number. Diamonds are added only after the store confirms the payment; pending, cancelled or failed purchases add nothing. Settings → Restore purchases asks the store again for Remove Ads.",
          "Diamonds are a game currency with no cash value. You earn them by finishing levels for the first time, solving the daily puzzle, keeping your streak and watching optional ads, or buy them in packs, and you can spend them on level blocks (levels 51 and up, 10 at a time), colour themes and extra hints. The daily puzzle never costs anything.",
        ],
      },
      {
        heading: "6. Game Center and Google Play Games",
        body: [
          "If you are signed in to Apple Game Center (iPhone, iPad) or Google Play Games (Android), the game sends your solve time for the daily puzzle (only your first completion, on the day of that puzzle) and your highest level to their leaderboards. When you are offline or not signed in, these scores wait on your device and are sent later. Your player name, avatar and these scores are visible to other players as set in your Game Center or Play Games profile.",
          "The \"Friends\" filter in Rankings shows your Game Center or Play Games friends' scores. On iPhone and iPad, Game Center asks for your permission before the game can see your friends list; on Android, friends appear only if you allowed games to see your Play Games friends list.",
          <>
            Apple and Google handle this data under their own policies (
            {ext("https://www.apple.com/legal/privacy/data/en/game-center/", "Game Center & Privacy")},{" "}
            {ext("https://policies.google.com/privacy", "Google Privacy Policy")}); we only see the leaderboards as any
            player does.
          </>,
        ],
      },
      {
        heading: "7. Children",
        body: [
          "Quiltdoku is a puzzle game for a general audience and is not directed at children under 13.",
        ],
      },
      {
        heading: "8. Keeping and deleting data",
        body: [
          "Deleting the game removes its saved progress from your device. The small copy in the iOS Keychain or Google Block Store stays on the device (so a reinstall keeps your streak and level); resetting the device erases it. Android backups follow your Google account's backup settings. We hold no data about you that we could delete, except emails you send us, which we delete when we no longer need them to answer you.",
        ],
      },
      {
        heading: "9. Your rights",
        body: [
          "Depending on where you live (for example under the GDPR or Turkey's Law No. 6698, KVKK), you have rights to access, correct, delete and object to the processing of your personal data, and to complain to a data protection authority. Because we do not hold data about you, most requests are about the processing by Google, Apple or the ad partners; contact them through the links above, or write to us and we will help.",
        ],
      },
      {
        heading: "10. This website",
        body: [
          "This website uses no cookies, no analytics and no external resources. GitHub, which hosts it, may log technical data such as IP addresses.",
        ],
      },
      {
        heading: "11. Changes to this policy",
        body: ["We will update this page and its effective date when the game's data handling changes."],
      },
      {
        heading: "12. Contact",
        body: [<>BEYDANUR DONMEZ · Email: {mail}</>],
      },
    ],
  },
  support: {
    title: "Support",
    intro: (
      <>
        Questions, a bug or an idea? Email {mail}. Please mention your device and the game version (Settings, at the
        bottom). We usually answer within a few days.
      </>
    ),
    sections: [
      {
        heading: "How do I play?",
        body: [
          "Divide the whole grid into rectangles (patches). Every patch holds exactly one clue, and the number is the patch's area. A shape icon says whether the patch is a square, tall or wide. Drag across cells to draw a patch, tap a patch to remove it. Settings → How to play shows it again.",
        ],
      },
      {
        heading: "When does the daily quilt change?",
        body: [
          "Every day at 00:00 Istanbul time (21:00 UTC), for everyone at the same moment. Solve it on its day to keep your streak; missing a day starts the streak again.",
        ],
      },
      {
        heading: "My score is not on the leaderboard",
        body: [
          "Sign in to Game Center (iPhone, iPad: iOS Settings → Game Center) or Google Play Games (Android). Scores you earned while offline or signed out are sent the next time the game is online and signed in. The daily leaderboard counts your first completion of each daily puzzle on its day.",
        ],
      },
      {
        heading: "Will I lose my progress if I reinstall?",
        body: [
          "On the same device the game keeps your level and streak after a reinstall. On Android, a new phone restored from your Google backup brings your progress along.",
        ],
      },
      {
        heading: "Ads",
        body: [
          "A full-screen ad appears after every second finished level from level 7 on, never during a puzzle and never around the daily quilt; Remove Ads turns these off. Rewarded ads (an extra hint, free diamonds, double diamonds) are always your choice. In the EEA, the UK, Switzerland and some US states you can change your ad choices in Settings → Ad privacy options.",
        ],
      },
      {
        heading: "Purchases and diamonds",
        body: [
          "Remove Ads and diamond packs are bought through the App Store or Google Play. If Remove Ads is missing after a reinstall or on a new device, use Settings → Restore purchases with the same Apple ID or Google account. If a diamond pack did not arrive, open the game again while online; it is added once the store confirms it. For refunds, contact Apple or Google, who handle all payments.",
        ],
      },
      {
        heading: "Privacy",
        body: [
          <>
            See the{" "}
            <a href="/quiltdoku/privacy/" className="legal-link">
              privacy policy
            </a>
            . Quiltdoku has no account and stores your progress on your device.
          </>,
        ],
      },
    ],
  },
};
