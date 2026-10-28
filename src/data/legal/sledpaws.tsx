import type { HostedLegal } from "../types";

/**
 * Sledpaws' privacy policy, terms of use and support page, in English and Turkish. These pages ARE the single source
 * (App Store Connect, Play Console, AdMob and the game's Settings link here). Ported from the game repo's site/
 * (2026-10-28). Every statement must match the game (Sledpaws repo:
 * MonetizationKit, Shop.cs, AgeQuestion.cs, docs/STORE_PRIVACY.md). Change `updated` with every change, keep the
 * section ids stable (other pages and the stores link to #choices, #ads, #kvkk ...), and change both languages.
 */
const EMAIL = "sledpaws.sandbox@outlook.com";
const SLUG = "/sledpaws";

const mail = (
  <a href={`mailto:${EMAIL}`} className="legal-link">
    {EMAIL}
  </a>
);

/** A link to another site, opened in a new tab. */
const ext = (href: string, label: React.ReactNode) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="legal-link">
    {label}
  </a>
);

/** A link on this site (another Sledpaws page or an anchor on this page). */
const go = (href: string, label: React.ReactNode) => (
  <a href={href} className="legal-link">
    {label}
  </a>
);

/** A menu path in the game or on the device, e.g. Settings → Privacy. */
const ui = (text: string) => <span className="font-medium text-fg">{text}</span>;

const contact = (label: string) => (
  <>
    BEYDANUR DONMEZ
    <br />
    {label}: {mail}
  </>
);

// ---------------------------------------------------------------------------------------------------------------
// English
// ---------------------------------------------------------------------------------------------------------------

const privacyEn: HostedLegal["privacy"] = {
  title: "Privacy Policy",
  effective: "21 October 2026",
  updated: "28 October 2026",
  summary: {
    heading: "The short version",
    items: [
      "Sledpaws needs no account. We never ask for your name, email, phone number, contacts, photos or location.",
      "When the game starts for the first time, it asks a neutral age question (the year you were born). Players under 13 (or under the age of digital consent in their country), and players who don't answer, get the children's settings: only non-personalised ads suitable for children from ad networks certified for children's apps, no tracking prompt, limited analytics, and the game never opens the shop on its own.",
      <>
        The game is free and shows ads from <strong>Google AdMob</strong>, which also brings in{" "}
        <strong>Unity Ads</strong> and <strong>Liftoff Monetize</strong> through mediation. Rewarded ads are always
        your choice. Ads are personalised only if you allow it; otherwise they are non-personalised.
      </>,
      <>
        We use <strong>Google Firebase</strong> to see how the game is played (Analytics), to fix crashes
        (Crashlytics) and to adjust game settings (Remote Config). This data is linked to a random app ID, not to
        you.{" "}
        <em>
          The first test versions (0.1.x) do not include Firebase yet; section {go("#analytics", "6")} applies from
          the version that adds it.
        </em>
      </>,
      "Purchases (gem packs, coin packs, a starter pack, Remove Ads) go through the App Store or Google Play. We never see your card details.",
      <>
        Your progress is saved only on your device. You can change your privacy choices at any time in{" "}
        {ui("Settings → Privacy")}.
      </>,
    ],
  },
  sections: [
    {
      id: "who",
      heading: "1. Who we are",
      body: [
        <>
          Sledpaws: Snow Slide (“Sledpaws”, “the game”) is made by BEYDANUR DONMEZ (Beydanur Dönmez), an individual
          developer (“we”, “us”), who is the data controller for the game. This policy covers the game on the Apple
          App Store (iPhone and iPad) and on Google Play (Android phones and tablets), and the game&rsquo;s pages on
          this website. You can reach us at {mail}. Section {go("#kvkk", "13")} is our KVKK disclosure for Turkey.
        </>,
      ],
    },
    {
      id: "data",
      heading: "2. What the game stores on your device",
      body: [
        "The game saves your progress on your device so you can carry on where you left off: coin and gem balances, upgrades and boosters, unlocked maps and characters, best distances, the effect of your purchases (for example that Remove Ads is on), your answer to the age question, your privacy choices and your settings (sound, music, vibration, language). We don't receive this data. There is no cloud save: if you delete the game, this progress is deleted too.",
        "Your phone or tablet may include the game's saved progress in its own device backup (iCloud Backup on iPhone and iPad, Android backup on Android), depending on your device settings. Those backups are handled by Apple or Google under their privacy policies, not by us; we cannot see them.",
      ],
    },
    {
      id: "age",
      heading: "3. The age question and children",
      body: [
        "Sledpaws is for a mixed audience, children included. When the game starts for the first time, it asks a neutral age question: the year you were born (an age gate). We use the answer only to choose the right settings; it stays on your device.",
        <>
          If you are <strong>under 13</strong>, or under the age at which you can consent to data processing yourself
          in your country (the age of digital consent), or if the question is not answered, the game treats you as a
          child and:
        </>,
        [
          <>
            asks Google AdMob only for <strong>child-directed, non-personalised ads</strong>, tagged as such for the US
            COPPA rules and for the GDPR&rsquo;s protection of children, and only from ad networks certified for
            children&rsquo;s apps under Google Play&rsquo;s Families program (Google AdMob and Unity Ads; Liftoff
            Monetize never serves players treated as children);
          </>,
          <>
            does <strong>not</strong> show Apple&rsquo;s tracking prompt (App Tracking Transparency), and the
            advertising identifier is not used;
          </>,
          <>
            runs Firebase Analytics in a <strong>limited mode</strong>: no advertising identifier and no ad
            personalisation;
          </>,
          <>
            <strong>never opens the shop on its own</strong> and shows no purchase offers aimed at children; the shop
            opens only when the player taps it. Purchases always go through the App Store or Google Play, where
            parents can use the store&rsquo;s own parental controls (for example Apple&rsquo;s Ask to Buy or purchase
            approval in Google Play).
          </>,
        ],
        <>
          Players who are 13 or older (and at least the age of digital consent) see Google&rsquo;s consent form where
          the law requires it and, on iPhone and iPad, Apple&rsquo;s tracking prompt (section {go("#choices", "5")}).
        </>,
        "We don't knowingly collect personal data from children beyond what is described here. If you are a parent and think your child has sent us personal information (for example by email), write to us and we will delete it.",
      ],
    },
    {
      id: "ads",
      heading: "4. Ads",
      body: [
        <>
          Sledpaws is free and supported by ads from <strong>Google AdMob</strong> (Google Mobile Ads SDK). There are
          two kinds:
        </>,
        [
          <>
            <strong>Rewarded ads</strong> are optional. You start them yourself, for example for “x3 coins” on the
            result screen or for free gems. The reward is given after the ad has finished.
          </>,
          <>
            <strong>Full-screen ads (interstitials)</strong> appear at most after every 4th run, never before your 5th
            run and never right after you complete a map. The <strong>Remove Ads</strong> purchase turns them off.
            Rewarded ads stay available, because you choose them.
          </>,
        ],
      ],
      subsections: [
        {
          id: "ad-networks",
          heading: "Ad networks",
          body: [
            "Ads are always requested through Google AdMob. Through AdMob mediation, other ad networks may also serve ads in the game; they receive the same privacy signals (your consent choices and the child setting) through AdMob. The current list of ad networks that may serve ads in Sledpaws:",
            [
              <>
                <strong>Google AdMob</strong> (Google LLC; for users in the EEA, the UK and Switzerland, Google Ireland
                Limited): {ext("https://policies.google.com/privacy", "privacy policy")}
              </>,
              <>
                <strong>Unity Ads</strong> (Unity Technologies Inc.; Unity Technologies ApS in the EEA, the UK and
                Switzerland):{" "}
                {ext("https://unity.com/legal/game-player-and-app-user-privacy-policy", "privacy policy")}. Also serves
                children, with child-directed settings only (it is on Google Play&rsquo;s list of Families
                self-certified ad SDKs).
              </>,
              <>
                <strong>Liftoff Monetize</strong> (formerly Vungle; Liftoff Mobile, Inc.):{" "}
                {ext("https://liftoff.io/privacy-policy/", "privacy policy")}. Never serves players treated as
                children.
              </>,
            ],
            "We will add any new network to this list before it serves ads in the game.",
          ],
        },
        {
          id: "ad-data",
          heading: "What the ad SDK collects",
          body: [
            <>
              To show ads, measure them and prevent fraud, Google and the networks listed above collect device and
              usage data directly from the app: IP address (used to estimate a coarse location such as the country or
              city), device type, operating system, app version, the ads you see and your interactions with them,
              diagnostic data and identifiers for the app or device. Only if you allow it (see section{" "}
              {go("#choices", "5")}) do they use your device&rsquo;s advertising identifier (IDFA on iPhone and iPad,
              advertising ID on Android) to personalise ads. This data goes to Google and the ad networks, not to us;
              we only see aggregated reports (for example how many ads were shown). See{" "}
              {ext(
                "https://policies.google.com/technologies/partner-sites",
                "how Google uses information from sites or apps that use its services",
              )}{" "}
              and {ext("https://policies.google.com/privacy", "Google's Privacy Policy")}.
            </>,
          ],
        },
      ],
    },
    {
      id: "choices",
      heading: "5. Your privacy choices",
      body: [
        [
          <>
            <strong>EEA, UK and Switzerland</strong> (and other places where the law requires it): before ads load,
            Google&rsquo;s consent form (User Messaging Platform) asks whether you agree to personalised ads and to
            storing and reading information on your device. If you don&rsquo;t agree, you get only non-personalised
            ads.
          </>,
          <>
            <strong>iPhone and iPad</strong>: after the consent step, players who are not children see Apple&rsquo;s
            App Tracking Transparency prompt. If you choose “Ask App Not to Track”, the IDFA is not used and ads are
            not personalised with it. You can change this at any time in{" "}
            {ui("iOS Settings → Privacy & Security → Tracking")}.
          </>,
          <>
            <strong>In the game</strong>: you can change your ad and privacy choices at any time in{" "}
            {ui("Settings → Privacy")}.
          </>,
          <>
            <strong>Android</strong>: you can reset or delete your advertising ID in your phone&rsquo;s settings (
            {ui("Settings → Google → Ads")} or {ui("Settings → Privacy → Ads")}, depending on the phone).
          </>,
          <>Google ad personalisation in general: {ext("https://myadcenter.google.com/", "My Ad Center")}.</>,
        ],
        "The game works the same whatever you choose.",
      ],
    },
    {
      id: "analytics",
      heading: "6. Analytics, crash reports and game settings (Google Firebase)",
      body: [
        <>
          <strong>Not in the game yet:</strong> the first test versions (0.1.x) do not include Firebase and send no
          analytics, crash reports or Remote Config requests. The services below start with the version that adds
          them; we will update this policy&rsquo;s date then.
        </>,
        [
          <>
            <strong>Firebase Analytics</strong> records gameplay events, such as runs, maps reached, purchases and ad
            views, together with a random app instance ID, your device model, operating system and app version, and a
            country and language derived from your device settings. Google may use your IP address to estimate your
            country; it does not give us your IP address.
          </>,
          <>
            <strong>Firebase Crashlytics</strong> sends a crash report when the game crashes: what went wrong in the
            code and the device state at that moment (for example device model, operating system, free memory and
            storage, orientation).
          </>,
          <>
            <strong>Firebase Remote Config</strong> fetches game settings (for example balance numbers) from
            Google&rsquo;s servers, so we can adjust the game without an update.
          </>,
        ],
        <>
          These services use random identifiers created for this installation (the app instance ID and the Firebase
          installation ID). We use the data only to understand how the game is played, to fix bugs and to improve the
          game. It does not include your name, email, contacts, location (other than the coarse country Google
          derives from your IP address), photos or an account. Analytics uses the advertising identifier only for
          players who are not children and only where you allowed it in section {go("#choices", "5")}. See{" "}
          {ext("https://firebase.google.com/support/privacy", "Privacy and Security in Firebase")}.
        </>,
      ],
    },
    {
      id: "purchases",
      heading: "7. In-app purchases",
      body: [
        <>
          Gem packs, coin packs, a starter pack and Remove Ads are sold only through the Apple App Store and Google
          Play. Apple or Google process the payment; <strong>we never see your card or payment details</strong>. The
          store sends the game a purchase confirmation (receipt) with the product and a transaction identifier, so the
          game can give you the item and restore Remove Ads. Purchase events also appear in Firebase Analytics
          (section {go("#analytics", "6")}), without payment details.
        </>,
      ],
    },
    {
      id: "stores",
      heading: "8. App Store and Google Play",
      body: [
        "When you download the game, Apple or Google process your account and download information under their own privacy policies. They may give us anonymous, aggregated statistics (for example the number of downloads per country and crash reports from people who chose to share them with developers). These statistics do not tell us who you are.",
      ],
    },
    {
      id: "email",
      heading: "9. When you email us",
      body: [
        <>
          If you write to {mail}, we receive your email address and whatever you put in the message. We use it only
          to answer you, and we delete the conversation within 12 months after it ends unless the law requires us to
          keep it. Our email provider (Microsoft Outlook) processes the messages for us.
        </>,
      ],
    },
    {
      id: "recipients",
      heading: "10. Who receives data, and transfers abroad",
      body: [
        [
          <>
            <strong>Google</strong> (Google LLC; Google Ireland Limited in the EEA, the UK and Switzerland): for
            Firebase Analytics, Crashlytics and Remote Config Google acts as our processor (service provider); for
            AdMob ads and the consent form it acts as an independent controller under its own policies.
          </>,
          <>
            <strong>Apple and Google as app stores</strong>: independent controllers for downloads and payments.
          </>,
          <>
            <strong>Mediated ad networks</strong> listed in section {go("#ad-networks", "4")} (Unity Ads, Liftoff
            Monetize), under their own policies.
          </>,
          <>
            <strong>Microsoft</strong> (Outlook), only for emails you send us.
          </>,
        ],
        <>
          These companies may process data outside Turkey and outside the EEA, for example in the United States. They
          use the safeguards described in their own terms, such as the European Commission&rsquo;s standard
          contractual clauses and the EU–US Data Privacy Framework where it applies. For transfers from Turkey,
          Article 9 of the KVKK applies (see section {go("#kvkk", "13")}). We do not sell your personal data.
        </>,
      ],
    },
    {
      id: "retention",
      heading: "11. Keeping and deleting data",
      body: [
        [
          "Progress on your device stays until you delete the game (and any device backup that contains it).",
          <>
            Analytics and crash data are kept by Google for a limited time and then deleted automatically. They are
            linked only to random IDs: when you delete the game, a new installation gets new IDs, and the old data is
            no longer linked to your device. You can also reset your advertising ID (section {go("#choices", "5")}).
          </>,
          <>Emails: see section {go("#email", "9")}.</>,
        ],
        <>
          To ask for deletion of any data, write to {mail}. Because we hold no account and no name, we may not be able
          to find data that belongs to you, but we will help and, where we can, ask Google to delete it.
        </>,
      ],
    },
    {
      id: "rights",
      heading: "12. Your rights",
      body: [
        <>
          Depending on where you live (for example under the GDPR in the EU/UK, the KVKK in Turkey or US state laws),
          you have rights to access, correct and delete your personal data, to restrict or object to its use, to
          receive it in a portable form and to withdraw consent at any time (in {ui("Settings → Privacy")}; this does
          not affect earlier processing). Write to {mail} and we will answer within 30 days. You can also complain to
          your local data protection authority.
        </>,
        <>
          <strong>Legal bases (GDPR):</strong> personalised ads and storing or reading information on your device for
          ads: your consent (Art. 6(1)(a)); non-personalised ads, analytics, crash reports and remote settings: our
          legitimate interest in funding a free game, keeping it stable and improving it (Art. 6(1)(f)), and your
          consent where the law requires it; purchases: performance of the contract (Art. 6(1)(b)); answering emails:
          our legitimate interest in helping you (Art. 6(1)(f)).
        </>,
      ],
    },
    {
      id: "kvkk",
      heading: "13. KVKK disclosure (Turkey)",
      body: [
        <>
          This disclosure is given under Article 10 of the Turkish Personal Data Protection Law No. 6698 (KVKK). The{" "}
          {go(`${SLUG}/tr/privacy/#kvkk`, "Turkish version (Aydınlatma Metni)")} is the primary text.
        </>,
        [
          <>
            <strong>Data controller:</strong> Beydanur Dönmez (BEYDANUR DONMEZ), {mail}.
          </>,
          <>
            <strong>Personal data processed:</strong> device and app identifiers (app instance ID, Firebase
            installation ID and, only if you allow it, the advertising identifier); device and usage data (device
            model, operating system, app version, country and language, IP address processed by Google and the ad
            networks, gameplay events, ads seen and interactions, crash data); purchase records (product and
            transaction identifier, no payment details); your age group and privacy choices (stored on your device);
            and, if you email us, your email address and message.
          </>,
          <>
            <strong>Purposes:</strong> running the game and its features; showing ads and measuring them; asking for
            and respecting your consent choices; protecting children; delivering and restoring purchases; finding and
            fixing crashes; understanding how the game is played and improving it; answering your requests; meeting
            legal obligations.
          </>,
          <>
            <strong>Legal bases (KVKK Art. 5):</strong> processing necessary for the conclusion or performance of a
            contract (Art. 5/2-c) for running the game and purchases; compliance with a legal obligation (Art.
            5/2-ç); our legitimate interest, provided it does not harm your fundamental rights and freedoms (Art.
            5/2-f), for non-personalised ads, analytics, crash reports and remote settings; and your{" "}
            <strong>explicit consent</strong> (Art. 5/1) for personalised ads and the use of the advertising
            identifier, which you can withdraw at any time in {ui("Settings → Privacy")} or in your device settings.
          </>,
          <>
            <strong>Method of collection:</strong> automatically, through the game and the Google Mobile Ads (with the
            Unity Ads and Liftoff Monetize mediation adapters), User Messaging Platform and Firebase SDKs in it,
            through the App Store and Google Play, and by email when you write to us.
          </>,
          <>
            <strong>Transfers:</strong> to Google (AdMob, User Messaging Platform, Firebase), to Apple and Google as
            app stores, to the mediated ad networks in section {go("#ad-networks", "4")} and to Microsoft for email,
            for the purposes above. Their servers are also outside Turkey (for example in the USA), so personal data
            is transferred abroad under <strong>KVKK Article 9</strong>: on the basis of the appropriate safeguards it
            lists (such as standard contracts) and, where Article 9 requires it, your explicit consent.
          </>,
          <>
            <strong>Your rights (KVKK Art. 11):</strong> to learn whether your personal data is processed; to request
            information about it; to learn the purpose of processing and whether it is used accordingly; to know the
            third parties in Turkey or abroad to whom it is transferred; to request correction if it is incomplete or
            wrong; to request deletion or destruction under Article 7; to request that these corrections and deletions
            be notified to those third parties; to object to a result against you that arises only from automated
            analysis; and to claim compensation for damage caused by unlawful processing.
          </>,
          <>
            <strong>How to apply:</strong> email {mail} with your name, how we can reach you and your request. We
            answer free of charge as soon as possible and within 30 days at the latest (KVKK Art. 13). If your request
            is rejected or not answered, you can complain to the{" "}
            {ext("https://www.kvkk.gov.tr/", "Personal Data Protection Board (Kişisel Verileri Koruma Kurulu)")}.
          </>,
        ],
      ],
    },
    {
      id: "website",
      heading: "14. This website",
      body: [
        "The game's pages on this website (beydadonmezz.github.io) use no cookies, no analytics and no external resources. If you switch between the light and dark theme, your browser remembers that choice locally; it is not sent anywhere. GitHub, which hosts the website, may log technical data such as IP addresses.",
      ],
    },
    {
      id: "changes",
      heading: "15. Changes to this policy",
      body: [
        "We will update this policy when the game's data handling changes, change the date at the top and, for important changes, mention them in the game's update notes.",
      ],
    },
    { id: "contact", heading: "16. Contact", body: [contact("Email")] },
  ],
};

const termsEn: NonNullable<HostedLegal["terms"]> = {
  title: "Terms of Use",
  effective: "21 October 2026",
  updated: "28 October 2026",
  summary: {
    heading: "The short version",
    items: [
      "Enjoy Sledpaws for your own personal fun. Please don't hack, copy or resell it.",
      "Coins, gems, boosters and upgrades are part of the game. They have no real-world money value and can't be exchanged for money.",
      "You can buy gem packs, coin packs, a starter pack and Remove Ads through the App Store or Google Play. Refunds follow the store's rules and the law.",
      "The game is free and shows ads. Rewarded ads are optional; Remove Ads turns off the full-screen ads.",
      "Your progress is saved only on your device. If you delete the game or lose the device, it may be lost.",
    ],
  },
  sections: [
    {
      id: "agreement",
      heading: "1. Agreement",
      body: [
        "These terms are an agreement between you and BEYDANUR DONMEZ (Beydanur Dönmez) (“we”, “us”), the developer of Sledpaws: Snow Slide (“Sledpaws”, “the game”). By downloading or playing the game you agree to them. If you are under the age of majority where you live, a parent or guardian should read them with you. If you got the game from the App Store, Apple's Standard Licensed Application End User License Agreement also applies; if you got it from Google Play, the Google Play Terms of Service also apply.",
      ],
    },
    {
      id: "license",
      heading: "2. Your license",
      body: [
        "We give you a personal, non-exclusive, non-transferable, revocable license to use the game on devices you own or control, for non-commercial entertainment, as allowed by the store you got it from. The game, its characters, art, music, code and name belong to us or our licensors.",
      ],
    },
    {
      id: "virtual-items",
      heading: "3. Coins, gems and virtual items",
      body: [
        "You earn coins and gems by playing, and you can also buy them. Coins, gems, boosters and the upgrades, characters and items you unlock with them are a limited license to use content inside the game. They are not money or property, have no real-world value, cannot be exchanged for money, and can only be used in the game. They are not refundable or transferable, except where the law requires it or under the refund policy of the store you bought from. We may rebalance prices and rewards to keep the game fair and fun.",
      ],
    },
    {
      id: "purchases",
      heading: "4. In-app purchases",
      body: [
        [
          "The game sells gem packs, coin packs, a starter pack and Remove Ads, only through the Apple App Store and Google Play. The store shows the price in your local currency before you pay. Apple or Google handle the payment under their own terms; we never see your card details. The store sends a purchase confirmation (receipt).",
          <>
            <strong>Refunds</strong> are handled by the store, under its refund policy and the law. You can{" "}
            {ext("https://support.apple.com/en-us/118223", "ask Apple for a refund")} or{" "}
            {ext("https://support.google.com/googleplay/answer/2479637", "ask Google Play for a refund")}. Purchased
            items are digital content delivered right away; where the law allows, the right of withdrawal ends once
            the delivery has started with your consent.
          </>,
          <>
            <strong>Restore purchases</strong> is supported: it brings Remove Ads back on a new or reset device that
            uses the same Apple Account or Google Account. Gems, coins and items you have already received are part of
            your progress on the device and cannot be restored once it is deleted.
          </>,
          "If you are a child, ask a parent or guardian before buying anything. Parents can control purchases with the store's parental controls.",
        ],
      ],
    },
    {
      id: "ads",
      heading: "5. Ads",
      body: [
        <>
          The game is free and shows ads from Google AdMob (and the ad networks that serve ads through it, see the{" "}
          {go(`${SLUG}/privacy/#ads`, "Privacy Policy")}). Rewarded ads are optional: you choose to watch one, and the
          reward (for example “x3 coins” or free gems) is given after the ad has finished; if no ad is available, no
          reward is given. Full-screen ads appear at most after every 4th run, never before your 5th run and never
          right after you complete a map. <strong>Remove Ads</strong> turns off the full-screen ads; rewarded ads stay
          available because you choose them. We don&rsquo;t control the content of individual ads, but players
          identified as children get only ads suitable for children.
        </>,
      ],
    },
    {
      id: "acceptable-use",
      heading: "6. Fair play",
      body: [
        "Please do not cheat, modify or reverse engineer the game, use bots or tools to change your progress, or use the game in a way that breaks the law or harms others.",
      ],
    },
    {
      id: "progress",
      heading: "7. Your progress",
      body: [
        <>
          Your progress, including the coins, gems and items you bought, is stored only on your device; there is no
          cloud save. Deleting the game deletes your progress. We cannot restore progress that was lost because the
          game was deleted, the device was reset, lost or replaced, or the device backup did not include it. Remove
          Ads can be restored as described in section {go("#purchases", "4")}.
        </>,
      ],
    },
    {
      id: "changes",
      heading: "8. Changes and availability",
      body: [
        "We may update, change or stop offering the game or parts of it. We try to keep things working well, but we cannot promise that the game will always be available or free of errors.",
      ],
    },
    {
      id: "disclaimer",
      heading: "9. Disclaimer and liability",
      body: [
        "The game is provided “as is” to the extent the law allows. We are not liable for indirect or consequential losses. Nothing in these terms limits liability that cannot be limited by law, or your rights as a consumer under mandatory law.",
      ],
    },
    {
      id: "apple",
      heading: "10. Apple and Google",
      body: [
        "These terms are between you and us, not Apple or Google. Apple and Google are not responsible for Sledpaws or its content and have no obligation to provide support for it. For the App Store version, Apple and its subsidiaries are third-party beneficiaries of these terms and may enforce them.",
      ],
    },
    {
      id: "law",
      heading: "11. Governing law and disputes",
      body: [
        <>
          These terms are governed by the laws of the <strong>Republic of Turkey</strong>, and the courts of Turkey
          have jurisdiction over disputes. This does not take away the protection of mandatory consumer laws of the
          country where you live. If you are a consumer, you can also bring a claim in the courts of your home
          country, and in Turkey you can apply to consumer arbitration committees (tüketici hakem heyetleri) or
          consumer courts where the law allows.
        </>,
      ],
    },
    {
      id: "updates",
      heading: "12. Changes to these terms",
      body: [
        "We may update these terms. We will change the date above and, for important changes, mention them in the game's update notes. If you keep playing after a change, the new terms apply.",
      ],
    },
    { id: "contact", heading: "13. Contact", body: [contact("Email")] },
  ],
};

const supportEn: HostedLegal["support"] = {
  title: "Support",
  intro: (
    <>
      Need help with Sledpaws: Snow Slide? Most answers are below. If yours isn&rsquo;t, write to {mail} and tell us
      your device model and the game version (shown in Settings).
    </>
  ),
  sections: [
    {
      id: "play",
      heading: "How to play",
      body: [],
      subsections: [
        {
          heading: "How do I launch?",
          body: [
            "Tap TAP TO PLAY, then drag down anywhere on the screen to pull the slingshot back, move sideways to aim, and let go. The further you pull, the faster you start. Aim for the bullseye on the snow: slide right through its centre for a Perfect start.",
          ],
        },
        {
          heading: "How do I steer?",
          body: ["While sliding, drag your finger left or right anywhere on the screen."],
        },
        {
          heading: "What do flips do?",
          body: [
            "Ramps send you into the air. While airborne, swipe up to flip. Land cleanly and you get a short speed boost.",
          ],
        },
        {
          heading: "What are the lost pups?",
          body: [
            "Little pups wait along the track. Touch one and it rides along behind you; bring it home for bonus treasure. A crash sends them tumbling. Every pup you save goes into your pup album.",
          ],
        },
        {
          heading: "When does a run end?",
          body: [
            "When your ride stops. Bumping into obstacles slows you down. Reach the finish line to unlock the next map.",
          ],
        },
        {
          heading: "What are the bonus runs?",
          body: [
            "Once you have finished the first map, a bonus slide high above the clouds opens every few minutes from the Maps button. It is full of coins: stay on it as long as you can.",
          ],
        },
      ],
    },
    {
      id: "upgrades",
      heading: "Upgrades and progress",
      body: [],
      subsections: [
        {
          heading: "Do my upgrades reset on a new map?",
          body: ["No. Launch, Ride and Treasure upgrades are permanent and stay with you on every map."],
        },
        {
          id: "progress",
          heading: "Where is my progress saved?",
          body: [
            "Only on your device. There is no account and no cloud save. If you delete the game, your progress (including coins and gems you bought) is deleted too. A device backup (iCloud Backup or Android backup) may bring it back when you restore that backup to a device.",
          ],
        },
      ],
    },
    {
      id: "purchases",
      heading: "Purchases and ads",
      body: [],
      subsections: [
        {
          id: "restore",
          heading: "How do I restore my purchases?",
          body: [
            <>
              Make sure you are signed in to the same Apple Account (iPhone, iPad) or Google Account (Android) you
              bought with, then open the {ui("Shop")} and tap {ui("Restore purchases")} at the bottom. This brings back
              Remove Ads. Gems, coins and items you already received are part of your progress on the device and
              can&rsquo;t be restored after the game was deleted.
            </>,
          ],
        },
        {
          heading: "How do I get a refund?",
          body: [
            <>
              Purchases are made through the App Store or Google Play, so refunds are handled by them:{" "}
              {ext("https://support.apple.com/en-us/118223", "ask Apple for a refund")} or{" "}
              {ext("https://support.google.com/googleplay/answer/2479637", "ask Google Play for a refund")}.
            </>,
          ],
        },
        {
          heading: "Do I have to watch ads?",
          body: [
            "No. Rewarded ads (for example “x3 coins” or free gems) are always your choice. Full-screen ads appear at most after every 4th run, never before your 5th run and never right after you complete a map. Remove Ads turns them off.",
          ],
        },
      ],
    },
    {
      id: "privacy",
      heading: "Privacy",
      body: [],
      subsections: [
        {
          id: "privacy-choices",
          heading: "How do I change my ad and privacy choices?",
          body: [
            <>
              Open {ui("Settings → Privacy")} in the game. On iPhone and iPad you can also change tracking in{" "}
              {ui("iOS Settings → Privacy & Security → Tracking")}; on Android you can reset or delete your advertising
              ID in your phone&rsquo;s settings. The game works the same whatever you choose. Details are in the{" "}
              {go(`${SLUG}/privacy/#choices`, "Privacy Policy")}.
            </>,
          ],
        },
        {
          id: "age",
          heading: "Why does the game ask the year I was born?",
          body: [
            <>
              To choose the right settings. Players under 13 (or under the age of digital consent in their country),
              and players who don&rsquo;t answer, get only non-personalised ads suitable for children, from ad
              networks certified for children&rsquo;s apps; they see no tracking prompt, analytics runs in a limited
              mode, and the game never opens the shop on its own. Older players see Google&rsquo;s consent form where
              the law requires it and, on iPhone and iPad, Apple&rsquo;s tracking prompt. The answer stays on your
              device. Details are in the {go(`${SLUG}/privacy/#age`, "Privacy Policy")}.
            </>,
          ],
        },
        {
          id: "delete-data",
          heading: "How do I ask for my data to be deleted?",
          body: [
            <>
              Most data is only on your device: deleting the game deletes it. Analytics and crash data held by Google
              are linked only to a random app ID; a new installation gets a new ID, and you can also reset your
              advertising ID. For any other request, or to ask us to delete data, write to {mail}. See the{" "}
              {go(`${SLUG}/privacy/#retention`, "Privacy Policy")}.
            </>,
          ],
        },
      ],
    },
    {
      id: "settings",
      heading: "Settings",
      body: [],
      subsections: [
        {
          heading: "How do I turn off sound, music or vibration?",
          body: ["Open Settings (the gear on the home screen) and use the switches."],
        },
        {
          heading: "How do I change the language?",
          body: ["The game follows your device language. You can also pick a language in Settings."],
        },
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      body: [<>Email: {mail}. We usually answer within a few days.</>],
    },
  ],
};

// ---------------------------------------------------------------------------------------------------------------
// Türkçe
// ---------------------------------------------------------------------------------------------------------------

const privacyTr: HostedLegal["privacy"] = {
  title: "Gizlilik Politikası",
  effective: "21 Ekim 2026",
  updated: "28 Ekim 2026",
  summary: {
    heading: "Kısaca",
    items: [
      "Sledpaws için hesap gerekmez. Adını, e-postanı, telefon numaranı, kişilerini, fotoğraflarını ya da konumunu hiçbir zaman istemeyiz.",
      "Oyun ilk açılışta tarafsız bir yaş sorusu sorar (doğduğun yıl). 13 yaşından küçük (ya da ülkesindeki dijital rıza yaşının altındaki) oyuncular ve soruyu yanıtlamayanlar çocuk ayarlarıyla oynar: yalnızca çocuk uygulamaları için sertifikalı reklam ağlarından gelen, çocuklara uygun ve kişiselleştirilmemiş reklamlar, izleme sorusu yok, sınırlı analiz ve oyun mağazayı hiçbir zaman kendiliğinden açmaz.",
      <>
        Oyun ücretsizdir ve <strong>Google AdMob</strong> reklamları gösterir; AdMob, uyumlulaştırma (mediation) yoluyla{" "}
        <strong>Unity Ads</strong> ve <strong>Liftoff Monetize</strong> reklamlarını da getirir. Ödüllü reklamları
        izleyip izlememek her zaman senin seçimindir. Reklamlar yalnızca izin verirsen kişiselleştirilir; aksi halde
        kişiselleştirilmemiş reklam görürsün.
      </>,
      <>
        Oyunun nasıl oynandığını görmek (Analytics), çökmeleri düzeltmek (Crashlytics) ve oyun ayarlarını değiştirmek
        (Remote Config) için <strong>Google Firebase</strong> kullanırız. Bu veriler seninle değil, rastgele bir
        uygulama kimliğiyle ilişkilidir.{" "}
        <em>
          İlk test sürümlerinde (0.1.x) Firebase henüz yoktur; {go("#analytics", "6. bölüm")}, onu ekleyen sürümden
          itibaren geçerlidir.
        </em>
      </>,
      "Satın almalar (elmas paketleri, altın paketleri, başlangıç paketi, Reklamları Kaldır) App Store ya da Google Play üzerinden yapılır. Kart bilgilerini hiçbir zaman görmeyiz.",
      <>
        İlerlemen yalnızca cihazında saklanır. Gizlilik tercihlerini istediğin zaman {ui("Ayarlar → Gizlilik")}{" "}
        bölümünden değiştirebilirsin.
      </>,
    ],
  },
  sections: [
    {
      id: "who",
      heading: "1. Biz kimiz",
      body: [
        <>
          Sledpaws: Snow Slide (“Sledpaws”, “oyun”), bireysel geliştirici BEYDANUR DONMEZ (Beydanur Dönmez) (“biz”)
          tarafından yapılmıştır; oyunun veri sorumlusu biziz. Bu politika Apple App Store’daki (iPhone ve iPad) ve
          Google Play’deki (Android telefon ve tabletler) oyunu ve oyunun bu web sitesindeki sayfalarını kapsar. Bize{" "}
          {mail} adresinden ulaşabilirsin. {go("#kvkk", "13. bölüm")}, KVKK kapsamındaki aydınlatma metnimizdir.
        </>,
      ],
    },
    {
      id: "data",
      heading: "2. Oyunun cihazında sakladıkları",
      body: [
        "Oyun, kaldığın yerden devam edebilmen için ilerlemeni cihazına kaydeder: altın ve elmas bakiyeleri, geliştirmeler ve güçlendiriciler, açılan haritalar ve karakterler, en iyi mesafeler, satın almalarının etkisi (örneğin Reklamları Kaldır’ın açık olması), yaş sorusuna verdiğin yanıt, gizlilik tercihlerin ve ayarların (ses, müzik, titreşim, dil). Bu veriler bize gelmez. Bulut kaydı yoktur: oyunu silersen bu ilerleme de silinir.",
        "Telefonun ya da tabletin, cihaz ayarlarına bağlı olarak oyunun kayıtlı ilerlemesini kendi yedeğine (iPhone ve iPad’de iCloud Yedekleme, Android’de Android yedeklemesi) ekleyebilir. Bu yedekler bizim değil, Apple’ın ya da Google’ın gizlilik politikalarına göre işlenir; biz onları göremeyiz.",
      ],
    },
    {
      id: "age",
      heading: "3. Yaş sorusu ve çocuklar",
      body: [
        "Sledpaws, çocukların da dahil olduğu karma bir kitleye yöneliktir. Oyun ilk açıldığında tarafsız bir yaş sorusu sorar: doğduğun yıl (yaş kapısı). Yanıtı yalnızca doğru ayarları seçmek için kullanırız; yanıt cihazında kalır.",
        <>
          <strong>13 yaşından küçüksen</strong>, ülkende kişisel verilerinin işlenmesine kendi başına rıza
          verebileceğin yaşın (dijital rıza yaşı) altındaysan ya da soru yanıtlanmadıysa oyun seni çocuk olarak kabul
          eder ve:
        </>,
        [
          <>
            Google AdMob’dan yalnızca ABD’deki COPPA kuralları ve GDPR’ın çocuklara yönelik koruması için işaretlenmiş,{" "}
            <strong>çocuklara yönelik ve kişiselleştirilmemiş reklamlar</strong> ister; bunlar da yalnızca Google
            Play’in Families programında çocuk uygulamaları için sertifikalı reklam ağlarından gelir (Google AdMob ve
            Unity Ads; Liftoff Monetize çocuk olarak kabul edilen oyunculara asla reklam göstermez);
          </>,
          <>
            Apple’ın izleme sorusunu (Uygulama Takibi Şeffaflığı) <strong>göstermez</strong> ve reklam kimliği
            kullanılmaz;
          </>,
          <>
            Firebase Analytics’i <strong>sınırlı modda</strong> çalıştırır: reklam kimliği yok, reklam
            kişiselleştirmesi yok;
          </>,
          <>
            <strong>mağazayı hiçbir zaman kendiliğinden açmaz</strong> ve çocuklara yönelik satın alma teklifleri
            göstermez; mağaza yalnızca oyuncu ona dokunduğunda açılır. Satın almalar her zaman App Store ya da Google
            Play üzerinden yapılır; ebeveynler mağazanın kendi ebeveyn denetimlerini (örneğin Apple’ın Satın Almak İçin
            Sor özelliği ya da Google Play’deki satın alma onayı) kullanabilir.
          </>,
        ],
        <>
          13 yaşında ya da daha büyük (ve dijital rıza yaşına ulaşmış) oyuncular, yasanın gerektirdiği yerlerde
          Google’ın onay formunu ve iPhone ile iPad’de Apple’ın izleme sorusunu görür ({go("#choices", "5. bölüm")}).
        </>,
        "Çocuklardan burada anlatılanların dışında bilerek kişisel veri toplamayız. Ebeveynsen ve çocuğunun bize (örneğin e-postayla) kişisel bilgi gönderdiğini düşünüyorsan bize yaz, sileriz.",
      ],
    },
    {
      id: "ads",
      heading: "4. Reklamlar",
      body: [
        <>
          Sledpaws ücretsizdir ve <strong>Google AdMob</strong> (Google Mobile Ads SDK) reklamlarıyla desteklenir. İki
          tür reklam vardır:
        </>,
        [
          <>
            <strong>Ödüllü reklamlar</strong> isteğe bağlıdır. Bunları kendin başlatırsın; örneğin sonuç ekranındaki
            “x3 altın” ya da ücretsiz elmaslar için. Ödül, reklam bittikten sonra verilir.
          </>,
          <>
            <strong>Tam ekran reklamlar (geçiş reklamları)</strong> en fazla her 4 koşuda bir çıkar; 5. koşundan önce
            ve bir haritayı tamamladıktan hemen sonra hiçbir zaman çıkmaz. <strong>Reklamları Kaldır</strong> satın
            alması bunları kapatır. Ödüllü reklamlar, onları sen seçtiğin için kullanılabilir kalır.
          </>,
        ],
      ],
      subsections: [
        {
          id: "ad-networks",
          heading: "Reklam ağları",
          body: [
            "Reklamlar her zaman Google AdMob üzerinden istenir. AdMob uyumlulaştırması (mediation) sayesinde başka reklam ağları da oyunda reklam gösterebilir; bu ağlar aynı gizlilik sinyallerini (onay tercihlerin ve çocuk ayarı) AdMob üzerinden alır. Sledpaws’ta reklam gösterebilecek reklam ağlarının güncel listesi:",
            [
              <>
                <strong>Google AdMob</strong> (Google LLC; AEA, Birleşik Krallık ve İsviçre’deki kullanıcılar için
                Google Ireland Limited): {ext("https://policies.google.com/privacy?hl=tr", "gizlilik politikası")}
              </>,
              <>
                <strong>Unity Ads</strong> (Unity Technologies Inc.; AEA, Birleşik Krallık ve İsviçre’de Unity
                Technologies ApS):{" "}
                {ext("https://unity.com/legal/game-player-and-app-user-privacy-policy", "gizlilik politikası")}.
                Çocuklara da yalnızca çocuklara yönelik ayarlarla reklam gösterir (Google Play’in Families öz
                sertifikalı reklam SDK’ları listesindedir).
              </>,
              <>
                <strong>Liftoff Monetize</strong> (eski adıyla Vungle; Liftoff Mobile, Inc.):{" "}
                {ext("https://liftoff.io/privacy-policy/", "gizlilik politikası")}. Çocuk olarak kabul edilen
                oyunculara asla reklam göstermez.
              </>,
            ],
            "Yeni bir ağı, oyunda reklam göstermeye başlamadan önce bu listeye ekleriz.",
          ],
        },
        {
          id: "ad-data",
          heading: "Reklam SDK’sının topladıkları",
          body: [
            <>
              Google ve yukarıdaki ağlar reklam göstermek, ölçmek ve dolandırıcılığı önlemek için cihaz ve kullanım
              verilerini doğrudan uygulamadan toplar: IP adresi (ülke ya da şehir gibi yaklaşık bir konumu tahmin
              etmek için), cihaz türü, işletim sistemi, uygulama sürümü, gördüğün reklamlar ve onlarla etkileşimlerin,
              tanılama verileri ve uygulamaya ya da cihaza ait tanımlayıcılar. Cihazının reklam kimliğini (iPhone ve
              iPad’de IDFA, Android’de reklam kimliği) reklamları kişiselleştirmek için yalnızca izin verirsen
              kullanırlar (bkz. {go("#choices", "5. bölüm")}). Bu veriler bize değil Google’a ve reklam ağlarına
              gider; biz yalnızca toplu raporlar görürüz (örneğin kaç reklam gösterildiği). Ayrıntılar:{" "}
              {ext(
                "https://policies.google.com/technologies/partner-sites?hl=tr",
                "Google’ın, hizmetlerini kullanan site ve uygulamalardan gelen bilgileri nasıl kullandığı",
              )}{" "}
              ve {ext("https://policies.google.com/privacy?hl=tr", "Google Gizlilik Politikası")}.
            </>,
          ],
        },
      ],
    },
    {
      id: "choices",
      heading: "5. Gizlilik tercihlerin",
      body: [
        [
          <>
            <strong>AEA, Birleşik Krallık ve İsviçre</strong> (ve yasanın gerektirdiği diğer yerler): reklamlar
            yüklenmeden önce Google’ın onay formu (User Messaging Platform), kişiselleştirilmiş reklamları ve cihazında
            bilgi saklanıp okunmasını kabul edip etmediğini sorar. Kabul etmezsen yalnızca kişiselleştirilmemiş reklam
            görürsün.
          </>,
          <>
            <strong>iPhone ve iPad</strong>: onay adımından sonra, çocuk olmayan oyunculara Apple’ın Uygulama Takibi
            Şeffaflığı (ATT) sorusu gösterilir. “Uygulama Beni Takip Etmesin”i seçersen IDFA kullanılmaz ve reklamlar
            onunla kişiselleştirilmez. Bunu istediğin zaman {ui("iOS Ayarlar → Gizlilik ve Güvenlik → İzleme")}{" "}
            bölümünden değiştirebilirsin.
          </>,
          <>
            <strong>Oyunda</strong>: reklam ve gizlilik tercihlerini istediğin zaman {ui("Ayarlar → Gizlilik")}{" "}
            bölümünden değiştirebilirsin.
          </>,
          <>
            <strong>Android</strong>: reklam kimliğini telefonunun ayarlarından (telefona göre{" "}
            {ui("Ayarlar → Google → Reklamlar")} ya da {ui("Ayarlar → Gizlilik → Reklamlar")}) sıfırlayabilir veya
            silebilirsin.
          </>,
          <>
            Genel olarak Google reklam kişiselleştirmesi: {ext("https://myadcenter.google.com/?hl=tr", "Reklam Merkezim")}
            .
          </>,
        ],
        "Ne seçersen seç oyun aynı şekilde çalışır.",
      ],
    },
    {
      id: "analytics",
      heading: "6. Analiz, çökme raporları ve oyun ayarları (Google Firebase)",
      body: [
        <>
          <strong>Henüz oyunda değil:</strong> ilk test sürümleri (0.1.x) Firebase içermez; analiz verisi, çökme raporu
          ya da Remote Config isteği göndermez. Aşağıdaki hizmetler onları ekleyen sürümle başlar; o zaman bu
          politikanın tarihini güncelleriz.
        </>,
        [
          <>
            <strong>Firebase Analytics</strong>, koşular, ulaşılan haritalar, satın almalar ve reklam izlemeleri gibi
            oyun içi olayları; rastgele bir uygulama örneği kimliği (app instance ID), cihaz modelin, işletim sistemin
            ve uygulama sürümüyle birlikte, cihaz ayarlarından çıkarılan ülke ve dil bilgisiyle kaydeder. Google ülkeni
            tahmin etmek için IP adresini kullanabilir; IP adresini bize vermez.
          </>,
          <>
            <strong>Firebase Crashlytics</strong>, oyun çöktüğünde bir çökme raporu gönderir: kodda neyin yanlış gittiği
            ve o andaki cihaz durumu (örneğin cihaz modeli, işletim sistemi, boş bellek ve depolama alanı, ekran yönü).
          </>,
          <>
            <strong>Firebase Remote Config</strong>, oyunu güncelleme gerektirmeden ayarlayabilmemiz için oyun
            ayarlarını (örneğin denge değerlerini) Google’ın sunucularından indirir.
          </>,
        ],
        <>
          Bu hizmetler bu kurulum için oluşturulan rastgele tanımlayıcıları (uygulama örneği kimliği ve Firebase
          kurulum kimliği) kullanır. Verileri yalnızca oyunun nasıl oynandığını anlamak, hataları düzeltmek ve oyunu
          iyileştirmek için kullanırız. Bu veriler adını, e-postanı, kişilerini, konumunu (Google’ın IP adresinden
          çıkardığı yaklaşık ülke dışında), fotoğraflarını ya da bir hesabı içermez. Analytics reklam kimliğini yalnızca
          çocuk olmayan oyuncular için ve yalnızca {go("#choices", "5. bölümde")} izin verdiysen kullanır. Ayrıntılar:{" "}
          {ext("https://firebase.google.com/support/privacy?hl=tr", "Firebase’de Gizlilik ve Güvenlik")}.
        </>,
      ],
    },
    {
      id: "purchases",
      heading: "7. Uygulama içi satın almalar",
      body: [
        <>
          Elmas paketleri, altın paketleri, bir başlangıç paketi ve Reklamları Kaldır yalnızca Apple App Store ve
          Google Play üzerinden satılır. Ödemeyi Apple ya da Google işler;{" "}
          <strong>kart ve ödeme bilgilerini hiçbir zaman görmeyiz</strong>. Mağaza, oyuna ürünü ve işlem kimliğini
          içeren bir satın alma onayı (makbuz) gönderir; böylece oyun ürünü sana verir ve Reklamları Kaldır’ı geri
          yükleyebilir. Satın alma olayları ödeme bilgisi olmadan Firebase Analytics’te de görünür (
          {go("#analytics", "6. bölüm")}).
        </>,
      ],
    },
    {
      id: "stores",
      heading: "8. App Store ve Google Play",
      body: [
        "Oyunu indirdiğinde Apple ya da Google, hesap ve indirme bilgilerini kendi gizlilik politikalarına göre işler. Bize anonim, toplu istatistikler verebilirler (örneğin ülke başına indirme sayısı ve paylaşmayı seçen kişilerden gelen çökme raporları). Bu istatistikler kim olduğunu söylemez.",
      ],
    },
    {
      id: "email",
      heading: "9. Bize e-posta gönderdiğinde",
      body: [
        <>
          {mail} adresine yazarsan e-posta adresini ve mesajına yazdıklarını alırız. Bunları yalnızca sana cevap
          vermek için kullanırız ve kanun saklamamızı gerektirmedikçe yazışma bittikten sonra 12 ay içinde sileriz.
          E-posta sağlayıcımız (Microsoft Outlook) mesajları bizim adımıza işler.
        </>,
      ],
    },
    {
      id: "recipients",
      heading: "10. Verileri kimler alır, yurt dışına aktarım",
      body: [
        [
          <>
            <strong>Google</strong> (Google LLC; AEA, Birleşik Krallık ve İsviçre’de Google Ireland Limited): Firebase
            Analytics, Crashlytics ve Remote Config için bizim adımıza veri işleyen (hizmet sağlayıcı); AdMob reklamları
            ve onay formu için kendi politikalarına göre bağımsız veri sorumlusudur.
          </>,
          <>
            <strong>Uygulama mağazası olarak Apple ve Google</strong>: indirmeler ve ödemeler için bağımsız veri
            sorumlularıdır.
          </>,
          <>
            {go("#ad-networks", "4. bölümde")} listelenen <strong>uyumlulaştırılmış reklam ağları</strong> (Unity Ads,
            Liftoff Monetize), kendi politikalarına göre.
          </>,
          <>
            <strong>Microsoft</strong> (Outlook), yalnızca bize gönderdiğin e-postalar için.
          </>,
        ],
        <>
          Bu şirketler verileri Türkiye ve AEA dışında, örneğin Amerika Birleşik Devletleri’nde işleyebilir. Kendi
          koşullarında açıklanan güvenceleri kullanırlar; örneğin Avrupa Komisyonu’nun standart sözleşme maddeleri ve
          uygulandığı yerlerde AB-ABD Veri Gizliliği Çerçevesi. Türkiye’den yapılan aktarımlara KVKK’nın 9. maddesi
          uygulanır (bkz. {go("#kvkk", "13. bölüm")}). Kişisel verilerini satmayız.
        </>,
      ],
    },
    {
      id: "retention",
      heading: "11. Saklama ve silme",
      body: [
        [
          "Cihazındaki ilerleme, oyunu (ve onu içeren cihaz yedeklerini) silene kadar kalır.",
          <>
            Analiz ve çökme verilerini Google sınırlı bir süre saklar, sonra otomatik olarak siler. Bu veriler yalnızca
            rastgele kimliklerle ilişkilidir: oyunu silersen yeni kurulum yeni kimlikler alır ve eski veriler artık
            cihazınla ilişkilendirilmez. Reklam kimliğini de sıfırlayabilirsin ({go("#choices", "5. bölüm")}).
          </>,
          <>E-postalar: bkz. {go("#email", "9. bölüm")}.</>,
        ],
        <>
          Herhangi bir verinin silinmesini istemek için {mail} adresine yaz. Hesap ya da ad tutmadığımız için sana ait
          verileri bulamayabiliriz; yine de yardımcı olur, mümkün olduğunda silinmesini Google’dan isteriz.
        </>,
      ],
    },
    {
      id: "rights",
      heading: "12. Hakların",
      body: [
        <>
          Yaşadığın yere göre (örneğin Türkiye’de KVKK, AB/Birleşik Krallık’ta GDPR ya da ABD eyalet yasaları) kişisel
          verilerine erişme, onları düzeltme ve sildirme, işlenmesini kısıtlama ya da itiraz etme, taşınabilir biçimde
          alma ve onayını istediğin zaman geri çekme ({ui("Ayarlar → Gizlilik")} bölümünden; bu, önceki işlemleri
          etkilemez) hakların vardır. {mail} adresine yaz; 30 gün içinde cevap veririz. Ayrıca yerel veri koruma
          otoritesine şikâyette bulunabilirsin.
        </>,
        <>
          <strong>Hukuki dayanaklar (GDPR):</strong> kişiselleştirilmiş reklamlar ve reklamlar için cihazında bilgi
          saklanması ya da okunması: onayın (m. 6(1)(a)); kişiselleştirilmemiş reklamlar, analiz, çökme raporları ve
          uzaktan ayarlar: ücretsiz bir oyunu finanse etme, kararlı tutma ve iyileştirmeye yönelik meşru menfaatimiz (m.
          6(1)(f)) ve yasanın gerektirdiği yerlerde onayın; satın almalar: sözleşmenin ifası (m. 6(1)(b)); e-postalara
          cevap verme: sana yardımcı olmaya yönelik meşru menfaatimiz (m. 6(1)(f)).
        </>,
      ],
    },
    {
      id: "kvkk",
      heading: "13. KVKK Aydınlatma Metni",
      body: [
        <>
          Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu’nun (KVKK) 10. maddesi uyarınca
          hazırlanmıştır. KVKK açısından esas metin bu Türkçe metindir (
          {go(`${SLUG}/privacy/#kvkk`, "İngilizce çevirisi")}).
        </>,
        [
          <>
            <strong>Veri sorumlusu:</strong> Beydanur Dönmez (BEYDANUR DONMEZ), {mail}.
          </>,
          <>
            <strong>İşlenen kişisel veriler:</strong> cihaz ve uygulama tanımlayıcıları (uygulama örneği kimliği,
            Firebase kurulum kimliği ve yalnızca izin verirsen reklam kimliği); cihaz ve kullanım verileri (cihaz
            modeli, işletim sistemi, uygulama sürümü, ülke ve dil, Google’ın ve reklam ağlarının işlediği IP adresi,
            oyun içi olaylar, görülen reklamlar ve etkileşimler, çökme verileri); satın alma kayıtları (ürün ve işlem
            kimliği, ödeme bilgisi olmadan); yaş grubun ve gizlilik tercihlerin (cihazında saklanır); bize e-posta
            gönderirsen e-posta adresin ve mesajın.
          </>,
          <>
            <strong>İşleme amaçları:</strong> oyunun ve özelliklerinin sunulması; reklamların gösterilmesi ve
            ölçülmesi; onay tercihlerinin alınması ve bunlara uyulması; çocukların korunması; satın almaların teslim
            edilmesi ve geri yüklenmesi; çökmelerin tespit edilip giderilmesi; oyunun nasıl oynandığının anlaşılması ve
            iyileştirilmesi; taleplerinin yanıtlanması; hukuki yükümlülüklerin yerine getirilmesi.
          </>,
          <>
            <strong>Hukuki sebepler (KVKK m. 5):</strong> oyunun sunulması ve satın almalar için bir sözleşmenin
            kurulması veya ifasıyla doğrudan ilgili olması (m. 5/2-c); hukuki yükümlülüğümüzü yerine getirebilmemiz için
            zorunlu olması (m. 5/2-ç); kişiselleştirilmemiş reklamlar, analiz, çökme raporları ve uzaktan ayarlar için
            temel hak ve özgürlüklerine zarar vermemek kaydıyla meşru menfaatimiz için zorunlu olması (m. 5/2-f);
            kişiselleştirilmiş reklamlar ve reklam kimliğinin kullanılması için <strong>açık rızan</strong> (m. 5/1).
            Açık rızanı istediğin zaman {ui("Ayarlar → Gizlilik")} bölümünden ya da cihaz ayarlarından geri
            alabilirsin.
          </>,
          <>
            <strong>Toplama yöntemi:</strong> otomatik yolla; oyun ve içindeki Google Mobile Ads (Unity Ads ve Liftoff
            Monetize uyumlulaştırma adaptörleriyle), User Messaging Platform ve Firebase SDK’ları, App Store ve Google
            Play aracılığıyla; bize yazdığında e-posta yoluyla.
          </>,
          <>
            <strong>Aktarım:</strong> yukarıdaki amaçlarla Google’a (AdMob, User Messaging Platform, Firebase),
            uygulama mağazası olarak Apple ve Google’a, {go("#ad-networks", "4. bölümdeki")} uyumlulaştırılmış reklam
            ağlarına ve e-posta için Microsoft’a. Bu şirketlerin sunucuları Türkiye dışında da (örneğin ABD’de)
            bulunduğundan kişisel veriler <strong>KVKK’nın 9. maddesi</strong> kapsamında yurt dışına aktarılır: bu
            maddede sayılan uygun güvencelere (örneğin standart sözleşme) dayanılarak ve 9. maddenin gerektirdiği
            hallerde açık rızanla.
          </>,
          <>
            <strong>Hakların (KVKK m. 11):</strong> kişisel verilerinin işlenip işlenmediğini öğrenme; işlenmişse buna
            ilişkin bilgi talep etme; işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme; yurt içinde
            veya yurt dışında aktarıldığı üçüncü kişileri bilme; eksik veya yanlış işlenmişse düzeltilmesini isteme; 7.
            madde çerçevesinde silinmesini veya yok edilmesini isteme; bu düzeltme ve silme işlemlerinin aktarıldığı
            üçüncü kişilere bildirilmesini isteme; yalnızca otomatik sistemlerle analiz edilmesi sonucu aleyhine bir
            sonuç çıkmasına itiraz etme; kanuna aykırı işleme nedeniyle zarara uğrarsan zararın giderilmesini talep
            etme.
          </>,
          <>
            <strong>Başvuru:</strong> adını, sana nasıl ulaşabileceğimizi ve talebini yazarak {mail} adresine e-posta
            gönder. Başvurunu en kısa sürede ve en geç 30 gün içinde ücretsiz olarak sonuçlandırırız (KVKK m. 13).
            Başvurun reddedilirse ya da cevaplanmazsa{" "}
            {ext("https://www.kvkk.gov.tr/", "Kişisel Verileri Koruma Kurulu")}’na şikâyette bulunabilirsin.
          </>,
        ],
      ],
    },
    {
      id: "website",
      heading: "14. Bu web sitesi",
      body: [
        "Oyunun bu web sitesindeki (beydadonmezz.github.io) sayfaları çerez, analiz aracı ya da harici kaynak kullanmaz. Açık ya da koyu temayı seçersen tarayıcın bu tercihi yerel olarak hatırlar; hiçbir yere gönderilmez. Siteyi barındıran GitHub, IP adresi gibi teknik verileri kaydedebilir.",
      ],
    },
    {
      id: "changes",
      heading: "15. Bu politikadaki değişiklikler",
      body: [
        "Oyunun veri işleme şekli değiştiğinde bu politikayı güncelleriz, en üstteki tarihi değiştiririz ve önemli değişiklikleri oyunun güncelleme notlarında belirtiriz.",
      ],
    },
    { id: "contact", heading: "16. İletişim", body: [contact("E-posta")] },
  ],
};

const termsTr: NonNullable<HostedLegal["terms"]> = {
  title: "Kullanım Koşulları",
  effective: "21 Ekim 2026",
  updated: "28 Ekim 2026",
  summary: {
    heading: "Kısaca",
    items: [
      "Sledpaws’ı kendi kişisel eğlencen için oyna. Lütfen hile yapma, kopyalama ya da yeniden satma.",
      "Altınlar, elmaslar, güçlendiriciler ve geliştirmeler oyunun parçasıdır. Gerçek parasal değerleri yoktur ve paraya çevrilemezler.",
      "Elmas paketlerini, altın paketlerini, başlangıç paketini ve Reklamları Kaldır’ı App Store ya da Google Play üzerinden satın alabilirsin. İadeler mağazanın kurallarına ve yasalara göre yapılır.",
      "Oyun ücretsizdir ve reklam gösterir. Ödüllü reklamlar isteğe bağlıdır; Reklamları Kaldır tam ekran reklamları kapatır.",
      "İlerlemen yalnızca cihazında saklanır. Oyunu silersen ya da cihazını kaybedersen kaybolabilir.",
    ],
  },
  sections: [
    {
      id: "agreement",
      heading: "1. Sözleşme",
      body: [
        "Bu koşullar, sen ile Sledpaws: Snow Slide’ın (“Sledpaws”, “oyun”) geliştiricisi BEYDANUR DONMEZ (Beydanur Dönmez) (“biz”) arasında bir sözleşmedir. Oyunu indirerek ya da oynayarak bu koşulları kabul edersin. Yaşadığın yerde reşit değilsen bir ebeveyn ya da veli bu koşulları seninle birlikte okumalıdır. Oyunu App Store’dan aldıysan Apple’ın Standart Lisanslı Uygulama Son Kullanıcı Lisans Sözleşmesi, Google Play’den aldıysan Google Play Hizmet Şartları da geçerlidir.",
      ],
    },
    {
      id: "license",
      heading: "2. Lisansın",
      body: [
        "Oyunu, sahibi olduğun ya da kontrol ettiğin cihazlarda, ticari olmayan eğlence amacıyla ve oyunu aldığın mağazanın izin verdiği şekilde kullanman için sana kişisel, münhasır olmayan, devredilemez ve geri alınabilir bir lisans veririz. Oyun, karakterleri, görselleri, müziği, kodu ve adı bize ya da lisans verenlerimize aittir.",
      ],
    },
    {
      id: "virtual-items",
      heading: "3. Altınlar, elmaslar ve sanal öğeler",
      body: [
        "Altın ve elmasları oynayarak kazanırsın; onları satın da alabilirsin. Altınlar, elmaslar, güçlendiriciler ve onlarla açtığın geliştirmeler, karakterler ve öğeler, oyun içindeki içeriği kullanman için sınırlı bir lisanstır. Para ya da mülk değildirler, gerçek dünyada bir değerleri yoktur, paraya çevrilemezler ve yalnızca oyunda kullanılabilirler. Yasanın gerektirdiği haller ya da satın aldığın mağazanın iade politikası dışında iade edilemez ve devredilemezler. Oyunu adil ve eğlenceli tutmak için fiyatları ve ödülleri yeniden dengeleyebiliriz.",
      ],
    },
    {
      id: "purchases",
      heading: "4. Uygulama içi satın almalar",
      body: [
        [
          "Oyun elmas paketleri, altın paketleri, bir başlangıç paketi ve Reklamları Kaldır satar; yalnızca Apple App Store ve Google Play üzerinden. Mağaza, ödeme yapmadan önce fiyatı yerel para biriminle gösterir. Ödemeyi Apple ya da Google kendi koşullarına göre işler; kart bilgilerini hiçbir zaman görmeyiz. Mağaza bir satın alma onayı (makbuz) gönderir.",
          <>
            <strong>İadeleri</strong> mağaza, kendi iade politikasına ve yasalara göre yürütür.{" "}
            {ext("https://support.apple.com/tr-tr/118223", "Apple’dan iade isteyebilir")} ya da{" "}
            {ext("https://support.google.com/googleplay/answer/2479637?hl=tr", "Google Play’den iade isteyebilirsin")}.
            Satın alınan öğeler hemen teslim edilen dijital içeriktir; yasanın izin verdiği hallerde cayma hakkı,
            teslimat onayınla başladığında sona erer.
          </>,
          <>
            <strong>Satın alımları geri yükleme</strong> desteklenir: aynı Apple Hesabı’nı ya da Google hesabını
            kullanan yeni veya sıfırlanmış bir cihazda Reklamları Kaldır’ı geri getirir. Daha önce aldığın elmaslar,
            altınlar ve öğeler cihazındaki ilerlemenin parçasıdır; ilerleme silindikten sonra geri yüklenemez.
          </>,
          "Çocuksan bir şey satın almadan önce ebeveynine ya da velinden izin iste. Ebeveynler satın almaları mağazanın ebeveyn denetimleriyle kontrol edebilir.",
        ],
      ],
    },
    {
      id: "ads",
      heading: "5. Reklamlar",
      body: [
        <>
          Oyun ücretsizdir ve Google AdMob’un (ve onun üzerinden reklam sunan reklam ağlarının, bkz.{" "}
          {go(`${SLUG}/tr/privacy/#ads`, "Gizlilik Politikası")}) reklamlarını gösterir. Ödüllü reklamlar isteğe
          bağlıdır: izlemeyi sen seçersin ve ödül (örneğin “x3 altın” ya da ücretsiz elmas) reklam bittikten sonra
          verilir; reklam yoksa ödül de verilmez. Tam ekran reklamlar en fazla her 4 koşuda bir çıkar; 5. koşundan önce
          ve bir haritayı tamamladıktan hemen sonra hiçbir zaman çıkmaz. <strong>Reklamları Kaldır</strong> tam ekran
          reklamları kapatır; ödüllü reklamlar, onları sen seçtiğin için kullanılabilir kalır. Tek tek reklamların
          içeriğini biz belirlemeyiz; ancak çocuk olarak belirlenen oyunculara yalnızca çocuklara uygun reklamlar
          gösterilir.
        </>,
      ],
    },
    {
      id: "acceptable-use",
      heading: "6. Adil oyun",
      body: [
        "Lütfen hile yapma, oyunu değiştirme ya da tersine mühendislik uygulama, ilerlemeni değiştirmek için bot ya da araç kullanma, oyunu yasalara aykırı ya da başkalarına zarar verecek şekilde kullanma.",
      ],
    },
    {
      id: "progress",
      heading: "7. İlerlemen",
      body: [
        <>
          Satın aldığın altınlar, elmaslar ve öğeler dahil ilerlemen yalnızca cihazında saklanır; bulut kaydı yoktur.
          Oyunu silmek ilerlemeni de siler. Oyunun silinmesi, cihazın sıfırlanması, kaybolması ya da değiştirilmesi veya
          cihaz yedeğinin ilerlemeyi içermemesi nedeniyle kaybolan ilerlemeyi geri getiremeyiz. Reklamları Kaldır,{" "}
          {go("#purchases", "4. bölümde")} anlatıldığı gibi geri yüklenebilir.
        </>,
      ],
    },
    {
      id: "changes",
      heading: "8. Değişiklikler ve erişilebilirlik",
      body: [
        "Oyunu ya da bir kısmını güncelleyebilir, değiştirebilir ya da sunmayı bırakabiliriz. Her şeyin iyi çalışması için çabalarız, ancak oyunun her zaman erişilebilir ya da hatasız olacağına söz veremeyiz.",
      ],
    },
    {
      id: "disclaimer",
      heading: "9. Sorumluluk reddi",
      body: [
        "Oyun, yasaların izin verdiği ölçüde “olduğu gibi” sunulur. Dolaylı ya da sonuç olarak doğan zararlardan sorumlu değiliz. Bu koşullardaki hiçbir şey, yasayla sınırlanamayan sorumluluğu ya da emredici hükümlerden doğan tüketici haklarını sınırlamaz.",
      ],
    },
    {
      id: "apple",
      heading: "10. Apple ve Google",
      body: [
        "Bu koşullar Apple ya da Google ile değil, seninle bizim aramızdadır. Apple ve Google, Sledpaws’tan ya da içeriğinden sorumlu değildir ve destek sağlama yükümlülükleri yoktur. App Store sürümü için Apple ve bağlı şirketleri bu koşulların üçüncü taraf lehtarlarıdır ve koşulları uygulatabilir.",
      ],
    },
    {
      id: "law",
      heading: "11. Uygulanacak hukuk ve uyuşmazlıklar",
      body: [
        <>
          Bu koşullar <strong>Türkiye Cumhuriyeti</strong> kanunlarına tabidir ve uyuşmazlıklarda Türkiye mahkemeleri
          yetkilidir. Bu, yaşadığın ülkenin emredici tüketici hukukunun sağladığı korumayı ortadan kaldırmaz.
          Tüketiciysen kendi ülkendeki mahkemelerde de dava açabilir, Türkiye’de kanunun izin verdiği hallerde tüketici
          hakem heyetlerine ya da tüketici mahkemelerine başvurabilirsin.
        </>,
      ],
    },
    {
      id: "updates",
      heading: "12. Bu koşullardaki değişiklikler",
      body: [
        "Bu koşulları güncelleyebiliriz. Yukarıdaki tarihi değiştirir, önemli değişiklikleri oyunun güncelleme notlarında belirtiriz. Bir değişiklikten sonra oynamaya devam edersen yeni koşullar geçerli olur.",
      ],
    },
    { id: "contact", heading: "13. İletişim", body: [contact("E-posta")] },
  ],
};

const supportTr: HostedLegal["support"] = {
  title: "Destek",
  intro: (
    <>
      Sledpaws: Snow Slide ile ilgili yardım mı lazım? Çoğu cevap aşağıda. Seninki yoksa {mail} adresine yaz; cihaz
      modelini ve oyun sürümünü (Ayarlar’da yazar) belirt.
    </>
  ),
  sections: [
    {
      id: "play",
      heading: "Nasıl oynanır",
      body: [],
      subsections: [
        {
          heading: "Nasıl fırlatırım?",
          body: [
            "DOKUN VE OYNA’ya dokun, sonra sapanı geri germek için ekranın herhangi bir yerinde aşağı sürükle, nişan almak için yana kaydır ve bırak. Ne kadar çok çekersen o kadar hızlı başlarsın. Kardaki hedefe nişan al: tam ortasından geçersen Tam İsabet ile başlarsın.",
          ],
        },
        {
          heading: "Nasıl yön veririm?",
          body: ["Kayarken parmağını ekranın herhangi bir yerinde sağa ya da sola sürükle."],
        },
        {
          heading: "Taklalar ne işe yarar?",
          body: [
            "Rampalar seni havaya atar. Havadayken takla atmak için yukarı kaydır. Temiz inersen kısa bir hız artışı kazanırsın.",
          ],
        },
        {
          heading: "Kayıp yavrular ne?",
          body: [
            "Pistin kenarında minik yavrular bekler. Birine dokun, arkana atlayıp seninle kaysın; onu eve getir, hazine bonusu kazan. Bir kaza onları yuvarlar. Kurtardığın her yavru yavru albümüne girer.",
          ],
        },
        {
          heading: "Koşu ne zaman biter?",
          body: [
            "Aracın durduğunda. Engellere çarpmak seni yavaşlatır. Sonraki haritayı açmak için bitiş çizgisine ulaş.",
          ],
        },
        {
          heading: "Bonus koşuları ne?",
          body: [
            "İlk haritayı bitirdikten sonra, birkaç dakikada bir bulutların üstünde bir bonus kaydırak Haritalar düğmesinden açılır. Altın doludur: olabildiğince uzun süre üstünde kal!",
          ],
        },
      ],
    },
    {
      id: "upgrades",
      heading: "Geliştirmeler ve ilerleme",
      body: [],
      subsections: [
        {
          heading: "Yeni haritada geliştirmelerim sıfırlanır mı?",
          body: ["Hayır. Fırlatma, Sürüş ve Hazine geliştirmeleri kalıcıdır ve her haritada seninle kalır."],
        },
        {
          id: "progress",
          heading: "İlerlemem nerede saklanıyor?",
          body: [
            "Yalnızca cihazında. Hesap ve bulut kaydı yoktur. Oyunu silersen ilerlemen de (satın aldığın altınlar ve elmaslar dahil) silinir. Cihaz yedeği (iCloud Yedekleme ya da Android yedeklemesi), o yedeği bir cihaza geri yüklediğinde ilerlemeni geri getirebilir.",
          ],
        },
      ],
    },
    {
      id: "purchases",
      heading: "Satın almalar ve reklamlar",
      body: [],
      subsections: [
        {
          id: "restore",
          heading: "Satın aldıklarımı nasıl geri yüklerim?",
          body: [
            <>
              Satın alırken kullandığın Apple Hesabı’yla (iPhone, iPad) ya da Google hesabıyla (Android) giriş
              yaptığından emin ol, sonra {ui("Mağaza")}’yı aç ve en alttaki {ui("Satın alımları geri yükle")}’ye dokun.
              Bu, Reklamları Kaldır’ı geri getirir. Daha önce aldığın elmaslar, altınlar ve öğeler cihazındaki
              ilerlemenin parçasıdır; oyun silindikten sonra geri yüklenemez.
            </>,
          ],
        },
        {
          heading: "Nasıl iade alırım?",
          body: [
            <>
              Satın almalar App Store ya da Google Play üzerinden yapıldığı için iadeleri onlar yürütür:{" "}
              {ext("https://support.apple.com/tr-tr/118223", "Apple’dan iade iste")} ya da{" "}
              {ext("https://support.google.com/googleplay/answer/2479637?hl=tr", "Google Play’den iade iste")}.
            </>,
          ],
        },
        {
          heading: "Reklam izlemek zorunda mıyım?",
          body: [
            "Hayır. Ödüllü reklamlar (örneğin “x3 altın” ya da ücretsiz elmas) her zaman senin seçimindir. Tam ekran reklamlar en fazla her 4 koşuda bir çıkar; 5. koşundan önce ve bir haritayı tamamladıktan hemen sonra hiçbir zaman çıkmaz. Reklamları Kaldır bunları kapatır.",
          ],
        },
      ],
    },
    {
      id: "privacy",
      heading: "Gizlilik",
      body: [],
      subsections: [
        {
          id: "privacy-choices",
          heading: "Reklam ve gizlilik tercihlerimi nasıl değiştiririm?",
          body: [
            <>
              Oyunda {ui("Ayarlar → Gizlilik")} bölümünü aç. iPhone ve iPad’de izlemeyi{" "}
              {ui("iOS Ayarlar → Gizlilik ve Güvenlik → İzleme")} bölümünden de değiştirebilirsin; Android’de reklam
              kimliğini telefonunun ayarlarından sıfırlayabilir ya da silebilirsin. Ne seçersen seç oyun aynı şekilde
              çalışır. Ayrıntılar {go(`${SLUG}/tr/privacy/#choices`, "Gizlilik Politikası")}’nda.
            </>,
          ],
        },
        {
          id: "age",
          heading: "Oyun neden doğduğum yılı soruyor?",
          body: [
            <>
              Doğru ayarları seçmek için. 13 yaşından küçük (ya da ülkesindeki dijital rıza yaşının altındaki)
              oyuncular ve soruyu yanıtlamayanlar yalnızca çocuk uygulamaları için sertifikalı reklam ağlarından gelen,
              çocuklara uygun ve kişiselleştirilmemiş reklamlar görür; onlara izleme sorusu gösterilmez, analiz sınırlı
              çalışır ve oyun mağazayı hiçbir zaman kendiliğinden açmaz. Daha büyük oyuncular yasanın gerektirdiği
              yerlerde Google’ın onay formunu ve iPhone ile iPad’de Apple’ın izleme sorusunu görür. Yanıtın cihazında
              kalır. Ayrıntılar {go(`${SLUG}/tr/privacy/#age`, "Gizlilik Politikası")}’nda.
            </>,
          ],
        },
        {
          id: "delete-data",
          heading: "Verilerimin silinmesini nasıl isterim?",
          body: [
            <>
              Verilerin çoğu yalnızca cihazındadır: oyunu silmek onları da siler. Google’daki analiz ve çökme verileri
              yalnızca rastgele bir uygulama kimliğiyle ilişkilidir; yeni bir kurulum yeni bir kimlik alır, ayrıca
              reklam kimliğini de sıfırlayabilirsin. Başka bir talep için ya da verilerin silinmesini bizden istemek
              için {mail} adresine yaz. Ayrıntılar {go(`${SLUG}/tr/privacy/#retention`, "Gizlilik Politikası")}’nda.
            </>,
          ],
        },
      ],
    },
    {
      id: "settings",
      heading: "Ayarlar",
      body: [],
      subsections: [
        {
          heading: "Sesi, müziği ya da titreşimi nasıl kapatırım?",
          body: ["Ayarlar’ı (ana ekrandaki dişli simgesi) aç ve anahtarları kullan."],
        },
        {
          heading: "Dili nasıl değiştiririm?",
          body: ["Oyun cihazının dilini kullanır. Ayarlar’dan da bir dil seçebilirsin."],
        },
      ],
    },
    {
      id: "contact",
      heading: "İletişim",
      body: [<>E-posta: {mail}. Genellikle birkaç gün içinde cevap veririz.</>],
    },
  ],
};

export const sledpawsLegal: HostedLegal = {
  privacy: privacyEn,
  terms: termsEn,
  support: supportEn,
  tr: { privacy: privacyTr, terms: termsTr, support: supportTr },
};
