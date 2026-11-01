// Plays levels with a simple autopilot (invulnerable) and reports script errors.
// Usage: node tools/smoke-test.js [levels, e.g. 1,3]
const { chromium } = require('playwright');
const path = require('path');
const levels = (process.argv[2] || '1,3').split(',').map(Number);
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1000, height: 560 } });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  await page.goto('file://' + path.resolve(__dirname, '..', 'index.html'));
  for (const L of levels) {
    const r = await page.evaluate(L => {
      const B = window.BS; B.startLevel(L);
      let steps = 0;
      while (steps < 60 * 400) {
        const G = B.G, P = B.P;
        if (G.mode !== 'play' && G.mode !== 'won') break;
        P.inv = 10;
        P.y += (Math.sin(steps / 90) * 200 + 270 - P.y) * 0.05;
        B.update(1 / 60); steps++;
      }
      const G = B.G;
      return { mode: G.mode, kills: G.kills, team: G.maxTeam, crys: G.crys, secs: Math.round(steps / 60) };
    }, L);
    console.log('Level', L, JSON.stringify(r));
  }
  await browser.close();
  if (errors.length) { console.log('FEHLER:\n' + errors.join('\n')); process.exit(1); }
  console.log('OK, keine Skriptfehler');
})();
