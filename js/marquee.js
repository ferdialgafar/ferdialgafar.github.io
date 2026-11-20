// FILE: js/marquee.js — logo berjalan otomatis (infinite marquee), jeda saat hover
(function () {
  'use strict';
  var FA = (window.FA = window.FA || {});

  FA.initMarquee = function () {
    var rows = document.querySelectorAll('[data-fa-marquee]');
    if (!rows.length) return;

    function build(row) {
      var track = row.querySelector('.fa-marquee__track');
      if (!track) return;
      // simpan item asli sekali saja
      if (!row._items) row._items = Array.prototype.slice.call(track.children);
      track.innerHTML = '';

      var set = document.createElement('div');
      set.className = 'fa-marquee__set';
      row._items.forEach(function (n) { set.appendChild(n.cloneNode(true)); });
      track.appendChild(set);

      var setW = set.getBoundingClientRect().width;
      if (!setW) return;
      var need = Math.ceil((row.clientWidth * 2) / setW) + 1; // cukup untuk menutup layar tanpa celah
      for (var i = 1; i < need; i++) {
        var c = set.cloneNode(true);
        c.setAttribute('aria-hidden', 'true');
        track.appendChild(c);
      }
      var speed = parseFloat(row.getAttribute('data-speed')) || 40; // piksel per detik
      row.style.setProperty('--shift', setW + 'px');
      row.style.setProperty('--dur', (setW / speed).toFixed(2) + 's');
    }

    function buildAll() { rows.forEach(build); }
    buildAll();

    // bangun ulang saat gambar selesai dimuat (lebar berubah) dan saat resize
    window.addEventListener('load', buildAll);
    var t;
    window.addEventListener('resize', function () { clearTimeout(t); t = setTimeout(buildAll, 180); });
  };
})();
