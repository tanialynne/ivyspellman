/**
 * Blog/Journal posts content
 * Static blog data for CMS migration
 */

export type BlogCategory =
  | "KITCHEN WITCHERY"
  | "MIDLIFE MAGIC"
  | "DAILY PRACTICE"
  | "SEASONAL MAGIC"
  | "SELF-CARE MAGIC"
  | "SHORT FICTION"
  | "LETTERS FROM THE FOREST"
  | "LOVE & OTHER DISASTERS"
  | "THE WORD \"NO\" AND OTHER SPELLS"
  | "MIDLIFE UNFILTERED";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: BlogCategory;
  excerpt?: string;
  content?: string;
  featuredImage?: string;
  imageDescription?: string;
  publishedAt: string;
  readingTime?: string;
}

// Placeholder image for all blog posts
const BLOG_PLACEHOLDER = "/images/blog-placeholder.jpg";

// Import long-form content from separate file
import { MACHA_CONTENT, CIRCE_CONTENT, SPRING_CONTENT, STARTING_LINE_CONTENT, SELF_CARE_CONTENT } from "./BlogContent";

// All blog posts - sorted by date (newest first)
export const ALL_POSTS: BlogPost[] = [
  {
    id: "19",
    title: "My Body Sent a Memo and I Didn't Read It",
    slug: "my-body-sent-a-memo",
    category: "MIDLIFE UNFILTERED",
    excerpt:
      "Last Tuesday at 2:14 AM I googled \"am I dying or is this perimenopause.\" The internet returned both answers as equally plausible.",
    featuredImage: BLOG_PLACEHOLDER,
    publishedAt: "April 25, 2026",
    readingTime: "6 min read",
    content: `I want you to picture me last Tuesday at 2:14 AM, sitting in bed with my reading glasses on, googling "am I dying or is this perimenopause."

The internet, in its infinite wisdom, returned both answers as equally plausible.

I want you to also picture that I had spent the previous forty-five seconds standing in the kitchen doorway. I had walked in there for a reason. I knew I had walked in there for a reason. The reason was, at one point, in my brain, and now it was somewhere in the troposphere, drifting away from me at a steady rate while I stood under the overhead light in a sleep shirt looking like a woman who had been paused mid-sentence by a force more powerful than her.

I gave up and went back to bed. Halfway down the hallway I remembered I had gone in there for water, but I did not turn around. The water and I had a complicated relationship at this point, and I needed time.

This is not the part of perimenopause they warn you about. Actually, let me amend that. They do not really warn you about any part of perimenopause. They mention hot flashes the way someone might mention rain at a wedding, like, yeah, possibly, deal with it. Nobody tells you that your knee will develop a personality, or that your skin will change texture all over like someone updated your firmware overnight, or that you will lose your car keys in your own hand, or that you will cry watching a commercial about home insurance and not be able to explain why, even to yourself, even later, even with wine.

My body sent me a memo. I did not read the memo. The memo was not actually a memo, but a series of small, increasingly insistent malfunctions that I attributed, in turn, to:

- Stress
- Bad mattress
- Wrong vitamins
- Right vitamins but wrong dose
- That one bottle of wine on Sunday
- Being the wrong age
- Being the wrong woman
- A curse, possibly mild

Then, eventually, in week sixteen of waking up at 3:47 AM exactly, regardless of when I went to bed or how much I did or did not drink or whether the day had been pleasant or had contained a particularly aggressive PTA email, I sat down with the entirely insufficient pamphlet my doctor had handed me twelve months earlier, the one I had stuffed into a kitchen drawer with a vague intention to "deal with it later," and I read the bullet points.

It was, simply, all of it. The knee was on the list, and so was the insomnia, and the brain fog, and the unscheduled moisture, which had begun to redistribute itself across my body according to a logic I could not parse. The rage that arrived like a Greyhound bus, fully booked, with a full tank of gas and a determined driver, was on the list too.

It was not stress and it was not the mattress and it was not the wine, although I suspect the wine and I will be having a separate conversation eventually.

It was a phase change, like ice becoming water, or water becoming steam. Something in my body had decided that the form I had been was now over, and the new form was, well, that was the part nobody could tell me. That part I had to find out the way I was finding out everything else, at 3:47 AM, in a kitchen, in a doorway, in a Google search that had no good answers and several truly disturbing ones.

Here is what I want to tell you, if you are also in this. It is not all in your head. It is in your knee, your hip, your sleep, your skin, your hormones, your hands, and your teeth if you are particularly unlucky, and yes, also a little bit your head, but not in the way they meant.

You are not lazy or soft, and you are not failing to "manage stress." You are undergoing a chemical event of nontrivial scale, and the only people who really seem to grasp this are other women in the same chemical event, currently exchanging knowing looks with you over restaurant tables.

You are allowed to take it seriously. You are allowed to be furious. You are allowed to schedule the appointment, ask the rude questions, and leave the conversation or the room or the entire dinner party, because you have just become aware that your body's needs have been promoted to the front of the agenda whether or not the agenda was prepared to receive them.

I have not figured this out, and I am not about to dispense wisdom from a high bench. I am here in a sweater, with a sticky note on my refrigerator that says WATER and another one that says WHY ARE YOU IN THE KITCHEN, IVY.

The memo was real, and I am reading it now, late but reading it.`,
  },
  {
    id: "18",
    title: "Dirt, Rain, and the Raccoon Who Won't Leave",
    slug: "dirt-rain-raccoon-who-wont-leave",
    category: "LETTERS FROM THE FOREST",
    excerpt:
      "It has been raining for four days, the redbud is doing the thing it does, and the raccoon has eaten the kale starts again. This is the whole report.",
    featuredImage: BLOG_PLACEHOLDER,
    publishedAt: "April 23, 2026",
    readingTime: "4 min read",
    content: `It has been raining for four days straight, the kind of rain that does not have a personality, just steady and gray and persistent, like a houseguest who has stopped trying to charm anyone.

The garden is mostly mud. I went out there this morning in the clogs I keep by the back door, the ones my sister calls "those terrible shoes," which is unkind because they are excellent shoes, they just don't photograph well, and I sank to the second eyelet. I stood there for a while looking at where the kale used to be.

The raccoon (yes, the same one, do not write to me, we are well acquainted) ate the kale starts I planted last weekend. He didn't eat all of them, because that would have been graceful. He ate half. Then he came back two days later and ate three more. Then yesterday he tipped over a small terra cotta pot, presumably to see what I was hiding under it, found that I was not hiding anything under it, and walked away.

The pot is still tipped over. I am not going to right it today. The pot can stay where it is.

I planted the kale again this afternoon. New starts, from the nursery, plus a row of basil that I do not really expect to survive but which I bought because the woman at the register has a granddaughter who is doing chemo and I overheard her telling another customer about it and I needed to give her four dollars, which is what the basil cost, which is how I now own basil.

I do not know what April is like in other places. Here it is mud, and it is rain, and it is the redbud doing that thing it does where it blooms before it has any leaves, like a tree that woke up early and got dressed in the wrong order. The grass is the wrong green, and the wrong green is my favorite green. It only happens for about ten days and then it deepens into a more competent green and you cannot get back to the first one.

I made tea, sat by the window, and watched the rain.

My friend Marian called and said, "What are you doing?"

I said, "Sitting by the window watching the rain."

She said, "But what are you *doing.*"

I said, "I just told you."

She said, "Oh," and then there was a long pause, and then she said, "I think I might come over."

She came over. We did not talk about anything in particular. We watched the rain together for an hour. Then she went home.

The raccoon came back at dusk. I saw him through the window. He stopped at the new kale starts and looked at them, and then he looked, I am being entirely sincere here, directly at the house, at me, through the window.

I raised my mug to him.

He ate one kale start, looked at me again, and ambled off. He left the others.

I think we have an arrangement now. I do not fully understand its terms, and he has not signed anything, and neither have I. But there seems to be an understanding that he will eat one and leave me the rest, provided I do not pretend I am not watching, and provided I do not put another cinderblock on anything.

Tomorrow I am going to plant the basil. It is going to die. But I am going to plant it anyway, because that is the deal you make with April. You plant the things, and the things do what they are going to do, and the rain falls, and the raccoon comes back, and the light gets to that wrong green for a few days, and then it doesn't, and then we keep going.

That is the whole report.`,
  },
  {
    id: "17",
    title: "The Bake Sale Industrial Complex",
    slug: "bake-sale-industrial-complex",
    category: "THE WORD \"NO\" AND OTHER SPELLS",
    excerpt:
      "You didn't volunteer for most of it. You just didn't refuse hard enough, early enough. Now your name is next to it in a spreadsheet somebody else made.",
    featuredImage: BLOG_PLACEHOLDER,
    publishedAt: "April 21, 2026",
    readingTime: "7 min read",
    content: `I want to tell you about the sheet cake. Not all of the sheet cakes, just one specific sheet cake. You'll understand.

It was for the spring fundraiser at my kid's school (this was years ago now, a different me), and I had said yes to it at 11 PM on a Tuesday via a group text, in the specific voice you use when you have already said yes before you've finished reading the sentence. "Happy to!" I wrote. I put the exclamation point. I even, god help me, put a little cake emoji.

I did not want to bake a sheet cake, and I did not have time to bake a sheet cake. What I had was a job, two kids, a mother in decline, a husband whose idea of contributing was asking me where the Tupperware was, and a standing commitment to three other things that week, one of which involved a hot glue gun.

I bought the cake at Costco.

I did not tell anyone. I transferred it to one of my own pans (a pan I specifically owned for the purpose of transferring Costco cakes into), wiped down the edges, added strawberries I had cut up myself to give the impression of personal involvement, and drove it to the school with the windows open so the car wouldn't smell like commerce.

It won a ribbon. The other mothers asked me for the recipe. I smiled and told them it was my grandmother's.

My grandmother was Eastern European and, to my knowledge, never made a single cake in her life. She made a kind of cheese noodle thing that made the house smell like feet. But she was dead, and the dead can't contradict you, and that is one of the underreported benefits of grief.

I drove home smiling, and then I sat in my own driveway for eleven minutes before I went inside.

I want to be clear, nothing was wrong. I had pulled it off, won a ribbon, achieved what the world calls "having it together." I just could not, in that specific moment, summon the energy it was going to require to walk into my house and be the person my family was expecting, the cheerful and cake-winning and coordinating one.

I remember thinking, *I just need another minute. I'll be right in. I just need another minute.*

I sat there until the minute passed. Then I went inside.

That was, I think now, the first crack.

---

Here is the thing nobody tells you about the bake sale. The bake sale is not about the bake sale.

The bake sale is one tile in a mosaic. It lives next to the signup genius for field trip snacks, which lives next to the group text about teacher appreciation week, which lives next to the email chain about the PTA auction, which lives next to the carpool rotation you somehow became the coordinator of, which lives next to your mother-in-law's birthday gift, which you are buying, on behalf of the entire family, including your husband, whose mother it is.

You did not volunteer for most of these jobs. You just did not refuse hard enough, early enough, and now your name is next to them in a spreadsheet somebody else made.

Nobody ever sat you down and said, *Congratulations, you are now the institutional memory of four extended families and a second-grade classroom.* It happened the way all the big things in a woman's life happen, through a thousand small acquiescences, each of which looked reasonable on its own.

"I can do that."
"Sure, no problem."
"Happy to."
"Don't worry about it."
"I'll take care of it."

Cake emoji. Cake emoji. Cake emoji.

---

The first time I said "actually, I can't," I was forty-three, and I said it to a woman named Susan.

Susan is not her real name. Susan is the name I am giving her here because there is always a Susan, and if you have ever been in any kind of volunteer ecosystem, you know exactly which Susan I mean.

Susan wanted me to chair the silent auction.

I had chaired the silent auction the year before, and the year before that. The first year, I had said yes because I'd just moved to the district and wanted to meet people. The second year, I had said yes because Susan had mentioned, in front of other mothers, how "wonderful" I had been, and I could not find the exit ramp on the sentence.

The third year, Susan called me in July, and I heard myself say, out loud, in my own kitchen, "Actually, I can't this year."

There was a silence on the line so long I briefly thought the call had dropped, and then Susan said, in a tone I had not heard from her before, "Oh. Okay."

That was the whole thing.

Nobody cried, nobody un-invited me to anything, and the silent auction went on without me. I heard through the grapevine that it was fine. Possibly more than fine. Possibly, and this is where I still have to sit with some complicated feelings, better, because somebody else brought a different set of skills and nobody had to manage my creeping resentment on top of everything else.

The sky did not fall. In fact, it did not even flicker. It turned out the sky had never been the thing holding up my yes. I had been.

---

I am not writing this to tell you to stop volunteering. Some of the best hours of my life have been spent in folding chairs with other women, assembling something nobody was paying us to assemble. That is a real magic. I still do it. I choose it now. *Choose it* being the operative words.

What I am writing this to tell you is that if you are currently sitting in your car in a parking lot, gathering the energy to walk into a room and be the version of yourself everyone expects, you are not broken or ungrateful or failing at being a good woman. You are a person with a finite amount of hours on earth who has been spending them, in small quiet denominations, on other people's priorities. It is okay to count them.

It is okay to say, *I only have a few thousand Tuesdays left. I am not spending this one on a sheet cake for a woman whose name I had to give a fake name to in an essay.*

You are allowed to go home, allowed to buy the cake at Costco, and, if it comes to it, allowed to say no.

The ribbons don't mean what you were told they meant. The sky is fine.`,
  },
  {
    id: "16",
    title: "I Don't Miss Him. I Miss Having Someone to Yell at About the Thermostat.",
    slug: "miss-someone-to-yell-at-about-the-thermostat",
    category: "LOVE & OTHER DISASTERS",
    excerpt:
      "Nobody warns you about the mundane loneliness, the way nobody's shoes are by the door, the way the milk running out is your fault now, the way a weighted blanket does not shift when it dreams.",
    featuredImage: BLOG_PLACEHOLDER,
    publishedAt: "April 14, 2026",
    readingTime: "4 min read",
    content: `Let me be clear about something upfront. I don't miss him.

I really don't. I don't miss the specific rhythm of his breathing at 3 AM, and I don't miss the sound of him clearing his throat before he said anything important, a verbal tic I used to find endearing and then, toward the end, began to suspect was the sound of him rehearsing a lie. I don't miss the way he pronounced "espresso," or the car magazines on the coffee table, or being asked, routinely, if I was "sure about that haircut."

I don't miss him.

I miss the shape of him, which is a different and much weirder thing. Nobody warns you about it, probably because it doesn't sound sad enough to write a song about.

Here is what I actually miss.

I miss having somebody to yell at about the thermostat. I kept it at exactly 68 for three weeks after he left, because he always wanted it at 72, and I felt smug, and then I realized I had been setting it to 68 as a small daily victory in a war nobody was fighting anymore. It just feels cold in here now. There is no war. There is just me, in a sweater, in a house that is exactly the temperature I want it to be.

I miss having somebody to blame for the milk. When the milk is out, it is my fault now. This is upsetting.

I miss shoes by the door. Not his specifically, just any shoes. A pair of shoes by the door is a sign that somebody lives here besides you. My shoes alone look like a still life titled *Woman Came Home And Died.*

I miss complaining about a snore. I do not miss the snore itself, but I miss having a snore as an agenda item. You cannot imagine how much narrative structure a snore provides until it is gone.

I miss the weight, the weight of another person on the other side of the mattress. I bought a weighted blanket, but it is not the same. A weighted blanket does not shift when it dreams.

I miss being able to say *we.* I am single, a divorcée, a party of one, and those are all accurate words, and none of them have the casual gravity of "we're thinking of going" or "we'll pass on the wedding" or even "we're not really into that."

I miss having someone to be annoyed by. I have a cat now. She is lovely, but not, structurally, annoying. She is indifferent, which is a different skill set.

Here is the part I am still working out. None of this is about him.

If he came back tomorrow, I would not let him back into this house, and I would not rehire him for the position. The position, in fact, has been dissolved, and there is no position.

But sometimes, at 9 PM on a Tuesday, when nothing is wrong and nothing is right and the freezer is making that sound I am probably going to have to deal with eventually, I feel the absence of the shape. I do not feel the absence of the man, just the shape.

Somebody built that shape into the architecture of my life over two decades, and then one day he took it with him, and now there is a man-shaped hole in my kitchen and it whistles when the wind hits it wrong.

I am sure this passes. People tell me it passes. The women who have already been through it get a certain look in their eyes when they say it, though, a look that suggests what actually happens is that the shape shrinks, slowly, the way a bruise shrinks, from purple to green to yellow to *huh, when did that go away?*

In the meantime, I will be over here, in a 68-degree house, yelling at nobody about the thermostat.

The thermostat is winning, but at least I have opinions.`,
  },
  {
    id: "15",
    title: "The Raccoon, the Compost Heap, and the Surrender",
    slug: "raccoon-compost-surrender",
    category: "LETTERS FROM THE FOREST",
    excerpt:
      "There's a raccoon who has decided the compost heap is his. I have tried everything, and last night I put the melon rind out and went inside.",
    featuredImage: BLOG_PLACEHOLDER,
    publishedAt: "April 7, 2026",
    readingTime: "3 min read",
    content: `There is a raccoon who has decided the compost heap is his alone.

I have tried, in this order, the following things.

First, the locking bin. He opened it. I have watched him do it on the trail camera my sister insisted I buy, and I still don't know how. At one point he appears to be turning the latch with his tiny little thumbs in a way that should require a labor union to discuss.

Then I moved the bin. He found it.

Then bungee cords. He chewed through them, slowly, over the course of a week, and at no point did he vary his technique in a way that suggested he had considered alternatives.

Then a cinderblock on the lid. He is sixteen pounds, and the cinderblock is thirty-two. I do not know how he moves it. I have done the math, and the math says none of this should be possible.

Then a motion-activated sprinkler. He enjoyed it.

Then a new bin with what the man at the hardware store called a "critter-proof closure system." The raccoon, and I mean this sincerely, appeared to find this personally insulting. He opened it in twenty-one minutes. He stared directly into the trail camera before he left. I don't want to project, but he seemed smug.

So last night I took the rind of a cantaloupe (one of the good ones from the farm stand, heavy in your hand) and I put it on top of the closed bin. I didn't lock anything or cinderblock anything. I just placed the rind up there like I was setting out a small offering at a shrine.

Then I went inside, poured a glass of wine, and watched him on the trail camera from the couch.

He came out of the treeline eleven minutes later, stopped, looked at the rind, checked the perimeter, came back, and then, I swear this is true, he ate the cantaloupe rind the way someone accepts an award.

I raised my glass to the trail camera.

I am not going to tell you the raccoon was a symbol. The raccoon does not want to be your symbol. The raccoon wants the cantaloupe.

All I am saying is this. There are things I have been trying to control for longer than I care to admit, like a neighbor who parks on my grass, a certain uncle who calls every December, the way my back seizes up if I sleep on my left side three nights in a row, and the timing of my own body, which has stopped consulting me altogether.

And it turns out, some nights, the most sophisticated magic I can perform is to put the melon rind out and go inside.

Not every fight is yours to win. Some of them aren't even fights, just raccoons.

Eat up, buddy.`,
  },
  {
    id: "10",
    title: "The Race I Shouldn't Have Won",
    slug: "the-race-i-shouldnt-have-won",
    category: "SHORT FICTION",
    excerpt:
      "A retelling of the myth of Macha, the goddess pretending to be ordinary whose husband bet her body at the king's fair. She won the race, and she cursed every man who watched.",
    featuredImage: BLOG_PLACEHOLDER,
    publishedAt: "March 27, 2026",
    readingTime: "16 min read",
    content: MACHA_CONTENT,
  },
  {
    id: "12",
    title: "Spring Doesn't Care That You're Not Ready",
    slug: "spring-doesnt-care-youre-not-ready",
    category: "SEASONAL MAGIC",
    excerpt:
      "The crocuses are pushing through whether you've finished grieving winter or not. Maybe that's the point.",
    featuredImage: BLOG_PLACEHOLDER,
    publishedAt: "March 12, 2026",
    readingTime: "5 min read",
    content: SPRING_CONTENT,
  },
  {
    id: "14",
    title: "The Pigs I Made",
    slug: "the-pigs-i-made",
    category: "SHORT FICTION",
    excerpt:
      "A retelling of the myth of Circe. She turned men into pigs, and they all deserved it. Well, most of them deserved it.",
    featuredImage: BLOG_PLACEHOLDER,
    publishedAt: "February 26, 2026",
    readingTime: "15 min read",
    content: CIRCE_CONTENT,
  },
  {
    id: "13",
    title: "The Starting Line Is Wherever You're Standing",
    slug: "starting-line-wherever-youre-standing",
    category: "DAILY PRACTICE",
    excerpt:
      "Every self-help book wants you to prove you're broken enough to deserve fixing. Nope. You just need to be here.",
    featuredImage: BLOG_PLACEHOLDER,
    publishedAt: "February 12, 2026",
    readingTime: "3 min read",
    content: STARTING_LINE_CONTENT,
  },
  {
    id: "11",
    title: "The Bare Minimum Self-Care Spell (For When You've Got Nothing Left)",
    slug: "bare-minimum-self-care-spell",
    category: "SELF-CARE MAGIC",
    excerpt:
      "You don't need a spa day. You need someone to tell you that brushing your teeth counts as a cleansing ritual. So here I am, telling you.",
    featuredImage: BLOG_PLACEHOLDER,
    publishedAt: "January 29, 2026",
    readingTime: "5 min read",
    content: SELF_CARE_CONTENT,
  },
  {
    id: "1",
    title: "Why I Stopped Making New Year's Resolutions and Started Writing Eulogies Instead",
    slug: "new-years-eulogies",
    category: "SEASONAL MAGIC",
    excerpt:
      "The self-help industrial complex wants you to manifest a \"new you.\" I'd rather bury the old one properly first.",
    featuredImage: BLOG_PLACEHOLDER,
    publishedAt: "January 15, 2026",
    readingTime: "6 min read",
    content: `Every January, the internet loses its collective mind.

New year, new you! Manifest your best life! This is YOUR year! Set intentions! Make vision boards! Wake up at 5 AM to journal about your goals while the rest of us mortals are still unconscious and drooling!

And every January, I watch women I love spiral into shame by February because they ate bread or skipped the gym or failed to become entirely different people through sheer force of willpower and expensive planners.

Here's what I've learned. You can't build a new life on top of an unburied body.

I stopped making resolutions five years ago. Now I write eulogies instead, not for people but for the versions of myself that died in the previous year.

This January, I sat down with a glass of wine and my journal, and I wrote eulogies for:

**The Woman Who Thought She Could Make Everyone Happy**
*She died sometime around March, after a particularly brutal family dinner where she smiled so hard her face hurt. She is survived by a woman who has learned the phrase "that won't work for me." She will not be missed.*

**The Belief That Productivity Equals Worth**
*It passed quietly in July, during a week when I did nothing but read novels and take naps. It lingered longer than it should have, sustained by capitalism and childhood conditioning. In lieu of flowers, please do absolutely nothing for at least one hour.*

**The Fantasy of the Perfect Comeback**
*This one died and resurrected several times, like these things do. But its final death came in October when I realized that the person I wanted to say the perfect thing to genuinely does not think about me at all. May it rest in peace. May I stop rehearsing arguments in the shower.*

**The Fear That I'm Too Much**
*Still dying. Takes a long time, this one. But it's weaker now than it was in January 2025, and that's enough.*

After I write them, I burn them.

I don't burn them because fire is ~magical~ (though it is). I burn them because grief needs a ritual, and release needs a container, and sometimes the most powerful thing you can do is watch the smoke rise and say, *You're done now. Thank you. Goodbye.*

Then, and only then, I think about what I want.

I'm not talking about "goals" in the corporate sense, or weight loss or productivity hacks or finally learning Spanish. (I'm never learning Spanish. I've made peace with this.)

I ask three things. What do I want to feel more of? What do I want to feel less of? What do I want to stop tolerating?

This year, my answers were:
- More mornings that don't start with dread
- Fewer conversations where I fake enthusiasm I don't feel
- Zero tolerance for people who make me feel small

I tracked nothing. I downloaded no app. I just had a direction, a slow turn toward something that might be better.

The self-help industry will tell you that you need to become someone new, that the person you are isn't enough, that with the right system, the right habits, the right mindset, you can finally be worthy.

I'm calling bullshit.

You're already worthy. You've just been dragging around a lot of dead weight (old versions of yourself, old beliefs, old expectations) and nobody ever taught you how to hold a funeral.

So here's your permission slip. This January, don't resolve to be better. Grieve what's gone, bury what's dead, and thank the versions of yourself that got you this far, even the ones who made terrible decisions. Then, and only then, ask yourself what you actually want.

The answer might surprise you. It usually has nothing to do with losing ten pounds.`,
  },
  {
    id: "2",
    title: "The Yule Log Is a Lie (And Other Comforting Truths About Winter Solstice)",
    slug: "yule-log-lies",
    category: "SEASONAL MAGIC",
    excerpt:
      "You don't need a fireplace, a forest, or a historically accurate ritual. You just need to survive the longest night. Here's how.",
    featuredImage: BLOG_PLACEHOLDER,
    publishedAt: "December 18, 2025",
    readingTime: "5 min read",
    content: `Let's get something out of the way. Most of what you've read about "ancient Yule traditions" is Victorian nonsense layered on top of Christian appropriation layered on top of best guesses about what our pagan ancestors actually did.

The Yule log was probably a thing, but not the Pinterest version. Decorating trees is a relatively recent tradition that got grafted onto older practices. And that thing about staying up all night to "keep the sun alive"? Honestly, our ancestors were probably just trying to stay warm and not die. Sometimes survival looks like magic because it kind of is.

Here's what we actually know. The winter solstice is the longest night of the year. After this, the light returns. Every culture that's ever survived winter has marked this moment somehow, because humans need hope and we need rituals to carry us through the dark.

That's it, the whole thing.

You don't need a fireplace to honor Yule. You don't need a coven or a specific set of words or the "right" decorations. You don't need to stay up all night (please sleep, you're exhausted, the sun will come back whether you witness it or not).

You just need to acknowledge that it's dark, it's been dark for a while, and soon, it will get lighter.

Here's my Yule practice, refined over years of trial and error and one memorable disaster involving a "fire-safe" candle that was not, in fact, fire-safe.

**At sundown on the solstice:**

I light one candle. Just one. Nothing fancy. Whatever I have.

I sit with it for a few minutes, or an hour, depending on how much I need the quiet.

I think about what I want to release into the dark, in a "what am I tired of carrying" way rather than a "goal-setting" way.

Then I think about what I want to call back with the light. I focus on qualities and feelings and states of being I've let drift away in the dark.

Last year I released the belief that rest is laziness, the habit of apologizing for existing, and a relationship that had been dead for months but I was too scared to bury.

Last year I called back the ability to enjoy things without guilt, trust in my own decisions, and the audacity to take up space.

I don't write it down. I don't do a spell. I just think it and feel it and let the candle burn while I sit in the dark and trust that the light is coming back.

**Then I go to bed.**

That's it, the whole ritual.

The Wheel of the Year doesn't need your elaborate rituals. It just needs you to notice it turning, to pause, even briefly, and say, *I'm still here. The dark hasn't taken me. And tomorrow, there will be a little more light.*

That's the real magic of Yule, not the decorations or the gifts or the historically inaccurate practices we've all inherited.

Just this. You survived the dark, and the light is coming back.

It always does.`,
  },
  {
    id: "3",
    title: "The Witch Who Answered Her Own Prayers",
    slug: "witch-answered-prayers",
    category: "SHORT FICTION",
    excerpt:
      "A very short story about candles, desperation, and the terrible inconvenience of getting exactly what you asked for.",
    featuredImage: BLOG_PLACEHOLDER,
    publishedAt: "November 22, 2025",
    readingTime: "4 min read",
    content: `Margaret lit the candle at 11:47 PM on a Tuesday, which was not an auspicious time for anything.

The books said to wait for a full moon, a Friday, a planetary hour that corresponded with her intention. The books said to cleanse the space, cast a circle, call the quarters. The books said a lot of things that assumed Margaret had time, space, and a life that wasn't held together with coffee and denial.

Margaret had a kitchen table, a candle she'd bought at Target, and a desperation so thick she could taste it.

*Please*, she whispered to whatever might be listening. *I need help. I can't do this alone anymore.*

She didn't specify what "this" was. It was everything. The job was killing her, the marriage had been dead for years, and she woke up every morning already exhausted by a day that hadn't happened yet.

*Please. Send someone. Something. Anything.*

The candle flickered.

Margaret waited.

Nothing happened.

She laughed (a short, bitter sound) and blew out the candle. Of course nothing happened. Magic wasn't real. Hope was a scam. She was forty-six years old, sitting alone in her kitchen at midnight, begging the universe for help like some kind of—

The smoke from the candle drifted toward her, deliberately, instead of up like smoke does.

Before she could move, it touched her face, cool, like a breath. And for just a moment, she heard a voice from inside her, not outside.

*You called?*

Margaret's heart stopped, then started again. "What—who—"

*You asked for help. You said you couldn't do this alone anymore.*

"I—yes, but—"

*So stop.*

The voice wasn't unkind, but it wasn't gentle either. It was the voice of someone who had heard this prayer a thousand times and was very, very tired of the answer being ignored.

*Stop doing it alone. You have a sister who has asked you to call her every week for three years. You have a doctor who told you to come back for a follow-up six months ago. You have a therapist's number in your phone that you have never dialed. You have a mouth that could say 'no' and a door that could close and two feet that could walk you out of any room you don't want to be in.*

"But I can't just—"

*You asked for help.* The voice was firmer now. *Help is not a rescue. Help is someone telling you the truth you refuse to hear. Here is the truth. The only person who can save you is you, but you have to choose it. Every day. In every small way. Until the small ways become the whole way.*

The smoke dissolved.

The kitchen was silent.

Margaret sat there for a long time.

Then she picked up her phone, looked at her sister's number, put it down, and picked it up again.

Her hands were shaking.

She pressed call. It rang three times.

"Mags?" Her sister's voice, confused but not annoyed. "It's almost midnight. Are you okay?"

Margaret opened her mouth to say *fine, everything's fine, sorry to bother you.*

What came out instead was, "No. I'm not. I haven't been for a while. And I think I need help."

The silence on the other end was thick.

Then her sister said, "Okay. I'm listening."

Margaret started talking.

Outside her kitchen window, the candle smoke she couldn't see anymore drifted up toward the stars. If she'd been watching, she might have seen it twist into something like a smile.

But she wasn't watching. She was finally, finally doing the thing, and that was the magic.`,
  },
  {
    id: "4",
    title: "A Spell for When You Have Three Minutes and No Fucks Left",
    slug: "three-minute-spell",
    category: "DAILY PRACTICE",
    excerpt:
      "This isn't a ritual. It's magical triage. Use in case of Mondays, in-laws, or that coworker who replies-all.",
    featuredImage: BLOG_PLACEHOLDER,
    publishedAt: "November 2, 2025",
    readingTime: "4 min read",
    content: `### You Will Need

- A beverage (any temperature, any type, even if it's cold coffee you reheated twice and forgot about again)
- Approximately three minutes
- The ability to breathe
- No fucks left to give about doing this "correctly"

### What You're Actually Doing

This is a reset spell, but it isn't for your life or your circumstances or your asshole landlord or your check engine light or the fact that your mother still pronounces "quinoa" wrong on purpose to upset you.

This is a reset for *you*, right now, in this moment, when everything is too much and you can't deal and you still have to deal anyway.

### The Spell

**Step 1:** Hold your beverage. Feel the weight of it. This is the only thing you need to hold right now.

**Step 2:** Take one breath, just one. It doesn't need to be a "cleansing breath" or a "deep breath." Just a regular-ass breath. Your lungs know what they're doing. Trust them.

**Step 3:** Say, out loud or in your head:

*"I am not required to solve everything today.
I am only required to survive until bedtime.
I release the lie that I'm not doing enough.
I am doing enough.
I am enough.
This coffee is enough."*

*(Substitute your actual beverage. The universe is flexible.)*

**Step 4:** Take one sip. Let it be good enough.

**Step 5:** Return to your bullshit with 3% more capacity to handle it.

### Notes

- You can do this in a bathroom stall, a parked car, a supply closet, or anywhere you can carve out three minutes of not being required to act like a functional person.
- You don't need to feel transformed. You just need to feel slightly less like you're going to scream in the middle of Target.
- If you have time, add a second sip. Luxury.
- If someone interrupts you, you're allowed to continue silently in your head while making eye contact with them. Assert dominance.

### The Magic Part

You're probably wondering, "But Ivy, where's the actual magic? This is just drinking coffee and lying to myself about being enough."

First of all, affirmations aren't lies. They're aggressive hope.

Second, the magic is in the pause, in choosing to stop the spiral for three minutes, in deciding, however briefly, that you are the most important thing in your immediate vicinity.

The universe doesn't care if you cast your spells with $300 worth of crystals or a gas station coffee and spite. It just cares that you're paying attention.

Now go forth and survive until bedtime.`,
  },
  {
    id: "5",
    title: "Samhain Wasn't Spooky Until Capitalism Made It Spooky (A Love Letter to the Dead)",
    slug: "samhain-love-letter",
    category: "SEASONAL MAGIC",
    excerpt:
      "Your ancestors didn't dress up as slutty cats. They set extra places at the table and left the porch light on. Here's how to actually honor them.",
    featuredImage: BLOG_PLACEHOLDER,
    publishedAt: "October 29, 2025",
    readingTime: "5 min read",
    content: `Every October, someone asks me how to "celebrate Samhain properly."

And every October, I have to stop myself from asking, *Properly according to whom?*

The ancient Celts didn't have Pinterest. They had cattle they needed to bring in before winter, root vegetables to store, and a genuine, reasonable fear that the dark half of the year might kill them. Samhain was a harvest festival, a new year celebration, and a time when the veil between worlds was thin enough that the dead could come home for dinner.

It was just home, the kind where someone might show up unannounced and want coffee.

My great-grandmother apparently set a place for her mother every Samhain until she died, complete with food, the good china, and a glass of whiskey that she swore was always emptier in the morning.

"Gran, that was evaporation," my mother told her once.

My great-grandmother fixed her with a look that could curdle milk across county lines. "Evaporation doesn't take the good whiskey and leave the cheap stuff."

I've started setting a place at my table too. The act of making space means something, even though I don't actually expect my grandmother to show up and critique my cooking (though if she did, she'd have notes; she always had notes).

It means *I remember you*, *you're still part of this family*, *the story didn't end when you stopped breathing*.

This year, I'm setting three places: one for Gran with her whiskey and her risotto spoon nearby, one for my mother (who would've hated that I'm doing this but would've secretly loved the drama), and one for the version of me that died in my marriage, because she deserves to be mourned and released too.

That's the part of Samhain nobody talks about on aesthetic Instagram accounts. It's not just about the capital-D Dead. It's about all the deaths we carry, the person we were before the divorce or the diagnosis or the betrayal, the future that didn't happen, the self we had to bury to survive.

They deserve a place at the table too.

So here's my unsolicited advice for Samhain, from one tired witch to another.

**1. Set an extra place** for whoever needs one, living, dead, or somewhere in between.

**2. Leave the porch light on,** literally or metaphorically. Let them know where home is.

**3. Tell a story** about someone who's gone. Say their name out loud. Names have power; speaking them is resurrection.

**4. Eat something,** with your hands if you can. Feed your body. Your ancestors didn't survive winter so you could skip meals because you're "not hungry."

**5. Let it be sad.** Grief isn't a problem to solve; it's a door. Samhain asks us to walk through it, sit in the dark for a while, and trust that we'll find our way back.

Tomorrow the veil will thicken again. The dead will return to wherever they wait for us. You'll go back to your email and your deadlines and your check engine light.

But tonight, set a place. They're always closer than you think.`,
  },
  {
    id: "6",
    title: "The Spell I Cast with My Mother's Wooden Spoon (And Why It Finally Worked)",
    slug: "mothers-wooden-spoon",
    category: "KITCHEN WITCHERY",
    excerpt:
      "I didn't inherit my grandmother's grimoire. I got her risotto spoon, warped, burnt on one edge, and apparently enchanted as hell.",
    featuredImage: BLOG_PLACEHOLDER,
    publishedAt: "October 15, 2025",
    readingTime: "5 min read",
    content: `My grandmother was not a witch.

At least, that's what my mother always said, usually while stirring something with the same wooden spoon Gran had stirred with for forty years. "She was just *particular*," Mom would explain, adding salt to the pot without measuring. "About ingredients. About timing. About—"

"Intentions?" I'd offer.

Mom would give me a look that said *we don't use that word in this house*.

But here's the thing about kitchen magic. It doesn't care what you call it.

I inherited that spoon three years ago, after Mom passed. It arrived in a box of "miscellaneous kitchen items" my sister didn't want. It had a warped handle, a burn mark on the left edge from an incident we never discussed, and a faint smell of onion that no amount of washing has ever removed.

For two years, I used it like any spoon. I stirred soups, scraped pans, and once threatened my teenager with it, which felt appropriately ancestral.

Then last month, on the anniversary of my divorce being finalized, I made risotto.

I didn't make it because I wanted risotto. I made it because I wanted to stand at the stove and stir something for forty-five minutes without anyone asking me what was for dinner, and because I wanted the meditative rhythm of *stir, wait, add, stir*, and because I was sad and angry and tired of pretending I wasn't.

I didn't cast a spell. I didn't light a candle or invoke anything.

I just stirred, and I thought about my grandmother, who made risotto every Sunday for a man who didn't deserve her, and my mother, who never made risotto because it reminded her too much of watching her mother disappear into that marriage, one Sunday at a time, and me, standing at my stove, finally free of my own version of that pattern.

And I cried into the risotto, a lot.

*(Don't worry, it's not unsanitary. Salt is salt.)*

When it was done, I sat alone at my table, ate the entire pot over two hours, and felt, for the first time in months, like I could actually breathe.

That's when I noticed the spoon, still sitting in the empty pot, right where I'd left it. Except the burn mark was gone.

I'm not saying my grief healed my grandmother's spoon. I'm not saying there's some mystical explanation for wood changing appearance after being stirred through emotional carbohydrates.

But I'm not *not* saying it either.

The spoon sits on my altar now. (Fine, my kitchen windowsill. Same thing.) It sits next to a bay leaf I never throw away and a salt dish I never let empty, my grandmother's tools finally being used the way she probably always meant them to be.

My mother would say I'm being dramatic. My grandmother would just tell me to stir counterclockwise next time.

*For releasing. Obviously.*`,
  },
  {
    id: "7",
    title: "The Lazy Witch's Guide to Moon Phases (For When You Can't Even)",
    slug: "lazy-witch-moon-phases",
    category: "DAILY PRACTICE",
    excerpt:
      "You missed the full moon, again. Here's why that's fine and what to do instead of spiraling about your \"failed practice.\"",
    featuredImage: BLOG_PLACEHOLDER,
    publishedAt: "September 22, 2025",
    readingTime: "5 min read",
    content: `It's the full moon and you forgot, again.

You had plans, you were going to do a whole ritual, you had the candles and the intention journal and that one crystal you saw on TikTok that's supposed to charge in moonlight even though you're not totally sure what "charging" means or whether you have the right crystal.

And instead, you fell asleep at 9 PM watching a show you don't even like, woke up at 2 AM with a crick in your neck and a deep sense of personal failure, and now the moon has been full for six hours without your participation.

Welcome to the club. We have snacks.

Here's the thing nobody tells you about moon phases. **The moon does not require your attendance.**

The moon has been doing her thing for 4.5 billion years. She does not have feelings about whether you charged your crystals. She is not keeping a spreadsheet of which witches honored her properly. She is a rock reflecting sunlight, and she will continue to do so whether you light a candle or not.

*Does* working with moon phases add something to your practice? Sure, probably. Cycles are meaningful, and timing matters, and there's a reason humans have been tracking the moon since before we had writing.

And not using your spiritual practice as another opportunity to feel like a failure is also meaningful.

So here's my lazy witch guide to moon phases for when you can't even.

### New Moon (The "Starting Over" One)

**Ideal practice:** Set intentions, plant seeds (literal or metaphorical), journal about what you want to grow.

**Lazy practice:** Think, briefly, about one thing you'd like to be different. That's it. You've set an intention, and good job.

**Extremely lazy practice:** Look at the dark sky, nod, mutter "same," and go to bed.

### Waxing Moon (The "Growing" One)

**Ideal practice:** Take action on your intentions, build momentum, manifest.

**Lazy practice:** Do one small thing related to that thing you thought about during the new moon. Send one email. Make one phone call. Take one vitamin.

**Extremely lazy practice:** Continue living your life. You are already growing, and biology is on your side.

### Full Moon (The "Big Energy" One)

**Ideal practice:** Charge crystals, release what isn't serving you, do your most powerful workings.

**Lazy practice:** Go outside for thirty seconds. Look at the moon. Say "hey, moon." Go back inside.

**Extremely lazy practice:** Acknowledge that the moon exists from inside, through a window, while eating cereal.

### Waning Moon (The "Letting Go" One)

**Ideal practice:** Release, cleanse, banish, cut cords, let go.

**Lazy practice:** Throw away one thing you don't need. Delete one email. Mute one group chat.

**Extremely lazy practice:** The trash goes out on Tuesday. That's waning energy, and you're covered.

### The Real Magic

Here's what I've learned after decades of trying to be a "good" witch. Consistency matters more than intensity.

A thirty-second acknowledgment of the moon every month for a year is worth more than one elaborate ritual you beat yourself up about for missing.

A practice you actually *do* is infinitely more magical than a perfect practice you imagine while scrolling Instagram and feeling bad about yourself.

The moon doesn't need your guilt. She needs your attention. And attention can look like a full ritual under the stars, or it can look like glancing up and saying "oh, there you are."

Both count.

Now stop spiraling and go to bed. The waning moon is for rest anyway.`,
  },
  {
    id: "8",
    title: "My Hot Flash Was Actually a Kundalini Awakening (It Wasn't)",
    slug: "hot-flash-kundalini",
    category: "MIDLIFE MAGIC",
    excerpt:
      "I googled \"spontaneous internal combustion spiritual meaning\" at 3 AM. The internet had opinions. So did my endocrinologist.",
    featuredImage: BLOG_PLACEHOLDER,
    publishedAt: "September 8, 2025",
    readingTime: "5 min read",
    content: `I woke up at 3:17 AM absolutely certain my body had decided to exit the mortal plane via internal fire.

My first thought was, *This is it. Spontaneous combustion. I always knew I'd go out dramatically.*

My second thought was, *Wait, I'm still alive. And freezing. And now sweating again. What fresh hell—*

My third thought was, *...oh.*

Here's what nobody tells you about perimenopause. It feels *exactly* like every description of spiritual awakening you've ever read.

Sudden heat rising through the body could be kundalini energy ascending, or it could be your ovaries throwing a retirement party without consulting you.

Interrupted sleep and vivid dreams could be ancestral messages coming through, or they could be your hormones playing Jenga with your REM cycles.

Feeling like your entire identity is dissolving could be ego death and spiritual rebirth, or it could be your body announcing that the first half of your life is officially over and nobody asked your opinion.

I spent an embarrassing amount of time trying to make my symptoms *mean something*.

Surely the fact that I woke up burning at 3 AM (the witching hour!) was significant. Surely my sudden inability to remember why I walked into rooms was my third eye opening so wide it crowded out mundane memory. Surely the rage that bubbled up when my husband asked what was for dinner was righteous feminine fury, and not just regular fury at being asked that question for the 8,000th time.

My therapist, bless her, let me talk about it for twenty minutes before gently asking if I'd seen my doctor.

My doctor, less gently, handed me a pamphlet titled "Menopause: What to Expect."

*Oh*, I thought, looking at the bullet points. *So it's not a spiritual emergency. It's just my body.*

Just my body, I told myself. But here's the thing I've come to believe. It's never *just* your body. Your body is where you live. It's the altar you carry everywhere. When it changes, *you* change. And when it changes dramatically, without your permission, in ways you can't control, that *is* a kind of initiation.

This is the hard kind of initiation, where you have to let go of who you were because that person literally doesn't exist in this body anymore. There are no candles or cloaks, and nobody hands you a certificate at the end.

I'm not saying my hot flashes are sacred. I'm saying that I refuse to believe this transition is meaningless just because it's biological, and that dismissing it as "just hormones" is the same bullshit energy that dismisses women's pain as hysteria and women's intuition as delusion.

My body is changing dramatically, without asking my permission, and I get to decide what that means.

Tonight, at 3:17 AM, if I wake up burning again, I'm going to try something different. I'm going to sit up, light a candle, and say, *Okay. I'm listening. What are you trying to tell me?*

And then I'm going to drink a large glass of cold water, because I'm also dehydrated.

Both things can be true.`,
  },
  {
    id: "9",
    title: "I Took a \"Spiritual Bath\" and Ended Up Crying About a Spatula",
    slug: "spiritual-bath-spatula",
    category: "SELF-CARE MAGIC",
    excerpt:
      "The instructions said to meditate on what I wanted to release. I did not expect to release feelings about kitchenware.",
    featuredImage: BLOG_PLACEHOLDER,
    publishedAt: "August 21, 2025",
    readingTime: "5 min read",
    content: `The spiritual bath recipe I found online required:
- Epsom salt (got it)
- Rose petals (from my sad, half-dead rosebush, but fine)
- Florida water (improvised with actual water and some optimism)
- White candles (I had birthday candles, whatever)
- Clear intentions

The clear intentions were where everything went sideways.

"Meditate on what you'd like to release," the article said. "Let the water carry away what no longer serves you."

It seemed simple and easy. I was going to release stress, or anxiety, or the persistent feeling that I'm failing at everything while somehow also not trying hard enough.

I lit my birthday candles, got in the bath, and closed my eyes.

And I immediately thought about a spatula.

I mean an actual spatula, not a metaphorical one. The red silicone one my ex-husband took when he moved out because it was "his" even though I bought it and he never cooked anything except frozen pizza.

Suddenly, I was furious about the spatula.

*That was MY spatula. I have to buy a new spatula now. Why didn't I fight harder for the spatula? Why did I let him take everything that mattered and also everything that didn't matter because I just wanted him to LEAVE and now I can't even flip pancakes correctly—*

Reader, I sobbed in that bathtub for forty-five minutes, but I was not crying about my marriage or the betrayal or the loneliness or the fear. I was crying about the SPATULA. And about the throw pillows he insisted on that I hated but kept for seven years, and the vegetable peeler that was the wrong shape but he bought it so I couldn't replace it, and every tiny, stupid thing I gave up because fighting felt like too much work.

By the time the water got cold, I had cried about:
- The spatula
- A lamp
- The way he pronounced "supposedly"
- My 30s
- A specific Tuesday in 2019 that I barely remembered but apparently still had feelings about
- My grandmother's risotto (again)
- The fact that I'll never be the person I was at 28
- Also the spatula again, because apparently we weren't done

This was not the dignified spiritual experience I had planned.

But here's the thing. I felt better. I didn't feel better because the bath was magic. I felt better because grief is a weird little hoarder that stores random crap in boxes you forget about until you open them. And sometimes those boxes are labeled "spatula" even though they're actually labeled "the entire decade I lost to a relationship that wasn't working."

The bath didn't carry away my stress. It gave me space to finally be ridiculous about my losses, to cry about the small things because the big things were too big to look at directly.

That's the secret of ritual, I think. We don't do it because the candles are magic or the rose petals have power. We do it because we're so rarely allowed to fall apart. We need the structure, the container, the excuse.

"I'm not crying in the bathtub because I'm broken," we can tell ourselves. "I'm doing a ritual."

Same thing, probably.

Next time, I'm going to set an intention to release my feelings about a whisk.

I'll keep you posted.`,
  },
];

// Featured blog post (most recent)
export const FEATURED_POST: BlogPost = ALL_POSTS[0];

// Recent posts for sidebar/home page (next 3 after featured)
export const RECENT_POSTS: BlogPost[] = ALL_POSTS.slice(1, 4);

export const JOURNAL_SECTION = {
  title: "Latest From The Journal",
  readArticleText: "Read Article",
};

export const JOURNAL_PAGE = {
  heroTitle: "Journal",
  heroSubtitle:
    "Essays, spells, and stories for witches who are too tired for toxic positivity but too stubborn to stop believing in magic.",
  sectionTitle: "All Articles",
};

// Helper function to format date for display
export function formatDate(dateString: string): string {
  // If already in readable format, return as-is
  if (dateString.includes(",")) {
    return dateString;
  }
  // Otherwise parse and format
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// Helper function to format relative time (for sidebar)
export function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays < 1) {
    return "Today";
  } else if (diffInDays < 7) {
    return `${diffInDays} days ago`;
  } else if (diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7);
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else {
    return formatDate(dateString);
  }
}
