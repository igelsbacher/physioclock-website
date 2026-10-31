# PhysioClock

**Trainieren. Fortschritt sehen. Dranbleiben.**

PhysioClock ist eine native iPhone-App zur zeitlichen Organisation persönlich ausgewählter Bewegungs- und Physiotherapieübungen. Sie kombiniert einen übersichtlichen Übungstimer mit einem anpassbaren Übungskatalog, einem Trainingstagebuch und einer Monatsübersicht.

> **Projektstatus:** In Entwicklung und Vorbereitung auf eine kostenlose Veröffentlichung im Apple App Store. Eine öffentliche Verfügbarkeit im App Store wird damit noch nicht zugesichert.

🌐 **Website:** https://igelsbacher.github.io/physioclock-website/index.html  
📰 **Neuigkeiten:** https://igelsbacher.github.io/physioclock-website/news.html  
🛟 **Hilfe & Support:** https://igelsbacher.github.io/physioclock-website/support.html  
🔒 **Datenschutz:** https://igelsbacher.github.io/physioclock-website/datenschutz.html  
✉️ **Kontakt:** [iphysioclock@gmail.com](mailto:iphysioclock@gmail.com)

## Funktionen

- **Individuelle Trainingsprogramme:** Übungen mit frei einstellbarer Dauer und automatischem Wechsel.
- **Übungskatalog:** 25 vordefinierte Übungen für Hals/Nacken, Schultern, Wirbelsäule/Rumpf/Becken, Dehnung und Oberschenkel; Ergänzung durch eigene Übungen.
- **Übersichtliche Trainingsanzeige:** Aktuelle Übung, verbleibende Zeit und voraussichtliches Trainingsende im Format `HH:mm`.
- **Hoch- und Querformat:** Gut lesbare Darstellung für die Nutzung während des Trainings.
- **Trainingstagebuch:** Lokal gespeicherte Einheiten und tatsächlich absolvierte Trainingsdauer.
- **Monatskalender:** Farbliche Auswertung je Trainingstag (rot: unter 10 Minuten; gelb: 10–30 Minuten; grün: über 30 Minuten; neutral: keine aufgezeichnete Zeit).
- **Wetteranzeige:** Wetterinformationen für den freigegebenen Standort.
- **Einstellungen:** Optionale Signale und Verwaltung der eigenen Übungsdaten.

Einzelne Funktionen können sich bis zur öffentlichen Veröffentlichung ändern.

## Technologie

- **iOS-App:** Swift und SwiftUI, entwickelt mit Xcode.
- **Website:** Statische HTML-/CSS-Seiten, veröffentlicht über GitHub Pages.
- **Trainingsdaten:** Lokale Speicherung auf dem iPhone; die Website benötigt kein Benutzerkonto.
- **Wetter:** Externer Wetterdienst (Open-Meteo); Angaben zur Datenverarbeitung und Nutzung unter [Datenschutz](https://igelsbacher.github.io/physioclock-website/datenschutz.html).

## Aufbau dieses Repositories

Dieses Repository (`physioclock-website`) enthält die öffentliche Informations- und Support-Website, **nicht zwingend den vollständigen SwiftUI-Quellcode der iPhone-App**.

| Datei | Inhalt |
| --- | --- |
| `index.html` | Startseite und Vorstellung von PhysioClock |
| `news.html` | Neuigkeiten und Projektinformationen |
| `support.html` | Bedienung und Support |
| `datenschutz.html` | Datenschutzhinweise |
| `impressum.html` | Entwickler- und rechtliche Angaben |
| `README.md` | Diese Projektübersicht |

Weitere Design- und Asset-Dateien können im Repository enthalten sein.

## Website lokal ansehen

1. Repository herunterladen oder klonen.
2. `index.html` im Browser öffnen.
3. Für die Veröffentlichung in GitHub unter **Settings → Pages** als Quelle den Branch `main` und den Ordner `/ (root)` auswählen.

Öffentliche Adresse: https://igelsbacher.github.io/physioclock-website/index.html

## Feedback und Fehlermeldungen

Fehler, Fragen und Verbesserungsvorschläge bitte an **[iphysioclock@gmail.com](mailto:iphysioclock@gmail.com)** senden. Hilfreich sind die App-Version, die iOS-Version, eine kurze Beschreibung und die Schritte, mit denen sich das Problem nachvollziehen lässt.

**Bitte keine medizinischen Befunde oder anderen sensiblen Gesundheitsinformationen per E-Mail oder in öffentlichen GitHub-Issues übermitteln.**

## Medizinischer Hinweis

PhysioClock ist ein Hilfsmittel zur **Organisation und zeitlichen Begleitung** persönlich ausgewählter Übungen. Die App stellt **keine Diagnosen**, ersetzt **keine ärztliche oder physiotherapeutische Beratung** und erstellt **keinen individuellen Behandlungsplan**. Ob eine Übung geeignet ist, sollte bei gesundheitlichen Beschwerden mit entsprechend qualifizierten Fachpersonen abgeklärt werden. Bei Schmerzen, Schwindel oder anderen auffälligen Beschwerden ist das Training zu unterbrechen und gegebenenfalls medizinischer Rat einzuholen.

## Datenschutz

Trainingsdaten werden nach dem vorgesehenen App-Konzept lokal auf dem Gerät verwaltet. Die Wetterfunktion benötigt – nach Freigabe – Standortinformationen und ruft Daten bei einem externen Wetterdienst ab. Massgeblich für die tatsächlich veröffentlichte Version sind die [Datenschutzhinweise](https://igelsbacher.github.io/physioclock-website/datenschutz.html) und die Angaben im App Store. Datenschutz- und Rechtstexte werden vor Veröffentlichung abschliessend geprüft.

## Entwickler

**Heinz Josef Igelsbacher**  
E-Mail: [iphysioclock@gmail.com](mailto:iphysioclock@gmail.com)  
Website: https://igelsbacher.github.io/physioclock-website/index.html

## Nutzungsrechte

Die öffentliche Zugänglichkeit dieses Repositories bedeutet nicht automatisch, dass der App-Code oder die Inhalte unter einer Open-Source-Lizenz stehen. **Es wurde hier keine Open-Source-Lizenz festgelegt.** Für eine Weiterverwendung oder Lizenzanfrage bitte den Entwickler kontaktieren.
