# Website: Einfach / Regulär

## Neue Struktur
- Beim ersten Öffnen stehen zwei grosse Optionen im Vordergrund: Einfach / Regulär (lokalisiert in DE, EN, FR, IT).
- Nach der Wahl erscheint nur der passende Bereich darunter. Erläuterungen, Anleitungen, Datenschutz und Kontakt sind in aufklappbaren Themen enthalten.
- Im regulären Bereich stehen die bisherigen interaktiven Beispiele direkt im jeweiligen Thema: A/B/C-Regler und Setdatei, Zielrechner, Zielfarbenquiz, zufälliges Wochenquiz und Befindensbeispiel.
- Die 100 Übungen und Zeichnungen bleiben im separat erreichbaren Katalog. Der Bilderordner wurde nicht verändert.
- Alle aktuellen Sprachseiten verwenden denselben vollständigen Kopfbereich mit 23 Menüzielen. Er bleibt oben beim Scrollen erreichbar. Die Fusszeile enthält nur Absender und Supportkontakt, kein abweichendes zweites Menü.
- Allgemeine Informationen sind in beiden Bereichen erreichbar. Ein Menülink zum Thema öffnet automatisch den richtigen Bereich und Abschnitt.
- Sprachwechsel auf der Hauptseite behält den ausgewählten Bereich bzw. das Thema. Browser-Zurück/Vorwärts arbeitet über den URL-Anker. Keine Cookies oder neue Speicherung. Die Website-Auswahl verändert keinen App-Modus.
- Archivierte rechtliche Fassungen bleiben unverändert; bestehende Unterseiten und Links bleiben verfügbar. Rechtliche Haupttexte sind unverändert.

## Veröffentlichung in deinem bestehenden GitHub-Repository
1. ZIP entpacken.
2. Die Dateien im Hauptverzeichnis hochladen/ersetzen, insbesondere index.html, navigation.css, navigation.js und exercise-catalog.js. styles.css und readable.css ebenfalls mit übernehmen.
3. In de, en, fr und it jeweils die HTML-Dateien ersetzen. Pro Sprachordner sind es weniger als 100 Dateien; lade jeden Ordner in einem eigenen Durchgang hoch und bestätige jeweils Commit changes.
4. exercise-art muss NICHT erneut hochgeladen werden, wenn die bisherigen Bilder bereits dort sind. Alle Bilddateien sind identisch.
5. Nach dem GitHub-Pages-Deployment die Website neu laden. Bei einer alten Ansicht einmal mit geleertem Browsercache neu laden.

Die ZIP enthält die vollständige Website. Es wurde keine Veröffentlichung auf GitHub ausgeführt.

## Durchgeführte Prüfungen
- 97 HTML-Seiten: lokale Dateien, Links und Sprungmarken; keine doppelten IDs.
- Identisches vollständiges Menü auf allen aktuellen Sprachseiten; alte Archivseiten bleiben historische Fassungen.
- DOM-/Ereignisprüfungen in DE/EN/FR/IT: Erstwahl, gegenseitiges Ausblenden, direkter Themenaufruf, Sprachanhänge, Zurück zur Auswahl und Tastatur-Sprunglink.
- Tatsächlicher Katalog-/Vorlagen-JavaScript-Code in allen vier Sprachen auf Katalog, Vorlagenseite und integrierter Hauptseite: Suche, 100 Katalogeinträge, 189 Zeichnungen, getrennte A/B/C-Zustände, Daueränderung, Begrenzung und additive JSON-Datei.
- Browserprüfung (Desktop, DE): einfacher/regulärer Bereich, Menü, Vorlagenregler von 10 auf 15 Minuten mit korrekter Vorschau, einfache Quizantwort und neue zufällige Wochenaufgabe.
- Rechtliche Haupttexte, Archivseiten und Übungszeichnungen erhalten; ZIP-Integrität geprüft.

Noch offen: echte Mobilgeräte und vollständige Screenreader-/Zoom-Abnahme. Kein formaler Barrierefreiheitsnachweis.
