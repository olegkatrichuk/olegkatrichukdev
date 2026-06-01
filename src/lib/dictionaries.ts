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
