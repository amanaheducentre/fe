import type { ProgramData } from "~~/shared/types/program";
import { getSampleImages } from "~/utils/lorem";

export const preschoolProgram: ProgramData = {
  id: "preschool",
  name: "Pre-School",
  slug: "preschool",
  category: "preschool",
  tagline: "Fondasi Kuat untuk Masa Depan Cemerlang",
  description:
    "Program pre-school untuk anak usia 3-4 tahun yang mempersiapkan anak memasuki jenjang kindergarten dengan pembelajaran holistik, stimulasi kognitif, sosial-emosional, dan pembentukan karakter Islami yang kuat.",
  ageRange: "3-4 tahun",
  heroImage: "",
  heroVideo: "https://github.com/amanaheducentre/fe/raw/refs/heads/main/public/video/teaser.mp4",
  themeColor: "kb",

  features: [
    {
      icon: "i-heroicons-book-open",
      title: "Pre-Reading & Pre-Math",
      description: "Pengenalan huruf, angka, bentuk, dan konsep dasar matematika melalui metode bermain.",
    },
    {
      icon: "i-heroicons-light-bulb",
      title: "Critical Thinking",
      description: "Melatih kemampuan berpikir kritis, problem solving, dan logical reasoning sejak dini.",
    },
    {
      icon: "i-heroicons-heart",
      title: "Karakter Islami",
      description: "Pembentukan akhlak mulia, doa harian, hafalan surah pendek, dan adab-adab Islami.",
    },
    {
      icon: "i-heroicons-users",
      title: "Social Skills",
      description: "Belajar bekerja sama, empati, resolusi konflik, dan komunikasi yang baik dengan teman.",
    },
    {
      icon: "i-heroicons-paint-brush",
      title: "Seni & Kreativitas",
      description: "Eksplorasi seni visual, musik, tari, dan drama untuk mengembangkan kreativitas.",
    },
    {
      icon: "i-heroicons-globe-alt",
      title: "Bilingual Exposure",
      description: "Pengenalan bahasa Inggris sederhana melalui lagu, games, dan daily conversation.",
    },
  ],

  benefits: [
    "Siap masuk TK dengan percaya diri",
    "Kemampuan literasi & numerasi dasar kuat",
    "Karakter dan akhlak terpuji",
    "Kemandirian dan tanggung jawab tinggi",
    "Kemampuan sosial yang baik",
    "Cinta belajar dan rasa ingin tahu tinggi",
  ],

  facilities: {
    title: "Fasilitas Pembelajaran",
    items: [
      "Ruang kelas modern ber-AC dengan smart board",
      "Learning corners: literacy, math, science, art",
      "Perpustakaan dengan koleksi buku anak lengkap",
      "Science lab sederhana untuk eksperimen",
      "Music & movement room",
      "Outdoor playground dengan safety standard",
      "Computer lab dengan educational games",
      "Mini mosque untuk praktik ibadah",
    ],
  },

  dailyActivities: [
    {
      time: "07:30 - 08:00",
      activity: "Morning Assembly",
      description: "Berbaris, doa pagi, tilawah bersama, dan pledge",
    },
    {
      time: "08:00 - 09:00",
      activity: "Circle Time & Theme Introduction",
      description: "Diskusi tema, show and tell, building vocabulary",
    },
    {
      time: "09:00 - 09:30",
      activity: "Snack & Break Time",
      description: "Makan camilan sehat, toilet break, free play",
    },
    {
      time: "09:30 - 10:30",
      activity: "Learning Centers",
      description: "Rotasi pembelajaran di berbagai center (literacy, math, science)",
    },
    {
      time: "10:30 - 11:15",
      activity: "Specials Class",
      description: "Kelas khusus: PE, Music, Art, atau Computer (bergantian per hari)",
    },
    {
      time: "11:15 - 12:00",
      activity: "Lunch Time",
      description: "Makan siang bersama, praktik adab makan Islami",
    },
    {
      time: "12:00 - 13:00",
      activity: "Quiet Time & Rest",
      description: "Istirahat dengan cerita audio atau aktivitas tenang",
    },
    {
      time: "13:00 - 14:00",
      activity: "English Fun Time",
      description: "Pembelajaran bahasa Inggris melalui games & songs",
    },
    {
      time: "14:00 - 14:45",
      activity: "Project Work",
      description: "Craft, eksperimen sains, atau project tematik",
    },
    {
      time: "14:45 - 15:00",
      activity: "Review & Dismissal",
      description: "Review hari ini, doa pulang, persiapan home activity",
    },
  ],

  schedule: [
    {
      title: "Regular Program",
      days: ["Senin - Jumat"],
      time: "07:30 - 15:00",
      description: "Program reguler dengan full curriculum",
    },
    {
      title: "Extended Program",
      days: ["Senin - Jumat"],
      time: "07:30 - 17:00",
      description: "Program diperpanjang dengan enrichment activities",
    },
    {
      title: "Saturday Enrichment",
      days: ["Sabtu"],
      time: "08:00 - 12:00",
      description: "Cooking class, field trip, atau workshop khusus (optional)",
    },
  ],

  caregiverInfo: {
    ratio: "1:8 (1 teacher + 1 assistant untuk 8-12 anak)",
    qualifications: [
      "Sarjana Pendidikan (S.Pd) PAUD/PG-PAUD",
      "Sertifikat Montessori atau metode pembelajaran modern",
      "Pengalaman mengajar minimal 3 tahun",
      "Terlatih child psychology & behavior management",
      "Hafal Juz 30 (untuk teacher Islami studies)",
    ],
    description:
      "Tim pengajar kami adalah lulusan perguruan tinggi bidang pendidikan dengan pengalaman mengajar preschool. Mereka menggabungkan pendekatan pembelajaran modern dengan nilai-nilai Islami untuk mengembangkan potensi setiap anak secara holistik.",
  },

  pricing: [
    {
      name: "Regular Program",
      price: "Rp 3.500.000",
      period: "per bulan",
      features: [
        "Senin - Jumat (07:30-15:00)",
        "Full curriculum + specials class",
        "2x makan + 2x snack",
        "Learning materials & buku",
        "Field trip bulanan",
        "Progress report semester",
        "Parent-teacher conference",
      ],
      recommended: true,
    },
    {
      name: "Extended Program",
      price: "Rp 4.200.000",
      period: "per bulan",
      features: [
        "Senin - Jumat (07:30-17:00)",
        "Full curriculum + enrichment",
        "2x makan + 3x snack",
        "Learning materials & buku",
        "Field trip bulanan",
        "After school activities",
        "Progress report semester",
        "Parent-teacher conference",
      ],
    },
    {
      name: "Registration Fee",
      price: "Rp 3.000.000",
      period: "sekali bayar",
      features: [
        "Biaya pendaftaran & assessment",
        "Seragam lengkap (3 stel)",
        "Tas, sepatu, topi sekolah",
        "Learning kit & stationery",
        "Buku pelajaran 1 tahun",
        "ID card & name tag",
      ],
    },
  ],

  gallery: [...getSampleImages(1920, 1080, 10)],

  faqs: [
    {
      question: "Apa perbedaan Pre-School dengan Toddler Class?",
      answer:
        "Pre-School lebih terstruktur dengan kurikulum formal yang mempersiapkan anak masuk TK. Ada pembelajaran literacy, numeracy, dan character building yang lebih intensif. Toddler Class masih fokus pada play-based learning dan pengembangan dasar.",
    },
    {
      question: "Apakah anak harus sudah bisa membaca?",
      answer:
        "Tidak harus. Pre-School adalah tahap mempersiapkan anak untuk belajar membaca (pre-reading skills) seperti phonics awareness, letter recognition, dan print concepts. Setiap anak punya pace berbeda dan kami respect itu.",
    },
    {
      question: "Berapa rasio guru dan murid?",
      answer:
        "Kami menjaga rasio 1:8 dengan 1 head teacher dan 1 assistant teacher per kelas maksimal 12 anak. Ini memastikan setiap anak mendapat perhatian personal yang cukup.",
    },
    {
      question: "Bagaimana metode pembelajaran yang digunakan?",
      answer:
        "Kami menggabungkan berbagai pendekatan: learning centers, project-based learning, thematic approach, dan integrated Islamic values. Pembelajaran tetap fun dan hands-on sesuai tahap perkembangan anak.",
    },
    {
      question: "Apakah ada PR (homework)?",
      answer:
        "Ada home activity ringan yang bersifat reinforcement, bukan PR formal. Misalnya: membaca buku bersama orang tua, practice tracing, atau simple craft. Fokusnya adalah family involvement, bukan beban anak.",
    },
    {
      question: "Bagaimana sistem penilaian?",
      answer:
        "Kami menggunakan authentic assessment melalui observasi, portfolio, dan anecdotal records. Progress report diberikan tiap semester dengan parent-teacher conference untuk diskusi perkembangan anak secara detail.",
    },
    {
      question: "Apakah lulusan Pre-School bisa langsung masuk SD?",
      answer:
        "Pre-School diperuntukkan bagi anak 3-4 tahun dan dirancang sebagai persiapan masuk TK (Kindergarten), bukan langsung SD. Untuk persiapan SD, kami punya program Kindergarten (TK) untuk usia 5-6 tahun.",
    },
    {
      question: "Apa saja program Islami yang diajarkan?",
      answer:
        "Anak akan belajar doa harian, adab Islami (makan, tidur, ke toilet), hafalan surah pendek, praktek wudhu dan shalat sederhana, kisah nabi, dan akhlak terpuji melalui cerita dan role play.",
    },
  ],

  testimonials: [
    {
      name: "Ibu Dewi Lestari",
      role: "Ibu dari Zahra (4 tahun)",
      rating: 5,
      comment:
        "Alhamdulillah Zahra jadi suka belajar sejak masuk Pre-School Amanah. Sekarang sudah bisa mengenal semua huruf dan angka, hafalannya juga bertambah. Teacher-nya sabar dan metode mengajarnya kreatif!",
    },
    {
      name: "Bapak Hendra Gunawan",
      role: "Ayah dari Farhan (3.5 tahun)",
      rating: 5,
      comment:
        "Sekolah yang bagus dengan balanced program: akademik, karakter, dan agama. Farhan jadi lebih mandiri, sopan, dan percaya diri. Field trip nya juga edukatif. Highly recommended!",
    },
    {
      name: "Ibu Siti Nurhaliza",
      role: "Ibu dari Aisyah (4 tahun)",
      rating: 5,
      comment:
        "Aisyah senang sekali sekolah di sini. Dia excited cerita apa yang dipelajari setiap hari. Fasilitasnya lengkap, guru-gurunya qualified, dan yang penting nilai Islaminya kuat. Puas banget!",
    },
  ],

  whatsapp: {
    number: "6281234567890",
    message:
      "Halo Admin Amanah Edu Centre, saya tertarik mendaftarkan anak saya ke program Pre-School. Mohon info lebih lanjut.",
  },

  // SEO
  metaTitle: "Pre-School Program - Persiapan TK Usia 3-4 Tahun | Amanah Edu Centre",
  metaDescription:
    "Program pre-school Islami untuk anak 3-4 tahun dengan kurikulum holistik: literasi, numerasi, karakter, dan nilai agama. Pengajar bersertifikat, fasilitas modern. Daftar sekarang!",
  ogImage: "/img/programs/preschool/og-image.jpg",
  keywords: [
    "preschool",
    "pre-school jakarta",
    "PAUD 3-4 tahun",
    "sekolah pra TK",
    "preschool Islami",
    "early childhood education",
    "pre-kindergarten",
    "sekolah anak 3 tahun",
    "preschool terbaik",
    "amanah edu centre",
  ],
};
