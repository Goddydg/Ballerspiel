# Ballerspiel

Weltraum-Ballerspiel im Stil der 80er und 90er: Dein Schiff fliegt nach oben, von oben kommen Massen von Aliens. Du stellst unterwegs ein immer größeres Team zusammen und ballerst alles weg. Läuft im Browser, am besten am Handy im Hochformat.

**Spielen:** https://goddydg.github.io/Ballerspiel/

## Auf den Home-Bildschirm

Am Handy die Seite öffnen und „Zum Home-Bildschirm hinzufügen“ wählen (iPhone: Teilen-Knopf, Android: Menü ⋮). Dann startet das Spiel mit eigenem Icon im Vollbild, auf Android direkt im Hochformat.

## Steuerung

- **Handy:** Finger irgendwo auf den Bildschirm legen und ziehen, am besten unterhalb des Schiffs. Das Schiff macht dieselbe Bewegung wie der Finger (etwas verstärkt), springt aber nicht zum Finger. So verdeckt der Finger nichts.
- **PC:** Pfeiltasten oder WASD, alternativ mit der Maus ziehen. `P` oder `Esc` = Pause.
- Geschossen wird automatisch.

## So läuft ein Level

- **Tore:** Immer wieder kommen zwei Tore nebeneinander, eines links und eines rechts. Grüne Tore vergrößern dein Team (`+8`, `×2`, selten `×3`), rote verkleinern es (`−15`). Schießt du auf ein Tor, steigt seine Zahl langsam. Der kleine Balken unter der Zahl zeigt, wie weit es noch bis zum nächsten Punkt ist. Aus einem roten Tor ein grünes zu machen, kostet also richtig Feuerkraft.
- **Team:** Deine Begleiter (grüne Mini-Schiffe) fliegen in Formation um dich herum und schießen mit. Wer getroffen wird oder einen größeren Gegner rammt, ist weg. Kleine Schwärmer und Kamikaze-Pfeile übersteht ein Begleiter manchmal. Höchstens 100 passen ins Team, was darüber hinausgeht, gibt Kristalle.
- **Gegner:** Lila Schwärmer (kommen in Massen, sogar als Wand quer über den Bildschirm mit einer Lücke), rote Untertassen, orange Kamikaze-Pfeile, grüne Glotzer, die zurückschießen, und gepanzerte Käfer. Goldene Frachter haben immer eine Kiste dabei.
- **Axtmonster:** Zur Hälfte des Levels kommt der **Axtwüterich**, am Ende der **Axtkoloss**. Wenn das Monster die Axt hebt, blinkt unter ihm eine rote Bahn: Raus da! Der Hieb fegt die ganze Bahn bis nach unten leer, auch dein Team.
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

Alles steckt in `index.html` (Canvas, Web Audio für Geräusche und Chiptune-Musik, keine Abhängigkeiten, kein Build-Schritt). Schnelltest: `node tools/smoke-test.js` (braucht Playwright). Icons neu erzeugen: `node icons/make-icons.js` (zeichnet mit den Figuren aus dem Spiel).
