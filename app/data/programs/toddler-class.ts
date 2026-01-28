import type { ProgramData } from "~~/shared/types/program";
import { getSampleImages } from "~/utils/lorem";

export const toddlerProgram: ProgramData = {
  id: "toddler-class",
  name: "Toddler Class",
  slug: "toddler-class",
  category: "toddler",
  tagline: "Masa Emas Eksplorasi & Kemandirian",
  description:
    "Program pembelajaran untuk anak usia 2-3 tahun yang fokus pada pengembangan kemandirian, motorik kasar & halus, bahasa, dan sosialisasi melalui bermain yang terstruktur dan menyenangkan.",
  ageRange: "2-3 tahun",
  heroImage: "",
  heroVideo: "https://github.com/amanaheducentre/fe/raw/refs/heads/main/public/video/teaser.mp4",
  themeColor: "kb",

  features: [
    {
      icon: "i-heroicons-rocket-launch",
      title: "Eksplorasi Aktif",
      description: "Mendorong anak untuk berani mengeksplorasi lingkungan dengan rasa ingin tahu yang tinggi.",
    },
    {
      icon: "i-heroicons-user-group",
      title: "Sosialisasi Sehat",
      description: "Belajar berbagi, bermain bersama, dan membangun interaksi sosial dengan teman sebaya.",
    },
    {
      icon: "i-heroicons-hand-raised",
      title: "Kemandirian Bertahap",
      description: "Melatih toilet training, makan sendiri, dan kebiasaan baik lainnya sesuai tahapan usia.",
    },
    {
      icon: "i-heroicons-puzzle-piece",
      title: "Motorik & Sensorik",
      description: "Pengembangan motorik kasar dan halus melalui bermain, seni, dan aktivitas fisik.",
    },
    {
      icon: "i-heroicons-chat-bubble-left-right",
      title: "Stimulasi Bahasa",
      description: "Meningkatkan kemampuan berbicara, kosakata, dan komunikasi dua arah yang efektif.",
    },
    {
      icon: "i-heroicons-sparkles",
      title: "Kreativitas & Imaginasi",
      description: "Mendorong kreativitas melalui art, music, story telling, dan pretend play.",
    },
  ],

  benefits: [
    "Perkembangan motorik optimal",
    "Kemandirian meningkat",
    "Kemampuan sosial-emosional berkembang",
    "Kosakata dan komunikasi bertambah",
    "Kepercayaan diri tumbuh",
    "Siap masuk preschool",
  ],

  facilities: {
    title: "Fasilitas & Perlengkapan",
    items: [
      "Ruang kelas ber-AC dengan furnitur ramah anak",
      "Playground indoor & outdoor yang aman",
      "Alat permainan edukatif sesuai usia",
      "Perpustakaan mini dengan buku bergambar",
      "Area seni & craft dengan material lengkap",
      "Toilet training station",
      "Ruang tidur siang yang nyaman",
      "CCTV dengan akses orang tua",
    ],
  },

  dailyActivities: [
    {
      time: "07:30 - 08:00",
      activity: "Morning Arrival & Free Play",
      description: "Penyambutan, free play sambil menunggu teman-teman",
    },
    {
      time: "08:00 - 08:30",
      activity: "Circle Time & Greeting",
      description: "Bernyanyi, doa pagi, sharing mood, dan intro tema hari ini",
    },
    {
      time: "08:30 - 09:00",
      activity: "Snack Time & Toilet Training",
      description: "Makan camilan sehat, cuci tangan, toilet training",
    },
    {
      time: "09:00 - 10:00",
      activity: "Learning Activity",
      description: "Aktivitas pembelajaran tematik (seni, sains sederhana, musik)",
    },
    {
      time: "10:00 - 10:45",
      activity: "Outdoor/Indoor Play",
      description: "Bermain aktif, eksplorasi, gross motor activities",
    },
    {
      time: "10:45 - 11:30",
      activity: "Lunch Time",
      description: "Makan siang bersama, belajar makan sendiri",
    },
    {
      time: "11:30 - 13:00",
      activity: "Nap Time",
      description: "Tidur siang dengan musik lembut",
    },
    {
      time: "13:00 - 13:30",
      activity: "Wake Up & Afternoon Snack",
      description: "Bangun tidur, snack sore, toilet break",
    },
    {
      time: "13:30 - 14:30",
      activity: "Story Time & Creative Play",
      description: "Membaca cerita, bermain imajinatif, sensory play",
    },
    {
      time: "14:30 - 15:00",
      activity: "Wrap Up & Pick Up",
      description: "Membereskan mainan, review hari ini, pulang",
    },
  ],

  schedule: [
    {
      title: "Full Day Program",
      days: ["Senin - Jumat"],
      time: "07:30 - 15:00",
      description: "Program penuh dengan tidur siang",
    },
    {
      title: "Half Day Program",
      days: ["Senin - Jumat"],
      time: "07:30 - 11:30",
      description: "Program setengah hari tanpa tidur siang",
    },
    {
      title: "Saturday Playdate",
      days: ["Sabtu"],
      time: "08:00 - 11:00",
      description: "Playdate & workshop khusus (optional)",
    },
  ],

  caregiverInfo: {
    ratio: "1:5 (1 teacher untuk 5 anak)",
    qualifications: [
      "Sarjana Pendidikan Anak Usia Dini (PAUD)",
      "Sertifikat early childhood education",
      "Pengalaman mengajar minimal 2 tahun",
      "Terlatih child first aid",
      "Sabar, kreatif, dan energik",
    ],
    description:
      "Tim pengajar kami adalah profesional berpendidikan PAUD yang memahami tahapan perkembangan toddler. Mereka menciptakan lingkungan belajar yang fun, supportive, dan menstimulasi perkembangan optimal setiap anak.",
  },

  pricing: [
    {
      name: "Full Day",
      price: "Rp 2.800.000",
      period: "per bulan",
      features: [
        "Senin - Jumat (07:30-15:00)",
        "2x makan + 2x snack",
        "Learning materials",
        "Field trip bulanan",
        "Progress report",
        "CCTV access",
      ],
      recommended: true,
    },
    {
      name: "Half Day",
      price: "Rp 2.200.000",
      period: "per bulan",
      features: ["Senin - Jumat (07:30-11:30)", "1x snack", "Learning materials", "Progress report", "CCTV access"],
    },
    {
      name: "Registration Fee",
      price: "Rp 1.500.000",
      period: "sekali bayar",
      features: [
        "Administrasi & assessment",
        "Seragam (2 stel)",
        "Tas sekolah",
        "Alat makan & minum",
        "Starter learning kit",
      ],
    },
  ],

  gallery: [...getSampleImages(1920, 1080, 8)],

  faqs: [
    {
      question: "Apakah anak harus sudah bisa toilet training?",
      answer:
        "Tidak harus sudah mahir. Kami akan membantu proses toilet training anak dengan gentle approach dan konsisten dengan metode di rumah. Namun, anak minimal sudah menunjukkan kesiapan untuk belajar.",
    },
    {
      question: "Bagaimana jika anak belum bisa berbicara lancar?",
      answer:
        "Tidak masalah. Di usia 2-3 tahun, kemampuan berbicara anak sangat bervariasi. Program kami dirancang untuk menstimulasi perkembangan bahasa melalui interaksi, bernyanyi, dan bercerita.",
    },
    {
      question: "Apakah ada trial class?",
      answer:
        "Ya, kami menyediakan trial class 1 hari (3 jam) seharga Rp 200.000. Ini membantu anak dan orang tua mengenal lingkungan sekolah sebelum mendaftar.",
    },
    {
      question: "Berapa lama masa adaptasi anak?",
      answer:
        "Masa adaptasi berbeda-beda untuk setiap anak, biasanya 1-2 minggu. Kami menerapkan gentle separation dengan komunikasi intensif ke orang tua. Orang tua boleh mendampingi di hari pertama.",
    },
    {
      question: "Apakah orang tua harus menyiapkan bekal?",
      answer:
        "Tidak perlu. Kami menyediakan makanan bergizi seimbang yang disiapkan oleh katering terpercaya. Jika anak memiliki alergi atau pantangan, silakan informasikan agar kami dapat menyesuaikan menu.",
    },
    {
      question: "Apa perbedaan dengan Infant Class?",
      answer:
        "Toddler Class lebih terstruktur dengan fokus pada kemandirian, sosialisasi, dan pembelajaran tematik. Infant Class lebih pada pengasuhan individual dan stimulasi dasar. Toddler sudah mulai belajar dalam kelompok.",
    },
    {
      question: "Bagaimana sistem pembelajaran tematik?",
      answer:
        "Kami menggunakan tema mingguan/bulanan (misalnya: hewan, warna, profesi) yang diintegrasikan dalam semua aktivitas - seni, musik, story, dan sensory play. Ini membuat pembelajaran lebih bermakna dan menyenangkan.",
    },
    {
      question: "Apakah ada homework untuk toddler?",
      answer:
        "Tidak ada homework formal. Kami memberikan activity suggestions untuk dilakukan di rumah sebagai bonding time orang tua-anak dan memperkuat pembelajaran di sekolah.",
    },
  ],

  testimonials: [
    {
      name: "Ibu Rina Maharani",
      role: "Ibu dari Kayla (2.5 tahun)",
      rating: 5,
      comment:
        "Kayla yang tadinya pemalu dan selalu nempel sama mamanya, sekarang sudah berani bermain dengan teman-teman. Teacher-nya sabar banget! Perkembangan bahasa Kayla juga pesat sejak masuk Toddler Class.",
    },
    {
      name: "Bapak Arif Wijaya",
      role: "Ayah dari Rafasya (3 tahun)",
      rating: 5,
      comment:
        "Sekolah yang bagus untuk toddler. Rafa jadi lebih mandiri, sudah bisa toilet training berhasil, dan makannya jadi lahap. Aktivitasnya variatif, jadi anak nggak bosan. Recommended!",
    },
    {
      name: "Ibu Lina Kusuma",
      role: "Ibu dari Arkan (2 tahun 8 bulan)",
      rating: 5,
      comment:
        "Saya suka sistem pembelajaran tematiknya yang bikin anak excited belajar. Arkan sering cerita tentang apa yang dia pelajari di sekolah. Teacher-nya kreatif dan caring. Worth it!",
    },
  ],

  whatsapp: {
    number: "6281234567890",
    message:
      "Halo Admin Amanah Edu Centre, saya tertarik mendaftarkan anak saya ke program Toddler Class. Mohon info lebih lanjut.",
  },

  // SEO
  metaTitle: "Toddler Class - Program Pembelajaran Anak Usia 2-3 Tahun | Amanah Edu Centre",
  metaDescription:
    "Program toddler untuk anak 2-3 tahun dengan fokus kemandirian, motorik, bahasa & sosialisasi. Pengajar berpengalaman, fasilitas lengkap, pembelajaran fun & bermakna. Daftar sekarang!",
  ogImage: "/img/programs/toddler/og-image.jpg",
  keywords: [
    "toddler class",
    "sekolah toddler",
    "PAUD 2-3 tahun",
    "pendidikan anak usia dini",
    "toddler program jakarta",
    "sekolah bermain",
    "playgroup",
    "toddler education",
    "early childhood",
    "amanah edu centre",
  ],
};
