// FILE: js/main.js — inisialisasi semua modul + animasi GSAP + render data karya & sertifikat
(function () {
  'use strict';
  var FA = (window.FA = window.FA || {});
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasGsap = !!window.gsap;
  if (hasGsap && window.ScrollTrigger) window.gsap.registerPlugin(window.ScrollTrigger);

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function icons(root) { if (window.lucide && window.lucide.createIcons) window.lucide.createIcons(root ? { root: root } : undefined); }

  /* ---------- NAVBAR ---------- */
  function initNav() {
    var nav = $('[data-fa-nav]'), prog = $('[data-fa-progress]'), menu = $('#fa-menu'), burger = $('[data-fa-menu-toggle]');
    var links = $$('[data-fa-link]');
    function onScroll() {
      var y = window.scrollY || 0, max = document.documentElement.scrollHeight - window.innerHeight;
      if (nav) nav.classList.toggle('is-scrolled', y > 20);
      if (prog) prog.style.transform = 'scaleX(' + (max > 0 ? Math.min(y / max, 1) : 0).toFixed(4) + ')';
    }
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

    function setMenu(open) {
      if (!menu || !burger) return;
      menu.classList.toggle('is-open', open); burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', window.FA.t(open ? 'Tutup menu' : 'Buka menu'));
    }
    if (burger) burger.addEventListener('click', function () { setMenu(burger.getAttribute('aria-expanded') !== 'true'); });
    links.forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

    // tautan aktif sesuai section
    if ('IntersectionObserver' in window) {
      var map = {};
      links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { links.forEach(function (l) { l.classList.remove('is-active'); }); var a = map[en.target.id]; if (a) a.classList.add('is-active'); }
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
    }
  }

  /* ---------- TYPER ---------- */
  function initTyper() {
    var el = $('[data-fa-typer]'); if (!el) return;
    var w = 0, c = 0, del = true;
    var base = el.getAttribute('data-words') || '', words = base.split('|').filter(Boolean), out = $('.fa-typer__text', el);
    document.addEventListener('fa:lang', function () {
      if (!window.FA.i18n) return;
      words = window.FA.i18n.words(base); w = 0; c = words[0].length; del = true; out.textContent = words[0];
    });
    if (!out || words.length < 2 || reduce) return;
    c = words[0].length;
    function step() {
      var word = words[w];
      if (del) { c--; out.textContent = word.slice(0, c); if (c <= 0) { del = false; w = (w + 1) % words.length; } setTimeout(step, 38); }
      else { c++; out.textContent = words[w].slice(0, c); if (c >= words[w].length) { del = true; setTimeout(step, 1900); } else setTimeout(step, 70); }
    }
    setTimeout(step, 2400);
  }

  /* ---------- COUNTERS ---------- */
  function initCounters() {
    $$('[data-count]').forEach(function (el) {
      var end = parseFloat(el.getAttribute('data-count')), dec = parseInt(el.getAttribute('data-decimals'), 10) || 0;
      function fmt(v) { return window.FA.i18n ? window.FA.i18n.num(v, dec) : v.toFixed(dec).replace('.', ','); }
      if (reduce || !hasGsap) { el.textContent = fmt(end); return; }
      var o = { v: 0 }; el.textContent = fmt(0);
      window.gsap.to(o, { v: end, duration: 2.2, ease: 'power2.out', delay: 1.4, onUpdate: function () { el.textContent = fmt(o.v); }, onComplete: function () { el.textContent = fmt(end); } });
    });
  }

  /* ---------- HERO ---------- */
  function initHero() {
    if (!hasGsap || reduce) return;
    var g = window.gsap, tl = g.timeline({ defaults: { ease: 'power4.out' } });
    var bars = $('.fa-bars');
    if (bars) {
      bars.classList.add('is-on');
      tl.fromTo('.fa-bars__top', { scaleY: 1 }, { scaleY: 0, duration: 1.15, ease: 'power4.inOut' }, 0.15)
        .fromTo('.fa-bars__bottom', { scaleY: 1 }, { scaleY: 0, duration: 1.15, ease: 'power4.inOut' }, 0.15)
        .add(function () { bars.classList.remove('is-on'); }, 1.4);
    }
    tl.from('[data-hero-line]', { yPercent: 115, duration: 1.2, stagger: 0.13 }, 0.55)
      .from('[data-hero-anim]', { y: 26, opacity: 0, duration: 0.9, stagger: 0.08 }, 0.8)
      .from('.fa-hero__photo', { y: 70, opacity: 0, duration: 1.5 }, 0.6)
      .from('.fa-hero__depth', { opacity: 0, duration: 2, stagger: 0.1 }, 1.0)
      .from('.fa-hero__glow, .fa-orbit', { opacity: 0, scale: 0.85, duration: 1.8 }, 0.5)
      .from('.fa-float', { opacity: 0, scale: 0.8, y: 20, duration: 0.9, stagger: 0.14, ease: 'back.out(1.6)' }, 1.4);

    // 3D: panggung foto miring mengikuti kursor (atau bergoyang pelan di layar sentuh)
    var stage = $('[data-fa-tilt]');
    if (stage) {
      var floats = $$('.fa-float', stage);
      floats.forEach(function (f) { g.set(f, { z: parseFloat(f.getAttribute('data-z')) || 60 }); });
      g.set(stage, { transformPerspective: 1300, transformOrigin: '50% 60%' });
      var sway = g.to(stage, { rotationY: 9, rotationX: -2, duration: 4.2, ease: 'sine.inOut', yoyo: true, repeat: -1 });
      if (window.matchMedia('(hover: hover)').matches) {
        var qry = g.quickTo(stage, 'rotationY', { duration: 0.9, ease: 'power3' }), qrx = g.quickTo(stage, 'rotationX', { duration: 0.9, ease: 'power3' });
        var fq = floats.map(function (f) { return { x: g.quickTo(f, 'x', { duration: 1, ease: 'power3' }), y: g.quickTo(f, 'y', { duration: 1, ease: 'power3' }), d: parseFloat(f.getAttribute('data-depth')) || 20 }; });
        window.addEventListener('pointermove', function (e) {
          if (sway) { sway.kill(); sway = null; }
          var nx = e.clientX / window.innerWidth - 0.5, ny = e.clientY / window.innerHeight - 0.5;
          qry(nx * 26); qrx(ny * -14);
          fq.forEach(function (f) { f.x(nx * f.d); f.y(ny * f.d * 0.7); });
        }, { passive: true });
      }
    }
    // hero memudar saat di-scroll
    if (window.ScrollTrigger) {
      g.to('.fa-hero__copy', { yPercent: -8, opacity: 0.2, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
      g.to('.fa-hero__visual', { yPercent: 10, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
    }
  }

  /* ---------- REVEAL SAAT SCROLL ---------- */
  function initReveal() {
    if (!hasGsap || !window.ScrollTrigger || reduce) return;
    var g = window.gsap;
    $$('[data-reveal]').forEach(function (el) {
      g.from(el, { y: 44, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
    });
    // garis timeline pengalaman terisi mengikuti scroll
    var tl = $('[data-fa-timeline]');
    if (tl) g.to(tl, { '--p': 1, ease: 'none', scrollTrigger: { trigger: tl, start: 'top 70%', end: 'bottom 70%', scrub: true } });
    // gambar About: efek buka tirai
    var about = $('.fa-about__img--duo');
    if (about) g.from('.fa-frame', { clipPath: 'inset(12% 12% 12% 12% round 26px)', scale: 0.94, duration: 1.4, ease: 'power4.out', scrollTrigger: { trigger: '.fa-frame', start: 'top 85%', once: true } });
  }

  /* ---------- WORKS (BENTO GRID) ---------- */
  function initWorks() {
    var grid = $('[data-fa-works]'); var list = FA.works || [];
    if (!grid || !list.length) return;
    grid.innerHTML = list.map(function (w, i) {
      var many = (w.media || []).length > 1, hasVideo = (w.media || []).some(function (m) { return m.type === 'drive'; });
      var metrics = (w.metrics || []).slice(0, 3).map(function (m) { return '<li><b>' + esc(m.value) + '</b>' + esc(m.label) + '</li>'; }).join('');
      var vlink = w.visit && w.links && w.links[0] ? '<a class="fa-work__visit" href="' + esc(w.links[0].url) + '" target="_blank" rel="noopener noreferrer" aria-label="' + esc(w.links[0].label) + '"><i data-lucide="external-link" aria-hidden="true"></i><span>' + esc(w.visit) + '</span></a>' : '';
      return '<div role="button" tabindex="0" class="fa-work' + (w.cols >= 7 ? ' fa-work--wide' : '') + (w.focus === 'top' ? ' fa-work--shot' : '') + '" data-i="' + i + '" data-filter="' + esc(w.filter) + '" style="--c:' + (w.cols || 6) + ';--r:' + (w.rows || 2) + '" aria-label="Buka detail: ' + esc(w.title) + '">' +
        '<img class="fa-work__img' + (w.focus === 'top' ? ' fa-work__img--top' : '') + '" src="' + esc(w.cover) + '" alt="" loading="lazy" />' +
        '<span class="fa-work__top"><span class="fa-work__cat">' + esc(w.category) + '</span><span class="fa-work__tools">' + vlink + '<span class="fa-work__badge"><i data-lucide="' + (hasVideo ? 'play' : many ? 'images' : 'arrow-up-right') + '" aria-hidden="true"></i></span></span></span>' +
        '<span class="fa-work__bottom"><span class="fa-work__title">' + esc(w.title) + '</span><span class="fa-work__desc">' + esc(w.desc) + '</span>' + (metrics ? '<ul class="fa-work__metrics">' + metrics + '</ul>' : '') + '</span></div>';
    }).join('');
    icons(grid);

    $$('.fa-work', grid).forEach(function (card) {
      card.addEventListener('keydown', function (e) { if ((e.key === 'Enter' || e.key === ' ') && e.target === card) { e.preventDefault(); card.click(); } });
      card.addEventListener('click', function (e) { if (e.target.closest('.fa-work__visit')) return; FA.openModal && FA.openModal(list[+card.getAttribute('data-i')], 0, card); });
      card.addEventListener('pointermove', function (e) { var r = card.getBoundingClientRect(); card.style.setProperty('--mx', (e.clientX - r.left) + 'px'); card.style.setProperty('--my', (e.clientY - r.top) + 'px'); });
    });

    var fb = $('[data-fa-filters]');
    if (fb) fb.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-filter]'); if (!b) return;
      var f = b.getAttribute('data-filter');
      $$('button', fb).forEach(function (x) { var on = x === b; x.classList.toggle('is-active', on); x.setAttribute('aria-selected', on ? 'true' : 'false'); });
      var cards = $$('.fa-work', grid);
      cards.forEach(function (c) { c.classList.toggle('is-hidden', f !== 'all' && c.getAttribute('data-filter') !== f); });
      if (hasGsap && !reduce) window.gsap.fromTo(cards.filter(function (c) { return !c.classList.contains('is-hidden'); }), { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.05, ease: 'power3.out' });
      if (window.ScrollTrigger) window.ScrollTrigger.refresh();
    });

    if (hasGsap && window.ScrollTrigger && !reduce) {
      window.gsap.from($$('.fa-work', grid), { y: 60, opacity: 0, duration: 0.9, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: grid, start: 'top 85%', once: true } });
    }
  }

  /* ---------- SERTIFIKAT ---------- */
  function initCerts() {
    var box = $('[data-fa-certs]'); var list = FA.certs || [];
    if (!box || !list.length) return;
    box.innerHTML = list.map(function (c, i) {
      return '<button type="button" class="fa-cert" data-i="' + i + '" aria-label="Lihat sertifikat: ' + esc(c.title) + '"><span class="fa-cert__thumb"><img src="' + esc(c.cover) + '" alt="" loading="lazy" /></span>' +
        '<span class="fa-cert__body"><b>' + esc(c.title) + '</b><span>' + esc(c.issuer) + '</span></span></button>';
    }).join('');
    $$('.fa-cert', box).forEach(function (b) { b.addEventListener('click', function () { FA.openModal && FA.openModal(list[+b.getAttribute('data-i')], 0, b); }); });
    if (hasGsap && window.ScrollTrigger && !reduce) window.gsap.from($$('.fa-cert', box), { y: 40, opacity: 0, duration: 0.8, stagger: 0.07, ease: 'power3.out', scrollTrigger: { trigger: box, start: 'top 88%', once: true } });
  }

  /* ---------- SALIN EMAIL ---------- */
  function initCopy() {
    $$('[data-fa-copy]').forEach(function (b) {
      b.addEventListener('click', function () {
        var txt = b.getAttribute('data-fa-copy'), span = $('span', b), old = span ? span.textContent : '';
        function done(ok) { if (span) { span.textContent = ok ? window.FA.t('Email tersalin!') : window.FA.t('Salin manual: ') + txt; setTimeout(function () { span.textContent = old; }, 2200); } }
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(function () { done(true); }, function () { done(false); });
        else done(false);
      });
    });
  }

  /* ---------- START ---------- */
  function boot() {
    icons();
    initNav(); initTyper(); initCounters(); initHero();
    initWorks(); initCerts(); initCopy(); initReveal();
    // modul terpisah (aman jika elemen tidak ada)
    FA.initMarquee && FA.initMarquee();
    FA.initWorkflow && FA.initWorkflow();
    FA.initBg && FA.initBg();
    FA.initShowreel && FA.initShowreel();
    FA.initLightbox && FA.initLightbox();
    FA.i18n && FA.i18n.init();
    window.addEventListener('load', function () { icons(); if (window.ScrollTrigger) window.ScrollTrigger.refresh(); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
