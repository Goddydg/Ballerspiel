# Ballerspiel

Weltraum-Ballerspiel im Stil der 80er und 90er: Dein Schiff fliegt nach rechts, von vorne kommen Massen von Aliens. Du stellst unterwegs ein immer größeres Team zusammen und ballerst alles weg. Läuft im Browser, am besten am Handy im Querformat.

**Spielen:** https://goddydg.github.io/Ballerspiel/

## Steuerung

- **Handy:** Finger irgendwo auf den Bildschirm legen und ziehen. Das Schiff bewegt sich mit, der Finger verdeckt es aber nicht.
- **PC:** Pfeiltasten oder WASD, alternativ mit der Maus ziehen. `P` oder `Esc` = Pause.
- Geschossen wird automatisch.

## So läuft ein Level

- **Tore:** Immer wieder kommen zwei Tore, eines oben und eines unten. Grüne Tore vergrößern dein Team (`+8`, `×2`, `×3`), rote verkleinern es (`−5`). Schießt du auf ein Tor, steigt seine Zahl. So wird auch aus einem roten Tor ein grünes.
- **Team:** Deine Begleiter (grüne Mini-Schiffe) fliegen in Formation um dich herum und schießen mit. Wer ein Alien rammt oder getroffen wird, ist weg. Höchstens 100 passen ins Team, was darüber hinausgeht, gibt Kristalle.
- **Gegner:** Lila Schwärmer (kommen in Massen, sogar als Wand mit einer Lücke), rote Untertassen, orange Kamikaze-Pfeile, grüne Glotzer, die zurückschießen, und gepanzerte Käfer. Goldene Frachter haben immer eine Kiste dabei.
- **Axtmonster:** Zur Hälfte des Levels kommt der **Axtwüterich**, am Ende der **Axtkoloss**. Wenn das Monster die Axt hebt, blinkt ein roter Streifen: Raus da! Der Hieb fegt den ganzen Streifen leer, auch dein Team.
- **Schilde:** Du hältst 3 Treffer aus (mit Verbesserungen mehr), nach einem Treffer bist du kurz unverwundbar.

## Beute

Kisten erkennst du an Farbe und Zeichen:

| Kiste | Wirkung |
| --- | --- |
| Gelb ▲ | Waffe eine Stufe stärker (bis Stufe 6) |
| Grün + | Mehr Team-Mitglieder |
| Blau ◯ | Ein Schild zurück |
| Buchstabe in Waffenfarbe | Neue Waffe: **B**laster, **S**treuschuss, **L**aser (durchschlägt Gegner), **R**aketen (suchen ihr Ziel, Flächenschaden), Bli**z** (springt von Gegner zu Gegner) |

Kristalle ◆ fliegen dir zu, wenn du nah genug bist.

## Belohnung und Hangar

- Am Levelende gibt es eine **Schatztruhe** (3× antippen) mit Bonus-Kristallen und danach **eine von drei Verbesserungen** gratis.
- Im **Hangar** kaufst du mit Kristallen dauerhafte Verbesserungen: Schaden, Feuerrate, Startteam, Schilde, Magnet und Start-Waffenstufe.
- Kristalle behältst du auch, wenn du abgeschossen wirst. Der Fortschritt wird im Browser gespeichert.
- Jedes Level ist länger und voller als das davor, die Gegner halten mehr aus.

## Technik

Alles steckt in `index.html` (Canvas, Web Audio für Geräusche und Chiptune-Musik, keine Abhängigkeiten, kein Build-Schritt). Schnelltest: `node tools/smoke-test.js` (braucht Playwright).
