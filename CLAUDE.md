# Ballerspiel

Horizontales Weltraum-Ballerspiel (Retro-Shoot-'em-up) mit Team-Wachstum über Tore, Massen von Gegnern, Axt-Bossen, Beute und Belohnung am Levelende. Läuft im Browser, veröffentlicht über GitHub Pages: https://goddydg.github.io/Ballerspiel/

## Zusammenarbeit

- Der Besitzer spricht Deutsch und spielt vor allem am Handy. Antworten, Commit-Nachrichten, Pull Requests und alle Texte im Spiel auf Deutsch. Code-Kommentare auf Englisch, knapp.
- Arbeitsweise: neuer Branch von `main`, Änderung umsetzen und testen, pushen, dann fragen, ob übernommen werden soll. Erst nach einem „Ja“ einen Pull Request erstellen und mergen.
- Bei Wünschen zu Aussehen: Screenshots zeigen. Geräusche können nicht angehört werden; das offen sagen.
- `README.md` mit jeder Funktion aktuell halten (Spielerdoku auf Deutsch).

## Aufbau

Alles in `index.html`. Abschnitte im Skript (`/* ---------- name ---------- */`): utils, save (`localStorage` `ballerspiel-save`, Hangar-Verbesserungen `UPG`, Waffen `WPN`), canvas (Welt 540 hoch, Breite `VW` 720–1200), sprites (vorgerenderte Offscreen-Canvases, `…F` = weiße Treffer-Version), sound (Web Audio + Chiptune-Schleife), state (`ET` Gegnertypen, `startLevel`), team (Begleiter, Formation `slot`), director (Wellen, Tore), boss (Axtwüterich/Axtkoloss, Axthieb als Schockwelle), loot, enemies, weapons, collision grid, update, drawing, screens, level reward (Truhe, Karten).

Test-Hooks: `window.BS` (`startLevel`, `update`, `spawnBoss`, `winLevel` …).

## Testen

- `node tools/smoke-test.js [1,3]` spielt Levels mit Autopilot (unverwundbar) und meldet Skriptfehler.
- Bildschirmfotos mit Playwright: Spiel per `BS.startLevel(n)` starten und mit `BS.update(1/60)` in einer Schleife vorspulen.
- Immer auf Handygröße prüfen, quer (844×390) und hoch (390×844): kein seitliches Scrollen, Menüs scrollbar statt abgeschnitten.
