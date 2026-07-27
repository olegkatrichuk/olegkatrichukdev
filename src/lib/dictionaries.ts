import type { Locale } from "./i18n";

const en = {
  role: "Full-stack engineer — .NET & TypeScript",
  seoTitle: "Website Development with .NET & React — Oleg Katrichuk",
  positioning:
    "I help startups and product teams ship reliable web apps — from .NET APIs to React & Next.js frontends — without months of agency overhead.",
  description:
    "Website and web-app development by a full-stack engineer — .NET, TypeScript, React & Next.js. Custom sites and SaaS for clients in the US, EU, Ukraine and the CIS.",
  locationLine: "Remote — working with clients in the US, EU, Ukraine & the CIS",

  nav: {
    work: "Work",
    services: "Services",
    why: "Why a site",
    journal: "Journal",
    about: "About",
    contact: "Contact",
  },

  common: {
    bookCall: "Let's talk",
    seeWork: "See my work",
    allProjects: "All projects",
    readCase: "Read case study",
    backToWork: "Back to work",
    startConversation: "Start a conversation",
    sendMessage: "Send a message",
    visitSite: "Visit live site",
    available: "Available for work",
    lastUpdated: "Updated",
  },

  home: {
    heroSub:
      "I work in small, direct engagements — clear scope, clear communication, production-ready code.",
    currentlyBuilding: "Currently building",
    workTitle: "Selected work",
    howTitle: "How I work",
    principles: [
      {
        title: "Scope first",
        body: "Scope and price are agreed in writing before any code is written — and you pay after the site is live and you're happy with it, not before.",
      },
      {
        title: "Ship in slices",
        body: "Working software every week, not a big-bang reveal at the end. You always see progress.",
      },
      {
        title: "Production-grade",
        body: "Tests, observability and clean handover — code your team can own after I'm gone.",
      },
      {
        title: "Long-term partner",
        body: "After launch I stay available for updates, SEO and promotion — for as long as you need a hand. The relationship doesn't end on hand-off.",
      },
    ],
    ctaTitle: "Have a project in mind?",
    ctaBody:
      "Tell me what you're building and where it's stuck. I usually reply within a few hours.",
  },

  work: {
    title: "Work",
    intro:
      "A few projects in depth — the problem, what I did, why, and what changed as a result.",
  },

  caseStudy: {
    ctaTitle: "Want something similar built?",
    ctaBody:
      "I take on a small number of projects at a time. If this looks like your problem, let's talk.",
    relatedTitle: "Related work",
  },

  about: {
    title: "About",
    description:
      "About Oleg Katrichuk — full-stack engineer focused on .NET, TypeScript, React and Next.js. End-to-end delivery for startups and small product teams.",
    paragraphs: [
      "I'm a full-stack engineer focused on .NET and TypeScript. I build and ship web applications for startups and small product teams — work where one engineer who can move across the whole stack beats a large, slow team.",
      "Most projects start the same way: there's a product idea or an app that's stuck, and the team needs someone who can take ownership end-to-end — API, database, frontend, deploy — without a lot of hand-holding.",
      "I care about software that keeps working after I hand it over: tested, observable, and documented well enough that your team can extend it. I'd rather ship something solid and boring than clever and fragile.",
      "I work with clients across the US, EU, Ukraine and the CIS, in English, Ukrainian or Russian.",
      "When a site launches, the work isn't over. I stay available for updates, SEO, content and promotion — most clients keep working with me long after the initial build. The hand-off is the start of the relationship, not the end.",
    ],
    stackTitle: "Core stack",
    stackBody:
      "C# / .NET, TypeScript, React & Next.js, PostgreSQL / SQL Server, Docker. Comfortable owning CI/CD and cloud deployment.",
  },

  contact: {
    title: "Let's talk",
    description:
      "Contact Oleg Katrichuk — full-stack engineer. Tell me about your project and I usually reply within a few hours. Telegram, email or the form.",
    intro:
      "The more concrete you are about the problem and the timeline, the faster I can tell you whether I'm the right person for it.",
    name: "Name",
    email: "Email",
    message: "What are you building?",
    send: "Send message",
    sending: "Sending…",
    sent: "Thanks — your message is in. I usually get back within a few hours.",
    error: "Something went wrong.",
    validation:
      "Please fill in name, a valid email and a short message.",
    preferCallTitle: "Prefer Telegram?",
    bookMin: "Message me on Telegram",
    emailTitle: "Email",
    elsewhereTitle: "Elsewhere",
  },

  why: {
    title: "Why your business needs a website",
    metaTitle: "Website development for business — why you need a site",
    metaDescription:
      "Why your business needs its own website — and what custom website development gives you that Instagram, TikTok and marketplaces never will.",
    heroSub:
      "Instagram, TikTok, marketplaces — any platform can suspend you, change its algorithm, or take a bigger cut tomorrow. A site on your own domain is the only asset you actually own — and the only one that ranks, converts and works while you sleep.",
    reasonsTitle: "Four reasons",
    reasons: [
      {
        title: "You own it",
        body: "Instagram, TikTok, Facebook, Telegram, marketplace listings — any of them can lock your account tomorrow, throttle your reach, or change the rules. Followers you took years to build can vanish overnight. A site on your own domain outlives platforms — it's the one asset that's actually yours.",
      },
      {
        title: "Search brings buyers who are already looking",
        body: "Most people research before they call — for a haircut, a contractor, a B2B purchase. If you don't show up in their search, you don't exist for them. A profile doesn't rank. A site does.",
      },
      {
        title: "It works while you sleep",
        body: "A site answers \"are you open Sunday?\", \"how much is X?\", \"do you do Y?\" — at 2 AM, during a client appointment, on a holiday. DMs on Instagram, Telegram or Facebook only work when you do.",
      },
      {
        title: "It's where trust lives",
        body: "For purchases that matter — booking a colorist, buying a container, choosing a service — people check the site. A real domain looks like a real business. A profile-only operation looks like a hobby.",
      },
    ],
    objectionsTitle: "Common objections",
    objections: [
      {
        q: "I have Instagram and Facebook — isn't that enough?",
        a: "For discovery, yes. For decision-making, no. Social platforms are the top of the funnel; a site closes the deal. People search before they buy.",
      },
      {
        q: "Aren't sites expensive?",
        a: "Hosting on Vercel: $0. Domain: ~$12/year. The build is the only real cost — and a small business usually earns it back in the first inbound month.",
      },
      {
        q: "I'm not technical — I'd never maintain it",
        a: "You don't have to. You hire one engineer end-to-end, get a working site and a clean hand-off — and I stay available for updates, SEO and promotion if you need it. Day-to-day content changes are usually content, not code.",
      },
      {
        q: "How does pricing and payment work?",
        a: "Scope and price are agreed in writing before anything starts — no creeping invoice. You pay after the site is live and you're happy with it, not before. No upfront deposit.",
      },
    ],
    examplesTitle: "Real examples",
    examplesIntro:
      "Three sites I built for clients in the same boat — see how it played out:",
    ctaTitle: "Not sure if a site moves the needle for you?",
    ctaBody:
      "Tell me what you're trying to build. I'll tell you straight whether a site is the right move.",
  },

  services: {
    title: "Web development services",
    metaTitle: "Web development services — websites, web apps & SaaS",
    metaDescription:
      "Full-stack web development services: custom websites, web applications and SaaS MVPs built with .NET, TypeScript, React and Next.js. Fixed scope, paid after launch.",
    heroSub:
      "One full-stack engineer, end to end — from a marketing site to a multi-tenant SaaS. Scope and price agreed up front, in writing. You pay after launch, not before.",
    listTitle: "What I build",
    items: [
      {
        title: "Business & marketing websites",
        body: "Fast, SEO-ready sites on your own domain — multilingual, accessible, and built to rank. The asset you own, not a rented profile.",
      },
      {
        title: "Web applications",
        body: "Dashboards, portals and internal tools with a .NET backend and a React / Next.js frontend. Real auth, real data, production-grade from day one.",
      },
      {
        title: "SaaS MVPs",
        body: "From idea to a live product real customers can pay for — multi-tenant architecture, billing, and the boring infrastructure that lets it scale later.",
      },
      {
        title: "APIs & integrations",
        body: "Clean, documented REST APIs, third-party integrations and data pipelines. The plumbing that connects your product to everything else.",
      },
      {
        title: "Rescue & refactor",
        body: "Inherited a codebase that nobody can safely change? I stabilise it — tests, observability, and a path back to shipping features without fear.",
      },
      {
        title: "Ongoing partnership",
        body: "After launch I stay available for updates, SEO and promotion — for as long as you need a hand. The relationship doesn't end at hand-off.",
      },
    ],
    stackTitle: "The stack",
    stackBody:
      "C# / .NET, ASP.NET, EF Core, Clean Architecture & CQRS on the backend; TypeScript, React and Next.js on the frontend; PostgreSQL and Docker underneath. Battle-tested choices, not whatever's trending this month.",
    processTitle: "How we'd work",
    process: [
      {
        title: "Scope, in writing",
        body: "We agree exactly what gets built and what it costs before any code — no creeping invoice, no surprises.",
      },
      {
        title: "Ship in slices",
        body: "Working software every week, not a big-bang reveal at the end. You see progress and can change course early.",
      },
      {
        title: "Pay after launch",
        body: "You pay once the project is live and you're happy with it. No upfront deposit.",
      },
    ],
    faqTitle: "Questions clients ask",
    faq: [
      {
        q: "How much does a website or web app cost?",
        a: "It depends on scope, which we fix in writing before starting. A marketing site is a different number from a multi-tenant SaaS. You get one agreed price up front — no hourly creep — and you pay it after launch.",
      },
      {
        q: "How long does it take?",
        a: "A focused marketing site is usually a couple of weeks; a web app or SaaS MVP, a few weeks to a few months depending on scope. Because I ship in weekly slices, you see working software the whole way through, not just at the end.",
      },
      {
        q: "Do you work with clients in my country?",
        a: "Yes — remote, with clients in the US, EU, Ukraine and the CIS. I work in English, Ukrainian and Russian.",
      },
      {
        q: "What if I already have a half-built project?",
        a: "I take on rescue and refactor work. I'll assess what's there, stabilise it with tests and observability, and get you back to shipping features safely.",
      },
      {
        q: "Will I be able to maintain it after?",
        a: "Yes. You get clean, documented code and a proper hand-off — and I stay available for updates and SEO if you'd rather not. Day-to-day content changes are usually content, not code.",
      },
    ],
    ctaTitle: "Have a project in mind?",
    ctaBody:
      "Tell me what you're building and where it's stuck. I usually reply within a few hours.",
  },

  // Commercial landing pages under /services/[slug]. Each one targets a
  // single buying intent instead of letting /services compete with itself.
  landings: {
    indexTitle: "Pick what you need",
    indexSub:
      "Each of these is a separate conversation with a separate scope. Start from the one closest to your situation.",
    includesTitle: "What's included",
    processTitle: "How we'd work",
    casesTitle: "Related work",
    faqTitle: "Questions clients ask",
    pages: {
      "website-development": {
        navTitle: "Website development",
        title: "Website development",
        metaTitle: "Website development — custom sites built to rank",
        metaDescription:
          "Custom website development by a full-stack engineer: fast, multilingual, SEO-ready sites on .NET and Next.js. Fixed scope agreed in writing, paid after launch.",
        heroSub:
          "A site on your own domain that loads fast, reads well on a phone and is built so Google can actually index it. Not a template with your logo dropped in.",
        intro:
          "Most business sites lose customers in the same three places: they take too long to load, they break on mobile, and search engines never see half the content. I build the site as an engineer would — server-rendered, accessible, multilingual where you need it — so the thing you paid for keeps working a year later.",
        includes: [
          {
            title: "Design that fits your business",
            body: "A layout built around what you actually sell and who is buying, not a theme you have to bend your content into.",
          },
          {
            title: "Built to be indexed",
            body: "Server-side rendering, clean URL structure, structured data, sitemap and hreflang — the technical groundwork Google needs before ranking is even on the table.",
          },
          {
            title: "Fast on a real phone",
            body: "Optimised images, minimal JavaScript, Core Web Vitals in the green — tested on mid-range hardware, not just a fast laptop.",
          },
          {
            title: "Multilingual if you need it",
            body: "Two or three languages with correct hreflang and per-language URLs, so each version can rank in its own market.",
          },
          {
            title: "Content you can edit",
            body: "Text and images live in a place you can change yourself. Day-to-day updates shouldn't require a developer.",
          },
          {
            title: "Analytics from day one",
            body: "You can see where visitors come from and what they do, so decisions about the site are based on numbers rather than opinion.",
          },
        ],
        faq: [
          {
            q: "How long does a website take?",
            a: "A focused business site is usually a couple of weeks from agreed scope to live. Bigger sites with many pages or languages take longer — and you see working pages every week rather than waiting until the end.",
          },
          {
            q: "Will my site rank on Google?",
            a: "I build the technical foundation that makes ranking possible — rendering, structure, speed, structured data, sitemaps. Ranking itself also depends on your content and how established your domain is, and I'll be straight with you about that instead of promising positions.",
          },
          {
            q: "Can I update the text myself?",
            a: "Yes. Content is separated from code, so changing text or swapping an image doesn't need a deployment or a developer.",
          },
          {
            q: "Do I own the site?",
            a: "Completely. Your domain, your hosting account, your code. Nothing is locked to me — you can hand it to another developer whenever you want.",
          },
          {
            q: "What about after launch?",
            a: "I stay available for updates, SEO and changes for as long as you need. There's no obligation, and no support contract you're forced into.",
          },
        ],
      },
      "web-app-development": {
        navTitle: "Web app development",
        title: "Web application development",
        metaTitle: "Web application development — portals, dashboards, internal tools",
        metaDescription:
          "Custom web application development with a .NET backend and React / Next.js frontend: dashboards, client portals and internal tools with real auth and real data.",
        heroSub:
          "Dashboards, client portals and internal tools that replace the spreadsheet everyone is quietly afraid to touch.",
        intro:
          "A web app is where the interesting failures live: permissions, data that has to stay correct under concurrent edits, integrations that go down at the worst moment. I build these with a .NET backend and a React or Next.js frontend, with the boring parts — auth, validation, logging, tests — treated as part of the job rather than a later phase.",
        includes: [
          {
            title: "Real authentication and roles",
            body: "Proper login, sessions and permissions, so an ordinary user can't reach admin data by editing a URL.",
          },
          {
            title: "A backend that holds up",
            body: "C# / .NET with Clean Architecture and CQRS, PostgreSQL underneath. Business rules live in one place instead of being scattered across the UI.",
          },
          {
            title: "An interface people can use",
            body: "React / Next.js, responsive, keyboard-accessible, with states for loading, empty and error — the three screens most projects forget.",
          },
          {
            title: "Integrations with what you already run",
            body: "Payments, CRM, email, third-party APIs — connected with retries and error handling, not a fetch call and optimism.",
          },
          {
            title: "Observability",
            body: "Structured logs and metrics, so when something breaks at 2am the answer is in a dashboard rather than a guess.",
          },
          {
            title: "Tests where they matter",
            body: "Integration tests over real logic and real data paths, so a change next quarter doesn't quietly break billing.",
          },
        ],
        faq: [
          {
            q: "How is this different from a website?",
            a: "A website presents information; a web app does work — users log in, data changes, rules apply. That difference shows up in auth, data integrity and testing, which is most of the effort.",
          },
          {
            q: "Can you work with our existing system?",
            a: "Usually yes. I can build a new app against your current database or API, or add a service alongside what you run. First step is reading what's there before proposing anything.",
          },
          {
            q: "Who owns the code and can our team take it over?",
            a: "You own it. It's documented, conventionally structured .NET and TypeScript — a developer joining later reads it without a tour from me. Hand-off is part of the work, not a favour.",
          },
          {
            q: "What if requirements change halfway?",
            a: "They usually do. Because I ship in weekly slices, changing direction early is cheap. We re-agree scope in writing when a change is big enough to matter.",
          },
          {
            q: "Do you handle hosting and deployment?",
            a: "Yes — Docker-based deployment, environment configuration and a deploy pipeline, set up in your accounts so you keep control of it.",
          },
        ],
      },
      "saas-development": {
        navTitle: "SaaS development",
        title: "SaaS development & MVP",
        metaTitle: "SaaS development — from idea to a product customers pay for",
        metaDescription:
          "SaaS MVP development: multi-tenant architecture, subscriptions and billing, built with .NET and Next.js by the engineer who runs his own SaaS product.",
        heroSub:
          "From idea to a live product real customers can subscribe to — with the multi-tenant groundwork that decides whether year two is possible.",
        intro:
          "I run my own SaaS (Futura AI), so this isn't theory. The decisions that hurt later are made in the first weeks: how tenants are isolated, how billing maps to access, whether one customer's data can ever appear in another's account. I build the MVP small but structured, so growth is a matter of adding features rather than rewriting the foundation.",
        includes: [
          {
            title: "Multi-tenancy from day one",
            body: "Tenant isolation designed in at the data layer, not bolted on after the first enterprise customer asks about it.",
          },
          {
            title: "Subscriptions and billing",
            body: "Plans, trials, upgrades and failed payments wired to what a user can actually access — including the unhappy paths.",
          },
          {
            title: "Onboarding that converts",
            body: "Sign-up to first real value in as few steps as possible. The MVP's job is to prove people will pay, and onboarding is where that's won or lost.",
          },
          {
            title: "An admin view for you",
            body: "See tenants, usage and subscription state without opening a database client.",
          },
          {
            title: "Infrastructure that scales later",
            body: "Docker, PostgreSQL, background jobs and caching set up so the second thousand users doesn't require a rebuild.",
          },
          {
            title: "A scope that ships",
            body: "We cut the feature list to what proves the business, launch it, and add the rest once real users have told you what matters.",
          },
        ],
        faq: [
          {
            q: "How small should an MVP be?",
            a: "Small enough to launch in weeks, complete enough that someone would pay for it. Most failed MVPs are too big, not too small — we cut aggressively and add back based on real feedback.",
          },
          {
            q: "Why does multi-tenancy matter this early?",
            a: "Because retrofitting it is a rewrite. Isolating tenants properly at the start costs a little upfront and saves the project later, especially the first time a customer asks a security question.",
          },
          {
            q: "Can you integrate payments?",
            a: "Yes — subscription billing including trials, upgrades, cancellations and failed-payment handling, connected to your feature access.",
          },
          {
            q: "Have you actually built one?",
            a: "Yes — Futura AI, a multi-tenant AI chat widget for beauty salons, live at beautyfutura.com. Same architecture I'd build for you.",
          },
          {
            q: "What happens after launch?",
            a: "I stay available to build the next round of features, fix what real usage exposes and keep infrastructure healthy — for as long as it's useful to you.",
          },
        ],
      },
      "dotnet-development": {
        navTitle: ".NET development",
        title: ".NET development",
        metaTitle: ".NET development — C#, ASP.NET and EF Core backends",
        metaDescription:
          "Backend development on .NET: ASP.NET APIs, EF Core and PostgreSQL, Clean Architecture and CQRS. Built by a full-stack engineer who also ships the frontend.",
        heroSub:
          "APIs and backends in C# — built the way a system that has to survive its third year of changes is built.",
        intro:
          ".NET is what I reach for when correctness matters more than novelty: a typed language, a mature runtime and tooling that catches problems at compile time rather than in production. I build APIs and services with Clean Architecture and CQRS, EF Core over PostgreSQL, and the discipline that makes a codebase safe for someone else to change.",
        includes: [
          {
            title: "REST APIs that are documented",
            body: "ASP.NET endpoints with OpenAPI, typed responses and consistent error format — a frontend developer can work from the docs without asking you questions.",
          },
          {
            title: "Clean Architecture and CQRS",
            body: "Domain logic separated from infrastructure, commands separated from queries. Structure that stays readable as the feature list grows.",
          },
          {
            title: "EF Core and PostgreSQL",
            body: "Modelled schema, versioned migrations and queries that don't fall apart once the tables have real row counts.",
          },
          {
            title: "Predictable error handling",
            body: "Expected failures returned as results rather than thrown as exceptions, with RFC-compliant problem details on the wire.",
          },
          {
            title: "Integration tests over real infrastructure",
            body: "Tests that run against a real PostgreSQL in a container, so they prove the system works instead of proving the mocks agree.",
          },
          {
            title: "Frontend included if you want it",
            body: "I also build the React / Next.js side, so there's no gap between backend and UI where responsibility gets lost.",
          },
        ],
        faq: [
          {
            q: "Why .NET rather than Node.js?",
            a: "For business systems with real data rules, static typing and a mature runtime prevent a category of bugs outright. Node is fine for plenty of things — I've written about the trade-off in the journal rather than pretending one always wins.",
          },
          {
            q: "Can you take over an existing .NET codebase?",
            a: "Yes. I assess what's there, add tests and observability around the risky parts, then change things safely. Rescue work is a normal part of what I do.",
          },
          {
            q: "Which .NET version do you use?",
            a: "Current LTS, on stable releases rather than previews. If you're on something older, upgrading can be part of the scope.",
          },
          {
            q: "Do you write tests?",
            a: "Yes, integration tests first, against real infrastructure in containers. In-memory database fakes prove very little, so I don't use them.",
          },
          {
            q: "Can you work with our existing team?",
            a: "Yes — with your conventions, your review process and your repository. I write code that reads like the code already there.",
          },
        ],
      },
      "website-fixes": {
        navTitle: "Fixes & rescue",
        title: "Website fixes & rescue",
        metaTitle: "Website fixes and rescue — repair, speed up, take over a project",
        metaDescription:
          "Fix a slow or broken site, finish a project another developer abandoned, or take over a codebase nobody can safely change. Assessment first, honest answer either way.",
        heroSub:
          "The site is slow, something broke, or the developer stopped replying. I'll tell you what's actually wrong before anyone talks about rebuilding.",
        intro:
          "Most rescue work starts the same way: something used to work, someone left, and now nobody wants to touch it. The first step is an assessment — what's there, what's dangerous, what can be saved. Sometimes the answer is a few days of fixes rather than a rebuild, and you should hear that even though a rebuild would pay me more.",
        includes: [
          {
            title: "An honest assessment first",
            body: "I read the code and the infrastructure and tell you what's wrong, what it takes to fix, and whether rebuilding is genuinely the better option.",
          },
          {
            title: "Speed and Core Web Vitals",
            body: "Find what's actually slow — images, blocking scripts, server response — and fix the causes rather than chasing a score.",
          },
          {
            title: "Broken and abandoned projects",
            body: "Finish what someone else left half-built, or stabilise a codebase whose author is unreachable.",
          },
          {
            title: "SEO and indexing problems",
            body: "Pages missing from Google, broken redirects and canonicals, a sitemap nobody maintained — the technical reasons traffic disappeared.",
          },
          {
            title: "Security and dependency updates",
            body: "Outdated packages with known vulnerabilities, exposed configuration, missing security headers — brought up to date deliberately.",
          },
          {
            title: "A safe path forward",
            body: "Tests and logging around the fragile parts, so the next change doesn't reintroduce the same failure.",
          },
        ],
        faq: [
          {
            q: "Can you fix a site you didn't build?",
            a: "Yes — that's most of this work. I read what's there first; the assessment is how we both find out whether fixing or rebuilding makes more sense.",
          },
          {
            q: "What if the previous developer disappeared?",
            a: "Common, and workable as long as you control the domain, hosting and repository. If access is missing, recovering it is the first thing we sort out.",
          },
          {
            q: "How fast can something urgent be fixed?",
            a: "A site that's down or badly broken gets looked at first. Small fixes often land the same day; how fast depends on what the assessment finds.",
          },
          {
            q: "Will you tell me if it's not worth fixing?",
            a: "Yes. If patching costs more than replacing, I'll say so and explain why — including when that means less work for me.",
          },
          {
            q: "Do you take over ongoing maintenance?",
            a: "Yes, if you want it — updates, monitoring and changes on an ongoing basis. No lock-in, and no contract you have to escape from.",
          },
        ],
      },
    },
  },

  journal: {
    title: "Journal",
    intro:
      "Notes on shipping software — .NET, TypeScript, multi-tenant SaaS, and the boring parts that make systems last.",
    empty: "No entries yet — first post coming soon.",
    minRead: "min read",
    backToIndex: "Back to journal",
    ctaTitle: "Building something similar?",
    ctaBody:
      "Tell me what you're working on. I take on a small number of projects at a time.",
  },

  notFound: {
    title: "This page doesn't exist",
    body: "The link may be old or mistyped.",
    home: "Back home",
  },
};

export type Dictionary = typeof en;

const uk: Dictionary = {
  role: "Full-stack інженер — .NET і TypeScript",
  seoTitle: "Створення сайтів на .NET і React — Oleg Katrichuk",
  positioning:
    "Допомагаю стартапам і продуктовим командам випускати надійні вебзастосунки — від .NET API до фронтенду на React і Next.js — без місяців агентських накладних витрат.",
  description:
    "Створення та розробка сайтів і вебзастосунків — full-stack інженер на .NET, TypeScript і React. Сайти під ключ і SaaS для клієнтів зі США, ЄС, України та СНД.",
  locationLine: "Віддалено — працюю з клієнтами зі США, ЄС, України та СНД",

  nav: {
    work: "Роботи",
    services: "Послуги",
    why: "Навіщо сайт",
    journal: "Журнал",
    about: "Про мене",
    contact: "Контакти",
  },

  common: {
    bookCall: "Поспілкуймося",
    seeWork: "Переглянути роботи",
    allProjects: "Усі проєкти",
    readCase: "Читати кейс",
    backToWork: "Назад до робіт",
    startConversation: "Почати розмову",
    sendMessage: "Написати повідомлення",
    visitSite: "Перейти на сайт",
    available: "Беру проєкти",
    lastUpdated: "Оновлено",
  },

  home: {
    heroSub:
      "Працюю невеликими прямими проєктами — чіткий обсяг, чітка комунікація, код, готовий до продакшну.",
    currentlyBuilding: "Зараз працюю над",
    workTitle: "Вибрані роботи",
    howTitle: "Як я працюю",
    principles: [
      {
        title: "Спочатку обсяг",
        body: "Обсяг і ціна узгоджуються письмово до першого рядка коду — а оплата після того, як сайт у проді і ви ним задоволені, а не до.",
      },
      {
        title: "Постачання частинами",
        body: "Робоче ПЗ щотижня, а не велике відкриття наприкінці. Ви завжди бачите прогрес.",
      },
      {
        title: "Якість продакшну",
        body: "Тести, спостережуваність і чиста передача — код, який зможе підтримувати ваша команда без мене.",
      },
      {
        title: "Партнер довгостроково",
        body: "Після запуску залишаюсь доступним для оновлень, SEO та просування — стільки, скільки потрібна допомога. Стосунки не закінчуються здачею проєкту.",
      },
    ],
    ctaTitle: "Маєте проєкт на думці?",
    ctaBody:
      "Розкажіть, що ви будуєте і де застрягли. Зазвичай відповідаю протягом кількох годин.",
  },

  work: {
    title: "Роботи",
    intro:
      "Кілька проєктів детально — проблема, що я зробив, чому, і що змінилося в результаті.",
  },

  caseStudy: {
    ctaTitle: "Потрібне щось подібне?",
    ctaBody:
      "Беру невелику кількість проєктів одночасно. Якщо це схоже на вашу задачу — напишіть.",
    relatedTitle: "Інші проєкти",
  },

  about: {
    title: "Про мене",
    description:
      "Про Олега Катричука — full-stack інженера на .NET, TypeScript, React і Next.js. Розробка під ключ для стартапів і невеликих продуктових команд.",
    paragraphs: [
      "Я full-stack інженер із фокусом на .NET і TypeScript. Створюю й випускаю вебзастосунки для стартапів і невеликих продуктових команд — там, де один інженер, що рухається по всьому стеку, ефективніший за велику повільну команду.",
      "Більшість проєктів починаються однаково: є ідея продукту або застосунок, що застряг, і команді потрібен той, хто візьме на себе все — API, базу даних, фронтенд, деплой — без зайвого контролю.",
      "Мені важливо ПЗ, яке працює й після передачі: протестоване, спостережуване й задокументоване достатньо, щоб ваша команда могла його розвивати. Краще випущу щось надійне й нудне, ніж хитре й крихке.",
      "Працюю з клієнтами зі США, ЄС, України та СНД — англійською, українською чи російською.",
      "Коли сайт запускається, робота не закінчується. Залишаюсь доступним для оновлень, SEO, контенту та просування — більшість клієнтів продовжують працювати зі мною довго після первинної розробки. Передача — це початок співпраці, а не кінець.",
    ],
    stackTitle: "Основний стек",
    stackBody:
      "C# / .NET, TypeScript, React і Next.js, PostgreSQL / SQL Server, Docker. Впевнено веду CI/CD і хмарний деплой.",
  },

  contact: {
    title: "Поговорімо",
    description:
      "Зв'язатися з Олегом Катричуком — full-stack інженером. Розкажіть про проєкт — зазвичай відповідаю протягом кількох годин. Telegram, email або форма.",
    intro:
      "Що конкретніше про проблему й терміни — то швидше я скажу, чи я та людина для цього.",
    name: "Ім'я",
    email: "Email",
    message: "Що ви будуєте?",
    send: "Надіслати",
    sending: "Надсилання…",
    sent: "Дякую — повідомлення отримано. Зазвичай відповідаю протягом кількох годин.",
    error: "Щось пішло не так.",
    validation:
      "Будь ласка, вкажіть ім'я, дійсний email і коротке повідомлення.",
    preferCallTitle: "Краще в Telegram?",
    bookMin: "Написати в Telegram",
    emailTitle: "Email",
    elsewhereTitle: "Деінде",
  },

  why: {
    title: "Навіщо вашому бізнесу сайт",
    metaTitle: "Створення сайту для бізнесу — навіщо він потрібен",
    metaDescription:
      "Навіщо бізнесу власний сайт і що дає розробка сайту під ключ — на відміну від Instagram і маркетплейсів, які завтра можуть вас заблокувати.",
    heroSub:
      "Instagram, TikTok, маркетплейси — будь-яка платформа може заблокувати вас, змінити алгоритм або підняти комісію завтра. Сайт на власному домені — єдиний актив, який справді ваш — і єдиний, який ранжується, конвертує і працює, поки ви спите.",
    reasonsTitle: "Чотири причини",
    reasons: [
      {
        title: "Він належить вам",
        body: "Instagram, TikTok, Facebook, Telegram, листинги на маркетплейсах — кожен із них може заблокувати ваш акаунт завтра, обрізати охоплення або змінити правила. Підписники, яких ви збирали роками, можуть зникнути за ніч. Сайт на власному домені переживає платформи — це єдиний актив, який справді ваш.",
      },
      {
        title: "Пошук приводить покупців, які вже шукають",
        body: "Більшість людей перевіряє інформацію перед тим, як подзвонити — за стрижкою, підрядником, B2B-покупкою. Якщо вас немає в їхньому пошуку — вас немає для них. Профіль не ранжується. Сайт — так.",
      },
      {
        title: "Він працює, поки ви спите",
        body: "Сайт відповідає на «чи працюєте в неділю?», «скільки коштує X?», «чи робите Y?» — о 2 ночі, під час прийому, у вихідний. Листування в Instagram, Telegram чи Facebook працює тільки коли працюєте ви.",
      },
      {
        title: "Тут живе довіра",
        body: "Для покупок, які мають значення — запис до колориста, купівля контейнера, вибір послуги — люди заходять на сайт. Справжній домен виглядає як справжній бізнес. Лише профіль — це більше схоже на хобі.",
      },
    ],
    objectionsTitle: "Поширені заперечення",
    objections: [
      {
        q: "У мене є Instagram і Facebook — хіба цього не досить?",
        a: "Для впізнаваності — так. Для рішення про покупку — ні. Соцмережі — це верх воронки; сайт закриває угоду. Люди шукають, перш ніж купити.",
      },
      {
        q: "Сайт — це дорого?",
        a: "Хостинг на Vercel: $0. Домен: ~$12/рік. Реальний витрат — це лише розробка. Малий бізнес зазвичай повертає її за перший місяць вхідних запитів.",
      },
      {
        q: "Я не технічний — я ж не зможу його підтримувати",
        a: "І не треба. Ви наймаєте одного інженера на весь цикл, отримуєте робочий сайт і чисту передачу — а я залишаюсь доступним для оновлень, SEO та просування, якщо потрібна допомога. Щоденні зміни контенту — це контент, а не код.",
      },
      {
        q: "Як працює оплата і вартість?",
        a: "Обсяг і ціна узгоджуються письмово до початку роботи — жодних рахунків, що ростуть. Оплата після того, як сайт у проді й ви ним задоволені, а не до. Без передоплати.",
      },
    ],
    examplesTitle: "Реальні приклади",
    examplesIntro:
      "Три сайти, які я зробив для клієнтів у такій самій ситуації — подивіться, як це спрацювало:",
    ctaTitle: "Не впевнені, чи дасть сайт результат саме вам?",
    ctaBody:
      "Розкажіть, що ви будуєте. Скажу прямо, чи сайт — правильний крок.",
  },

  services: {
    title: "Послуги веброзробки",
    metaTitle: "Послуги веброзробки — сайти, вебзастосунки та SaaS",
    metaDescription:
      "Full-stack веброзробка: сайти під ключ, вебзастосунки та SaaS MVP на .NET, TypeScript, React і Next.js. Фіксований обсяг, оплата після запуску.",
    heroSub:
      "Один full-stack інженер на весь цикл — від маркетингового сайту до multi-tenant SaaS. Обсяг і ціна узгоджуються наперед, письмово. Оплата після запуску, а не до.",
    listTitle: "Що я роблю",
    items: [
      {
        title: "Сайти для бізнесу й маркетингу",
        body: "Швидкі, готові до SEO сайти на власному домені — багатомовні, доступні й створені, щоб ранжуватися. Актив, який належить вам, а не орендований профіль.",
      },
      {
        title: "Вебзастосунки",
        body: "Дашборди, портали та внутрішні інструменти з бекендом на .NET і фронтендом на React / Next.js. Справжня авторизація, справжні дані, продакшн-рівень з першого дня.",
      },
      {
        title: "SaaS MVP",
        body: "Від ідеї до живого продукту, за який платять реальні клієнти — multi-tenant архітектура, білінг і нудна інфраструктура, що дозволяє масштабуватися згодом.",
      },
      {
        title: "API та інтеграції",
        body: "Чисті, задокументовані REST API, інтеграції зі сторонніми сервісами та конвеєри даних. Те, що з'єднує ваш продукт з усім іншим.",
      },
      {
        title: "Порятунок і рефакторинг",
        body: "Успадкували код, який ніхто не наважується змінювати? Я стабілізую його — тести, спостережуваність і шлях назад до випуску фіч без страху.",
      },
      {
        title: "Довготривале партнерство",
        body: "Після запуску я залишаюсь доступним для оновлень, SEO та просування — стільки, скільки потрібна допомога. Співпраця не закінчується передачею.",
      },
    ],
    stackTitle: "Стек",
    stackBody:
      "C# / .NET, ASP.NET, EF Core, Clean Architecture і CQRS на бекенді; TypeScript, React і Next.js на фронтенді; PostgreSQL і Docker під капотом. Перевірені рішення, а не те, що в тренді цього місяця.",
    processTitle: "Як ми працюватимемо",
    process: [
      {
        title: "Обсяг — письмово",
        body: "Узгоджуємо, що саме буде зроблено і скільки це коштує, до будь-якого коду — жодних рахунків, що ростуть, жодних сюрпризів.",
      },
      {
        title: "Випуск частинами",
        body: "Робоче ПЗ щотижня, а не велике відкриття наприкінці. Ви бачите прогрес і можете змінити курс рано.",
      },
      {
        title: "Оплата після запуску",
        body: "Ви платите, коли проєкт у проді й ви ним задоволені. Без передоплати.",
      },
    ],
    faqTitle: "Що питають клієнти",
    faq: [
      {
        q: "Скільки коштує сайт або вебзастосунок?",
        a: "Залежить від обсягу, який ми фіксуємо письмово до старту. Маркетинговий сайт — це одна сума, multi-tenant SaaS — інша. Ви отримуєте одну узгоджену ціну наперед — без погодинного росту — і платите її після запуску.",
      },
      {
        q: "Скільки це займає часу?",
        a: "Сфокусований маркетинговий сайт — зазвичай пару тижнів; вебзастосунок чи SaaS MVP — від кількох тижнів до кількох місяців залежно від обсягу. Оскільки я випускаю щотижневими частинами, ви бачите робоче ПЗ весь час, а не лише наприкінці.",
      },
      {
        q: "Чи працюєте з клієнтами з моєї країни?",
        a: "Так — віддалено, з клієнтами зі США, ЄС, України та СНД. Працюю англійською, українською та російською.",
      },
      {
        q: "А якщо в мене вже є наполовину готовий проєкт?",
        a: "Беру роботу з порятунку й рефакторингу. Оціню те, що є, стабілізую тестами та спостережуваністю й поверну вас до безпечного випуску фіч.",
      },
      {
        q: "Чи зможу я підтримувати його потім?",
        a: "Так. Ви отримуєте чистий, задокументований код і належну передачу — а я залишаюсь доступним для оновлень і SEO, якщо не хочете цим займатися. Щоденні зміни контенту — це контент, а не код.",
      },
    ],
    ctaTitle: "Маєте проєкт на думці?",
    ctaBody:
      "Розкажіть, що ви будуєте і де застрягли. Зазвичай відповідаю протягом кількох годин.",
  },

  landings: {
    indexTitle: "Оберіть, що вам потрібно",
    indexSub:
      "Кожен напрямок — окрема розмова з окремим обсягом. Почніть з того, що найближче до вашої ситуації.",
    includesTitle: "Що входить",
    processTitle: "Як ми працюватимемо",
    casesTitle: "Дотичні роботи",
    faqTitle: "Що питають клієнти",
    pages: {
      "website-development": {
        navTitle: "Створення сайтів",
        title: "Створення сайтів під ключ",
        metaTitle: "Створення сайтів під ключ — розробка сайту, готового ранжуватися",
        metaDescription:
          "Створення сайтів під ключ від full-stack інженера: швидкі, багатомовні, готові до SEO сайти на .NET і Next.js. Фіксований обсяг письмово, оплата після запуску.",
        heroSub:
          "Сайт на власному домені, який швидко вантажиться, нормально читається з телефона й побудований так, щоб Google міг його проіндексувати. Не шаблон із вашим логотипом.",
        intro:
          "Більшість бізнес-сайтів втрачають клієнтів в одних і тих самих трьох місцях: довго вантажаться, ламаються на мобільному, і пошуковики не бачать половини вмісту. Я будую сайт так, як його будував би інженер — із серверним рендерингом, доступністю, багатомовністю там, де вона потрібна — щоб те, за що ви заплатили, працювало й через рік.",
        includes: [
          {
            title: "Дизайн під ваш бізнес",
            body: "Структура навколо того, що ви реально продаєте і хто це купує, а не тема, під яку доводиться підганяти контент.",
          },
          {
            title: "Побудовано, щоб індексуватися",
            body: "Серверний рендеринг, чиста структура URL, мікророзмітка, sitemap і hreflang — технічний фундамент, без якого про ранжування говорити зарано.",
          },
          {
            title: "Швидко на реальному телефоні",
            body: "Оптимізовані зображення, мінімум JavaScript, Core Web Vitals у зеленій зоні — перевірено на середньому залізі, а не лише на швидкому ноутбуці.",
          },
          {
            title: "Багатомовність, якщо потрібна",
            body: "Дві-три мови з коректним hreflang і окремими URL, щоб кожна версія ранжувалася на своєму ринку.",
          },
          {
            title: "Контент, який ви редагуєте самі",
            body: "Тексти й зображення лежать там, де ви можете їх змінити. Щоденні правки не мають потребувати розробника.",
          },
          {
            title: "Аналітика з першого дня",
            body: "Ви бачите, звідки приходять відвідувачі й що вони роблять, тож рішення щодо сайту спираються на цифри, а не на здогади.",
          },
        ],
        faq: [
          {
            q: "Скільки часу займає створення сайту?",
            a: "Сфокусований бізнес-сайт — зазвичай пару тижнів від узгодженого обсягу до запуску. Більші сайти з багатьма сторінками чи мовами довше — і ви бачите готові сторінки щотижня, а не чекаєте до кінця.",
          },
          {
            q: "Чи буде сайт ранжуватися в Google?",
            a: "Я роблю технічний фундамент, який робить ранжування можливим — рендеринг, структуру, швидкість, мікророзмітку, sitemap. Саме ранжування залежить ще й від вашого контенту та віку домену, і я скажу про це прямо, а не обіцятиму позиції.",
          },
          {
            q: "Чи зможу я сам змінювати тексти?",
            a: "Так. Контент відокремлений від коду, тож змінити текст чи зображення можна без деплою й без розробника.",
          },
          {
            q: "Чи належить сайт мені?",
            a: "Повністю. Ваш домен, ваш хостинг, ваш код. Нічого не прив'язано до мене — ви можете передати його іншому розробнику будь-коли.",
          },
          {
            q: "А що після запуску?",
            a: "Залишаюсь доступним для оновлень, SEO і змін стільки, скільки потрібно. Без зобов'язань і без договору підтримки, у який вас заганяють.",
          },
        ],
      },
      "web-app-development": {
        navTitle: "Вебзастосунки",
        title: "Розробка вебзастосунків",
        metaTitle: "Розробка вебзастосунків — портали, дашборди, внутрішні системи",
        metaDescription:
          "Розробка вебзастосунків із бекендом на .NET і фронтендом на React / Next.js: дашборди, клієнтські портали та внутрішні інструменти зі справжньою авторизацією.",
        heroSub:
          "Дашборди, клієнтські портали та внутрішні інструменти, які замінюють таблицю, що її всі бояться зачепити.",
        intro:
          "Вебзастосунок — це там, де живуть цікаві поломки: права доступу, дані, що мають лишатися коректними при одночасному редагуванні, інтеграції, які падають у найгірший момент. Я будую такі системи з бекендом на .NET і фронтендом на React або Next.js, де нудні частини — авторизація, валідація, логування, тести — є частиною роботи, а не окремою фазою «колись потім».",
        includes: [
          {
            title: "Справжня авторизація й ролі",
            body: "Нормальний вхід, сесії та права доступу, щоб звичайний користувач не дістався адмінських даних, підправивши URL.",
          },
          {
            title: "Бекенд, який витримує",
            body: "C# / .NET із Clean Architecture і CQRS, PostgreSQL під капотом. Бізнес-правила в одному місці, а не розмазані по інтерфейсу.",
          },
          {
            title: "Інтерфейс, яким можна користуватися",
            body: "React / Next.js, адаптивний, доступний з клавіатури, зі станами завантаження, порожнечі та помилки — трьома екранами, про які найчастіше забувають.",
          },
          {
            title: "Інтеграції з тим, що вже працює",
            body: "Платежі, CRM, пошта, сторонні API — під'єднані з повторними спробами й обробкою помилок, а не одним запитом і надією.",
          },
          {
            title: "Спостережуваність",
            body: "Структуровані логи й метрики, щоб о другій ночі відповідь була в дашборді, а не в припущеннях.",
          },
          {
            title: "Тести там, де вони важать",
            body: "Інтеграційні тести на реальній логіці й реальних даних, щоб зміна наступного кварталу тихо не зламала білінг.",
          },
        ],
        faq: [
          {
            q: "Чим це відрізняється від сайту?",
            a: "Сайт показує інформацію; застосунок виконує роботу — користувачі входять, дані змінюються, діють правила. Ця різниця проявляється в авторизації, цілісності даних і тестуванні, і саме там більшість зусиль.",
          },
          {
            q: "Чи можете працювати з нашою наявною системою?",
            a: "Зазвичай так. Можу побудувати новий застосунок над вашою базою чи API або додати сервіс поруч із наявним. Перший крок — прочитати те, що є, до будь-яких пропозицій.",
          },
          {
            q: "Кому належить код і чи зможе наша команда його підхопити?",
            a: "Код ваш. Це задокументовані .NET і TypeScript зі звичною структурою — розробник, який приєднається пізніше, розбереться без екскурсії від мене. Передача — частина роботи, а не послуга.",
          },
          {
            q: "А якщо вимоги зміняться на півдорозі?",
            a: "Зазвичай так і буває. Оскільки я випускаю щотижневими частинами, змінити курс рано — дешево. Обсяг переузгоджуємо письмово, коли зміна достатньо велика.",
          },
          {
            q: "Чи займаєтесь хостингом і деплоєм?",
            a: "Так — деплой на Docker, конфігурація середовищ і пайплайн, налаштовані у ваших акаунтах, щоб контроль лишався у вас.",
          },
        ],
      },
      "saas-development": {
        navTitle: "Розробка SaaS",
        title: "Розробка SaaS і MVP",
        metaTitle: "Розробка SaaS — від ідеї до продукту, за який платять",
        metaDescription:
          "Розробка SaaS MVP: multi-tenant архітектура, підписки й білінг на .NET і Next.js — від інженера, який веде власний SaaS-продукт.",
        heroSub:
          "Від ідеї до живого продукту з реальними підписками — з multi-tenant фундаментом, від якого залежить, чи буде другий рік.",
        intro:
          "Я веду власний SaaS (Futura AI), тож це не теорія. Рішення, які болять згодом, ухвалюються в перші тижні: як ізольовані тенанти, як білінг пов'язаний із доступом, чи можуть дані одного клієнта колись з'явитися в акаунті іншого. Я роблю MVP невеликим, але структурованим, щоб зростання було додаванням функцій, а не переписуванням фундаменту.",
        includes: [
          {
            title: "Multi-tenancy з першого дня",
            body: "Ізоляція тенантів закладена на рівні даних, а не прикручена після того, як перший великий клієнт про неї запитав.",
          },
          {
            title: "Підписки й білінг",
            body: "Тарифи, тріали, апгрейди та невдалі платежі, пов'язані з тим, до чого користувач реально має доступ — включно з неприємними сценаріями.",
          },
          {
            title: "Онбординг, який конвертує",
            body: "Від реєстрації до першої реальної цінності за мінімум кроків. Завдання MVP — довести, що платитимуть, і саме онбординг це вирішує.",
          },
          {
            title: "Адмінка для вас",
            body: "Бачити тенантів, використання й стан підписок, не відкриваючи клієнт бази даних.",
          },
          {
            title: "Інфраструктура на виріст",
            body: "Docker, PostgreSQL, фонові задачі й кешування, налаштовані так, щоб друга тисяча користувачів не вимагала перебудови.",
          },
          {
            title: "Обсяг, який доходить до запуску",
            body: "Ріжемо список функцій до того, що доводить бізнес, запускаємо, а решту додаємо, коли реальні користувачі скажуть, що важливо.",
          },
        ],
        faq: [
          {
            q: "Наскільки малим має бути MVP?",
            a: "Достатньо малим, щоб запуститися за тижні, і достатньо повним, щоб за нього заплатили. Більшість провальних MVP завеликі, а не замалі — ріжемо агресивно й додаємо назад за реальним зворотним зв'язком.",
          },
          {
            q: "Чому multi-tenancy важлива так рано?",
            a: "Бо прикрутити її потім — це переписування. Коректна ізоляція тенантів на старті коштує трохи наперед і рятує проєкт згодом, особливо коли клієнт уперше поставить питання про безпеку.",
          },
          {
            q: "Чи можете під'єднати платежі?",
            a: "Так — підписковий білінг із тріалами, апгрейдами, скасуваннями та обробкою невдалих платежів, пов'язаний із доступом до функцій.",
          },
          {
            q: "Ви справді таке будували?",
            a: "Так — Futura AI, multi-tenant AI-чат для б'юті-салонів, живий на beautyfutura.com. Та сама архітектура, яку я побудував би вам.",
          },
          {
            q: "Що відбувається після запуску?",
            a: "Залишаюсь доступним, щоб будувати наступні функції, лагодити те, що виявить реальне використання, і тримати інфраструктуру здоровою — стільки, скільки це вам корисно.",
          },
        ],
      },
      "dotnet-development": {
        navTitle: ".NET розробка",
        title: "Розробка на .NET",
        metaTitle: "Розробка на .NET — бекенди на C#, ASP.NET і EF Core",
        metaDescription:
          "Бекенд-розробка на .NET: ASP.NET API, EF Core і PostgreSQL, Clean Architecture і CQRS — від full-stack інженера, який робить і фронтенд.",
        heroSub:
          "API та бекенди на C# — побудовані так, як будують систему, що має пережити третій рік змін.",
        intro:
          ".NET — це те, що я беру, коли коректність важливіша за новизну: типізована мова, зріла платформа й інструменти, які ловлять проблеми на компіляції, а не в проді. Я будую API та сервіси з Clean Architecture і CQRS, EF Core над PostgreSQL і дисципліною, яка робить код безпечним для змін чужими руками.",
        includes: [
          {
            title: "REST API, які задокументовані",
            body: "Ендпоїнти ASP.NET з OpenAPI, типізованими відповідями й послідовним форматом помилок — фронтендер працює за документацією, не питаючи вас.",
          },
          {
            title: "Clean Architecture і CQRS",
            body: "Доменна логіка відокремлена від інфраструктури, команди — від запитів. Структура, що лишається читабельною, коли список функцій росте.",
          },
          {
            title: "EF Core і PostgreSQL",
            body: "Продумана схема, версіоновані міграції та запити, які не розсипаються, коли в таблицях з'являються реальні обсяги.",
          },
          {
            title: "Передбачувана обробка помилок",
            body: "Очікувані збої повертаються як результат, а не кидаються винятками, з problem details за стандартом на виході.",
          },
          {
            title: "Інтеграційні тести на реальній інфраструктурі",
            body: "Тести проти справжнього PostgreSQL у контейнері, щоб вони доводили роботу системи, а не узгодженість моків.",
          },
          {
            title: "Фронтенд теж, якщо потрібно",
            body: "Я роблю й частину на React / Next.js, тож між бекендом і UI немає щілини, де губиться відповідальність.",
          },
        ],
        faq: [
          {
            q: "Чому .NET, а не Node.js?",
            a: "Для бізнес-систем зі справжніми правилами над даними статична типізація та зріла платформа прибирають цілий клас помилок. Node добрий для багатьох задач — я написав про цей компроміс у журналі, замість вдавати, що щось завжди виграє.",
          },
          {
            q: "Чи можете підхопити наявний .NET-проєкт?",
            a: "Так. Оцінюю те, що є, обкладаю ризиковані місця тестами й логами, далі змінюю безпечно. Рятувальні роботи — звична для мене частина.",
          },
          {
            q: "Яку версію .NET використовуєте?",
            a: "Поточну LTS, на стабільних релізах, не на preview. Якщо у вас щось старіше, оновлення може бути частиною обсягу.",
          },
          {
            q: "Чи пишете тести?",
            a: "Так, спершу інтеграційні, проти реальної інфраструктури в контейнерах. In-memory підробки бази доводять надто мало, тож їх не використовую.",
          },
          {
            q: "Чи можете працювати з нашою командою?",
            a: "Так — за вашими домовленостями, вашим процесом рев'ю та у вашому репозиторії. Пишу код, що читається як той, який уже є.",
          },
        ],
      },
      "website-fixes": {
        navTitle: "Доопрацювання",
        title: "Доопрацювання та порятунок сайту",
        metaTitle: "Доопрацювання сайту — полагодити, пришвидшити, підхопити проєкт",
        metaDescription:
          "Полагодити повільний чи зламаний сайт, доробити покинутий проєкт або підхопити код, який ніхто не наважується змінювати. Спершу оцінка й чесна відповідь.",
        heroSub:
          "Сайт гальмує, щось зламалося або розробник перестав відповідати. Скажу, що насправді не так, до розмов про переписування.",
        intro:
          "Більшість рятувальних робіт починаються однаково: колись працювало, хтось пішов, і тепер ніхто не хоче торкатися. Перший крок — оцінка: що є, що небезпечне, що можна врятувати. Іноді відповідь — кілька днів правок, а не переписування, і ви маєте це почути, навіть якщо переписування принесло б мені більше.",
        includes: [
          {
            title: "Спершу чесна оцінка",
            body: "Читаю код та інфраструктуру й кажу, що не так, скільки коштує полагодити і чи переписування справді кращий варіант.",
          },
          {
            title: "Швидкість і Core Web Vitals",
            body: "Знайти, що реально гальмує — зображення, блокуючі скрипти, відповідь сервера — і полагодити причини, а не ганятися за балом.",
          },
          {
            title: "Зламані й покинуті проєкти",
            body: "Доробити те, що хтось лишив недобудованим, або стабілізувати код, автор якого недосяжний.",
          },
          {
            title: "Проблеми з SEO та індексацією",
            body: "Сторінки, яких немає в Google, зламані редіректи й канонікали, занедбаний sitemap — технічні причини, чому зник трафік.",
          },
          {
            title: "Безпека й оновлення залежностей",
            body: "Застарілі пакети з відомими вразливостями, відкрита конфігурація, відсутні заголовки безпеки — приводяться до ладу свідомо.",
          },
          {
            title: "Безпечний шлях далі",
            body: "Тести й логування навколо крихких місць, щоб наступна зміна не повернула ту саму поломку.",
          },
        ],
        faq: [
          {
            q: "Чи можете полагодити сайт, який робили не ви?",
            a: "Так — це більшість такої роботи. Спершу читаю те, що є; оцінка і є способом обом зрозуміти, що доцільніше — лагодити чи переробляти.",
          },
          {
            q: "А якщо попередній розробник зник?",
            a: "Звична ситуація, робоча, поки ви контролюєте домен, хостинг і репозиторій. Якщо доступів немає — їх відновлення буде першим, що владнаємо.",
          },
          {
            q: "Як швидко можна полагодити термінове?",
            a: "Сайт, який лежить або серйозно зламаний, дивлюся першим. Дрібні правки часто виходять того ж дня; далі залежить від того, що покаже оцінка.",
          },
          {
            q: "Чи скажете, якщо лагодити не варто?",
            a: "Так. Якщо латати дорожче, ніж зробити наново, скажу це й поясню чому — навіть коли для мене це менше роботи.",
          },
          {
            q: "Чи берете постійну підтримку?",
            a: "Так, якщо потрібно — оновлення, моніторинг і зміни на постійній основі. Без прив'язки й без договору, з якого доводиться вибиратися.",
          },
        ],
      },
    },
  },

  journal: {
    title: "Журнал",
    intro:
      "Нотатки про випуск ПЗ — .NET, TypeScript, multi-tenant SaaS і нудні частини, що тримають системи живими.",
    empty: "Поки що порожньо — перший допис скоро.",
    minRead: "хв читання",
    backToIndex: "Назад до журналу",
    ctaTitle: "Будуєте щось подібне?",
    ctaBody:
      "Розкажіть, над чим працюєте. Беру невелику кількість проєктів одночасно.",
  },

  notFound: {
    title: "Цієї сторінки не існує",
    body: "Можливо, посилання застаріле або з помилкою.",
    home: "На головну",
  },
};

const ru: Dictionary = {
  role: "Full-stack инженер — .NET и TypeScript",
  seoTitle: "Создание сайтов на .NET и React — Oleg Katrichuk",
  positioning:
    "Помогаю стартапам и продуктовым командам выпускать надёжные веб-приложения — от .NET API до фронтенда на React и Next.js — без месяцев агентских накладных расходов.",
  description:
    "Создание и разработка сайтов и веб-приложений — full-stack инженер на .NET, TypeScript и React. Сайты под ключ и SaaS для клиентов из США, ЕС, Украины и СНГ.",
  locationLine: "Удалённо — работаю с клиентами из США, ЕС, Украины и СНГ",

  nav: {
    work: "Работы",
    services: "Услуги",
    why: "Зачем сайт",
    journal: "Журнал",
    about: "Обо мне",
    contact: "Контакты",
  },

  common: {
    bookCall: "Давайте пообщаемся",
    seeWork: "Посмотреть работы",
    allProjects: "Все проекты",
    readCase: "Читать кейс",
    backToWork: "Назад к работам",
    startConversation: "Начать разговор",
    sendMessage: "Написать сообщение",
    visitSite: "Перейти на сайт",
    available: "Беру проекты",
    lastUpdated: "Обновлено",
  },

  home: {
    heroSub:
      "Работаю небольшими прямыми проектами — чёткий объём, чёткая коммуникация, код, готовый к продакшну.",
    currentlyBuilding: "Сейчас работаю над",
    workTitle: "Избранные работы",
    howTitle: "Как я работаю",
    principles: [
      {
        title: "Сначала объём",
        body: "Объём и цена согласуются письменно до первой строки кода — а оплата после того, как сайт в проде и вы им довольны, а не до.",
      },
      {
        title: "Поставка частями",
        body: "Рабочее ПО каждую неделю, а не большое открытие в конце. Вы всегда видите прогресс.",
      },
      {
        title: "Качество продакшна",
        body: "Тесты, наблюдаемость и чистая передача — код, который ваша команда сможет вести без меня.",
      },
      {
        title: "Партнёр надолго",
        body: "После запуска остаюсь доступным для обновлений, SEO и продвижения — столько, сколько нужна помощь. Отношения не заканчиваются сдачей проекта.",
      },
    ],
    ctaTitle: "Есть проект на примете?",
    ctaBody:
      "Расскажите, что вы строите и где застряли. Обычно отвечаю в течение нескольких часов.",
  },

  work: {
    title: "Работы",
    intro:
      "Несколько проектов подробно — проблема, что я сделал, почему и что изменилось в результате.",
  },

  caseStudy: {
    ctaTitle: "Нужно что-то подобное?",
    ctaBody:
      "Беру небольшое число проектов одновременно. Если это похоже на вашу задачу — напишите.",
    relatedTitle: "Другие проекты",
  },

  about: {
    title: "Обо мне",
    description:
      "Об Олеге Катричуке — full-stack инженер на .NET, TypeScript, React и Next.js. Разработка под ключ для стартапов и небольших продуктовых команд.",
    paragraphs: [
      "Я full-stack инженер с фокусом на .NET и TypeScript. Создаю и выпускаю веб-приложения для стартапов и небольших продуктовых команд — там, где один инженер, работающий по всему стеку, эффективнее большой медленной команды.",
      "Большинство проектов начинаются одинаково: есть идея продукта или застрявшее приложение, и команде нужен тот, кто возьмёт на себя всё — API, базу данных, фронтенд, деплой — без лишнего контроля.",
      "Мне важно ПО, которое работает и после передачи: протестированное, наблюдаемое и задокументированное достаточно, чтобы ваша команда могла его развивать. Лучше выпущу надёжное и скучное, чем хитрое и хрупкое.",
      "Работаю с клиентами из США, ЕС, Украины и СНГ — на английском, украинском или русском.",
      "Когда сайт запускается, работа не заканчивается. Остаюсь доступным для обновлений, SEO, контента и продвижения — большинство клиентов продолжают работать со мной долго после первоначальной разработки. Сдача — это начало сотрудничества, а не конец.",
    ],
    stackTitle: "Основной стек",
    stackBody:
      "C# / .NET, TypeScript, React и Next.js, PostgreSQL / SQL Server, Docker. Уверенно веду CI/CD и облачный деплой.",
  },

  contact: {
    title: "Давайте обсудим",
    description:
      "Связаться с Олегом Катричуком — full-stack инженером. Расскажите о проекте — обычно отвечаю в течение нескольких часов. Telegram, email или форма.",
    intro:
      "Чем конкретнее о проблеме и сроках — тем быстрее я скажу, тот ли я человек для этого.",
    name: "Имя",
    email: "Email",
    message: "Что вы строите?",
    send: "Отправить",
    sending: "Отправка…",
    sent: "Спасибо — сообщение получено. Обычно отвечаю в течение нескольких часов.",
    error: "Что-то пошло не так.",
    validation:
      "Пожалуйста, укажите имя, корректный email и короткое сообщение.",
    preferCallTitle: "Лучше в Telegram?",
    bookMin: "Написать в Telegram",
    emailTitle: "Email",
    elsewhereTitle: "Где ещё",
  },

  why: {
    title: "Зачем вашему бизнесу сайт",
    metaTitle: "Создание сайта для бизнеса — зачем он нужен",
    metaDescription:
      "Зачем бизнесу собственный сайт и что даёт разработка сайта под ключ — в отличие от Instagram и маркетплейсов, которые завтра могут вас заблокировать.",
    heroSub:
      "Instagram, TikTok, маркетплейсы — любая платформа может заблокировать вас, изменить алгоритм или поднять комиссию завтра. Сайт на собственном домене — единственный актив, который действительно ваш — и единственный, который ранжируется, конвертирует и работает, пока вы спите.",
    reasonsTitle: "Четыре причины",
    reasons: [
      {
        title: "Он принадлежит вам",
        body: "Instagram, TikTok, Facebook, Telegram, листинги на маркетплейсах — каждый из них может заблокировать ваш аккаунт завтра, обрезать охват или изменить правила. Подписчики, которых вы собирали годами, могут исчезнуть за ночь. Сайт на собственном домене переживает платформы — это единственный актив, который реально ваш.",
      },
      {
        title: "Поиск приводит покупателей, которые уже ищут",
        body: "Большинство людей проверяет информацию перед тем, как позвонить — за стрижкой, подрядчиком, B2B-покупкой. Если вас нет в их поиске — вас нет для них. Профиль не ранжируется. Сайт — да.",
      },
      {
        title: "Он работает, пока вы спите",
        body: "Сайт отвечает на «работаете ли в воскресенье?», «сколько стоит X?», «делаете ли Y?» — в 2 ночи, во время приёма, в выходной. Переписка в Instagram, Telegram или Facebook работает только когда работаете вы.",
      },
      {
        title: "Здесь живёт доверие",
        body: "Для покупок, которые имеют значение — запись к колористу, покупка контейнера, выбор услуги — люди заходят на сайт. Реальный домен выглядит как реальный бизнес. Только профиль — это больше похоже на хобби.",
      },
    ],
    objectionsTitle: "Частые возражения",
    objections: [
      {
        q: "У меня есть Instagram и Facebook — разве этого мало?",
        a: "Для узнаваемости — да. Для решения о покупке — нет. Соцсети — это верх воронки; сайт закрывает сделку. Люди ищут, прежде чем купить.",
      },
      {
        q: "Сайт — это дорого?",
        a: "Хостинг на Vercel: $0. Домен: ~$12/год. Реальный расход — только разработка. Малый бизнес обычно отбивает её за первый месяц входящих обращений.",
      },
      {
        q: "Я не технический — я же не смогу его поддерживать",
        a: "И не нужно. Вы нанимаете одного инженера на весь цикл, получаете рабочий сайт и чистую передачу — а я остаюсь доступным для обновлений, SEO и продвижения, если нужна помощь. Ежедневные изменения контента — это контент, а не код.",
      },
      {
        q: "Как работает оплата и стоимость?",
        a: "Объём и цена согласуются письменно до начала работы — никаких растущих счетов. Оплата после того, как сайт в проде и вы им довольны, а не до. Без предоплаты.",
      },
    ],
    examplesTitle: "Реальные примеры",
    examplesIntro:
      "Три сайта, которые я сделал для клиентов в такой же ситуации — посмотрите, как это сработало:",
    ctaTitle: "Не уверены, даст ли сайт результат именно вам?",
    ctaBody:
      "Расскажите, что вы строите. Скажу прямо, сайт ли — правильный шаг.",
  },

  services: {
    title: "Услуги веб-разработки",
    metaTitle: "Услуги веб-разработки — сайты, веб-приложения и SaaS",
    metaDescription:
      "Full-stack веб-разработка: сайты под ключ, веб-приложения и SaaS MVP на .NET, TypeScript, React и Next.js. Фиксированный объём, оплата после запуска.",
    heroSub:
      "Один full-stack инженер на весь цикл — от маркетингового сайта до multi-tenant SaaS. Объём и цена согласуются заранее, письменно. Оплата после запуска, а не до.",
    listTitle: "Что я делаю",
    items: [
      {
        title: "Сайты для бизнеса и маркетинга",
        body: "Быстрые, готовые к SEO сайты на собственном домене — многоязычные, доступные и созданные, чтобы ранжироваться. Актив, который принадлежит вам, а не арендованный профиль.",
      },
      {
        title: "Веб-приложения",
        body: "Дашборды, порталы и внутренние инструменты с бекендом на .NET и фронтендом на React / Next.js. Настоящая авторизация, настоящие данные, продакшн-уровень с первого дня.",
      },
      {
        title: "SaaS MVP",
        body: "От идеи до живого продукта, за который платят реальные клиенты — multi-tenant архитектура, биллинг и скучная инфраструктура, позволяющая масштабироваться позже.",
      },
      {
        title: "API и интеграции",
        body: "Чистые, задокументированные REST API, интеграции со сторонними сервисами и конвейеры данных. То, что соединяет ваш продукт со всем остальным.",
      },
      {
        title: "Спасение и рефакторинг",
        body: "Унаследовали код, который никто не решается менять? Я стабилизирую его — тесты, наблюдаемость и путь обратно к выпуску фич без страха.",
      },
      {
        title: "Долгосрочное партнёрство",
        body: "После запуска я остаюсь доступным для обновлений, SEO и продвижения — столько, сколько нужна помощь. Сотрудничество не заканчивается передачей.",
      },
    ],
    stackTitle: "Стек",
    stackBody:
      "C# / .NET, ASP.NET, EF Core, Clean Architecture и CQRS на бекенде; TypeScript, React и Next.js на фронтенде; PostgreSQL и Docker под капотом. Проверенные решения, а не то, что в тренде в этом месяце.",
    processTitle: "Как мы будем работать",
    process: [
      {
        title: "Объём — письменно",
        body: "Согласуем, что именно будет сделано и сколько это стоит, до любого кода — никаких растущих счетов, никаких сюрпризов.",
      },
      {
        title: "Выпуск частями",
        body: "Рабочее ПО каждую неделю, а не большое открытие в конце. Вы видите прогресс и можете изменить курс рано.",
      },
      {
        title: "Оплата после запуска",
        body: "Вы платите, когда проект в проде и вы им довольны. Без предоплаты.",
      },
    ],
    faqTitle: "Что спрашивают клиенты",
    faq: [
      {
        q: "Сколько стоит сайт или веб-приложение?",
        a: "Зависит от объёма, который мы фиксируем письменно до старта. Маркетинговый сайт — это одна сумма, multi-tenant SaaS — другая. Вы получаете одну согласованную цену заранее — без почасового роста — и платите её после запуска.",
      },
      {
        q: "Сколько это занимает времени?",
        a: "Сфокусированный маркетинговый сайт — обычно пару недель; веб-приложение или SaaS MVP — от нескольких недель до нескольких месяцев в зависимости от объёма. Поскольку я выпускаю еженедельными частями, вы видите рабочее ПО всё время, а не только в конце.",
      },
      {
        q: "Работаете ли с клиентами из моей страны?",
        a: "Да — удалённо, с клиентами из США, ЕС, Украины и СНГ. Работаю на английском, украинском и русском.",
      },
      {
        q: "А если у меня уже есть наполовину готовый проект?",
        a: "Беру работу по спасению и рефакторингу. Оценю то, что есть, стабилизирую тестами и наблюдаемостью и верну вас к безопасному выпуску фич.",
      },
      {
        q: "Смогу ли я поддерживать его потом?",
        a: "Да. Вы получаете чистый, задокументированный код и нормальную передачу — а я остаюсь доступным для обновлений и SEO, если не хотите этим заниматься. Ежедневные изменения контента — это контент, а не код.",
      },
    ],
    ctaTitle: "Есть проект на примете?",
    ctaBody:
      "Расскажите, что вы строите и где застряли. Обычно отвечаю в течение нескольких часов.",
  },

  landings: {
    indexTitle: "Выберите, что вам нужно",
    indexSub:
      "Каждое направление — отдельный разговор с отдельным объёмом. Начните с того, что ближе к вашей ситуации.",
    includesTitle: "Что входит",
    processTitle: "Как мы будем работать",
    casesTitle: "Смежные работы",
    faqTitle: "Что спрашивают клиенты",
    pages: {
      "website-development": {
        navTitle: "Создание сайтов",
        title: "Создание сайтов под ключ",
        metaTitle: "Создание сайтов под ключ — разработка сайта, готового ранжироваться",
        metaDescription:
          "Создание сайтов под ключ от full-stack инженера: быстрые, многоязычные, готовые к SEO сайты на .NET и Next.js. Фиксированный объём письменно, оплата после запуска.",
        heroSub:
          "Сайт на собственном домене, который быстро грузится, нормально читается с телефона и построен так, чтобы Google мог его проиндексировать. Не шаблон с вашим логотипом.",
        intro:
          "Большинство бизнес-сайтов теряют клиентов в одних и тех же трёх местах: долго грузятся, ломаются на мобильном, и поисковики не видят половины содержимого. Я строю сайт так, как его строил бы инженер — с серверным рендерингом, доступностью, многоязычностью там, где она нужна — чтобы то, за что вы заплатили, работало и через год.",
        includes: [
          {
            title: "Дизайн под ваш бизнес",
            body: "Структура вокруг того, что вы реально продаёте и кто это покупает, а не тема, под которую приходится подгонять контент.",
          },
          {
            title: "Построено, чтобы индексироваться",
            body: "Серверный рендеринг, чистая структура URL, микроразметка, sitemap и hreflang — технический фундамент, без которого о ранжировании говорить рано.",
          },
          {
            title: "Быстро на реальном телефоне",
            body: "Оптимизированные изображения, минимум JavaScript, Core Web Vitals в зелёной зоне — проверено на среднем железе, а не только на быстром ноутбуке.",
          },
          {
            title: "Многоязычность, если нужна",
            body: "Два-три языка с корректным hreflang и отдельными URL, чтобы каждая версия ранжировалась на своём рынке.",
          },
          {
            title: "Контент, который вы правите сами",
            body: "Тексты и изображения лежат там, где вы можете их изменить. Ежедневные правки не должны требовать разработчика.",
          },
          {
            title: "Аналитика с первого дня",
            body: "Вы видите, откуда приходят посетители и что они делают, поэтому решения по сайту опираются на цифры, а не на догадки.",
          },
        ],
        faq: [
          {
            q: "Сколько времени занимает создание сайта?",
            a: "Сфокусированный бизнес-сайт — обычно пару недель от согласованного объёма до запуска. Более крупные сайты с множеством страниц или языков дольше — и вы видите готовые страницы каждую неделю, а не ждёте до конца.",
          },
          {
            q: "Будет ли сайт ранжироваться в Google?",
            a: "Я делаю технический фундамент, который делает ранжирование возможным — рендеринг, структуру, скорость, микроразметку, sitemap. Само ранжирование зависит ещё и от вашего контента и возраста домена, и я скажу об этом прямо, а не буду обещать позиции.",
          },
          {
            q: "Смогу ли я сам менять тексты?",
            a: "Да. Контент отделён от кода, поэтому изменить текст или картинку можно без деплоя и без разработчика.",
          },
          {
            q: "Принадлежит ли сайт мне?",
            a: "Полностью. Ваш домен, ваш хостинг, ваш код. Ничего не привязано ко мне — вы можете передать его другому разработчику в любой момент.",
          },
          {
            q: "А что после запуска?",
            a: "Остаюсь доступным для обновлений, SEO и изменений столько, сколько нужно. Без обязательств и без договора поддержки, в который вас загоняют.",
          },
        ],
      },
      "web-app-development": {
        navTitle: "Веб-приложения",
        title: "Разработка веб-приложений",
        metaTitle: "Разработка веб-приложений — порталы, дашборды, внутренние системы",
        metaDescription:
          "Разработка веб-приложений с бэкендом на .NET и фронтендом на React / Next.js: дашборды, клиентские порталы и внутренние инструменты с настоящей авторизацией.",
        heroSub:
          "Дашборды, клиентские порталы и внутренние инструменты, которые заменяют таблицу, которую все боятся тронуть.",
        intro:
          "Веб-приложение — это там, где живут интересные поломки: права доступа, данные, которые должны оставаться корректными при одновременном редактировании, интеграции, падающие в худший момент. Я строю такие системы с бэкендом на .NET и фронтендом на React или Next.js, где скучные части — авторизация, валидация, логирование, тесты — часть работы, а не отдельная фаза «когда-нибудь потом».",
        includes: [
          {
            title: "Настоящая авторизация и роли",
            body: "Нормальный вход, сессии и права доступа, чтобы обычный пользователь не добрался до админских данных, поправив URL.",
          },
          {
            title: "Бэкенд, который выдерживает",
            body: "C# / .NET с Clean Architecture и CQRS, PostgreSQL под капотом. Бизнес-правила в одном месте, а не размазаны по интерфейсу.",
          },
          {
            title: "Интерфейс, которым можно пользоваться",
            body: "React / Next.js, адаптивный, доступный с клавиатуры, с состояниями загрузки, пустоты и ошибки — тремя экранами, о которых чаще всего забывают.",
          },
          {
            title: "Интеграции с тем, что уже работает",
            body: "Платежи, CRM, почта, сторонние API — подключены с повторными попытками и обработкой ошибок, а не одним запросом и надеждой.",
          },
          {
            title: "Наблюдаемость",
            body: "Структурированные логи и метрики, чтобы в два часа ночи ответ был в дашборде, а не в предположениях.",
          },
          {
            title: "Тесты там, где они важны",
            body: "Интеграционные тесты по реальной логике и реальным данным, чтобы изменение в следующем квартале тихо не сломало биллинг.",
          },
        ],
        faq: [
          {
            q: "Чем это отличается от сайта?",
            a: "Сайт показывает информацию; приложение выполняет работу — пользователи входят, данные меняются, действуют правила. Эта разница проявляется в авторизации, целостности данных и тестировании, и там же большая часть усилий.",
          },
          {
            q: "Можете работать с нашей существующей системой?",
            a: "Обычно да. Могу построить новое приложение над вашей базой или API либо добавить сервис рядом с существующим. Первый шаг — прочитать то, что есть, до любых предложений.",
          },
          {
            q: "Кому принадлежит код и сможет ли наша команда его подхватить?",
            a: "Код ваш. Это задокументированные .NET и TypeScript с привычной структурой — разработчик, пришедший позже, разберётся без экскурсии от меня. Передача — часть работы, а не одолжение.",
          },
          {
            q: "А если требования изменятся на полпути?",
            a: "Обычно так и бывает. Поскольку я выпускаю еженедельными частями, сменить курс рано — дёшево. Объём переcогласуем письменно, когда изменение достаточно крупное.",
          },
          {
            q: "Занимаетесь ли хостингом и деплоем?",
            a: "Да — деплой на Docker, конфигурация окружений и пайплайн, настроенные в ваших аккаунтах, чтобы контроль оставался у вас.",
          },
        ],
      },
      "saas-development": {
        navTitle: "Разработка SaaS",
        title: "Разработка SaaS и MVP",
        metaTitle: "Разработка SaaS — от идеи до продукта, за который платят",
        metaDescription:
          "Разработка SaaS MVP: multi-tenant архитектура, подписки и биллинг на .NET и Next.js — от инженера, который ведёт собственный SaaS-продукт.",
        heroSub:
          "От идеи до живого продукта с реальными подписками — с multi-tenant фундаментом, от которого зависит, будет ли второй год.",
        intro:
          "Я веду собственный SaaS (Futura AI), так что это не теория. Решения, которые болят потом, принимаются в первые недели: как изолированы тенанты, как биллинг связан с доступом, могут ли данные одного клиента когда-нибудь появиться в аккаунте другого. Я делаю MVP небольшим, но структурированным, чтобы рост был добавлением функций, а не переписыванием фундамента.",
        includes: [
          {
            title: "Multi-tenancy с первого дня",
            body: "Изоляция тенантов заложена на уровне данных, а не прикручена после того, как первый крупный клиент о ней спросил.",
          },
          {
            title: "Подписки и биллинг",
            body: "Тарифы, триалы, апгрейды и неудавшиеся платежи, связанные с тем, к чему пользователь реально имеет доступ — включая неприятные сценарии.",
          },
          {
            title: "Онбординг, который конвертит",
            body: "От регистрации до первой реальной ценности за минимум шагов. Задача MVP — доказать, что будут платить, и именно онбординг это решает.",
          },
          {
            title: "Админка для вас",
            body: "Видеть тенантов, использование и состояние подписок, не открывая клиент базы данных.",
          },
          {
            title: "Инфраструктура на вырост",
            body: "Docker, PostgreSQL, фоновые задачи и кеширование, настроенные так, чтобы вторая тысяча пользователей не потребовала перестройки.",
          },
          {
            title: "Объём, который доходит до запуска",
            body: "Режем список функций до того, что доказывает бизнес, запускаем, а остальное добавляем, когда реальные пользователи скажут, что важно.",
          },
        ],
        faq: [
          {
            q: "Насколько маленьким должен быть MVP?",
            a: "Достаточно маленьким, чтобы запуститься за недели, и достаточно полным, чтобы за него заплатили. Большинство провальных MVP слишком большие, а не слишком маленькие — режем агрессивно и добавляем обратно по реальной обратной связи.",
          },
          {
            q: "Почему multi-tenancy важна так рано?",
            a: "Потому что прикрутить её потом — это переписывание. Корректная изоляция тенантов на старте стоит немного вперёд и спасает проект позже, особенно когда клиент впервые задаст вопрос о безопасности.",
          },
          {
            q: "Можете подключить платежи?",
            a: "Да — подписочный биллинг с триалами, апгрейдами, отменами и обработкой неудавшихся платежей, связанный с доступом к функциям.",
          },
          {
            q: "Вы действительно такое строили?",
            a: "Да — Futura AI, multi-tenant AI-чат для бьюти-салонов, живой на beautyfutura.com. Та же архитектура, которую я построил бы вам.",
          },
          {
            q: "Что происходит после запуска?",
            a: "Остаюсь доступным, чтобы строить следующие функции, чинить то, что вскроет реальное использование, и держать инфраструктуру здоровой — столько, сколько это вам полезно.",
          },
        ],
      },
      "dotnet-development": {
        navTitle: ".NET разработка",
        title: "Разработка на .NET",
        metaTitle: "Разработка на .NET — бэкенды на C#, ASP.NET и EF Core",
        metaDescription:
          "Бэкенд-разработка на .NET: ASP.NET API, EF Core и PostgreSQL, Clean Architecture и CQRS — от full-stack инженера, который делает и фронтенд.",
        heroSub:
          "API и бэкенды на C# — построенные так, как строят систему, которая должна пережить третий год изменений.",
        intro:
          ".NET — это то, что я беру, когда корректность важнее новизны: типизированный язык, зрелая платформа и инструменты, ловящие проблемы на компиляции, а не в проде. Я строю API и сервисы с Clean Architecture и CQRS, EF Core над PostgreSQL и дисциплиной, которая делает код безопасным для изменений чужими руками.",
        includes: [
          {
            title: "REST API, которые задокументированы",
            body: "Эндпоинты ASP.NET с OpenAPI, типизированными ответами и последовательным форматом ошибок — фронтендер работает по документации, не спрашивая вас.",
          },
          {
            title: "Clean Architecture и CQRS",
            body: "Доменная логика отделена от инфраструктуры, команды — от запросов. Структура, остающаяся читаемой, когда список функций растёт.",
          },
          {
            title: "EF Core и PostgreSQL",
            body: "Продуманная схема, версионированные миграции и запросы, которые не разваливаются, когда в таблицах появляются реальные объёмы.",
          },
          {
            title: "Предсказуемая обработка ошибок",
            body: "Ожидаемые сбои возвращаются как результат, а не бросаются исключениями, с problem details по стандарту на выходе.",
          },
          {
            title: "Интеграционные тесты на реальной инфраструктуре",
            body: "Тесты против настоящего PostgreSQL в контейнере, чтобы они доказывали работу системы, а не согласованность моков.",
          },
          {
            title: "Фронтенд тоже, если нужно",
            body: "Я делаю и часть на React / Next.js, поэтому между бэкендом и UI нет щели, где теряется ответственность.",
          },
        ],
        faq: [
          {
            q: "Почему .NET, а не Node.js?",
            a: "Для бизнес-систем с настоящими правилами над данными статическая типизация и зрелая платформа убирают целый класс ошибок. Node хорош для многих задач — я написал об этом компромиссе в журнале, вместо того чтобы делать вид, будто что-то всегда выигрывает.",
          },
          {
            q: "Можете подхватить существующий .NET-проект?",
            a: "Да. Оцениваю то, что есть, обкладываю рискованные места тестами и логами, дальше меняю безопасно. Спасательные работы — обычная для меня часть.",
          },
          {
            q: "Какую версию .NET используете?",
            a: "Текущую LTS, на стабильных релизах, не на preview. Если у вас что-то старее, обновление может быть частью объёма.",
          },
          {
            q: "Пишете ли тесты?",
            a: "Да, сначала интеграционные, против реальной инфраструктуры в контейнерах. In-memory подделки базы доказывают слишком мало, поэтому их не использую.",
          },
          {
            q: "Можете работать с нашей командой?",
            a: "Да — по вашим договорённостям, вашему процессу ревью и в вашем репозитории. Пишу код, который читается как тот, что уже есть.",
          },
        ],
      },
      "website-fixes": {
        navTitle: "Доработка сайта",
        title: "Доработка и спасение сайта",
        metaTitle: "Доработка сайта — починить, ускорить, подхватить проект",
        metaDescription:
          "Починить медленный или сломанный сайт, доделать заброшенный проект или подхватить код, который никто не решается менять. Сначала оценка и честный ответ.",
        heroSub:
          "Сайт тормозит, что-то сломалось или разработчик перестал отвечать. Скажу, что на самом деле не так, до разговоров о переписывании.",
        intro:
          "Большинство спасательных работ начинаются одинаково: когда-то работало, кто-то ушёл, и теперь никто не хочет трогать. Первый шаг — оценка: что есть, что опасно, что можно спасти. Иногда ответ — несколько дней правок, а не переписывание, и вы должны это услышать, даже если переписывание принесло бы мне больше.",
        includes: [
          {
            title: "Сначала честная оценка",
            body: "Читаю код и инфраструктуру и говорю, что не так, сколько стоит починить и действительно ли переписывание — лучший вариант.",
          },
          {
            title: "Скорость и Core Web Vitals",
            body: "Найти, что реально тормозит — изображения, блокирующие скрипты, ответ сервера — и починить причины, а не гнаться за баллом.",
          },
          {
            title: "Сломанные и заброшенные проекты",
            body: "Доделать то, что кто-то оставил недостроенным, или стабилизировать код, автор которого недоступен.",
          },
          {
            title: "Проблемы с SEO и индексацией",
            body: "Страницы, которых нет в Google, сломанные редиректы и каноникалы, заброшенный sitemap — технические причины, почему пропал трафик.",
          },
          {
            title: "Безопасность и обновление зависимостей",
            body: "Устаревшие пакеты с известными уязвимостями, открытая конфигурация, отсутствующие заголовки безопасности — приводятся в порядок осознанно.",
          },
          {
            title: "Безопасный путь дальше",
            body: "Тесты и логирование вокруг хрупких мест, чтобы следующее изменение не вернуло ту же поломку.",
          },
        ],
        faq: [
          {
            q: "Можете починить сайт, который делали не вы?",
            a: "Да — это большая часть такой работы. Сначала читаю то, что есть; оценка и есть способ обоим понять, что целесообразнее — чинить или переделывать.",
          },
          {
            q: "А если предыдущий разработчик пропал?",
            a: "Обычная ситуация, рабочая, пока вы контролируете домен, хостинг и репозиторий. Если доступов нет — их восстановление будет первым, что уладим.",
          },
          {
            q: "Как быстро можно починить срочное?",
            a: "Сайт, который лежит или серьёзно сломан, смотрю первым. Мелкие правки часто выходят в тот же день; дальше зависит от того, что покажет оценка.",
          },
          {
            q: "Скажете ли, если чинить не стоит?",
            a: "Да. Если латать дороже, чем сделать заново, скажу это и объясню почему — даже когда для меня это меньше работы.",
          },
          {
            q: "Берёте ли постоянную поддержку?",
            a: "Да, если нужно — обновления, мониторинг и изменения на постоянной основе. Без привязки и без договора, из которого приходится выбираться.",
          },
        ],
      },
    },
  },

  journal: {
    title: "Журнал",
    intro:
      "Заметки о выпуске ПО — .NET, TypeScript, multi-tenant SaaS и скучные части, что держат системы живыми.",
    empty: "Пока пусто — первая запись скоро.",
    minRead: "мин чтения",
    backToIndex: "Назад к журналу",
    ctaTitle: "Строите что-то похожее?",
    ctaBody:
      "Расскажите, над чем работаете. Беру небольшое число проектов одновременно.",
  },

  notFound: {
    title: "Такой страницы нет",
    body: "Возможно, ссылка устарела или с опечаткой.",
    home: "На главную",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, uk, ru };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
