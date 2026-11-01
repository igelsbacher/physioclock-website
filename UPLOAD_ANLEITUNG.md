# Website-Navigation & Trainingsvorlage

## Website aktualisieren
Alle HTML-Dateien und die vier Sprachordner in das GitHub-Repository `igelsbacher/physioclock-website` übernehmen. Bestehende Dateien ersetzen. Das Hauptmenü jeder Seite enthält jetzt die gleichen sechs Ziele: Funktionen, Hilfe, News, Medizinische Einordnung, Datenschutz und Kontakt (übersetzt je Sprache).

## Trainingsvorlage
- `PhysioClock_Trainingsvorlage_4_Sprachen.csv` ist eine editierbare Tabelle (UTF-8 mit BOM für Excel). Sie enthält vier Beispielzeilen, je eine auf Deutsch, Englisch, Französisch und Italienisch. Dauer in Sekunden. `koerperteil` verwendet interne deutsche Kategorien wie `Hals`, `Schultern`, `Becken`, `Oberschenkel`.
- **Die derzeitige PhysioClock-App kann CSV-Dateien noch nicht unmittelbar importieren.** Für den CSV-Upload wäre eine eigene Importfunktion in Xcode erforderlich.
- `PhysioClock_Beispielimport_4_Sprachen.json` entspricht dem bestehenden JSON-Backup-Schema und kann in der App über `Hilfe & Informationen → Datensicherung & Löschung → Importieren` geladen werden. **WARNUNG: Dieser Import ersetzt alle vorhandenen Übungen, Trainings-Sets, eigenen Katalogübungen und den Trainingsverlauf. Vorher unbedingt ein vollständiges JSON-Backup exportieren.** Nur zum Testen mit gesicherten Daten verwenden.
- Die eingetragenen Sprachen in der CSV sind eine Kennzeichnung der Beispieltexte. Eigene Übungsnamen werden in der App nicht automatisch übersetzt.

Entwickler: Heinz Josef Igelsbacher | Kontakt: iphysioclock@gmail.com
