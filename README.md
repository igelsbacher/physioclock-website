# PhysioClock

**Trainieren. Fortschritt sehen. Dranbleiben.**

PhysioClock ist eine in **Swift und SwiftUI** entwickelte iPhone-App zur Organisation selbst ausgewählter Bewegungs- und Physiotherapieübungen. Die App kombiniert individuell einstellbare Übungsintervalle, wiederverwendbare Trainings-Sets und ein lokales Trainingstagebuch. Diese Repository enthält die **offizielle mehrsprachige Projektwebsite** – nicht den vollständigen iOS-Quellcode.

> **Status:** PhysioClock **3.0.0 (Build 18)** ist ein Entwicklungsstand. Die kostenlose Veröffentlichung im Apple App Store ist in Vorbereitung. Es handelt sich noch nicht um eine von Apple freigegebene App-Store-Version.

## 🌐 Website und Sprachen

| Sprache | Startseite | Hilfe | News | Datenschutz | Rechtliches / Kontakt |
| --- | --- | --- | --- | --- | --- |
| 🇩🇪 Deutsch | [Start](https://igelsbacher.github.io/physioclock-website/de/index.html) | [Hilfe](https://igelsbacher.github.io/physioclock-website/de/support.html) | [News](https://igelsbacher.github.io/physioclock-website/de/news.html) | [Datenschutz](https://igelsbacher.github.io/physioclock-website/de/datenschutz.html) | [Kontakt](https://igelsbacher.github.io/physioclock-website/de/impressum.html) |
| 🇬🇧 English | [Home](https://igelsbacher.github.io/physioclock-website/en/index.html) | [Support](https://igelsbacher.github.io/physioclock-website/en/support.html) | [News](https://igelsbacher.github.io/physioclock-website/en/news.html) | [Privacy](https://igelsbacher.github.io/physioclock-website/en/datenschutz.html) | [Legal](https://igelsbacher.github.io/physioclock-website/en/impressum.html) |
| 🇫🇷 Français | [Accueil](https://igelsbacher.github.io/physioclock-website/fr/index.html) | [Aide](https://igelsbacher.github.io/physioclock-website/fr/support.html) | [Actualités](https://igelsbacher.github.io/physioclock-website/fr/news.html) | [Confidentialité](https://igelsbacher.github.io/physioclock-website/fr/datenschutz.html) | [Contact](https://igelsbacher.github.io/physioclock-website/fr/impressum.html) |
| 🇮🇹 Italiano | [Home](https://igelsbacher.github.io/physioclock-website/it/index.html) | [Supporto](https://igelsbacher.github.io/physioclock-website/it/support.html) | [Novità](https://igelsbacher.github.io/physioclock-website/it/news.html) | [Privacy](https://igelsbacher.github.io/physioclock-website/it/datenschutz.html) | [Contatti](https://igelsbacher.github.io/physioclock-website/it/impressum.html) |

**Allgemeine Website:** https://igelsbacher.github.io/physioclock-website/

Die iPhone-App öffnet die zur ausgewählten App-Sprache passende Website- bzw. News-Seite. Beim ersten Start ist **Deutsch** voreingestellt.

## ✨ Funktionen der iPhone-App

- **Trainingsplanung:** Übungen hinzufügen, bearbeiten, sortieren und mit individuellen Intervallen versehen.
- **Übungskatalog:** Rund 25 vorgegebene Übungen aus Bereichen wie Hals/Nacken, Schultern, Rumpf/Becken und Oberschenkel; eigene Übungen ergänzbar. Körperteil-Zuordnungen können ausgewählt werden. **Keine ICF-Codes.**
- **Trainings-Sets:** Benannte Übungsprogramme erstellen, speichern, laden, ändern, umbenennen und löschen.
- **Trainingsanzeige:** Aktuelle Uhrzeit, voraussichtliches Trainingsende, Countdown sowie separate Fortschrittsanzeigen für die aktuelle Übung und das gesamte Programm. Hoch- und Querformat.
- **Steuerung:** Start, Pause, Weiter, Zurücksetzen und Ende. Ton und Vibration sind optional und standardmässig deaktiviert.
- **Trainingstagebuch:** Absolvierte Dauer, Datum und Abschlussstatus; einzelne Einträge löschbar.
- **Monatskalender:** Farbige Tagesanzeige nach absolvierter Trainingszeit (rot: unter 10 Minuten, gelb: 10–30 Minuten, grün: über 30 Minuten; Tage ohne erfasstes Training neutral).
- **Datensicherung:** Manueller JSON-Export und -Import der Trainingsdaten und Einstellungen sowie eine Löschfunktion.
- **Mehrsprachigkeit:** Deutsch, Englisch, Französisch und Italienisch; Standardübungen und Benutzeroberfläche werden sprachabhängig angezeigt. Eigene Bezeichnungen werden nicht automatisch übersetzt.
- **Hilfe & Informationen:** Nutzungshinweise, Disclaimer, Datenschutz, Informationen zum Entwickler, Sprachauswahl sowie Verweise zur Website und zu News.

**Nicht enthalten:** eine Wetteranzeige, ein Nachrichtenticker oder eine Diagnosefunktion.

## 🧰 Technologie

| Komponente | Technologie |
| --- | --- |
| iPhone-App | Swift, SwiftUI, Xcode |
| Datenspeicherung | Lokal auf dem iPhone; manueller JSON-Export/Import |
| Projektwebsite | HTML und CSS |
| Hosting | GitHub Pages (HTTPS) |
| Sprachen | de, en, fr, it |

## 🗂️ Repository-Struktur

```text
physioclock-website/
├── index.html                 # Einstieg / Sprachwahl
├── styles.css                 # Gemeinsame Gestaltung
├── favicon.svg                # Website-Symbol
├── de/
│   ├── index.html
│   ├── support.html
│   ├── news.html
│   ├── datenschutz.html
│   └── impressum.html
├── en/                        # Dieselben Seiten auf Englisch
├── fr/                        # Dieselben Seiten auf Französisch
├── it/                        # Dieselben Seiten auf Italienisch
├── support.html               # Kompatibilitätsseite
├── news.html
├── datenschutz.html
├── impressum.html
└── README.md
```

## 🔐 Datenschutz und Datensicherung

PhysioClock ist für lokale Trainingsplanung und Trainingsaufzeichnungen konzipiert. Die App speichert unter anderem ausgewählte Übungen, individuelle Set-Namen, Einstellungen und Trainingseinträge auf dem Gerät. Die Sicherung erfolgt manuell mittels JSON-Datei. Ein automatischer Cloud-Abgleich ist derzeit nicht vorgesehen.

Bei der Weitergabe von exportierten JSON-Dateien ist zu beachten, dass sie Informationen über persönliche Trainingsgewohnheiten enthalten können. Das Löschen der App kann ungesicherte lokale Daten entfernen.

Aktuelle Datenschutzhinweise: [Deutsch](https://igelsbacher.github.io/physioclock-website/de/datenschutz.html) · [English](https://igelsbacher.github.io/physioclock-website/en/datenschutz.html) · [Français](https://igelsbacher.github.io/physioclock-website/fr/datenschutz.html) · [Italiano](https://igelsbacher.github.io/physioclock-website/it/datenschutz.html).

**Vor einer öffentlichen App-Store-Freigabe** müssen die Datenschutzangaben anhand des finalen Builds geprüft und nötigenfalls rechtlich ergänzt werden.

## ⚕️ Medizinischer Hinweis

PhysioClock dient der **Organisation und zeitlichen Begleitung selbst ausgewählter Übungen**. Die App ersetzt keine medizinische Beratung, Diagnose, Physiotherapie oder individuell abgestimmte Behandlung. Die im Katalog aufgeführten Übungen sind allgemeine Beispiele und nicht automatisch für jede Person geeignet. Bei Schmerzen, Schwindel oder anderen Beschwerden eine Übung unterbrechen und fachlichen Rat einholen.

## 🛠️ Support, Fehler und Ideen

Fehlermeldungen, Fragen und Verbesserungsvorschläge bitte an **[iphysioclock@gmail.com](mailto:iphysioclock@gmail.com)** senden. Hilfreich sind App-Version und Buildnummer, iOS-Version, kurze Schritte zum Nachstellen sowie ein Screenshot **ohne sensible Gesundheitsdaten**. Eine öffentliche Incident-Plattform ist derzeit nicht als offizieller Supportkanal eingerichtet.

## 🗓️ Versionierung und Release-Status

- **Aktuelle Entwicklungsbasis:** `3.0.0 (Build 19)`
- **App Store:** Kostenlose Veröffentlichung geplant; noch nicht eingereicht oder freigegeben.
- **Website:** Mehrsprachig unter GitHub Pages vorbereitet.
- **Offene Freigabepunkte:** Finale Tests auf iPhones, App-Store-Metadaten und Screenshots, vollständige Überprüfung von Rechtstexten und Barrierefreiheit.

## 👤 Entwickler und Kontakt

**Heinz Josef Igelsbacher**  
E-Mail: [iphysioclock@gmail.com](mailto:iphysioclock@gmail.com)  
Website: https://igelsbacher.github.io/physioclock-website/

© 2026 Heinz Josef Igelsbacher. Alle Rechte vorbehalten. **Dieses Repository enthält derzeit keine Open-Source-Lizenz.** Durch die öffentliche Sichtbarkeit auf GitHub werden keine zusätzlichen Nutzungsrechte am Quellcode eingeräumt.
