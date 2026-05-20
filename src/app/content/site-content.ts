// Zentrale Inhaltsdatei:
// Später müssen in der Regel nur noch Texte, Preise, Links und Bildpfade hier gepflegt werden.

export const siteContent = {
  brand: {
    name: 'Galloway Getaway',
    shortTagline: 'Natürlich. Hochwertig. Erlebbar.',
    footerNote: 'Premium Farm Experience · Galloway-Patenschaften · Direkt vom Hof'
  },
  notFound: {
    seoTitle: 'Seite nicht gefunden – Galloway Getaway',
    seoDescription:
      'Die angeforderte Seite konnte nicht gefunden werden. Zurück zur Startseite von Galloway Getaway.'
  },
  legal: {
    imprint: {
      seoTitle: 'Impressum – Galloway Getaway',
      seoDescription: 'Impressum und Anbieterkennzeichnung für Galloway Getaway.'
    },
    privacy: {
      seoTitle: 'Datenschutz – Galloway Getaway',
      seoDescription: 'Hinweise zum Datenschutz und zur Verarbeitung personenbezogener Daten.'
    },
    cookies: {
      seoTitle: 'Cookie-Hinweis – Galloway Getaway',
      seoDescription: 'Hinweise zu Cookies und zum Umgang mit Tracking-Technologien.'
    }
  },
  navigation: [
    { label: 'Start', href: '/' },
    { label: 'Unsere Tiere', href: '/farm' },
    { label: 'Patenschaft', href: '/patenschaft' },
    { label: 'Shop', href: '/shop' },
    { label: 'Über uns', href: '/ueber-uns' },
    { label: 'Kalender', href: '/kalender' }
  ],
  home: {
    seoTitle: 'Galloway Getaway – Tierpatenschaften & Direktverkauf',
    seoDescription:
      'Werde Pate eines Galloway-Rindes, kaufe natürliche Tiersnacks direkt vom Hof und erlebe Premium-Landwirtschaft hautnah. Mara, Bram und Nola freuen sich auf dich.',
    hero: {
      eyebrow: 'Tierpatenschaften · Direktverkauf · Naturbelassen',
      lines: ['Werde Pate.', 'Mach ein Tier glücklich.'],
      subline:
        'Drei Galloway-Rinder warten auf einen Paten. Lerne Mara, Bram und Nola kennen – und werde Teil unserer kleinen Herde.',
      ctaPrimary: 'Patenschaft übernehmen',
      ctaSecondary: 'Farm besuchen',
      imageUrl: '/media/hero.jpg',
      imageAlt: 'Galloway-Rinder auf der Weide bei stimmungsvollem Licht'
    },
    intro: {
      eyebrow: 'Was uns besonders macht',
      heading: 'Vom ruhigen Weideland zur immersiven Farm Experience.'
    },
    highlights: [
      {
        title: 'Natürliche Haltung',
        text: 'Unsere Galloways leben ganzjährig auf offenen Weiden in ruhiger, artgerechter Umgebung.',
        image: '/media/highlight-nature.jpg',
        imageAlt: 'Galloway-Rinder in natürlicher Weidehaltung auf offener Wiese'
      },
      {
        title: 'Premium Qualität',
        text: 'Kurze Wege und kompromisslose Qualität für Tier-Snacks, Pflegeprodukte und Farm-Specials.',
        image: '/media/feature.jpg',
        imageAlt: 'Nahaufnahme eines Galloway-Rindes – sichtbare Premium-Qualität'
      },
      {
        title: 'Erlebnis vor Ort',
        text: 'Geführte Farm-Erlebnisse, saisonale Highlights und unser kaufbarer Premium-Kalender machen die Marke erlebbar.',
        image: '/media/highlight-experience.jpg',
        imageAlt: 'Besucher erleben die Galloway-Farm hautnah im Herbstlicht'
      }
    ]
  },
  about: {
    seoTitle: 'Über uns – Galloway Getaway',
    seoDescription:
      'Lerne die Geschichte, Philosophie und Entwicklung von Galloway Getaway kennen – von der kleinen Herde zur Premium-Marke.',
    eyebrow: 'Unsere Geschichte',
    heading: 'Von der Weide zum Premium-Erlebnis.',
    text:
      'Galloway Getaway steht für kompromisslose Tierhaltung, langsames Wachstum und eine Philosophie, die Natur, Genuss und Verantwortung miteinander verbindet.',
    image: '/media/about.jpg',
    imageAlt: 'Galloway-Rind mit neugierigem Blick – Charakter der Farm',
    timelineEyebrow: 'Philosophie in Etappen',
    milestones: [
      {
        year: '2014',
        title: 'Beginn mit zwei Tieren',
        text: 'Aus einer kleinen Vision entstand eine Farm, die Natur, Ruhe und Qualität vereint.'
      },
      {
        year: '2018',
        title: 'Erste Partnerschaften',
        text: 'Regionale Gastronomie und Direktkund:innen wurden Teil unserer Qualitätskette.'
      },
      {
        year: '2023',
        title: 'Galloway Getaway als Marke',
        text: 'Mit emotionalem Storytelling und Farm-Erlebnissen wurde aus der Farm eine Erlebniswelt.'
      }
    ]
  },
  farm: {
    seoTitle: 'Farm & Tiere – Galloway Getaway',
    seoDescription:
      'Erkunde die Herde von Galloway Getaway und entdecke einzelne Tiere, ihre Rolle auf der Farm und die Haltung dahinter.',
    eyebrow: 'Farm & Tiere',
    heading: 'Unsere Herde im Fokus',
    animals: [
      {
        name: 'Mara',
        age: '6 Jahre',
        detail: 'Ruhige Leittier-Dame mit ausgeprägter Sozialstruktur.',
        longDetail:
          'Mara ist die Seele der Herde. Seit drei Jahren führt sie die anderen Tiere mit ruhiger Würde über die Weide – immer die Erste, die sich einem Neuankömmling nähert, immer die Letzte, die abends ins Gras legt. Mit ihr zu sitzen ist wie Stille spürbar zu machen.',
        personality: ['Ruhig', 'Sozial', 'Weise'],
        favoriteSnack: 'Heu-Kräuter Bites',
        image: '/media/farm-mara.jpg',
        imageAlt: 'Mara – ruhige Leittier-Dame der Galloway-Herde'
      },
      {
        name: 'Bram',
        age: '4 Jahre',
        detail: 'Neugieriger Bulle, bekannt für Gelassenheit und starke Präsenz.',
        longDetail:
          'Bram kommt immer als Erster zum Zaunrand, wenn Menschen in der Nähe sind – nicht aus Nervosität, sondern aus Neugier. Er ist der Größte auf der Weide, bewacht Kälber mit ruhiger Aufmerksamkeit und hat einen sehr eigenen Humor. Wer Bram einmal die Hand hingestreckt hat, versteht, was Vertrauen bedeutet.',
        personality: ['Neugierig', 'Gelassen', 'Mutig'],
        favoriteSnack: 'Galloway Cookies Classic',
        image: '/media/farm-bram.jpg',
        imageAlt: 'Bram – neugieriger Galloway-Bulle mit starker Präsenz'
      },
      {
        name: 'Nola',
        age: '2 Jahre',
        detail: 'Jungtier mit hoher Vitalität und markantem Fell.',
        longDetail:
          'Nola ist das Jüngste der Herde – und manchmal merkt man das noch. Sie springt, wo andere schreiten, fragt, wo andere schon wissen. Ihr dichtes, lockiges Fell glänzt im Herbstlicht besonders schön. Wer Nola einmal in die Augen geschaut hat, vergisst das nicht.',
        personality: ['Verspielt', 'Vital', 'Neugierig'],
        favoriteSnack: 'Farm Treat Mix Box',
        image: '/media/farm-nola.jpg',
        imageAlt: 'Nola – vitales Galloway-Jungtier mit markantem Fell'
      }
    ]
  },
  partnerships: {
    seoTitle: 'B2B-Partnerschaften – Galloway Getaway',
    seoDescription:
      'Regionale B2B-Partnerschaften mit Galloway Getaway – für Gastronomie, Hofladen-Konzepte und Markenkooperationen im Premium-Segment.',
    eyebrow: 'B2B-Partnerschaften',
    heading: 'Gemeinsam regionale Premium-Werte schaffen.',
    benefits: [
      'Zugang zu regionalen Premium-Produkten direkt vom Hof',
      'Transparente Herkunft und Qualitätsnachweise',
      'Gemeinsames Storytelling für Marke & Vertrieb',
      'Individuelle Konditionen für Gastronomie und Handel'
    ],
    formLabels: {
      name: 'Name',
      company: 'Unternehmen',
      email: 'E-Mail',
      message: 'Nachricht',
      submit: 'Anfrage senden',
      success: 'Vielen Dank! Wir melden uns zeitnah zurück.'
    }
  },
  shop: {
    seoTitle: 'Shop – Tier-Snacks von Galloway Getaway',
    seoDescription:
      'Kaufe Tier-Snacks und ausgewählte Farm-Produkte von Galloway Getaway – hochwertig, natürlich und markengerecht präsentiert.',
    eyebrow: 'Shop',
    heading: 'Snacks & Produkte für Tiere',
    cartLabel: 'Warenkorb',
    addToCartLabel: 'In den Warenkorb',
    products: [
      {
        name: 'Galloway Cookies Classic',
        price: 6.9,
        description: 'Knusprige Belohnungscookies für Rinder und Hoftiere.',
        image: '/media/shop.jpg'
      },
      {
        name: 'Heu-Kräuter Bites',
        price: 8.5,
        description: 'Schonend getrocknete Kräuter-Snacks für tägliche Fütterung.',
        image: '/media/shop-bites.jpg'
      },
      {
        name: 'Farm Treat Mix Box',
        price: 24,
        description: 'Mischbox mit Cookies, Bites und saisonalen Tier-Leckerlis.',
        image: '/media/shop-mixbox.jpg'
      }
    ]
  },
  calendarPurchase: {
    seoTitle: 'Kalender kaufen – Galloway Getaway',
    seoDescription:
      'Bestelle den Play-Mooo-Kalender mit hochwertigen Galloway-Motiven als Geschenk, Markenprodukt oder stilvollen Wandkalender.',
    eyebrow: 'Kalender kaufen',
    heading: 'Der Play-Mooo-Kalender zum Kaufen',
    description:
      'Ein hochwertiger Wandkalender mit ikonischen Galloway-Motiven, ruhiger Bildsprache und starkem Premium-Finish für Zuhause, Hofladen oder als Geschenk.',
    priceLabel: 'Preis pro Kalender',
    totalLabel: 'Gesamt',
    buyLabel: 'Jetzt kaufen',
    successMessage: 'Der Kalender wurde zur Kaufanfrage hinzugefügt.',
    features: [
      '12 hochwertige Monatsmotive mit Galloway-Rindern',
      'Premium-Druck auf starkem Naturpapier',
      'Perfekt als Geschenk für Farm-Fans und Partner:innen'
    ],
    previewMonths: [
      {
        month: 'Januar',
        title: 'Frostige Morgenruhe',
        text: 'Sanfte Winterstimmung mit ruhiger Herde auf offener Weide.',
        image: '/media/calendar-jan.jpg'
      },
      {
        month: 'Mai',
        title: 'Frisches Weidegrün',
        text: 'Lebendige Frühlingsszene mit detailreichen Fellstrukturen und Lichtspiel.',
        image: '/media/calendar-may.jpg'
      },
      {
        month: 'September',
        title: 'Golden Hour auf der Farm',
        text: 'Warme Abendfarben und markante Silhouetten für den Premium-Look.',
        image: '/media/calendar-sep.jpg'
      }
    ],
    previewAlt: 'Vorschau des Play-Mooo-Kalenders',
    unitPrice: 29
  },
  patenschaft: {
    seoTitle: 'Patenschaft – Galloway Getaway',
    seoDescription:
      'Werde Pate eines Galloway-Rindes. Monatliche Updates, Besuchstermine und eine echte Verbindung zu Mara, Bram oder Nola.',
    eyebrow: 'Tierpatenschaften',
    heading: 'Werde Teil unserer Herde.',
    intro:
      'Übernimm eine Patenschaft für Mara, Bram oder Nola – und erfahre monatlich, wie es deinem Patentier auf der Weide geht. Echte Fotos, echte Geschichten, ein echter Unterschied.',
    howItWorksTitle: 'So funktioniert eine Patenschaft',
    steps: [
      {
        icon: '🐄',
        title: 'Tier wählen',
        text: 'Lerne Mara, Bram und Nola kennen und wähle dein Patentier aus.'
      },
      {
        icon: '📋',
        title: 'Paket auswählen',
        text: 'Basis, Plus oder Premium – ganz nach dem, was du erleben möchtest.'
      },
      {
        icon: '📬',
        title: 'Updates genießen',
        text: 'Monatliche Foto-Updates, Briefe und Besuchstermine warten auf dich.'
      }
    ],
    animalsTitle: 'Wähle dein Patentier',
    packagesTitle: 'Deine Patenschaft',
    packages: [
      {
        id: 'basis',
        name: 'Basis',
        price: '9 € / Monat',
        featured: false,
        features: [
          'Digitales Patenschaftszertifikat',
          'Monatliche Foto-Updates',
          'Namenseintrag auf der Farm-Website'
        ]
      },
      {
        id: 'plus',
        name: 'Plus',
        price: '19 € / Monat',
        featured: true,
        features: [
          'Alles aus Basis',
          'Persönlicher Besuchstermin (1× jährlich)',
          'Handgeschriebener Brief vom Bauern'
        ]
      },
      {
        id: 'premium',
        name: 'Premium',
        price: '39 € / Monat',
        featured: false,
        features: [
          'Alles aus Plus',
          'Namensschild auf der Weide',
          'Jahreskalender kostenlos',
          'Farm Treat Box (quartalsweise)'
        ]
      }
    ],
    formTitle: 'Jetzt Patenschaft starten',
    formLabels: {
      name: 'Dein Name',
      email: 'E-Mail-Adresse',
      animal: 'Patentier wählen',
      animalOptions: [
        { value: 'mara', label: 'Mara (6 Jahre · Leittier-Dame)' },
        { value: 'bram', label: 'Bram (4 Jahre · Neugieriger Bulle)' },
        { value: 'nola', label: 'Nola (2 Jahre · Jungtier)' }
      ],
      package: 'Patenschaftspaket',
      message: 'Nachricht (optional)',
      submit: 'Patenschaft anfragen',
      success:
        'Herzlich willkommen in unserer Herde! Wir melden uns innerhalb von 24 Stunden.'
    },
    faqTitle: 'Häufige Fragen',
    faqs: [
      {
        question: 'Was beinhaltet eine Patenschaft?',
        answer:
          'Mit einer Patenschaft erhältst du ein persönliches Zertifikat, monatliche Foto-Updates deines Patentiers und je nach Paket einen persönlichen Besuchstermin auf der Farm.'
      },
      {
        question: 'Kann ich mein Patentier besuchen?',
        answer:
          'Ab dem Plus-Paket beinhaltet deine Patenschaft einen geführten Besuchstermin pro Jahr – inklusive persönlicher Begegnung mit deinem Tier.'
      },
      {
        question: 'Wie lange läuft eine Patenschaft?',
        answer:
          'Patenschaften laufen monatlich und können jederzeit zum Monatsende gekündigt werden. Es gibt keine Mindestlaufzeit.'
      },
      {
        question: 'Erhalte ich ein Zertifikat?',
        answer:
          'Ja – nach Abschluss erhältst du ein digitales Patenschaftszertifikat mit dem Namen deines Tieres. Auf Wunsch auch als gedruckte Version.'
      },
      {
        question: 'Was passiert mit meinem Beitrag?',
        answer:
          'Dein Beitrag fließt direkt in das Wohlbefinden der Tiere: besseres Futter, artgerechte Weide-Pflege und tierärztliche Versorgung.'
      }
    ]
  }
} as const;
