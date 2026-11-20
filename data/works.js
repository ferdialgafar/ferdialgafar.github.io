// FILE: data/works.js
// Semua konten karya & sertifikat ada di sini. Edit teks/angka di file ini, bukan di HTML.
// Cara menambah karya baru: salin satu objek, ganti id, cover, dan isi. Urutan array = urutan tampil.
//
// Skema karya  : { id, filter, title, category, role, desc, problem, process, result, metrics:[{value,label}],
//                  cover, focus:'top'|'', cols(1-12), rows, icon, media:[...], links:[{label,url}] }
// Tipe media   : { type:'drive', id:'<ID file Google Drive>' }  -> video (Drive harus "Anyone with the link")
//                { type:'image', src:'assets/...', alt:'...' }
(function () {
  'use strict';
  window.FA = window.FA || {};

  var drive = function (id) { return { type: 'drive', id: id }; };
  var img = function (src, alt) { return { type: 'image', src: src, alt: alt || '' }; };

  window.FA.works = [
    {
      id: 'clipper', filter: 'konten', cols: 6, rows: 3, icon: 'arrow-up-right', focus: 'top',
      title: 'Clipper konten viral & film',
      category: 'Konten · TikTok & Instagram',
      role: 'Akun clipper pribadi @cliperpoint_ · 2026 – sekarang',
      desc: 'Memilih momen terbaik dari video panjang, mengemasnya jadi klip pendek dengan hook yang kuat.',
      problem: 'Banyak orang tidak sempat menonton video panjang seperti podcast, film, dan acara, padahal momen pentingnya menarik untuk dibagikan.',
      process: 'Saya memilih momen terbaik dari video panjang, mengeditnya dengan CapCut (potong, teks judul, hook), lalu mengunggahnya secara konsisten di TikTok dan Instagram. Ide hook dan judul saya brainstorming dengan Gemini AI dan Claude AI, dan saya mengikuti campaign clipping di Clippo, Weffluence, dan Ternak Clip.',
      result: 'Akun tumbuh secara organik dari nol, tanpa iklan berbayar. Video terbaik mencapai 151,4 ribu views dan satu Reels Instagram menembus 14.026 tayangan.',
      metrics: [
        { value: '151,4K', label: 'views video terbaik' },
        { value: '515', label: 'pengikut TikTok' },
        { value: '7,5K', label: 'suka' },
        { value: '14K', label: 'tayangan Reels' }
      ],
      cover: 'assets/works/cover-clipper.webp',
      media: [img('assets/works/cover-clipper.webp', 'Profil TikTok @cliperpoint_ dengan 515 pengikut dan 7.573 suka')],
      visit: 'TikTok',
      links: [{ label: 'Buka akun TikTok', url: 'https://www.tiktok.com/@cliperpoint_' }]
    },
    {
      id: 'outfit', filter: 'konten', cols: 6, rows: 3, icon: 'arrow-up-right', focus: 'top',
      title: 'Affiliate fashion dengan tokoh virtual AI',
      category: 'Konten · TikTok Shop',
      role: 'Akun affiliate @OutfitAtMeiraa_ (tokoh virtual buatan AI) · 2026 – sekarang',
      desc: 'Konten OOTD dan styling tips tanpa model dan lokasi: video dibuat dengan AI, dipasangkan ke keranjang kuning.',
      problem: 'Pembeli online sulit membayangkan padu padan outfit sebelum membeli, sementara produksi konten fashion dengan model dan lokasi membutuhkan biaya dan waktu.',
      process: 'Saya merancang konsep konten OOTD dan styling tips, membuat video dengan tokoh virtual memakai Google Flow dan Gemini AI, lalu mengeditnya dengan CapCut (transisi, teks, efek visual). Konten dipasangkan dengan keranjang kuning TikTok Shop dan diunggah secara konsisten.',
      result: 'Akun tumbuh secara organik hingga 952 pengikut dan 5,9 ribu suka, sepenuhnya dengan konten buatan AI, tanpa biaya model dan produksi lapangan. Tokoh di akun ini adalah karakter virtual, bukan orang sungguhan.',
      metrics: [
        { value: '952', label: 'pengikut TikTok' },
        { value: '5,9K', label: 'suka' },
        { value: 'Rp0', label: 'biaya model & lokasi' }
      ],
      cover: 'assets/works/cover-outfit.webp',
      media: [img('assets/works/cover-outfit.webp', 'Profil TikTok @OutfitAtMeiraa_ dengan 952 pengikut dan deretan video outfit')],
      visit: 'TikTok',
      links: [{ label: 'Buka akun TikTok', url: 'https://www.tiktok.com/@almeiravalerianareswari_' }]
    },
    {
      id: 'fakta', filter: 'konten', cols: 6, rows: 3, icon: 'arrow-up-right', focus: 'top',
      title: 'Motion graphic: fakta unik & isu viral',
      category: 'Konten · Motion Graphic',
      role: 'Proyek pribadi @ghaffarfaktaunik · 2026 – sekarang',
      desc: 'Video vertikal 60 detik dari naskah, storyboard, voice-over, sampai sound design.',
      problem: 'Isu viral cepat berlalu dan sering disampaikan dalam bentuk panjang yang membosankan. Saya ingin menyajikannya padat, jelas, dan enak ditonton sampai habis.',
      process: 'Saya merancang konsep dan naskah per video, lalu membuat storyboard dan production bible per adegan. Voice-over dibuat dengan ElevenLabs dan aset visual dengan Gemini AI, dirangkai menjadi video 9:16 dengan animasi parallax, kinetic typography yang sinkron dengan narasi, transisi sinematik, dan sound design (BGM, efek suara, mixing sekitar -14 LUFS). Claude AI dan Gemini AI membantu brainstorming hook dan naskah; fakta selalu diperiksa sebelum tayang.',
      result: 'Delapan video bertema fakta unik dan isu terkini sudah terbit dengan identitas visual yang konsisten (palet warna, logo, gaya subtitle). Akun ini masih tahap awal; fokus proyek ini adalah kualitas produksi dari naskah sampai audio.',
      metrics: [
        { value: '8', label: 'video terbit' },
        { value: '9:16', label: 'format, 60 detik' },
        { value: '-14', label: 'LUFS target mixing' }
      ],
      cover: 'assets/works/cover-fakta.webp',
      media: [img('assets/works/cover-fakta.webp', 'Profil TikTok @ghaffarfaktaunik dan tiga contoh video motion graphic')],
      visit: 'TikTok',
      links: [{ label: 'Buka akun TikTok', url: 'https://www.tiktok.com/@ghaffarfaktaunik' }]
    },
    {
      id: 'gosh', filter: 'konten', cols: 6, rows: 3, icon: 'arrow-up-right', focus: 'top',
      title: 'Live streaming di GOSH Live',
      category: 'Konten · Live Streaming',
      role: 'Host live streaming game dengan OBS · 2026 – sekarang',
      desc: 'Siaran rutin dengan jadwal konsisten: 70+ jam dalam 20 hari efektif, melampaui target 60 jam.',
      problem: 'Program streaming GOSH Live menuntut siaran rutin dengan target 60 jam dalam 20 hari efektif dan 50 penonton per hari, sehingga saya perlu membangun audiens dari nol dengan jadwal yang konsisten.',
      process: 'Saya menyiarkan game secara rutin memakai OBS, mengatur jadwal siaran, dan berinteraksi dengan penonton lewat kolom chat. Jam siaran dan pertumbuhan pengikut saya pantau lewat dashboard analisis GOSH.',
      result: 'Menyelesaikan lebih dari 70 jam siaran dalam 20 hari efektif dan mengumpulkan 183 pengikut. Rekaman siaran terbaik ditonton 9.033 kali.',
      metrics: [
        { value: '70+', label: 'jam siaran / 20 hari' },
        { value: '183', label: 'pengikut' },
        { value: '9K+', label: 'tayangan replay terbaik' }
      ],
      cover: 'assets/works/cover-gosh.webp',
      media: [img('assets/works/cover-gosh.webp', 'Profil GOSH Live dengan 183 pengikut dan rekaman siaran')],
      visit: 'GOSH Live',
      links: [{ label: 'Buka profil GOSH Live', url: 'https://gosh.com/profile/Verday_KNJ05' }]
    },
    {
      id: 'goodday', filter: 'video', cols: 5, rows: 3, icon: 'play', focus: '',
      title: 'Film iklan “Good Day x Zombie”',
      category: 'Video & Iklan',
      role: 'Talent & pengembang ide · Kelompok MP3C · 30 September 2024',
      desc: 'Film iklan kelompok untuk mata kuliah periklanan, dari konsep sampai produksi.',
      problem: 'Tugas mata kuliah periklanan menuntut kelompok membuat iklan kreatif yang menarik perhatian dan menyampaikan pesan produk dalam waktu singkat, dari konsep hingga produksi.',
      process: 'Saya berperan sebagai talent dan pengembang ide, berkolaborasi dengan tim produksi dalam pengembangan ide dan eksekusi visual, termasuk di lokasi syuting.',
      result: 'Proyek selesai diproduksi dan dipresentasikan sebagai tugas mata kuliah. Pengalaman ini melatih saya tampil di depan kamera, bekerja dalam tim produksi, dan mengubah ide menjadi hasil visual.',
      metrics: [
        { value: '30 Sep', label: 'tanggal rilis 2024' },
        { value: '2', label: 'peran: talent & ide' }
      ],
      cover: 'assets/img/iklan-1.webp',
      media: [
        drive('1MUbcWZMJ1U0ICFRXT0c1irnRFKTq54ii'),
        img('assets/img/iklan-1.webp', 'Tim produksi film iklan Good Day x Zombie berpose dengan busana serba hitam'),
        img('assets/img/iklan-3.webp', 'Suasana syuting di ruangan gelap'),
        img('assets/img/iklan-4.webp', 'Pengambilan gambar dengan clapperboard di dalam lift')
      ],
      links: [{ label: 'Buka video di Google Drive', url: 'https://drive.google.com/file/d/1MUbcWZMJ1U0ICFRXT0c1irnRFKTq54ii/view' }]
    },
    {
      id: 'appfair', filter: 'event', cols: 7, rows: 3, icon: 'play', focus: '',
      title: 'APP Fair 2025: koordinator sponsorship',
      category: 'Event · Sponsorship',
      role: 'Koordinator Sponsorship · Politeknik APP Jakarta · Maret – Juni 2025',
      desc: 'Memimpin tim mencari sponsor dan menjalin kerja sama dengan 20+ sponsor dan media partner.',
      problem: 'Festival kampus APP Fair 2025 membutuhkan dukungan dana dan kerja sama dari pihak luar agar acara dapat berjalan, sehingga panitia perlu menjangkau banyak calon sponsor dan media partner secara terorganisasi.',
      process: 'Sebagai koordinator sponsorship, saya memimpin tim yang menghubungi calon sponsor dari berbagai bidang: makanan dan minuman, perbankan, ritel, kecantikan, hingga media lokal. Saya menyusun proposal, pitch deck, dan presentasi, lalu menjaga hubungan dengan mitra lewat komunikasi yang terbuka dan responsif.',
      result: 'Berhasil menjalin kerja sama dengan 20+ sponsor dan media partner, antara lain Sari Roti, Sosro, Bank Victoria, Popeyes, Hydro Coco, Moko Moko, Theraskin, dan Info Depok.',
      metrics: [
        { value: '20+', label: 'sponsor & media partner' },
        { value: '5', label: 'sektor: F&B, bank, ritel, kecantikan, media' }
      ],
      cover: 'assets/img/appfair-2.webp',
      media: [
        drive('1pf6agUkb8dIFWc4nW_HA2dUhTqr7UzhT'),
        img('assets/img/appfair-2.webp', 'Tim panitia APP Fair 2025 di bawah gapura sponsor Hydro Coco'),
        img('assets/img/appfair-3.webp', 'Pertemuan tim sponsorship di kafe'),
        img('assets/img/appfair-4.webp', 'Bersama pihak Politeknik APP Jakarta di lobi kampus')
      ],
      links: [{ label: 'Buka video di Google Drive', url: 'https://drive.google.com/file/d/1pf6agUkb8dIFWc4nW_HA2dUhTqr7UzhT/view' }]
    },
    {
      id: 'indihome', filter: 'video', cols: 5, rows: 2, icon: 'play', focus: '',
      title: 'Kampanye digital IndiHome Telkom Indonesia',
      category: 'Video & Iklan',
      role: 'Proyek kampus · 2024 – 2025 · konsep hingga pengambilan gambar',
      desc: 'Terlibat dari konsep sampai pengambilan gambar di lokasi syuting.',
      problem: 'Tugas periklanan menuntut kampanye digital yang pesannya jelas dan menarik secara visual, dikerjakan bersama tim produksi.',
      process: 'Saya terlibat dalam kampanye digital IndiHome Telkom Indonesia dari konsep hingga pengambilan gambar, berkolaborasi dengan tim produksi dalam pengembangan ide dan eksekusi visual, termasuk di lokasi syuting.',
      result: 'Kampanye selesai diproduksi dan dipresentasikan sebagai tugas mata kuliah.',
      metrics: [{ value: '2024–25', label: 'periode pengerjaan' }],
      cover: 'assets/img/iklan-2.webp',
      media: [
        drive('1womdiQTelOfidkqQ3jRE4vsfeLp-82BJ'),
        img('assets/img/iklan-2.webp', 'Cuplikan adegan iklan IndiHome')
      ],
      links: [{ label: 'Buka video di Google Drive', url: 'https://drive.google.com/file/d/1womdiQTelOfidkqQ3jRE4vsfeLp-82BJ/view' }]
    },
    {
      id: 'niagamas', filter: 'brand', cols: 7, rows: 2, icon: 'images', focus: '',
      title: 'Identitas brand & website perusahaan',
      category: 'Brand & Web',
      role: 'Digital Marketing & Web Developer Intern · PT Niagamas Setiausaha & PT Power Elektrika Nusantara · Nov 2025 – Agu 2026',
      desc: 'Dua website dari nol dan satu set materi identitas brand yang konsisten.',
      problem: 'Kedua perusahaan membutuhkan kehadiran digital yang rapi, materi identitas brand yang konsisten, dan dokumentasi kegiatan yang tertata untuk mendukung pemasaran dan laporan internal.',
      process: 'Saya merancang dan membangun dua website perusahaan dari nol dengan HTML, CSS, dan JavaScript. Saya mendesain kalender, kemeja korporat, banner “Sekilas Info Tentang PT Niagamas Setiausaha” untuk Facebook dan Instagram, spanduk, kartu nama, dan proposal dengan gaya visual yang seragam di Canva. Kegiatan perusahaan saya dokumentasikan dalam bentuk foto dan catatan sebagai bahan laporan internal.',
      result: 'Dua website perusahaan selesai, seluruh aset identitas brand selesai, dan dokumentasi kegiatan diserahkan sebagai bahan laporan internal perusahaan.',
      metrics: [
        { value: '2', label: 'website perusahaan' },
        { value: '6', label: 'jenis aset brand' },
        { value: '9 bln', label: 'masa magang' }
      ],
      cover: 'assets/img/niagamas-banner.webp',
      media: [
        img('assets/img/niagamas-banner.webp', 'Banner informasi Sekilas Info Tentang PT Niagamas Setiausaha'),
        img('assets/img/niagamas-shirt.webp', 'Desain kemeja korporat navy dengan logo perusahaan'),
        img('assets/img/niagamas-coding.webp', 'Ferdi menulis kode website perusahaan di laptop')
      ],
      links: []
    }
  ];

  var cert = function (id, title, issuer, date, files) {
    return {
      id: 'cert-' + id, type: 'cert', title: title, issuer: issuer, date: date,
      cover: 'assets/certs/' + files[0] + '.webp',
      media: files.map(function (f, i) { return img('assets/certs/' + f + '.webp', title + (files.length > 1 ? ' (halaman ' + (i + 1) + ')' : '')); })
    };
  };

  window.FA.certs = [
    cert('bnsp', 'BNSP: Penyelia Media Sosial (Marketing)', 'LSP Politeknik APP Jakarta', '13 Mei 2026 – 13 Mei 2029', ['bnsp', 'bnsp-unit']),
    cert('google-display', 'Google Ads Display Certification', 'Google Skillshop', '18 Jun 2026 – 18 Jun 2027', ['google-display']),
    cert('google-ai', 'AI-Powered Performance Ads Certification', 'Google Skillshop', '18 Jun 2026 – 18 Jun 2027', ['google-ai']),
    cert('hubspot-content', 'Content Marketing Certified', 'HubSpot Academy', '27 Jul 2026 – 25 Agu 2028', ['hubspot-content']),
    cert('hubspot-social', 'Social Media Certified', 'HubSpot Academy', '27 Jul 2026 – 25 Agu 2028', ['hubspot-social']),
    cert('magang-niagamas', 'Sertifikat Magang Digital Marketing', 'PT Niagamas Setiausaha', '10 Nov 2025 – 10 Mei 2026', ['magang-niagamas']),
    cert('magang-power', 'Sertifikat Magang Digital Marketing', 'PT Power Elektrika Nusantara', '11 Mei 2026 – 10 Agu 2026', ['magang-power']),
    cert('labyrinth', 'Certificate of Appreciation: Labyrinth of Nightmares Exhibition', 'Politeknik APP Jakarta · APP Fair 2025', '24 – 25 Juni 2025', ['labyrinth']),
    cert('workshop', 'Sertifikat Penghargaan: Workshop From Campus to Corporate', 'Politeknik APP Jakarta', '16 April 2026', ['workshop'])
  ];

  // alias sesuai kontrak brief
  window.FA_WORKS = window.FA.works;
})();
