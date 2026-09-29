/**
 * Site-wide content constants
 * This file contains all static content that can later be migrated to a CMS (Contentful/Sanity)
 */

// Site metadata
export const SITE_CONFIG = {
  name: "Ivy Spellman",
  tagline: "Witch. Author. Forest dweller.",
  description:
    "Cozy witch romantic fantasy with midlife magic and comedy. Funny, witchy, closed-door romances with sentient houses and talking cats.",
  copyright: "2026 Ivy Spellman. All rights reserved.",
};

// Navigation links (no Home - logo serves as home link)
export const NAV_LINKS = [
  { label: "Books", href: "/books" },
  { label: "Journal", href: "/blog" },
  { label: "About", href: "/about" },
] as const;

// Footer navigation
export const FOOTER_LINKS = [
  { label: "Books", href: "/books" },
  { label: "Journal", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// Hero section content
export const HERO_CONTENT = {
  preTitle: "Witch. Author. Forest dweller.",
  title: "Ivy Spellman",
  subtitle:
    "Cozy witch romcoms about midlife meltdowns, chaotic magic, and second chances. Ten books of Hot Flashes & Hexes and counting. Eight hundred reviews in, the cat remains everyone's favorite. She knows.",
  ctaButton: "Start the Series",
  secondaryCta: "Or start with a free chapter →",
  headerCta: "Get A Free Chapter",
};

// Newsletter content
export const NEWSLETTER_CONTENT = {
  title: "Join the Coven",
  description:
    "Spells, stories, and the occasional emotional breakdown about kitchenware. For witches who've given up on toxic positivity but haven't given up on magic. Letters from the forest.\n\nSign up and get The Familiar's Report—a free short story told from Luna's POV on the events of Don't Hex the Handyman.",
  buttonText: "Whisper To Me",
  disclaimer: "Your email stays between us and the trees",
  footerTitle: "Join the Coven",
  footerDescription: "Occasional letters from the forest.\nNo Spam. No Fluff.",
  placeholder: "Email",
  submitText: "Submit",
  formId: "9003159",
};

// About page content
export const ABOUT_CONTENT = {
  heroTitle: "About",
  heroDescription:
    "Ivy Spellman writes witchy romcoms for women who are tired of pretending everything's fine. She lives in a cabin, talks to her plants, and believes magic is real—it just looks different than you'd expect. She's also lying about living in a cabin. But the rest is true.",
  theForest: {
    title: "The Forest",
    description:
      "Somewhere between the real world and the ridiculous one, there's a place where hot flashes trigger magic, cats have opinions, and midlife is just the beginning. Welcome to the woods. The vines are enchanted, the wine is bottomless, and nobody here is too much.",
  },
  theWork: {
    title: "The Work",
    description:
      "I write these books because they make me laugh. I publish them because I hope they'll make you laugh too—and maybe feel a little less alone while you're at it. These books are for the women who dimmed themselves to fit. The ones who kept their options open because choosing felt too risky. The control freaks and the chaos magnets and everyone in between. Magic doesn't require perfection. Just intention, humor, and maybe some wine.",
  },
  ctaCards: {
    books: {
      title: "Read The\nBooks",
      href: "/books",
    },
    journal: {
      title: "Read The\nJournal",
      href: "/blog",
    },
  },
};

// Lead magnet page content
export const LEAD_MAGNET_CONTENT = {
  eyebrow: "FREE CHAPTER",
  title: "The Day Everything Cracked",
  description:
    "Get the opening pages of Don't Hex the Handyman and find out what happens when a midlife meltdown meets a mysterious spellbook.",
  formButton: "Send The Chapter",
  formHelper:
    "If it's not there, check spam. (Even magic gets flagged sometimes. Rude.) See you inside. 🌙",
  insideChapter: {
    title: "Inside This Chapter",
    paragraphs: [
      "Cassie Morgan is having the worst day of her life. Her boss blamed her for someone else's mistake. The HOA bake sale queen thanked her for \"trying.\" Her cat barfed on her last clean jeans. And there's a mysterious package on her porch with her name written in calligraphy.",
      "Inside? A cracked leather spellbook from a great-aunt she barely remembers.",
      "She pours wine. She flips pages. One of them hums.",
      "This is the prequel chapter to Don't Hex the Handyman—and the moment everything changes.",
    ],
  },
  testimonials: {
    title: "Trusted By Readers Who Prefer Forests Over Feeds.",
    items: [
      {
        quote:
          "I started smiling on the first paragraph and kept smiling the whole way through. This is a frigging adorable book.",
        author: "Megan",
      },
      {
        quote:
          "A balm for my brain foggy, slightly sweaty, and definitely overwhelmed soul.",
        author: "Sarah",
      },
      {
        quote:
          "If you're in that middle part of life where everything is changing—this is the book for you.",
        author: "Bri",
      },
    ],
  },
};

// Jewel Box homepage (Sept 2026)
export const HOME_CONTENT = {
  hero: {
    eyebrow: "Cozy witch romantic fantasy",
    titleLines: ["Midlife is when", "the magic", "shows up."], // middle line renders in gold italic
    deck: "Hot flashes that set things on fire. Houses with opinions. A cat who judges everyone. Laugh-out-loud romances for women who were told they were too much, and turned out to be exactly enough.",
    primaryCta: "Start the series",
    secondaryCta: "Read chapter one free",
  },
  promise: [
    { big: "Funny, witchy, cozy", small: "Laugh-out-loud magic" },
    { big: "Midlife heroines", small: "Every one over forty" },
    { big: "Always a romance", small: "Closed door, happy ending" },
    { big: "Sentient houses", small: "and talking cats" },
  ],
  start: {
    eyebrow: "Start here · Hot Flashes & Hexes, Book 1",
    hook: "One badly worded spell. One grumpy Scottish handyman who can't leave. She just wanted her sink fixed.",
  },
  shelf: {
    eyebrow: "The complete series",
    intro:
      "One town, ten witches, and a coven that shows up with casseroles. Each book is its own complete romance with a happy ending. The finale is on preorder, and so is the Christmas novella.",
  },
  reviews: {
    eyebrow: "What readers keep telling us",
    feature: { quote: "Hot flashes weren't funny until now.", author: "Laure Eccleston" },
    shuffleLabel: "Conjure three more",
  },
  horizon: {
    eyebrow: "In the cauldron",
    items: [
      {
        key: "pe",
        label: "Working title",
        title: "Previously Enchanted",
        text: "Women who wake things up. The things stay awake, remember everything, take sides, and cannot keep a secret. Starting with a set of very opinionated tools.",
        foot: "Coming soon",
      },
      {
        key: "bw",
        label: "Working title",
        title: "The Witches of Bellwether",
        text: "Three midlife witches, one purple Victorian on the Gulf Coast, and a sorcerer stuck as a very disdainful cat. The Golden Girls, if the Golden Girls did hexes.",
        foot: "In development",
      },
    ],
  },
  coven: {
    eyebrow: "Join the coven",
    title: "A free story,",
    titleEm: "told by the cat",
    text: "Sign up and get The Familiar's Report, Luna's version of what really happened in Don't Hex the Handyman. Then occasional letters from the forest, and first word on every new book.",
  },
};
