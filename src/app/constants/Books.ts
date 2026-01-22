/**
 * Books content
 * Static book data for CMS migration
 */

export interface Book {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  coverImage: string;
  buyLink?: string;
  previewLink?: string;
  comingSoon?: boolean;
  whatThisBookIs: string[];
  youllLikeThisIf: string[];
  testimonials: {
    quote: string;
    author: string;
  }[];
}

// All reader reviews - used for random testimonials across pages
export const ALL_REVIEWS = [
  {
    quote:
      "I started smiling on the first paragraph and kept smiling the whole way through. This is a frigging adorable book.",
    author: "Megan",
  },
  {
    quote:
      "A balm for my brain foggy, slightly sweaty, and definitely overwhelmed soul. Wonderfully funny without losing any of the poignance.",
    author: "Sarah",
  },
  {
    quote:
      "Brilliantly written, laugh-out-loud read. The writing is sharp and clever—several paragraphs so funny I had to reread them.",
    author: "Cher",
  },
  {
    quote:
      "I was entranced by this hilarious and refreshing story. A literal laugh-out-loud read—I couldn't put it down.",
    author: "dvwayne",
  },
  {
    quote:
      "A charming and delightfully quirky cozy witch romance with strong character chemistry and plenty of charm.",
    author: "Dayna",
  },
  {
    quote:
      "Funny, chaotic, and completely charming. Liam is the grumpy Scottish cinnamon roll of my dreams.",
    author: "Tania",
  },
  {
    quote:
      "A great story about believing and trusting in yourself. I loved how calm Liam was despite Cassie's chaos!",
    author: "Suzanne",
  },
  {
    quote:
      "Pure comical chaos. I could relate in so many ways—it kept me engaged and I finished it in one day.",
    author: "Brittany",
  },
];

/**
 * Get random testimonials ensuring no duplicate author names
 * @param count Number of testimonials to return
 * @param reviews Array of reviews to pick from (defaults to ALL_REVIEWS)
 */
export function getRandomTestimonials(
  count: number,
  reviews: typeof ALL_REVIEWS = ALL_REVIEWS
): typeof ALL_REVIEWS {
  // Shuffle the reviews array
  const shuffled = [...reviews].sort(() => Math.random() - 0.5);

  // Pick unique authors
  const result: typeof ALL_REVIEWS = [];
  const usedAuthors = new Set<string>();

  for (const review of shuffled) {
    if (!usedAuthors.has(review.author) && result.length < count) {
      result.push(review);
      usedAuthors.add(review.author);
    }
  }

  return result;
}

// Book covers - update these paths when you have all book images
export const BOOKS: Book[] = [
  {
    id: "1",
    title: "Don't Hex the Handyman",
    slug: "dont-hex-the-handyman",
    description:
      "One badly worded spell. One grumpy Scottish handyman who can't leave. She just wanted her sink fixed—not her libido.",
    longDescription:
      "Cassie Morgan's life is already a disaster: divorced, overlooked at work, and one hot flash away from setting something on fire. When she accidentally summons a grumpy Scottish handyman who literally cannot leave her property, things get complicated. Liam MacLeod has dealt with witches before—his ex-wife was one—and he's not impressed. But as Cassie's chaotic magic keeps throwing them together (sometimes literally), they both start wondering if this \"curse\" might be the best thing that ever happened to them. A laugh-out-loud midlife romance about second chances, found family, and learning you were never too much—you were just surrounded by the wrong people.",
    coverImage: "/images/Dont-Hex-the-Handyman-Generic.jpg",
    buyLink:
      "https://www.amazon.com/Dont-Hex-Handyman-Romantic-Fantasy-ebook/dp/B0GFGRB283",
    previewLink: "/free-chapter",
    whatThisBookIs: [
      "A cozy chaos comedy where hot flashes trigger magic",
      "A sentient house with opinions about your love life",
      "A talking cat who judges everyone",
      "Messy, magical, and deeply relatable for anyone who's ever felt invisible—and then suddenly, spectacularly, too much",
    ],
    youllLikeThisIf: [
      "You've ever ugly-cried in the laundry room",
      "You believe wine is a food group",
      "You want a romance where the heroine saves herself (but the grumpy Scotsman doesn't hurt)",
      "You need to laugh until you snort and then immediately text your best friend about it",
    ],
    testimonials: [
      {
        quote:
          "I started smiling on the first paragraph and kept smiling the whole way through. This is a frigging adorable book.",
        author: "Megan",
      },
      {
        quote:
          "A balm for my brain foggy, slightly sweaty, and definitely overwhelmed soul. Wonderfully funny without losing any of the poignance.",
        author: "Sarah",
      },
      {
        quote:
          "Funny, chaotic, and completely charming. Liam is the grumpy Scottish cinnamon roll of my dreams.",
        author: "Tania",
      },
    ],
  },
  {
    id: "2",
    title: "Love Potion #9-1-1",
    slug: "love-potion-911",
    description:
      "Her best friend hexed her dating app. Now she's getting matches from 1986. Including her prom date. He still has the corsage.",
    longDescription:
      "Diane Martinez was perfectly happy being the supportive best friend. The sidekick. The one who brought wine and opinions while Cassie dealt with the magical chaos. Then Cassie's residual romantic energy accidentally enchanted Diane's dating app—and now she's getting matches from multiple decades. Her 1996 prom date. A disco enthusiast from the '70s. Her ex-husband, who drove three states because the magic pulled him. The only place her phone stops buzzing? A grumpy antique dealer's shop. Marcus Chen didn't ask for this either. But the universe has opinions, and it's done waiting for Diane to stop keeping her options open.",
    coverImage: "/images/Love-Potion-911-Generic.jpg",
    buyLink:
      "https://www.amazon.com/Love-Potion-911-Romantic-Fantasy-ebook/dp/B0GG8Y9QLL",
    whatThisBookIs: [
      "A romantic comedy about a commitment-phobe forced to finally choose",
      "A story where your past keeps literally showing up at your door",
      "About learning to be the main character in your own story",
      "Even when being the sidekick felt safer",
    ],
    youllLikeThisIf: [
      "You've ever kept your options open until they all closed",
      "You appreciate a grumpy widower who makes tea exactly right without asking",
      "You want to watch exes from multiple decades fade away as the heroine finally picks someone",
      "You need a book that's funny AND makes you feel seen",
    ],
    testimonials: [
      {
        quote:
          "Brilliantly written, laugh-out-loud read. The writing is sharp and clever—several paragraphs so funny I had to reread them.",
        author: "Cher",
      },
      {
        quote:
          "I was entranced by this hilarious and refreshing story. A literal laugh-out-loud read—I couldn't put it down.",
        author: "dvwayne",
      },
      {
        quote:
          "A charming and delightfully quirky cozy witch romance with strong character chemistry and plenty of charm.",
        author: "Dayna",
      },
    ],
  },
  {
    id: "3",
    title: "Uncorked & Undone",
    slug: "uncorked-and-undone",
    description:
      "She controls everything. The vineyard. Her heart. Her color-coded spreadsheets. She did NOT ask for a chaos agent with an accent.",
    longDescription:
      "Valentina Torres has run her vineyard with iron will and meticulous spreadsheets since her husband died twenty-three years ago. She doesn't date. She doesn't lose control. She definitely doesn't believe in magic—no matter what her vines keep doing when she's angry. Then Ronan Burke arrives three days early, with a dog who howls at dirt, a smile that makes her want to commit violence, and knowledge about her land that he shouldn't have. He lied to get onto her property. He dug up something ancient. And now the magic she's been ignoring her whole life won't stay buried. Neither will the feelings she's controlled for two decades.",
    coverImage: "/images/Uncorked-Undone-Generic.jpg",
    buyLink: "https://www.amazon.com/dp/B0GFDLCKSN",
    comingSoon: true,
    whatThisBookIs: [
      "A slow-burn romance about a control obsessive learning to let things grow wild",
      "Including herself",
      "It's about grief, second chances at fifty-two",
      "And the terrifying freedom of finally unclenching",
    ],
    youllLikeThisIf: [
      "You've ever used productivity as armor",
      "You appreciate a heroine who's terrifyingly competent and also a complete disaster",
      "You want to watch someone who hasn't let herself feel anything in decades finally fall apart",
      "And find out that's where the magic was hiding all along",
    ],
    testimonials: [
      {
        quote:
          "A great story about believing and trusting in yourself. I loved how calm Liam was despite Cassie's chaos!",
        author: "Suzanne",
      },
      {
        quote:
          "Pure comical chaos. I could relate in so many ways—it kept me engaged and I finished it in one day.",
        author: "Brittany",
      },
      {
        quote:
          "The best LOL book that had me in tears with the humor. An absolutely brilliant read—I laughed so hard I cried.",
        author: "Cher",
      },
    ],
  },
];

export const BOOKS_SECTION = {
  title: "Books By Ivy Spellman",
  linkText: "Learn More",
};

export const BOOKS_PAGE = {
  heroTitle: "Books",
  heroSubtitle: "Spells, stories, and messy magic in print.",
  sectionTitle: "Books By Ivy Spellman",
};
