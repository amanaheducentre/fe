import type { ProgramData } from "~~/shared/types/program";
import { getSampleImages } from "~/utils/lorem";

export const kindergartenProgram: ProgramData = {
  id: "kindergarten",
  name: "Kindergarten (TK)",
  slug: "kindergarten",
  category: "kindergarten",
  tagline: "Siap Memasuki Dunia Sekolah Dasar dengan Percaya Diri",
  description:
    "Program Taman Kanak-Kanak untuk anak usia 5-6 tahun yang mempersiapkan kesiapan akademik, sosial, dan emosional anak memasuki jenjang Sekolah Dasar dengan kurikulum nasional plus nilai-nilai Islami.",
  ageRange: "5-6 tahun",
  heroImage: "",
  heroVideo: "https://github.com/amanaheducentre/fe/raw/refs/heads/main/public/video/teaser.mp4",
  themeColor: "tk",

  features: [
    {
      icon: "i-heroicons-academic-cap",
      title: "School Readiness",
      description: "Persiapan komprehensif untuk masuk SD: calistung (baca-tulis-hitung), mental, dan kemandirian.",
    },
    {
      icon: "i-heroicons-language",
      title: "Literacy & Numeracy",
      description: "Pembelajaran membaca, menulis, dan berhitung dengan metode yang menyenangkan dan efektif.",
    },
    {
      icon: "i-heroicons-beaker",
      title: "STEAM Learning",
      description: "Pengenalan Science, Technology, Engineering, Arts, Math melalui eksperimen dan project.",
    },
    {
      icon: "i-heroicons-flag",
      title: "Leadership Skills",
      description: "Melatih kepemimpinan, public speaking, dan kepercayaan diri melalui berbagai kegiatan.",
    },
    {
      icon: "i-heroicons-book-open",
      title: "Tahfidz Program",
      description: "Program hafalan Al-Qur'an Juz 30 dengan metode fun dan reward system.",
    },
    {
      icon: "i-heroicons-globe-asia-australia",
      title: "Bilingual Program",
      description: "Pembelajaran bahasa Inggris daily dengan native/fluent speaker untuk conversation skills.",
    },
  ],

  benefits: [
    "Siap masuk SD dengan prestasi baik",
    "Membaca dan menulis lancar",
    "Berhitung dasar (penjumlahan, pengurangan)",
    "Hafal 10-15 surah pendek",
    "Percaya diri dan berani tampil",
    "Kemampuan bahasa Inggris dasar",
  ],

  facilities: {
    title: "Fasilitas Modern",
    items: [
      "Smart classroom dengan interactive whiteboard",
      "STEAM Lab dengan peralatan eksperimen",
      "Library dengan 1000+ koleksi buku anak",
      "Computer lab dengan educational software",
      "Music & performing arts studio",
      "Sports facilities (mini soccer, basketball)",
      "Multi-purpose hall untuk event",
      "Musholla dengan tempat wudhu anak",
      "Kantin sehat dengan menu bergizi",
      "Playground outdoor dengan safety equipment",
    ],
  },

  dailyActivities: [
    {
      time: "07:00 - 07:30",
      activity: "Morning Assembly",
      description: "Upacara bendera (Senin), doa pagi, tilawah, dan pledge",
    },
    {
      time: "07:30 - 08:30",
      activity: "Academic Session 1",
      description: "Pembelajaran literacy (membaca & menulis) atau numeracy (matematika)",
    },
    {
      time: "08:30 - 09:00",
      activity: "Snack Break",
      description: "Makan camilan sehat, toilet break, istirahat",
    },
    {
      time: "09:00 - 10:00",
      activity: "Academic Session 2",
      description: "Lanjutan pembelajaran atau tema tematik (sains, sosial, budaya)",
    },
    {
      time: "10:00 - 11:00",
      activity: "Specials/Enrichment",
      description: "PE, Music, Art, Computer, atau English (rotasi per hari)",
    },
    {
      time: "11:00 - 11:30",
      activity: "Tahfidz & Islamic Studies",
      description: "Hafalan Al-Qur'an, doa, hadits, dan kisah nabi",
    },
    {
      time: "11:30 - 12:15",
      activity: "Lunch Time",
      description: "Makan siang bersama dengan adab Islami",
    },
    {
      time: "12:15 - 13:00",
      activity: "Quiet Time & Reading",
      description: "Istirahat dengan independent reading atau story time",
    },
    {
      time: "13:00 - 14:00",
      activity: "English Immersion",
      description: "Pembelajaran bahasa Inggris intensif dengan conversation practice",
    },
    {
      time: "14:00 - 15:00",
      activity: "Project/Craft Time",
      description: "STEAM project, art & craft, atau preparation untuk showcase",
    },
    {
      time: "15:00 - 15:30",
      activity: "Review & Dismissal",
      description: "Review pembelajaran, homework briefing, doa pulang",
    },
  ],

  schedule: [
    {
      title: "Regular Program (TK A & TK B)",
      days: ["Senin - Jumat"],
      time: "07:00 - 15:30",
      description: "Program reguler dengan full academic curriculum",
    },
    {
      title: "Extended Program",
      days: ["Senin - Jumat"],
      time: "07:00 - 17:00",
      description: "Program diperpanjang dengan after school clubs",
    },
    {
      title: "Saturday Workshops",
      days: ["Sabtu"],
      time: "08:00 - 12:00",
      description: "Cooking class, field trip, science experiment (optional)",
    },
  ],

  caregiverInfo: {
    ratio: "1:10 (1 teacher + 1 assistant untuk 10-15 anak)",
    qualifications: [
      "Sarjana Pendidikan (S.Pd) atau Master bidang pendidikan",
      "Sertifikat mengajar TK dari Kemendikbud",
      "Pengalaman mengajar minimal 4 tahun",
      "Sertifikat metode pembelajaran modern (Montessori/Reggio Emilia)",
      "Fluent English (untuk English teacher)",
      "Hafal minimal Juz 30 (untuk Islamic Studies teacher)",
    ],
    description:
      "Tim pengajar kami adalah profesional berpengalaman dengan latar belakang pendidikan yang kuat. Mereka passionate dalam mendidik anak dan berkomitmen untuk membentuk generasi cerdas, berkarakter, dan berakhlak mulia.",
  },

  pricing: [
    {
      name: "TK A / TK B - Regular",
      price: "Rp 4.200.000",
      period: "per bulan",
      features: [
        "Senin - Jumat (07:00-15:30)",
        "Full academic curriculum",
        "2x makan + 2x snack",
        "All learning materials & buku",
        "Field trip 2x semester",
        "Progress report & portfolio",
        "Graduation ceremony (TK B)",
        "Parent workshops",
      ],
      recommended: true,
    },
    {
      name: "TK A / TK B - Extended",
      price: "Rp 5.000.000",
      period: "per bulan",
      features: [
        "Senin - Jumat (07:00-17:00)",
        "Full curriculum + enrichment",
        "2x makan + 3x snack",
        "All learning materials & buku",
        "After school clubs (robotics, dance, dll)",
        "Field trip 2x semester",
        "Progress report & portfolio",
        "Graduation ceremony (TK B)",
        "Parent workshops",
      ],
    },
    {
      name: "Registration Fee",
      price: "Rp 4.500.000",
      period: "sekali bayar",
      features: [
        "Biaya pendaftaran & placement test",
        "Seragam lengkap (4 stel + batik)",
        "Tas, sepatu, kaos kaki, topi",
        "Complete learning kit",
        "Buku pelajaran 1 tahun ajaran",
        "Student ID & name tag",
        "Welcome kit & merchandise",
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
      question: "Apa perbedaan TK A dan TK B?",
      answer:
        "TK A untuk anak usia 5 tahun yang fokus pada foundational skills (pre-reading, pre-math, socialization). TK B untuk usia 6 tahun dengan pembelajaran lebih intensif mempersiapkan masuk SD (sudah bisa membaca, menulis, berhitung).",
    },
    {
      question: "Apakah lulusan TK B dijamin bisa baca-tulis-hitung?",
      answer:
        "Kami memiliki target 95% murid TK B lulus dengan kemampuan membaca lancar, menulis tegak bersambung, dan berhitung dasar (tambah-kurang 1-20). Setiap anak dipantau progress-nya dan diberikan remedial jika diperlukan.",
    },
    {
      question: "Bagaimana sistem pembelajaran calistung?",
      answer:
        "Kami menggunakan metode fonik untuk membaca, structured tracing untuk menulis, dan manipulative learning untuk matematika. Pembelajaran dilakukan secara bertahap, fun, dan tidak memaksa. Ada leveling sesuai kemampuan anak.",
    },
    {
      question: "Apakah ada tes masuk?",
      answer:
        "Ada placement test sederhana untuk mengetahui level anak, bukan untuk menolak. Test meliputi: kemampuan motorik, kognitif dasar, komunikasi, dan kesiapan sekolah. Hasilnya untuk penempatan kelas yang tepat.",
    },
    {
      question: "Berapa target hafalan Al-Qur'an?",
      answer:
        "Target minimal TK A: hafal 5 surah pendek. Target TK B: hafal 10-15 surah pendek (Juz 30). Kami menggunakan metode muroja'ah rutin, reward system, dan kolaborasi dengan orang tua di rumah.",
    },
    {
      question: "Bagaimana pembelajaran bahasa Inggris?",
      answer:
        "Kami menggunakan pendekatan immersion dengan daily English conversation, songs, games, dan storytelling. Ada 5 sesi English per minggu (45 menit/sesi) dengan teacher yang fluent. Target TK B: bisa conversation sederhana.",
    },
    {
      question: "Apakah ada PR setiap hari?",
      answer:
        "Ya, ada PR ringan sekitar 15-30 menit per hari untuk reinforcement: membaca, menulis, atau worksheet sederhana. Weekend ada reading log dan activity-based homework untuk bonding dengan orang tua.",
    },
    {
      question: "Bagaimana jika anak belum siap masuk SD setelah TK B?",
      answer:
        "Kami akan komunikasi intensif dengan orang tua sejak awal jika ada concern. Ada program remedial dan konseling. Jika memang belum siap, kami sarankan mengulang TK B atau program transition class untuk persiapan lebih matang.",
    },
  ],

  testimonials: [
    {
      name: "Ibu Nurul Hidayah",
      role: "Ibu dari Ahmad (lulusan TK B)",
      rating: 5,
      comment:
        "Alhamdulillah Ahmad lulus TK dengan prestasi bagus. Sekarang kelas 1 SD dan sudah bisa baca-tulis dengan lancar, hafalannya juga 12 surah. Terima kasih TK Amanah sudah mempersiapkan Ahmad dengan baik!",
    },
    {
      name: "Bapak Rizki Prasetyo",
      role: "Ayah dari Kenzie (TK A)",
      rating: 5,
      comment:
        "Sekolah TK terbaik yang pernah saya temukan. Balanced antara akademik, agama, dan pengembangan karakter. Kenzie yang dulu pemalu sekarang berani tampil dan presentasi. Guru-gurunya sangat dedicated!",
    },
    {
      name: "Ibu Laila Sari",
      role: "Ibu dari Fatimah (TK B)",
      rating: 5,
      comment:
        "Program tahfidz-nya luar biasa! Fatimah sekarang hafal 14 surah dan suka banget muroja'ah. Fasilitasnya juga modern, curriculum-nya jelas terstruktur. Worth every penny!",
    },
  ],

  whatsapp: {
    number: "6281234567890",
    message:
      "Halo Admin Amanah Edu Centre, saya tertarik mendaftarkan anak saya ke program Kindergarten (TK). Mohon info lebih lanjut.",
  },

  // SEO
  metaTitle: "Kindergarten (TK) - Program TK Islam Terbaik untuk Usia 5-6 Tahun | Amanah",
  metaDescription:
    "TK Islam unggulan untuk anak 5-6 tahun dengan program calistung, tahfidz, bilingual, dan STEAM. Persiapan terbaik masuk SD. Guru bersertifikat, fasilitas modern. Daftar sekarang!",
  ogImage: "/img/programs/kindergarten/og-image.jpg",
  keywords: [
    "TK Islam",
    "kindergarten jakarta",
    "TK terbaik",
    "sekolah TK",
    "TK calistung",
    "TK tahfidz",
    "TK bilingual",
    "persiapan SD",
    "TK A TK B",
    "kindergarten terbaik",
    "amanah edu centre",
  ],
};
