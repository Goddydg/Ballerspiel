# Ballerspiel

Weltraum-Ballerspiel im Stil der 80er und 90er: Dein Schiff fliegt nach oben, von oben kommen Massen von Aliens. Du stellst unterwegs ein immer größeres Team zusammen und ballerst alles weg. Läuft im Browser, am besten am Handy im Hochformat.

**Spielen:** https://goddydg.github.io/Ballerspiel/

## Auf den Home-Bildschirm

Am Handy die Seite öffnen und „Zum Home-Bildschirm hinzufügen“ wählen (iPhone: Teilen-Knopf, Android: Menü ⋮). Dann startet das Spiel mit eigenem Icon im Vollbild, auf Android direkt im Hochformat.

## Steuerung

Im Menü wählst du unter **Steuerung** zwischen **Finger** und **Neigen**:

- **Neigen:** Das Schiff fährt in die Richtung, in die du das Handy kippst: rechts/links und nach vorn/hinten. Je stärker du neigst, desto schneller fährt es. Die Haltung beim Levelstart gilt als Mitte. Im Pausemenü kannst du sie mit „Neigen: neu ausrichten“ neu festlegen. Am iPhone fragt Safari einmal nach der Erlaubnis für Bewegung und Ausrichtung. Mit dem Finger ziehen geht zusätzlich immer.
- **Finger (Handy):** Finger irgendwo auf den Bildschirm legen und ziehen, am besten unterhalb des Schiffs. Das Schiff macht dieselbe Bewegung wie der Finger (etwas verstärkt), springt aber nicht zum Finger. So verdeckt der Finger nichts.
- **PC:** Pfeiltasten oder WASD, alternativ mit der Maus ziehen. `P` oder `Esc` = Pause.
- Geschossen wird automatisch.
- **Treffer:** Wirst du getroffen, leuchtet der Bildschirmrand rot auf, es knallt und warnt. Android-Handys vibrieren dazu, beim Abschuss länger (an/aus mit dem Schalter „Vibration“ im Menü oder in der Pause). Auf dem iPhone geht das nicht: Safari lässt Haptik nur beim direkten Antippen eines Schalters zu, nicht von selbst bei einem Treffer.

## So läuft ein Level

- **Tore:** Immer wieder kommen zwei schmale Tore, eines in der linken und eines in der rechten Hälfte, an zufälliger Stelle. Du musst genau hindurchfliegen; fliegst du daneben, passiert nichts („Daneben!“). In höheren Leveln werden die Tore noch schmaler. Grüne Tore vergrößern dein Team (`+5`, und solange dein Team klein ist, auch `×2`), rote verkleinern es (anfangs etwa `−4` bis `−7`, später im Level und in höheren Leveln mehr). Nur Schüsse, die das Tor treffen, zählen. Dann steigt seine Zahl langsam (die Schüsse deiner Begleiter zählen nur zu einem Drittel). Der kleine Balken unter der Zahl zeigt, wie weit es noch bis zum nächsten Punkt ist. Aus einem roten Tor ein grünes zu machen, kostet also richtig Feuerkraft.
- **Team:** Deine Begleiter (grüne Mini-Schiffe) fliegen in Formation um dich herum und schießen mit. Wer getroffen wird oder einen größeren Gegner rammt, ist weg. Kleine Schwärmer und Kamikaze-Pfeile übersteht ein Begleiter manchmal. Höchstens 100 passen ins Team, was darüber hinausgeht, gibt Kristalle.
- **Gegner:** Lila Schwärmer (kommen in Massen, sogar als Wand quer über den Bildschirm mit einer Lücke), rote Untertassen, orange Kamikaze-Pfeile, grüne Glotzer, die zurückschießen, und gepanzerte Käfer. Goldene Frachter haben immer eine Kiste dabei.
- **Bosse:** Zur Hälfte jedes Levels kommt der **Axtwüterich**. Wenn er die Axt hebt, zielt er noch auf dich; erst kurz vor dem Hieb blinkt unter ihm eine rote Bahn: Raus da! Am Levelende wartet ein **Endgegner**, jedes Level ein anderer (ab Level 6 von vorn, aber stärker):

| Level | Endgegner | Fähigkeiten |
| --- | --- | --- |
| 1, 6, … | **Axtkoloss** | Hiebserien mit der Axt (rote Bahn), gezielte Kugelfächer, ruft Schwärmer und Kamikaze-Pfeile |
| 2, 7, … | **Laserkrake** | Laservorhang: Mehrere Bahnen blinken pink, dann feuern die Laser – such die Lücke! Schießt Tintenkleckse, die dich verfolgen (abschießbar), und ruft Untertassen |
| 3, 8, … | **Schwarmkönigin** | Von schießenden Leibwachen umkreist, die deine Schüsse abfangen. **Sturzflug:** Sie markiert deine Bahn gelb und stürzt dann samt Wachen herunter – raus aus der Bahn! Legt Eier: Schlüpfen sie, kommen Schwärmer und die Königin heilt sich. Stachelregen von oben, teils genau auf deine Bahn |
| 4, 9, … | **Frostkoloss** | Eiszapfen fallen in markierten Bahnen (Dreiecke oben am Rand). Eiskugeln frieren dich ein, dann bist du kurz langsam. Eisschild: Solange er leuchtet, prallen deine Schüsse ab |
| 5, 10, … | **Gravitron** | Erzeugt schwarze Löcher, die dich, dein Team und deine Schüsse anziehen – gegensteuern! Verschwindet, taucht woanders auf und feuert einen Kugelring. Spiralen aus Kugeln |
- **Schilde:** Du hältst 3 Treffer aus (mit Verbesserungen mehr), nach einem Treffer bist du kurz unverwundbar.

## Beute

Kisten erkennst du an Farbe und Zeichen:

| Kiste | Wirkung |
| --- | --- |
| Gelb ▲ | Waffe eine Stufe stärker (bis Stufe 6; jede Stufe bringt etwas mehr, aber keine Wunder) |
| Grün + | Mehr Team-Mitglieder |
| Blau ◯ | Ein Schild zurück |
| Buchstabe in Waffenfarbe | Neue Waffe: **B**laster, **S**treuschuss, **L**aser (durchschlägt Gegner), **R**aketen (suchen ihr Ziel, Flächenschaden), Bli**z** (springt von Gegner zu Gegner) |

Kristalle ◆ fliegen dir zu, wenn du nah genug bist. Beute ist eher selten: Kisten lassen vor allem die dicken Gegner, die goldenen Frachter und die Bosse fallen.

## Belohnung und Hangar

- Am Levelende gibt es eine **Schatztruhe** (3× antippen). Was drin ist, ist jedes Mal eine Überraschung:
  - **Nur Kristalle**, dafür doppelt so viele, selten sogar ein **Jackpot** mit vierfacher Menge.
  - **Startvorteil** fürs nächste Level, eins von drei zur Wahl: Verstärkung (+8 Begleiter), Extra-Schild (+1 über dem Maximum), Waffen-Boost (+2 Stufen), Spezialwaffe (Start mit einer anderen Waffe auf Stufe 2) oder Kristallregen (doppelte Kristalle im ganzen Level). Der gewählte Vorteil steht im Menü und gilt nur für den nächsten Start.
  - **Dauerhafte Verbesserung**, eine von drei zur Wahl (wie im Hangar, aber gratis).
- Im **Hangar** kaufst du mit Kristallen dauerhafte Verbesserungen (jede Stufe wird deutlich teurer): Schaden, Feuerrate, Startteam, Schilde, Magnet und Start-Waffenstufe.
- Kristalle behältst du auch, wenn du abgeschossen wirst. Der Fortschritt wird im Browser gespeichert.

## Spielstände und neues Spiel

Im Menü unter **Spielstände**:

- **Aktuellen Stand speichern:** legt eine Kopie deines Fortschritts an (erreichtes Level, Kristalle, Hangar-Verbesserungen). Bis zu 8 Spielstände werden aufgehoben, danach fällt der älteste weg.
- **Neues Spiel:** fängt komplett bei Level 1 ohne Kristalle und Verbesserungen an. Vorher fragt das Spiel, ob du den alten Stand speichern willst.
- **Laden:** holt einen gespeicherten Stand zurück, auf Wunsch wird das aktuelle Spiel vorher gespeichert. **✕** löscht einen Spielstand.
- Ton, Musik und Steuerung bleiben dabei, wie du sie eingestellt hast.
- Die Spielstände liegen im Browser des Handys. Löschst du die Browserdaten, sind sie weg.
- Jedes Level ist länger und voller als das davor. Gegner halten pro Level 40 % mehr aus, Endgegner 60 % mehr.

## Technik

Alles steckt in `index.html` (Canvas, Web Audio für Geräusche und Chiptune-Musik, keine Abhängigkeiten, kein Build-Schritt). Schnelltest: `node tools/smoke-test.js` (braucht Playwright). Icons neu erzeugen: `node icons/make-icons.js` (zeichnet mit den Figuren aus dem Spiel).
