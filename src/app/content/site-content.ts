// Zentrale Inhaltsdatei:
// Später müssen in der Regel nur noch Texte, Preise, Links und Bildpfade hier gepflegt werden.

export const siteContent = {
  brand: {
    name: 'Galloway Getaway',
    shortTagline: 'Natürlich. Hochwertig. Erlebbar.',
    footerNote: 'Premium Farm Experience · Inhalte und Bilder können zentral in dieser Datei gepflegt werden.'
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
    { label: 'Über uns', href: '/ueber-uns' },
    { label: 'Farm & Tiere', href: '/farm' },
    { label: 'Partnerschaften', href: '/partnerschaften' },
    { label: 'Shop', href: '/shop' },
    { label: 'Kalender kaufen', href: '/kalender' }
  ],
  home: {
    seoTitle: 'Galloway Getaway – Premium Farm Experience',
    seoDescription:
      'Entdecke die Welt von Galloway Getaway mit hochwertiger Farm-Ästhetik, Tier-Snacks, Partnerschaften und starkem Storytelling.',
    hero: {
      eyebrow: 'Galloway Getaway',
      lines: ['Natur als Bühne.', 'Qualität als Haltung.', 'Erlebnis als Marke.'],
      ctaPrimary: 'Jetzt Fleischpaket bestellen',
      ctaSecondary: 'Farm entdecken',
      imageUrl: '/media/hero.jpg',
      imageAlt: 'Galloway-Rinder auf der Weide bei stimmungsvollem Licht'
    },
    intro: {
      eyebrow: 'Scroll Storytelling',
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
        image: '/media/farm-mara.jpg',
        imageAlt: 'Mara – ruhige Leittier-Dame der Galloway-Herde'
      },
      {
        name: 'Bram',
        age: '4 Jahre',
        detail: 'Neugieriger Bulle, bekannt für Gelassenheit und starke Präsenz.',
        image: '/media/farm-bram.jpg',
        imageAlt: 'Bram – neugieriger Galloway-Bulle mit starker Präsenz'
      },
      {
        name: 'Nola',
        age: '2 Jahre',
        detail: 'Jungtier mit hoher Vitalität und markantem Fell.',
        image: '/media/farm-nola.jpg',
        imageAlt: 'Nola – vitales Galloway-Jungtier mit markantem Fell'
      }
    ]
  },
  partnerships: {
    seoTitle: 'Partnerschaften – Galloway Getaway',
    seoDescription:
      'Starte Partnerschaften mit Galloway Getaway für regionale Premium-Produkte, Storytelling und hochwertige Markenkooperationen.',
    eyebrow: 'Partnerschaften',
    heading: 'Gemeinsam regionale Premium-Werte schaffen.',
    benefits: [
      'Zugang zu regionalen Premium-Produkten',
      'Transparente Herkunft und Qualitätsnachweise',
      'Gemeinsames Storytelling für Marke & Vertrieb'
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
  }
} as const;
