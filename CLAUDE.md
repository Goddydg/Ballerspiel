# Ballerspiel

Vertikales Weltraum-Ballerspiel (Retro-Shoot-'em-up, Gegner kommen von oben, Hochformat) mit Team-Wachstum über Tore, Massen von Gegnern, Axt-Bossen, Beute und Belohnung am Levelende. Läuft im Browser, veröffentlicht über GitHub Pages: https://goddydg.github.io/Ballerspiel/

## Zusammenarbeit

- Der Besitzer spricht Deutsch und spielt vor allem am Handy. Antworten, Commit-Nachrichten, Pull Requests und alle Texte im Spiel auf Deutsch. Code-Kommentare auf Englisch, knapp.
- Arbeitsweise: neuer Branch von `main`, Änderung umsetzen und testen, pushen, dann fragen, ob übernommen werden soll. Erst nach einem „Ja“ einen Pull Request erstellen und mergen.
- Bei Wünschen zu Aussehen: Screenshots zeigen. Geräusche können nicht angehört werden; das offen sagen.
- `README.md` mit jeder Funktion aktuell halten (Spielerdoku auf Deutsch).

## Aufbau

Alles in `index.html`. Abschnitte im Skript (`/* ---------- name ---------- */`): utils, save (`localStorage` `ballerspiel-save`, gespeicherte Spielstände in `ballerspiel-slots` – nur Fortschritt, keine Einstellungen, Hangar-Verbesserungen `UPG`, Waffen `WPN`), canvas (Weltkoordinaten: `x` = nach vorn/oben, Länge `VW` 720–1200; `y` = seitlich, 540 breit; die Welt wird um −90° gedreht gezeichnet, Bildschirmpunkt = `toS(x,y)` = `(y, VW−x)`; Texte und HUD in `drawLabels`/`drawTexts`/`drawHUD` in Bildschirmkoordinaten), sprites (vorgerenderte Offscreen-Canvases, `…F` = weiße Treffer-Version), sound (Web Audio + Chiptune-Schleife), state (`ET` Gegnertypen, `startLevel`), team (Begleiter, Formation `slot`), director (Wellen, Tore), boss (Axtwüterich = Zwischenboss, Axt-Logik mit Zuständen raise/chop; Endgegner wechseln je Level über `BOSS_ORDER`/`BDEF`), final boss abilities (`BOSS_ATK` je Art, Zeitplan `sched` statt setTimeout, Gefahren `beams`/`lanes`/`wells` sowie `corridors` (heißer Draht, Gang-Mitte `corC`)/`ringwaves`/`strikes`/`swalls` (Wellenwände); Zeichnung in `BOSS_DRAW`; `BS.spawnBoss(false,'krake')` zum Testen), loot, enemies, weapons, collision grid, update, drawing, screens, level reward (Truhe, Karten).

Weitere Dateien: `manifest.webmanifest` und `icons/` (Home-Bildschirm-Icon, neu erzeugen mit `node icons/make-icons.js`), `tools/smoke-test.js`.

Test-Hooks: `window.BS` (`startLevel`, `update`, `spawnBoss`, `winLevel` …).

## Testen

- `node tools/smoke-test.js [1,3]` spielt Levels mit Autopilot (unverwundbar) und meldet Skriptfehler.
- Bildschirmfotos mit Playwright: Spiel per `BS.startLevel(n)` starten und mit `BS.update(1/60)` in einer Schleife vorspulen.
- Immer auf Handygröße prüfen, vor allem hoch (390×844), aber auch quer (844×390): kein seitliches Scrollen, Menüs scrollbar statt abgeschnitten.
