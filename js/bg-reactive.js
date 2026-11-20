// FILE: js/bg-reactive.js — background partikel yang bereaksi terhadap kursor, klik, dan scroll
(function () {
  'use strict';
  var FA = (window.FA = window.FA || {});

  // palet aksen yang bergantian setiap klik
  var PALETTE = [
    { name: 'cyan', hex: '#22d3ee', rgb: [34, 211, 238] },
    { name: 'violet', hex: '#8b5cf6', rgb: [139, 92, 246] },
    { name: 'warm', hex: '#ff5a1f', rgb: [255, 90, 31] }
  ];

  FA.initBg = function () {
    var canvas = document.querySelector('[data-fa-bg]');
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext('2d');
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var dpr = 1, W = 0, H = 0, particles = [], ripples = [], bursts = [];
    var mouse = { x: -9999, y: -9999, active: false };
    var tone = 0, color = PALETTE[0].rgb.slice(), target = PALETTE[0].rgb.slice();
    var scrollY = 0, running = true, last = 0;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var count = Math.max(28, Math.min(90, Math.round((W * H) / 20000)));
      particles = [];
      for (var i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28,
          r: Math.random() * 1.6 + 0.6, z: Math.random() * 0.8 + 0.2
        });
      }
      if (reduce) draw(0);
    }

    function setTone(i) {
      tone = i % PALETTE.length;
      target = PALETTE[tone].rgb;
      var root = document.documentElement.style;
      root.setProperty('--fa-accent', PALETTE[tone].hex);
      root.setProperty('--fa-accent-rgb', target.join(', '));
    }

    function onClick(e) {
      // klik pada tombol/tautan tidak memicu efek besar (hindari mengganggu)
      var t = e.target;
      var interactive = t && t.closest && t.closest('a, button, input, textarea, select, [role="tab"], .fa-modal');
      var x = e.clientX, y = e.clientY;
      ripples.push({ x: x, y: y, r: 0, a: 0.6 });
      for (var i = 0; i < (interactive ? 8 : 26); i++) {
        var ang = Math.random() * Math.PI * 2, sp = Math.random() * 4 + 1.2;
        bursts.push({ x: x, y: y, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp, life: 1, r: Math.random() * 2.4 + 0.8 });
      }
      if (!interactive) setTone(tone + 1);
      if (reduce) draw(0);
    }

    function draw(now) {
      var dt = Math.min(48, now - last || 16); last = now;
      ctx.clearRect(0, 0, W, H);
      // transisi warna halus
      for (var c = 0; c < 3; c++) color[c] += (target[c] - color[c]) * 0.06;
      var col = Math.round(color[0]) + ',' + Math.round(color[1]) + ',' + Math.round(color[2]);
      var level = (FA.audio && FA.audio.level) ? FA.audio.level() : 0; // 0..1 dari showreel

      // cahaya lembut mengikuti kursor
      if (mouse.active) {
        var g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 260);
        g.addColorStop(0, 'rgba(' + col + ',0.10)'); g.addColorStop(1, 'rgba(' + col + ',0)');
        ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      }

      var drift = scrollY * 0.04;
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        if (!reduce) {
          p.x += p.vx * dt * 0.06 * (1 + level * 3); p.y += p.vy * dt * 0.06 * (1 + level * 3);
          if (mouse.active) {
            var dx = p.x - mouse.x, dy = p.y - mouse.y, d2 = dx * dx + dy * dy;
            if (d2 < 22000) { var f = (1 - d2 / 22000) * 1.2; p.x += (dx / (Math.sqrt(d2) + 1)) * f; p.y += (dy / (Math.sqrt(d2) + 1)) * f; }
          }
          if (p.x < -20) p.x = W + 20; else if (p.x > W + 20) p.x = -20;
          if (p.y < -20) p.y = H + 20; else if (p.y > H + 20) p.y = -20;
        }
        var py = (p.y - drift * p.z + H * 4) % H;
        p._py = py;
        ctx.beginPath(); ctx.arc(p.x, py, p.r * (1 + level * 1.6), 0, 6.2832);
        ctx.fillStyle = 'rgba(' + col + ',' + (0.35 + p.z * 0.4) + ')'; ctx.fill();
      }
      // garis penghubung antar partikel yang berdekatan
      var maxD = 120, maxD2 = maxD * maxD;
      for (var a = 0; a < particles.length; a++) {
        for (var b = a + 1; b < particles.length; b++) {
          var dx2 = particles[a].x - particles[b].x, dy2 = particles[a]._py - particles[b]._py, dd = dx2 * dx2 + dy2 * dy2;
          if (dd < maxD2) {
            ctx.strokeStyle = 'rgba(' + col + ',' + (0.16 * (1 - dd / maxD2) + level * 0.12) + ')';
            ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(particles[a].x, particles[a]._py); ctx.lineTo(particles[b].x, particles[b]._py); ctx.stroke();
          }
        }
      }
      // gelombang klik
      for (var r = ripples.length - 1; r >= 0; r--) {
        var rp = ripples[r]; rp.r += dt * 0.55; rp.a -= dt * 0.0011;
        if (rp.a <= 0) { ripples.splice(r, 1); continue; }
        ctx.strokeStyle = 'rgba(' + col + ',' + rp.a + ')'; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(rp.x, rp.y, rp.r, 0, 6.2832); ctx.stroke();
      }
      // percikan klik
      for (var s = bursts.length - 1; s >= 0; s--) {
        var bp = bursts[s]; bp.x += bp.vx; bp.y += bp.vy; bp.vx *= 0.96; bp.vy *= 0.96; bp.life -= 0.02;
        if (bp.life <= 0) { bursts.splice(s, 1); continue; }
        ctx.beginPath(); ctx.arc(bp.x, bp.y, bp.r, 0, 6.2832); ctx.fillStyle = 'rgba(' + col + ',' + bp.life + ')'; ctx.fill();
      }
      if (running && !reduce) requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', function (e) { mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true; }, { passive: true });
    document.addEventListener('pointerleave', function () { mouse.active = false; });
    window.addEventListener('scroll', function () { scrollY = window.scrollY || 0; }, { passive: true });
    window.addEventListener('pointerdown', onClick);
    document.addEventListener('visibilitychange', function () {
      running = !document.hidden;
      if (running && !reduce) requestAnimationFrame(draw);
    });

    FA.setTone = setTone;
    resize();
    if (!reduce) requestAnimationFrame(draw);
  };
})();
