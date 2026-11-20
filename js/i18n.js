// FILE: js/i18n.js — pengalih bahasa: Indonesia (asli), English, Español, 中文.
// Teks asli di HTML tetap bahasa Indonesia; kamus ada di js/i18n-data.js (kunci = teks Indonesia).
(function () {
  'use strict';
  var FA = (window.FA = window.FA || {});
  var DATA = window.FA_I18N || { dict: {}, html: {}, words: {} };
  var LANGS = ['id', 'en', 'es', 'zh'], HTMLLANG = { id: 'id', en: 'en', es: 'es', zh: 'zh-CN' }, LABEL = { id: 'ID', en: 'EN', es: 'ES', zh: '中文' };
  var KEY = 'fa-lang', ATTRS = ['aria-label', 'title', 'alt', 'placeholder'];
  var lang = 'id', nodeMap = new WeakMap(), attrMap = new WeakMap();

  function norm(s) { return String(s).replace(/\s+/g, ' ').trim(); }
  function lookup(src) {
    if (lang === 'id') return null;
    var d = DATA.dict[lang]; if (!d) return null;
    var k = norm(src); if (!k) return null;
    if (d[k] != null) return d[k];
    var i = k.indexOf(': ');                       // mis. "Buka detail: Judul karya"
    if (i > 0 && d[k.slice(0, i)] != null) {
      var rest = k.slice(i + 2);
      return d[k.slice(0, i)] + (lang === 'zh' ? '：' : ': ') + (d[rest] != null ? d[rest] : rest);
    }
    return null;
  }
  function t(s) { var r = lookup(s); return r == null ? s : r; }
  function skipEl(el) {
    return el.closest && el.closest('script,style,noscript,[data-i18n-skip],[data-count],.fa-typer__text,[data-i18n-html]');
  }
  function textNodes(root) {
    var out = [], w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), n;
    while ((n = w.nextNode())) { if (n.nodeValue.trim() && n.parentElement && !skipEl(n.parentElement)) out.push(n); }
    return out;
  }
  function applyText(n) {
    var rec = nodeMap.get(n);
    if (!rec || n.nodeValue !== rec.shown) { rec = { orig: n.nodeValue, shown: n.nodeValue }; nodeMap.set(n, rec); }
    var tr = lookup(rec.orig), val = rec.orig;
    if (tr != null) { var m = rec.orig.match(/^(\s*)[\s\S]*?(\s*)$/); val = m[1] + tr + m[2]; }
    if (val !== n.nodeValue) n.nodeValue = val;
    rec.shown = n.nodeValue;
  }
  function applyAttrs(el) {
    ATTRS.forEach(function (a) {
      if (!el.hasAttribute(a)) return;
      var rec = attrMap.get(el) || {}, cur = el.getAttribute(a), r = rec[a];
      if (!r || cur !== r.shown) { r = rec[a] = { orig: cur, shown: cur }; attrMap.set(el, rec); }
      var tr = lookup(r.orig), val = tr == null ? r.orig : tr;
      if (val !== cur) el.setAttribute(a, val);
      r.shown = val;
    });
  }
  function applyHtml(el) {
    var e = DATA.html[el.getAttribute('data-i18n-html')]; if (!e) return;
    el.innerHTML = e[lang] || e.id;
  }
  function fmtNum(v, dec) { var s = Number(v).toFixed(dec || 0); return (lang === 'id' || lang === 'es') ? s.replace('.', ',') : s; }
  function applyCounters() {
    document.querySelectorAll('[data-count]').forEach(function (el) {
      var end = parseFloat(el.getAttribute('data-count')), dec = parseInt(el.getAttribute('data-decimals'), 10) || 0;
      if (!isNaN(end)) el.textContent = fmtNum(end, dec);
    });
  }
  function apply(root) {
    root = root || document.body;
    textNodes(root).forEach(applyText);
    if (root.nodeType === 1) applyAttrs(root);
    root.querySelectorAll('*').forEach(function (el) { if (!el.closest('[data-i18n-skip]')) applyAttrs(el); });
    if (root === document.body) { document.querySelectorAll('[data-i18n-html]').forEach(applyHtml); }
  }
  function meta() {
    var de = document.documentElement;
    if (!de.hasAttribute('data-orig-title')) de.setAttribute('data-orig-title', document.title);
    document.title = t(de.getAttribute('data-orig-title'));
    document.querySelectorAll('meta[name="description"],meta[property="og:title"],meta[property="og:description"]').forEach(function (m) {
      if (!m.hasAttribute('data-orig')) m.setAttribute('data-orig', m.getAttribute('content'));
      m.setAttribute('content', t(m.getAttribute('data-orig')));
    });
  }
  function words(def) { var e = DATA.words[def]; return ((e && e[lang]) || def).split('|').filter(Boolean); }

  function updateSwitcher() {
    var box = document.querySelector('[data-fa-lang]'); if (!box) return;
    var cur = box.querySelector('[data-fa-lang-cur]'); if (cur) cur.textContent = LABEL[lang];
    box.querySelectorAll('[data-lang]').forEach(function (b) { var on = b.getAttribute('data-lang') === lang; b.setAttribute('aria-selected', on ? 'true' : 'false'); b.classList.toggle('is-on', on); });
  }
  function set(l, persist) {
    if (LANGS.indexOf(l) < 0) l = 'id';
    lang = l;
    document.documentElement.setAttribute('lang', HTMLLANG[l]);
    apply(document.body); applyCounters(); meta(); updateSwitcher();
    if (persist !== false) { try { localStorage.setItem(KEY, l); } catch (e) {} }
    document.dispatchEvent(new CustomEvent('fa:lang', { detail: { lang: l } }));
  }
  function initSwitcher() {
    var box = document.querySelector('[data-fa-lang]'); if (!box) return;
    var btn = box.querySelector('.fa-lang__btn'), menu = box.querySelector('.fa-lang__menu');
    function open(o) { menu.hidden = !o; btn.setAttribute('aria-expanded', o ? 'true' : 'false'); box.classList.toggle('is-open', o); }
    btn.addEventListener('click', function (e) { e.stopPropagation(); open(menu.hidden); });
    menu.addEventListener('click', function (e) {
      var b = e.target.closest('[data-lang]'); if (!b) return;
      set(b.getAttribute('data-lang')); open(false); btn.focus();
    });
    document.addEventListener('click', function (e) { if (!box.contains(e.target)) open(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !menu.hidden) { open(false); btn.focus(); } });
  }

  FA.t = t;
  FA.i18n = { get lang() { return lang; }, set: set, apply: apply, t: t, words: words, num: fmtNum, init: function () {
    initSwitcher();
    var l = 'id';
    try { var q = new URLSearchParams(location.search).get('lang'); l = (q && LANGS.indexOf(q) > -1) ? q : (localStorage.getItem(KEY) || 'id'); } catch (e) {}
    if (LANGS.indexOf(l) < 0) l = 'id';
    lang = l; updateSwitcher();
    if (l !== 'id') set(l, false);
  } };
})();
