// ---------------------------------------------------------------------------
// Content from Aryan's résumé + previous portfolio. Edit here; content.js
// renders it. Project images can be added later via each project's `image`.
// ---------------------------------------------------------------------------

export const experience = [
  {
    range: 'Aug 2026 — Present',
    role: 'Marketing Manager',
    company: 'AdLift Marketing',
    location: 'Pune, IN',
    bullets: [
      'Launched a multichannel festive campaign across paid media, email, WhatsApp, LinkedIn Ads and Instagram — five channels, one seasonal push.',
      'Scaled a design-led newsletter ~9× to 10,575 recipients at a record 36.3% open rate (vs 23.1% benchmark), with 313 clicks.',
      "Launched and produced the founder's podcast — a new owned-media, thought-leadership asset built from the ground up.",
      'Owned the BrightonSEO lead-gen funnel end to end: landing page, booth design and event marketing.',
    ],
  },
  {
    range: 'Nov 2024 — Aug 2026',
    role: 'Branding & Marketing Specialist',
    company: 'Rikaian Technology (Rian.io)',
    location: 'Pune, IN',
    bullets: [
      'Led two brand revamps and rebuilt the website with AI + Webflow — +45% site visits, +25% session time.',
      'Built HTML email automation and AI-assisted A/B tests, lifting campaign CTR ~15% across lifecycle touchpoints.',
      'Produced investor pitch decks and leadership comms with AI-powered design and data storytelling.',
      'Owned end-to-end brand strategy and the annual marketing roadmap.',
    ],
  },
  {
    range: 'Jun 2024 — Oct 2024',
    role: 'Marketing Executive',
    company: 'Rikaian Technology (Rian.io)',
    location: 'Pune, IN',
    bullets: [
      'Ran AI-optimized Meta and LinkedIn strategies with predictive analytics — +60% digital reach in 6 months.',
      'Represented the brand at industry events with CRM automation and lead scoring, supporting ~₹2Cr in deal closures.',
      'Built creator and YouTuber partnerships via outreach automation — +25% organic reach and 100+ warm leads.',
    ],
  },
  {
    range: 'Mar 2024 — May 2024',
    role: 'Marketing Intern',
    company: 'Rikaian Technology (Rian.io)',
    location: 'Pune, IN',
    bullets: [
      'Ran AI market-trend research to support brand positioning and GTM strategy.',
      'Created AI-assisted promotional content averaging 15% CTR via data-driven testing.',
      'Streamlined lead tracking with CRM automation — +20% outreach efficiency.',
    ],
  },
];

// `video` (a path in /works/...) takes priority over `image`; otherwise a
// generated sky-vignette placeholder is used.
export const projects = [
  {
    name: 'Tesseract — AI Lead Video',
    stack: 'AdLift · AI Video · Lead Gen',
    lines: ['A lead-gen video ad scripted, voiced and produced with AI tools.'],
    link: '#',
    video: '/works/tesseract.mp4',
  },
  {
    name: 'RianTranslate — Website & Platform',
    stack: 'Rian · Web · Product',
    lines: [
      'Built the new RianTranslate website alongside its platform.',
      'Brand, site and product experience, end to end.',
    ],
    link: 'https://www.riantranslate.com/',
    image: '/works/riantranslate.jpg',
  },
  {
    name: 'BrightonSEO Quiz — Landing Page & Funnel',
    stack: 'AdLift · Landing Page · CRO',
    lines: ['A lead-capture quiz landing page and the funnel built around it.'],
    link: 'https://quiz-landing-page-orpin.vercel.app/',
    image: '/works/brightonseo-quiz.jpg',
  },
  {
    name: 'BrightonSEO 2026 — Campaign Page',
    stack: 'AdLift · Event · Landing Page',
    lines: ['Event campaign page for AdLift at BrightonSEO 2026.'],
    link: 'https://www.adlift.com/brightonseo-2026/',
    image: '/works/brightonseo-2026.jpg',
  },
  {
    name: 'Free AEO / GEO Audit',
    stack: 'AdLift · Landing Page · Lead Gen',
    lines: ['A lead-gen landing page offering a free AEO/GEO audit.'],
    link: 'https://www.adlift.com/free-aeo-geo-audit/',
    image: '/works/aeo-geo-audit.jpg',
  },
  {
    name: 'Quote Tracker & Generator',
    stack: 'Claude AI · Google Cloud · Notion API',
    lines: [
      'End-to-end client quote generation with real-time cloud sync.',
      'Version tracking and team sharing via the Notion API.',
    ],
    link: '#',
    image: null,
  },
  {
    name: 'Cookie Brand Website',
    stack: 'Figma · Vercel · Claude Cowork',
    lines: [
      'Full D2C cookie brand site — copy, UI/UX and deployment.',
      'Responsive and production-ready, concept to launch.',
    ],
    link: '#',
    image: null,
  },
];

export const contact = {
  email: 'aryantiwari1166@gmail.com',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aryan-tiwari-481b59232/' },
    { label: 'Adlift', href: 'https://www.adlift.com' },
  ],
};
