/* AppVault — каталог приложений */

const APPS = [
  {
    id: 'sberbank',
    name: 'СберБанк Онлайн',
    category: 'Финансы',
    short: 'Платежи, переводы и все ваши финансы в одном приложении',
    long: 'СберБанк Онлайн — самый популярный банковский сервис в России. Переводите деньги по номеру телефона, оплачивайте ЖКХ и мобильную связь, открывайте вклады и следите за бонусами «Спасибо». Приложение поддерживает вход по Face ID и мгновенные уведомления об операциях.',
    developer: 'ПАО Сбербанк',
    size: '452 МБ',
    age: '4+',
    rating: 4.8,
    installs: '50 млн+',
    status: 'ok',
    color1: '#22b07d',
    color2: '#0e7a54',
    glyph: '₽',
    featured: true,
    popular: true,
    isNew: false,
    platform: 'iPhone',
    offers: ["Платежи и переводы","Вклады и инвестиции","Бонусы «Спасибо»"],
    site: 'https://www.sberbank.ru',
  },
  {
    id: 'telegram',
    name: 'Telegram',
    category: 'Социальные сети',
    short: 'Быстрый мессенджер с каналами, чатами и мини-приложениями',
    long: 'Telegram — мессенджер, ориентированный на скорость и безопасность. Общайтесь в личных чатах и группах до 200 000 участников, читайте каналы, делитесь файлами любого размера и используйте десятки мини-приложений прямо внутри мессенджера.',
    developer: 'Telegram FZ-LLC',
    size: '315 МБ',
    age: '17+',
    rating: 4.9,
    installs: '1 млрд+',
    status: 'ok',
    color1: '#4aa8e8',
    color2: '#1e6da8',
    glyph: '✈',
    featured: true,
    popular: true,
    isNew: false,
    platform: 'iPhone, iPad',
    offers: ["Чаты и каналы","Мини-приложения","Файлы до 2 ГБ"],
    site: 'https://telegram.org',
  },
  {
    id: 'yandex-music',
    name: 'Яндекс Музыка',
    category: 'Музыка',
    short: 'Миллионы треков, подкасты и умные рекомендации',
    long: 'Яндекс Музыка подбирает музыку под ваше настроение. Слушайте миллионы треков и подкастов без рекламы, сохраняйте подборки офлайн и открывайте для себя новое благодаря умному алгоритму, который учитывает ваши вкусы.',
    developer: 'Яндекс',
    size: '198 МБ',
    age: '12+',
    rating: 4.7,
    installs: '10 млн+',
    status: 'ok',
    color1: '#f5c518',
    color2: '#c99a00',
    glyph: '♫',
    featured: true,
    popular: true,
    isNew: false,
    platform: 'iPhone',
    offers: ["Стриминг без рекламы","Офлайн-подборки","Подкасты"],
    site: 'https://music.yandex.ru',
  },
  {
    id: 'wildberries',
    name: 'Wildberries',
    category: 'Покупки',
    short: 'Крупнейший маркетплейс: одежда, обувь и товары для дома',
    long: 'Wildberries — крупнейшая онлайн-площадка в России и СНГ. Более 4 миллионов товаров: одежда, обувь, электроника, косметика и товары для дома. Доставка в пункты выдачи по всей стране, примерка перед покупкой и удобный возврат.',
    developer: 'Wildberries',
    size: '287 МБ',
    age: '12+',
    rating: 4.6,
    installs: '100 млн+',
    status: 'ok',
    color1: '#c62ee0',
    color2: '#8a14a3',
    glyph: 'W',
    featured: false,
    popular: true,
    isNew: false,
    platform: 'iPhone',
    offers: ["Доставка в пункты выдачи","Примерка перед покупкой","Возврат товаров"],
    site: 'https://www.wildberries.ru',
  },
  {
    id: 'yandex-go',
    name: 'Яндекс Go',
    category: 'Транспорт',
    short: 'Такси, доставка еды и каршеринг в одном приложении',
    long: 'Яндекс Go объединяет такси, доставку еды из ресторанов и супермаркетов, а также аренду самокатов. Вызывайте машину за пару секунд, следите за водителем на карте и оплачивайте поездку картой или через СБП.',
    developer: 'Яндекс',
    size: '241 МБ',
    age: '12+',
    rating: 4.7,
    installs: '100 млн+',
    status: 'ok',
    color1: '#ff6b35',
    color2: '#d84315',
    glyph: '◉',
    featured: false,
    popular: true,
    isNew: false,
    platform: 'iPhone',
    offers: ["Такси","Доставка еды","Аренда самокатов"],
    site: 'https://go.yandex.ru',
  },
  {
    id: 'vk',
    name: 'ВКонтакте',
    category: 'Социальные сети',
    short: 'Соцсеть, музыка, видео и общение с друзьями',
    long: 'ВКонтакте — крупнейшая социальная сеть России. Общайтесь с друзьями, смотрите клипы и видео, слушайте музыку, читайте новости и пользуйтесь сервисами экосистемы прямо из приложения.',
    developer: 'VK',
    size: '356 МБ',
    age: '12+',
    rating: 4.4,
    installs: '100 млн+',
    status: 'ok',
    color1: '#4a76f6',
    color2: '#2a4fc4',
    glyph: 'ВК',
    featured: false,
    popular: true,
    isNew: false,
    platform: 'iPhone, iPad',
    offers: ["Общение с друзьями","Музыка и видео","Клипы и новости"],
    site: 'https://vk.com',
  },
  {
    id: 'gosuslugi',
    name: 'Госуслуги',
    category: 'Инструменты',
    short: 'Государственные услуги онлайн без очередей',
    long: 'Приложение «Госуслуги» позволяет оформлять документы, записываться к врачу, оплачивать штрафы и налоги, получать справки и пользоваться цифровой картой гражданина — всё это онлайн, без визитов в ведомства.',
    developer: 'Минцифры России',
    size: '176 МБ',
    age: '12+',
    rating: 4.5,
    installs: '50 млн+',
    status: 'ok',
    color1: '#3b7ded',
    color2: '#1a4fc0',
    glyph: 'Г',
    featured: false,
    popular: false,
    isNew: true,
    platform: 'iPhone, iPad',
    offers: ["Документы онлайн","Запись к врачу","Штрафы и налоги"],
    site: 'https://www.gosuslugi.ru',
  },
  {
    id: 'avito',
    name: 'Авито',
    category: 'Покупки',
    short: 'Маркетплейс и объявления: купите и продайте что угодно',
    long: 'Авито — сервис объявлений номер один в России. Покупайте и продавайте вещи, находите работу, недвижимость и автомобили. Общайтесь с продавцами через встроенный чат и пользуйтесь безопасной доставкой.',
    developer: 'Авито',
    size: '265 МБ',
    age: '12+',
    rating: 4.5,
    installs: '100 млн+',
    status: 'ok',
    color1: '#04e061',
    color2: '#00a344',
    glyph: 'А',
    featured: false,
    popular: true,
    isNew: false,
    platform: 'iPhone, iPad',
    offers: ["Объявления","Безопасная доставка","Поиск работы"],
    site: 'https://www.avito.ru',
  },
  {
    id: 'rutube',
    name: 'RUTUBE',
    category: 'Развлечения',
    short: 'Российские видео, шоу, сериалы и блогеры',
    long: 'RUTUBE — российская видеоплатформа с шоу, сериалами, трансляциями и контентом любимых блогеров. Смотрите видео в высоком качестве, подписывайтесь на каналы и находите рекомендации по вашим интересам.',
    developer: 'АО «РУТУБ»',
    size: '154 МБ',
    age: '16+',
    rating: 4.2,
    installs: '10 млн+',
    status: 'ok',
    color1: '#ef2e6b',
    color2: '#b3124a',
    glyph: 'R',
    featured: false,
    popular: false,
    isNew: true,
    platform: 'iPhone',
    offers: ["Видео и шоу","Прямые трансляции","Каналы блогеров"],
    site: 'https://rutube.ru',
  },
  {
    id: 'mts-music',
    name: 'МТС Музыка',
    category: 'Музыка',
    short: 'Музыка и подкасты без рекламы для абонентов МТС',
    long: 'МТС Музыка — стриминговый сервис с каталогом из более 65 миллионов треков. Персональные плейлисты, подкасты и скидка для абонентов МТС. Работает даже при медленном интернете.',
    developer: 'МТС',
    size: '132 МБ',
    age: '12+',
    rating: 4.3,
    installs: '5 млн+',
    status: 'ok',
    color1: '#e30611',
    color2: '#a30009',
    glyph: 'М',
    featured: false,
    popular: false,
    isNew: true,
    platform: 'iPhone',
    offers: ["65 млн треков","Персональные плейлисты","Скидка для МТС"],
    site: 'https://music.mts.ru',
  },
  {
    id: 'kinopoisk',
    name: 'Кинопоиск',
    category: 'Развлечения',
    short: 'Фильмы, сериалы и всё о кино в одном сервисе',
    long: 'Кинопоиск — крупнейшая база данных о кино и онлайн-кинотеатр. Смотрите фильмы и сериалы, читайте рецензии, покупайте билеты в кино и создавайте свои коллекции.',
    developer: 'Яндекс',
    size: '224 МБ',
    age: '18+',
    rating: 4.6,
    installs: '50 млн+',
    status: 'ok',
    color1: '#ff8f00',
    color2: '#c96400',
    glyph: 'К',
    featured: false,
    popular: true,
    isNew: false,
    platform: 'iPhone',
    offers: ["Онлайн-кинотеатр","Билеты в кино","Рецензии и подборки"],
    site: 'https://www.kinopoisk.ru',
  },
  {
    id: 'tbank',
    name: 'Т-Банк',
    category: 'Финансы',
    short: 'Банк в вашем кармане: карты, вклады и инвестиции',
    long: 'Т-Банк (бывший Тинькофф) — крупнейший онлайн-банк России. Управляйте картами, копите на вкладах, инвестируйте на бирже и получайте кешбэк бонусами. Платёжные инструменты и аналитика трат — в одном приложении.',
    developer: 'АО «ТБанк»',
    size: '298 МБ',
    age: '4+',
    rating: 4.7,
    installs: '10 млн+',
    status: 'ok',
    color1: '#ffdd2d',
    color2: '#e6b800',
    glyph: 'Т',
    featured: false,
    popular: true,
    isNew: false,
    platform: 'iPhone',
    offers: ["Карты и кешбэк","Вклады и накопления","Инвестиции"],
    site: 'https://www.tbank.ru',
  },
  {
    id: 'whoosh',
    name: 'Whoosh',
    category: 'Транспорт',
    short: 'Электросамокаты в аренду по всему городу',
    long: 'Whoosh — крупнейший сервис кикшеринга в России. Найдите ближайший самокат на карте, отсканируйте QR-код и поезжайте. Есть тарифы для поездок по времени и подписка для частых пользователей.',
    developer: 'ВУШ',
    size: '118 МБ',
    age: '18+',
    rating: 4.4,
    installs: '10 млн+',
    status: 'ok',
    color1: '#5b4dff',
    color2: '#3b2ecc',
    glyph: 'W',
    featured: false,
    popular: false,
    isNew: true,
    platform: 'iPhone',
    offers: ["Аренда самокатов","Тарифы по времени","Подписка Whoosh Плюс"],
    site: 'https://whoosh.bike',
  },
  {
    id: 'chrome-remote',
    name: 'Ремоут Го',
    category: 'Инструменты',
    short: 'Умные заметки, списки и быстрый доступ к ссылкам',
    long: 'Ремоут Го — организатор рабочего пространства: заметки с синхронизацией, умные списки дел, чтение ссылок позже и быстрый поиск по всем данным. Работает офлайн и поддерживает Face ID.',
    developer: 'Remote Labs',
    size: '64 МБ',
    age: '4+',
    rating: 4.5,
    installs: '1 млн+',
    status: 'region',
    color1: '#00c4b3',
    color2: '#00877c',
    glyph: '◆',
    featured: false,
    popular: false,
    isNew: false,
    platform: 'iPhone',
    offers: ["Заметки и списки","Работа офлайн","Вход по Face ID"],
    site: 'https://example.org/remout-go',
  },
  {
    id: 'spotify',
    name: 'Spotify',
    category: 'Музыка',
    short: 'Мировая стриминговая платформа с подкастами',
    long: 'Spotify — мировой лидер музыкального стриминга. Миллионы треков, авторские подкасты и плейлисты, составленные редакторами. ВНИМАНИЕ: сервис официально недоступен в вашем регионе — подписку и доступ может быть невозможно оформить.',
    developer: 'Spotify AB',
    size: '276 МБ',
    age: '12+',
    rating: 4.7,
    installs: '1 млрд+',
    status: 'region',
    color1: '#1db954',
    color2: '#12813a',
    glyph: '♪',
    featured: false,
    popular: true,
    isNew: false,
    platform: 'iPhone, iPad',
    offers: ["Музыка и подкасты","Плейлисты редакторов","Умные рекомендации"],
    site: 'https://www.spotify.com',
  },
  {
    id: 'ozon',
    name: 'Ozon',
    category: 'Покупки',
    short: 'Огромный выбор товаров с быстрой доставкой',
    long: 'Ozon — один из крупнейших маркетплейсов России. Более 30 миллионов товаров: техника, одежда, книги и продукты. Собственная логистика, пункты выдачи по всей стране и кешбэк в Ozon Карте.',
    developer: 'Ozon',
    size: '301 МБ',
    age: '12+',
    rating: 4.5,
    installs: '100 млн+',
    status: 'ok',
    color1: '#005bff',
    color2: '#0039a6',
    glyph: 'O',
    featured: false,
    popular: true,
    isNew: false,
    platform: 'iPhone, iPad',
    offers: ["30 млн товаров","Кешбэк с Ozon Карты","Собственная логистика"],
    site: 'https://www.ozon.ru',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    category: 'Развлечения',
    short: 'Видеохостинг №1 в мире, ограничен в регионе',
    long: 'YouTube — крупнейшая в мире платформа для просмотра и публикации видео. ВНИМАНИЕ: с 2024 года сервис ограничен в России — многие видео могут не открываться. Доступ к полному каталогу зависит от региона.',
    developer: 'Google LLC',
    size: '412 МБ',
    age: '12+',
    rating: 4.5,
    installs: '10 млрд+',
    status: 'region',
    color1: '#ff0000',
    color2: '#b30000',
    glyph: '▶',
    featured: false,
    popular: true,
    isNew: false,
    platform: 'iPhone, iPad',
    offers: ["Видео и клипы","Подписки на каналы","Прямые эфиры"],
    site: 'https://www.youtube.com',
  },
  {
    id: 'delivio',
    name: 'Деливери Маркет',
    category: 'Инструменты',
    short: 'Планировщик бюджета и финансовый трекер',
    long: 'Приложение для контроля расходов: автоматическая категоризация трат, напоминания об оплате подписок, цели накоплений и графики расходов по месяцам. Все данные хранятся локально на устройстве.',
    developer: 'Budget Tools',
    size: '48 МБ',
    age: '4+',
    rating: 4.6,
    installs: '500 тыс+',
    status: 'ok',
    color1: '#ff9f0a',
    color2: '#c67a00',
    glyph: '₪',
    featured: false,
    popular: false,
    isNew: true,
    platform: 'iPhone',
    offers: ["Учёт расходов","Цели накоплений","Напоминания о платежах"],
    site: 'https://example.org/budget',
  },
];

const CATEGORIES = [
  { id: 'all', name: 'Все', icon: 'grid' },
  { id: 'Финансы', name: 'Финансы', icon: 'finance' },
  { id: 'Социальные сети', name: 'Соцсети', icon: 'chat' },
  { id: 'Музыка', name: 'Музыка', icon: 'music' },
  { id: 'Покупки', name: 'Покупки', icon: 'bag' },
  { id: 'Транспорт', name: 'Транспорт', icon: 'transport' },
  { id: 'Инструменты', name: 'Инструменты', icon: 'tools' },
  { id: 'Развлечения', name: 'Развлечения', icon: 'film' },
];

const ICONS = {
  grid: '<path d="M4 5a2 2 0 0 1 2-2h3v6H4V5Zm7 0a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v4h-7V5ZM4 13a2 2 0 0 1 2-2h3v6H6a2 2 0 0 1-2-2v-2Zm7-2h7v4a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-4Z" fill="currentColor"/>',
  finance: '<path d="M4 18 10 8l3 4 4-7 3 13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
  chat: '<path d="M12 3c5 0 9 3.1 9 7 0 3.9-4 7-9 7-1 0-2-.13-2.9-.37L5 19l.9-3.1C4.1 14.7 3 12.9 3 10c0-3.9 4-7 9-7Z" fill="currentColor"/>',
  music: '<path d="M9 18.5a2.5 2.5 0 1 1-2-4.45V7l11-3v3L9 10v8.5Zm11-3a2.5 2.5 0 1 1-2-4.45V9l2-.55v6.05Z" fill="currentColor"/>',
  bag: '<path d="M6 7h12l1 13H5L6 7Zm3 0a3 3 0 1 1 6 0" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
  transport: '<path d="M12 3c-3.5 0-6 .5-6 3v8a2 2 0 0 0 2 2H7v2a1 1 0 0 0 2 0v-2h6v2a1 1 0 0 0 2 0v-2h-1a2 2 0 0 0 2-2V6c0-2.5-2.5-3-6-3Zm-3.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM7.5 9l.7-3.2A1 1 0 0 1 9.2 5h5.6a1 1 0 0 1 1 .8L16.5 9h-9Z" fill="currentColor"/>',
  tools: '<path d="m14 5 5 5-1.2 1.2a3 3 0 0 1-4.2 0L13 10.6 5.6 18H4v-1.6L11.4 9l-.6-.6a3 3 0 0 1 0-4.2L12 3l2 2Z" fill="currentColor"/>',
  film: '<path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm3 2v10M17 7v10M4 10h3m-3 4h3m10-7h3m-3 4h3m-3 3h3" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="m16 16 5 5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>',
  close: '<path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>',
  back: '<path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
  heart: '<path d="M12 20.5s-7.5-4.7-9.4-9.2C1.2 8 3.4 4.5 7 4.5c2.1 0 3.8 1.2 5 3 1.2-1.8 2.9-3 5-3 3.6 0 5.8 3.5 4.4 6.8-1.9 4.5-9.4 9.2-9.4 9.2Z" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linejoin="round"/>',
  home: '<path d="M4 11.2 12 4l8 7.2V20a1 1 0 0 1-1 1h-4.5v-5.5h-5V21H5a1 1 0 0 1-1-1v-8.8Z" fill="currentColor"/>',
  catalog: '<rect x="4" y="4" width="7" height="7" rx="2" fill="currentColor"/><rect x="13" y="4" width="7" height="7" rx="2" fill="currentColor"/><rect x="4" y="13" width="7" height="7" rx="2" fill="currentColor"/><rect x="13" y="13" width="7" height="7" rx="2" fill="currentColor"/>',
  user: '<circle cx="12" cy="8" r="4.2" fill="currentColor"/><path d="M4 20c.8-3.6 4-5.5 8-5.5s7.2 1.9 8 5.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
  star: '<path d="m12 3 2.7 5.7 6.3.8-4.6 4.3 1.2 6.2L12 17l-5.6 3 1.2-6.2L3 9.5l6.3-.8L12 3Z" fill="currentColor"/>',
  external: '<path d="M10 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-4M14 4h6v6M20 4l-9 9" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
  download: '<path d="M12 4v11m0 0 4.5-4.5M12 15l-4.5-4.5M5 20h14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
  settings: '<circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
  info: '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M12 8h.01M12 11v5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
  chevron: '<path d="m9 5 7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
};

const STATUS = {
  ok: { label: 'Доступно', cls: 'status-ok' },
  region: { label: 'Ограничено в регионе', cls: 'status-region' },
};

const SCREENS = {
  home: { label: 'Главная', icon: 'home' },
  catalog: { label: 'Каталог', icon: 'catalog' },
  favorites: { label: 'Избранное', icon: 'heart' },
  profile: { label: 'Профиль', icon: 'user' },
};

const heroArt = (a, big) => {
  const g = a.glyph.length > 1 ? a.glyph[0] : a.glyph;
  return `
    <span class="hero-art" style="background:linear-gradient(150deg,${a.color1},${a.color2})">
      <span class="hero-art-glyph" style="font-size:${big ? 150 : 110}px">${g}</span>
      <span class="hero-art-ring"></span>
      <span class="hero-art-ring r2"></span>
    </span>`;
};

const appIcon = (a) => {
  const el = document.createElement('div');
  el.className = 'app-icon';
  el.style.cssText = `display:grid;place-items:center;font-weight:700;color:#fff;font-size:${
    a.glyph.length > 1 ? 18 : 22
  }px;background:linear-gradient(145deg,${a.color1},${a.color2})`;
  el.textContent = a.glyph;
  return el;
};

const svg = (name) => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;

/* ---------- state ---------- */

let favorites = new Set(
  JSON.parse(localStorage.getItem('appvault-favs') || '[]')
);
let activeScreen = 'home';
let activeCategory = 'all';
let searchQuery = '';

const saveFavs = () =>
  localStorage.setItem('appvault-favs', JSON.stringify([...favorites]));

const screenEl = document.getElementById('screen');
const tabbarEl = document.getElementById('tabbar');
const detailLayer = document.getElementById('detail-layer');
const toastEl = document.getElementById('toast');
let toastTimer;

function toast(msg) {
  clearTimeout(toastTimer);
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 1900);
}

function toggleFav(id) {
  const wasFav = favorites.has(id);
  if (wasFav) {
    favorites.delete(id);
    toast('Удалено из избранного');
  } else {
    favorites.add(id);
    toast('Добавлено в избранное');
  }
  saveFavs();
  renderTabbar();
  return !wasFav;
}

/* ---------- render helpers ---------- */

function statusPill(status) {
  const s = STATUS[status];
  return `<span class="status ${s.cls}">${s.label}</span>`;
}

function appCardHTML(a) {
  const s = STATUS[a.status];
  return `
    <button class="app-card rise" data-app="${a.id}" data-detail="${a.id}">
      <div class="app-icon-slot"></div>
      <div>
        <p class="app-name">${a.name}</p>
        <p class="app-desc">${a.short}</p>
      </div>
      <div class="card-foot">
        <span class="card-rating">${svg('star')} ${a.rating.toFixed(1)}</span>
        <span class="status status-mini ${s.cls}">${s.label}</span>
      </div>
    </button>`;
}

function appRowHTML(a, rank) {
  return `
    <div class="app-row rise ${rank ? 'ranked' : ''}" role="button" tabindex="0" data-app="${a.id}" data-detail="${a.id}">
      ${rank ? `<span class="rank">${rank}</span>` : ''}
      <div class="app-icon-slot"></div>
      <div class="app-info">
        <p class="app-name">${a.name}</p>
        <p class="app-desc">${a.short}</p>
        <div class="app-meta">
          <span class="app-cat">${a.category}</span>
        </div>
      </div>
      <button class="fav-btn ${favorites.has(a.id) ? 'faved' : ''}" data-fav="${a.id}" aria-label="В избранное">
        ${svg('heart')}
      </button>
    </div>`;
}

function heroCardHTML(a) {
  return `
    <button class="hero-card" data-detail="${a.id}">
      <span class="hero-badge">${svg('star')} Выбор редакции</span>
      ${heroArt(a)}
      <span class="hero-body">
        <span class="app-icon-slot" style="flex-shrink:0"></span>
        <span class="hero-meta">
          <span class="hero-name" style="display:block">${a.name}</span>
          <span class="hero-sub" style="display:block">${a.category} · ${a.installs} установок</span>
        </span>
        <span class="hero-cta">Подробнее</span>
      </span>
    </button>`;
}

function emptyHTML(title, text) {
  return `
    <div class="empty rise">
      <div class="empty-icon">${svg('search')}</div>
      <b>${title}</b>
      <p>${text}</p>
    </div>`;
}

function chipsHTML() {
  const count = (cat) =>
    cat.id === 'all' ? APPS.length : APPS.filter((a) => a.category === cat.id).length;
  return CATEGORIES.map(
    (c) => `
    <button class="chip ${activeCategory === c.id ? 'active' : ''}" data-cat="${c.id}">
      ${svg(c.icon)} ${c.name} <span class="chip-count">${count(c)}</span>
    </button>`
  ).join('');
}

function afterRender() {
  screenEl.querySelectorAll('.app-icon-slot').forEach((slot) => {
    const card = slot.closest('[data-app],[data-detail]');
    const app = APPS.find((x) => x.id === card?.dataset.app || x.id === card?.dataset.detail);
    if (app) slot.replaceWith(appIcon(app));
  });
}

/* ---------- screens ---------- */

function renderHome() {
  const featured = APPS.filter((a) => a.featured);
  const popular = APPS.filter((a) => a.popular);
  const recent = APPS.filter((a) => a.isNew);

  screenEl.innerHTML = `
    <header class="header ${screenEl.dataset.scrolled ? 'scrolled' : ''}" id="header">
      <div class="brand-row">
        <div class="brand-mark">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h9a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4h-4l-5 5v-5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z" transform="translate(0 0)" fill="#fff"/></svg>
        </div>
        <div class="brand-text">
          <h1>AppVault</h1>
          <p>Каталог приложений</p>
        </div>
        <div class="header-actions">
          <button class="icon-btn ${favorites.size ? 'is-active' : ''}" data-nav="favorites">
            ${svg('heart')}
          </button>
        </div>
      </div>
      <div class="search-wrap">
        ${svg('search')}
        <input class="search-input" id="search" type="search" placeholder="Найти приложение"
          value="${searchQuery.replace(/"/g, '&quot;')}" autocomplete="off">
        <button class="search-clear ${searchQuery ? 'visible' : ''}" id="search-clear" aria-label="Очистить">
          ${svg('close')}
        </button>
      </div>
    </header>

    <div id="home-content">
      ${searchQuery ? searchResultsHTML() : homeSectionsHTML(featured, popular, recent)}
    </div>
  `;

  const input = screenEl.querySelector('#search');
  if (input) {
    input.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      const content = screenEl.querySelector('#home-content');
      if (content) {
        content.innerHTML = searchQuery ? searchResultsHTML() : homeSectionsHTML(featured, popular, recent);
        afterRender();
        bindCommon();
      }
    });
    const clear = screenEl.querySelector('#search-clear');
    clear?.addEventListener('click', () => {
      searchQuery = '';
      renderHome();
    });
  }

  afterRender();
  bindCommon();
}

function homeSectionsHTML(featured, popular, recent) {
  return `
    <section class="section">
      <div class="section-head"><h2 class="section-title">Рекомендуем</h2></div>
      <div class="hero-rail">${featured.map(heroCardHTML).join('')}</div>
    </section>

    <section class="section">
      <div class="section-head"><h2 class="section-title">Популярное</h2><span class="section-link">Топ-10</span></div>
      <div class="page-pad list-stack">${popular.slice(0, 10).map((a, i) => appRowHTML(a, i + 1)).join('')}</div>
    </section>

    <section class="section">
      <div class="section-head"><h2 class="section-title">Категории</h2></div>
      <div class="chip-rail">${chipsHTML()}</div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2 class="section-title">Недавно добавлены</h2>
      </div>
      <div class="rail">${recent.map(appCardHTML).join('')}</div>
    </section>`;
}

function searchResultsHTML() {
  const q = searchQuery.trim().toLowerCase();
  const results = q
    ? APPS.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.short.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q)
      )
    : [];
  if (!results.length) {
    return emptyHTML('Ничего не найдено', `По запросу «${searchQuery}» приложений нет. Попробуйте изменить запрос.`);
  }
  return `
    <section class="section">
      <div class="section-head"><h2 class="section-title">Результаты</h2></div>
      <div class="page-pad list-stack">${results.map(appRowHTML).join('')}</div>
    </section>`;
}

function renderCatalog() {
  const list = activeCategory === 'all'
    ? APPS
    : APPS.filter((a) => a.category === activeCategory);

  screenEl.innerHTML = `
    <header class="header ${screenEl.dataset.scrolled ? 'scrolled' : ''}">
      <div class="brand-row">
        <div class="brand-text">
          <h1>Каталог</h1>
          <p>${APPS.length} приложений в 7 категориях</p>
        </div>
      </div>
      <div class="search-wrap">
        ${svg('search')}
        <input class="search-input" id="search" type="search" placeholder="Найти приложение"
          value="${searchQuery.replace(/"/g, '&quot;')}" autocomplete="off">
        <button class="search-clear ${searchQuery ? 'visible' : ''}" id="search-clear" aria-label="Очистить">
          ${svg('close')}
        </button>
      </div>
    </header>

    <section class="section" style="margin-top:16px">
      <div class="section-head"><h2 class="section-title">Категории</h2></div>
      <div class="chip-rail">${chipsHTML()}</div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${activeCategory === 'all' ? 'Все приложения' : activeCategory}</h2>
        <span class="section-link">${list.length}</span>
      </div>
      <div class="page-pad list-stack" id="cat-list">
        ${
          list.length
            ? list.map(appRowHTML).join('')
            : emptyHTML('Пусто', 'В этой категории пока нет приложений.')
        }
      </div>
    </section>
  `;

  const input = screenEl.querySelector('#search');
  input.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    const listEl = screenEl.querySelector('#cat-list');
    const q = searchQuery.trim().toLowerCase();
    const filtered = list.filter(
      (a) => a.name.toLowerCase().includes(q) || a.short.toLowerCase().includes(q)
    );
    listEl.innerHTML = filtered.length
      ? filtered.map(appRowHTML).join('')
      : emptyHTML('Ничего не найдено', 'Попробуйте другой запрос.');
    afterRender();
    bindCommon();
  });
  screenEl.querySelector('#search-clear')?.addEventListener('click', () => {
    searchQuery = '';
    renderCatalog();
  });

  afterRender();
  bindCommon();
}

function renderFavorites() {
  const list = APPS.filter((a) => favorites.has(a.id));

  screenEl.innerHTML = `
    <header class="header">
      <div class="brand-row">
        <div class="brand-text">
          <h1>Избранное</h1>
          <p>${list.length ? `${list.length} приложений` : 'Пока пусто'}</p>
        </div>
        <div class="header-actions">
          <button class="section-link" data-nav="catalog">В каталог</button>
        </div>
      </div>
    </header>
    ${
      list.length
        ? `<section class="section"><div class="page-pad list-stack">${list
            .map(appRowHTML)
            .join('')}</div></section>`
        : `<div style="margin-top:80px">
            ${emptyHTML('Список пуст', 'Нажмите на сердечко у приложения, чтобы добавить его сюда.')}
            <div style="text-align:center;margin-top:20px">
              <button class="btn-primary" style="flex:none;padding:0 26px;margin:0 20px;width:auto" data-nav="catalog">
                Перейти в каталог
              </button>
            </div>
          </div>`
    }
  `;

  afterRender();
  bindCommon();
}

function renderProfile() {
  screenEl.innerHTML = `
    <header class="header">
      <div class="brand-row">
        <div class="brand-text">
          <h1>Профиль</h1>
          <p>Настройки и статистика</p>
        </div>
      </div>
    </header>

    <div class="page-pad">
      <div class="profile-card rise">
        <div class="avatar">А</div>
        <div>
          <p class="profile-name">Александр</p>
          <p class="profile-sub">Пользователь AppVault</p>
        </div>
      </div>

      <div class="stat-grid rise">
        <div class="stat-cell">
          <div class="stat-value">${favorites.size}</div>
          <div class="stat-label">В избранном</div>
        </div>
        <div class="stat-cell">
          <div class="stat-value">${APPS.length}</div>
          <div class="stat-label">Приложений</div>
        </div>
        <div class="stat-cell">
          <div class="stat-value">${CATEGORIES.length - 1}</div>
          <div class="stat-label">Категорий</div>
        </div>
      </div>

      <section class="section">
        <div class="section-head"><h2 class="section-title">Настройки</h2></div>
        <div class="list-stack">
          <button class="setting-row" data-toast="Раздел в разработке">
            ${svg('user')} Учётная запись <span class="row-arrow">${svg('chevron')}</span>
          </button>
          <button class="setting-row" data-toast="Раздел в разработке">
            ${svg('settings')} Уведомления <span class="row-arrow">${svg('chevron')}</span>
          </button>
          <button class="setting-row" data-toast="Раздел в разработке">
            ${svg('info')} О приложении <span class="row-arrow">${svg('chevron')}</span>
          </button>
        </div>
      </section>

      <section class="section">
        <div class="section-head"><h2 class="section-title">Ваше избранное</h2></div>
        <div class="rail">
          ${
            APPS.filter((a) => favorites.has(a.id)).length
              ? APPS.filter((a) => favorites.has(a.id)).map(appCardHTML).join('')
              : `<p class="app-desc" style="padding:0 2px">Вы пока ничего не добавили в избранное.</p>`
          }
        </div>
      </section>

      <p class="detail-note">
        AppVault — витрина-каталог. Приложения распространяются через
        официальные магазины App Store; скачивание файлов сторонними
        способами не предусмотрено.
      </p>
    </div>
  `;

  afterRender();
  bindCommon();
}

/* ---------- detail ---------- */

function openDetail(id) {
  const a = APPS.find((x) => x.id === id);
  if (!a) return;

  detailLayer.innerHTML = `
    <div class="detail-sheet" id="detail-sheet">
      <div class="detail-hero">
        ${heroArt(a, true)}
        <div class="detail-topbar">
          <button class="circle-btn" id="detail-close" aria-label="Назад">${svg('back')}</button>
          <button class="circle-btn ${favorites.has(a.id) ? '' : ''}" id="detail-fav" aria-label="В избранное" style="color:${favorites.has(a.id) ? '#a78bfa' : '#fff'}">
            ${svg('heart')}
          </button>
        </div>
      </div>
      <div class="detail-content">
        <div class="detail-head">
          <div class="app-icon-slot" style="flex-shrink:0"></div>
          <div class="detail-head-info">
            <h2 class="detail-name">${a.name}</h2>
            <p class="detail-cat">${a.category} · ${a.developer}</p>
          </div>
        </div>

        <div class="detail-actions">
          <button class="btn-primary" id="detail-open">${svg('external')} Открыть в App Store</button>
          <button class="detail-fav ${favorites.has(a.id) ? 'faved' : ''}" id="detail-fav2" aria-label="В избранное">
            ${svg('heart')}
          </button>
        </div>

        <div class="detail-status-row">
          ${statusPill(a.status)}
          <span>${a.status === 'ok' ? 'Приложение доступно в App Store' : 'Доступ может быть ограничен в вашем регионе'}</span>
        </div>

        <h3 class="detail-desc-title">Описание</h3>
        <p class="detail-desc">${a.long}</p>

        <div class="detail-meta-grid">
          <div class="meta-cell">
            <div class="meta-label">Рейтинг</div>
            <div class="meta-value">${a.rating} ★</div>
          </div>
          <div class="meta-cell">
            <div class="meta-label">Установки</div>
            <div class="meta-value">${a.installs}</div>
          </div>
          <div class="meta-cell">
            <div class="meta-label">Размер</div>
            <div class="meta-value">${a.size}</div>
          </div>
          <div class="meta-cell">
            <div class="meta-label">Возраст</div>
            <div class="meta-value">${a.age}</div>
          </div>
          <div class="meta-cell" style="grid-column:1/-1">
            <div class="meta-label">Совместимость</div>
            <div class="meta-value">${a.platform} · iOS 15 или новее</div>
          </div>
        </div>

        <h3 class="detail-desc-title">Что предлагает сервис</h3>
        <div class="offer-chips">
          ${a.offers.map((o) => `<span class="offer-chip">${o}</span>`).join('')}
        </div>

        <button class="detail-link" data-site="${a.site}">
          <span>Официальный сайт разработчика</span>
          <span>${svg('chevron')}</span>
        </button>

        <p class="detail-note">
          AppVault — каталог-витрина. Приложение не распространяет файлы,
          а перенаправляет в официальный App Store.
        </p>
      </div>
    </div>
  `;

  detailLayer.classList.add('open');
  detailLayer.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  const favBtn = detailLayer.querySelector('#detail-fav');
  const favBtn2 = detailLayer.querySelector('#detail-fav2');
  const syncFav = (nowFav) => {
    favBtn.style.color = nowFav ? '#a78bfa' : '#fff';
    favBtn2.classList.toggle('faved', nowFav);
    renderTabbar();
  };
  const doFav = () => {
    syncFav(toggleFav(a.id));
  };
  favBtn.addEventListener('click', doFav);
  favBtn2.addEventListener('click', doFav);

  detailLayer.querySelector('#detail-open').addEventListener('click', () => {
    toast('Переходим в App Store…');
    window.open(a.site, '_blank', 'noopener');
  });

  detailLayer.querySelector('[data-site]').addEventListener('click', () => {
    window.open(a.site, '_blank', 'noopener');
  });

  detailLayer.querySelector('#detail-close').addEventListener('click', closeDetail);
  detailLayer.querySelector('.app-icon-slot')?.replaceWith(appIcon(a));
}

function closeDetail() {
  detailLayer.classList.remove('open');
  detailLayer.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (activeScreen === 'favorites') renderFavorites();
  setTimeout(() => {
    if (!detailLayer.classList.contains('open')) detailLayer.innerHTML = '';
  }, 500);
}

/* ---------- tabbar ---------- */

function renderTabbar() {
  tabbarEl.innerHTML = Object.entries(SCREENS)
    .map(
      ([id, s]) => `
    <button class="tab ${activeScreen === id ? 'active' : ''}" data-nav="${id}">
      ${svg(s.icon)}
      <span>${s.label}</span>
      ${id === 'favorites' && favorites.size ? `<span class="tab-badge">${favorites.size}</span>` : ''}
    </button>`
    )
    .join('');
}

/* ---------- navigation ---------- */

const RENDERERS = {
  home: renderHome,
  catalog: renderCatalog,
  favorites: renderFavorites,
  profile: renderProfile,
};

function navigate(screen) {
  if (!RENDERERS[screen]) return;
  activeScreen = screen;
  searchQuery = '';
  window.scrollTo({ top: 0, behavior: 'instant' });
  renderTabbar();
  RENDERERS[screen]();
}

function bindCommon() {
  screenEl.querySelectorAll('[data-nav]').forEach((b) =>
    b.addEventListener('click', () => navigate(b.dataset.nav))
  );
  screenEl.querySelectorAll('[data-detail]').forEach((b) => {
    b.addEventListener('click', () => openDetail(b.dataset.detail));
    b.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openDetail(b.dataset.detail);
      }
    });
  });
  screenEl.querySelectorAll('[data-fav]').forEach((b) =>
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      const nowFav = toggleFav(b.dataset.fav);
      screenEl.querySelectorAll(`[data-fav="${b.dataset.fav}"]`).forEach((btn) =>
        btn.classList.toggle('faved', nowFav)
      );
      if (activeScreen === 'favorites') renderFavorites();
    })
  );
  screenEl.querySelectorAll('[data-cat]').forEach((b) =>
    b.addEventListener('click', () => {
      activeCategory = b.dataset.cat;
      if (activeScreen === 'home') {
        navigate('catalog');
        return;
      }
      renderCatalog();
    })
  );
  screenEl.querySelectorAll('[data-toast]').forEach((b) =>
    b.addEventListener('click', () => toast(b.dataset.toast))
  );
}

tabbarEl.addEventListener('click', (e) => {
  const tab = e.target.closest('[data-nav]');
  if (tab) navigate(tab.dataset.nav);
});

detailLayer.addEventListener('click', (e) => {
  if (e.target === detailLayer) closeDetail();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && detailLayer.classList.contains('open')) closeDetail();
});

window.addEventListener('scroll', () => {
  const header = screenEl.querySelector('.header');
  if (header) header.classList.toggle('scrolled', window.scrollY > 8);
}, { passive: true });

/* ---------- boot ---------- */

renderTabbar();
renderHome();
