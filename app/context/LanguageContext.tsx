"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "id" | "en";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  id: {
    // Navbar
    navCompany: "Perusahaan",
    navCrane: "Crane",
    navForklift: "Forklift",
    navPortfolio: "Portofolio",
    navBlog: "Blog",
    navContactUs: "Hubungi Kami",
    navContact: "KONTAK",
    navSubCalc: "Kalkulator Peralatan",
    navSubCert: "Keselamatan & Sertifikasi",
    searchPlaceholder: "Cari Produk",

    // Homepage Hero
    heroTitle: "Rental Alat Berat Cilegon & Banten",
    heroSubtitle: "CV. Berkah Ryan — Penyedia Sewa Crane & Forklift Profesional Bersertifikasi K3",
    heroImageAlt: "Penyewaan Alat Berat Crane dan Forklift Cilegon Banten - CV Berkah Ryan",

    // Homepage History
    historyText: "Selama lebih dari 3 tahun, Berkah Ryan telah bangga hadir di jantung industri alat berat.",
    historyLabel: "SEJAK 2023",
    historySubtitleText: "Kami mendedikasikan keahlian operasional dan armada alat berat bersertifikasi K3 untuk menyokong proyek infrastruktur strategis di Banten.",
    historyCta: "Tentang Kami",
    historyImageAlt: "Komitmen Keselamatan dan Armada Crane CV Berkah Ryan Heavy Equipment Cilegon",

    // Homepage Stats
    statsLeftTitle: "industri alat berat",
    statsLeftText: "Berkah Ryan menawarkan kemampuan sewa yang luas melalui armada langsung di lokasi-lokasi utama dan penyebaran langsung dari mitra di seluruh dunia. Hal ini memungkinkan pengiriman peralatan yang cepat dan solusi khusus untuk pelanggan dengan kebutuhan yang lebih spesifik.",
    stat1Desc: "Total peralatan yang dikerahkan per tahun",
    stat2Desc: "Jumlah proyek yang didukung per tahun",
    stat3Desc: "Jumlah kota tempat kami beroperasi",

    // Pinned Scroll
    pinnedTitle1: "Alat Berat yang Andal",
    pinnedText1: "Kami berkomitmen untuk menyediakan mesin-mesin kelas atas dan memastikan semua peralatan terawat dengan baik, bersertifikat penuh, dan siap untuk proyek menantang apa pun yang Anda miliki.",
    pinnedTitle2: "Operator Ahli",
    pinnedText2: "Kami adalah bagian dari jaringan global ahli peralatan, memberikan wawasan mendalam tentang proyek-proyek regional, membantu pelanggan kami mengantisipasi tren, dan membuat keputusan yang lebih tepat tentang penempatan armada.",

    // Footer
    footerCta: "Ada yang bisa kami bantu?",
    footerCtaSub: "Mari bicara",
    footerPolicy2: "Kebijakan Keselamatan",
    footerPolicy3: "Syarat & Ketentuan",
    footerSoftProfile: "Unduh Company Profile",

    // Company Page
    companyLabel: "CV. Berkah Ryan",
    companyTitle: "Tentang Perusahaan",
    companyIntro: "CV. Berkah Ryan yang berdiri sejak tahun 2023 bergerak di bidang jasa penyewaan alat berat dengan fokus utama penyewaan crane berkapasitas 25 dan 55 ton.",
    companyP1: "Kami berlokasi strategis di Banten dan berkomitmen untuk menyediakan peralatan berkualitas serta layanan terbaik kepada klien dari berbagai industri. Dengan komitmen yang kuat terhadap keselamatan, keandalan, dan efisiensi, kami ingin menjadi penyedia persewaan alat berat pilihan di kawasan ini.",
    companyP2: "Seluruh armada kami secara rutin melalui inspeksi K3 berkala guna memastikan kesiapan operasional di lapangan. Setiap operator kami juga dibekali dengan lisensi SIO aktif agar proyek Anda dapat berjalan dengan aman dan efisien.",
    companyVisiTitle: "Visi Kami",
    companyVisiText: "Menjadi penyedia persewaan alat berat terbaik di kawasan ini, yang dikenal dengan komitmen kami terhadap keselamatan, konsistensi, dan kepuasan pelanggan.",
    companyMisiTitle: "Misi Kami",
    companyMisiText: "Memberikan pelayanan persewaan alat berat yang unggul dengan fokus pada persewaan crane berkapasitas 25 dan 55 ton, serta berkomitmen dalam menyediakan peralatan berkualitas dan pelayanan terbaik kepada klien dari berbagai industri.",

    // Crane Page
    craneLabel: "Kemampuan Armada",
    craneTitle: "Penyewaan Crane",
    craneIntro: "Sebagai penyedia jasa rental alat berat terpercaya di Banten, CV. Berkah Ryan menyediakan layanan sewa crane Cilegon dan sekitarnya. Seluruh armada crane kami dirawat secara berkala, bersertifikasi K3, dan siap dioperasikan oleh operator berlisensi SIO aktif untuk menjamin keselamatan kerja tinggi.",
    craneP1: "Kami memahami kebutuhan lifting presisi di berbagai sektor industri seperti konstruksi sipil, pabrik petrokimia, dan dermaga kapal. Berikut adalah kategori armada crane berkualitas tinggi yang kami sewakan dengan berbagai kapasitas:",
    craneSec1Title: "01. Telescopic Truck Mobile Crane",
    craneSec1Desc: "Penyewaan Telescopic Truck Mobile Crane di Banten untuk kebutuhan konstruksi, logistik, dan infrastruktur. Crane mobile ini menawarkan fleksibilitas tinggi di jalan raya dan mobilitas cepat antar lokasi kerja. Dilengkapi boom teleskopik hidrolik yang tangguh untuk pengangkatan presisi tinggi.",
    craneSec1Text: "Tadano (20, 45, 80 Ton), Sany (25 Ton), Kato (50, 160 Ton), Liebherr (200 Ton), Sumitomo (360 Ton), Zoomlion (55 Ton)",
    craneSec2Title: "02. Terrain Mobile Crane",
    craneSec2Desc: "Layanan sewa All-Terrain Mobile Crane dan Truck-Mounted Crane berkapasitas 5 hingga 15 ton. Sangat ideal untuk medan semi-offroad, area perkotaan yang padat, atau proyek dengan ruang gerak terbatas yang membutuhkan manuver lincah dan setup cepat.",
    craneSec2Text: "Tadano (5, 7, 8 Ton), Unic (10, 15 Ton)",
    craneSec3Title: "03. Crawler Crane",
    craneSec3Desc: "Sewa Crawler Crane kelas berat (50 - 550 Ton) untuk proyek infrastruktur berskala besar, erection girder jembatan, pembangunan pabrik, dan industri petrokimia di Cilegon dan Banten. Menggunakan lintasan rantai baja kokoh yang memberikan kestabilan maksimal di permukaan tanah lunak.",
    craneSec3Text: "Link Belt (50 Ton), Sumitomo (60 Ton), P&H (150 Ton), Manitowoc (200 Ton), Demac (400 Ton), Kobelco (550 Ton)",
    craneSec4Title: "04. Roughter Crane",
    craneSec4Desc: "Penyewaan Rough Terrain Crane (Roughter) untuk mobilitas tangguh di medan proyek ekstrem berlumpur dan tidak rata. Memiliki ban tapak lebar dan sistem kemudi 4x4 (four-wheel drive) yang ideal untuk tahap awal konstruksi sipil.",
    craneSec4Text: "Tadano (20, 25, 50 Ton), Kato (45 Ton)",

    // Forklift Page
    forkliftLabel: "Kemampuan Armada",
    forkliftTitle: "Penyewaan Forklift & Logistik",
    forkliftIntro: "CV. Berkah Ryan melayani jasa sewa forklift Cilegon Banten berkualitas untuk berbagai keperluan loading-unloading material. Kami juga melayani sewa trailer untuk angkutan alat berat serta steel plate untuk pengerasan jalan proyek darurat.",
    forkliftP1: "Untuk mendukung kelancaran mobilisasi armada dan logistik di lapangan, kami menyediakan unit penunjang tangguh yang selalu dalam kondisi prima dan siap pakai:",
    forkliftSec1Title: "05. Forklift",
    forkliftSec1Desc: "Sewa Forklift Cilegon Banten kapasitas 5, 10, hingga 15 ton untuk bongkar muat material pabrik, logistik gudang, dan pemindahan mesin industri. Unit terawat dengan pilihan sewa harian, mingguan, maupun bulanan beserta operator berpengalaman.",
    forkliftSec1Text: "TCM (5, 10 Ton), Daewoo (15 Ton)",
    forkliftSec2Title: "06. Trailer",
    forkliftSec2Desc: "Jasa sewa Trailer 40 Feet (flatbed/lowbed) untuk transportasi logistik alat berat, mobilisasi crane, dan pengiriman material konstruksi panjang di wilayah Banten dan sekitarnya. Menjamin ketepatan waktu pengiriman armada ke lokasi Anda.",
    forkliftSec2Text: "Ukuran: 40 Feet",
    forkliftSec3Title: "07. Steel Plate (Pelat Baja)",
    forkliftSec3Desc: "Penyewaan Steel Plate (Pelat Jalan Baja) tebal 25mm di Banten untuk proteksi tanah, jembatan sementara, dan jalur lintasan alat berat berat seperti crawler crane agar tidak amblas di medan berlumpur atau berpasir.",
    forkliftSec3Text: "Ukuran: 1.5m x 6m x 25mm",

    // Portfolio Page
    portfolioLabel: "Studi Kasus",
    portfolioTitle: "Portofolio Proyek",
    portfolioIntro: "Mendukung infrastruktur regional, gudang rak tinggi, dan pembangunan perkotaan.",
    portfolioP1: "Selama 3 tahun terakhir, CV. Berkah Ryan telah sukses mendukung lebih dari 8.000 proyek di 20 kota yang berbeda. Portofolio kami mencakup rigging fondasi dalam, staging bahan bangunan berat, perakitan menara ketinggian tinggi, dan relokasi logistik industri skala besar.",
    portfolioP2: "Baik bermitra dengan lembaga konstruksi pemerintah utama atau mendukung pengembang gudang korporasi khusus, kami menjaga fokus kami pada jadwal pengiriman dan keselamatan mutlak. Kami bangga menjadi mitra yang dipercayai oleh operator angkat berat untuk tantangan logistik yang kompleks.",
    portfolioP3: "Tim kami dapat menyusun profil perusahaan dan studi kasus khusus untuk ditinjau, merinci persiapan tanah, bagan pusat beban, dan sistem rigging yang digunakan dalam pengangkatan proyek kami yang paling menuntut.",

    // Contact Page
    contactLabel: "Hubungi Kami",
    contactTitle: "Hubungi Kami",
    contactIntro: "Mari diskusikan rencana logistik pengangkatan atau penanganan material Anda selanjutnya.",
    contactP1: "Baik Anda memerlukan penawaran cepat untuk kapasitas forklift atau ingin menjalankan penilaian rekayasa angkat lengkap dengan crane seluler, tim kami siap membantu.",
    contactP2: "Kantor dan unit dispatch pemeliharaan kami tersedia 24/7 untuk keadaan darurat operasional dan pengaturan rigging malam hari yang dijadwalkan.",
    contactSpecialist: "Spesialis Alat Berat",

    // Blog Page
    blogLabel: "Jurnal Berkah Ryan",
    blogTitle: "Wawasan Utama",
    blogBackBtn: "Kembali ke Jurnal",
    waAdminHeader: "Hubungi Admin WhatsApp",

    // Safety Page
    safetyLabel: "Kebijakan K3",
    safetyTitle: "Kebijakan Keselamatan",
    safetyIntro: "Di CV. Berkah Ryan, keselamatan kerja adalah prioritas utama kami. Kami menerapkan standar K3 (Keselamatan dan Kesehatan Kerja) yang ketat pada setiap aspek penyewaan dan pengoperasian alat berat guna memastikan nol kecelakaan (zero accident) di area kerja Anda.",
    safetyP1: "Kami meyakini bahwa keselamatan kerja yang sukses dicapai melalui kombinasi antara peralatan yang dirawat dengan sempurna, operator yang terlatih dan berlisensi, serta kepatuhan mutlak terhadap protokol keselamatan di lapangan.",
    safetyP2: "Kebijakan keselamatan alat berat kami didasarkan pada empat pilar utama:",
    safetyPillar1Title: "1. Uji Kelayakan Peralatan (Riksa Uji)",
    safetyPillar1Text: "Seluruh unit crane, forklift, dan alat pendukung kami secara rutin melewati inspeksi fisik dan uji beban (Riksa Uji) berkala untuk memastikan Surat Izin Alat (SIA) tetap aktif dan aman digunakan.",
    safetyPillar2Title: "2. Operator Berlisensi SIO Aktif",
    safetyPillar2Text: "Setiap peralatan kami hanya dioperasikan oleh personel bersertifikat yang memiliki Surat Izin Operasi (SIO) resmi dari Kemnaker RI yang masih aktif sesuai kelas alat.",
    safetyPillar3Title: "3. Perencanaan Rigging & Lift Plan",
    safetyPillar3Text: "Setiap pengangkatan kritis wajib dilengkapi dengan perhitungan matang (lift plan) yang menganalisis kapasitas beban, kekuatan tanah tumpuan, serta clearance radius operasi.",
    safetyPillar4Title: "4. APD & Perimeter Steril",
    safetyPillar4Text: "Penggunaan APD standar (helm, safety shoes, rompi reflektif) wajib bagi seluruh kru. Pemasangan barikade perimeter pengaman dilakukan untuk mensterilkan radius ayunan boom crane.",

    // Homepage Services Showcase
    homeServicesTitle: "Armada Alat Berat & Jasa Rental Kami",
    homeServicesSubtitle: "Layanan sewa alat berat berkualitas tinggi dengan dukungan operator handal untuk mensukseskan proyek Anda di Banten.",
    homeServicesCraneTitle: "Penyewaan Crane",
    homeServicesCraneDesc: "Sewa mobile crane, crawler crane, roughter crane kapasitas 5 - 550 Ton bersertifikasi K3 Kemnaker untuk kebutuhan pengangkatan presisi.",
    homeServicesCraneAlt: "Penyewaan Crane Cilegon Banten - CV Berkah Ryan",
    homeServicesForkliftTitle: "Penyewaan Forklift",
    homeServicesForkliftDesc: "Jasa rental forklift kapasitas 5, 10, hingga 15 Ton untuk bongkar muat material pabrik, logistik gudang, dan pemindahan mesin.",
    homeServicesForkliftAlt: "Penyewaan Forklift Cilegon Banten - CV Berkah Ryan",
    homeServicesLogisticsTitle: "Trailer & Steel Plate",
    homeServicesLogisticsDesc: "Sewa trailer 40 feet untuk mobilisasi alat berat, serta pelat baja (steel plate) tebal 25mm untuk jalan darurat berlumpur.",
    homeServicesLogisticsAlt: "Penyewaan Trailer dan Pelat Jalan Baja Cilegon - CV Berkah Ryan",

    // Homepage Why Choose Us
    homeWhyTitle: "Mengapa Memilih CV. Berkah Ryan?",
    homeWhySubtitle: "Komitmen kami pada aspek keselamatan operasional (K3), kesiapan unit, dan ketepatan waktu proyek Anda.",
    homeWhy1Title: "SIO & Sertifikasi K3",
    homeWhy1Desc: "Seluruh alat memiliki Surat Izin Alat (SIA) aktif dan dioperasikan oleh tenaga ahli berlisensi SIO resmi.",
    homeWhy2Title: "Pemeliharaan Armada Berkala",
    homeWhy2Desc: "Inspeksi rutin berkala guna memastikan kesiapan penuh operasional di lapangan tanpa kendala teknis.",
    homeWhy3Title: "Dukungan 24/7",
    homeWhy3Desc: "Siap melayani pengiriman logistik malam hari serta respon darurat operasional kapan saja.",
    homeWhy4Title: "Kalkulasi Rigging & Outrigger",
    homeWhy4Desc: "Dukungan perhitungan load chart dan tumpuan outrigger pad agar tanah stabil saat pengangkatan berat.",

    // Homepage Blog section
    homeBlogTitle: "Wawasan K3 & Logistik Terbaru",
    homeBlogSubtitle: "Temukan artikel edukatif seputar keselamatan kerja, tips memilih kapasitas forklift, dan pemeliharaan alat berat.",
    homeReadMore: "Baca Selengkapnya",

    // Homepage Clients section
    trustLabel: "Mitra Industri",
    trustSubLabel: "Dipercaya oleh raksasa manufaktur & petrokimia di Banten",
    homeClientsTitle: "Mitra & Klien Kami",
    homeClientsSubtitle: "Dipercaya oleh perusahaan-perusahaan industri besar di Cilegon dan Banten untuk penyediaan alat berat berkualitas tinggi dengan standar keselamatan yang ketat.",
    clientPertaminaDesc: "Penyediaan sewa crane dan forklift untuk pemeliharaan fasilitas tangki penyimpanan dan distribusi bahan bakar Pertamina di Banten.",
    clientChandraAsriDesc: "Mendukung proyek ekspansi pabrik petrokimia Chandra Asri dengan armada crane berkapasitas tinggi bersertifikasi K3 lengkap.",
    clientPlnDesc: "Penyewaan alat berat untuk penanganan material dan pemeliharaan pembangkit listrik PLN Indonesia Power guna menjaga pasokan energi nasional.",
    clientLotteDesc: "Penyediaan unit logistik dan crawler crane berat dalam fase konstruksi kompleks pabrik kimia baru Lotte Chemical di Cilegon.",
    clientIndoramaDesc: "Layanan sewa forklift harian/bulanan beserta pelat baja (steel plate) untuk operasional gudang dan pabrik serat sintetis Indorama.",
  },
  en: {
    // Navbar
    navCompany: "Company",
    navCrane: "Crane",
    navForklift: "Forklift",
    navPortfolio: "Portfolio",
    navBlog: "Blog",
    navContactUs: "Contact Us",
    navContact: "CONTACT",
    navSubCalc: "Equipment Calculator",
    navSubCert: "Safety & Certifications",
    searchPlaceholder: "Search Products",

    // Homepage Hero
    heroTitle: "Heavy Equipment Rental Cilegon & Banten",
    heroSubtitle: "CV. Berkah Ryan — Professional K3-Certified Crane & Forklift Rental Services",
    heroImageAlt: "Heavy Equipment Crane and Forklift Rental Cilegon Banten - CV Berkah Ryan",

    // Homepage History
    historyText: "For more than 3 years, Berkah Ryan have been a proud presence at the heart of the heavy equipment industry.",
    historyLabel: "SINCE 2023",
    historySubtitleText: "We dedicate our operational expertise and K3-certified fleet to support strategic infrastructure and plant projects across Banten.",
    historyCta: "About Us",
    historyImageAlt: "Safety Commitment and Crane Fleet of CV Berkah Ryan Heavy Equipment Cilegon",

    // Homepage Stats
    statsLeftTitle: "heavy equipment industry",
    statsLeftText: "Berkah Ryan offer extensive rental capabilities through a mix of on-hand fleet at major locations and direct deployments from partners worldwide. This allows for prompt delivery of equipment and bespoke solutions for customers with more specialised requirements.",
    stat1Desc: "Total equipment deployed per year",
    stat2Desc: "No. of projects supported per year",
    stat3Desc: "No. of cities we're operating in",

    // Pinned Scroll
    pinnedTitle1: "Reliable Heavy Equipment",
    pinnedText1: "We are committed to providing top-tier machinery and ensuring all equipment is well-maintained, fully certified, and ready for any demanding project you have.",
    pinnedTitle2: "Expert Operators",
    pinnedText2: "We're part of a worldwide network of equipment experts, providing deep insight into regional projects, helping our customers anticipate trends, and make more informed decisions about deployment.",

    // Footer
    footerCta: "Can we help?",
    footerCtaSub: "Let's talk",
    footerPolicy2: "Safety Policy",
    footerPolicy3: "Terms & Conditions",
    footerSoftProfile: "Download Company Profile",

    // Company Page
    companyLabel: "CV. Berkah Ryan",
    companyTitle: "About the Company",
    companyIntro: "Established in 2023, CV. Berkah Ryan operates in the heavy equipment rental services industry, focusing primarily on high-capacity cranes ranging from 25 to 55 tons.",
    companyP1: "Strategically located in Banten, we are committed to providing certified machinery and outstanding customer support to clients across diverse industries. Driven by safety, reliability, and operational efficiency, we aim to be the heavy equipment provider of choice in the region.",
    companyP2: "Our entire fleet undergoes routine safety checks to guarantee maximum operational readiness on site. Every operator is licensed with active K3 certifications, ensuring safe, seamless, and efficient project execution.",
    companyVisiTitle: "Our Vision",
    companyVisiText: "To be the premier heavy equipment rental provider in the region, recognized for our unwavering commitment to safety, operational consistency, and maximum customer satisfaction.",
    companyMisiTitle: "Our Mission",
    companyMisiText: "To deliver outstanding heavy equipment rental services centered on high-capacity cranes (25 and 55 ton), while remaining dedicated to providing certified machinery and top-tier technical support to diverse industrial clients.",

    // Crane Page
    craneLabel: "Fleet Capabilities",
    craneTitle: "Crane Rental Services",
    craneIntro: "As a trusted heavy equipment rental provider in Banten, CV. Berkah Ryan offers professional crane rental services in Cilegon and surrounding areas. Our crane fleet is meticulously maintained, K3-certified, and operated by licensed operators with active SIO credentials to ensure maximum safety.",
    craneP1: "We understand the demands of precision lifting across industrial sectors such as civil construction, petrochemical plants, and shipyard operations. Below are the high-capacity crane configurations available for rent:",
    craneSec1Title: "01. Telescopic Truck Mobile Crane",
    craneSec1Desc: "Telescopic Truck Mobile Crane rental in Banten for construction, logistics, and infrastructure needs. These mobile cranes offer high road flexibility and rapid deployment between jobsites, featuring robust hydraulic telescopic booms for precise heavy lifting.",
    craneSec1Text: "Tadano (20, 45, 80 Ton), Sany (25 Ton), Kato (50, 160 Ton), Liebherr (200 Ton), Sumitomo (360 Ton), Zoomlion (55 Ton)",
    craneSec2Title: "02. Terrain Mobile Crane",
    craneSec2Desc: "All-Terrain Mobile Crane and truck-mounted crane rental ranging from 5 to 15 tons. Ideal for semi-offroad terrains, tight urban environments, or confined spaces requiring high maneuverability and rapid setup.",
    craneSec2Text: "Tadano (5, 7, 8 Ton), Unic (10, 15 Ton)",
    craneSec3Title: "03. Crawler Crane",
    craneSec3Desc: "Heavy-duty Crawler Crane rental (50 to 550 Tons) for large-scale infrastructure projects, bridge girder erection, industrial plant assembly, and petrochemical complexes in Cilegon and Banten. Engineered with steel crawler tracks for maximum stability on soft ground conditions.",
    craneSec3Text: "Link Belt (50 Ton), Sumitomo (60 Ton), P&H (150 Ton), Manitowoc (200 Ton), Demac (400 Ton), Kobelco (550 Ton)",
    craneSec4Title: "04. Roughter Crane",
    craneSec4Desc: "Rough Terrain Crane (Roughter) rental for outstanding mobility on extreme, muddy, and uneven terrains. Equipped with oversized tires and 4x4 four-wheel drive steering, perfect for early-stage civil construction sites.",
    craneSec4Text: "Tadano (20, 25, 50 Ton), Kato (45 Ton)",

    // Forklift Page
    forkliftLabel: "Fleet Capabilities",
    forkliftTitle: "Forklift & Logistics Rental",
    forkliftIntro: "CV. Berkah Ryan provides high-quality forklift rental services in Cilegon Banten for industrial material handling. We also offer heavy cargo trailer rental for equipment mobilization and thick steel plates for temporary site access roads.",
    forkliftP1: "To support seamless mobilization and logistics on site, we provide a fleet of robust support units kept in peak operational condition:",
    forkliftSec1Title: "05. Forklift",
    forkliftSec1Desc: "Forklift rental in Cilegon Banten with capacities of 5, 10, and 15 tons for industrial material handling, warehouse logistics, and heavy machinery relocation. Well-maintained units available for daily, weekly, or monthly rental with experienced operators.",
    forkliftSec1Text: "TCM (5, 10 Ton), Daewoo (15 Ton)",
    forkliftSec2Title: "06. Trailer",
    forkliftSec2Desc: "Cargo Trailer 40 Feet (flatbed/lowbed) rental services for heavy equipment mobilization, crane transport, and long structural materials shipping across Banten. Ensuring safe and timely heavy cargo delivery to your jobsite.",
    forkliftSec2Text: "Size: 40 Feet",
    forkliftSec3Title: "07. Steel Plate",
    forkliftSec3Desc: "Steel Plate (road plate) rental in Banten with a thickness of 25mm. Essential for soil stabilization, temporary ground protection, and trackways for heavy crawlers on muddy or sandy job sites.",
    forkliftSec3Text: "Size: 1.5m x 6m x 25mm",

    // Portfolio Page
    portfolioLabel: "Case Studies",
    portfolioTitle: "Project Portfolio",
    portfolioIntro: "Supporting regional infrastructure, high-bay warehouses, and urban developments.",
    portfolioP1: "Over the past 3 years, CV. Berkah Ryan has successfully supported over 8,000 projects across 20 different cities. Our portfolio spans deep foundation rigging, heavy building material staging, high-altitude tower assembly, and large-scale industrial logistic relocations.",
    portfolioP2: "Whether partnering with major governmental construction agencies or supporting specialized corporate warehouse developers, we maintain our focus on delivery schedules and absolute safety. We take pride in being the partner that heavy-lift operators trust for complex logistical challenges.",
    portfolioP3: "Our team can compile custom company profiles and case studies for review, detailing soil preparation, load center charts, and rigging systems used in our most demanding project lifts.",

    // Contact Page
    contactLabel: "Get in Touch",
    contactTitle: "Contact Us",
    contactIntro: "Let's discuss your next lifting or materials handling logistics setup.",
    contactP1: "Whether you need a quick quote on forklift capacities or want to run a complete lift engineering assessment with mobile cranes, our team is ready to assist.",
    contactP2: "Our office and maintenance dispatch units are available 24/7 for operational emergencies and scheduled night-time rigging setups.",
    contactSpecialist: "Heavy Equipment Specialists",

    // Blog Page
    blogLabel: "Berkah Ryan Journal",
    blogTitle: "Heavy Insights",
    blogBackBtn: "Back to Journal",
    waAdminHeader: "Contact WhatsApp Admin",

    // Safety Page
    safetyLabel: "HSE Policy",
    safetyTitle: "Safety Policy",
    safetyIntro: "At CV. Berkah Ryan, safety is our ultimate priority. We implement strict HSE (Health, Safety, and Environment) standards in every aspect of heavy equipment rental and operation to guarantee zero accidents on your jobsite.",
    safetyP1: "We believe that successful workplace safety is achieved through a combination of perfectly maintained equipment, highly trained and licensed operators, and absolute adherence to site safety protocols.",
    safetyP2: "Our heavy equipment safety policy is built upon four main pillars:",
    safetyPillar1Title: "1. Equipment Certification (Riksa Uji)",
    safetyPillar1Text: "All crane, forklift, and support units undergo periodic load testing and physical inspections (Riksa Uji) to maintain active Machine Licenses (SIA) and ensure operational integrity.",
    safetyPillar2Title: "2. Licensed Operators with Active SIO",
    safetyPillar2Text: "Our machines are operated exclusively by personnel holding active Operator Licenses (SIO) officially issued by Kemnaker RI, corresponding to the specific equipment class.",
    safetyPillar3Title: "3. Rigging & Lift Plan Design",
    safetyPillar3Text: "All critical lifts require a rigorous pre-calculated lift plan detailing maximum weights, ground-bearing pressure calculations, and safe clearance radius boundaries.",
    safetyPillar4Title: "4. PPE & Sterile Perimeter Zones",
    safetyPillar4Text: "Proper PPE (helmets, steel-toed boots, high-vis vests) is mandatory. Visual safety barricades are erected around the boom swing radius to secure the work zone.",

    // Homepage Services Showcase
    homeServicesTitle: "Our Heavy Equipment & Rental Services",
    homeServicesSubtitle: "High-quality heavy machinery rental services supported by experienced operators to ensure project success in Banten.",
    homeServicesCraneTitle: "Crane Rental Services",
    homeServicesCraneDesc: "Rent mobile cranes, crawler cranes, roughter cranes from 5 to 550 Tons with official K3 certification for precision heavy lifting.",
    homeServicesCraneAlt: "Crane Rental Cilegon Banten - CV Berkah Ryan",
    homeServicesForkliftTitle: "Forklift Rental Services",
    homeServicesForkliftDesc: "Forklift rental ranging from 5, 10, to 15 Tons for warehouse logistics, plant loading, and industrial machinery relocation.",
    homeServicesForkliftAlt: "Forklift Rental Cilegon Banten - CV Berkah Ryan",
    homeServicesLogisticsTitle: "Trailer & Steel Plate",
    homeServicesLogisticsDesc: "Rent 40-foot flatbed/lowbed trailers for equipment mobilization and 25mm thick steel road plates for soil stabilization.",
    homeServicesLogisticsAlt: "Trailer and Road Steel Plate Rental Cilegon - CV Berkah Ryan",

    // Homepage Why Choose Us
    homeWhyTitle: "Why Choose CV. Berkah Ryan?",
    homeWhySubtitle: "Our commitment to absolute operational safety (HSE), fleet readiness, and on-time project execution.",
    homeWhy1Title: "K3 & Active SIO Licensing",
    homeWhy1Desc: "Every machine carries an active SIA license, operated by trained professionals with certified SIO credentials.",
    homeWhy2Title: "Routine Fleet Maintenance",
    homeWhy2Desc: "Regular physical inspections to ensure maximum machine uptime and zero operational disruptions.",
    homeWhy3Title: "24/7 Operational Dispatch",
    homeWhy3Desc: "Always available for night-time rigging setups and emergency support for field operations.",
    homeWhy4Title: "Rigging & Outrigger Engineering",
    homeWhy4Desc: "Load chart assessment and outrigger setup design on steel plates for high stability on soft soil.",

    // Homepage Blog section
    homeBlogTitle: "Latest HSE & Logistics Insights",
    homeBlogSubtitle: "Browse educational articles about workplace safety, forklift capacity guides, and heavy equipment updates.",
    homeReadMore: "Read More",

    // Homepage Clients section
    trustLabel: "Industrial Partners",
    trustSubLabel: "Trusted by manufacturing & petrochemical leaders",
    homeClientsTitle: "Our Clients & Partners",
    homeClientsSubtitle: "Trusted by major industrial corporations across Cilegon and Banten for high-quality heavy equipment rental with strict safety compliance.",
    clientPertaminaDesc: "Provided crane and forklift rental services for facility maintenance at Pertamina's fuel storage and distribution depots in Banten.",
    clientChandraAsriDesc: "Supported Chandra Asri's petrochemical plant expansion project with high-capacity, fully HSE-certified crane fleets.",
    clientPlnDesc: "Heavy equipment rental for material handling and maintenance at PLN Indonesia Power plants to secure national energy supply.",
    clientLotteDesc: "Supplied logistics units and heavy crawler cranes during the construction phase of the new Lotte Chemical plant complex in Cilegon.",
    clientIndoramaDesc: "Daily and monthly forklift rentals along with road steel plates for Indorama's synthetic fiber warehouse and factory operations.",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("id");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Language;
    if (stored === "id" || stored === "en") {
      setLanguage(stored);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
