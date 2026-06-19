/* app/data/portfolio.ts */

export interface PortfolioProject {
  slug: string;
  clientName: string;
  clientNameFull: string;
  industry: string;
  tags: string[];
  logo: string;
  heroImage: string;
  equipmentImage: string;
  gradient: string;
  year: string;
  location: string;
  duration: string;
  mainEquipment: string;
  capacity: string;
}

export interface PortfolioArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: PortfolioSection[];
  faq: { question: string; answer: string }[];
  keywords: string[];
  date: string;
}

export interface PortfolioSection {
  type: "paragraph" | "heading2" | "heading3" | "list" | "specs" | "highlight";
  content?: string;
  items?: string[];
  specs?: { label: string; value: string }[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "pertamina-banten",
    clientName: "Pertamina",
    clientNameFull: "PT Pertamina (Persero)",
    industry: "Oil & Gas / Refinery",
    tags: ["CRANE", "FORKLIFT", "REFINERY"],
    logo: "/images/client-logo/Pertamina_Logo.svg",
    heroImage: "/images/fleet/telescopic_crane.png",
    equipmentImage: "/images/fleet/terrain_crane.png",
    gradient: "radial-gradient(circle, rgba(237, 28, 36, 0.22) 0%, rgba(12, 12, 12, 0.95) 75%)",
    year: "2023–2025",
    location: "Cilegon & Serang, Banten",
    duration: "Kontrak Jangka Panjang",
    mainEquipment: "Telescopic Mobile Crane & Forklift",
    capacity: "25 Ton – 200 Ton",
  },
  {
    slug: "chandra-asri-petrochemical",
    clientName: "Chandra Asri",
    clientNameFull: "PT Chandra Asri Petrochemical Tbk",
    industry: "Petrochemical",
    tags: ["PETROCHEMICAL", "CRAWLER", "SAFETY"],
    logo: "/images/client-logo/chandra-asri-logo.svg",
    heroImage: "/images/fleet/crawler_crane.png",
    equipmentImage: "/images/fleet/crawler_crane.png",
    gradient: "radial-gradient(circle, rgba(0, 154, 73, 0.2) 0%, rgba(12, 12, 12, 0.95) 75%)",
    year: "2024",
    location: "Ciwandan, Cilegon, Banten",
    duration: "6 Bulan",
    mainEquipment: "Crawler Crane Kelas Berat",
    capacity: "150 Ton – 400 Ton",
  },
  {
    slug: "pln-indonesia-power",
    clientName: "PLN Indonesia Power",
    clientNameFull: "PT PLN Indonesia Power",
    industry: "Power Plant / Energi",
    tags: ["POWER PLANT", "MAINTENANCE"],
    logo: "/images/client-logo/plnip.png",
    heroImage: "/images/fleet/roughter_crane.png",
    equipmentImage: "/images/fleet/roughter_crane.png",
    gradient: "radial-gradient(circle, rgba(0, 162, 232, 0.22) 0%, rgba(12, 12, 12, 0.95) 75%)",
    year: "2023–2025",
    location: "Suralaya, Cilegon, Banten",
    duration: "Kontrak Berkelanjutan",
    mainEquipment: "Mobile Crane & Roughter Crane",
    capacity: "25 Ton – 110 Ton",
  },
  {
    slug: "lotte-chemical-cilegon",
    clientName: "Lotte Chemical",
    clientNameFull: "PT Lotte Chemical Titan Nusantara",
    industry: "Chemical / Construction",
    tags: ["CONSTRUCTION", "TELESCOPIC"],
    logo: "/images/client-logo/lotte-chemical.png",
    heroImage: "/images/fleet/telescopic_crane.png",
    equipmentImage: "/images/fleet/telescopic_crane.png",
    gradient: "radial-gradient(circle, rgba(225, 0, 26, 0.16) 0%, rgba(12, 12, 12, 0.95) 75%)",
    year: "2024",
    location: "Merak, Cilegon, Banten",
    duration: "8 Bulan",
    mainEquipment: "Telescopic Crane & Crawler Crane",
    capacity: "80 Ton – 550 Ton",
  },
  {
    slug: "indorama-cilegon",
    clientName: "Indorama",
    clientNameFull: "PT Indorama Ventures Indonesia",
    industry: "Textile / Synthetic Fiber",
    tags: ["WAREHOUSE", "LOGISTICS", "STEEL"],
    logo: "/images/client-logo/indorama-logo.png",
    heroImage: "/images/fleet/forklift.png",
    equipmentImage: "/images/fleet/forklift.png",
    gradient: "radial-gradient(circle, rgba(0, 83, 155, 0.22) 0%, rgba(12, 12, 12, 0.95) 75%)",
    year: "2023–2025",
    location: "Cilegon, Banten",
    duration: "Kontrak Jangka Panjang",
    mainEquipment: "Forklift & Steel Road Plate",
    capacity: "3 Ton – 35 Ton",
  },
];

// Indonesian articles
export const portfolioArticles: Record<string, PortfolioArticle> = {
  "pertamina-banten": {
    slug: "pertamina-banten",
    title: "Sewa Crane & Forklift untuk Pemeliharaan Fasilitas Pertamina di Banten",
    excerpt:
      "CV. Berkah Ryan menyediakan layanan sewa crane Telescopic 25–200 Ton dan forklift 3–35 Ton secara berkelanjutan untuk mendukung program pemeliharaan preventif fasilitas tangki penyimpanan dan distribusi bahan bakar PT Pertamina (Persero) di wilayah Cilegon dan Serang, Banten.",
    keywords: [
      "sewa crane Pertamina Banten",
      "rental forklift Pertamina Cilegon",
      "alat berat pemeliharaan tangki Pertamina",
      "crane refinery Banten",
      "jasa crane K3 Pertamina",
    ],
    date: "Januari 2023",
    faq: [
      {
        question: "Berapa kapasitas crane yang digunakan dalam proyek Pertamina di Banten?",
        answer:
          "CV. Berkah Ryan menyediakan crane berkapasitas 25 Ton hingga 200 Ton, meliputi Telescopic Mobile Crane merek Tadano dan Kato, disesuaikan dengan kebutuhan pengangkatan di fasilitas tangki dan distribusi bahan bakar Pertamina.",
      },
      {
        question: "Apakah crane yang digunakan sudah bersertifikasi K3 untuk area refinery?",
        answer:
          "Ya. Seluruh armada crane yang digunakan dalam proyek Pertamina telah memiliki Surat Izin Alat (SIA) aktif dari Kemnaker RI dan dioperasikan oleh teknisi berlisensi SIO (Surat Izin Operasi) yang relevan.",
      },
      {
        question: "Apakah CV. Berkah Ryan melayani sewa crane untuk area kilang minyak dan fasilitas berbahaya?",
        answer:
          "Ya, tim kami memiliki pengalaman dan prosedur keselamatan yang terstandarisasi untuk beroperasi di area berbahaya seperti kilang minyak, termasuk penyiapan lift plan, penggunaan APD lengkap, dan koordinasi dengan HSE klien.",
      },
    ],
    content: [
      {
        type: "paragraph",
        content:
          "PT Pertamina (Persero) merupakan Badan Usaha Milik Negara (BUMN) yang menjadi tulang punggung ketahanan energi nasional Indonesia. Dengan jaringan distribusi bahan bakar yang tersebar di seluruh kepulauan, fasilitas tangki penyimpanan dan terminal distribusi di wilayah Banten menjadi salah satu aset kritis yang memerlukan program pemeliharaan rutin berkualitas tinggi. CV. Berkah Ryan dipercaya sebagai mitra penyediaan alat berat bersertifikasi K3 untuk mendukung kelancaran operasional Pertamina di Cilegon dan Serang.",
      },
      {
        type: "heading2",
        content: "Scope Pekerjaan dan Kebutuhan Lifting di Fasilitas Pertamina",
      },
      {
        type: "paragraph",
        content:
          "Fasilitas distribusi bahan bakar Pertamina di Banten memiliki infrastruktur berupa tangki penyimpanan berkapasitas besar, jalur pipa bawah tanah, dan sistem pompa distribusi yang memerlukan penanganan presisi tinggi saat perawatan. Kebutuhan alat berat yang kami layani meliputi pengangkatan komponen pompa berat, erection tangki baru, penggantian atap tangki (floating roof), serta mobilisasi peralatan inspeksi berkala.",
      },
      {
        type: "heading3",
        content: "Jenis Pengangkatan yang Dilakukan",
      },
      {
        type: "list",
        items: [
          "Erection dan pemasangan atap tangki floating roof berkapasitas besar",
          "Pengangkatan dan penggantian pompa distribusi bahan bakar (kapasitas 2–15 Ton)",
          "Pemasangan pipa manifold baru di area transfer bahan bakar",
          "Mobilisasi generator dan kompresor industri untuk kebutuhan turnaround",
          "Bongkar muat material konstruksi selama fase perluasan fasilitas",
          "Penanganan drum dan kontainer bahan kimia dengan forklift berlisensi",
        ],
      },
      {
        type: "heading2",
        content: "Armada Crane dan Forklift yang Disediakan",
      },
      {
        type: "paragraph",
        content:
          "Untuk memenuhi standar operasional Pertamina yang ketat di area refinery dan distribusi bahan bakar, CV. Berkah Ryan mengerahkan armada terpilih yang sepenuhnya terverifikasi K3. Setiap unit yang dikerahkan telah melalui riksa uji (inspeksi dan uji beban) terkini serta dilengkapi dokumen SIA dan SIO yang masih berlaku.",
      },
      {
        type: "specs",
        specs: [
          { label: "Telescopic Mobile Crane Tadano", value: "25 Ton & 80 Ton" },
          { label: "Telescopic Mobile Crane Kato", value: "50 Ton & 160 Ton" },
          { label: "Truck Mounted Crane Tadano", value: "5 Ton & 8 Ton" },
          { label: "Forklift TCM", value: "3 Ton & 5 Ton" },
          { label: "Forklift Daewoo / Mitsubishi", value: "15 Ton & 25 Ton" },
          { label: "Steel Road Plate", value: "1.5m × 6m × 25mm" },
        ],
      },
      {
        type: "heading2",
        content: "Prosedur Keselamatan K3 di Area Pertamina",
      },
      {
        type: "paragraph",
        content:
          "Operasional di fasilitas energi Pertamina memiliki standar HSE (Health, Safety, and Environment) yang sangat ketat. Sebelum setiap pekerjaan dimulai, tim CV. Berkah Ryan berkoordinasi penuh dengan departemen HSE Pertamina untuk memastikan kesesuaian prosedur. Seluruh operator telah terbiasa dengan prosedur kerja di area berbahaya (hazardous area) dan memahami peraturan ATEX (Atmosphere Explosible) untuk zona dengan potensi ledakan.",
      },
      {
        type: "list",
        items: [
          "Penyusunan Lift Plan terperinci sebelum setiap operasi pengangkatan",
          "Izin Kerja (Work Permit) dan Job Safety Analysis (JSA) wajib dilengkapi",
          "Penggunaan APD lengkap: helm K3, safety shoes, rompi, safety harness",
          "Barrikade perimeter steril di sekitar radius operasi crane",
          "Koordinasi dengan Fire Watcher dari tim HSE Pertamina",
          "Operator berlisensi SIO Kelas I untuk kapasitas alat di atas 80 Ton",
        ],
      },
      {
        type: "heading2",
        content: "Mengapa Pertamina Mempercayakan Alat Berat kepada CV. Berkah Ryan",
      },
      {
        type: "paragraph",
        content:
          "Kepercayaan Pertamina kepada CV. Berkah Ryan dibangun atas dasar konsistensi dalam keandalan armada, ketepatan waktu mobilisasi, dan kepatuhan penuh terhadap standar K3 Kemnaker. Sebagai perusahaan yang berlokasi strategis di Cilegon — pusat industri Banten — kami mampu merespons kebutuhan mendadak dengan waktu mobilisasi kurang dari 4 jam untuk radius Cilegon-Serang.",
      },
      {
        type: "highlight",
        content:
          "CV. Berkah Ryan telah mendukung lebih dari 120 sesi pengangkatan (lifting operation) di berbagai fasilitas Pertamina di Banten tanpa satu pun insiden keselamatan kerja (zero accident record).",
      },
      {
        type: "heading2",
        content: "Hubungi Kami untuk Kebutuhan Alat Berat di Fasilitas Energi Anda",
      },
      {
        type: "paragraph",
        content:
          "CV. Berkah Ryan siap mendukung kebutuhan sewa crane dan forklift untuk program pemeliharaan fasilitas refinery, terminal distribusi, dan pembangkit listrik. Dengan armada K3-certified, operator berpengalaman, dan sistem manajemen keselamatan yang ketat, kami adalah mitra terpercaya untuk operasional alat berat di lingkungan industri kelas dunia.",
      },
    ],
  },

  "chandra-asri-petrochemical": {
    slug: "chandra-asri-petrochemical",
    title: "Dukungan Crawler Crane Kelas Berat untuk Ekspansi Pabrik Petrokimia Chandra Asri",
    excerpt:
      "CV. Berkah Ryan menyediakan layanan sewa Crawler Crane kapasitas 150–400 Ton untuk mendukung proyek ekspansi besar-besaran pabrik petrokimia PT Chandra Asri Petrochemical Tbk di Ciwandan, Cilegon, Banten. Proyek mencakup erection kolom reaktor, pemasangan vessel berat, dan lifting module petrochemical.",
    keywords: [
      "sewa crawler crane Chandra Asri",
      "crane petrokimia Cilegon Banten",
      "rental crawler crane kapasitas besar",
      "alat berat ekspansi pabrik petrokimia",
      "crawler crane K3 Banten",
    ],
    date: "Maret 2024",
    faq: [
      {
        question: "Berapa kapasitas crawler crane yang digunakan di proyek Chandra Asri?",
        answer:
          "CV. Berkah Ryan mengerahkan Crawler Crane merek P&H kapasitas 150 Ton dan Demag kapasitas 400 Ton untuk pengangkatan vessel dan kolom reaktor berat di area pabrik petrokimia Chandra Asri, Cilegon.",
      },
      {
        question: "Apa kelebihan crawler crane dibanding mobile crane untuk proyek petrokimia skala besar?",
        answer:
          "Crawler crane memiliki kestabilan superior karena bertumpu pada track baja yang mendistribusikan beban secara merata, memungkinkan operasi tanpa outrigger, ideal untuk tanah lunak area pabrik. Kapasitas angkatnya jauh lebih besar (hingga 550 Ton) dan cocok untuk lift jarak jauh dengan boom panjang.",
      },
      {
        question: "Apakah CV. Berkah Ryan menyediakan lift plan untuk pengangkatan vessel petrokimia?",
        answer:
          "Ya. Tim teknis kami menyiapkan Lift Plan komprehensif sebelum setiap critical lift, termasuk kalkulasi berat beban, pemilihan crane yang sesuai kapasitas, penilaian daya dukung tanah, dan penentuan radius operasi yang aman.",
      },
    ],
    content: [
      {
        type: "paragraph",
        content:
          "PT Chandra Asri Petrochemical Tbk adalah perusahaan petrokimia terbesar di Indonesia yang memproduksi ethylene, propylene, dan produk turunan polimer lainnya. Fasilitas produksi utama mereka berlokasi di Ciwandan, Cilegon — hanya beberapa kilometer dari kantor operasional CV. Berkah Ryan. Proyek ekspansi kapasitas pabrik yang dimulai pada 2024 melibatkan serangkaian pekerjaan konstruksi berat yang membutuhkan armada crane kelas dunia.",
      },
      {
        type: "heading2",
        content: "Tantangan Teknis Lifting di Area Petrokimia Chandra Asri",
      },
      {
        type: "paragraph",
        content:
          "Proyek ekspansi pabrik petrokimia memiliki kompleksitas teknis yang sangat tinggi. Vessel dan kolom reaktor yang dipasang memiliki berat antara 50 hingga 350 Ton dengan tinggi mencapai 60 meter. Kondisi tanah di area pabrik yang berdekatan dengan kawasan pantai memiliki daya dukung terbatas, sehingga memerlukan perhitungan ground bearing pressure yang sangat akurat dan penggunaan steel mat pad outrigger.",
      },
      {
        type: "heading3",
        content: "Pekerjaan Lifting yang Berhasil Dilaksanakan",
      },
      {
        type: "list",
        items: [
          "Erection kolom distilasi utama setinggi 58 meter dengan berat 280 Ton",
          "Pemasangan reaktor polimerisasi berkapasitas 350 Ton",
          "Tandem lifting vessel heat exchanger menggunakan dua crawler crane secara bersamaan",
          "Instalasi modul kompresor gas berat ke struktur elevated platform",
          "Pengangkatan piping spool dan struktur baja overhead pipeline",
          "Demobilisasi dan relokasi peralatan berat antar area pabrik",
        ],
      },
      {
        type: "heading2",
        content: "Armada Crawler Crane yang Dikerahkan",
      },
      {
        type: "paragraph",
        content:
          "Untuk proyek skala megabesar seperti ini, CV. Berkah Ryan mengerahkan armada Crawler Crane berkualitas tinggi yang sepenuhnya dalam kondisi prima dan bersertifikat K3. Semua unit melalui riksa uji terakhir maksimal 6 bulan sebelum pengerahan ke lapangan.",
      },
      {
        type: "specs",
        specs: [
          { label: "Crawler Crane P&H", value: "150 Ton — Boom 40m" },
          { label: "Crawler Crane Demag", value: "400 Ton — Luffing Jib 70m" },
          { label: "Steel Mat Outrigger Pads", value: "2m × 2m × 100mm" },
          { label: "Rigging Hardware", value: "Sling Baja & Shackle BS/ASME Certified" },
          { label: "Operator SIO Kelas I", value: "Kapasitas > 100 Ton" },
          { label: "Durasi Proyek", value: "6 Bulan (Maret–September 2024)" },
        ],
      },
      {
        type: "heading2",
        content: "Manajemen Keselamatan Critical Lift di Area Petrokimia",
      },
      {
        type: "paragraph",
        content:
          "Setiap pengangkatan di area pabrik petrokimia Chandra Asri dikategorikan sebagai Critical Lift yang memerlukan persetujuan berlapis dari departemen HSE dan Engineering. CV. Berkah Ryan secara konsisten memenuhi semua persyaratan ini dengan menyediakan dokumentasi teknis lengkap dan menempatkan Rigger Master berpengalaman di setiap sesi lifting.",
      },
      {
        type: "list",
        items: [
          "Penyusunan Critical Lift Plan sesuai standar ASME B30.5 dan SNI K3",
          "Kalkulasi berat beban aktual via load cell digital sebelum lift",
          "Ground bearing pressure analysis oleh tim geoteknik bersertifikat",
          "Pre-lift meeting wajib dengan seluruh crew dan HSE Chandra Asri",
          "Penempatan Dogman dan banksman bersertifikat di setiap sudut operasi",
          "Radio komunikasi dedicated selama seluruh operasi berlangsung",
        ],
      },
      {
        type: "highlight",
        content:
          "Seluruh 47 operasi pengangkatan critical lift di proyek Chandra Asri diselesaikan tanpa satu pun insiden keselamatan, menjadikan CV. Berkah Ryan mitra lifting terpercaya untuk proyek konstruksi industri terbesar di Banten.",
      },
      {
        type: "heading2",
        content: "Koordinasi Tandem Lifting — Operasi Paling Menantang",
      },
      {
        type: "paragraph",
        content:
          "Salah satu puncak teknis proyek ini adalah tandem lifting vessel heat exchanger berbobot 310 Ton yang tidak dapat diangkat oleh satu crane saja. Tim teknis kami merancang prosedur tandem lift menggunakan dua crawler crane secara bersamaan — P&H 150T dan Demag 400T — dengan sistem sinkronisasi berbasis radio yang memastikan distribusi beban akurat di antara keduanya sepanjang proses pengangkatan.",
      },
    ],
  },

  "pln-indonesia-power": {
    slug: "pln-indonesia-power",
    title: "Penyediaan Alat Berat untuk Pemeliharaan Pembangkit Listrik PLN Indonesia Power Banten",
    excerpt:
      "CV. Berkah Ryan mendukung program pemeliharaan rutin (preventive maintenance) dan overhaul pembangkit listrik PT PLN Indonesia Power di Suralaya, Cilegon, Banten dengan armada Mobile Crane dan Roughter Crane berkapasitas 25–110 Ton bersertifikasi K3 Kemnaker.",
    keywords: [
      "sewa crane PLN Indonesia Power Banten",
      "alat berat pemeliharaan pembangkit listrik",
      "rental crane power plant Suralaya Cilegon",
      "crane overhaul pembangkit listrik Banten",
      "roughter crane Cilegon Banten",
    ],
    date: "September 2023",
    faq: [
      {
        question: "Jenis crane apa yang digunakan untuk pemeliharaan pembangkit listrik PLN?",
        answer:
          "CV. Berkah Ryan menggunakan Mobile Crane Tadano 25–80 Ton dan Roughter Crane Tadano 50 Ton & Kato 70 Ton untuk mendukung pekerjaan overhaul turbin, penggantian transformator, dan pemasangan komponen generator di pembangkit PLN Indonesia Power.",
      },
      {
        question: "Seberapa cepat CV. Berkah Ryan bisa merespons panggilan darurat untuk PLN?",
        answer:
          "Dengan lokasi operasional di Cilegon, CV. Berkah Ryan mampu merespons dan memobilisasi unit crane ke fasilitas PLN di Suralaya dalam waktu kurang dari 2 jam untuk situasi darurat operasional. Layanan dispatch kami beroperasi 24 jam sehari, 7 hari seminggu.",
      },
      {
        question: "Apakah crane yang digunakan aman untuk beroperasi di dekat jalur listrik tegangan tinggi?",
        answer:
          "Ya. Seluruh operator kami terlatih dalam prosedur kerja di dekat jalur listrik bertegangan tinggi (SUTUT/SUTET), termasuk jarak minimum aman operasi crane, penggunaan insulator, dan koordinasi dengan petugas PLN sebelum boom crane diarahkan mendekati jalur tegangan.",
      },
    ],
    content: [
      {
        type: "paragraph",
        content:
          "PT PLN Indonesia Power (dahulu PT Indonesia Power) adalah anak usaha PLN yang mengelola pembangkitan listrik dari berbagai sumber energi di seluruh Indonesia. Unit Pembangkitan Suralaya (UBP Suralaya) di Cilegon, Banten, merupakan salah satu PLTU (Pembangkit Listrik Tenaga Uap) terbesar di Jawa dengan total kapasitas terpasang mencapai lebih dari 3.400 MW. Program pemeliharaan rutin dan overhaul tahunan di fasilitas ini memerlukan alat berat khusus yang handal dan bersertifikat.",
      },
      {
        type: "heading2",
        content: "Peran Alat Berat dalam Pemeliharaan Pembangkit Listrik",
      },
      {
        type: "paragraph",
        content:
          "Operasional pembangkit listrik melibatkan komponen-komponen mekanikal berukuran besar dan sangat berat seperti turbin uap, generator, transformator daya, dan boiler. Proses penggantian, overhaul, atau instalasi komponen ini memerlukan crane dengan kapasitas dan jangkauan yang memadai, dioperasikan oleh tenaga ahli yang memahami lingkungan kerja pembangkit listrik.",
      },
      {
        type: "heading3",
        content: "Pekerjaan Pemeliharaan yang Didukung",
      },
      {
        type: "list",
        items: [
          "Overhaul turbin uap: pengangkatan rotor dan casing turbin berbobot 40–80 Ton",
          "Penggantian transformator daya tegangan tinggi (25–60 Ton)",
          "Pemasangan dan perbaikan pompa sirkulasi air pendingin kondensor",
          "Penanganan material refraktori (batu tahan panas) untuk perbaikan boiler",
          "Erection scaffolding berat dan platform pemeliharaan elevated",
          "Mobilisasi generator diesel darurat dan peralatan bantu overhaul",
        ],
      },
      {
        type: "heading2",
        content: "Armada yang Digunakan dalam Program Pemeliharaan PLN",
      },
      {
        type: "specs",
        specs: [
          { label: "Mobile Crane Tadano", value: "25 Ton & 80 Ton" },
          { label: "Roughter Crane Tadano", value: "50 Ton — 4WD" },
          { label: "Roughter Crane Kato", value: "70 Ton — 4WD" },
          { label: "Truck Mounted Crane Tadano", value: "8 Ton" },
          { label: "Forklift TCM", value: "5 Ton & 10 Ton" },
          { label: "Ketersediaan Layanan", value: "24 Jam / 7 Hari" },
        ],
      },
      {
        type: "heading2",
        content: "Keunggulan Roughter Crane untuk Lingkungan Pembangkit",
      },
      {
        type: "paragraph",
        content:
          "Roughter Crane (Rough Terrain Crane) menjadi pilihan utama untuk operasional di area pembangkit listrik karena kemampuannya bergerak di medan tidak rata — termasuk jalur berkerikil, tanah lembap pascahujan, dan area dengan fondasi aspal yang kurang stabil. Ban berukuran besar dan sistem kemudi four-wheel drive memungkinkan Roughter Crane berpindah posisi dengan lincah di antara struktur-struktur bangunan pembangkit yang padat.",
      },
      {
        type: "heading2",
        content: "Manajemen Keselamatan di Lingkungan Pembangkit Listrik",
      },
      {
        type: "paragraph",
        content:
          "Bekerja di area pembangkit listrik memerlukan tingkat kewaspadaan keselamatan yang ekstra tinggi karena adanya kombinasi bahaya: tegangan listrik tinggi, tekanan uap, panas berlebih, dan bahan kimia pendingin. CV. Berkah Ryan menerapkan prosedur kerja khusus yang diselaraskan dengan Standar Operasional Prosedur (SOP) PLN Indonesia Power.",
      },
      {
        type: "list",
        items: [
          "Koordinasi Pre-Job Briefing dengan supervisor K3 PLN sebelum setiap shift",
          "Pemeriksaan energi terisolasi (Lockout/Tagout) sebelum intervensi mekanikal",
          "Pengukuran jarak aman minimum 3 meter dari jalur SUTT bertegangan aktif",
          "Patroli area kerja untuk memastikan bebas dari personel tidak berkepentingan",
          "Laporan insiden dan near-miss secara real-time ke tim HSE PLN",
          "Pemeriksaan harian kondisi unit crane oleh operator sebelum operasi",
        ],
      },
      {
        type: "highlight",
        content:
          "Dengan layanan dispatch 24/7, CV. Berkah Ryan telah merespons lebih dari 35 panggilan darurat operasional PLN Indonesia Power di Banten dalam waktu rata-rata kurang dari 90 menit — memastikan kontinuitas produksi listrik nasional tidak terganggu.",
      },
    ],
  },

  "lotte-chemical-cilegon": {
    slug: "lotte-chemical-cilegon",
    title: "Dukungan Crane & Logistik dalam Konstruksi Pabrik Kimia Lotte Chemical Cilegon",
    excerpt:
      "CV. Berkah Ryan menjadi mitra penyediaan alat berat utama dalam fase konstruksi pabrik kimia baru PT Lotte Chemical Titan Nusantara di Merak, Cilegon, Banten. Layanan mencakup sewa Telescopic Crane 80–200 Ton, Crawler Crane 400–550 Ton, serta dukungan logistik trailer dan steel plate.",
    keywords: [
      "sewa crane Lotte Chemical Cilegon",
      "crane konstruksi pabrik kimia Banten",
      "crawler crane Merak Cilegon",
      "alat berat konstruksi pabrik petrokimia",
      "sewa telescopic crane kapasitas besar Banten",
    ],
    date: "Februari 2024",
    faq: [
      {
        question: "Berapa total durasi dan volume lifting dalam proyek Lotte Chemical?",
        answer:
          "Proyek berlangsung selama 8 bulan (Februari–September 2024) dengan total lebih dari 200 operasi lifting, melibatkan erection struktur baja, pemasangan vessel kimia, dan instalasi sistem perpipaan kompleks di area pabrik baru Lotte Chemical Cilegon.",
      },
      {
        question: "Apa saja jenis peralatan yang digunakan dalam proyek konstruksi Lotte Chemical?",
        answer:
          "CV. Berkah Ryan mengerahkan Telescopic Mobile Crane 80–200 Ton (Kato & Liebherr), Crawler Crane Kobelco 550 Ton, trailer 40 Feet untuk mobilisasi material berat, dan Steel Road Plate untuk pengamanan area track crane.",
      },
      {
        question: "Bagaimana prosedur mobilisasi Crawler Crane 550 Ton ke lokasi proyek di Merak?",
        answer:
          "Mobilisasi Crawler Crane Kobelco 550 Ton dilakukan secara bertahap menggunakan armada trailer lowbed khusus yang memerlukan izin PPJK dan pengawalan dari Dishub. Perakitan di lokasi memakan waktu 3–5 hari dengan tim teknisi khusus dari produsen.",
      },
    ],
    content: [
      {
        type: "paragraph",
        content:
          "PT Lotte Chemical Titan Nusantara merupakan produsen polietilena (polyethylene) terkemuka di Indonesia, dengan kapasitas produksi lebih dari 450.000 ton per tahun. Proyek pembangunan fasilitas produksi baru di kawasan industri Merak, Cilegon, merupakan investasi strategis yang mencakup pembangunan unit cracker, tangki penyimpanan bahan baku, dan jalur distribusi produk. CV. Berkah Ryan ditunjuk sebagai mitra lifting dan logistik utama untuk fase konstruksi yang berlangsung sepanjang tahun 2024.",
      },
      {
        type: "heading2",
        content: "Tantangan Konstruksi di Kawasan Industri Merak",
      },
      {
        type: "paragraph",
        content:
          "Lokasi proyek di kawasan pelabuhan Merak menghadirkan tantangan logistik yang unik: akses jalan yang dibatasi oleh lalu lintas kendaraan berat pelabuhan, kondisi tanah yang dipengaruhi oleh pasang surut air laut, dan keterbatasan ruang gerak crane di antara struktur-struktur bangunan yang dibangun secara bersamaan. Perencanaan lifting yang matang dan pemilihan crane yang tepat menjadi faktor penentu keberhasilan proyek.",
      },
      {
        type: "heading3",
        content: "Fase Konstruksi yang Didukung",
      },
      {
        type: "list",
        items: [
          "Fase 1: Erection struktur baja utama bangunan pabrik (bulan 1–3)",
          "Fase 2: Pemasangan vessel kimia dan tangki penyimpanan bahan baku (bulan 3–5)",
          "Fase 3: Instalasi sistem perpipaan process dan utilitas overhead (bulan 5–7)",
          "Fase 4: Erection unit kompresor dan heat exchanger skala besar (bulan 7–8)",
          "Mobilisasi dan relokasi crane antar area konstruksi sesuai progres proyek",
          "Dukungan logistik penerimaan material dari pelabuhan ke area fabrikasi",
        ],
      },
      {
        type: "heading2",
        content: "Spesifikasi Armada yang Dikerahkan",
      },
      {
        type: "specs",
        specs: [
          { label: "Telescopic Crane Kato", value: "160 Ton — Boom 52m" },
          { label: "Telescopic Crane Liebherr", value: "200 Ton — Boom 60m" },
          { label: "Crawler Crane Kobelco", value: "550 Ton — Luffing Jib 80m" },
          { label: "Trailer 40 Feet Lowbed", value: "Mobilisasi Material & Crane" },
          { label: "Steel Road Plate", value: "1.5m × 6m × 25mm (200 lembar)" },
          { label: "Rigger & Banksman", value: "Tim Bersertifikat K3 & LEEA" },
        ],
      },
      {
        type: "heading2",
        content: "Operasi Super Heavy Lift: Kobelco 550 Ton",
      },
      {
        type: "paragraph",
        content:
          "Puncak teknis dari proyek Lotte Chemical adalah penggunaan Crawler Crane Kobelco 550 Ton — salah satu unit terbesar yang pernah dioperasikan CV. Berkah Ryan. Unit ini digunakan untuk mengangkat reaktor polimerisasi utama berbobot 480 Ton dari trailer ke fondasi beton bertulang yang disiapkan khusus. Operasi ini memerlukan persiapan 2 minggu, termasuk penguatan tanah dengan steel mat pad dan perhitungan defleksi fondasi.",
      },
      {
        type: "highlight",
        content:
          "Pengangkatan reaktor 480 Ton menggunakan Kobelco 550 Ton merupakan salah satu operasi lifting terbesar yang pernah dilaksanakan di kawasan industri Banten, dan diselesaikan dengan presisi sempurna dalam satu sesi operasi selama 6 jam.",
      },
      {
        type: "heading2",
        content: "Dukungan Logistik Trailer dan Steel Plate",
      },
      {
        type: "paragraph",
        content:
          "Selain armada crane, CV. Berkah Ryan juga menyediakan layanan logistik terintegrasi yang mencakup sewa trailer lowbed 40 feet untuk mobilisasi komponen berat dari pelabuhan Merak ke area proyek, serta penyewaan Steel Road Plate 25mm untuk membuat jalur akses darurat bagi crawler crane di area tanah lunak dekat pantai. Total 200 lembar steel plate dipasang untuk memastikan stabilitas ground support crawler crane selama 8 bulan operasi.",
      },
    ],
  },

  "indorama-cilegon": {
    slug: "indorama-cilegon",
    title: "Layanan Sewa Forklift Harian & Steel Plate untuk Operasional Gudang Indorama Cilegon",
    excerpt:
      "CV. Berkah Ryan menyediakan layanan sewa forklift kapasitas 3–35 Ton dan steel road plate 25mm jangka panjang untuk mendukung operasional gudang dan pabrik serat sintetis PT Indorama Ventures Indonesia di Cilegon, Banten. Armada forklift terawat dengan skema sewa fleksibel harian, mingguan, dan bulanan.",
    keywords: [
      "sewa forklift Indorama Cilegon",
      "rental forklift gudang pabrik Banten",
      "sewa forklift bulanan Cilegon Banten",
      "steel plate jalan baja Cilegon",
      "forklift 15 ton 35 ton Banten",
    ],
    date: "Oktober 2023",
    faq: [
      {
        question: "Berapa kapasitas forklift yang disewa untuk operasional gudang Indorama?",
        answer:
          "CV. Berkah Ryan menyediakan forklift TCM kapasitas 3 Ton, 5 Ton, dan 10 Ton untuk operasional gudang standar, serta forklift Daewoo/Mitsubishi berkapasitas 15 Ton, 25 Ton, dan 35 Ton untuk penanganan gulungan benang sintetis dan material industri berat.",
      },
      {
        question: "Apakah tersedia skema sewa forklift bulanan di Cilegon?",
        answer:
          "Ya. CV. Berkah Ryan menawarkan skema sewa forklift yang fleksibel — harian, mingguan, maupun bulanan — dengan atau tanpa operator. Harga sewa bulanan tersedia dengan tarif kompetitif dan mencakup biaya pemeliharaan rutin selama periode kontrak.",
      },
      {
        question: "Untuk apa steel road plate digunakan di pabrik Indorama?",
        answer:
          "Steel Road Plate 25mm digunakan untuk membuat jalur lintasan forklift di area gudang yang tanahnya kurang stabil, melindungi lantai beton dari keretakan akibat beban berat, dan sebagai pelindung permanen jalur akses kendaraan berat di area produksi pabrik serat sintetis.",
      },
    ],
    content: [
      {
        type: "paragraph",
        content:
          "PT Indorama Ventures Indonesia merupakan bagian dari Indorama Ventures Group, konglomerat tekstil dan petrokimia global yang bermarkas di Thailand. Fasilitas produksi di Cilegon, Banten, menghasilkan serat polyester staple fiber dan benang polyester yang digunakan dalam industri tekstil, nonwoven, dan packaging. Operasional pabrik dan gudang distribusi skala besar ini memerlukan armada forklift handal yang beroperasi sepanjang hari dalam tiga shift.",
      },
      {
        type: "heading2",
        content: "Kebutuhan Alat Berat dalam Industri Serat Sintetis",
      },
      {
        type: "paragraph",
        content:
          "Industri produksi serat sintetis melibatkan penanganan material dalam skala yang sangat besar. Bahan baku PTA (Purified Terephthalic Acid) dan MEG (Monoethylene Glycol) tiba dalam jumlah masif via kapal dan truk tangker. Produk jadi berupa gulungan serat (fiber bales) dengan bobot 400–800 kg per unit dikemas dalam ratusan pallet yang harus dipindahkan setiap harinya. Semua ini memerlukan forklift dengan kapasitas dan keandalan tinggi.",
      },
      {
        type: "heading3",
        content: "Aplikasi Forklift di Berbagai Area Pabrik",
      },
      {
        type: "list",
        items: [
          "Gudang bahan baku: unloading PTA dari truk kontainer dan penyusunan pallet",
          "Area produksi: perpindahan gulungan fiber dari mesin produksi ke area pengemasan",
          "Gudang finished goods: stacking fiber bales hingga ketinggian 5 meter",
          "Area loading dock: pengiriman produk ke truk distribusi pelanggan",
          "Pemindahan mesin industri berat selama program maintenance pabrik",
          "Penanganan limbah produksi dan material scrap ke area pengolahan",
        ],
      },
      {
        type: "heading2",
        content: "Spesifikasi Unit Forklift yang Disediakan",
      },
      {
        type: "specs",
        specs: [
          { label: "Forklift TCM 3 Ton", value: "Operasional Gudang Ringan" },
          { label: "Forklift TCM 5 Ton", value: "Loading Dock & Pallet Standard" },
          { label: "Forklift TCM 10 Ton", value: "Material Berat & Mesin" },
          { label: "Forklift Daewoo 15 Ton", value: "Fiber Bale & Container" },
          { label: "Forklift Mitsubishi 25 Ton", value: "Heavy Machinery Handling" },
          { label: "Forklift Mitsubishi 35 Ton", value: "Super Heavy Material" },
          { label: "Steel Road Plate 25mm", value: "Jalur Lintasan & Perlindungan Lantai" },
        ],
      },
      {
        type: "heading2",
        content: "Skema Sewa Fleksibel untuk Industri Manufaktur",
      },
      {
        type: "paragraph",
        content:
          "CV. Berkah Ryan memahami bahwa kebutuhan forklift dalam industri manufaktur bervariasi — dari kebutuhan operasional rutin yang stabil hingga lonjakan musiman saat peak production season. Oleh karena itu, kami menawarkan skema sewa yang sangat fleksibel yang dapat disesuaikan dengan kebutuhan spesifik Indorama.",
      },
      {
        type: "list",
        items: [
          "Sewa harian: ideal untuk kebutuhan mendadak atau pekerjaan proyek jangka pendek",
          "Sewa mingguan: untuk proyek turnaround atau maintenance periode 1–4 minggu",
          "Sewa bulanan: tarif paling ekonomis untuk kebutuhan operasional rutin",
          "Kontrak jangka panjang (6–12 bulan): prioritas unit terbaik dan harga ternegosiasi",
          "Opsi with operator atau bare rental sesuai kebutuhan",
          "Penggantian unit gratis dalam 4 jam jika terjadi kerusakan teknis",
        ],
      },
      {
        type: "heading2",
        content: "Fungsi Steel Road Plate dalam Operasional Pabrik",
      },
      {
        type: "paragraph",
        content:
          "Steel Road Plate atau Pelat Jalan Baja berketebalan 25mm yang disewakan CV. Berkah Ryan memainkan peran krusial dalam melindungi infrastruktur lantai pabrik dari kerusakan akibat tekanan roda forklift kapasitas besar. Di area produksi Indorama yang berusia lebih dari 20 tahun, beberapa bagian lantai beton mengalami retak dan penurunan permukaan (settlement). Steel plate dihampar di jalur utama forklift sebagai pelindung permanen sekaligus meratakan permukaan untuk keselamatan operasi.",
      },
      {
        type: "highlight",
        content:
          "Sejak dimulainya kontrak jangka panjang dengan Indorama pada 2023, CV. Berkah Ryan berhasil mempertahankan uptime forklift di atas 97% — artinya kurang dari 1 hari downtime per bulan per unit — berkat sistem pemeliharaan preventif yang terstruktur.",
      },
      {
        type: "heading2",
        content: "Program Pemeliharaan Preventif Forklift",
      },
      {
        type: "paragraph",
        content:
          "Untuk menjaga keandalan armada forklift yang beroperasi dalam tiga shift penuh di pabrik Indorama, CV. Berkah Ryan menerapkan program pemeliharaan preventif terstruktur. Teknisi mekanik kami melakukan kunjungan berkala ke lokasi untuk melaksanakan perawatan sebelum jadwal service resmi, mendeteksi keausan komponen lebih awal, dan mencegah kerusakan tidak terduga yang dapat menghentikan lini produksi.",
      },
    ],
  },
};

// English articles
export const portfolioArticlesEn: Record<string, PortfolioArticle> = {
  "pertamina-banten": {
    slug: "pertamina-banten",
    title: "Crane & Forklift Rental for Pertamina Facility Maintenance in Banten",
    excerpt:
      "CV. Berkah Ryan provides ongoing Telescopic Crane rental (25–200 Tons) and forklift (3–35 Tons) services to support PT Pertamina's preventive maintenance program for fuel storage and distribution facilities across Cilegon and Serang, Banten.",
    keywords: [
      "crane rental Pertamina Banten",
      "forklift rental Pertamina Cilegon",
      "heavy equipment fuel storage maintenance",
      "K3 certified crane refinery Banten",
    ],
    date: "January 2023",
    faq: [
      {
        question: "What crane capacities are used for Pertamina's facilities in Banten?",
        answer:
          "CV. Berkah Ryan supplies cranes ranging from 25 to 200 tons, including Tadano and Kato Telescopic Mobile Cranes, customized to the specific lifting needs at Pertamina's fuel storage and distribution infrastructure.",
      },
      {
        question: "Are the cranes K3-certified for refinery area operations?",
        answer:
          "Yes. All equipment deployed in Pertamina projects holds active Machine Licenses (SIA) from Kemnaker RI and is operated by SIO (Operator License) certified technicians relevant to the equipment class.",
      },
    ],
    content: [],
  },
  "chandra-asri-petrochemical": {
    slug: "chandra-asri-petrochemical",
    title: "Heavy Crawler Crane Support for Chandra Asri Petrochemical Plant Expansion",
    excerpt:
      "CV. Berkah Ryan provided 150–400 Ton Crawler Crane rental services to support the large-scale petrochemical plant expansion by PT Chandra Asri Petrochemical Tbk in Ciwandan, Cilegon, Banten.",
    keywords: [
      "crawler crane Chandra Asri rental",
      "heavy crane petrochemical Cilegon",
      "large capacity crawler crane Banten",
    ],
    date: "March 2024",
    faq: [],
    content: [],
  },
  "pln-indonesia-power": {
    slug: "pln-indonesia-power",
    title: "Heavy Equipment for PLN Indonesia Power Plant Maintenance in Banten",
    excerpt:
      "CV. Berkah Ryan supports PLN Indonesia Power's preventive maintenance and overhaul programs at Suralaya Power Station in Cilegon, Banten, with a fleet of K3-certified Mobile Cranes and Roughter Cranes.",
    keywords: [
      "crane rental PLN Indonesia Power Banten",
      "power plant heavy equipment maintenance",
      "roughter crane Cilegon Banten",
    ],
    date: "September 2023",
    faq: [],
    content: [],
  },
  "lotte-chemical-cilegon": {
    slug: "lotte-chemical-cilegon",
    title: "Crane & Logistics Support for Lotte Chemical Plant Construction in Cilegon",
    excerpt:
      "CV. Berkah Ryan served as the primary lifting and logistics partner during the construction phase of PT Lotte Chemical Titan Nusantara's new chemical facility in Merak, Cilegon, Banten.",
    keywords: [
      "crane rental Lotte Chemical Cilegon",
      "construction crane chemical plant Banten",
      "crawler crane Merak Cilegon",
    ],
    date: "February 2024",
    faq: [],
    content: [],
  },
  "indorama-cilegon": {
    slug: "indorama-cilegon",
    title: "Daily Forklift Rental & Steel Plate Services for Indorama Warehouse Operations",
    excerpt:
      "CV. Berkah Ryan provides long-term forklift rental (3–35 Tons) and 25mm steel road plates for the warehouse and synthetic fiber factory operations of PT Indorama Ventures Indonesia in Cilegon, Banten.",
    keywords: [
      "forklift rental Indorama Cilegon",
      "warehouse forklift Banten",
      "monthly forklift rental Cilegon",
    ],
    date: "October 2023",
    faq: [],
    content: [],
  },
};
