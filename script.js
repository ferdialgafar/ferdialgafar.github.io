/* ================================================
   FIX #13: Translations — setLang juga update document.documentElement.lang
================================================ */
const translations = {
  id: {
    nav_home:'Home', nav_about:'Tentang', nav_portfolio:'Portfolio', nav_services:'Layanan', nav_contact:'Kontak', nav_cta:'Hubungi Saya',
    otw_badge:'🟢 Open to Work — Remote &amp; On-site',
    hero_badge:'Available for Remote Work &amp; Freelance',
    hero_desc:'Menggabungkan strategi pemasaran dan teknologi digital untuk menumbuhkan bisnis.',
    hero_btn1:'⚡ Hire Me Now', hero_btn2:'🚀 Explore My Works', hero_btn3:'📄 Download CV',
    float_projects:'Project Selesai', float_rating:'Rating Klien',
    about_label:'Tentang Saya', about_title:'Bertemu dengan <span>Ferdi Algafar</span>',
    about_p1:'Saya adalah seorang profesional digital multitalenta yang menempuh pendidikan di <strong style="color:var(--cyan)">Politeknik APP Jakarta</strong>, Jurusan <strong style="color:var(--cyan)">Manajemen Pemasaran Industri Elektronika</strong>.',
    about_p2:'Pengalaman magang di <strong style="color:var(--cyan)">PT Niagamas Setiausaha &amp; PT Power Elektrika Nusantara</strong> sebagai Digital Marketer &amp; Web Developer mengasah kemampuan saya dalam membangun website perusahaan dari nol.',
    about_p3:'Saya juga dikenal sebagai <strong style="color:var(--cyan)">Creative Talent</strong> dalam iklan Good Day dan IndiHome, serta <strong style="color:var(--cyan)">Koordinator Sponsorship</strong> di APP Fair.',
    about_p4:'Saya memiliki kemampuan komunikasi dan sosialisasi yang kuat, antusias terhadap teknologi AI, mampu berkolaborasi lintas tim, berpengalaman membangun hubungan bisnis melalui peran sponsorship, dan mampu mengeksekusi strategi pemasaran digital secara menyeluruh.',
    stat_companies:'Perusahaan Magang', stat_projects:'Project Diselesaikan', stat_tools:'Tools Dikuasai', stat_years:'Tahun Belajar',
    tools_title:'Tools &amp; Technologies I Master',
    exp_label:'Perjalanan Karier', exp_title:'Pengalaman <span>Profesional</span>',
    exp1_title:'Digital Marketer &amp; Web Developer', exp1_desc:'Membangun dua website perusahaan dari nol menggunakan HTML, CSS, dan JavaScript. Mengelola konten digital, strategi pemasaran online, dan kebutuhan digital kedua perusahaan selama masa magang.',
    exp2_title:'Creative Talent — Video Iklan TV &amp; Digital', exp2_desc:'Tampil sebagai talent kreatif dalam kampanye iklan televisi Good Day dan kampanye digital IndiHome Telkom Indonesia, terlibat dalam proses produksi dari konsep hingga pengambilan gambar.',
    exp3_title:'Koordinator Sponsorship', exp3_desc:'Memimpin tim koordinasi sponsorship untuk festival kampus APP Fair, mengelola komunikasi dengan puluhan sponsor dan berhasil mencapai target pendanaan.',
    exp4_title:'Creative Designer — Desain Visual &amp; Konten', exp4_desc:'Merancang berbagai aset visual identitas brand untuk mendukung citra korporat perusahaan selama masa magang, meliputi: desain kalender, kemeja korporat, banner, spanduk, kartu nama, proposal, dan konten sosial media. Berkolaborasi dengan tim internal menggunakan Canva sebagai tools utama.',
    cert_label:'Sertifikasi', cert_title:'Sertifikasi <span>Profesional</span>', cert_intro:'Komitmen saya terhadap pengembangan diri melalui sertifikasi dari platform internasional terpercaya. Klik kartu untuk melihat sertifikat.',
    porto_label:'Karya Saya', porto_title:'Portfolio <span>Terpilih</span>',
    filter_all:'Semua', filter_web:'Website Development', filter_brand:'Brand &amp; Visual Design', filter_creative:'Creative &amp; Campaign',
    view:'Lihat',
    tag_web:'Website Development', tag_brand:'Brand Identity', tag_visual:'Visual Design', tag_talent:'Creative Talent', tag_event:'Event Management',
    pw1_title:'Website PT Niagamas Setiausaha', pw1_desc:'Website profesional perusahaan yang saya bangun dari nol menggunakan HTML, CSS, dan JavaScript selama masa magang.',
    pw2_title:'Website PT Power Elektrika Nusantara', pw2_desc:'Website corporate perusahaan distribusi ketenagalistrikan yang saya kembangkan selama magang.',
    pc1_title:'Iklan TV Good Day', pc1_desc:'Penampilan sebagai talent kreatif dalam kampanye iklan televisi brand minuman kopi Good Day skala nasional.',
    pc2_title:'Kampanye Digital IndiHome', pc2_desc:'Penampilan sebagai talent dalam kampanye iklan digital IndiHome Telkom Indonesia.',
    pc3_title:'Festival APP Fair — Koordinator Sponsorship', pc3_desc:'Memimpin tim koordinasi sponsorship untuk festival kampus APP Fair.',
    pb5_title:'Desain Poster &amp; Konten Visual', pb5_desc:'Pembuatan desain poster, konten promosi, dan materi visual menggunakan Canva.',
    pb6_title:'Desain Kemeja &amp; Merchandise Corporate', pb6_desc:'Perancangan desain kemeja dan merchandise perusahaan selama magang.',
    pb7_title:'Desain Konten Sosial Media', pb7_desc:'Pembuatan konten visual untuk Instagram, TikTok, dan LinkedIn.',
    pb8_title:'Visual Identity &amp; Branding Assets', pb8_desc:'Pengembangan aset visual identitas brand korporat meliputi: desain kalender tahunan, kemeja korporat, banner dan spanduk promosi, kartu nama profesional, template proposal, dan kop surat — untuk PT Niagamas Setiausaha dan PT Power Elektrika Nusantara.',
    mcb_text:'Tertarik berkolaborasi? <strong>Mari diskusikan project Anda!</strong>',
    video_label:'Video Karya', video_title:'Video <span>Karya Saya</span>', video_intro:'Pengalaman saya di depan kamera sebagai talent dalam kampanye iklan brand nasional.',
    vid_badge:'National Campaign', vid1_title:'Iklan Good Day', vid1_desc:'Penampilan saya sebagai talent dalam iklan TV Good Day skala nasional.', vid2_title:'Iklan IndiHome', vid2_desc:'Penampilan saya sebagai talent dalam kampanye digital IndiHome Telkom Indonesia.', vid3_title:'After Movie APP Fair 2025', vid3_desc:'Dokumentasi perjalanan dan momen terbaik dari Festival APP Fair 2025 — event kampus yang saya koordinasikan bagian sponsorship-nya.', vid_watch:'Tonton di Drive',
    skills_label:'Keahlian &amp; Layanan', skills_title:'Bagaimana Saya Dapat<br><span>Menumbuhkan Bisnis Anda</span>', skills_desc:'Di era digital yang kompetitif ini, saya hadir sebagai mitra strategis yang membantu bisnis Anda tumbuh melalui pendekatan digital yang terukur, kreatif, dan berorientasi hasil.',
    pillar1_title:'Web Development', pillar1_desc:'Membangun website profesional yang cepat, responsif, dan SEO-friendly.',
    pillar2_title:'Digital Marketing', pillar2_desc:'Strategi pemasaran digital komprehensif meliputi SEO, social media, content creation, dan analitik data.',
    pillar3_title:'Brand Identity Design', pillar3_desc:'Perancangan identitas merek yang kuat — dari logo hingga sistem visual lengkap.',
    pillar4_title:'AI &amp; Video Content Creation', pillar4_desc:'Memproduksi konten video berbasis AI menggunakan Leonardo AI, Kling Video, CapCut, dan Canva untuk kampanye digital yang impactful.',
    exp5_title:'Content Creator &amp; AI Video Editor', exp5_desc:'Mengelola dan mengembangkan akun TikTok yang berfokus pada konten video berbasis AI. Menggunakan tools Leonardo AI, Kling Video, Canva, dan CapCut untuk produksi konten kreatif berkualitas tinggi.',
    exp6_title:'Divisi Perlengkapan — Event Music JECTFEST', exp6_desc:'Mengatur kebutuhan operasional, perlengkapan, dan logistik acara. Berkoordinasi dengan tim keamanan, dekorasi, dan sponsor untuk kelancaran event.',
    exp7_title:'TikTok Affiliate Content Creator', exp7_desc:'Mengelola dan memproduksi konten video affiliate marketing di TikTok untuk niche fashion &amp; lifestyle (quiet luxury, OOTD, styling tips). Bertanggung jawab atas ide konten, pengambilan gambar, editing, hingga penempatan link produk TikTok Shop agar konversi penjualan maksimal.',
    tag_affiliate:'Affiliate Marketing',
    pta1_title:'TikTok Affiliate — Fashion &amp; Lifestyle Content', pta1_desc:'Mengelola konten affiliate marketing TikTok Shop untuk niche fashion &amp; lifestyle bertema quiet luxury. Memproduksi video OOTD, styling tips, dan review produk yang mendorong engagement serta konversi penjualan melalui link TikTok Shop.',
    workflow_title:'Alur Kerja Profesional Saya',
    ws1:'Riset &amp; Discovery', ws2:'Strategi &amp; Konsep', ws3:'Desain &amp; Kreatif', ws4:'Development', ws5:'Testing &amp; QA', ws6:'Launch &amp; Support',
    hard_skills:'⚡ Hard Skills', soft_skills:'🧠 Soft Skills', sk_comm:'Komunikasi Profesional', sk_adapt:'Adaptabilitas &amp; Learning',
    faq_title:'Pertanyaan yang Sering Diajukan',
    faq1_q:'Apakah Anda tersedia untuk bekerja secara remote?', faq1_a:'Ya! Saya terbiasa bekerja dengan klien dari berbagai daerah dan negara menggunakan tools kolaborasi modern.',
    faq2_q:'Berapa lama waktu pengerjaan website?', faq2_a:'Tergantung kompleksitas project. Landing page: 3-7 hari. Website company profile: 1-2 minggu.',
    faq3_q:'Apa saja layanan digital marketing yang Anda tawarkan?', faq3_a:'Strategi konten media sosial, SEO on-page, pembuatan konten visual, dan analisis performa.',
    faq4_q:'Tools apa yang Anda gunakan dalam proses desain?', faq4_a:'Canva, VS Code, Claude AI, Midjourney, Kling AI, CapCut, Gemini.',
    faq5_q:'Apakah ada revisi setelah project selesai?', faq5_a:'Ya, setiap project mencakup sesi revisi untuk memastikan klien puas.',
    faq6_q:'Bagaimana proses pembayaran dan sistem kerja?', faq6_a:'DP 50% di awal, pelunasan setelah project selesai. Via transfer bank atau dompet digital.',
    faq7_q:'Apakah Anda bisa mengerjakan project dalam Bahasa Inggris?', faq7_a:'Ya, saya dapat bekerja dalam Bahasa Indonesia maupun Bahasa Inggris.',
    cta_title:'Siap Mulai Project Bersama Saya?', cta_desc:'Hubungi saya sekarang dan dapatkan konsultasi gratis untuk project digital Anda.', cta_wa:'💬 Chat di WhatsApp', cta_email:'📧 Kirim Pesan',
    contact_label:'Hubungi Saya', contact_title:'Mari <span>Berkolaborasi</span>', contact_desc:'Saya selalu terbuka untuk diskusi project baru, peluang kolaborasi, atau sekadar berbincang tentang dunia digital.',
    otw_block:'Saya saat ini <strong>aktif mencari peluang</strong> sebagai Digital Marketing Specialist, Web Developer, atau Creative. Terbuka untuk perusahaan dalam dan luar negeri.',
    loc_badge:'📍 Berbasis di <strong>Jakarta, Indonesia (GMT+7)</strong> — Tersedia untuk kerja remote di seluruh dunia dan on-site di Jabodetabek.',
    form_title:'Kirim Pesan Langsung', form_name:'Nama Lengkap', form_service:'Jenis Layanan', form_select:'— Pilih Layanan —', form_msg:'Pesan', form_submit:'🚀 Kirim Pesan', wa_cta_btn:'💬 Chat via WhatsApp',
    story_label:'Cerita Saya', story_title:'Lebih Dalam Tentang <span>Perjalanan Saya</span>',
    story_p1:'Perjalanan saya di dunia digital dimulai dari bangku kuliah di <strong>Politeknik APP Jakarta</strong>, Jurusan <strong>Manajemen Pemasaran Industri Elektronika</strong>.',
    story_p2:'Saya aktif mengeksplorasi dunia desain grafis, coding, dan pemasaran digital secara mandiri.',
    story_p3:'Momen penting datang ketika saya magang di <strong>PT Niagamas &amp; PT Power Elektrika</strong>.',
    story_p4:'Saya juga tampil sebagai <strong>Creative Talent</strong> dalam iklan <strong>Good Day</strong> dan <strong>IndiHome</strong>.',
    story_p5:'Sebagai <strong>Koordinator Sponsorship</strong> di Festival APP Fair, saya mengembangkan kepemimpinan dan negosiasi.',
    story_p6:'Hari ini, saya siap memberikan dampak nyata untuk bisnis Anda.',
    values_label:'Core Values Saya',
    val1_t:'Fast Delivery', val1_d:'Tepat waktu tanpa kompromi pada kualitas',
    val2_t:'Honest Communication', val2_d:'Transparansi penuh di setiap tahap project',
    val3_t:'Quality First', val3_d:'Output terbaik adalah standar minimum saya',
    val4_t:'Continuous Learning', val4_d:'Selalu update dengan tren dan teknologi terbaru',
    val5_t:'Client Obsessed', val5_d:'Kepuasan klien adalah prioritas utama saya',
    edu_label:'Pendidikan', edu_major:'Manajemen Pemasaran Industri Elektronika',
    footer_tagline:'Digital Marketer · Web Developer · Creative',
    footer_copy:'Dibuat dengan ❤️ dan banyak ☕ — All Rights Reserved.',
  },
  en: {
    nav_home:'Home', nav_about:'About', nav_portfolio:'Portfolio', nav_services:'Services', nav_contact:'Contact', nav_cta:'Hire Me',
    otw_badge:'🟢 Open to Work — Remote &amp; On-site',
    hero_badge:'Available for Remote Work &amp; Freelance',
    hero_desc:"Bridging marketing strategy and digital technology to grow your business.",
    hero_btn1:'⚡ Hire Me Now', hero_btn2:'🚀 Explore My Works', hero_btn3:'📄 Download CV',
    float_projects:'Projects Done', float_rating:'Client Rating',
    about_label:'About Me', about_title:'Meet <span>Ferdi Algafar</span>',
    about_p1:'I\'m a multitalented digital professional educated at <strong style="color:var(--cyan)">Politeknik APP Jakarta</strong>, majoring in <strong style="color:var(--cyan)">Electronics Industry Marketing Management</strong>.',
    about_p2:'My internship at <strong style="color:var(--cyan)">PT Niagamas &amp; PT Power Elektrika</strong> sharpened my ability to build company websites from scratch.',
    about_p3:'I\'m also a <strong style="color:var(--cyan)">Creative Talent</strong> in Good Day and IndiHome ads, and <strong style="color:var(--cyan)">Sponsorship Coordinator</strong> at APP Fair.',
    stat_companies:'Internship Companies', stat_projects:'Projects Completed', stat_tools:'Tools Mastered', stat_years:'Years of Learning',
    tools_title:'Tools &amp; Technologies I Master',
    exp_label:'Career Journey', exp_title:'Professional <span>Experience</span>',
    exp1_title:'Digital Marketer &amp; Web Developer', exp1_desc:'Built two company websites from scratch using HTML, CSS, and JavaScript. Managed digital content and online marketing strategy during internship.',
    exp2_title:'Creative Talent — TV &amp; Digital Campaigns', exp2_desc:'Appeared as creative talent in Good Day TV ads and IndiHome Telkom Indonesia digital campaign.',
    exp3_title:'Sponsorship Coordinator', exp3_desc:'Led sponsorship team for APP Fair campus festival, managing communication with dozens of sponsors.',
    exp4_title:'Creative Designer — Visual Design &amp; Content', exp4_desc:'Designed visual content, promotional posters, brand identity, and marketing materials using Canva.',
    cert_label:'Certifications', cert_title:'Professional <span>Certifications</span>', cert_intro:'My commitment to continuous learning. Click a card to view the certificate.',
    porto_label:'My Work', porto_title:'Selected <span>Portfolio</span>',
    filter_all:'All', filter_web:'Website Development', filter_brand:'Brand &amp; Visual Design', filter_creative:'Creative &amp; Campaign',
    view:'View',
    tag_web:'Website Development', tag_brand:'Brand Identity', tag_visual:'Visual Design', tag_talent:'Creative Talent', tag_event:'Event Management',
    pw1_title:'PT Niagamas Setiausaha Website', pw1_desc:'Professional company website built from scratch during internship.',
    pw2_title:'PT Power Elektrika Nusantara Website', pw2_desc:'Corporate website for an electricity distribution company developed during internship.',
    pc1_title:'Good Day TV Commercial', pc1_desc:'Appeared as creative talent in the nationally broadcast Good Day TV commercial.',
    pc2_title:'IndiHome Digital Campaign', pc2_desc:'Appeared as talent in IndiHome Telkom Indonesia digital campaign.',
    pc3_title:'APP Fair — Sponsorship Coordinator', pc3_desc:'Led sponsorship coordination for APP Fair campus festival.',
    pb5_title:'Poster &amp; Visual Content Design', pb5_desc:'Created poster designs, promotional content, and visual materials using Canva.',
    pb6_title:'Corporate Shirt &amp; Merchandise Design', pb6_desc:'Designed corporate shirts and merchandise during internship.',
    pb7_title:'Social Media Content Design', pb7_desc:'Created visual content for Instagram, TikTok, and LinkedIn.',
    pb8_title:'Visual Identity &amp; Branding Assets', pb8_desc:'Developed corporate brand identity assets including: annual calendar design, corporate shirts, promotional banners and signage, professional business cards, proposal templates, and letterheads — for PT Niagamas Setiausaha and PT Power Elektrika Nusantara.',
    mcb_text:'Interested in collaborating? <strong>Let\'s discuss your project!</strong>',
    video_label:'Creative Video', video_title:'My <span>Creative Videos</span>', video_intro:'My on-camera experience as talent in national brand advertising campaigns.',
    vid_badge:'National Campaign', vid1_title:'Good Day Commercial', vid1_desc:'My appearance as talent in the nationally broadcast Good Day TV commercial.', vid2_title:'IndiHome Campaign', vid2_desc:'My appearance as talent in the IndiHome digital campaign.', vid3_title:'APP Fair 2025 After Movie', vid3_desc:'Documentation of the best moments from APP Fair Festival 2025 — the campus event where I coordinated the sponsorship division.', vid_watch:'Watch on Drive',
    skills_label:'Skills &amp; Services', skills_title:'How I Can<br><span>Grow Your Business</span>', skills_desc:'In this competitive digital era, I\'m your strategic partner helping your business grow.',
    pillar1_title:'Web Development', pillar1_desc:'Building professional, fast, responsive, and SEO-friendly websites.',
    pillar2_title:'Digital Marketing', pillar2_desc:'Comprehensive digital marketing strategy covering SEO, social media, content creation, and data analytics.',
    pillar3_title:'Brand Identity Design', pillar3_desc:'Creating strong brand identities — from logo to complete visual system.',
    pillar4_title:'AI &amp; Video Content Creation', pillar4_desc:'Producing AI-based video content using Leonardo AI, Kling Video, CapCut, and Canva for impactful digital campaigns.',
    exp5_title:'Content Creator &amp; AI Video Editor', exp5_desc:'Managing and growing a TikTok account focused on AI-based video content. Using Leonardo AI, Kling Video, Canva, and CapCut to produce high-quality creative content.',
    exp6_title:'Equipment Division — Music Event JECTFEST', exp6_desc:'Managing operational needs, equipment, and event logistics. Coordinating with security, decoration, and sponsor teams for smooth event execution.',
    exp7_title:'TikTok Affiliate Content Creator', exp7_desc:'Managing and producing affiliate marketing video content on TikTok for a fashion &amp; lifestyle niche (quiet luxury, OOTD, styling tips). Responsible for content ideas, filming, editing, and strategic placement of TikTok Shop product links to maximize sales conversion.',
    tag_affiliate:'Affiliate Marketing',
    pta1_title:'TikTok Affiliate — Fashion &amp; Lifestyle Content', pta1_desc:'Managing TikTok Shop affiliate marketing content for a quiet-luxury fashion &amp; lifestyle niche. Producing OOTD videos, styling tips, and product reviews that drive engagement and sales conversion through TikTok Shop links.',
    workflow_title:'My Professional Workflow',
    ws1:'Research', ws2:'Strategy', ws3:'Design', ws4:'Development', ws5:'Testing', ws6:'Launch',
    hard_skills:'⚡ Hard Skills', soft_skills:'🧠 Soft Skills', sk_comm:'Professional Communication', sk_adapt:'Adaptability &amp; Learning',
    faq_title:'Frequently Asked Questions',
    faq1_q:'Are you available to work remotely?', faq1_a:'Yes! I work with clients globally using modern collaboration tools.',
    faq2_q:'How long does website development take?', faq2_a:'Landing page: 3-7 days. Company profile website: 1-2 weeks.',
    faq3_q:'What digital marketing services do you offer?', faq3_a:'Social media content strategy, on-page SEO, visual content creation, and performance analytics.',
    faq4_q:'What tools do you use in the design process?', faq4_a:'Canva, VS Code, Claude AI, Midjourney, Kling AI, CapCut, Gemini.',
    faq5_q:'Are there revisions after the project is done?', faq5_a:'Yes, every project includes revision sessions to ensure client satisfaction.',
    faq6_q:'How does payment work?', faq6_a:'50% deposit upfront, remainder upon project completion.',
    faq7_q:'Can you work in English?', faq7_a:'Yes, I can work in both Indonesian and English.',
    cta_title:'Ready to Start Your Project?', cta_desc:'Contact me now for a free digital project consultation.', cta_wa:'💬 Chat on WhatsApp', cta_email:'📧 Send Message',
    contact_label:'Contact Me', contact_title:"Let's <span>Collaborate</span>", contact_desc:"I'm always open to discussing new projects and collaboration opportunities.",
    otw_block:'I\'m currently <strong>actively seeking opportunities</strong> as a Digital Marketing Specialist, Web Developer, or Creative.',
    loc_badge:'📍 Based in <strong>Jakarta, Indonesia (GMT+7)</strong> — Available for remote work worldwide.',
    form_title:'Send a Direct Message', form_name:'Full Name', form_service:'Service Type', form_select:'— Select Service —', form_msg:'Message', form_submit:'🚀 Send Message', wa_cta_btn:'💬 Chat via WhatsApp',
    story_label:'My Story', story_title:'Deeper Into <span>My Journey</span>',
    story_p1:'My digital journey began at <strong>Politeknik APP Jakarta</strong>.',
    story_p2:'I actively explored graphic design, coding, and digital marketing independently.',
    story_p3:'A key moment: my internship at <strong>PT Niagamas &amp; PT Power Elektrika</strong>.',
    story_p4:'I also appeared as <strong>Creative Talent</strong> in <strong>Good Day</strong> and <strong>IndiHome</strong> ads.',
    story_p5:'As <strong>Sponsorship Coordinator</strong> at APP Fair, I developed leadership and negotiation skills.',
    story_p6:'Today I\'m ready to make a real impact for your business.',
    values_label:'My Core Values',
    val1_t:'Fast Delivery', val1_d:'On time without compromising quality',
    val2_t:'Honest Communication', val2_d:'Full transparency at every project stage',
    val3_t:'Quality First', val3_d:'Best output is my minimum standard',
    val4_t:'Continuous Learning', val4_d:'Always updated with the latest trends',
    val5_t:'Client Obsessed', val5_d:'Client satisfaction is my top priority',
    edu_label:'Education', edu_major:'Electronics Industry Marketing Management',
    footer_tagline:'Digital Marketer · Web Developer · Creative',
    footer_copy:'Made with ❤️ and lots of ☕ — All Rights Reserved.',
  },
  zh: {
    nav_home:'首页', nav_about:'关于', nav_portfolio:'作品集', nav_services:'服务', nav_contact:'联系', nav_cta:'联系我',
    otw_badge:'🟢 寻求工作机会 — 远程 &amp; 现场',
    hero_badge:'可远程工作 &amp; 接受自由职业',
    hero_desc:'结合营销策略与数字技术，助力业务增长。',
    hero_btn1:'⚡ 立即雇用我', hero_btn2:'🚀 查看我的作品', hero_btn3:'📄 下载简历',
    float_projects:'已完成项目', float_rating:'客户评分',
    about_label:'关于我', about_title:'认识 <span>Ferdi Algafar</span>',
    about_p1:'我是一位多才多艺的数字专业人士，毕业于雅加达APP理工学院。',
    about_p2:'在PT Niagamas和PT Power Elektrika实习期间，我从零开始构建了公司网站。',
    about_p3:'我还是Good Day和IndiHome广告的<strong style="color:var(--cyan)">创意达人</strong>，以及APP Fair的<strong style="color:var(--cyan)">赞助协调员</strong>。',
    stat_companies:'实习公司', stat_projects:'完成项目', stat_tools:'掌握工具', stat_years:'学习年限',
    tools_title:'我掌握的工具与技术',
    exp_label:'职业历程', exp_title:'专业 <span>经验</span>',
    exp1_title:'数字营销 &amp; 网页开发', exp1_desc:'从零开始使用HTML、CSS和JavaScript构建两家公司网站。',
    exp2_title:'创意达人 — 电视 &amp; 数字广告', exp2_desc:'作为创意达人出现在Good Day和IndiHome的广告活动中。',
    exp3_title:'赞助协调员', exp3_desc:'领导APP Fair校园节赞助协调团队。',
    exp4_title:'创意设计师 — 视觉设计 &amp; 内容', exp4_desc:'使用Canva设计视觉内容、宣传海报、品牌识别和营销材料。',
    cert_label:'认证', cert_title:'专业 <span>认证</span>', cert_intro:'我致力于持续自我提升。点击卡片查看证书。',
    porto_label:'我的作品', porto_title:'精选 <span>作品集</span>',
    filter_all:'全部', filter_web:'网站开发', filter_brand:'品牌 &amp; 视觉设计', filter_creative:'创意 &amp; 活动',
    view:'查看',
    tag_web:'网站开发', tag_brand:'品牌识别', tag_visual:'视觉设计', tag_talent:'创意达人', tag_event:'活动管理',
    pw1_title:'PT Niagamas Setiausaha 网站', pw1_desc:'实习期间从零构建的公司网站。',
    pw2_title:'PT Power Elektrika Nusantara 网站', pw2_desc:'实习期间开发的电力分销公司企业网站。',
    pc1_title:'Good Day 电视广告', pc1_desc:'在全国播出的Good Day咖啡品牌电视广告中担任创意达人。',
    pc2_title:'IndiHome 数字广告', pc2_desc:'在IndiHome Telkom Indonesia数字营销活动中担任达人。',
    pc3_title:'APP Fair — 赞助协调员', pc3_desc:'领导APP Fair校园节赞助协调工作。',
    pb5_title:'海报 &amp; 视觉内容设计', pb5_desc:'使用Canva制作海报设计、宣传内容和视觉材料。',
    pb6_title:'企业衬衫 &amp; 周边产品设计', pb6_desc:'实习期间设计企业衬衫和周边产品。',
    pb7_title:'社交媒体内容设计', pb7_desc:'为Instagram、TikTok和LinkedIn创建视觉内容。',
    pb8_title:'视觉识别 &amp; 品牌资产', pb8_desc:'为PT Niagamas Setiausaha和PT Power Elektrika Nusantara开发企业品牌识别资产，包括：年历设计、企业衬衫、宣传横幅和标牌、专业名片、提案模板和信笺。',
    mcb_text:'有意合作？<strong>让我们讨论您的项目！</strong>',
    video_label:'创意视频', video_title:'我的 <span>创意视频</span>', video_intro:'我作为达人出现在全国品牌广告活动中的镜头前经历。',
    vid_badge:'全国活动', vid1_title:'Good Day广告', vid1_desc:'我在Good Day全国电视广告中担任达人的表现。', vid2_title:'IndiHome广告', vid2_desc:'我在IndiHome数字营销活动中担任达人的表现。', vid3_title:'APP Fair 2025 后期影片', vid3_desc:'2025年APP Fair校园节最精彩时刻的记录——我负责协调赞助部分的校园活动。', vid_watch:'在Drive观看',
    skills_label:'技能 &amp; 服务', skills_title:'我如何<br><span>助力您的业务增长</span>', skills_desc:'在竞争激烈的数字时代，我是您的战略伙伴。',
    pillar1_title:'网页开发', pillar1_desc:'构建专业、快速、响应式且SEO友好的网站。',
    pillar2_title:'数字营销', pillar2_desc:'全面的数字营销策略，包括SEO、社交媒体、内容创作和数据分析。',
    pillar3_title:'品牌识别设计', pillar3_desc:'打造强大的品牌识别——从标志到完整视觉系统。',
    pillar4_title:'AI &amp; 视频内容创作', pillar4_desc:'使用Leonardo AI、Kling Video、CapCut和Canva制作AI视频内容，打造有影响力的数字营销活动。',
    exp5_title:'内容创作者 &amp; AI视频编辑', exp5_desc:'管理和发展专注于AI视频内容的TikTok账户。使用Leonardo AI、Kling Video、Canva和CapCut制作高质量创意内容。',
    exp6_title:'设备部门 — 音乐活动JECTFEST', exp6_desc:'管理活动运营需求、设备和后勤。与安保、装饰和赞助团队协调以确保活动顺利进行。',
    exp7_title:'TikTok联盟营销内容创作者', exp7_desc:'为时尚与生活方式领域（安静奢华风、每日穿搭、造型技巧）管理并制作TikTok联盟营销视频内容。负责内容创意、拍摄、剪辑，并策略性地放置TikTok Shop产品链接以最大化销售转化。',
    tag_affiliate:'联盟营销',
    pta1_title:'TikTok联盟营销 — 时尚与生活方式内容', pta1_desc:'为安静奢华风时尚与生活方式领域管理TikTok Shop联盟营销内容。制作每日穿搭视频、造型技巧和产品评测，推动互动和通过TikTok Shop链接实现的销售转化。',
    workflow_title:'我的专业工作流程',
    ws1:'研究', ws2:'策略', ws3:'设计', ws4:'开发', ws5:'测试', ws6:'发布',
    hard_skills:'⚡ 硬技能', soft_skills:'🧠 软技能', sk_comm:'专业沟通', sk_adapt:'适应性 &amp; 学习',
    faq_title:'常见问题',
    faq1_q:'您是否可以远程工作？', faq1_a:'是的！我习惯使用现代协作工具与各地客户合作。',
    faq2_q:'网站开发需要多长时间？', faq2_a:'落地页：3-7天。公司简介网站：1-2周。',
    faq3_q:'您提供哪些数字营销服务？', faq3_a:'社交媒体内容策略、SEO、视觉内容创作、绩效分析。',
    faq4_q:'您在设计过程中使用哪些工具？', faq4_a:'Canva、VS Code、Claude AI、Midjourney、Kling AI、CapCut、Gemini。',
    faq5_q:'项目完成后是否有修改？', faq5_a:'是的，每个项目都包含修改环节以确保客户满意。',
    faq6_q:'如何付款？', faq6_a:'前期支付50%定金，项目完成后支付余款。',
    faq7_q:'您可以用英语完成项目吗？', faq7_a:'是的，我可以用印尼语和英语工作。',
    cta_title:'准备好开始项目了吗？', cta_desc:'立即联系我，获取免费的数字项目咨询。', cta_wa:'💬 WhatsApp联系', cta_email:'📧 发送消息',
    contact_label:'联系我', contact_title:'让我们 <span>合作</span>', contact_desc:'我始终欢迎新项目和合作机会的讨论。',
    otw_block:'我目前正在<strong>积极寻求机会</strong>担任数字营销专员、网页开发或创意职位。',
    loc_badge:'📍 位于<strong>印度尼西亚雅加达 (GMT+7)</strong> — 可全球远程工作。',
    form_title:'直接发送消息', form_name:'全名', form_service:'服务类型', form_select:'— 选择服务 —', form_msg:'留言', form_submit:'🚀 发送消息', wa_cta_btn:'💬 通过WhatsApp联系',
    story_label:'我的故事', story_title:'深入了解 <span>我的历程</span>',
    story_p1:'我的数字之旅从雅加达APP理工学院开始。',
    story_p2:'我积极独立探索图形设计、编程和数字营销。',
    story_p3:'重要时刻：在<strong>PT Niagamas和PT Power Elektrika</strong>的实习。',
    story_p4:'我还在<strong>Good Day</strong>和<strong>IndiHome</strong>广告中担任创意达人。',
    story_p5:'作为APP Fair赞助协调员，我培养了领导力。',
    story_p6:'如今，我准备为您的业务带来真实影响。',
    values_label:'我的核心价值观',
    val1_t:'快速交付', val1_d:'按时完成，不妥协质量',
    val2_t:'诚实沟通', val2_d:'项目每个阶段完全透明',
    val3_t:'质量第一', val3_d:'最佳输出是我的最低标准',
    val4_t:'持续学习', val4_d:'始终跟进最新趋势和技术',
    val5_t:'以客户为中心', val5_d:'客户满意是我的首要任务',
    edu_label:'教育背景', edu_major:'电子工业营销管理',
    footer_tagline:'数字营销 · 网页开发 · 创意',
    footer_copy:'用❤️和大量☕制作 — 版权所有。',
  },
  es: {
    nav_home:'Inicio', nav_about:'Sobre mí', nav_portfolio:'Portafolio', nav_services:'Servicios', nav_contact:'Contacto', nav_cta:'Contrátame',
    otw_badge:'🟢 Abierto al trabajo — Remoto &amp; Presencial',
    hero_badge:'Disponible para trabajo remoto &amp; Freelance',
    hero_desc:'Combinando estrategia de marketing y tecnología digital para hacer crecer tu negocio.',
    hero_btn1:'⚡ Contrátame ahora', hero_btn2:'🚀 Ver mi trabajo', hero_btn3:'📄 Descargar CV',
    float_projects:'Proyectos completados', float_rating:'Valoración clientes',
    about_label:'Sobre mí', about_title:'Conoce a <span>Ferdi Algafar</span>',
    about_p1:'Soy un profesional digital multifacético formado en el <strong style="color:var(--cyan)">Politécnico APP Jakarta</strong>.',
    about_p2:'Mis prácticas en <strong style="color:var(--cyan)">PT Niagamas &amp; PT Power Elektrika</strong> perfeccionaron mi habilidad para construir sitios web desde cero.',
    about_p3:'También soy <strong style="color:var(--cyan)">Talento Creativo</strong> en anuncios de Good Day e IndiHome.',
    stat_companies:'Empresas de prácticas', stat_projects:'Proyectos completados', stat_tools:'Herramientas dominadas', stat_years:'Años de aprendizaje',
    tools_title:'Herramientas &amp; Tecnologías que domino',
    exp_label:'Trayectoria profesional', exp_title:'Experiencia <span>Profesional</span>',
    exp1_title:'Marketing Digital &amp; Desarrollo Web', exp1_desc:'Construí dos sitios web empresariales desde cero usando HTML, CSS y JavaScript.',
    exp2_title:'Talento Creativo — Anuncios TV &amp; Digital', exp2_desc:'Aparecí como talento creativo en las campañas publicitarias de Good Day e IndiHome.',
    exp3_title:'Coordinador de Patrocinios', exp3_desc:'Lideré el equipo de coordinación de patrocinios para el festival universitario APP Fair.',
    exp4_title:'Diseñador Creativo — Diseño Visual &amp; Contenido', exp4_desc:'Diseñé contenido visual, pósters promocionales, identidad de marca y materiales de marketing usando Canva.',
    cert_label:'Certificaciones', cert_title:'Certificaciones <span>Profesionales</span>', cert_intro:'Mi compromiso con el aprendizaje continuo. Haz clic en una tarjeta para ver el certificado.',
    porto_label:'Mi trabajo', porto_title:'Portafolio <span>Selecto</span>',
    filter_all:'Todos', filter_web:'Desarrollo Web', filter_brand:'Marca &amp; Diseño Visual', filter_creative:'Creativo &amp; Campaña',
    view:'Ver',
    tag_web:'Desarrollo Web', tag_brand:'Identidad de Marca', tag_visual:'Diseño Visual', tag_talent:'Talento Creativo', tag_event:'Gestión de Eventos',
    pw1_title:'Sitio web PT Niagamas Setiausaha', pw1_desc:'Sitio web profesional construido desde cero durante las prácticas.',
    pw2_title:'Sitio web PT Power Elektrika Nusantara', pw2_desc:'Sitio corporativo desarrollado durante las prácticas.',
    pc1_title:'Anuncio de TV Good Day', pc1_desc:'Aparecí como talento creativo en el anuncio de televisión nacional de Good Day.',
    pc2_title:'Campaña Digital IndiHome', pc2_desc:'Aparecí como talento en la campaña digital de IndiHome.',
    pc3_title:'APP Fair — Coordinador de Patrocinios', pc3_desc:'Lideré la coordinación de patrocinios para el festival APP Fair.',
    pb5_title:'Diseño de Pósters &amp; Contenido Visual', pb5_desc:'Creé diseños de pósters y materiales visuales usando Canva.',
    pb6_title:'Diseño de Camisa Corporativa &amp; Merchandising', pb6_desc:'Diseñé camisas corporativas y merchandising durante las prácticas.',
    pb7_title:'Diseño de Contenido en Redes Sociales', pb7_desc:'Creé contenido visual para Instagram, TikTok y LinkedIn.',
    pb8_title:'Identidad Visual &amp; Activos de Marca', pb8_desc:'Desarrollé activos de identidad de marca corporativa incluyendo: diseño de calendario anual, camisas corporativas, banners y señalización promocional, tarjetas de presentación profesionales, plantillas de propuesta y membrete — para PT Niagamas Setiausaha y PT Power Elektrika Nusantara.',
    mcb_text:'¿Interesado en colaborar? <strong>¡Hablemos de tu proyecto!</strong>',
    video_label:'Video Creativo', video_title:'Mis <span>Videos Creativos</span>', video_intro:'Mi experiencia frente a la cámara en campañas publicitarias nacionales.',
    vid_badge:'Campaña Nacional', vid1_title:'Anuncio Good Day', vid1_desc:'Mi aparición como talento en el anuncio de TV nacional de Good Day.', vid2_title:'Campaña IndiHome', vid2_desc:'Mi aparición como talento en la campaña digital de IndiHome.', vid3_title:'After Movie APP Fair 2025', vid3_desc:'Documentación de los mejores momentos del Festival APP Fair 2025, el evento universitario donde coordiné la división de patrocinios.', vid_watch:'Ver en Drive',
    skills_label:'Habilidades &amp; Servicios', skills_title:'Cómo puedo<br><span>Hacer crecer tu negocio</span>', skills_desc:'En esta era digital competitiva, soy tu socio estratégico.',
    pillar1_title:'Desarrollo Web', pillar1_desc:'Construyo sitios web profesionales, rápidos, responsivos y SEO-friendly.',
    pillar2_title:'Marketing Digital', pillar2_desc:'Estrategia integral: SEO, redes sociales, creación de contenido y analítica.',
    pillar3_title:'Diseño de Identidad de Marca', pillar3_desc:'Creación de identidades de marca sólidas.',
    pillar4_title:'Creación de Contenido AI &amp; Video', pillar4_desc:'Producción de contenido de video basado en IA utilizando Leonardo AI, Kling Video, CapCut y Canva para campañas digitales impactantes.',
    exp5_title:'Creador de Contenido &amp; Editor de Video AI', exp5_desc:'Gestión y crecimiento de una cuenta TikTok enfocada en contenido de video basado en IA. Uso de Leonardo AI, Kling Video, Canva y CapCut para producir contenido creativo de alta calidad.',
    exp6_title:'División de Equipos — Evento Musical JECTFEST', exp6_desc:'Gestión de necesidades operativas, equipos y logística del evento. Coordinación con equipos de seguridad, decoración y patrocinadores para una ejecución fluida.',
    exp7_title:'Creador de Contenido Afiliado en TikTok', exp7_desc:'Gestión y producción de contenido de video de marketing de afiliados en TikTok para el nicho de moda &amp; estilo de vida (quiet luxury, OOTD, consejos de estilo). Responsable de las ideas de contenido, grabación, edición y colocación estratégica de enlaces de productos de TikTok Shop para maximizar la conversión de ventas.',
    tag_affiliate:'Marketing de Afiliados',
    pta1_title:'Afiliado TikTok — Contenido de Moda &amp; Estilo de Vida', pta1_desc:'Gestión de contenido de marketing de afiliados de TikTok Shop para un nicho de moda quiet-luxury &amp; estilo de vida. Producción de videos OOTD, consejos de estilo y reseñas de productos que impulsan el engagement y la conversión de ventas a través de enlaces de TikTok Shop.',
    workflow_title:'Mi Flujo de Trabajo Profesional',
    ws1:'Investigación', ws2:'Estrategia', ws3:'Diseño', ws4:'Desarrollo', ws5:'Pruebas', ws6:'Lanzamiento',
    hard_skills:'⚡ Habilidades Técnicas', soft_skills:'🧠 Habilidades Blandas', sk_comm:'Comunicación Profesional', sk_adapt:'Adaptabilidad &amp; Aprendizaje',
    faq_title:'Preguntas Frecuentes',
    faq1_q:'¿Estás disponible para trabajar de forma remota?', faq1_a:'¡Sí! Trabajo con clientes de todo el mundo.',
    faq2_q:'¿Cuánto tiempo lleva desarrollar un sitio web?', faq2_a:'Landing page: 3-7 días. Sitio corporativo: 1-2 semanas.',
    faq3_q:'¿Qué servicios de marketing digital ofreces?', faq3_a:'Estrategia de redes sociales, SEO, creación de contenido visual, análisis de rendimiento.',
    faq4_q:'¿Qué herramientas utilizas en el proceso de diseño?', faq4_a:'Canva, VS Code, Claude AI, Midjourney, Kling AI, CapCut, Gemini.',
    faq5_q:'¿Hay revisiones después de terminar el proyecto?', faq5_a:'Sí, cada proyecto incluye sesiones de revisión.',
    faq6_q:'¿Cómo funciona el pago?', faq6_a:'50% de anticipo al inicio, el resto al completar el proyecto.',
    faq7_q:'¿Puedes trabajar en inglés?', faq7_a:'Sí, trabajo tanto en indonesio como en inglés.',
    cta_title:'¿Listo para empezar tu proyecto?', cta_desc:'Contáctame ahora para una consulta gratuita.', cta_wa:'💬 Chat en WhatsApp', cta_email:'📧 Enviar mensaje',
    contact_label:'Contáctame', contact_title:'Vamos a <span>Colaborar</span>', contact_desc:'Siempre estoy abierto a discutir nuevos proyectos.',
    otw_block:'Actualmente estoy <strong>buscando activamente oportunidades</strong> como Especialista en Marketing Digital, Desarrollador Web o Creativo.',
    loc_badge:'📍 Ubicado en <strong>Yakarta, Indonesia (GMT+7)</strong> — Disponible para trabajo remoto.',
    form_title:'Enviar un mensaje directo', form_name:'Nombre completo', form_service:'Tipo de servicio', form_select:'— Seleccionar servicio —', form_msg:'Mensaje', form_submit:'🚀 Enviar mensaje', wa_cta_btn:'💬 Chat por WhatsApp',
    story_label:'Mi historia', story_title:'Más sobre <span>Mi trayectoria</span>',
    story_p1:'Mi viaje digital comenzó en el <strong>Politécnico APP Jakarta</strong>.',
    story_p2:'Exploré el diseño gráfico, programación y marketing digital de forma independiente.',
    story_p3:'Un momento clave: mis prácticas en <strong>PT Niagamas y PT Power Elektrika</strong>.',
    story_p4:'También aparecí como <strong>Talento Creativo</strong> en anuncios de <strong>Good Day</strong> e <strong>IndiHome</strong>.',
    story_p5:'Como <strong>Coordinador de Patrocinios</strong> en APP Fair, desarrollé habilidades de liderazgo.',
    story_p6:'Hoy estoy listo para generar un impacto real en tu negocio.',
    values_label:'Mis Valores Fundamentales',
    val1_t:'Entrega Rápida', val1_d:'A tiempo sin comprometer la calidad',
    val2_t:'Comunicación Honesta', val2_d:'Transparencia total en cada etapa',
    val3_t:'Calidad Primero', val3_d:'El mejor resultado es mi estándar mínimo',
    val4_t:'Aprendizaje Continuo', val4_d:'Siempre actualizado con las últimas tendencias',
    val5_t:'Obsesionado con el Cliente', val5_d:'La satisfacción del cliente es mi prioridad',
    edu_label:'Educación', edu_major:'Gestión de Marketing Industrial Electrónico',
    footer_tagline:'Marketing Digital · Desarrollo Web · Creativo',
    footer_copy:'Hecho con ❤️ y mucho ☕ — Todos los derechos reservados.',
  }
};

let currentLang = 'id';

function setLang(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  /* FIX #13: Update html lang attribute untuk screen reader */
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('onclick') === `setLang('${lang}')`);
    b.setAttribute('aria-pressed', b.getAttribute('onclick') === `setLang('${lang}')`);
  });
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  const roles = {
    id: ['Digital Marketer', 'Web Developer', 'Creative Talent', 'Creative Designer'],
    en: ['Digital Marketer', 'Web Developer', 'Creative Talent', 'Creative Designer'],
    zh: ['数字营销', '网页开发者', '创意达人', '创意设计师'],
    es: ['Marketing Digital', 'Desarrollador Web', 'Talento Creativo', 'Diseñador Creativo'],
  };
  typewriterRoles = roles[lang] || roles.id;
}

/* ================================================
   CASE STUDY DATA
================================================ */
const caseStudies = {
  pw1: {
    title: 'Case Study — Website PT Niagamas Setiausaha',
    problem: 'Perusahaan belum memiliki website sehingga calon klien dan mitra bisnis sulit menemukan informasi perusahaan secara online.',
    process: 'Membangun website dari nol menggunakan HTML, CSS, JavaScript. Meliputi: riset kebutuhan, wireframe, development front-end responsif, optimasi performa, testing, dan launching.',
    result: 'Website berhasil diluncurkan sebagai wajah digital perusahaan. Perusahaan kini memiliki kehadiran online profesional.'
  },
  pw2: {
    title: 'Case Study — Website PT Power Elektrika Nusantara',
    problem: 'Perusahaan distribusi ketenagalistrikan membutuhkan kehadiran digital profesional untuk menampilkan katalog produk dan mempermudah komunikasi B2B.',
    process: 'Membangun website corporate dengan HTML, CSS, JavaScript. Fitur: halaman beranda dinamis, profil perusahaan, katalog produk, dan halaman kontak responsif.',
    result: 'Website responsive berhasil dikembangkan. Klien B2B kini dapat mengakses informasi produk melalui platform digital yang profesional.'
  },
  pc3: {
    title: 'Case Study — Koordinator Sponsorship APP Fair 2025',
    problem: 'Festival kampus APP Fair membutuhkan pendanaan dari pihak eksternal untuk mendukung operasional acara, namun belum memiliki jaringan sponsor yang terstruktur dan materi pitching yang profesional.',
    process: 'Menyusun proposal sponsorship, pitch deck, dan materi presentasi yang profesional untuk calon sponsor. Melakukan pendekatan, negosiasi, dan komunikasi persuasif secara langsung maupun digital kepada lebih dari 20 calon mitra. Menjaga komunikasi aktif dan responsif untuk memastikan kepuasan dan loyalitas mitra sepanjang acara berlangsung.',
    result: 'Berhasil menjalin kerja sama dengan lebih dari 20 sponsor melalui negosiasi dan komunikasi bisnis yang terstruktur. Festival APP Fair 2025 berjalan sukses dengan dukungan pendanaan yang tercapai. Mendapat pengakuan atas kemampuan leadership, negosiasi, dan manajemen relasi bisnis.'
  },
  clipper1: {
    title: 'Case Study — TikTok ClipperPoint (AI Video Creator)',
    problem: 'Ingin membangun personal branding digital di bidang AI video content yang sedang berkembang pesat, namun memerlukan strategi konten yang konsisten dan tool yang tepat untuk menghasilkan video berkualitas tinggi secara efisien.',
    process: 'Menggunakan Leonardo AI untuk generasi visual dan aset gambar berbasis AI, Kling Video untuk produksi video AI sinematik, CapCut untuk editing dan post-production, serta Canva untuk desain thumbnail dan branding. Menerapkan strategi visual storytelling yang konsisten dan jadwal posting yang teratur untuk membangun audiens organik.',
    result: 'Berhasil membangun akun TikTok dengan konten AI video yang konsisten dan berkualitas tinggi. Mengembangkan kemampuan produksi konten end-to-end menggunakan ekosistem AI tools terkini. Membangun personal brand sebagai AI Content Creator yang relevan di era digital 2025.'
  },
  pc1: {
    title: 'Case Study — Iklan TV Good Day',
    problem: 'Brand Good Day membutuhkan wajah talent muda yang energik dan relatable untuk kampanye iklan televisi skala nasional agar lebih dekat dengan target audiens generasi muda.',
    process: 'Mengikuti proses audisi dan seleksi talent, briefing konsep kreatif bersama tim produksi, rehearsal, hingga pengambilan gambar di lokasi syuting profesional.',
    result: 'Berhasil tampil sebagai talent dalam iklan TV Good Day yang ditayangkan secara nasional. Mendapatkan pengalaman berharga dalam dunia produksi iklan televisi dan on-camera performance.'
  },
  pc2: {
    title: 'Case Study — Kampanye Digital IndiHome',
    problem: 'IndiHome Telkom Indonesia membutuhkan konten iklan digital yang autentik dengan talent muda untuk memperkuat brand awareness di platform digital.',
    process: 'Terlibat dalam proses produksi kampanye digital mulai dari briefing kreatif, penentuan konsep visual, hingga pengambilan gambar untuk konten digital multi-platform.',
    result: 'Berhasil menjadi bagian dari kampanye digital IndiHome Telkom Indonesia. Konten ditayangkan di platform digital nasional dan memperkuat portfolio sebagai creative talent.'
  },
  pb5: {
    title: 'Case Study — Desain Poster & Konten Visual',
    problem: 'Perusahaan dan klien membutuhkan materi visual promosi yang menarik, konsisten dengan identitas brand, dan siap pakai untuk berbagai kebutuhan pemasaran.',
    process: 'Merancang berbagai jenis poster promosi, konten media sosial, dan materi visual menggunakan Canva. Menyesuaikan setiap desain dengan panduan brand, target audiens, dan platform yang dituju.',
    result: 'Menghasilkan puluhan aset visual yang digunakan dalam kampanye pemasaran perusahaan. Meningkatkan konsistensi visual brand dan engagement konten di media sosial.'
  },
  pb6: {
    title: 'Case Study — Desain Kemeja & Merchandise Corporate',
    problem: 'Perusahaan membutuhkan merchandise corporate yang mencerminkan identitas brand secara profesional untuk kebutuhan internal dan representasi perusahaan.',
    process: 'Merancang desain kemeja corporate menggunakan Canva dengan mempertimbangkan warna brand, logo placement, dan kenyamanan visual. Melakukan revisi berdasarkan feedback manajemen hingga desain disetujui.',
    result: 'Desain kemeja corporate berhasil diproduksi dan digunakan oleh tim perusahaan. Merchandise memperkuat identitas visual brand dalam lingkungan kerja profesional.'
  },
  pb7: {
    title: 'Case Study — Desain Konten Sosial Media',
    problem: 'Perusahaan membutuhkan konten visual yang konsisten dan menarik untuk platform Instagram, TikTok, dan LinkedIn guna meningkatkan brand presence di media sosial.',
    process: 'Merancang template dan konten visual yang disesuaikan dengan karakteristik setiap platform. Menggunakan Canva untuk membuat feed yang konsisten, informatif, dan estetis sesuai target audiens masing-masing platform.',
    result: 'Menghasilkan konten visual siap pakai untuk tiga platform media sosial utama. Konten mendukung strategi pemasaran digital perusahaan dan meningkatkan konsistensi tampilan brand online.'
  },
  pb8: {
    title: 'Case Study — Visual Identity & Branding Assets',
    problem: 'PT Niagamas Setiausaha dan PT Power Elektrika Nusantara membutuhkan paket lengkap aset visual identitas brand korporat yang profesional dan konsisten untuk mendukung kegiatan operasional dan pemasaran.',
    process: 'Merancang secara komprehensif seluruh aset brand identity menggunakan Canva, meliputi: desain kalender tahunan, kemeja korporat, banner dan spanduk promosi, kartu nama profesional, template proposal, dan kop surat. Setiap elemen disesuaikan dengan panduan warna dan identitas visual masing-masing perusahaan.',
    result: 'Berhasil menghasilkan paket lengkap branding assets untuk dua perusahaan. Aset-aset tersebut langsung digunakan dalam operasional perusahaan dan meningkatkan kesan profesional dalam komunikasi bisnis.'
  },
  ject1: {
    title: 'Case Study — Divisi Perlengkapan Event Music JECTFEST 2024',
    problem: 'Event musik kampus JECTFEST 2024 membutuhkan manajemen logistik dan perlengkapan yang terorganisir untuk memastikan semua kebutuhan operasional tersedia tepat waktu dan sesuai standar.',
    process: 'Mengkoordinasikan seluruh kebutuhan perlengkapan dan logistik event dari tahap perencanaan hingga pelaksanaan. Berkoordinasi aktif dengan tim keamanan, dekorasi, dan sponsor. Memantau progress persiapan, mengelola hubungan dengan vendor, dan memastikan dokumentasi kegiatan berjalan baik.',
    result: 'Event musik JECTFEST 2024 berjalan lancar dengan seluruh kebutuhan operasional dan logistik terpenuhi sesuai rencana. Mendapat pengalaman berharga dalam manajemen event dan koordinasi multi-tim.'
  },
  googleads1: {
    title: 'Case Study — Google Ads & AI-Powered Performance Ads Certification',
    problem: 'Untuk bersaing sebagai digital marketer profesional, dibutuhkan validasi kompetensi resmi dalam merancang dan mengoptimalkan kampanye iklan digital, termasuk pemanfaatan teknologi AI yang kini menjadi standar industri Google Ads.',
    process: 'Mengikuti pelatihan dan ujian sertifikasi resmi di Google Skillshop, mempelajari strategi targeting audiens, optimasi iklan display, serta pemanfaatan fitur AI-Powered Performance Ads untuk meningkatkan efektivitas dan efisiensi kampanye.',
    result: 'Berhasil meraih dua sertifikasi resmi Google: Google Ads Display Certification dan AI-Powered Performance Ads Certification (berlaku 2026 — 2027), memperkuat kredibilitas sebagai digital marketer yang kompeten dalam advertising berbasis data dan AI.'
  },
  tiktokaffiliate1: {
    title: 'Case Study — TikTok Affiliate Marketing (Fashion & Lifestyle)',
    problem: 'Akun TikTok niche fashion & lifestyle (quiet luxury, OOTD) membutuhkan strategi konten yang konsisten agar mampu mengubah penonton menjadi pembeli melalui TikTok Shop, bukan sekadar mengejar views semata.',
    process: 'Merancang ide konten mingguan (OOTD, styling tips, mix & match outfit, review produk), melakukan pengambilan gambar dan editing menggunakan CapCut & Canva, menulis caption dan hook yang persuasif, serta menempatkan link produk TikTok Shop secara strategis di setiap video. Menganalisis performa konten (views, likes, saves) untuk terus menyesuaikan gaya visual dan waktu posting.',
    result: 'Konten berhasil membangun engagement organik yang stabil dengan ribuan likes per video dan pertumbuhan pengikut yang konsisten. Beberapa video dengan performa terbaik berkontribusi langsung pada peningkatan klik dan penjualan produk melalui link affiliate TikTok Shop.'
  }
};

function openModal(key) {
  const cs = caseStudies[key];
  if (!cs) return;
  const modal = document.getElementById('caseStudyModal');
  if (!modal) return;
  document.getElementById('modalTitle').textContent = cs.title;
  document.getElementById('modalProblem').textContent = cs.problem;
  document.getElementById('modalProcess').textContent = cs.process;
  document.getElementById('modalResult').textContent = cs.result;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  const modal = document.getElementById('caseStudyModal');
  if (modal && e.target === modal) { modal.classList.remove('open'); document.body.style.overflow = ''; }
}

const modalCloseBtn = document.getElementById('modalCloseBtn');
if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', () => {
    const modal = document.getElementById('caseStudyModal');
    if (modal) { modal.classList.remove('open'); document.body.style.overflow = ''; }
  });
}

/* ================================================
   CERT LIGHTBOX FUNCTIONS
================================================ */
function openCertLightbox(filename, caption) {
  const lb     = document.getElementById('certLightbox');
  const img    = document.getElementById('lightboxImg');
  const cap    = document.getElementById('lightboxCaption');
  const errMsg = document.getElementById('lightboxErr');
  img.style.display   = 'block';
  errMsg.style.display = 'none';
  img.src = filename;
  img.alt = caption;
  cap.textContent = caption;
  lb.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeCertLightbox() {
  const lb = document.getElementById('certLightbox');
  lb.style.display = 'none';
  document.getElementById('lightboxImg').src = '';
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeCertLightbox();
    const modal = document.getElementById('caseStudyModal');
    if (modal && modal.classList.contains('open')) { modal.classList.remove('open'); document.body.style.overflow = ''; }
  }
});

/* ================================================
   FIX #2 VIDEO SYSTEM — preload=none + IO autoplay
   Tidak bergantung pada canplaythrough, langsung play
   saat masuk viewport
================================================ */
const videoConfig = [
  { videoId:'vid1', overlayId:'overlay1', loadId:'vload1', errorId:'verror1', muteBtnId:'muteBtn1', statusTextId:'statusText1' },
  { videoId:'vid2', overlayId:'overlay2', loadId:'vload2', errorId:'verror2', muteBtnId:'muteBtn2', statusTextId:'statusText2' },
];

function setVideoStatus(statusTextId, msg) {
  const el = document.getElementById(statusTextId);
  if (el) el.textContent = msg;
}

function initVideos() {
  videoConfig.forEach(cfg => {
    const video   = document.getElementById(cfg.videoId);
    if (!video) return;
    const overlay = document.getElementById(cfg.overlayId);
    const loading = document.getElementById(cfg.loadId);
    const errorEl = document.getElementById(cfg.errorId);

    video.addEventListener('playing', () => {
      if (loading) loading.classList.add('hidden');
      if (overlay) overlay.classList.remove('visible');
      setVideoStatus(cfg.statusTextId, '▶ Sedang diputar');
    });

    video.addEventListener('pause', () => {
      if (overlay) overlay.classList.add('visible');
      setVideoStatus(cfg.statusTextId, '⏸ Dijeda');
    });

    video.addEventListener('waiting', () => {
      setVideoStatus(cfg.statusTextId, 'Buffering...');
    });

    video.addEventListener('error', () => {
      if (loading) loading.classList.add('hidden');
      if (overlay) overlay.classList.remove('visible');
      if (errorEl) errorEl.classList.add('show');
      setVideoStatus(cfg.statusTextId, '⚠ File tidak ditemukan — tonton di Drive ↑');
    });

    video.addEventListener('click', () => togglePlay(cfg.videoId, cfg.overlayId, cfg.loadId));
  });
}

/* FIX #2: IntersectionObserver autoplay — load video saat hampir masuk viewport,
   langsung play tanpa menunggu canplaythrough */
function initVideoAutoplay() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const wrap  = entry.target;
      const video = wrap.querySelector('video');
      if (!video) return;
      const cfg     = videoConfig.find(c => c.videoId === video.id);
      if (!cfg) return;
      const errorEl = document.getElementById(cfg.errorId);
      const loading = document.getElementById(cfg.loadId);
      const overlay = document.getElementById(cfg.overlayId);

      if (entry.isIntersecting) {
        if (errorEl && errorEl.classList.contains('show')) return;
        /* Load video src baru saat masuk viewport (preload=none) */
        if (video.readyState === 0) {
          if (loading) loading.classList.remove('hidden');
          setVideoStatus(cfg.statusTextId, 'Memuat video...');
          video.load();
        }
        /* Langsung play, tanpa menunggu canplaythrough */
        video.play()
          .then(() => {
            if (loading) loading.classList.add('hidden');
            if (overlay) overlay.classList.remove('visible');
            setVideoStatus(cfg.statusTextId, '▶ Sedang diputar');
          })
          .catch(() => {
            /* Autoplay diblokir browser — tampilkan tombol play */
            if (loading) loading.classList.add('hidden');
            if (overlay) overlay.classList.add('visible');
            setVideoStatus(cfg.statusTextId, 'Klik ▶ untuk memutar');
          });
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.25, rootMargin: '100px' });

  document.querySelectorAll('.video-player-wrap').forEach(wrap => observer.observe(wrap));
}

function togglePlay(videoId, overlayId, loadId) {
  const video   = document.getElementById(videoId);
  const overlay = document.getElementById(overlayId);
  const loading = document.getElementById(loadId);
  if (!video) return;
  const cfg = videoConfig.find(c => c.videoId === videoId);
  if (cfg) {
    const errorEl = document.getElementById(cfg.errorId);
    if (errorEl && errorEl.classList.contains('show')) return;
  }
  if (video.paused) {
    if (video.readyState === 0) { video.load(); }
    if (loading) loading.classList.remove('hidden');
    video.play()
      .then(() => { if (loading) loading.classList.add('hidden'); })
      .catch(() => { if (loading) loading.classList.add('hidden'); });
    if (overlay) overlay.classList.remove('visible');
  } else {
    video.pause();
    if (overlay) overlay.classList.add('visible');
  }
}

function retryVideoLoad(videoId, overlayId, loadId, errorId) {
  const video   = document.getElementById(videoId);
  const overlay = document.getElementById(overlayId);
  const loading = document.getElementById(loadId);
  const errorEl = document.getElementById(errorId);
  if (!video) return;
  if (errorEl) errorEl.classList.remove('show');
  if (loading) loading.classList.remove('hidden');
  video.load();
  video.play()
    .then(() => {
      if (loading) loading.classList.add('hidden');
      if (overlay) overlay.classList.remove('visible');
    })
    .catch(() => {
      if (loading) loading.classList.add('hidden');
      if (overlay) overlay.classList.add('visible');
      if (errorEl) errorEl.classList.add('show');
    });
}

function toggleMute(videoId, btnId) {
  const video = document.getElementById(videoId);
  const btn   = document.getElementById(btnId);
  if (!video || !btn) return;
  if (video.muted) {
    /* Saat unmute satu video, mute video lain */
    videoConfig.forEach(cfg => {
      if (cfg.videoId !== videoId) {
        const v = document.getElementById(cfg.videoId);
        const b = document.getElementById(cfg.muteBtnId);
        if (v) v.muted = true;
        if (b) b.textContent = '🔇';
      }
    });
    video.muted = false;
    btn.textContent = '🔊';
    btn.setAttribute('aria-label', 'Matikan suara');
  } else {
    video.muted = true;
    btn.textContent = '🔇';
    btn.setAttribute('aria-label', 'Aktifkan suara');
  }
}

/* ================================================
   FIX #2: CUSTOM CURSOR — hanya pada pointer:fine
================================================ */
if (window.matchMedia('(pointer: fine)').matches) {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  let mx=0, my=0, rx=0, ry=0;
  if (dot && ring) {
    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx+'px'; dot.style.top = my+'px';
    });
    (function animCursor() {
      rx += (mx-rx)*.14; ry += (my-ry)*.14;
      ring.style.left = rx+'px'; ring.style.top = ry+'px';
      requestAnimationFrame(animCursor);
    })();
    document.querySelectorAll('a,button,.filter-btn,.faq-q,.cert-card,.porto-card').forEach(el => {
      el.addEventListener('mouseenter', () => { ring.style.width='56px'; ring.style.height='56px'; ring.style.opacity='1'; });
      el.addEventListener('mouseleave', () => { ring.style.width='36px'; ring.style.height='36px'; ring.style.opacity='.6'; });
    });
  }
}

/* ================================================
   SCROLL
================================================ */
const scrollBar = document.getElementById('scroll-bar');
const backTop   = document.getElementById('back-top');
const navbar    = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  if (scrollBar) scrollBar.style.width = pct + '%';
  if (backTop)   backTop.classList.toggle('visible', window.scrollY > 400);
  if (navbar)    navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ================================================
   HAMBURGER
================================================ */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    hamburger.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi');
  });
  document.addEventListener('click', (e) => {
    if (mobileNav.classList.contains('open') && !mobileNav.contains(e.target) && !hamburger.contains(e.target)) closeMobile();
  });
}
function closeMobile() {
  if (hamburger) { hamburger.classList.remove('open'); hamburger.setAttribute('aria-expanded','false'); hamburger.setAttribute('aria-label','Buka menu navigasi'); }
  if (mobileNav) mobileNav.classList.remove('open');
}

/* ================================================
   TYPEWRITER
================================================ */
let typewriterRoles = ['Digital Marketer', 'Web Developer', 'Creative Talent', 'Creative Designer'];
let ri=0, ci=0, deleting=false;
const tw = document.getElementById('typewriter-text');
function typeLoop() {
  if (!tw) return;
  const current = typewriterRoles[ri] || '';
  if (!deleting) {
    tw.textContent = current.slice(0, ci+1); ci++;
    if (ci === current.length) { deleting=true; setTimeout(typeLoop,1800); return; }
    setTimeout(typeLoop, 80);
  } else {
    tw.textContent = current.slice(0, ci-1); ci--;
    if (ci === 0) { deleting=false; ri=(ri+1)%typewriterRoles.length; }
    setTimeout(typeLoop, 45);
  }
}
typeLoop();

/* ================================================
   FIX #5: PARTICLES CANVAS — kurangi partikel & hapus koneksi O(n²)
   untuk performa lebih baik di mobile/mid-low device
================================================ */
const canvas = document.getElementById('particles-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  function resizeCanvas() { canvas.width=window.innerWidth; canvas.height=window.innerHeight; }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas, { passive: true });

  /* Kurangi jumlah partikel: 120→50 desktop, 40→20 mobile */
  const isMobile = window.innerWidth < 768;
  const pCount = isMobile ? 20 : 50;

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x=Math.random()*canvas.width; this.y=Math.random()*canvas.height;
      this.vx=(Math.random()-.5)*.4; this.vy=(Math.random()-.5)*.4;
      this.radius=Math.random()*1.8+.3; this.alpha=Math.random()*.5+.1;
      this.color=Math.random()>.5?'0,245,255':'0,191,255';
    }
    update() { this.x+=this.vx; this.y+=this.vy; if(this.x<0||this.x>canvas.width||this.y<0||this.y>canvas.height) this.reset(); }
    draw() { ctx.beginPath(); ctx.arc(this.x,this.y,this.radius,0,Math.PI*2); ctx.fillStyle=`rgba(${this.color},${this.alpha})`; ctx.fill(); }
  }
  const particles = [];
  for (let i=0; i<pCount; i++) particles.push(new Particle());

  /* FIX #5: Hapus nested loop O(n²) koneksi antar partikel */
  (function animParticles() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animParticles);
  })();
}

/* ================================================
   TOOLS MARQUEE — SVG INLINE LOGOS
================================================ */
const TOOL_SVG = {
  html5: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#E34F26" d="M107.6 470L26 26h460l-81.6 444L255.6 490z"/><path fill="#EF652A" d="M256 461.3l131.9-36.3 69.8-381.2H256z"/><path fill="#fff" d="M256 128H140.8l3.5 39.3H256v38.6H152.4l3.7 45.8H256V290h-95.3l4.9 52.4 90.4 24.7v42.2l-77.5-21.3-5.2-57.2h-38.8l4.8 60.2L256 412.6z"/><path fill="#ebebeb" d="M256 128v38.6h106.1l-3.5 39.3H256v38.6h99.1l-9.5 101.7L256 366.1v41.3l77.5-21.3 10.7-120.8H192.8L256 128z"/></svg>`,
  css3: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#264DE4" d="M72 460L26.5 2H486L399 460l-143 40z"/><path fill="#2965F1" d="M256 413l115.7-32 34.8-381H256z"/><path fill="#fff" d="M256 208.1H152.4l3.5 38.5H256v-38.5zm0-79.1H127l12 133h117v-41l-63.8-16-4.2-53.6H158l-7 77H256z"/><path fill="#ebebeb" d="M256 208.1v38.5h99.1l-9.5 101.7L256 371v42.1l115.7-32 9.3-93H256zm0-79.1v38.5h106.1L359 206l3.5-38.5H256z"/></svg>`,
  javascript: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630"><rect width="630" height="630" fill="#F7DF1E"/><path d="M423.2 492.2c12.7 20.8 29.3 36.1 58.6 36.1 24.6 0 40.4-12.3 40.4-29.3 0-20.3-16.2-27.5-43.4-39.3l-14.9-6.4c-43-18.3-71.6-41.3-71.6-89.8 0-44.7 34.1-78.8 87.3-78.8 37.9 0 65.2 13.2 84.8 47.7l-46.4 29.8c-10.2-18.3-21.2-25.5-38.4-25.5-17.5 0-28.6 11.1-28.6 25.5 0 17.9 11.1 25.1 36.8 36.2l14.9 6.4c50.7 21.7 79.3 43.9 79.3 93.7 0 53.7-42.2 83.1-98.9 83.1-55.5 0-91.3-26.4-108.9-61.1zm-209.8 5.2c9.3 16.5 17.7 30.5 37.9 30.5 19.3 0 31.5-7.6 31.5-37.2V286.7h57.4v205.3c0 61.3-35.9 89.1-88.4 89.1-47.4 0-74.8-24.5-88.9-54z"/></svg>`,
  python: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs><linearGradient id="py-a" x1="70.25" y1="137.36" x2="174.6" y2="37.38" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5a9fd4"/><stop offset="1" stop-color="#306998"/></linearGradient><linearGradient id="py-b" x1="209.47" y1="190.01" x2="108.22" y2="88.11" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffe371"/><stop offset="1" stop-color="#ffc331"/></linearGradient></defs><path fill="url(#py-a)" d="M63.4 4.5C41.4 4.5 42.6 14.6 42.6 14.6l.1 10.4h41.5v4H29.8S12.5 27.2 12.5 49.7c0 22.5 12.4 21.7 12.4 21.7h7.4V60.3s-.4-12.4 12.2-12.4h41s11.8.2 11.8-11.4V15.7S99.1 4.5 63.4 4.5zm-22.9 7.3c2.2 0 3.9 1.7 3.9 3.9s-1.7 3.9-3.9 3.9-3.9-1.7-3.9-3.9 1.7-3.9 3.9-3.9z"/><path fill="url(#py-b)" d="M64.6 123.5c22 0 20.8-10.1 20.8-10.1l-.1-10.4H43.8v-4h54.3s17.3 1.8 17.3-20.7c0-22.5-12.4-21.7-12.4-21.7h-7.4v11.4s.4 12.4-12.2 12.4h-41S31.2 80.2 31.2 91.8V110s-1.7 13.5 33.4 13.5zm22.9-7.3c-2.2 0-3.9-1.7-3.9-3.9s1.7-3.9 3.9-3.9 3.9 1.7 3.9 3.9-1.7 3.9-3.9 3.9z"/></svg>`,
  canva: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle cx="100" cy="100" r="100" fill="#7D2AE8"/><path fill="#fff" d="M123.3 63.2C108.1 63.2 97.4 72.8 92.5 85.4c-3.5-10-14.3-22.2-26.9-22.2C50.8 63.2 40 76.7 40 93c0 14.7 9 29.3 26.5 37l26.9 12.1c-2.7 6.6-4.6 11.7-8.9 11.7H72v13h44c15.8 0 28.7-11.1 34.7-30.6 1.3-4.2 2.4-8.7 2.4-13.7 0-33-4.3-59.3-29.8-59.3zM62.7 93.2c0-8.2 5.2-15.5 11.7-15.5 6.7 0 10.3 6.7 10.3 17.1 0 4.7-.8 8.4-2.6 11.3l-19.4-8.8v-4.1zm69.8 20.5c-2.5 8.9-7.3 15.2-15.4 15.2l-15-15.2c.5-2.4 1.1-4.8 1.9-7.2 3.3-10.7 9.7-18.5 19.7-18.5 12.6 0 14.9 13.3 8.8 25.7z"/></svg>`,
  claudeai: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 46" fill="none"><path fill="#D97757" d="M22.8 4C12.4 4 4 12.4 4 22.8c0 1.6.2 3.1.6 4.6L16 14.8c1.1-2.2 3-3.6 5.1-3.6 2.2 0 4.1 1.5 5.2 3.8l8.5 18.2.6 1.3c.6-.6 1.1-1.3 1.5-2L41.3 25c.2-.7.3-1.4.3-2.2C41.6 12.4 33.2 4 22.8 4z"/><path fill="#D97757" d="M36.2 35.6L27.6 17c-.7-1.4-1.8-2.2-2.9-2.2s-2.2.8-2.9 2.3L13.2 36c-.1.3-.2.5-.3.8 2.9 2 6.4 3.2 10.1 3.2 5 0 9.5-2 12.8-5.2l.4.8z"/></svg>`,
  geminiai: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><defs><linearGradient id="gem-a" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4285F4"/><stop offset="50%" stop-color="#9B72CB"/><stop offset="100%" stop-color="#D96570"/></linearGradient></defs><path fill="url(#gem-a)" d="M14 28A14 14 0 0 1 14 0a14.2 14.2 0 0 0 0 28z" opacity=".5"/><path fill="url(#gem-a)" d="M14 0c0 7.73-6.27 14-14 14a14 14 0 0 0 28 0C28 6.27 21.73 0 14 0z"/><path fill="#fff" d="M14 0c0 7.73-6.27 14-14 14 7.73 0 14 6.27 14 14 0-7.73 6.27-14 14-14-7.73 0-14-6.27-14-14z" opacity=".9"/></svg>`,
  vscode: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><mask id="vs-m"><path fill="#fff" d="M70.9 3.1L50 46.2 31.3 29.5.9 44.9v10.3l30.3 15.3 18.8 16.6 20.9 43.1L99.1 72.8V27.2z"/><path d="M70.9 3.1L50 46.2 31.3 29.5l-18 9.2 18.8 16.6-18.8 16.6 18 9.2 18.8-16.6L70.9 96.9l28.2-13.3V16.4z"/></mask><path fill="#007ACC" d="M99.1 27.2L70.9 3.1 50 46.2 31.3 29.5.9 44.9v10.3l30.3 15.3 18.8 16.6 20.9 43.1L100 72.8V27.2z"/><path mask="url(#vs-m)" fill="rgba(255,255,255,.25)" d="M70.9 3.1L50 46.2 31.3 29.5l-18 9.2 18.8 16.6-18.8 16.6 18 9.2 18.8-16.6L70.9 96.9l28.2-13.3V16.4z"/></svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96"><path fill="#fff" fill-rule="evenodd" d="M49 0C21.9 0 0 22 0 49.2c0 21.7 13.9 40.1 33.2 46.6 2.4.4 3.3-1.1 3.3-2.4v-8.3c-13.5 3-16.3-6.5-16.3-6.5-2.2-5.6-5.4-7.1-5.4-7.1-4.4-3 .3-3 .3-3 4.9.4 7.5 5 7.5 5 4.3 7.5 11.4 5.3 14.1 4.1.4-3.2 1.7-5.3 3.1-6.5-10.8-1.2-22.1-5.4-22.1-24.2 0-5.3 1.9-9.7 5-13.1-.5-1.2-2.2-6.2.5-12.9 0 0 4.1-1.3 13.4 5 3.9-1.1 8-1.6 12.2-1.6 4.1 0 8.3.5 12.2 1.6 9.3-6.4 13.4-5 13.4-5 2.7 6.7 1 11.7.5 12.9 3.1 3.4 5 7.8 5 13.1 0 18.8-11.4 23-22.2 24.2 1.7 1.5 3.3 4.5 3.3 9v13.3c0 1.3.9 2.8 3.3 2.4C84.1 89.3 98 70.9 98 49.2 98 22 76.1 0 49 0z"/></svg>`,
  chatgpt: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" fill="none"><path d="M37.5 16.7a9.9 9.9 0 0 0-.9-8.1 10 10 0 0 0-10.7-4.8 9.9 9.9 0 0 0-13.2 3.2 9.9 9.9 0 0 0-6.6 4.8 10 10 0 0 0-.1 8A9.9 9.9 0 0 0 3.3 27.8a10 10 0 0 0 10.7 4.8 9.9 9.9 0 0 0 13.2-3.2 9.9 9.9 0 0 0 6.6-4.8 10 10 0 0 0 .2-8zM22.3 33.6l-.1 4.2-2.2-1.2.1-4.3a7.5 7.5 0 0 1-2.2-1.3l-3.7 2.1-1.1-1.9 3.7-2.1a7.4 7.4 0 0 1-.6-2.7l-4.3.1V24l4.3-.1a7.4 7.4 0 0 1 .6-2.7l-3.7-2.1 1.1-1.9 3.7 2.1a7.5 7.5 0 0 1 2.2-1.3l-.1-4.3 2.2-1.2.1 4.2a7.4 7.4 0 0 1 4.7 1.7l3.7-2.1 1.1 1.9-3.7 2.1a7.4 7.4 0 0 1 .6 2.7l4.3.1-.1 2.2h-4.3a7.4 7.4 0 0 1-.6 2.7l3.7 2.1-1.1 1.9-3.7-2.1a7.4 7.4 0 0 1-4.6 1.7z" fill="#10a37f"/></svg>`,
  figma: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 57"><path fill="#F24E1E" d="M19 28.5a9.5 9.5 0 0 1 9.5-9.5H38V28.5a9.5 9.5 0 1 1-19 0z"/><path fill="#FF7262" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/><path fill="#F24E1E" d="M19 0h9.5A9.5 9.5 0 0 1 38 9.5v9.5H19V0z"/><path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0v9.5a9.5 9.5 0 1 1-19 0z"/><path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 0 9.5 57 9.5 9.5 0 0 0 19 47.5V38H9.5A9.5 9.5 0 0 0 0 47.5z"/></svg>`,
  midjourney: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#fff" d="M2 18L12 3.5 22 18H2z"/><path fill="#fff" d="M5 18c0 3.3 3.1 6 7 6s7-2.7 7-6H5z"/></svg>`,
  klingai: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" rx="40" fill="#000"/><polygon points="40,60 120,100 40,140" fill="#00F2EA"/><polygon points="100,60 180,100 100,140" fill="#FF0050"/></svg>`,
  capcut: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" rx="44" fill="#000"/><circle cx="100" cy="88" r="42" fill="none" stroke="#fff" stroke-width="18"/><rect x="58" y="148" width="84" height="16" rx="8" fill="#fff"/></svg>`,
};

const toolsDataNew = [
  { name:'HTML5',      key:'html5',      glow:'rgba(228,79,38,0.75)',   row:1 },
  { name:'CSS3',       key:'css3',       glow:'rgba(38,77,228,0.75)',   row:1 },
  { name:'JavaScript', key:'javascript', glow:'rgba(247,223,30,0.8)',   row:1 },
  { name:'Python',     key:'python',     glow:'rgba(55,118,171,0.75)',  row:1 },
  { name:'Canva',      key:'canva',      glow:'rgba(125,42,232,0.75)',  row:1 },
  { name:'Claude AI',  key:'claudeai',   glow:'rgba(217,119,87,0.75)', row:1 },
  { name:'Gemini AI',  key:'geminiai',   glow:'rgba(66,133,244,0.75)', row:1 },
  { name:'VS Code',    key:'vscode',     glow:'rgba(0,122,204,0.75)',  row:2 },
  { name:'GitHub',     key:'github',     glow:'rgba(200,210,230,0.55)',row:2 },
  { name:'ChatGPT',    key:'chatgpt',    glow:'rgba(16,163,127,0.75)', row:2 },
  { name:'Figma',      key:'figma',      glow:'rgba(242,78,30,0.75)',  row:2 },
  { name:'MidJourney', key:'midjourney', glow:'rgba(220,220,220,0.5)', row:2 },
  { name:'Kling AI',   key:'klingai',    glow:'rgba(0,242,234,0.75)',  row:2 },
  { name:'CapCut',     key:'capcut',     glow:'rgba(200,200,200,0.5)', row:2 },
];

function buildToolItemNew(tool) {
  const div  = document.createElement('div');
  div.className = 'tool-item';
  div.style.setProperty('--glow-color', tool.glow);

  const wrap = document.createElement('div');
  wrap.className = 'tool-logo-wrap';
  wrap.innerHTML = TOOL_SVG[tool.key] || `<span style="font-family:monospace;font-size:.8rem;font-weight:700;color:#fff">${tool.name.slice(0,2).toUpperCase()}</span>`;

  const nm = document.createElement('span');
  nm.className = 'tool-name';
  nm.textContent = tool.name;

  div.appendChild(wrap);
  div.appendChild(nm);
  return div;
}

function buildMarqueeTrack(trackId, toolsArr) {
  const track = document.getElementById(trackId);
  if (!track) return;
  track.innerHTML = '';
  for (let i = 0; i < 3; i++) toolsArr.forEach(t => track.appendChild(buildToolItemNew(t)));
}

buildMarqueeTrack('track1', toolsDataNew.filter(t => t.row === 1));
buildMarqueeTrack('track2', toolsDataNew.filter(t => t.row === 2));
/* ================================================
   SCROLL ANIMATIONS
================================================ */
const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.12 });

document.querySelectorAll('.timeline-item, .porto-card, .pillar-card, .cert-card, .video-card').forEach(el => scrollObserver.observe(el));

setTimeout(() => {
  document.querySelectorAll('.porto-card').forEach((card, i) => {
    setTimeout(() => card.classList.add('visible'), i * 60);
  });
}, 300);

/* ================================================
   SKILL BARS ANIMATION
================================================ */
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        if (bar.dataset.width) bar.style.width = bar.dataset.width + '%';
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skill-clip-card').forEach(el => skillObserver.observe(el));

/* ================================================
   STATS COUNTER
================================================ */
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stats-num').forEach(num => {
        const target = parseInt(num.dataset.target, 10) || 0;
        let current = 0;
        const step = Math.max(target / 50, 0.1);
        const interval = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(interval); }
          num.textContent = Math.floor(current) + '+';
        }, 30);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stats-strip').forEach(el => statsObserver.observe(el));

/* ================================================
   FAQ ACCORDION
================================================ */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* ================================================
   PORTFOLIO FILTER
================================================ */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.porto-card').forEach((card, i) => {
      const match = filter === 'all' || card.dataset.cat === filter;
      if (match) {
        card.style.display = '';
        card.style.opacity = '0'; card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.style.transition = 'all .4s ease';
          card.style.opacity = '1'; card.style.transform = 'translateY(0)';
        }, i * 40 + 50);
      } else {
        card.style.display = 'none';
      }
    });
  });
});

/* ================================================
   SMOOTH SCROLL
================================================ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    const target = document.querySelector(href);
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior:'smooth', block:'start' }); }
  });
});

/* ================================================
   HERO 3D TILT
================================================ */
const heroVisual = document.querySelector('.hero-visual');
if (heroVisual) {
  document.addEventListener('mousemove', e => {
    const {innerWidth:w, innerHeight:h} = window;
    heroVisual.style.transform = `perspective(800px) rotateX(${((e.clientY/h)-.5)*10}deg) rotateY(${((e.clientX/w)-.5)*-10}deg)`;
  });
}

function initCertImages() {
  // placeholder — cert images sudah pakai onerror fallback
}

/* ================================================
   INIT ON DOM READY
================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initCertImages();
  initVideos();
  initVideoAutoplay();
});