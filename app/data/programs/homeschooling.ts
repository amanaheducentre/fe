import type { ProgramData } from "~~/shared/types/program";
import { getSampleImages } from "~/utils/lorem";

export const homeschoolingProgram: ProgramData = {
  id: "homeschooling",
  name: "PKBM Nararya (Nararya Homeschooling)",
  slug: "homeschooling",
  category: "homeschooling",
  tagline: "Freedom to Flourish",
  description:
    "Program homeschooling setara SD-SMP-SMA (usia 7-18 tahun) dengan kurikulum montessori, pembelajaran personalized, mentoring intensif, dan ijazah resmi. Diperuntukkan untuk anak-anak yang mempunyai kesulitan belajar.",
  ageRange: "7-18 tahun",
  heroImage: "",
  heroVideo: "https://github.com/amanaheducentre/fe/raw/refs/heads/main/public/video/teaser.mp4",
  themeColor: "hs",

  features: [
    {
      icon: "i-heroicons-clock",
      title: "Flexible Schedule",
      description:
        "Jadwal belajar fleksibel sesuai kebutuhan keluarga dan pace anak. Ideal untuk atlet, artis cilik, atau traveler.",
    },
    {
      icon: "i-heroicons-user",
      title: "Personalized Learning",
      description: "Metode pembelajaran disesuaikan dengan gaya belajar, minat, dan potensi unik setiap anak.",
    },
    {
      icon: "i-heroicons-academic-cap",
      title: "Dual Curriculum",
      description: "Pilihan kurikulum nasional (Cambridge/IB optional) dengan ijazah resmi setara sekolah formal.",
    },
    {
      icon: "i-heroicons-users",
      title: "Mentoring Intensif",
      description: "Mentor berpengalaman memberikan guidance akademik, character building, dan goal setting personal.",
    },
    {
      icon: "i-heroicons-globe-alt",
      title: "Project-Based Learning",
      description: "Pembelajaran berbasis proyek, real-world application, dan pengembangan 21st century skills.",
    },
    {
      icon: "i-heroicons-building-library",
      title: "Socialization Program",
      description: "Kegiatan sosial rutin, club activities, dan field trip untuk membangun networking dan soft skills.",
    },
  ],

  benefits: [
    "Jadwal belajar fleksibel",
    "Pembelajaran sesuai kebutuhan dan bakat minat anak",
    "Ijazah resmi setara sekolah formal",
    "Mentor personal untuk guidance",
    "Pengembangan talenta & minat",
    "Lingkungan belajar yang ramah inklusi",
  ],

  facilities: {
    title: "Fasilitas & Support System",
    items: [
      "Ruangan ber-AC",
      "Kelas One-on-One",
      "Ruangan aman dan nyaman untuk belajar",
      "Perpustakaan",
      "Material montessori yang lengkap",
      "Tenaga pengajar yang ber-dedikasi tinggi",
      "Pembinaan bakat dan minat sesuai dengan kebutuhan anak",
      "Group wali murid daily report",
    ],
  },

  dailyActivities: [
    {
      time: "Flexible",
      activity: "Self-Paced Learning",
      description: "Anak belajar mandiri dengan modul & video pembelajaran sesuai jadwal pribadi",
    },
    {
      time: "Harian",
      activity: "Extrakurikuler",
      description: "Dance, Archery, Swimming, Coding and Robotic, Cooking, Gardening, and Photography",
    },
    {
      time: "1x per minggu",
      activity: "Pembelajaran Agama",
      description: "",
    },
    {
      time: "Monthly",
      activity: "Project Showcase",
      description: "Ujian bulanan untuk evaluasi pemahaman dan progress akademik",
    },
    {
      time: "Quarterly",
      activity: "Rapotan",
      description: "Presentasi project dan portfolio kepada parents & peers",
    },
  ],

  schedule: [
    {
      title: "Full Homeschooling",
      days: ["Senin - Jumat"],
      time: "Jam 08:00 - 14:00",
      description: "Program penuh dengan all subjects sesuai kurikulum montessori",
    },
    {
      title: "Online Class Program",
      days: ["Flexibel"],
      time: "3 hari",
      description: "Kombinasi self-paced learning di rumah dan structured class di learning hub",
    },
  ],

  caregiverInfo: {
    ratio: "2:15 untuk face-to-face, 1:1 untuk mentoring (NDD)",
    qualifications: [
      "",
      "Sarjana/Master sesuai bidang mata pelajaran",
      "Fasih bahasa Inggris",
      "Terlatih differentiated instruction",
      "Mentor: profesional/akademisi berpengalaman",
    ],
    description:
      "Tim educator dan mentor kami adalah profesional berpengalaman yang passionate dalam pendidikan alternatif. Mereka memahami bahwa setiap anak unik dan membutuhkan pendekatan yang berbeda untuk berkembang optimal.",
  },

  pricing: [
    {
      name: "SD (Kelas 1-6)",
      price: "Rp 6.500.000",
      period: "per bulan",
      features: [
        "All subjects kurikulum nasional dan Australian montessori",
        "5x face-to-face per minggu",
        "Program extrakurikuler",
        "Ibadah sesuai agama",
        "Assesment per-1/3/6 bulan",
        "Aman dan nyaman untuk anak inklusi",
        "Modul & learning materials",
        "Online platform access",
        "Progress report semester",
        "Ijazah resmi setara SD",
      ],
    },
    {
      name: "SMP (Kelas 7-9)",
      price: "Rp 7.500.000",
      period: "per bulan",
      features: [
        "All subjects kurikulum nasional",
        "2x face-to-face per minggu",
        "1x mentoring per minggu",
        "Modul & learning materials",
        "Online platform access",
        "Lab sessions untuk science",
        "Monthly assessment",
        "Progress report semester",
        "Ijazah resmi setara SMP",
      ],
    },
    {
      name: "SMA (Kelas 10-12)",
      price: "Rp 8.500.000",
      period: "per bulan",
      features: [
        "All subjects kurikulum nasional + peminatan",
        "2x face-to-face per minggu",
        "1x mentoring per minggu",
        "Advanced learning materials",
        "Online platform access",
        "University preparation",
        "Career counseling",
        "Monthly assessment",
        "Progress report semester",
        "Ijazah resmi setara SMA",
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
      question: "Apakah ijazah homeschooling diakui?",
      answer:
        "Ijazah homeschooling kami setara dengan ijazah sekolah formal dan diakui oleh Kemendikbud. Lulusan dapat melanjutkan ke jenjang berikutnya atau perguruan tinggi baik dalam maupun luar negeri. Kami terdaftar resmi sebagai PKBM (Pusat Kegiatan Belajar Masyarakat).",
    },
    {
      question: "Berapa lama waktu belajar per hari?",
      answer:
        "Fleksibel tergantung kebutuhan anak. Rata-rata SD: 3-4 jam/hari, SMP: 4-5 jam/hari, SMA: 5-6 jam/hari. Anak dapat belajar kapan saja dengan modul online. Face-to-face session 2x per minggu masing-masing 3 jam.",
    },
    {
      question: "Bagaimana dengan sosialisasi anak?",
      answer:
        "Kami sangat aware tentang pentingnya socialization. Ada club activities (robotics, art, music, sports), field trip bulanan, community service, dan project collaboration dengan homeschooler lain. Socialization di homeschooling justru lebih beragam (lintas usia, background).",
    },
    {
      question: "Apakah orang tua harus mengajar?",
      answer:
        "Tidak harus. Kami provide complete learning materials, video lessons, dan educator untuk face-to-face session. Peran orang tua lebih ke facilitator: memastikan anak belajar sesuai jadwal dan support secara emosional. Kami juga provide parent training.",
    },
    {
      question: "Bagaimana sistem ujian dan penilaian?",
      answer:
        "Ada ujian bulanan untuk progress check, ujian semester, dan ujian akhir tahun. Untuk kelas 6, 9, dan 12 mengikuti ujian setara dari PKBM yang terakreditasi. Penilaian gabungan: ujian, project, portfolio, dan attitude assessment.",
    },
    {
      question: "Bisakah anak homeschooling ikut olimpiade/kompetisi?",
      answer:
        "Bisa! Anak homeschooling berhak mengikuti olimpiade sains, matematika, atau kompetisi lain atas nama PKBM kami. Kami juga encourage dan support anak untuk mengikuti kompetisi sesuai minat mereka.",
    },
    {
      question: "Apakah ada program persiapan PTN?",
      answer:
        "Ya, untuk siswa SMA kami punya program intensive preparation untuk UTBK-SNBT, SIMAK UI, dan ujian masuk PTN lain. Ada juga guidance untuk university abroad (SAT prep, essay writing, application process).",
    },
    {
      question: "Bagaimana jika anak ingin kembali ke sekolah formal?",
      answer:
        "Bisa kapan saja. Ijazah dan rapor kami diakui sehingga anak dapat pindah ke sekolah formal. Kami bantu proses administrasi dan ensure anak ready secara akademik untuk transisi ke sekolah reguler.",
    },
  ],

  testimonials: [
    {
      name: "Ibu Dian Puspita",
      role: "Ibu dari Rafi (SMP kelas 8)",
      rating: 5,
      comment:
        "Rafi adalah atlet renang yang sering latihan dan lomba. Homeschooling Amanah sangat membantu karena jadwalnya fleksibel. Rafi tetap bisa berprestasi di akademik dan renang. Mentornya supportive dan memahami kebutuhan Rafi.",
    },
    {
      name: "Bapak Irfan Hakim",
      role: "Ayah dari Aliya (SD kelas 5)",
      rating: 5,
      comment:
        "Aliya memilih homeschooling karena gaya belajarnya berbeda dari teman-temannya. Di homeschooling, dia bisa belajar dengan pace-nya sendiri dan lebih mendalam di subject yang dia suka. Sekarang Aliya lebih happy dan confident!",
    },
    {
      name: "Ibu Nina Karlina",
      role: "Ibu dari Zidan (SMA kelas 11)",
      rating: 5,
      comment:
        "Zidan pindah ke homeschooling karena kami sering travel sebagai digital nomad family. Homeschooling Amanah perfect karena online platform-nya bagus dan mentor always available. Zidan tetap on track untuk kuliah dan enjoy learning!",
    },
  ],

  whatsapp: {
    number: "6281234567890",
    message:
      "Halo Admin Amanah Edu Centre, saya tertarik konsultasi dan mendaftarkan anak saya ke program Homeschooling. Mohon info lebih lanjut.",
  },

  // SEO
  metaTitle: "Homeschooling SD-SMP-SMA Berijazah Resmi | Amanah Edu Centre",
  metaDescription:
    "Homeschooling setara SD-SMP-SMA dengan ijazah resmi, pembelajaran fleksibel & personalized, mentor berpengalaman. Ideal untuk atlet, traveler, atau anak dengan passion khusus. Konsultasi gratis!",
  ogImage: "/img/programs/homeschooling/og-image.jpg",
  keywords: [
    "homeschooling jakarta",
    "homeschooling berijazah",
    "sekolah rumah",
    "homeschool SD",
    "homeschool SMP",
    "homeschool SMA",
    "pendidikan alternatif",
    "PKBM",
    "homeschooling terbaik",
    "flexible learning",
    "amanah edu centre",
  ],
};
