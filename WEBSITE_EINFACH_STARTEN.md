# PhysioClock: verständlicher Einstieg für alle Altersgruppen

Die Website stellt den einfachen Modus in den Vordergrund, ohne Besucher nach Alter einzuteilen. Stand der beschriebenen App-Funktionen: 3.18.1 Build 50.

## Änderungen
- Neue Startseiten in DE/EN/FR/IT und deutsche Hauptseite: klare Nutzenbeschreibung, einfache Navigation, schematische Timeransicht, drei Einstiegsschritte, Vergleich beider Modi und vier aufklappbare Einstiegsfragen.
- Vier neue Seiten `de/en/fr/it/einfach-starten.html`: Moduswahl, Programm auswählen, Vorlage bearbeiten und unter neuem Namen speichern, Training starten/pausieren/beenden und Kopie wiederfinden.
- Direkte Einstiege aus Hilfe, Lernzentrum und Moduserklärung. Die Moduserklärung beschreibt jetzt auch Speichern unter neuem Namen.
- `readable.css`: grössere Grundschrift, grössere Hauptnavigation und Schaltflächen, sichtbare Tastatur-Fokusrahmen, Umbruch bei schmalen Fenstern, zusätzliche Kontraste bei entsprechender Systemeinstellung, Berücksichtigung reduzierter Bewegung. Die neue Startseite verwendet keine automatische Symbolanimation.
- Vorhandene Trainingsmaterialien, interaktive Vorlagen und Katalogdaten bleiben erhalten. Rechtliche Haupttexte und archivierte Fassungen wurden nicht inhaltlich geändert.
- Keine neuen Tracker, externen Schriften, Speicherpräferenzen oder zusätzlichen Konten. Keine erfundenen Kundenstimmen oder medizinischen Erfolgsversprechen. Die Timeransicht ist ausdrücklich eine Illustration, kein App-Screenshot.

## Geprüft
- 97 HTML-Seiten: alle lokalen Links und Sprungmarken vorhanden.
- Vier Sprachfassungen: Startseiten, sechs Anleitungsschritte, FAQ, Sprachverknüpfungen und Modusvergleich.
- DOM-Struktur und beschriftete Links. Berechnete Hauptkontrastpaare mindestens 7:1; dies ist keine WCAG-Zertifizierung.
- Browserprüfung der deutschen Desktop-Startseite und Anleitung; Navigation und Öffnen der Speicher-FAQ funktionieren.
- Rechtliche Haupttexte, archivierte Seiten und alle 217 bestehenden Nicht-HTML-Dateien erhalten.
- ZIP-Integrität vor der Übergabe.

Noch offen: echte iPhone-/iPad-/Android- und Screenreader-Abnahme sowie Prüfung bei grossen Zoomstufen. Responsive CSS wurde vorbereitet, aber kein umfassender Geräte- oder Barrierefreiheitstest durchgeführt.

## Veröffentlichen
Den gesamten ZIP-Inhalt in das bestehende GitHub-Website-Repository übernehmen. Besonders `readable.css` und die vier `einfach-starten.html`-Dateien mit hochladen. Vorhandene Dateien ersetzen. Keine zusätzliche Ordnerebene anlegen. Die Veröffentlichung erfolgt wie bisher über GitHub Pages; dieses Paket wurde nicht automatisch auf die öffentliche Website gestellt.
