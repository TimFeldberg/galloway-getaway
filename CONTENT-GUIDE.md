# Content Guide – Galloway Getaway

Diese Datei ist die Kurz-Anleitung, um die Website später ohne große Code-Änderungen zu pflegen.

## 1. Zentrale Inhaltsdatei

Fast alle Texte, Labels, Preise, Produktdaten und Bildpfade werden hier gepflegt:

- [src/app/content/site-content.ts](src/app/content/site-content.ts)

Dort findest du Bereiche für:
- `brand`
- `navigation`
- `home`
- `about`
- `farm`
- `partnerships`
- `shop`
- `calendarPurchase`

## 2. Bilder austauschen

Lokale Platzhalter liegen hier:

- [public/media](public/media)

Am einfachsten:
1. echte Bilder mit denselben Dateinamen ersetzen
2. oder neue Dateien ablegen und die Pfade in [src/app/content/site-content.ts](src/app/content/site-content.ts) anpassen

## 3. Hero-Video ändern

Das Hero-Video wird hier gepflegt:

- `home.hero.videoUrl` in [src/app/content/site-content.ts](src/app/content/site-content.ts)

Das Posterbild dazu:
- `home.hero.posterUrl`

## 4. Shop-Inhalte ändern

Produkte liegen hier:
- `shop.products`

Pro Produkt können geändert werden:
- `name`
- `price`
- `description`
- `image`

## 5. Kalender-Produkt ändern

Der kaufbare Kalender liegt hier:
- `calendarPurchase`

Wichtige Felder:
- `heading`
- `description`
- `unitPrice`
- `features`
- `previewMonths`

## 6. SEO ändern

SEO-Titel und Beschreibungen werden ebenfalls zentral gepflegt:
- `home.seoTitle`, `home.seoDescription`
- `about.seoTitle`, `about.seoDescription`
- `farm.seoTitle`, `farm.seoDescription`
- `partnerships.seoTitle`, `partnerships.seoDescription`
- `shop.seoTitle`, `shop.seoDescription`
- `calendarPurchase.seoTitle`, `calendarPurchase.seoDescription`

## 7. Website lokal prüfen

Dev-Server starten:
- `npm run start`

Production-Build prüfen:
- `npm run build`

## 8. Empfehlung für spätere Pflege

Wenn neue echte Inhalte kommen, in dieser Reihenfolge arbeiten:
1. Bilder in [public/media](public/media) ersetzen
2. Texte in [src/app/content/site-content.ts](src/app/content/site-content.ts) anpassen
3. Website im Browser prüfen
4. optional Build mit `npm run build` testen

## 9. Was aktuell nicht jedes Mal geändert werden muss

Normalerweise **nicht nötig**:
- Komponentenlogik in `src/app/pages/**`
- Styles in `src/app/pages/**` und `src/styles/**`
- Routing in [src/app/app.routes.ts](src/app/app.routes.ts)

Diese Struktur ist bereits so vorbereitet, dass meist nur Inhalte und Medien ausgetauscht werden.
