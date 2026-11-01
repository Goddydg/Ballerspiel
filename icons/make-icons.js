// Draws the home screen icons with the game's own sprites (SPR).
// Usage: node icons/make-icons.js   (needs Playwright with Chromium)
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const OUT = __dirname;
(async () => {
  const b = await chromium.launch();
  const pg = await b.newPage();
  // reuse the game's vector sprite code so the icon stays sharp at any size
  const src = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  const grab = (a, b2) => src.slice(src.indexOf(a), src.indexOf(b2));
  const code = grab('function poly(', '\n/* ---------- save') + grab('SPR.ship=mk(', 'SPR.drone=mk(');
  const sizes = { 'icon-512.png': 512, 'icon-192.png': 192, 'apple-touch-icon.png': 180, 'favicon-32.png': 32 };
  for (const [name, size] of Object.entries(sizes)) {
    const data = await pg.evaluate(({ size, code }) => {
      const TAU = Math.PI * 2, tiny = size < 64;
      const c = document.createElement('canvas'); c.width = c.height = size;
      const g = c.getContext('2d'); g.scale(size / 512, size / 512);
      // deep space with a purple nebula
      const bg = g.createLinearGradient(0, 0, 0, 512);
      bg.addColorStop(0, '#0a0524'); bg.addColorStop(1, '#1a0838');
      g.fillStyle = bg; g.fillRect(0, 0, 512, 512);
      for (const [x, y, r, col] of [[380, 140, 260, 'rgba(255,63,164,.35)'], [120, 420, 240, 'rgba(60,140,255,.3)']]) {
        const n = g.createRadialGradient(x, y, 0, x, y, r); n.addColorStop(0, col); n.addColorStop(1, 'rgba(0,0,0,0)');
        g.fillStyle = n; g.fillRect(0, 0, 512, 512);
      }
      if (!tiny) {
        let s = 7; const rnd = () => (s = (s * 9301 + 49297) % 233280) / 233280;
        for (let i = 0; i < 70; i++) { g.fillStyle = rnd() < .3 ? '#fff' : '#99a'; const w = rnd() < .2 ? 4 : 2; g.fillRect(rnd() * 512, rnd() * 512, w, w); }
      }
      const SPR = new Function('TAU', 'const SPR={},mk=(w,h,f)=>f;' + code + ';return SPR;')(TAU);
      const spr = (f, x, y, k) => { g.save(); g.translate(x, y); g.scale(k, k); f(g); g.restore(); };
      // laser shots towards the alien
      g.globalCompositeOperation = 'lighter'; g.lineCap = 'round';
      if (!tiny) for (const [x, y, l] of [[300, 236, 60], [330, 268, 46], [250, 300, 50], [372, 210, 36]]) {
        g.strokeStyle = 'rgba(80,200,255,.5)'; g.lineWidth = 14; g.beginPath(); g.moveTo(x, y); g.lineTo(x - l, y + l * .28); g.stroke();
        g.strokeStyle = '#fff'; g.lineWidth = 5; g.stroke();
      }
      // explosion on the alien
      const ex = tiny ? 360 : 392, ey = tiny ? 170 : 180;
      const boom = g.createRadialGradient(ex, ey, 0, ex, ey, tiny ? 120 : 92);
      boom.addColorStop(0, 'rgba(255,255,220,1)'); boom.addColorStop(.35, 'rgba(255,190,60,.9)'); boom.addColorStop(1, 'rgba(255,60,40,0)');
      g.fillStyle = boom; g.beginPath(); g.arc(ex, ey, tiny ? 120 : 92, 0, TAU); g.fill();
      g.globalCompositeOperation = 'source-over';
      if (!tiny) {
        for (let i = 0; i < 12; i++) { const a = i / 12 * TAU, r = 70 + (i % 3) * 14; g.fillStyle = i % 2 ? '#ffd34d' : '#fff'; g.fillRect(ex + Math.cos(a) * r - 5, ey + Math.sin(a) * r - 5, 10, 10); }
        spr(SPR.swarm, ex + 6, ey + 4, 3.2);
        // team ships
        for (const [x, y] of [[120, 196], [96, 268], [128, 386], [176, 418]]) spr(SPR.wing, x, y, 3.4);
      }
      // the hero ship, tilted up towards the alien
      g.save(); g.translate(tiny ? 200 : 230, tiny ? 320 : 316); g.rotate(-0.28);
      const fl = g.createLinearGradient(-200, 0, -60, 0); fl.addColorStop(0, 'rgba(255,90,20,0)'); fl.addColorStop(1, 'rgba(255,220,120,1)');
      g.fillStyle = fl; g.beginPath(); g.moveTo(-64, -22); g.lineTo(-170, 0); g.lineTo(-64, 22); g.fill();
      spr(SPR.ship, 0, 0, tiny ? 6.6 : 5.2);
      g.restore();
      return c.toDataURL('image/png').split(',')[1];
    }, { size, code });
    fs.writeFileSync(path.join(OUT, name), Buffer.from(data, 'base64'));
    console.log('geschrieben:', name);
  }
  await b.close();
})();
