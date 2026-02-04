import type { ProgramData } from "~~/shared/types/program";
import { getSampleImages } from "~/utils/lorem";

export const infantProgram: ProgramData = {
  id: "infant-class",
  name: "Infant Class Amanah",
  slug: "infant-class",
  category: "infant",
  tagline: "Program Pendidikan & Perkembangan untuk Bayi Usia 1-2 Tahun",
  description:
    "Program khusus bayi usia 1-2 tahun yang menggabungkan pengasuhan berkualitas dengan stimulasi perkembangan optimal. Fokus pada motorik kasar, motorik halus, bahasa, kognitif, dan sosial-emosional dalam lingkungan yang aman dan mendukung.",
  ageRange: "1-2 tahun",
  heroImage: "",
  heroVideo: "https://github.com/amanaheducentre/fe/raw/refs/heads/main/public/video/teaser.mp4",
  themeColor: "daycare",

  features: [
    {
      icon: "i-heroicons-sparkles",
      title: "Stimulasi Perkembangan Optimal",
      description:
        "Program terstruktur berdasarkan milestone perkembangan usia 1-2 tahun dengan aktivitas edukatif yang menyenangkan.",
    },
    {
      icon: "i-heroicons-user-group",
      title: "Sosialisasi Positif",
      description:
        "Interaksi dengan teman sebaya dalam kelompok kecil untuk mengembangkan keterampilan sosial dan emosional sejak dini.",
    },
    {
      icon: "i-heroicons-heart",
      title: "Pendampingan Penuh Kasih",
      description:
        "Teacher bersertifikat PAUD yang terlatih dalam child development dan menerapkan pendekatan nurturing.",
    },
    {
      icon: "i-heroicons-book-open",
      title: "Aktivitas Berbasis Bermain",
      description:
        "Pembelajaran melalui bermain yang menyenangkan - motor play, sensory exploration, music, dan story telling.",
    },
    {
      icon: "i-heroicons-chart-bar",
      title: "Monitoring Perkembangan",
      description:
        "Laporan berkala tentang perkembangan milestone, foto aktivitas, dan konsultasi dengan orang tua setiap bulan.",
    },
    {
      icon: "i-heroicons-building-library",
      title: "Lingkungan Aman & Supportif",
      description:
        "Fasilitas dirancang khusus untuk bayi usia 1-2 tahun dengan mainan dan peralatan yang age-appropriate dan aman.",
    },
  ],

  benefits: [
    "Perkembangan motorik kasar dan halus yang optimal",
    "Keterampilan komunikasi dan bahasa berkembang lebih baik",
    "Kemampuan kognitif melalui bermain dan eksplorasi",
    "Kepercayaan diri dan kemandirian bertahap",
    "Bonding yang sehat dengan teman sebaya",
    "Orang tua mendapat guidance perkembangan anak",
  ],

  facilities: {
    title: "Fasilitas Infant Class",
    items: [
      "Ruang bermain indoor berstandar internasional dengan material non-toxic",
      "Climbing structure dan soft play equipment untuk motor development",
      "Sensory play stations (water play, sand, textures)",
      "Outdoor play area dengan playground aman",
      "Ruang istirahat nyaman dengan cot/matras berkualitas",
      "Mini kitchen untuk snack/makan siang",
      "Ruang ganti popok yang higienis dengan changing table",
      "Library dengan buku-buku anak bergambar menarik",
      "Musical instruments dan art supplies untuk kreativitas",
      "CCTV 24 jam dengan akses orang tua",
      "First aid kit dan peralatan kesehatan lengkap",
    ],
  },

  dailyActivities: [
    {
      time: "08:00 - 08:30",
      activity: "Penerimaan & Circle Time",
      description: "Sambutan hangat, bernyanyi sambil duduk melingkar, greeting time",
    },
    {
      time: "08:30 - 09:30",
      activity: "Free Play & Exploration",
      description: "Eksplorasi mainan, climbing, sensory play dengan pengawasan",
    },
    {
      time: "09:30 - 10:00",
      activity: "Snack Time",
      description: "Makan camilan sehat, praktek makan sendiri (finger foods)",
    },
    {
      time: "10:00 - 10:45",
      activity: "Structured Activity",
      description: "Music & movement, story time, atau art & craft sederhana",
    },
    {
      time: "10:45 - 11:30",
      activity: "Outdoor Play",
      description: "Bermain di area outdoor, sensory play dengan pasir/air, berjalan-jalan",
    },
    {
      time: "11:30 - 12:00",
      activity: "Lunch & Preparation",
      description: "Makan siang bergizi, bersih-bersih, persiapan tidur",
    },
    {
      time: "12:00 - 14:00",
      activity: "Nap Time",
      description: "Tidur siang berkualitas dengan pengawasan ketat",
    },
    {
      time: "14:00 - 14:30",
      activity: "Wake Up & Snack",
      description: "Bangun tidur pelan, snack sore, freshening up",
    },
    {
      time: "14:30 - 15:30",
      activity: "Play & Learning Activity",
      description: "Bermain edukatif, puzzle sederhana, mainan manipulatif untuk motor halus",
    },
    {
      time: "15:30 - 16:00",
      activity: "Story Time & Wrap Up",
      description: "Bercerita, bernyanyi penutup, persiapan pulang",
    },
    {
      time: "16:00 - 16:30",
      activity: "Pick Up Time",
      description: "Briefing harian ke orang tua, info perkembangan dan aktivitas hari ini",
    },
  ],

  schedule: [
    {
      title: "Full Day Program",
      days: ["Senin - Jumat"],
      time: "08:00 - 16:00",
      description: "Program penuh 5 hari kerja dengan aktivitas terstruktur",
    },
    {
      title: "Morning Program",
      days: ["Senin - Jumat"],
      time: "08:00 - 12:00",
      description: "Program pagi fokus pada aktivitas stimulasi motor dan kognitif",
    },
    {
      title: "Afternoon Program",
      days: ["Senin - Jumat"],
      time: "12:00 - 16:00",
      description: "Program sore dengan istirahat + aktivitas play-based learning",
    },
    {
      title: "Flexible Attendance",
      days: ["Custom"],
      time: "Sesuai kebutuhan",
      description: "Opsi 2-4 hari per minggu untuk kebutuhan khusus",
    },
  ],

  caregiverInfo: {
    ratio: "1:4-5 (1 teacher untuk 4-5 bayi)",
    qualifications: [
      "Diploma/Sarjana PAUD atau Child Development",
      "Bersertifikat Infant Development & Care",
      "Pengalaman minimal 2 tahun mengajar infant/toddler",
      "Terlatih pertolongan pertama bayi (Infant CPR & First Aid)",
      "Memahami child psychology dan developmental milestones",
      "Background check dan medical checkup lengkap",
      "Pelatihan berkelanjutan setiap 3 bulan",
    ],
    description:
      "Tim teacher kami adalah profesional bersertifikat PAUD yang passionate dalam perkembangan anak usia dini. Mereka memahami karakteristik bayi 1-2 tahun, menerapkan pendekatan yang responsive dan nurturing, serta komunikatif dengan orang tua.",
  },

  pricing: [
    {
      name: "Harian",
      price: "Rp 200.000",
      period: "per hari",
      features: [
        "Full day program (08:00-16:00)",
        "2x snack + lunch bergizi",
        "Popok & toiletries",
        "Aktivitas terstruktur & free play",
        "Daily report & foto",
      ],
    },
    {
      name: "Paket 3 Hari",
      price: "Rp 550.000",
      period: "per minggu",
      features: [
        "Program 3 hari (pilih hari)",
        "2x snack + lunch",
        "Popok & toiletries premium",
        "Aktivitas terstruktur & monitoring perkembangan",
        "Daily report + foto & video",
        "Live CCTV access",
      ],
    },
    {
      name: "Paket 5 Hari",
      price: "Rp 850.000",
      period: "per minggu",
      features: [
        "Full week program (Senin-Jumat)",
        "2x snack + lunch bergizi",
        "Popok & toiletries lengkap",
        "Aktivitas terstruktur setiap hari",
        "Daily report + weekly progress report",
        "Live CCTV 24/7 access",
        "Konsultasi perkembangan bulanan",
        "Free developmental assessment",
      ],
      recommended: true,
    },
    {
      name: "Paket Bulanan",
      price: "Rp 3.200.000",
      period: "per bulan",
      features: [
        "Full month program (20 hari kerja)",
        "2x snack + lunch premium",
        "Semua supplies & toiletries lengkap",
        "Aktivitas terstruktur & enrichment classes",
        "Daily + weekly reports + 2x monthly consultation",
        "Live CCTV access 24/7",
        "Free developmental assessment & planning",
        "Exclusive parent workshops (2x/bulan)",
        "Birthday party space free",
        "Free merchandise",
      ],
    },
  ],

  gallery: [
    [...getSampleImages(1920, 1080, 4)],
    [...getSampleImages(1920, 1080, 4)],
    [...getSampleImages(1920, 1080, 4)],
    [...getSampleImages(1920, 1080, 4)],
    [...getSampleImages(1920, 1080, 4)],
    [...getSampleImages(1920, 1080, 4)],
    [...getSampleImages(1920, 1080, 4)],
    [...getSampleImages(1920, 1080, 4)],
  ],

  faqs: [
    {
      question: "Apa perbedaan Infant Class dengan Daycare?",
      answer:
        "Infant Class lebih fokus pada stimulasi perkembangan dan pembelajaran melalui bermain dengan kurikulum terstruktur, sementara Daycare lebih fokus pada penitipan dan basic care. Infant Class memiliki aktivitas yang lebih terencana untuk mendukung milestone perkembangan.",
    },
    {
      question: "Berapa usia ideal untuk Infant Class?",
      answer:
        "Program Infant Class dirancang untuk bayi usia 1-2 tahun. Pada usia ini, bayi sudah mulai berjalan, berbicara, dan siap untuk interaksi sosial yang lebih kompleks dengan aktivitas pembelajaran yang lebih terstruktur.",
    },
    {
      question: "Apakah ada transisi dari Daycare ke Infant Class?",
      answer:
        "Ya, jika anak sudah pernah di Daycare kami, transisi ke Infant Class sangat smooth karena mereka sudah mengenal lingkungan dan caregiver. Kami memiliki proses adaptasi khusus untuk memastikan anak siap dengan perubahan aktivitas.",
    },
    {
      question: "Bagaimana kurukulum atau aktivitas pembelajaran?",
      answer:
        "Kurikulum Infant Class berbasis play-based learning dengan fokus pada: motor development (climbing, running), fine motor (puzzle, drawing), bahasa (story time, singing), dan social-emotional skills. Semua aktivitas dirancang sesuai milestone usia 1-2 tahun.",
    },
    {
      question: "Apakah orang tua bisa mengamati kegiatan anak?",
      answer:
        "Ya, orang tua bisa mengamati melalui live CCTV (untuk paket mingguan & bulanan). Kami juga mengundang orang tua untuk kegiatan khusus seperti parent-child activities dan workshops setiap bulan.",
    },
    {
      question: "Bagaimana cara monitoring perkembangan anak?",
      answer:
        "Kami memberikan laporan harian, weekly progress report untuk paket mingguan/bulanan. Ada juga konsultasi perkembangan bulanan dengan teacher untuk diskusi milestone dan tips parenting dari kami.",
    },
    {
      question: "Apakah ada program pengenalan guru sebelum dimulai?",
      answer:
        "Ya, kami memberikan 1-2 hari orientasi gratis untuk anak dan orang tua mengenal teacher dan lingkungan. Ada juga trial day (3 jam) seharga Rp 150.000 untuk evaluasi kesiapan dan adaptasi anak.",
    },
    {
      question: "Bagaimana jika anak tidak mau ditinggal di sekolah?",
      answer:
        "Ini normal pada fase adaptasi. Kami memiliki strategi adaptasi yang terbukti efektif: gradual separation, kehadiran orang tua pada hari pertama, routine yang konsisten, dan komunikasi positif. Teacher kami terlatih untuk menangani separation anxiety.",
    },
  ],

  testimonials: [
    {
      name: "Ibu Reza Paramita",
      role: "Ibu dari Remi (1 tahun 8 bulan)",
      rating: 5,
      comment:
        "Remi langsung betah di Infant Class. Teacher-nya sabar dan perhatian. Perkembangan Remi jadi lebih pesat, sekarang sudah bisa bicara 30+ kata dan lebih percaya diri. Laporan hariannya detail banget!",
    },
    {
      name: "Ibu Maya Santoso",
      role: "Ibu dari Aiden (1 tahun 6 bulan)",
      rating: 5,
      comment:
        "Yang saya appreciate adalah curriculum-nya terstruktur dan fokus pada perkembangan. Aiden jadi lebih aktif, lebih banyak bicara, dan senang sekali bermain dengan teman-teman. Mother-teacher conference setiap bulan sangat membantu saya sebagai orang tua.",
    },
    {
      name: "Ibu Siti Nur Azizah",
      role: "Ibu dari twins Zara & Zain (1 tahun 4 bulan)",
      rating: 5,
      comment:
        "Sebagai ibu dengan anak kembar, saya sangat terbantu. Teacher-nya tahu gimana handle bayi 1-2 tahun. Laporan perkembangan mereka sangat detailed. Twins saya jadi lebih sosial dan senang sekolah!",
    },
  ],

  whatsapp: {
    number: "6281234567890",
    message:
      "Halo Admin Amanah Edu Centre, saya tertarik mendaftarkan anak saya ke program Infant Class. Mohon info lebih lanjut.",
  },

  // SEO
  metaTitle: "Infant Class Amanah - Program Perkembangan Bayi 1-2 Tahun",
  metaDescription:
    "Infant Class untuk bayi 1-2 tahun dengan stimulasi perkembangan optimal, teacher bersertifikat PAUD, aktivitas terstruktur, dan monitoring perkembangan rutin. Daftar sekarang!",
  ogImage: "/img/programs/infant/og-image.jpg",
  keywords: [
    "infant class",
    "program bayi 1-2 tahun",
    "perkembangan bayi",
    "PAUD",
    "preschool 1-2 tahun",
    "stimulasi anak",
    "bayi intelligent class",
    "baby development program",
    "playgroup 1-2 tahun",
    "toddler program",
    "amanah edu centre",
  ],
};
