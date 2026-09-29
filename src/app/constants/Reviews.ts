/**
 * Reader reviews and Book 1 stats.
 * Quotes are verbatim from 5-star Amazon reviews of Don't Hex the Handyman (long ones are excerpted;
 * ARC disclosure lines are left off the excerpt, not the original). Add more in the same shape;
 * every review section on the site shuffles from this list.
 *
 * Deliberately NOT used for aggregateRating/Review schema: Google treats an author's own site
 * marking up reviews of its own books as self-serving and ignores or penalizes it.
 */

export interface ReaderReview {
  author: string;
  title: string;
  quote: string;
  source: "Amazon" | "BookSirens";
  bookSlug: string;
}

// Update these by hand when the numbers move.
export const BOOK1_STATS = {
  rating: "4.3",
  reviewCount: "849",
  bestsellerLine: "#2 in Later in Life Romance on Amazon",
  peakLine: "Hit #67 in the entire Kindle Store (March 31, 2026)",
};

const B1 = "dont-hex-the-handyman";

export const READER_REVIEWS: ReaderReview[] = [
  { author: "Laure Eccleston", title: "Hot flashes weren't funny until now.", quote: "This is a wonderfully entertaining closed door romantic comedy with a newly minted witch, an opinionated cat, a talking toaster who only speaks French, a house that develops its own personality, and a hard won happily ever after. I laughed until my sides hurt.", source: "Amazon", bookSlug: B1 },
  { author: "Pearl C", title: "PERFECT!", quote: "Menopause and surprise magic? This was the absolute perfect, hilarious, disaster! I laughed, I cried, I had my own hot flashes. Loved it.", source: "Amazon", bookSlug: B1 },
  { author: "RoseKay55", title: "SO good! Literally, a must read!", quote: "I made the mistake of reading the first few pages last night, and was so hooked I couldn't stop reading... and laughing! It was well after midnight.", source: "Amazon", bookSlug: B1 },
  { author: "Mari069", title: "What a fun book!!!", quote: "A cat that talks, a toaster that speaks French, walls that act as a mood ring and when Cassie has a hot flash, things spontaneous combust. Read this book when you can laugh out loud, really loud. But read it.", source: "Amazon", bookSlug: B1 },
  { author: "judymumu", title: "Excellent & funny Witchy Fantasy", quote: "My husband heard me laughing - actually I was cackling and belly laughing reading \"Don't Hex the Handyman\". It was the best read I've had in awhile.", source: "Amazon", bookSlug: B1 },
  { author: "Kindle Customer", title: "delightfully light and fun.", quote: "Started with little expectations, ended with lightness that is really hard to get from a book. Loved how the humor wraps around all the normal heavy life crap.", source: "Amazon", bookSlug: B1 },
  { author: "Sinja", title: "Excellent reads", quote: "I read this book first then bought the next six. As an older women I appreciate stories about older women who have lived and gone through things that young adults haven't yet.", source: "Amazon", bookSlug: B1 },
  { author: "Nia M.", title: "Cassie is such a realistic heroine!", quote: "We need more fantasy romance about middle aged women! I'm sick of teenage heroines. Love the forced proximity and the development of Cassie and Liam's chemistry. Liam is a gem!", source: "Amazon", bookSlug: B1 },
  { author: "kiwibleu", title: "It's short, snappy, and sparkly", quote: "This book was a blast! I enjoyed the pacing and the snarky protagonist and the French speaking toaster.", source: "Amazon", bookSlug: B1 },
  { author: "G-Man", title: "A Spellbinding Read!", quote: "I love the judgmental house and cat. Let's be honest, most of us cat owners can relate. But the humor kept it from ever getting dark.", source: "Amazon", bookSlug: B1 },
  { author: "Kat H", title: "Cute, funny, relatable characters", quote: "Throw in the magic and you've got the extra touches to make this book one that could be turned into a Hallmark Halloween movie!", source: "Amazon", bookSlug: B1 },
  { author: "Jennifer", title: "Still laughing!!!", quote: "I cannot remember the last time that I laughed so hard and so much while reading a book. The characters are great, the plot is wonderful, there is so much humor and sarcasm. It's just perfect!", source: "Amazon", bookSlug: B1 },
  { author: "MusicMommy", title: "You are Enough", quote: "This book is very funny but also important. For all the women (especially those middle age) who feel/or been told that they are too much or not enough, this book is for you.", source: "Amazon", bookSlug: B1 },
  { author: "S.D. Huston", title: "Charming midlife magic with heart and humor", quote: "My absolute favorite part, though, was Luna the cat gaining the ability to talk. Her sarcastic, judgmental commentary had me smiling every time she appeared. (Give me a talking cat and I'll read any book!)", source: "Amazon", bookSlug: B1 },
  { author: "Seajay Ballard", title: "I laughed all thru the book!!", quote: "Ivy Spellman got it RIGHT!! I laugh, cried, cheered & loved this book all the way thru!! If you feel small or invisible in your life ... this is a MUST READ book series!!", source: "Amazon", bookSlug: B1 },
  { author: "Reading Therapy", title: "Great book!", quote: "What stands out most is the underlying message: starting over doesn't have an expiration date. It's light, witty, and comforting with just enough magic and romance to keep things interesting.", source: "Amazon", bookSlug: B1 },
  { author: "Rachel Bourneuf", title: "Read the whole series", quote: "This gem of a series gets better as it goes. Each is short and well worth the time. Romance off the pages, clean, and light-hearted but with a profound message.", source: "Amazon", bookSlug: B1 },
  { author: "LAOliver", title: "Read this in an afternoon, loved it!", quote: "Passages had me laughing out loud, and the two main characters had me cheering them on to their happy ending. A gem of a find.", source: "Amazon", bookSlug: B1 },
  { author: "Kindle Customer", title: "Delightful", quote: "Started out difficult to read because I kept laughing. Wouldn't it be wonderful if we all had a Scottish handyman that accepted us with our chaos!", source: "Amazon", bookSlug: B1 },
  { author: "Sue Daywalt", title: "Enchanting chaos of discovery", quote: "While discovering who she is, Cassie finds a partner in life that wants her as she is. So she can finally be herself. Something we all want.", source: "Amazon", bookSlug: B1 },
  { author: "Yappycat", title: "Magic and laughter", quote: "A great feel good, pick you up book. Lots of laughs and smiling throughout the book. My heart is lighter after I finished.", source: "Amazon", bookSlug: B1 },
  { author: "K Pate", title: "Really Fun Read", quote: "A cozy story that will have you grinning at unexpected plot twists. Great book for vacation or a weekend that you want to feel like is a vacation.", source: "Amazon", bookSlug: B1 },
  { author: "Kindle Customer", title: "Awesome", quote: "If your day has seen troubles, then this book will wash them away. The laughter begins in the first chapter and your sides will be hurting by the end of this book.", source: "Amazon", bookSlug: B1 },
  { author: "Lorra Reads", title: "The house, the toaster and gnomes... oh my!", quote: "The chaotic energy of the house, the toaster and the gnomes had me laughing nonstop.", source: "Amazon", bookSlug: B1 },
  { author: "Nicholas Jarvis", title: "Made me laugh!", quote: "The characters were great, the witty banter was delightful and who wouldn't love a French toaster? I couldn't put it down!", source: "Amazon", bookSlug: B1 },
  { author: "Heather M. Gillette", title: "loved it!", quote: "Fun, unexpected, and true to real life emotions! I was excited there's a talking cat but there's so much more to enjoy!", source: "Amazon", bookSlug: B1 },
  { author: "Deborah Culp-Hook", title: "Great Book", quote: "I tend to love midlife and magic and a handsome Scot in my reading material. This had it all with a large helping of whimsy.", source: "Amazon", bookSlug: B1 },
  { author: "SMcg", title: "SO Not My Type", quote: "I like historicals of a specific era. I prefer not to be asked to \"suspend disbelief.\" I've now read one AND two and downloaded at least three more. Fun has been had.", source: "Amazon", bookSlug: B1 },
  { author: "Linda", title: "Sounds like fun?", quote: "Not sure I could take the hot flashes and the emerging magic at the same time. But turning my exes car hot pink sounds like fun.", source: "Amazon", bookSlug: B1 },
  { author: "L.L.", title: "Mid-life laughter, smiles and giggles", quote: "If you're looking for a book that makes you smile, giggle, and laugh out loud this is your book. Add in a mid-life romance, a best friend that we all wish we had and a nosy HOA.", source: "Amazon", bookSlug: B1 },
  { author: "KMichelleHoughton", title: "Perfectly Adorable", quote: "The laugh out loud funny dialogue, and toe curling romance had me turning pages wanting more.", source: "BookSirens", bookSlug: B1 },
  { author: "Victoria S.", title: "Funny, Cozy, and a Little Chaotic", quote: "The mix of midlife magic, romance, and pure kitchen-sink chaos totally worked for me. Add in a sarcastic talking cat and nosy neighbors, and it's just a really entertaining, easy read.", source: "Amazon", bookSlug: B1 },
  { author: "Michelle Mc", title: "Funny and irreverent", quote: "I am five pages in and relating so hard… amusing, so on point. Thanks for the great, comforting read!", source: "Amazon", bookSlug: B1 },
  { author: "Chris F", title: "Great book!", quote: "I was hooked from the first page to the last. It was a hilarious read.", source: "Amazon", bookSlug: B1 },
  { author: "Amazon Customer", title: "I read this book in one afternoon!", quote: "Warm, laugh out loud funny, and makes me want to have magic, too!", source: "Amazon", bookSlug: B1 },
  { author: "gailpat", title: "Magic, mayhem and love. What's not to like!", quote: "Loved this book. Characters were quirky and fun! Immediately told my daughters to get this book. More please.", source: "Amazon", bookSlug: B1 },
  { author: "Suzanne", title: "A wonderful, magical, loving book", quote: "All about love. The magic when you learn to love and accept yourself and the way it radiates to embrace everything around you. A keeper.", source: "Amazon", bookSlug: B1 },
  { author: "Kimberly Wells", title: "Funny and emotional read", quote: "I read this book in one day, actually less than one day. It's engaging, funny, emotional, and well written.", source: "Amazon", bookSlug: B1 },
  { author: "LS", title: "Exceeded my expectations", quote: "If you want a read that will draw you in and not stress you (no end-of-the-world, no serial killer), this is a good one!", source: "Amazon", bookSlug: B1 },
  { author: "Red", title: "very cute short read", quote: "Well written and adorable. The perfect cozy magic romance. I read it in less than a day.", source: "Amazon", bookSlug: B1 },
  { author: "Tonya", title: "Hilarious and heartwarming", quote: "An easy read with characters I enjoyed getting to know except the nosy neighbor. Nobody needs that but in the end who cares.", source: "Amazon", bookSlug: B1 },
  { author: "Rebecca", title: "cozy romance with humor and magic", quote: "Equal parts emotional rollercoaster and humor. Following along as she overcomes her fears of letting go and learning to love again will leave you smiling.", source: "BookSirens", bookSlug: B1 },
];

/** Short pull-quotes for tight spaces (tickers, hero proof lines). */
export const PULL_QUOTES = [
  { quote: "Hot flashes weren't funny until now.", author: "Laure Eccleston" },
  { quote: "I laughed, I cried, I had my own hot flashes.", author: "Pearl C" },
  { quote: "I was cackling and belly laughing.", author: "judymumu" },
  { quote: "Give me a talking cat and I'll read any book!", author: "S.D. Huston" },
  { quote: "Fun has been had.", author: "SMcg" },
  { quote: "Short, snappy, and sparkly.", author: "kiwibleu" },
];
