# Galloway Getaway – Website

Offizielle Website von **Galloway Getaway** – gebaut mit Angular 21, deployed auf Netlify.

---

## Inhaltsverzeichnis

1. [Inhalte ändern](#1-inhalte-ändern-keine-programmierkenntnisse-nötig)
2. [Bilder austauschen](#2-bilder-austauschen)
3. [Seite lokal starten](#3-seite-lokal-starten-für-entwickler)
4. [Deployment & Live-Schalten](#4-deployment--live-schalten)
5. [Tests ausführen](#5-tests-ausführen)
6. [Technologie-Übersicht](#6-technologie-übersicht)
7. [Häufige Aufgaben – Kurzreferenz](#7-häufige-aufgaben--kurzreferenz)

---

## 1. Inhalte ändern (keine Programmierkenntnisse nötig)

**Fast alle Texte, Preise, Bilder und Links stehen in einer einzigen Datei:**

```
src/app/content/site-content.ts
```

Diese Datei ist bewusst so gebaut, dass sie ohne tiefes Programmierwissen bearbeitet werden kann.

### Was du dort findest und ändern kannst

| Bereich | Was du ändern kannst |
|---|---|
| `brand` | Website-Name, Kurzbeschreibung, Footer-Text |
| `navigation` | Menü-Einträge (Label + Link) |
| `home.hero` | Hero-Bild, Alt-Text |
| `home.highlights` | Titel, Text und Bild der 3 Story-Blöcke |
| `about` | Überschrift, Fließtext, Bild, Meilenstein-Zeitstrahl |
| `farm.animals` | Name, Alter, Beschreibung und Bild jedes Tieres |
| `shop.products` | Produktname, Preis, Beschreibung, Bild |
| `calendarPurchase` | Texte, Preis (`unitPrice`), Kalender-Monatsvorschauen |
| `partnerships` | Pitch-Text, Vorteils-Liste, Formular-Labels |

### Beispiel: Produktpreis ändern

Datei öffnen: `src/app/content/site-content.ts`

```typescript
// Vorher:
{ name: 'Galloway Cookies Classic', price: 6.9, ... }

// Nachher:
{ name: 'Galloway Cookies Classic', price: 7.5, ... }
```

Einfach die Zahl hinter `price:` ändern, Datei speichern → fertig.

### Beispiel: Text auf der Startseite ändern

```typescript
// In home.highlights:
{
  title: 'Natürliche Haltung',
  text: 'Hier deinen neuen Text eingeben.',
  image: '/media/highlight-nature.jpg'
}
```

### Beispiel: Kalenderpreis ändern

Ganz unten in der Datei:

```typescript
calendarPurchase: {
  unitPrice: 29    // ← Hier den Preis in Euro ändern
}
```

---

## 2. Bilder austauschen

Alle Bilder liegen im Ordner:

```
public/media/
```

### Aktuell genutzte Dateien

| Dateiname | Verwendet für |
|---|---|
| `hero.jpg` | Hero-Hintergrundbild (Startseite, ganz oben) |
| `about.jpg` | Bild auf der Über-uns-Seite |
| `feature.jpg` | Story-Block "Premium Qualität" |
| `highlight-nature.jpg` | Story-Block "Natürliche Haltung" |
| `highlight-experience.jpg` | Story-Block "Erlebnis vor Ort" |
| `farm-mara.jpg` | Tierprofil Mara |
| `farm-bram.jpg` | Tierprofil Bram |
| `farm-nola.jpg` | Tierprofil Nola |
| `shop.jpg` | Shop – Galloway Cookies Classic |
| `shop-bites.jpg` | Shop – Heu-Kräuter Bites |
| `shop-mixbox.jpg` | Shop – Farm Treat Mix Box |
| `calendar-jan.jpg` | Kalender – Januar-Vorschau |
| `calendar-may.jpg` | Kalender – Mai-Vorschau |
| `calendar-sep.jpg` | Kalender – September-Vorschau |

### So tauschst du ein Bild aus

**Option A – Gleicher Dateiname (einfachste Methode):**
1. Neues Foto auf denselben Namen umbenennen (z. B. `hero.jpg`)
2. Altes Bild in `public/media/` überschreiben
3. Fertig – kein Code-Änderung nötig

**Option B – Neuer Dateiname:**
1. Neues Bild in `public/media/` legen (z. B. `hero-sommer.jpg`)
2. In `src/app/content/site-content.ts` den Pfad anpassen:
   ```typescript
   imageUrl: '/media/hero-sommer.jpg'
   ```

### Empfehlungen für neue Bilder

- Format: **JPEG** (`.jpg`) für Fotos
- Heldenbild (`hero.jpg`): mindestens **1920×1080 px**
- Story-Blocks, Tier-Fotos: mindestens **900×640 px**
- Dateigröße: unter **800 KB** pro Bild (für schnelle Ladezeiten)

---

## 3. Seite lokal starten (für Entwickler)

### Voraussetzungen

- [Node.js](https://nodejs.org/) Version 18 oder höher
- Git

### Setup

```bash
# Repository klonen
git clone https://github.com/TimFeldberg/galloway-getaway.git
cd galloway-getaway

# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm start
```

Die Seite öffnet sich unter **http://localhost:4200** und aktualisiert sich automatisch bei Änderungen.

### Nützliche Befehle

```bash
npm start          # Entwicklungsserver starten
npm run build      # Produktions-Build erstellen
npm test           # Tests ausführen
```

---

## 4. Deployment & Live-Schalten

Die Seite wird automatisch deployed, sobald Änderungen in den `main`-Branch auf GitHub gepusht werden.

**Deployment-Pipeline:**
```
Code ändern → git commit → git push → Netlify baut automatisch → Live
```

### Manuell deployen (Netlify Dashboard)

1. [app.netlify.com](https://app.netlify.com) öffnen
2. Projekt **galloway-getaway** auswählen
3. Oben rechts → **"Trigger deploy"** klicken

### Google Analytics einrichten

In der Datei `src/environments/environment.prod.ts` den Platzhalter ersetzen:

```typescript
googleAnalyticsId: 'G-DEINE-ECHTE-ID'
```

Die Measurement-ID findest du in deinem [Google Analytics Dashboard](https://analytics.google.com) unter **Admin → Datenstrom → Mess-ID**.

### Eigene Domain verbinden

1. Im Netlify Dashboard: **Domain management → Add domain**
2. Beim Domain-Anbieter: DNS-Eintrag auf Netlify zeigen lassen (CNAME oder A-Record)
3. HTTPS wird von Netlify automatisch eingerichtet (Let's Encrypt)

---

## 5. Tests ausführen

```bash
npm test
```

Führt alle **40 Unit-Tests** aus. Alle Tests sollten grün sein (✓) bevor du Änderungen eincheckst.

---

## 6. Technologie-Übersicht

| Technologie | Verwendungszweck |
|---|---|
| [Angular 21](https://angular.dev) | Frontend-Framework |
| [TypeScript](https://typescriptlang.org) | Programmiersprache |
| [SCSS](https://sass-lang.com) | Styling |
| [GSAP](https://greensock.com/gsap/) | Scroll-Animationen auf der Startseite |
| [Vitest](https://vitest.dev) | Unit-Tests |
| [Netlify](https://netlify.com) | Hosting & automatisches Deployment |
| [Angular NgOptimizedImage](https://angular.dev/guide/image-optimization) | Optimiertes Bild-Rendering |

### Dateistruktur (wichtigste Dateien)

```
src/
├── app/
│   ├── content/
│   │   └── site-content.ts        ← ALLE Inhalte (Texte, Preise, Bildpfade)
│   ├── pages/
│   │   ├── home/                  ← Startseite
│   │   ├── about/                 ← Über uns
│   │   ├── farm/                  ← Farm & Tiere
│   │   ├── shop/                  ← Shop
│   │   ├── calendar/              ← Kalender kaufen
│   │   └── partnerships/          ← Partnerschaften
│   └── shared/
│       └── services/
│           ├── cookie.service.ts  ← Cookie-Consent Logik
│           └── analytics.service.ts ← Google Analytics
├── environments/
│   └── environment.prod.ts        ← GA-ID, Produktions-URL
public/
└── media/                         ← Alle Bilder (JPG)
```

---

## 7. Häufige Aufgaben – Kurzreferenz

| Aufgabe | Datei | Was ändern |
|---|---|---|
| Produktpreis ändern | `site-content.ts` | `price: 6.9` → neue Zahl |
| Neues Tier hinzufügen | `site-content.ts` | Neues Objekt in `farm.animals` hinzufügen |
| Navigationspunkt umbenennen | `site-content.ts` | `label: '...'` in `navigation` ändern |
| Hero-Bild austauschen | Bild in `public/media/` ersetzen | `hero.jpg` überschreiben |
| Google Analytics ID eintragen | `environment.prod.ts` | `googleAnalyticsId: 'G-...'` |
| Footer-Text ändern | `site-content.ts` | `brand.footerNote` |
| Seite live ansehen | — | [galloway-getaway.netlify.app](https://galloway-getaway.netlify.app) |
