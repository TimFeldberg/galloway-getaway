/**
 * Zentrale Bildkonfiguration – Galloway Getaway
 *
 * Alle Bildpfade, WebP-Varianten und Alt-Texte an einem Ort.
 * Neue Bilder hier eintragen – der Rest des Codes referenziert diese Datei.
 *
 * Verwendung in Templates:
 *   <picture>
 *     <source [attr.srcset]="img.webp" type="image/webp" />
 *     <img [src]="img.jpg" [alt]="img.alt" loading="lazy" decoding="async" />
 *   </picture>
 */

export interface ImageConfig {
  /** Pfad zur JPEG-Datei (Fallback für ältere Browser) */
  jpg: string;
  /** Pfad zur WebP-Datei (primäre Quelle, ~20-30% kleiner) */
  webp: string;
  /** Alt-Text auf Deutsch (wichtig für SEO + Barrierefreiheit) */
  alt: string;
}

/** Hilfsfunktion: Leitet WebP-Pfad aus JPEG-Pfad ab */
export function toWebp(jpgPath: string): string {
  return jpgPath.replace(/\.jpe?g$/i, '.webp');
}

/** Alle Bilder der Website */
export const images = {

  // ─── Startseite ────────────────────────────────────────────────────────────
  hero: {
    jpg:  '/media/hero.jpg',
    webp: '/media/hero.webp',
    alt:  'Galloway-Rinder auf der Weide bei stimmungsvollem Licht'
  },

  highlightNature: {
    jpg:  '/media/highlight-nature.jpg',
    webp: '/media/highlight-nature.webp',
    alt:  'Galloway-Rinder in natürlicher Weidehaltung auf offener Wiese'
  },

  highlightQuality: {
    jpg:  '/media/feature.jpg',
    webp: '/media/feature.webp',
    alt:  'Nahaufnahme eines Galloway-Rindes – sichtbare Premium-Qualität'
  },

  highlightExperience: {
    jpg:  '/media/highlight-experience.jpg',
    webp: '/media/highlight-experience.webp',
    alt:  'Besucher erleben die Galloway-Farm hautnah im Herbstlicht'
  },

  // ─── Über uns ──────────────────────────────────────────────────────────────
  about: {
    jpg:  '/media/about.jpg',
    webp: '/media/about.webp',
    alt:  'Galloway-Rind mit neugierigem Blick – Charakter der Farm'
  },

  // ─── Farm & Tiere ──────────────────────────────────────────────────────────
  farmMara: {
    jpg:  '/media/farm-mara.jpg',
    webp: '/media/farm-mara.webp',
    alt:  'Mara – ruhige Leittier-Dame der Galloway-Herde'
  },

  farmBram: {
    jpg:  '/media/farm-bram.jpg',
    webp: '/media/farm-bram.webp',
    alt:  'Bram – neugieriger Galloway-Bulle mit starker Präsenz'
  },

  farmNola: {
    jpg:  '/media/farm-nola.jpg',
    webp: '/media/farm-nola.webp',
    alt:  'Nola – vitales Galloway-Jungtier mit markantem Fell'
  },

  // ─── Shop ──────────────────────────────────────────────────────────────────
  shopCookies: {
    jpg:  '/media/shop.jpg',
    webp: '/media/shop.webp',
    alt:  'Galloway Cookies Classic – Knusprige Belohnungscookies für Rinder'
  },

  shopBites: {
    jpg:  '/media/shop-bites.jpg',
    webp: '/media/shop-bites.webp',
    alt:  'Heu-Kräuter Bites – schonend getrocknete Kräuter-Snacks für Hoftiere'
  },

  shopMixbox: {
    jpg:  '/media/shop-mixbox.jpg',
    webp: '/media/shop-mixbox.webp',
    alt:  'Farm Treat Mix Box – Mischbox mit Galloway-Tier-Leckerlis'
  },

  // ─── Kalender ──────────────────────────────────────────────────────────────
  calendarJan: {
    jpg:  '/media/calendar-jan.jpg',
    webp: '/media/calendar-jan.webp',
    alt:  'Kalenderblatt Januar – Galloway-Rinder in frostiger Winterstimmung'
  },

  calendarMay: {
    jpg:  '/media/calendar-may.jpg',
    webp: '/media/calendar-may.webp',
    alt:  'Kalenderblatt Mai – Galloway-Herde auf frischem Frühlingsweidegrün'
  },

  calendarSep: {
    jpg:  '/media/calendar-sep.jpg',
    webp: '/media/calendar-sep.webp',
    alt:  'Kalenderblatt September – Galloway-Silhouetten in der Golden Hour'
  },

} as const satisfies Record<string, ImageConfig>;
