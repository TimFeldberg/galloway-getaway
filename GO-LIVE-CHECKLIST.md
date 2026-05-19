# Go-Live Checklist für Galloway Getaway

Diese Checkliste hilft euch, die App sauber in die Produktion zu bringen.

## 1. Konfiguration & Domain

- [ ] **Domain in `src/environments/environment.prod.ts` eintragen**
  - Ersetze `https://YOUR-DOMAIN-HERE.de` mit der finalen Domain
  - Diese wird dann für Analytics, Sitemap und andere Dienste verwendet

- [ ] **Domain in `public/robots.txt` aktualisieren**
  - Ersetze `https://YOUR-DOMAIN-HERE` mit der finalen Domain-URL

- [ ] **Domain in `public/sitemap.xml` aktualisieren**
  - Alle 6 URL-Einträge mit `https://YOUR-DOMAIN-HERE` auf die finale Domain aktualisieren

## 2. Rechtliche Seiten erforderlich (DE)

- [ ] **Impressum** in `src/app/pages/imprint/imprint.page.html`
  - Unternehmensname und -adresse
  - Telefon und E-Mail
  - Gegebenenfalls Registrierungsnummern (Handwerkskammer, etc.)
  - Umsatzsteuer-ID falls vorhanden
  - Haftungsausschluss

- [ ] **Datenschutzerklärung** in `src/app/pages/privacy/privacy.page.html`
  - Verantwortliche Stelle für Datenschutz
  - Hosted Provider und deren Datenschutzerklärung
  - Verwendete Analytics-Tools und deren Tracking-IDs
  - Kontaktdaten für Auskunftsanfragen
  - Betroffenenrechte (DSGVO)

- [ ] **Cookie-Hinweis** in `src/app/pages/cookies/cookies.page.html`
  - Übersicht aller verwendeten Cookies
  - Analyse-Tool Details (z. B. Google Analytics, Matomo)
  - Marketing-Pixel oder Werbe-Cookies
  - Widerrufsoptionen

## 3. Analytics & Monitoring Setup

- [ ] **Google Analytics** (oder alternatives Analyse-Tool)
  - Tracking-ID bereitlegen
  - Script in `src/index.html` oder über Service einfügen
  - Cookie-Consent Integration aktivieren

- [ ] **Error Tracking** (optional, empfohlen)
  - z. B. Sentry, LogRocket
  - Setup in `main.ts` für Production

## 4. Production Build & Testing

- [ ] **Build verifizieren**
  ```bash
  npm run build
  ```
  - Kein Fehler, kein Warning
  - Bundle-Größe ok (aktuell ~336 kB initial, < 1MB max)

- [ ] **Tests erfolgreich**
  ```bash
  npm test -- --watch=false
  ```
  - Alle Tests grün

- [ ] **Local Preview**
  ```bash
  npm run build && npx http-server dist/galloway-getaway
  ```
  - Seite lädt, Navigation funktioniert
  - Mobile-View responsive
  - 404-Seite funktioniert

## 5. SEO & Crawlability

- [ ] **robots.txt** zugänglich
  - `https://YOUR-DOMAIN/robots.txt`

- [ ] **sitemap.xml** zugänglich
  - `https://YOUR-DOMAIN/sitemap.xml`

- [ ] **Favicon** vorhanden
  - `public/favicon.ico` existiert

- [ ] **Web App Manifest** vorhanden
  - `public/manifest.webmanifest` mit icons

## 6. Hosting & Deployment

- [ ] **SSL/HTTPS** aktiviert
  - Certificate gültig
  - Alle Assets über HTTPS geladen

- [ ] **CORS & CSP Header** gesetzt (falls notwendig)
  - Externe Scripts (Analytics, Fonts) freigegeben

- [ ] **Caching-Strategie**
  - `.html` nicht cachen (immer neu laden)
  - `.js`, `.css`, `.woff2` mit long-term cache-headers

- [ ] **Server-Konfiguration** für Single Page App
  - `/` serve `index.html` für alle Unbekannten Routes (damit Router funktioniert)
  - Beispiel für Nginx oder Vercel in Doku hinterlegen

## 7. Finale Tests im Production Build

- [ ] **Performance Check**
  - Lighthouse Score ≥ 80
  - Core Web Vitals ok

- [ ] **Accessibility Check**
  - AXE Scanner / WAVE keine kritischen Fehler
  - Keyboard-Navigation funktioniert
  - Skip-Link funktioniert

- [ ] **Mobile & Responsiveness**
  - iPhone SE (375px) ok
  - iPad (768px) ok
  - Desktop (1920px) ok

- [ ] **Alle Pages aufrufbar**
  - Home, About, Farm, Partnerships, Shop, Calendar
  - Impressum, Datenschutz, Cookie-Hinweis
  - 404-Seite (ungültige URL)

## 8. Go Live Signal

Wenn alle Punkte abgehakt sind:

1. **Staging deployen** (zur finalen Inspektion)
2. **QA/Rechtliche freigeben**
3. **Production deployen**
4. **DNS/Domain auf neuen Server zeigen**

---

**Fragen?** Schau in die Site-Content-Datei: `src/app/content/site-content.ts` — hier sind alle Texte zentral definiert und können schnell angepasst werden.
