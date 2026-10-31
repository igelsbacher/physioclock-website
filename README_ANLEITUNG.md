# PhysioClock – Website über GitHub Pages veröffentlichen

## Vor Veröffentlichung unbedingt ausfüllen

- In `datenschutz.html`, `impressum.html`, `support.html`: `[ ... ]` Platzhalter durch richtige Angaben ersetzen.
- Datenschutztext gegen den tatsächlich veröffentlichten App-Build und Open-Meteo-Datenflüsse prüfen.
- Wetterlizenz und Rechte an Übungsinhalten klären.
- App Store-Link erst einfügen, wenn der Store-Eintrag live ist.
- Die dargestellte App ist eine CSS-Demo; keine behaupteten echten Screenshots.

## In wenigen Schritten auf GitHub Pages

1. Auf https://github.com ein Konto anmelden oder erstellen.
2. Oben rechts `+` → `New repository`. Repository-Name z. B. `physioclock-website`, Sichtbarkeit `Public`, `Create repository`.
3. `Add file` → `Upload files` und **den Inhalt dieses Ordners**, nicht das ZIP als eine Datei, hochladen. Wichtig: `index.html` muss im Repository-Stamm liegen. Änderungen committen.
4. `Settings` → `Pages` → `Build and deployment` → `Deploy from a branch`.
5. Branch `main`, Ordner `/(root)` auswählen und `Save`.
6. Webseite unter `https://DEIN-GITHUB-NAME.github.io/physioclock-website/` besuchen. Die Publikation kann einige Minuten dauern.
7. Teste die Seiten `/datenschutz.html`, `/support.html` und `/impressum.html` und prüfe alle Links auf dem iPhone.
8. App Store Connect → `App Privacy` → Privacy Policy URL: öffentliche URL der Datei `datenschutz.html`; Support URL: `support.html`.

## Eigene Domain (optional)

Domain bei einem Registrar erwerben (z. B. `physioclock.ch`, Verfügbarkeit prüfen). In `Settings` → `Pages` → `Custom domain` die Domain eintragen, passende DNS-Einträge beim Registrar setzen und `Enforce HTTPS` einschalten, sobald verfügbar.

## Aktualisieren

Dateien auf GitHub bearbeiten und committen oder erneut hochladen. GitHub Pages veröffentlicht die Änderungen automatisch.

## Hinweise

Bei einem kostenlosen GitHub-Account ist das Seiten-Repository öffentlich. Keine privaten Dokumente, personenbezogenen Daten oder App-Schlüssel hochladen. Es ist eine statische Website, keine Benutzerverwaltung und keine App-Backend-Lösung.
