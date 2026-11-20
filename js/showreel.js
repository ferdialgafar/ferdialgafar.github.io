// FILE: js/showreel.js — Mode Showreel: slideshow sinematik layar penuh + musik (hanya setelah klik)
//
// MUSIK: letakkan file MP3 bebas hak cipta di  assets/audio/showreel.mp3  (mis. dari Pixabay Music / Uppbeat).
// Jika file itu tidak ada, otomatis dipakai musik ambient sintetis (Web Audio) sebagai cadangan.
(function () {
  'use strict';
  var FA = (window.FA = window.FA || {});
  var AUDIO_SRC = 'assets/audio/showreel.mp3';

  var SLIDES = [
    { img: 'assets/img/appfair-2.webp', k: 'Digital Marketing × Teknologi', t: 'Ferdi Algafar', s: 'Content Creator & Digital Marketer dari Bekasi.' },
    { img: 'assets/works/cover-clipper.webp', k: 'Organik, tanpa iklan berbayar', t: '151,4K views', s: 'Video terbaik dari akun clipper yang tumbuh dari nol.' },
    { img: 'assets/img/iklan-1.webp', k: 'Video & Iklan', t: 'Dari ide ke layar', s: 'Film iklan “Good Day x Zombie” dan kampanye IndiHome.' },
    { img: 'assets/works/cover-fakta.webp', k: 'Motion Graphic', t: 'Naskah, suara, visual', s: 'Video 9:16 dengan voice-over, subtitle sinkron, dan sound design.' },
    { img: 'assets/works/cover-gosh.webp', k: 'Live Streaming', t: '70+ jam siaran', s: 'Dalam 20 hari efektif di GOSH Live.' },
    { img: 'assets/img/appfair-4.webp', k: 'Event & Kemitraan', t: '20+ sponsor', s: 'Koordinator Sponsorship APP Fair 2025.' },
    { img: 'assets/img/niagamas-coding.webp', k: 'Teknologi', t: 'Konten + kode', s: 'Dua website perusahaan dan satu set identitas brand.' },
    { img: 'assets/img/about-color.webp', k: 'Terbuka untuk magang', t: 'Mari berkolaborasi', s: 'ferdialghafurr87@gmail.com' }
  ];
  var DUR = 6500;

  FA.initShowreel = function () {
    var toggles = document.querySelectorAll('[data-fa-showreel-toggle]');
    if (!toggles.length) return;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var root, slideEls = [], bars = [], eqBars = [], btnMute, audioEl, ac, analyser, data, gain, synthNodes = [], timer = 0, idx = 0, startT = 0, raf = 0, on = false, muted = false, level = 0, prevFocus = null;

    function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

    function build() {
      root = document.createElement('div');
      root.className = 'fa-reel'; root.setAttribute('role', 'dialog'); root.setAttribute('aria-modal', 'true'); root.setAttribute('aria-label', 'Showreel Ferdi Algafar');
      root.innerHTML =
        '<div class="fa-reel__top"><span class="fa-reel__brand">Ferdi Algafar · Showreel</span><div class="fa-reel__tools">' +
        '<button type="button" class="fa-iconbtn" data-r-mute aria-label="Matikan suara" aria-pressed="false"><i data-lucide="volume-2" aria-hidden="true"></i></button>' +
        '<button type="button" class="fa-iconbtn" data-r-close aria-label="Tutup showreel"><i data-lucide="x" aria-hidden="true"></i></button></div></div>' +
        SLIDES.map(function (s) {
          return '<div class="fa-reel__slide" aria-hidden="true"><img class="fa-reel__img" src="' + esc(s.img) + '" alt="" />' +
            '<div class="fa-reel__cap"><p class="fa-reel__kicker">' + esc(s.k) + '</p><h2 class="fa-reel__title">' + esc(s.t) + '</h2><p class="fa-reel__sub">' + esc(s.s) + '</p></div></div>';
        }).join('') +
        '<p class="fa-reel__hint">Esc untuk keluar · ← → untuk pindah</p>' +
        '<div class="fa-reel__bottom"><div class="fa-reel__eq" aria-hidden="true">' + new Array(7).join('<b></b>') + '</div><div class="fa-reel__progress" aria-hidden="true">' + SLIDES.map(function () { return '<i></i>'; }).join('') + '</div></div>';
      document.body.appendChild(root);
      slideEls = Array.prototype.slice.call(root.querySelectorAll('.fa-reel__slide'));
      bars = Array.prototype.slice.call(root.querySelectorAll('.fa-reel__progress i'));
      eqBars = Array.prototype.slice.call(root.querySelectorAll('.fa-reel__eq b'));
      btnMute = root.querySelector('[data-r-mute]');
      root.querySelector('[data-r-close]').addEventListener('click', stop);
      btnMute.addEventListener('click', toggleMute);
      bars.forEach(function (b, k) { b.addEventListener('click', function () { show(k); }); b.style.cursor = 'pointer'; });
      if (window.lucide && window.lucide.createIcons) window.lucide.createIcons({ root: root });
    }

    /* ---------- audio ---------- */
    function ensureCtx() {
      if (ac) return ac;
      var C = window.AudioContext || window.webkitAudioContext; if (!C) return null;
      ac = new C(); gain = ac.createGain(); gain.gain.value = 0;
      analyser = ac.createAnalyser(); analyser.fftSize = 128; analyser.smoothingTimeConstant = 0.82;
      data = new Uint8Array(analyser.frequencyBinCount);
      gain.connect(analyser); analyser.connect(ac.destination);
      return ac;
    }
    function fade(to, sec) { if (!gain) return; var t = ac.currentTime; gain.gain.cancelScheduledValues(t); gain.gain.setValueAtTime(gain.gain.value, t); gain.gain.linearRampToValueAtTime(to, t + sec); }

    function startSynth() { // musik ambient sintetis: pad + denyut bass + arpeggio (cadangan)
      var t0 = ac.currentTime, roots = [55, 65.41, 49, 73.42], bpm = 96, beat = 60 / bpm, step = 0;
      var pad = ac.createGain(); pad.gain.value = 0.22; pad.connect(gain);
      [0, 7, 12, 16].forEach(function (semi, i) {
        var o = ac.createOscillator(); o.type = i % 2 ? 'sawtooth' : 'triangle'; o.frequency.value = 110 * Math.pow(2, semi / 12); o.detune.value = (i - 1.5) * 6;
        var f = ac.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 700; f.Q.value = 2;
        var l = ac.createOscillator(); l.frequency.value = 0.07 + i * 0.03; var lg = ac.createGain(); lg.gain.value = 260; l.connect(lg); lg.connect(f.frequency);
        o.connect(f); f.connect(pad); o.start(); l.start(); synthNodes.push(o, l);
      });
      function tick() {
        if (!on || !ac) return;
        var now = ac.currentTime, bar = Math.floor(step / 8) % roots.length, r = roots[bar];
        if (step % 2 === 0) { // kick lembut
          var k = ac.createOscillator(), kg = ac.createGain(); k.type = 'sine';
          k.frequency.setValueAtTime(130, now); k.frequency.exponentialRampToValueAtTime(42, now + 0.14);
          kg.gain.setValueAtTime(0.5, now); kg.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
          k.connect(kg); kg.connect(gain); k.start(now); k.stop(now + 0.25);
        }
        if (step % 4 === 2) { // hi-hat
          var len = Math.floor(ac.sampleRate * 0.04), buf = ac.createBuffer(1, len, ac.sampleRate), d = buf.getChannelData(0);
          for (var i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
          var s = ac.createBufferSource(), hg = ac.createGain(), hf = ac.createBiquadFilter(); hf.type = 'highpass'; hf.frequency.value = 7000;
          s.buffer = buf; hg.gain.value = 0.12; s.connect(hf); hf.connect(hg); hg.connect(gain); s.start(now);
        }
        var scale = [0, 3, 7, 10, 12, 15, 19, 22]; // arpeggio minor
        var n = ac.createOscillator(), ng = ac.createGain(); n.type = 'square';
        n.frequency.value = r * 4 * Math.pow(2, scale[(step * 3 + bar) % scale.length] / 12);
        var nf = ac.createBiquadFilter(); nf.type = 'lowpass'; nf.frequency.value = 1800;
        ng.gain.setValueAtTime(0.0001, now); ng.gain.exponentialRampToValueAtTime(0.07, now + 0.01); ng.gain.exponentialRampToValueAtTime(0.0001, now + beat * 0.45);
        n.connect(nf); nf.connect(ng); ng.connect(gain); n.start(now); n.stop(now + beat * 0.5);
        step++; timer = setTimeout(tick, (beat / 2) * 1000);
      }
      tick();
    }

    function startAudio() {
      if (!ensureCtx()) return;
      if (ac.state === 'suspended') ac.resume();
      audioEl = new Audio(AUDIO_SRC); audioEl.loop = true;
      var fell = false;
      function fallback() { if (fell || !on) return; fell = true; audioEl = null; startSynth(); }
      audioEl.addEventListener('error', fallback);
      try {
        var src = ac.createMediaElementSource(audioEl); src.connect(gain);
        var p = audioEl.play(); if (p && p.catch) p.catch(fallback);
      } catch (e) { fallback(); }
      fade(muted ? 0 : 0.8, 1.6);
    }
    function stopAudio() {
      clearTimeout(timer);
      if (gain) { fade(0, 0.5); }
      var a = audioEl, nodes = synthNodes.slice(); synthNodes = [];
      setTimeout(function () {
        if (a) { a.pause(); a.src = ''; }
        nodes.forEach(function (n) { try { n.stop(); } catch (e) {} });
      }, 600);
      audioEl = null;
    }
    function toggleMute() {
      muted = !muted; fade(muted ? 0 : 0.8, 0.3);
      btnMute.setAttribute('aria-pressed', muted ? 'true' : 'false'); btnMute.setAttribute('aria-label', FA.t(muted ? 'Nyalakan suara' : 'Matikan suara'));
      btnMute.innerHTML = '<i data-lucide="' + (muted ? 'volume-x' : 'volume-2') + '" aria-hidden="true"></i>';
      if (window.lucide && window.lucide.createIcons) window.lucide.createIcons({ root: btnMute });
    }

    /* ---------- slideshow ---------- */
    function show(i) {
      idx = (i + SLIDES.length) % SLIDES.length; startT = performance.now();
      slideEls.forEach(function (s, k) { s.classList.toggle('is-active', k === idx); s.setAttribute('aria-hidden', k === idx ? 'false' : 'true'); });
      bars.forEach(function (b, k) { b.style.setProperty('--p', k < idx ? 1 : 0); });
    }
    function loop(now) {
      if (!on) return;
      var p = Math.min((now - startT) / DUR, 1);
      if (bars[idx]) bars[idx].style.setProperty('--p', p.toFixed(3));
      if (p >= 1) show(idx + 1);
      if (analyser && !muted) {
        analyser.getByteFrequencyData(data); var sum = 0, n = Math.min(24, data.length);
        for (var i = 0; i < n; i++) sum += data[i];
        level = Math.min(1, sum / n / 190);
        eqBars.forEach(function (b, k) { b.style.height = (4 + (data[k * 2] / 255) * 22).toFixed(0) + 'px'; });
      } else {
        level *= 0.9; eqBars.forEach(function (b, k) { b.style.height = (4 + Math.abs(Math.sin(now / 260 + k)) * 6).toFixed(0) + 'px'; });
      }
      raf = requestAnimationFrame(loop);
    }

    function onKey(e) {
      if (!on) return;
      if (e.key === 'Escape') { e.preventDefault(); stop(); }
      else if (e.key === 'ArrowRight') show(idx + 1);
      else if (e.key === 'ArrowLeft') show(idx - 1);
      else if (e.key === 'm' || e.key === 'M') toggleMute();
    }

    function start() {
      if (on) return;
      if (!root) build();
      if (FA.i18n) FA.i18n.apply(root);
      on = true; prevFocus = document.activeElement;
      root.classList.add('is-on'); document.body.classList.add('fa-reel-on', 'fa-lock');
      toggles.forEach(function (t) { t.setAttribute('aria-pressed', 'true'); });
      show(0); startAudio();
      root.setAttribute('tabindex', '-1'); root.focus({ preventScroll: true });
      raf = requestAnimationFrame(loop);
    }
    function stop() {
      if (!on) return;
      on = false; cancelAnimationFrame(raf); stopAudio(); level = 0;
      root.classList.remove('is-on'); document.body.classList.remove('fa-reel-on', 'fa-lock');
      toggles.forEach(function (t) { t.setAttribute('aria-pressed', 'false'); });
      if (prevFocus && prevFocus.focus) prevFocus.focus({ preventScroll: true });
    }

    toggles.forEach(function (t) { t.addEventListener('click', function () { on ? stop() : start(); }); });
    document.addEventListener('keydown', onKey);
    FA.showreelStop = stop;
    FA.audio = { level: function () { return on ? level : 0; } }; // dibaca oleh background reaktif
  };
})();
