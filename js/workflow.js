// FILE: js/workflow.js — alur kerja interaktif (tab + putar otomatis + progress)
(function () {
  'use strict';
  var FA = (window.FA = window.FA || {});

  FA.initWorkflow = function () {
    var root = document.querySelector('[data-fa-workflow]');
    if (!root) return;

    var steps = Array.prototype.slice.call(root.querySelectorAll('.fa-wf__step'));
    var panels = Array.prototype.slice.call(root.querySelectorAll('.fa-wf__panel'));
    var bar = root.querySelector('[data-wf-bar]');
    var btnPrev = root.querySelector('[data-wf-prev]');
    var btnNext = root.querySelector('[data-wf-next]');
    var btnToggle = root.querySelector('[data-wf-toggle]');
    if (!steps.length || steps.length !== panels.length) return;

    var interval = parseInt(root.getAttribute('data-interval'), 10) || 7000;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var index = 0, playing = !reduce, inView = false, hovering = false, started = 0, elapsed = 0, raf = 0;

    function go(i, userTriggered) {
      index = (i + steps.length) % steps.length;
      steps.forEach(function (s, k) {
        var on = k === index;
        s.classList.toggle('is-active', on);
        s.classList.toggle('is-done', k < index);
        s.setAttribute('aria-selected', on ? 'true' : 'false');
        s.tabIndex = on ? 0 : -1;
      });
      panels.forEach(function (p, k) { p.hidden = k !== index; });
      root.style.setProperty('--wf', ((index + 1) / steps.length).toFixed(3));
      elapsed = 0; started = performance.now();
      if (bar) bar.style.transform = 'scaleX(0)';
      if (userTriggered && steps[index] && document.activeElement && root.contains(document.activeElement)) steps[index].focus({ preventScroll: true });
      // pastikan step aktif terlihat pada daftar horizontal (mobile)
      var nav = steps[index].parentElement;
      if (nav && nav.scrollWidth > nav.clientWidth) nav.scrollTo({ left: steps[index].offsetLeft - 16, behavior: 'smooth' });
    }

    function running() { return playing && inView && !hovering && !document.hidden; }

    function tick(now) {
      if (running()) {
        elapsed += now - started;
        if (elapsed >= interval) go(index + 1, false);
        else if (bar) bar.style.transform = 'scaleX(' + (elapsed / interval).toFixed(4) + ')';
      }
      started = now;
      raf = requestAnimationFrame(tick);
    }

    steps.forEach(function (s, k) {
      s.addEventListener('click', function () { go(k, true); });
      s.addEventListener('keydown', function (e) {
        var key = e.key;
        if (key === 'ArrowDown' || key === 'ArrowRight') { e.preventDefault(); go(index + 1, true); }
        else if (key === 'ArrowUp' || key === 'ArrowLeft') { e.preventDefault(); go(index - 1, true); }
        else if (key === 'Home') { e.preventDefault(); go(0, true); }
        else if (key === 'End') { e.preventDefault(); go(steps.length - 1, true); }
      });
    });
    if (btnPrev) btnPrev.addEventListener('click', function () { go(index - 1, false); });
    if (btnNext) btnNext.addEventListener('click', function () { go(index + 1, false); });
    if (btnToggle) {
      var sync = function () {
        btnToggle.setAttribute('aria-pressed', playing ? 'false' : 'true');
        btnToggle.setAttribute('aria-label', window.FA.t(playing ? 'Jeda putar otomatis' : 'Lanjutkan putar otomatis'));
        btnToggle.innerHTML = '<i data-lucide="' + (playing ? 'pause' : 'play') + '" aria-hidden="true"></i>';
        if (window.lucide && window.lucide.createIcons) window.lucide.createIcons({ root: btnToggle });
      };
      btnToggle.addEventListener('click', function () { playing = !playing; sync(); });
      sync();
    }

    root.addEventListener('mouseenter', function () { hovering = true; });
    root.addEventListener('mouseleave', function () { hovering = false; });
    root.addEventListener('focusin', function () { hovering = true; });
    root.addEventListener('focusout', function () { hovering = false; });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (e) { inView = e[0].isIntersecting; }, { threshold: 0.35 }).observe(root);
    } else { inView = true; }

    go(0, false);
    raf = requestAnimationFrame(tick);
  };
})();
