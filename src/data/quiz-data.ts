import type { StudyProgram, Question, ProdiId } from '@/types/quiz';

export const STUDY_PROGRAMS: Record<ProdiId, StudyProgram> = {
  'bisnis-digital': {
    id: 'bisnis-digital',
    name: 'S1 Bisnis Digital',
    faculty: 'Fakultas Desain Kreatif dan Bisnis Digital (CREABIZ)',
    tagline: 'Arsitek Ekosistem Ekonomi Digital & Inovator Pasar Modern',
    description:
      'Kamu adalah visioner dengan pemikiran strategis tajam! Kamu menguasai seni memadukan teknologi cloud, analitika data konsumen, dan strategi monetisasi digital untuk membangun model bisnis masa depan yang disruptive dan berkelanjutan.',
    magazinePage: 'ShapeTool Magazine Hal 12',
    color: '#00E5FF',
    badgeToken: 'CREABIZ-BD',
    competencies: [
      'Digital Business Modeling & Monetization',
      'Data-Driven Growth Hacking',
      'Fintech & E-Commerce Infrastructure',
      'UI/UX Product Management',
    ],
    careerPaths: [
      'Digital Product Manager',
      'Tech Entrepreneur / Startup Founder',
      'Growth Strategy Lead',
      'Fintech Business Analyst',
    ],
  },
  'sains-komunikasi': {
    id: 'sains-komunikasi',
    name: 'S1 Sains Komunikasi',
    faculty: 'Fakultas Sains dan Analitika Data (FSAD)',
    tagline: 'Penerjemah Sains, Media Komputasional & Narasi Berbasis Data',
    description:
      'Kamu adalah komunikator cerdas yang berbasis fakta ilmiah! Kamu tidak sekadar berbicara, tetapi membedah algoritma media sosial, dinamika opini publik, dan etika kecerdasan buatan untuk menjembatani sains kompleks ke publik secara memukau.',
    magazinePage: 'ShapeTool Magazine Hal 14',
    color: '#FFB800',
    badgeToken: 'FSAD-SK',
    competencies: [
      'Computational Communication & Social Network Analysis',
      'Data Storytelling & Infographic Architecture',
      'Science Journalism & Risk Communication',
      'AI & Digital Media Ethics',
    ],
    careerPaths: [
      'Computational Media Strategist',
      'Science Communicator & Spokesperson',
      'Public Sentiment Analyst',
      'Corporate Reputation & Crisis Director',
    ],
  },
  'analitika-logistik': {
    id: 'analitika-logistik',
    name: 'D4 Analitika Logistik Terapan',
    faculty: 'Fakultas Vokasi (FV)',
    tagline: 'Navigator Rantai Pasok Cerdas & Otomasi Distribusi Global',
    description:
      'Kamu adalah ahli strategi efisiensi dan aliran barang! Pikiranmu terstruktur secara matematis untuk mengurai bottleneck distribusi maritim, merancang rute pergudangan otonom, dan mengoptimalkan logistik nasional yang presisi.',
    magazinePage: 'ShapeTool Magazine Hal 16',
    color: '#002C6C',
    badgeToken: 'FV-ALT',
    competencies: [
      'Supply Chain Optimization & Operations Research',
      'Smart Warehouse & Cold Chain Management',
      'Maritime & Multimodal Freight Logistics',
      'Predictive Route & Inventory Analytics',
    ],
    careerPaths: [
      'Global Supply Chain Analyst',
      'Logistics Operations Specialist',
      'Smart Warehouse Fleet Architect',
      'Port & Intermodal Distribution Planner',
    ],
  },
  'bioteknologi': {
    id: 'bioteknologi',
    name: 'S1 Bioteknologi',
    faculty: 'Fakultas Sains dan Analitika Data (FSAD)',
    tagline: 'Perekayasa Kehidupan Molekuler & Solusi Bioindustri Berkelanjutan',
    description:
      'Kamu adalah penjelajah kode genetik dan mikrobiologi! Hasratmu terletak pada rekayasa hayati untuk menciptakan bioenergi terbarukan, ketahanan pangan presisi, dan formulasi biomedis modern demi menjaga masa depan planet bumi.',
    magazinePage: 'ShapeTool Magazine Hal 18',
    color: '#00E5FF',
    badgeToken: 'FSAD-BIOTECH',
    competencies: [
      'Genetic Engineering & Molecular Cloning',
      'Fermentation Technology & Bioprocess',
      'Bioinformatics & Genomic Sequencing',
      'Marine & Agricultural Bioremediation',
    ],
    careerPaths: [
      'Bioprocess & Genomic Research Scientist',
      'Biomedical & Pharmaceutical Innovator',
      'Bioenergy & Environmental Consultant',
      'Quality Assurance Bioindustry Specialist',
    ],
  },
  'rekayasa-keselamatan-proses': {
    id: 'rekayasa-keselamatan-proses',
    name: 'S1 Rekayasa Keselamatan Proses',
    faculty: 'Fakultas Teknologi Industri dan Rekayasa Sistem (FTIRS)',
    tagline: 'Benteng Perlindungan Industri Kritis & Mitigasi Risiko Ekstrem',
    description:
      'Kamu adalah pengawal keselamatan tingkat tinggi yang berprinsip kokoh! Kamu memiliki ketelitian mekanikal dan kimiawi luar biasa untuk mengamankan pabrik petrokimia, kilang lepas pantai, dan reaktor hidrogen dari bahaya katastropik.',
    magazinePage: 'ShapeTool Magazine Hal 20',
    color: '#FFB800',
    badgeToken: 'FTIRS-RKP',
    competencies: [
      'Quantitative Risk Assessment (QRA) & HAZOP Analysis',
      'Process Safety Systems & Explosion Dynamics',
      'High-Pressure & Hazardous Chemical Containment',
      'Industrial Fire Protection Engineering',
    ],
    careerPaths: [
      'Process Safety Engineering Specialist',
      'Major Hazards & Risk Assessment Consultant',
      'Offshore Refinery Safety Superintendent',
      'HSE Technical Director for Energy Plants',
    ],
  },
};

export const QUESTIONS: Question[] = [
  {
    id: 'q1',
    scenario:
      'Ketika menghadapi krisis tak terduga dalam sebuah proyek tim, pendekatan pertama yang secara spontan kamu ambil adalah...',
    options: [
      {
        key: 'A',
        text: 'Menganalisis data pasar dan mencari peluang model bisnis baru untuk pivot strategi.',
        scores: {
          'bisnis-digital': 4,
          'sains-komunikasi': 1,
          'analitika-logistik': 2,
          'bioteknologi': 0,
          'rekayasa-keselamatan-proses': 0,
        },
      },
      {
        key: 'B',
        text: 'Mengumpulkan seluruh tim, merumuskan narasi komunikasi yang jernih, dan menenangkan stakeholder.',
        scores: {
          'bisnis-digital': 1,
          'sains-komunikasi': 4,
          'analitika-logistik': 0,
          'bioteknologi': 0,
          'rekayasa-keselamatan-proses': 1,
        },
      },
      {
        key: 'C',
        text: 'Memetakan jalur distribusi dan rantai suplai untuk memastikan sumber daya vital tidak macet.',
        scores: {
          'bisnis-digital': 1,
          'sains-komunikasi': 0,
          'analitika-logistik': 4,
          'bioteknologi': 0,
          'rekayasa-keselamatan-proses': 2,
        },
      },
      {
        key: 'D',
        text: 'Meneliti akar masalah secara biologis/sains mendalam di laboratorium untuk menemukan solusi organik jangka panjang.',
        scores: {
          'bisnis-digital': 0,
          'sains-komunikasi': 1,
          'analitika-logistik': 0,
          'bioteknologi': 4,
          'rekayasa-keselamatan-proses': 1,
        },
      },
      {
        key: 'E',
        text: 'Mengaktifkan protokol mitigasi bahaya, mengecek integritas sistem teknis, dan mencegah kegagalan katastropik.',
        scores: {
          'bisnis-digital': 0,
          'sains-komunikasi': 0,
          'analitika-logistik': 2,
          'bioteknologi': 1,
          'rekayasa-keselamatan-proses': 4,
        },
      },
    ],
  },
  {
    id: 'q2',
    scenario:
      'Saat membaca berita tentang tren masa depan 2030, topik apa yang paling menyalakan rasa ingin tahu dan membuatmu membaca sampai tuntas?',
    options: [
      {
        key: 'A',
        text: 'Ekonomi digital, integrasi AI dalam marketplace global, dan valuasi startup raksasa.',
        scores: {
          'bisnis-digital': 4,
          'sains-komunikasi': 1,
          'analitika-logistik': 1,
          'bioteknologi': 0,
          'rekayasa-keselamatan-proses': 0,
        },
      },
      {
        key: 'B',
        text: 'Bagaimana media sosial, algoritma kurasi konten, dan deepfake mempengaruhi opini pemilih muda.',
        scores: {
          'bisnis-digital': 1,
          'sains-komunikasi': 4,
          'analitika-logistik': 0,
          'bioteknologi': 1,
          'rekayasa-keselamatan-proses': 0,
        },
      },
      {
        key: 'C',
        text: 'Armada kapal otonom, pelabuhan cerdas tanpa awak, dan rute logistik maritim antarpulau.',
        scores: {
          'bisnis-digital': 1,
          'sains-komunikasi': 0,
          'analitika-logistik': 4,
          'bioteknologi': 0,
          'rekayasa-keselamatan-proses': 2,
        },
      },
      {
        key: 'D',
        text: 'Terobosan rekayasa genetika CRISPR, bahan bakar biofuel dari mikroalga, dan pangan sintetis.',
        scores: {
          'bisnis-digital': 0,
          'sains-komunikasi': 1,
          'analitika-logistik': 0,
          'bioteknologi': 4,
          'rekayasa-keselamatan-proses': 1,
        },
      },
      {
        key: 'E',
        text: 'Standar keselamatan reaktor nuklir generasi baru, pencegahan kebocoran kilang hidrogen, dan zero-incident engineering.',
        scores: {
          'bisnis-digital': 0,
          'sains-komunikasi': 0,
          'analitika-logistik': 1,
          'bioteknologi': 1,
          'rekayasa-keselamatan-proses': 4,
        },
      },
    ],
  },
  {
    id: 'q3',
    scenario:
      'Jika kamu diberikan dana hibah riset 1 Miliar Rupiah dan bebas memilih proyek apapun, laboratorium yang ingin kamu dirikan adalah...',
    options: [
      {
        key: 'A',
        text: 'Inkubator Akselerasi Startup & Lab Inovasi Produk Digital berbasis analitika perilaku belanja.',
        scores: {
          'bisnis-digital': 4,
          'sains-komunikasi': 1,
          'analitika-logistik': 1,
          'bioteknologi': 0,
          'rekayasa-keselamatan-proses': 0,
        },
      },
      {
        key: 'B',
        text: 'Lab Analitika Jaringan Sosial & Komputasi Opini Publik untuk literasi sains masyarakat.',
        scores: {
          'bisnis-digital': 1,
          'sains-komunikasi': 4,
          'analitika-logistik': 0,
          'bioteknologi': 1,
          'rekayasa-keselamatan-proses': 0,
        },
      },
      {
        key: 'C',
        text: 'Pusat Simulasi Logistik Terpadu & Algoritma Rantai Pasok Nusantara berdaya jangkau tinggi.',
        scores: {
          'bisnis-digital': 1,
          'sains-komunikasi': 0,
          'analitika-logistik': 4,
          'bioteknologi': 0,
          'rekayasa-keselamatan-proses': 2,
        },
      },
      {
        key: 'D',
        text: 'Bio-Foundry Rekayasa Hayati untuk sintesis enzim pengurai limbah plastik dan vaksin tropis.',
        scores: {
          'bisnis-digital': 0,
          'sains-komunikasi': 1,
          'analitika-logistik': 0,
          'bioteknologi': 4,
          'rekayasa-keselamatan-proses': 1,
        },
      },
      {
        key: 'E',
        text: 'Fasilitas Uji Ledakan & Simulasi Bahaya Proses Termal Bertekanan Ekstrem untuk industri migas.',
        scores: {
          'bisnis-digital': 0,
          'sains-komunikasi': 0,
          'analitika-logistik': 1,
          'bioteknologi': 1,
          'rekayasa-keselamatan-proses': 4,
        },
      },
    ],
  },
  {
    id: 'q4',
    scenario:
      'Dalam lingkungan kerja impianmu di masa depan, peran strategis apa yang paling membuatmu merasa bangga dan berdampak?',
    options: [
      {
        key: 'A',
        text: 'Chief Product Officer yang memimpin peluncuran aplikasi skala jutaan pengguna aktif harian.',
        scores: {
          'bisnis-digital': 4,
          'sains-komunikasi': 1,
          'analitika-logistik': 1,
          'bioteknologi': 0,
          'rekayasa-keselamatan-proses': 0,
        },
      },
      {
        key: 'B',
        text: 'Head of Public Narrative & Policy Advisor yang mengedukasi jutaan warga tentang teknologi baru.',
        scores: {
          'bisnis-digital': 1,
          'sains-komunikasi': 4,
          'analitika-logistik': 0,
          'bioteknologi': 1,
          'rekayasa-keselamatan-proses': 0,
        },
      },
      {
        key: 'C',
        text: 'Supply Chain Operations Director yang menjamin ketersediaan logistik pangan seluruh nusantara tanpa cacat.',
        scores: {
          'bisnis-digital': 1,
          'sains-komunikasi': 0,
          'analitika-logistik': 4,
          'bioteknologi': 0,
          'rekayasa-keselamatan-proses': 2,
        },
      },
      {
        key: 'D',
        text: 'Lead Biotechnology Scientist yang memegang paten inovasi bibit unggul tahan kekeringan global.',
        scores: {
          'bisnis-digital': 0,
          'sains-komunikasi': 1,
          'analitika-logistik': 0,
          'bioteknologi': 4,
          'rekayasa-keselamatan-proses': 1,
        },
      },
      {
        key: 'E',
        text: 'Principal Safety Superintendent yang menjamin keselamatan ribuan nyawa pekerja industri petrokimia berisiko tinggi.',
        scores: {
          'bisnis-digital': 0,
          'sains-komunikasi': 0,
          'analitika-logistik': 2,
          'bioteknologi': 1,
          'rekayasa-keselamatan-proses': 4,
        },
      },
    ],
  },
  {
    id: 'q5',
    scenario:
      'Ketika melihat sebuah sistem yang berjalan berantakan dan tidak efisien di sekitarmu, naluri utamamu adalah...',
    options: [
      {
        key: 'A',
        text: 'Merancang platform aplikasi baru yang mendisrupsi proses manual menjadi serba otomatis dan monetizable.',
        scores: {
          'bisnis-digital': 4,
          'sains-komunikasi': 1,
          'analitika-logistik': 1,
          'bioteknologi': 0,
          'rekayasa-keselamatan-proses': 0,
        },
      },
      {
        key: 'B',
        text: 'Membuat visualisasi data dan materi advokasi publik agar semua pihak sadar dan tergerak untuk berubah.',
        scores: {
          'bisnis-digital': 1,
          'sains-komunikasi': 4,
          'analitika-logistik': 0,
          'bioteknologi': 1,
          'rekayasa-keselamatan-proses': 0,
        },
      },
      {
        key: 'C',
        text: 'Menghitung rute, membuang pemborosan (waste), dan merombak alur pergerakan barang agar presisi detik demi detik.',
        scores: {
          'bisnis-digital': 1,
          'sains-komunikasi': 0,
          'analitika-logistik': 4,
          'bioteknologi': 0,
          'rekayasa-keselamatan-proses': 2,
        },
      },
      {
        key: 'D',
        text: 'Mencari tahu apakah ada organisme hayati atau proses biokimia yang bisa menggantikan bahan kimia beracun penyebab masalah.',
        scores: {
          'bisnis-digital': 0,
          'sains-komunikasi': 1,
          'analitika-logistik': 0,
          'bioteknologi': 4,
          'rekayasa-keselamatan-proses': 1,
        },
      },
      {
        key: 'E',
        text: 'Melakukan audit bahaya menyeluruh (HAZOP) dan memasang sistem interlock pengaman darurat sebelum insiden fatal terjadi.',
        scores: {
          'bisnis-digital': 0,
          'sains-komunikasi': 0,
          'analitika-logistik': 1,
          'bioteknologi': 1,
          'rekayasa-keselamatan-proses': 4,
        },
      },
    ],
  },
];
