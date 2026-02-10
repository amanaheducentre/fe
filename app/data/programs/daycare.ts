import type { ProgramData } from "~~/shared/types/program";
import { getSampleImages } from "~/utils/lorem";

export const daycareProgram: ProgramData = {
  id: "daycare",
  name: "TPA Amanah Daycare",
  slug: "daycare",
  category: "daycare",
  tagline: "Penitipan Anak Terpercaya dengan Kasih Sayang & Profesional",
  description:
    "Program penitipan anak usia 0-3 tahun dengan pengasuhan penuh kasih, aman, dan bertanggung jawab. Dirancang untuk mendukung tumbuh kembang anak secara optimal melalui lingkungan yang nyaman, terstruktur, dan mendukung kebutuhan perkembangan anak usia dini.",
  ageRange: "0-3 Tahun",

  heroImage: "",
  heroVideo: "https://github.com/amanaheducentre/fe/raw/refs/heads/main/public/video/teaser.mp4",
  themeColor: "daycare",

  features: [
    {
      icon: "i-heroicons-heart",
      title: "Pengasuhan Responsif & Penuh Perhatian",
      description:
        "Anak didampingi caregiver terlatih dengan rasio ideal 1:4, sehingga setiap anak mendapatkan perhatian personal sesuai kebutuhan tumbuh kembangnya.",
    },
    {
      icon: "i-heroicons-shield-check",
      title: "Lingkungan Bersih, Aman, dan Nyaman",
      description:
        "Area penitipan dirancang higienis, ramah anak, dan memenuhi standar keamanan dengan penerapan kebersihan harian secara konsisten.",
    },
    {
      icon: "i-heroicons-academic-cap",
      title: "Pendampingan Sesuai Tahap Perkembangan",
      description:
        "Kegiatan harian disesuaikan dengan usia dan tahap perkembangan anak untuk mendukung aspek motorik, bahasa, sosial, dan emosional.",
    },
    {
      icon: "i-heroicons-sparkles",
      title: "Stimulasi Dini Terarah",
      description:
        "Anak mendapatkan stimulasi melalui aktivitas bermain terstruktur dan eksploratif untuk mengoptimalkan potensi sejak dini.",
    },
    {
      icon: "i-heroicons-clock",
      title: "Rutinitas Harian Teratur",
      description:
        "Jadwal makan, tidur, dan bermain disusun secara konsisten guna membangun rasa aman dan kebiasaan positif pada anak.",
    },
    {
      icon: "i-heroicons-sun",
      title: "Pendekatan Lembut & Positif",
      description:
        "Pengasuhan dilakukan dengan pendekatan penuh empati dan tanpa paksaan, sehingga anak merasa aman, dihargai, dan nyaman.",
    },
  ],

  benefits: [
    "Orang tua merasa tenang, anak merasa aman dan nyaman",
    "Mendukung tumbuh kembang anak secara menyeluruh",
    "Membantu anak belajar bersosialisasi sejak usia dini",
  ],

  facilities: {
    title: "Fasilitas",
    items: [
      "Guru dan pengasuh berpengalaman serta bersertifikat pengasuhan anak usia dini",
      "Skrining tumbuh kembang anak secara berkala sesuai usia",
      "Rasio pengasuh dan anak ideal untuk perhatian maksimal",
      "Ruang tidur ber-AC dengan kasur & bantal khusus bayi",
      "Area bermain indoor yang aman, bersih, dan sesuai usia",
      "Mainan edukatif dan alat permainan Montessori untuk stimulasi optimal",
    ],
  },

  dailyActivities: [
    { time: "06:30 - 07:00", activity: "Penerimaan kedatangan anak" },
    { time: "07:00 - 08:20", activity: "Sarapan pagi" },
    { time: "08:20 - 08:30", activity: "Persiapan masuk kelas" },
    { time: "08:30 - 10:00", activity: "Kegiatan stimulasi & pembelajaran pagi" },
    { time: "10:00 - 10:10", activity: "Snack Time pagi" },
    { time: "10:10 - 10:40", activity: "Toilet training / ganti pampers" },
    { time: "10:40 - 12:00", activity: "Tidur siang" },
    { time: "12:00 - 13:00", activity: "Makan siang" },
    { time: "13:00 - 14:30", activity: "Kegiatan mandi & stimulasi siang" },
    { time: "14:30 - 15:00", activity: "Snack Time siang" },
    { time: "15:00 - 16:00", activity: "Tidur / istirahat sore" },
    { time: "16:00 - 17:00", activity: "Bermain bebas & menunggu penjemputan" },
  ],

  schedule: [
    {
      title: "Half Day Care (Pagi)",
      days: ["Senin - Jumat"],
      time: "06:30 - 12:00",
      description: "Program pengasuhan setengah hari sesi pagi",
    },
    {
      title: "Morning-Early Afternoon Care",
      days: ["Senin - Jumat"],
      time: "06:30 - 14:00",
      description: "Program pengasuhan pagi hingga siang",
    },
    {
      title: "Full Day Care",
      days: ["Senin - Jumat"],
      time: "06:30 - 17:00",
      description: "Program pengasuhan dan pembelajaran penuh",
    },
    {
      title: "Extended Day Care",
      days: ["Senin - Jumat"],
      time: "06:30 - 19:30",
      description: "Program pengasuhan dengan jam layanan panjang",
    },
  ],

  caregiverInfo: {
    ratio: "1:4 (1 pendamping untuk 4 anak)",
    qualifications: [
      "Pendamping bersertifikasi pengasuhan bayi dan balita",
      "Guru bersertifikasi pelatihan Montessori Baby usia 0-3 tahun",
      "Berpengalaman mendampingi anak usia dini",
      "Memahami tahapan tumbuh kembang bayi dan balita",
      "Telaten, sabar, dan penuh kasih",
      "Mampu menyampaikan perkembangan anak kepada orang tua secara jelas",
    ],
    description:
      "Pendamping kami berpengalaman, telaten, dan memahami tahapan tumbuh kembang bayi & balita. Setiap pendamping menjalani pelatihan berkala untuk menjaga kualitas pengasuhan dan komunikasi perkembangan anak kepada orang tua.",
  },

  pricing: [
    {
      name: "Bulanan (06.30 - 12.00)",
      price: "Rp 649.900",
      period: "per bulan",
      features: [
        "Pengasuhan & stimulasi sesuai usia",
        "2x makan + 1x snack + 1x buah",
        "Laporan harian aktivitas anak",
        "Belum termasuk biaya catering Rp 300.000/bulan",
      ],
    },
    {
      name: "Bulanan (06.30 - 14.00)",
      price: "Rp 859.900",
      period: "per bulan",
      features: [
        "Pengasuhan & pembelajaran terstruktur",
        "2x makan + 1x snack + 1x buah",
        "Laporan harian aktivitas anak",
        "Belum termasuk biaya catering Rp 300.000/bulan",
      ],
      recommended: true,
    },
    {
      name: "Full Day Care (06.30 - 17.00)",
      price: "Rp 1.199.900",
      period: "per bulan",
      features: [
        "Pengasuhan, stimulasi & pembelajaran",
        "2x makan + 1x snack + 1x buah",
        "Laporan harian + dokumentasi foto",
        "Belum termasuk biaya catering Rp 300.000/bulan",
      ],
    },
    {
      name: "Extended Day Care (06.30 - 19.30)",
      price: "Rp 1.499.900",
      period: "per bulan",
      features: [
        "Program pengasuhan jam panjang",
        "2x makan + 1x snack + 1x buah",
        "Laporan harian + dokumentasi foto",
        "Belum termasuk biaya catering Rp 300.000/bulan",
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
      question: "Berapa usia minimal anak yang bisa dititipkan?",
      answer: "Kami menerima anak mulai dari usia 0 bulan.",
    },
    {
      question: "Apakah orang tua perlu menyediakan makanan sendiri?",
      answer:
        "Orang tua boleh membawa makanan dari rumah. Jika tidak, daycare menyediakan catering bergizi sesuai usia anak.",
    },
    {
      question: "Apa saja yang didapat dari catering daycare?",
      answer: "Anak mendapatkan 2x makan utama, 1x snack, dan 1x buah setiap hari sesuai kebutuhan gizi anak.",
    },
    {
      question: "Bagaimana jika anak sakit saat dititipkan?",
      answer:
        "Jika anak menunjukkan gejala sakit, kami akan segera menghubungi orang tua dan memberikan pertolongan awal sambil menunggu penjemputan.",
    },
  ],

  testimonials: [
    {
      name: "Orang Tua Anak",
      role: "Wali murid",
      rating: 5,
      comment:
        "Daycare-nya bersih, aman, dan pendampingnya sangat perhatian. Anak saya cepat beradaptasi dan terlihat nyaman.",
    },
    {
      name: "Orang Tua Anak",
      role: "Wali murid",
      rating: 5,
      comment:
        "Jadwalnya teratur dan komunikasinya bagus. Saya jadi lebih tenang saat bekerja karena anak ditangani dengan profesional.",
    },
  ],

  whatsapp: {
    number: "628xxxxxxxxxx",
    message:
      "Halo Admin Amanah Edu Centre, saya tertarik mendaftarkan anak saya ke program TPA Amanah Daycare. Mohon info lebih lanjut.",
  },

  metaTitle: "TPA Amanah Daycare — Penitipan Anak 0-3 Tahun | Amanah Edu Centre",
  metaDescription:
    "TPA Amanah Daycare melayani penitipan anak usia 0-3 tahun dengan pengasuhan penuh kasih, lingkungan aman & bersih, aktivitas terstruktur, serta pendamping bersertifikasi. Tersedia paket Half Day, Full Day, dan Extended.",
  ogImage: "/img/programs/daycare/og-image.jpg",
  keywords: [
    "daycare",
    "TPA",
    "penitipan anak",
    "penitipan bayi",
    "daycare 0-3 tahun",
    "daycare aman dan bersih",
    "pengasuhan bayi balita",
    "montessori baby",
    "amanah daycare",
    "amanah edu centre",
  ],
};
