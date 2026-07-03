let foodDatabase = [
    {
        id: 1,
        name: "pizza",
        cuisine: "Italian",
        origin: "Italy",
        vegetarian: false,
        price: 18.99,
        description: 'Wood-fired perfection with San Marzano tomatoes, fresh mozzarella, and fragrant basil.',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=420&fit=crop'
    },
    {
        id: 2,
        name: "burger",
        cuisine: "American",
        origin: "USA",
        vegetarian: false,
        price: 15.99,
        description: 'Prime Angus beef with aged cheddar, caramelized onions, and our signature sauce.',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=420&fit=crop'
    },
    {
        id: 3,
        name: "pasta",
        cuisine: "Italian",
        origin: "Italy",
        vegetarian: true,
        price: 16.99,
        description: 'Al dente spaghetti tossed in a rich, slow-simmered pomodoro with garden herbs.',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=420&fit=crop'
    },
    {
        id: 4,
        name: "sushi",
        cuisine: "Japanese",
        origin: "Japan",
        vegetarian: false,
        price: 22.99,
        description: 'Premium nori rolls with seasoned rice, fresh salmon, and creamy avocado.',
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&h=420&fit=crop'
    },
    {
        id: 5,
        name: "tacos",
        cuisine: "Mexican",
        origin: "Mexico",
        vegetarian: false,
        price: 14.99,
        description: 'Soft corn tortillas with grilled carne asada, pico de gallo, and lime crema.',
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=420&fit=crop'
    },
    {
        id: 6,
        name: "pad thai",
        cuisine: "Thai",
        origin: "Thailand",
        vegetarian: true,
        price: 17.99,
        description: 'Stir-fried rice noodles with shrimp, bean sprouts, tamarind sauce, and crushed peanuts.',
        image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600&h=420&fit=crop'
    },
    {
        id: 7,
        name: "ramen",
        cuisine: "Japanese",
        origin: "Japan",
        vegetarian: false,
        price: 18.99,
        description: 'Rich tonkotsu broth with chashu pork, soft egg, nori, and hand-pulled noodles.',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=420&fit=crop'
    },
    {
        id: 8,
        name: "steak",
        cuisine: "American",
        origin: "USA",
        vegetarian: false,
        price: 38.99,
        description: '30-day dry-aged prime ribeye, chargrilled to perfection with rosemary butter.',
        image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&h=420&fit=crop'
    }
]

const heroBackground = [
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80',
  'https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=1920&q=80',
  'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1920&q=80',
  'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&q=80'
];

const fallbackGradients = {
    Italian:  'linear-gradient(135deg, #f7971e, #ffd200)',
    American: 'linear-gradient(135deg, #e43a15, #e65245)',
    Japanese: 'linear-gradient(135deg, #1a1a2e, #c31432)',
    Mexican:  'linear-gradient(135deg, #11998e, #38ef7d)',
    Thai:     'linear-gradient(135deg, #f2709c, #ff9472)'
};

const maidoInfo = {
  chef: 'Mitsuharu Tsumura',
  cuisine: 'Nikkei — Japanese-Peruvian Fusion',
  address: 'Calle San Martín 399, Miraflores, Lima, Perú',
  phone: '+51 (01) 313-5100',
  hours: 'Mon–Sat 1:00 PM – 10:00 PM',
  sunday: 'Closed',
  philosophy: `Life is movement. Nothing is static or absolute. Like family trees, cuisines are constantly being redefined, their identities enriched by an intense intercultural exchange which has formed the basis of all civilization.`
};

const translations = {
  en: {
    navMenu: 'Menu', navAbout: 'About', navRes: 'Reservations', navContact: 'Contact',
    heroSince: 'Est. 2026', heroTitle: 'Our Menu', heroDesc: 'Curated flavors from the Gen D Kitchen', heroBtn: 'Explore Dishes',
    sectionSub: 'Handpicked Selection', sectionTitle: "Today's Offerings",
    filterAll: 'All',
    resSub: 'Book Your Experience', resTitle: 'Reserve & Pre-Order',
    aboutTitle: 'Our Story', aboutSub: 'Inspired by Maido, Lima',
    contactTitle: 'Get in Touch', contactSub: 'Visit or reach out',
    footerText: 'Fine dining crafted with passion.',
    veg: 'Vegetarian', nonVeg: 'Non-Veg'
  },
  es: {
    navMenu: 'Menú', navAbout: 'Nosotros', navRes: 'Reservas', navContact: 'Contacto',
    heroSince: 'Est. 2026', heroTitle: 'Nuestro Menú', heroDesc: 'Sabores seleccionados de la cocina Gen D', heroBtn: 'Explorar Platos',
    sectionSub: 'Selección Seleccionada', sectionTitle: 'Ofertas de Hoy',
    filterAll: 'Todo',
    resSub: 'Reserve su Experiencia', resTitle: 'Reserve y Pre-Ordene',
    aboutTitle: 'Nuestra Historia', aboutSub: 'Inspirado en Maido, Lima',
    contactTitle: 'Contáctenos', contactSub: 'Visite o comuníquese',
    footerText: 'Comida fina hecha con pasión.',
    veg: 'Vegetariano', nonVeg: 'No Vegetariano'
  },
  fr: {
    navMenu: 'Menu', navAbout: 'À Propos', navRes: 'Réservations', navContact: 'Contact',
    heroSince: 'Établi 2026', heroTitle: 'Notre Menu', heroDesc: 'Saveurs sélectionnées de la cuisine Gen D', heroBtn: 'Découvrir les Plats',
    sectionSub: 'Sélection Choisie', sectionTitle: 'Offres du Jour',
    filterAll: 'Tout',
    resSub: 'Réservez Votre Expérience', resTitle: 'Réservez & Pré-Commandez',
    aboutTitle: 'Notre Histoire', aboutSub: 'Inspiré par Maido, Lima',
    contactTitle: 'Contactez-Nous', contactSub: 'Visitez ou contactez',
    footerText: 'Cuisine raffinée faite avec passion.',
    veg: 'Végétarien', nonVeg: 'Non Végétarien'
  },
  ja: {
    navMenu: 'メニュー', navAbout: '私たちについて', navRes: '予約', navContact: 'お問い合わせ',
    heroSince: '2026年設立', heroTitle: 'メニュー', heroDesc: 'Gen Dキッチンが選ぶ厳選フレーバー', heroBtn: '料理を見る',
    sectionSub: '厳選セレクション', sectionTitle: '本日のおすすめ',
    filterAll: 'すべて',
    resSub: '体験を予約', resTitle: '予約＆事前注文',
    aboutTitle: '私たちの物語', aboutSub: 'リマのマイドに触発されて',
    contactTitle: 'お問い合わせ', contactSub: 'ご来店またはお問い合わせ',
    footerText: '情熱を込めたファインダイニング。',
    veg: 'ベジタリアン', nonVeg: '非ベジタリアン'
  },
  zh: {
    navMenu: '菜单', navAbout: '关于我们', navRes: '预订', navContact: '联系我们',
    heroSince: '成立于2026年', heroTitle: '我们的菜单', heroDesc: 'Gen D厨房精心挑选的风味', heroBtn: '探索菜肴',
    sectionSub: '精心挑选', sectionTitle: '今日供应',
    filterAll: '全部',
    resSub: '预订您的体验', resTitle: '预订和预购',
    aboutTitle: '我们的故事', aboutSub: '灵感来自利马的Maido',
    contactTitle: '联系我们', contactSub: '来访或联系',
    footerText: '充满激情的精致餐饮。',
    veg: '素食', nonVeg: '非素食'
  },
  pt: {
    navMenu: 'Cardápio', navAbout: 'Sobre', navRes: 'Reservas', navContact: 'Contato',
    heroSince: 'Est. 2026', heroTitle: 'Nosso Cardápio', heroDesc: 'Sabores selecionados da cozinha Gen D', heroBtn: 'Explorar Pratos',
    sectionSub: 'Seleção Especial', sectionTitle: 'Ofertas de Hoje',
    filterAll: 'Todos',
    resSub: 'Reserve Sua Experiência', resTitle: 'Reserve e Pré-Peça',
    aboutTitle: 'Nossa História', aboutSub: 'Inspirado no Maido, Lima',
    contactTitle: 'Fale Conosco', contactSub: 'Visite ou entre em contato',
    footerText: 'Alta gastronomia feita com paixão.',
    veg: 'Vegetariano', nonVeg: 'Não Vegetariano'
  },
  de: {
    navMenu: 'Speisekarte', navAbout: 'Über Uns', navRes: 'Reservierungen', navContact: 'Kontakt',
    heroSince: 'Gegr. 2026', heroTitle: 'Unsere Speisekarte', heroDesc: 'Ausgewählte Aromen aus der Gen D Küche', heroBtn: 'Gerichte Entdecken',
    sectionSub: 'Handverlesene Auswahl', sectionTitle: 'Angebote von Heute',
    filterAll: 'Alle',
    resSub: 'Buchen Sie Ihr Erlebnis', resTitle: 'Reservieren & Vorbestellen',
    aboutTitle: 'Unsere Geschichte', aboutSub: 'Inspiriert von Maido, Lima',
    contactTitle: 'Kontaktieren Sie Uns', contactSub: 'Besuchen oder kontaktieren Sie uns',
    footerText: 'Feine Küche mit Leidenschaft zubereitet.',
    veg: 'Vegetarisch', nonVeg: 'Nicht Vegetarisch'
  },
  ko: {
    navMenu: '메뉴', navAbout: '소개', navRes: '예약', navContact: '연락처',
    heroSince: '2026년 설립', heroTitle: '메뉴', heroDesc: 'Gen D 키친의 엄선된 맛', heroBtn: '요리 탐험',
    sectionSub: '엄선된 셀렉션', sectionTitle: '오늘의 메뉴',
    filterAll: '전체',
    resSub: '경험 예약하기', resTitle: '예약 및 사전 주문',
    aboutTitle: '우리의 이야기', aboutSub: '리마의 Maido에서 영감을 받아',
    contactTitle: '문의하기', contactSub: '방문 또는 문의',
    footerText: '열정으로 만든 파인 다이닝.',
    veg: '채식', nonVeg: '비채식'
  },
  ar: {
    navMenu: 'القائمة', navAbout: 'عنا', navRes: 'الحجوزات', navContact: 'اتصل بنا',
    heroSince: 'تأسست 2026', heroTitle: 'قائمتنا', heroDesc: 'نكهات مختارة من مطبخ Gen D', heroBtn: 'استكشف الأطباق',
    sectionSub: 'اختيار انتقائي', sectionTitle: 'عروض اليوم',
    filterAll: 'الكل',
    resSub: 'احجز تجربتك', resTitle: 'احجز واطلب مسبقاً',
    aboutTitle: 'قصتنا', aboutSub: 'مستوحى من Maido، ليما',
    contactTitle: 'اتصل بنا', contactSub: 'زرنا أو اتصل بنا',
    footerText: 'تناول طعام راٍقٍ بشغف.',
    veg: 'نباتي', nonVeg: 'غير نباتي'
  },
  ru: {
    navMenu: 'Меню', navAbout: 'О нас', navRes: 'Бронирование', navContact: 'Контакты',
    heroSince: 'Основан 2026', heroTitle: 'Наше Меню', heroDesc: 'Избранные вкусы от кухни Gen D', heroBtn: 'Изучить Блюда',
    sectionSub: 'Избранная Подборка', sectionTitle: 'Предложения Дня',
    filterAll: 'Все',
    resSub: 'Забронируйте Впечатление', resTitle: 'Бронирование и Предзаказ',
    aboutTitle: 'Наша История', aboutSub: 'Вдохновлено Maido, Лима',
    contactTitle: 'Свяжитесь с Нами', contactSub: 'Посетите или свяжитесь',
    footerText: 'Изысканная кухня, приготовленная со страстью.',
    veg: 'Вегетарианский', nonVeg: 'Невегетарианский'
  }
};

const langList = ['en', 'es', 'fr', 'ja', 'zh', 'pt', 'de', 'ko', 'ar', 'ru'];