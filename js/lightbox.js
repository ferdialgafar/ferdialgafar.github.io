// FILE: js/lightbox.js — modal video player / galeri (ESC menutup, fokus terkunci, video berhenti saat ditutup)
(function () {
  'use strict';
  var FA = (window.FA = window.FA || {});

  FA.initLightbox = function () {
    var modal = document.querySelector('[data-fa-modal]');
    if (!modal) return;
    var panel = modal.querySelector('.fa-modal__panel');
    var stage = modal.querySelector('[data-fa-stage]');
    var thumbs = modal.querySelector('[data-fa-thumbs]');
    var elCat = modal.querySelector('[data-fa-cat]');
    var elTitle = modal.querySelector('[data-fa-title]');
    var elRole = modal.querySelector('[data-fa-role]');
    var elMetrics = modal.querySelector('[data-fa-metrics]');
    var elCopy = modal.querySelector('[data-fa-copy-block]');
    var elLinks = modal.querySelector('[data-fa-links]');
    var btnPrev = modal.querySelector('[data-fa-prev]');
    var btnNext = modal.querySelector('[data-fa-next]');

    var item = null, idx = 0, opener = null;

    function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

    function icons(root) { if (window.lucide && window.lucide.createIcons) window.lucide.createIcons({ root: root || modal }); }

    function clearStage() { stage.innerHTML = ''; } // menghapus iframe = menghentikan video

    function showMedia(i) {
      var list = item.media || [];
      if (!list.length) { clearStage(); return; }
      idx = (i + list.length) % list.length;
      var m = list[idx];
      clearStage();
      if (m.type === 'drive') {
        var f = document.createElement('iframe');
        f.src = 'https://drive.google.com/file/d/' + encodeURIComponent(m.id) + '/preview';
        f.allow = 'autoplay; fullscreen; encrypted-media';
        f.allowFullscreen = true;
        f.title = 'Video: ' + (item.title || '');
        f.referrerPolicy = 'no-referrer';
        stage.appendChild(f);
      } else {
        var im = document.createElement('img');
        im.src = m.src; im.alt = m.alt || item.title || '';
        stage.appendChild(im);
      }
      Array.prototype.forEach.call(thumbs.children, function (b, k) { b.classList.toggle('is-active', k === idx); b.setAttribute('aria-current', k === idx ? 'true' : 'false'); });
      var many = list.length > 1;
      btnPrev.hidden = btnNext.hidden = !many;
    }

    function buildThumbs() {
      thumbs.innerHTML = '';
      var list = item.media || [];
      if (list.length < 2) return;
      list.forEach(function (m, k) {
        var b = document.createElement('button');
        b.type = 'button'; b.setAttribute('aria-label', (m.type === 'drive' ? FA.t('Putar video') : FA.t('Lihat gambar') + ' ' + (k + 1)));
        if (m.type === 'drive') b.innerHTML = '<i data-lucide="play-circle" aria-hidden="true"></i>';
        else b.innerHTML = '<img src="' + esc(m.src) + '" alt="" loading="lazy" />';
        b.addEventListener('click', function () { showMedia(k); });
        thumbs.appendChild(b);
      });
    }

    function fillInfo() {
      elCat.textContent = item.category || item.issuer || '';
      elTitle.textContent = item.title || '';
      elRole.textContent = item.role || item.date || '';
      elMetrics.innerHTML = (item.metrics || []).map(function (m) { return '<li><b>' + esc(m.value) + '</b><span>' + esc(m.label) + '</span></li>'; }).join('');
      var blocks = [];
      if (item.problem) blocks.push('<div><h4>Masalah</h4><p>' + esc(item.problem) + '</p></div>');
      if (item.process) blocks.push('<div><h4>Proses</h4><p>' + esc(item.process) + '</p></div>');
      if (item.result) blocks.push('<div><h4>Hasil</h4><p>' + esc(item.result) + '</p></div>');
      if (item.type === 'cert') blocks.push('<div><h4>Penerbit</h4><p>' + esc(item.issuer) + '</p></div><div><h4>Masa berlaku / periode</h4><p>' + esc(item.date) + '</p></div>');
      elCopy.innerHTML = blocks.join('');
      elLinks.innerHTML = (item.links || []).map(function (l) {
        return '<a class="fa-btn fa-btn--ghost fa-btn--sm" href="' + esc(l.url) + '" target="_blank" rel="noopener noreferrer"><span>' + esc(l.label) + '</span><i data-lucide="external-link" aria-hidden="true"></i></a>';
      }).join('');
    }

    function focusables() {
      return Array.prototype.slice.call(modal.querySelectorAll('a[href], button:not([hidden]):not([disabled]), iframe, [tabindex]:not([tabindex="-1"])')).filter(function (n) { return n.offsetParent !== null; });
    }

    FA.openModal = function (data, startAt, fromEl) {
      if (!data) return;
      item = data; opener = fromEl || document.activeElement;
      if (FA.showreelStop) FA.showreelStop();
      fillInfo(); buildThumbs(); if (FA.i18n) FA.i18n.apply(modal);
      modal.hidden = false;
      document.body.classList.add('fa-lock');
      showMedia(startAt || 0);
      icons();
      panel.focus({ preventScroll: true });
      if (window.gsap && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.gsap.from(elCopy.children, { y: 16, opacity: 0, duration: 0.5, stagger: 0.07, delay: 0.2, ease: 'power3.out' });
      }
    };

    FA.closeModal = function () {
      if (modal.hidden) return;
      clearStage();                 // hentikan video
      modal.hidden = true;
      document.body.classList.remove('fa-lock');
      if (opener && opener.focus) opener.focus({ preventScroll: true });
      item = null;
    };

    modal.addEventListener('click', function (e) { if (e.target.closest('[data-fa-close]')) FA.closeModal(); });
    btnPrev.addEventListener('click', function () { showMedia(idx - 1); });
    btnNext.addEventListener('click', function () { showMedia(idx + 1); });

    document.addEventListener('keydown', function (e) {
      if (modal.hidden) return;
      if (e.key === 'Escape') { e.preventDefault(); FA.closeModal(); return; }
      if (e.key === 'ArrowLeft' && item && item.media && item.media.length > 1) { showMedia(idx - 1); return; }
      if (e.key === 'ArrowRight' && item && item.media && item.media.length > 1) { showMedia(idx + 1); return; }
      if (e.key === 'Tab') { // kunci fokus di dalam modal
        var f = focusables(); if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && (document.activeElement === first || document.activeElement === panel)) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  };
})();
