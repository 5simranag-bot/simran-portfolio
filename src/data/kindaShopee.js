export const sections = [
  { id: 'k-story', label: 'Story' },
  { id: 'k-discovery', label: 'Discovery' },
  { id: 'k-path', label: 'Path' },
  { id: 'k-tools', label: 'Tools' },
  { id: 'k-craft', label: 'Craft' },
  { id: 'k-lessons', label: 'Lessons' },
  { id: 'k-impact', label: 'Impact' },
];

export const tldr = [
  { k: 'Problem', v: 'E-commerce had grown noisy decision fatigue and declining trust at the moment of purchase.' },
  { k: 'Process', v: 'Interviews, market teardown and journey mapping → six-step path from research to ship.' },
  { k: 'Solution', v: 'KINDA SHOPEE a calm, trust-led mobile shopping experience with intuitive discovery & checkout.' },
  { k: 'Impact', v: '+32% conversion, +47% engagement, −38% checkout drop-off in concept testing.' },
];

export const callPoints = [
  { t: 'Noise', d: 'Endless feeds, banners and badges competing for one weary tap.', kanji: '騒', delay: 0 },
  { t: 'Decision fatigue', d: 'Too many near-identical choices, too little guidance to decide.', kanji: '迷', delay: 90 },
  { t: 'Eroding trust', d: 'Hidden costs and vague reviews made shoppers second-guess.', kanji: '疑', delay: 180 },
  { t: 'Overwhelm', d: 'Search that demanded the right words for a half-remembered thing.', kanji: '惑', delay: 270 },
];

export const discovery = [
  { tag: 'Listening', t: 'User interviews', d: '18 shoppers walked me through a real, recent purchase start to regret.', insight: 'People abandon when the price changes after they’ve decided.', tilt: '-2deg', delay: 0 },
  { tag: 'Friction', t: 'Pain points', d: 'I mapped every hesitation, back-tap and rage-scroll in the flow.', insight: 'The cart, not the catalogue, is where trust is won or lost.', tilt: '1.5deg', delay: 90 },
  { tag: 'Landscape', t: 'Market analysis', d: 'Teardown of six leading apps for patterns worth keeping and breaking.', insight: 'Everyone optimised for clicks; no one for calm.', tilt: '-1deg', delay: 180 },
  { tag: 'Behaviour', t: 'Shopping behaviour', d: 'Diary notes on when, why and how impulse turned into intent.', insight: 'Browsing is leisure; checkout is anxiety. Design for both.', tilt: '2deg', delay: 270 },
];

export const path = [
  { icon: '◔', n: 'Step 01', t: 'Research', d: 'Interviews & field notes', delay: 0 },
  { icon: '◑', n: 'Step 02', t: 'Insights', d: 'Synthesis & framing', delay: 80 },
  { icon: '◕', n: 'Step 03', t: 'Wireframes', d: 'Low-fi flows', delay: 160 },
  { icon: '◴', n: 'Step 04', t: 'Testing', d: 'Usability rounds', delay: 240 },
  { icon: '◵', n: 'Step 05', t: 'Iteration', d: 'Refine & repeat', delay: 320 },
  { icon: '●', n: 'Step 06', t: 'Final design', d: 'Polished system', delay: 400 },
];

export const tools = [
  { icon: '人', t: 'Personas', d: 'Three archetypes the rushed, the researcher and the returner kept every decision anchored to a real need.', delay: 0 },
  { icon: '径', t: 'Journey maps', d: 'End-to-end emotional maps that exposed exactly where calm turned to anxiety.', delay: 90 },
  { icon: '流', t: 'User flows', d: 'Branching flows for discovery, purchase and post-order the skeleton of the app.', delay: 180 },
  { icon: '構', t: 'Information architecture', d: 'A structure shallow enough to feel effortless, deep enough to hold the whole catalogue.', delay: 270 },
];

const craftRaw = [
  { img: '/assets/karna-walkthrough.png', alt: 'KINDA SHOPEE onboarding walkthrough screen', step: 'The first breath', t: 'A welcome, not a wall', lead: 'Onboarding leads with a single, generous offer and a calm visual no signup gauntlet before any value is shown.',
    why: 'First impressions set the emotional tone for the entire session.', solves: 'Aggressive signup walls that make users bounce before they explore.', business: 'Higher activation and a lower first-screen drop-off.' },
  { img: '/assets/karna-home.png', alt: 'KINDA SHOPEE home screen', step: 'The clearing', t: 'One clear horizon', lead: 'The home screen offers a single hero promotion and a tight trending row breathing room over a wall of products.',
    why: 'A calm entry point invites exploration instead of overwhelming it.', solves: 'Decision fatigue from dense, undifferentiated product grids.', business: 'Deeper browse sessions and stronger promo engagement.' },
  { img: '/assets/karna-categories.png', alt: 'KINDA SHOPEE categories screen', step: 'Wayfinding', t: 'Choose by sight, not by word', lead: 'Large, image-led category tiles let people recognise what they want rather than recall its name.',
    why: 'Visual wayfinding matches how people actually shop a storefront.', solves: 'Text-only menus that hide the breadth of the catalogue.', business: 'More category exploration and cross-sell opportunity.' },
  { img: '/assets/karna-search.png', alt: 'KINDA SHOPEE search screen with photo and voice search', step: 'When words fail', t: 'Search for the half-remembered', lead: 'Photo and voice search, recent queries and trending products rescue intent when a name won’t come.',
    why: 'Shoppers often know what something looks like, not what it’s called.', solves: 'Dead-end searches that send high-intent users away empty.', business: 'Recovered intent converts directly into sales.' },
  { img: '/assets/karna-filter.png', alt: 'KINDA SHOPEE filter screen', step: 'Narrowing the path', t: 'Precision without effort', lead: 'Generous, tactile filters gender, category, price, colour, size narrow thousands of items to the right few.',
    why: 'Relevance is the fastest route to a confident decision.', solves: 'Irrelevant results that quietly erode trust in the catalogue.', business: 'Faster paths to purchase and fewer returns.' },
  { img: '/assets/karna-product.png', alt: 'KINDA SHOPEE product detail screen', step: 'The decision', t: 'Everything needed to say yes', lead: 'Reviews, a size chart, transparent pricing and a persistent add-to-cart remove doubt at the deciding moment.',
    why: 'The product page is where consideration becomes commitment.', solves: 'Uncertainty about fit, value and quality at the point of choice.', business: 'A measurable lift in add-to-cart rate.' },
  { img: '/assets/karna-cart.png', alt: 'KINDA SHOPEE cart screen', step: 'Carrying it home', t: 'No surprises at the summit', lead: 'A transparent price breakdown, visible coupons and effortless quantity and delete controls close the loop honestly.',
    why: 'Trust is won or lost in the final, vulnerable step.', solves: 'Hidden costs and clumsy edits that trigger abandonment.', business: 'Higher checkout completion and repeat purchase.' },
];

export const craft = craftRaw.map((c, i) => ({ ...c, dir: i % 2 === 0 ? 'row' : 'row-reverse' }));

export const lessons = [
  { n: '一', t: 'Calm is a feature, not a vibe', d: 'Restraint had to be designed and defended at every step every removed element was a deliberate decision, not an absence of one.', delay: 0 },
  { n: '二', t: 'Trust lives in the last 10%', d: 'The cart and checkout did more for conversion than any flashy discovery feature. Honesty at the end earns the whole journey.', delay: 90 },
  { n: '三', t: 'Recognition beats recall', d: 'Image-led navigation and photo search consistently outperformed text in testing people shop with their eyes.', delay: 180 },
  { n: '四', t: 'A system pays compound interest', d: 'Building reusable components early meant later screens took hours, not days and stayed visually coherent for free.', delay: 270 },
];

export const impact = [
  { arrow: '↑', target: 32, label: 'Conversion', sub: 'browse → purchase', color: '#7fc7a0', delay: 0 },
  { arrow: '↑', target: 47, label: 'Engagement', sub: 'avg. browse depth', color: '#caa066', delay: 90 },
  { arrow: '↑', target: 28, label: 'Retention', sub: 'returning shoppers', color: '#d9b87a', delay: 180 },
  { arrow: '↓', target: 38, label: 'Drop-off', sub: 'checkout abandonment', color: '#d98a6a', delay: 270 },
];
