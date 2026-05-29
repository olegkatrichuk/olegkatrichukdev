import type { Locale } from "./i18n";

const en = {
  role: "Full-stack engineer — .NET & TypeScript",
  positioning:
    "I help startups and product teams ship reliable web apps — from .NET APIs to React & Next.js frontends — without months of agency overhead.",
  description:
    "Full-stack engineer building production web applications with .NET, TypeScript and React for clients in the US, EU, Ukraine and the CIS.",
  locationLine: "Remote — working with clients in the US, EU, Ukraine & the CIS",

  nav: { work: "Work", why: "Why a site", about: "About", contact: "Contact" },

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
        body: "We agree on what success looks like before any code is written. No open-ended billing.",
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
      "Tell me what you're building and where it's stuck. I reply within a day.",
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
  },

  about: {
    title: "About",
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
    intro:
      "The more concrete you are about the problem and the timeline, the faster I can tell you whether I'm the right person for it.",
    name: "Name",
    email: "Email",
    message: "What are you building?",
    send: "Send message",
    sending: "Sending…",
    sent: "Thanks — your message is in. I'll get back to you within a day.",
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
    ],
    examplesTitle: "Real examples",
    examplesIntro:
      "Three sites I built for clients in the same boat — see how it played out:",
    ctaTitle: "Not sure if a site moves the needle for you?",
    ctaBody:
      "Tell me what you're trying to build. I'll tell you straight whether a site is the right move.",
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
  positioning:
    "Допомагаю стартапам і продуктовим командам випускати надійні вебзастосунки — від .NET API до фронтенду на React і Next.js — без місяців агентських накладних витрат.",
  description:
    "Full-stack інженер, який створює продакшн-вебзастосунки на .NET, TypeScript і React для клієнтів зі США, ЄС, України та СНД.",
  locationLine: "Віддалено — працюю з клієнтами зі США, ЄС, України та СНД",

  nav: { work: "Роботи", why: "Навіщо сайт", about: "Про мене", contact: "Контакти" },

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
        body: "Узгоджуємо, що таке успіх, ще до першого рядка коду. Жодних відкритих рахунків.",
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
      "Розкажіть, що ви будуєте і де застрягли. Відповідаю протягом доби.",
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
  },

  about: {
    title: "Про мене",
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
    intro:
      "Що конкретніше про проблему й терміни — то швидше я скажу, чи я та людина для цього.",
    name: "Ім'я",
    email: "Email",
    message: "Що ви будуєте?",
    send: "Надіслати",
    sending: "Надсилання…",
    sent: "Дякую — повідомлення отримано. Відповім протягом доби.",
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
    ],
    examplesTitle: "Реальні приклади",
    examplesIntro:
      "Три сайти, які я зробив для клієнтів у такій самій ситуації — подивіться, як це спрацювало:",
    ctaTitle: "Не впевнені, чи дасть сайт результат саме вам?",
    ctaBody:
      "Розкажіть, що ви будуєте. Скажу прямо, чи сайт — правильний крок.",
  },

  notFound: {
    title: "Цієї сторінки не існує",
    body: "Можливо, посилання застаріле або з помилкою.",
    home: "На головну",
  },
};

const ru: Dictionary = {
  role: "Full-stack инженер — .NET и TypeScript",
  positioning:
    "Помогаю стартапам и продуктовым командам выпускать надёжные веб-приложения — от .NET API до фронтенда на React и Next.js — без месяцев агентских накладных расходов.",
  description:
    "Full-stack инженер, создающий продакшн-веб-приложения на .NET, TypeScript и React для клиентов из США, ЕС, Украины и СНГ.",
  locationLine: "Удалённо — работаю с клиентами из США, ЕС, Украины и СНГ",

  nav: { work: "Работы", why: "Зачем сайт", about: "Обо мне", contact: "Контакты" },

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
        body: "Договариваемся, что такое успех, до первой строки кода. Никаких открытых счетов.",
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
      "Расскажите, что вы строите и где застряли. Отвечаю в течение суток.",
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
  },

  about: {
    title: "Обо мне",
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
    intro:
      "Чем конкретнее о проблеме и сроках — тем быстрее я скажу, тот ли я человек для этого.",
    name: "Имя",
    email: "Email",
    message: "Что вы строите?",
    send: "Отправить",
    sending: "Отправка…",
    sent: "Спасибо — сообщение получено. Отвечу в течение суток.",
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
    ],
    examplesTitle: "Реальные примеры",
    examplesIntro:
      "Три сайта, которые я сделал для клиентов в такой же ситуации — посмотрите, как это сработало:",
    ctaTitle: "Не уверены, даст ли сайт результат именно вам?",
    ctaBody:
      "Расскажите, что вы строите. Скажу прямо, сайт ли — правильный шаг.",
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
