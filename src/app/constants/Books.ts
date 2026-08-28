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
  preorder?: boolean;
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
  reviews: typeof ALL_REVIEWS = ALL_REVIEWS,
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
    buyLink:
      "https://www.amazon.com/Uncorked-Undone-Romantic-Fantasy-Midlife-ebook/dp/B0GL3C2F9K",
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
  {
    id: "4",
    title: "Sparks & Sticky Notes",
    slug: "sparks-and-sticky-notes",
    description:
      "She fixed everything—except her own life. Now her hot flashes are fixing things on their own. Badly.",
    longDescription:
      "Gemma Hartley has spent her entire life being the person everyone calls. Leaky faucet? She's there. Marriage falling apart? She'll mediate. Career crisis? She has a color-coded sticky note system for that.\n\nThen her husband left her for his life coach, her company \"restructured\" her out of a job, and her mother moved in. Temporarily. Three months ago.\n\nNow she's in Fairhaven, renovating a fixer-upper cottage because she saw it online at 2 AM after her fourth panic attack of the week. Fresh start. New project. Same compulsive need to make everything perfect.\n\nExcept her hot flashes have started making things fix themselves. Wrong. The broken lamp now floats. The leaky sink dispenses wine. And the grumpy artist next door? The one with the forearms and the deliberately broken sculptures? She just \"repaired\" three months of his work into smooth, meaningless spheres.\n\nHe is not amused.\n\nGemma doesn't need a sculptor who thinks broken things are beautiful. She needs a plan, a label maker, and possibly an exorcist.\n\nToo bad the magic has other ideas. And so does her cat.",
    coverImage: "/images/Sparks--Sticky-Notes-Kindle.jpg",
    buyLink: "https://www.amazon.com/gp/product/B0GT48ZQZP",
    whatThisBookIs: [
      "A cozy witch romcom about a compulsive fixer who can't fix herself",
      "A fixer-upper cottage with a mind of its own",
      "A grumpy sculptor who thinks broken things are beautiful",
      "Hot flashes that repair things in the worst possible way",
    ],
    youllLikeThisIf: [
      "You've ever organized your feelings into color-coded categories",
      "You appreciate a love interest with forearms and strong opinions about imperfection",
      "You want a heroine who needs to learn that not everything is a project",
      "You believe cats always know more than they're letting on",
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
          "Pure comical chaos. I could relate in so many ways—it kept me engaged and I finished it in one day.",
        author: "Brittany",
      },
    ],
  },
  {
    id: "5",
    title: "Nice Girls Finish Hexed",
    slug: "nice-girls-finish-hexed",
    description:
      "The nicest woman in Fairhaven never said no. Now her hot flashes are saying everything she didn't. Loudly.",
    longDescription:
      "Ellie Whitfield has been the nicest woman in Fairhaven for thirty years. She runs the historical society, volunteers for everything, and has never once said no to anything. She left her husband quietly after twenty-three years, and he was genuinely shocked because she'd never mentioned being unhappy.\n\nNow her hot flashes have activated revelation magic that makes hidden things visible. When her temperature spikes, the world around her starts giving up its secrets. Painted-over water damage glows through fresh walls. Buried objects push to the surface. Old documents fill in their own redacted sections. And the truths she's been suppressing for three decades start falling out of her mouth.\n\nThe quiet, private man renovating the old hardware store? The one who deflects personal questions like a professional and listens to the whole sentence before responding? Her magic wants to strip every one of his polite non-answers away.\n\nEllie doesn't need a man with secrets. She needs everyone to stop asking her for favors and possibly a muzzle.\n\nToo bad the magic has opinions. And so does her dog.",
    coverImage: "/images/Nice-Girls-FInished-Hexed-Cover.jpg",
    buyLink:
      "https://www.amazon.com/Nice-Girls-Finish-Hexed-Romantic-ebook/dp/B0GX2TSWC9",
    whatThisBookIs: [
      "A cozy witch romcom about the nicest woman alive finally losing her filter",
      "Revelation magic that exposes every secret in a ten-foot radius",
      "An elderly golden retriever with devastating comedic timing",
      "A quiet man with careful hands and a past he'd rather keep buried",
    ],
    youllLikeThisIf: [
      "You've ever smiled through something you should have screamed about",
      "You appreciate a love interest who listens to the whole sentence before responding",
      "You want to watch a people-pleaser discover that the word 'no' is a complete sentence",
      "You believe dogs always know more than they're letting on",
    ],
    testimonials: [
      {
        quote:
          "I started smiling on the first paragraph and kept smiling the whole way through. This is a frigging adorable book.",
        author: "Megan",
      },
      {
        quote:
          "Brilliantly written, laugh-out-loud read. The writing is sharp and clever—several paragraphs so funny I had to reread them.",
        author: "Cher",
      },
      {
        quote:
          "A charming and delightfully quirky cozy witch romance with strong character chemistry and plenty of charm.",
        author: "Dayna",
      },
    ],
  },
  {
    id: "6",
    title: "Flight Risk & Broomsticks",
    slug: "flight-risk-and-broomsticks",
    description:
      "She's spent her whole life leaving. The inherited house has other plans. So does the parrot.",
    longDescription:
      "Kit Holloway has spent her entire life leaving. Lease renewed? She's out. Relationship getting serious? She's packed. Two years at a corporate job in Charlotte was the longest she'd ever stayed, and it felt like a prison sentence.\n\nThen her great-aunt Mabel left her a 1940s colonial on Pine Street, and the house she planned to flip and sell started transforming every time a buyer walked through.\n\nNow the kitchen is mid-century modern by morning and Victorian by afternoon. The phone charger keeps turning into a rotary cord. Every time she carries her suitcase to the car, it ends up back by the front door, full of roses. And the parrot her aunt left her keeps broadcasting every incriminating thing she's ever muttered.\n\nThe local farmer? The one with the kind eyes who watched her turn his tomatoes into sunflowers and said, \"I think we're past money\"? He's not running.\n\nKit doesn't need a third-generation farmer with deep roots. She needs a working phone and a suitcase that stays packed.\n\nToo bad the magic has other ideas. And so does the bird.",
    coverImage: "/images/Flight-Risk--Broomsticks-Cover-Web.jpg",
    buyLink:
      "https://www.amazon.com/dp/B0H1MQZD12",
    whatThisBookIs: [
      "A cozy witch romcom about a commitment-phobe with a shape-shifting house",
      "A 1940s colonial with strong opinions about decor—and her love life",
      "A parrot who broadcasts every muttered thought at the worst possible moment",
      "A third-generation farmer who doesn't flinch when the tomatoes turn into sunflowers",
    ],
    youllLikeThisIf: [
      "You've ever kept a suitcase half-packed 'just in case'",
      "You appreciate a love interest with dirt under his nails and deep roots",
      "You want to watch a lifelong runner finally stay",
      "You believe parrots always know more than they're letting on",
    ],
    testimonials: [
      {
        quote:
          "A balm for my brain foggy, slightly sweaty, and definitely overwhelmed soul. Wonderfully funny without losing any of the poignance.",
        author: "Sarah",
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
    ],
  },
  {
    id: "7",
    title: "Burn After Manifesting",
    slug: "burn-after-manifesting",
    description:
      "She's been manifesting for nine years. Nothing ever answered. Then twenty-seven tealights lit themselves\u2014and the fire marshal walked in.",
    longDescription:
      "Claire Whitley has been manifesting for nine years. A new business. A divorce that didn't ruin her. A spiritual shop on Main Street with a bearded dragon, twenty-seven tealights, and a clientele that mostly bought candles to be polite. She lit one every morning. None of them ever lit back.\n\nUntil they did. All of them. At once.\n\nShe did NOT manifest twenty-seven tealights catching fire at 9:15 on a Thursday morning. She did NOT manifest a Tower card that won't stay in the deck. She did NOT manifest the shop's windows cleaning themselves in front of the entire block of Main Street. And she absolutely did not manifest Nate Cordero, the new Fairhaven Fire Marshal who walked into her shop, called her ma'am, cited her for seven violations, and said I'm sorry like he meant it.\n\nThe universe is allowed to be woo. She's allowed to have a routine. And she will NOT fall for the man whose entire job is putting out the fires her candles keep starting.\n\n\u2026Probably.",
    coverImage: "/images/Burn-After-Manifesting-Cover.jpg",
    buyLink: "https://www.amazon.com/dp/B0H3X3ZKN3",
    whatThisBookIs: [
      "A cozy witch romcom about a woman who performed belief for years\u2014and then it answered",
      "A spiritual shop where the crystals suddenly mean it",
      "A bearded dragon who stares at everyone, but stares at some people with intent",
      "A fire marshal whose job is putting out everything she keeps lighting",
    ],
    youllLikeThisIf: [
      "You've ever kept a ritual going because stopping felt worse than believing",
      "You appreciate a love interest who apologizes like he means it",
      "You want to watch the woman who sold the magic find out she had it all along",
      "You believe bearded dragons always know more than they're letting on",
    ],
    testimonials: [
      {
        quote:
          "I started smiling on the first paragraph and kept smiling the whole way through. This is a frigging adorable book.",
        author: "Megan",
      },
      {
        quote:
          "A charming and delightfully quirky cozy witch romance with strong character chemistry and plenty of charm.",
        author: "Dayna",
      },
      {
        quote:
          "Pure comical chaos. I could relate in so many ways\u2014it kept me engaged and I finished it in one day.",
        author: "Brittany",
      },
    ],
  },
  {
    id: "8",
    title: "Crash & Burnout",
    slug: "crash-and-burnout",
    description:
      "Fired five times in two years. Living at the Holiday Inn. Now things catch fire when she feels things. The blacksmith is not helping.",
    longDescription:
      "Dana Ashton has been fired five times in two years. She has a master's degree, a Pomeranian who is more popular than she is, and a room at the Holiday Inn in Fairhaven, Virginia, with a wallpaper border of small green ferns she will be staring at for the foreseeable future.\n\nThe coffee shop job at Meredith's was supposed to be temporary. The forge lessons with the local blacksmith were supposed to be a favor to an old woman named Margaret, who runs this town on favors.\n\nThen Dana set fire to a stranger's geraniums on a public sidewalk. And a chalk sign. And a latte. And a retired postman's newspaper. And a pair of shop rags at the forge while kissing the blacksmith, which was not part of the favor.",
    coverImage: "/images/Crash-and-Burnout-Cover.jpg",
    buyLink: "https://www.amazon.com/dp/B0H65W3RQ8",
    whatThisBookIs: [
      "A cozy witch romcom about starting over at rock bottom\u2014with fire",
      "A grumpy heroine and an impossibly patient blacksmith",
      "A Pomeranian with a bigger social life than her owner",
      "Forge lessons that were supposed to be a favor",
    ],
    youllLikeThisIf: [
      "You've ever been let go and taken it personally (because it was)",
      "You appreciate a love interest who works in fire and never flinches at hers",
      "You want a heroine whose magic is exactly as angry as she is",
      "You believe Pomeranians always know more than they're letting on",
    ],
    testimonials: [
      {
        quote:
          "A balm for my brain foggy, slightly sweaty, and definitely overwhelmed soul. Wonderfully funny without losing any of the poignance.",
        author: "Sarah",
      },
      {
        quote:
          "Brilliantly written, laugh-out-loud read. The writing is sharp and clever\u2014several paragraphs so funny I had to reread them.",
        author: "Cher",
      },
      {
        quote:
          "I was entranced by this hilarious and refreshing story. A literal laugh-out-loud read\u2014I couldn't put it down.",
        author: "dvwayne",
      },
    ],
  },
  {
    id: "9",
    title: "Read the Room",
    slug: "read-the-room",
    description:
      "Her comedy career finally has an audience: the room itself. The mic stand bows. The chairs heckle. The stage light does her punchlines.",
    longDescription:
      "Joey Bennett drove fourteen hours from Maryland to Fairhaven, Virginia, with three suitcases, a divorce, and a dead brother she hasn't said the name of in twenty-seven years.\n\nThe house came with a dog named Percy who sighs at her best material, a Keurig with emotional range, and an avocado kitchen that hasn't been updated since the Reagan administration.\n\nFour days in, Joey did five minutes at a bookstore open mic and the mic stand bowed. The folding chairs crossed their arms. The stage light did her punchline. The whole room thought she was hilarious.",
    coverImage: "/images/Read-the-Room-Cover.jpg",
    buyLink: "https://www.amazon.com/dp/B0H65VCKQH",
    preorder: true,
    whatThisBookIs: [
      "A cozy witch romcom about a comedian whose magic gives her the audience she never had",
      "A slow-burn romance with a quiet locksmith who listens all the way to the end",
      "A dog named Percy with devastating comedic timing",
      "A Keurig with more emotional range than her ex",
    ],
    youllLikeThisIf: [
      "You've ever used the joke to outrun the feeling",
      "You appreciate a love interest who doesn't laugh easily\u2014so it counts when he does",
      "You want to watch the funniest woman in the room finally get heard",
      "You believe a dog's sigh can be a complete review",
    ],
    testimonials: [
      {
        quote:
          "I started smiling on the first paragraph and kept smiling the whole way through. This is a frigging adorable book.",
        author: "Megan",
      },
      {
        quote:
          "A great story about believing and trusting in yourself. I loved how calm Liam was despite Cassie's chaos!",
        author: "Suzanne",
      },
      {
        quote:
          "A charming and delightfully quirky cozy witch romance with strong character chemistry and plenty of charm.",
        author: "Dayna",
      },
    ],
  },
  {
    id: "10",
    title: "Mind Your Own Magic",
    slug: "mind-your-own-magic",
    description:
      "For fifty years Margaret Thistle held this town together. Nobody ever asked her why she was like this. The finale\u2014read it last.",
    longDescription:
      "For fifty years Margaret Thistle held this town together. Nobody ever asked her why she was like this.\n\nShe went to nine doors. Cassie's first, with a casserole and a diagnosis, and then Diane's and Valentina's and Gemma's and Ellie's and Kit's and Claire's and Dana's and Joey's. She taught nine women how to live with magic. She never told any of them how she learned.\n\nThere is a photograph in her kitchen drawer. A shoebox in her attic full of letters she told Cassie she burned. She did not burn them. She carried them through three cities and fifty years and she never threw a single one away.\n\nAsheville. Spring of 1968. Margaret is twenty-two and pours coffee at a diner on Patton Avenue, and a man walks in and folds his coat on the stool beside him and orders apple pie without looking at the menu. His name is Paul. He keeps coming back. He brings her a peach.\n\nThat was fifty years ago. This is Sunday. The casserole is made and the coven is at her table and Margaret is going to tell them all of it, from the diner to the leaving, and she is not going to soften one word of it.\n\nNine women are about to find out what their mentor is.\n\nPlease read this one last.\n\nA note before you start: the other nine books are cozy witch romcoms with a happily-ever-after you can count on. This one is not a romcom and it is not a romance. It is Margaret's confession, told out loud at her own kitchen table, and every page depends on you already knowing the nine women at it. If Fairhaven is new to you, start with Don't Hex the Handyman and come back when you are ready.",
    coverImage: "/images/Mind-Your-Own-Magic-Cover.jpg",
    buyLink: "https://www.amazon.com/dp/B0HBYSH6LX",
    preorder: true,
    whatThisBookIs: [
      "The tenth and final book of Hot Flashes & Hexes\u2014the mentor origin story ten books in the making",
      "Not a romance: Margaret's confession, told at her own kitchen table",
      "A love story that does not get fixed, and a sister who keeps finding her",
      "The answer to the question nobody in Fairhaven ever thought to ask",
    ],
    youllLikeThisIf: [
      "You've read the other nine and love Margaret like the rest of us",
      "You want the ending that earns the series instead of repeating it",
      "You understand that some stories close instead of resolving",
      "You have tissues. This is not optional.",
    ],
    testimonials: [
      {
        quote:
          "A balm for my brain foggy, slightly sweaty, and definitely overwhelmed soul. Wonderfully funny without losing any of the poignance.",
        author: "Sarah",
      },
      {
        quote:
          "Brilliantly written, laugh-out-loud read. The writing is sharp and clever\u2014several paragraphs so funny I had to reread them.",
        author: "Cher",
      },
      {
        quote:
          "Pure comical chaos. I could relate in so many ways\u2014it kept me engaged and I finished it in one day.",
        author: "Brittany",
      },
    ],
  },
  {
    id: "10.5",
    title: "Something Borrowed, Something Brewed",
    slug: "something-borrowed-something-brewed",
    description:
      "Patti has poured coffee for thirty years and never once let anyone bring her a cup. Then her magic wakes up. A Christmas novella.",
    longDescription:
      "Patti Rooney has poured coffee at the Fairhaven Diner for thirty years and never once let anyone bring her a cup.\n\nThree weeks before the Christmas Eve wedding of the season, her magic wakes up\u2014and it will not take no for an answer. The coffee pot pours for her. The best booth reserves itself. The pie case has started making pointed suggestions.\n\nAnd the piano player she sent away in 1999 just walked back into her diner, folded his coat on the third stool, and ordered decaf.\n\nPatti is catering the wedding. Nobody asked, because nobody needed to. What nobody counted on\u2014least of all Patti\u2014is a season where the whole town, the whole coven, and the diner itself conspire to teach the woman who feeds everyone the one skill she never learned: being fed.\n\nA complete, closed-door Christmas novella set in Fairhaven, with the whole coven in attendance, one very opinionated cat, and a happily-ever-after twenty-seven years in the making. Lovely anytime; best with the series behind you.",
    coverImage: "/images/Something-Borrowed-Something-Brewed-Cover.jpg",
    buyLink: "https://www.amazon.com/dp/B0HGBKC2W2",
    preorder: true,
    whatThisBookIs: [
      "A full Christmas novella in the Hot Flashes & Hexes world\u2014the coven at a wedding",
      "Patti's story: the woman who feeds everyone learns to be fed",
      "A second-chance romance twenty-seven years in the brewing",
      "Complete, closed-door, and cliffhanger-free, like the rest of Fairhaven",
    ],
    youllLikeThisIf: [
      "You want the whole coven back at one long table",
      "Christmas weddings, diner coffee, and snow that squeaks are your love language",
      "You've ever fed everyone and gone home to an empty plate",
      "You believe some things should be delivered by goose, or at least by magic",
    ],
    testimonials: [],
  },
];

export const BOOKS_SECTION = {
  title: "Hot Flashes & Hexes",
  linkText: "Learn More",
};

export const BOOKS_PAGE = {
  heroTitle: "Books",
  heroSubtitle: "Spells, stories, and messy magic in print.",
  sectionTitle: "Hot Flashes & Hexes",
};


// ─── What's next: Christmas novella + Birchwood teaser ───
export interface UpcomingItem {
  title: string;
  subtitle: string;
  description: string;
  coverImage?: string; // drop file into /public/images/birchwood/ and set path here
  releaseNote: string;
}

export const WHATS_BREWING = {
  sectionTitle: "What's Brewing Next",
  novella: {
    title: "Something Borrowed, Something Brewed",
    subtitle: "A Hot Flashes & Hexes Christmas Novella",
    description:
      "Patti has poured coffee at the Fairhaven Diner for thirty years and never once let anyone bring her a cup. Three weeks before the Christmas Eve wedding of the season, her magic wakes up\u2014and it will not take no for an answer. The coffee pot pours for her. The best booth reserves itself. The bouquet toss refuses to go to anyone else.",
    coverImage: "/images/Something-Borrowed-Something-Brewed-Cover.jpg",
    releaseNote: "Preorder now \u2014 arrives December",
  } as UpcomingItem,
  birchwood: {
    seriesTitle: "The Witches of Birchwood Lake",
    intro:
      "Fairhaven is not the only town where the women are like this. Four states north, on a lake in Michigan, a faded lodge is about to get a cook whose onion soup makes grown men cry, a goose named Pancake with strong opinions, and a resident talking cat named Soot who has seen it all before. A brand-new series of complete, cozy witch romances\u2014same promise, new town.",
    books: [
      {
        title: "Where There's Smoke",
        subtitle: "Birchwood Lake, Book 1",
        description:
          "Laura Keller used to run one of the best farm-to-table restaurants downstate. Then the kitchen caught fire, the marriage ended, and the only offer left was four hours north at a lodge nobody had heard of in twenty years. The plan was simple: cook competently, want nothing, leave before the season turns. Then the bread started tasting like being loved.",
        coverImage: undefined, // e.g. "/images/birchwood/where-theres-smoke.jpg"
        releaseNote: "Coming soon",
      },
      {
        title: "Trick of the Light",
        subtitle: "The Birchwood Prequel Novella",
        description:
          "How the lodge got its keeper\u2014and how Soot got his opinions. The story Birchwood tells before it tells you anything else.",
        coverImage: undefined, // e.g. "/images/birchwood/trick-of-the-light.jpg"
        releaseNote: "Coming soon",
      },
    ] as UpcomingItem[],
  },
};
