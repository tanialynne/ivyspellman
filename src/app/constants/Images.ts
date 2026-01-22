/**
 * Image assets configuration
 * Centralized image paths for easy management and CMS migration
 */

export const IMAGES = {
  // Hero section
  heroBackground: "/images/hero-bg.jpg",

  // Decorative elements - ordered left to right, top to bottom
  leaf1: "/images/leaf1.png", // top-left positions
  leaf2: "/images/leaf2.png", // top-right positions
  leaf3: "/images/leaf3.png", // bottom-left positions
  leaf4: "/images/leaf4.png", // bottom-right positions
  starOrnament: "/images/starburst.svg",
  headerDivider: "/images/divider.svg",

  // Button decorations
  buttonDecoration: "/images/button.svg",
  buttonMain: "/images/button-main.svg",

  // Section backgrounds
  booksBackground: "/images/books-bg.jpg",
  booksPageBackground: "/images/books-bg-bookspage.jpg",
  glimpsesBackground: "/images/glimpses-bg.jpg",
  singleBookBackground: "/images/single-book-bg.jpg",
  joinCircleBackground: "/images/join-circle-bg.jpg",

  // Blog section
  featuredBlogImage: "/images/journal-main.jpg",

  // Book covers
  bookCover1: "/images/Dont-Hex-the-Handyman-Generic.jpg",
  bookCover2: "/images/Love-Potion-911-Generic.jpg",

  // Gallery/Glimpses images
  glimpse1: "/images/glimpse1.jpg",
  glimpse2: "/images/glimpse2.jpg",
  glimpse3: "/images/glimps3.jpg",
  glimpse4: "/images/glimpse4.jpg",
  glimpse5: "/images/glimpse5.jpg",

  // Navigation arrows
  arrowLeft: "/images/back-arrow.svg",
  arrowRight: "/images/next-arrow.svg",

  // Logo
  logo: "/images/logo.png",

  // Icons
  booksIcon: "/images/books-icon.png",
  quoteIcon: "/images/quote-icon.svg",

  // About page
  ivySpellman: "/images/ivyspellman.jpg",
  aboutBackground: "/images/journal-bg.jpg",
  aboutLeaf: "/images/about-leaf.png",
  readBooksIcon: "/images/read-books-icon.png",
  readJournalIcon: "/images/read-journal-icon.png",

  // Lead magnet page
  bookMockup: "/images/book-mockup.png",

  // Blog
  blogPlaceholder: "/images/blog-placeholder.jpg",
} as const;

export type ImageKey = keyof typeof IMAGES;
