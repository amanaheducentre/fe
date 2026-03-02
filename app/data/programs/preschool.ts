import type { ProgramData } from "~~/shared/types/program";
import { getSampleImages } from "~/utils/lorem";

export const preschoolProgram: ProgramData = {
  id: "kb-amanah-preschool",
  name: "KB Amanah Preschool",
  slug: "kb-amanah-preschool",
  category: "preschool",
  tagline: "Montessori for Little Learners",
  description:
    "KB Amanah Preschool hadir sebagai pilihan terbaik untuk anak usia 3–4 tahun dengan pendekatan Montessori yang menekankan kemandirian, konsentrasi, dan pembelajaran sesuai tahap perkembangan anak. Proses belajar dikemas seperti playdate yang menyenangkan, sehingga anak merasa nyaman, percaya diri, dan bahagia saat belajar. Setiap anak diobservasi secara cermat agar stimulasi yang diberikan tepat dan bermakna. Dilengkapi kegiatan internal dan eksternal seperti keagamaan, renang, musik, menari, sains, art & craft, hingga memasak. KB Amanah Preschool menjadi ruang tumbuh yang aman, kreatif, dan penuh cinta untuk langkah awal masa depan anak.",
  ageRange: "3-4 tahun",
  heroImage: "",
  heroVideo: "https://github.com/amanaheducentre/fe/raw/refs/heads/main/public/video/teaser.mp4",
  themeColor: "kb",

  features: [
    {
      icon: "i-heroicons-academic-cap",
      title: "Direktris Berpengalaman",
      description:
        "Dipimpin oleh direktris berpengalaman di bidang pendidikan anak usia dini dengan spesialisasi pendekatan Montessori dan pengelolaan profesional.",
    },
    {
      icon: "i-heroicons-light-bulb",
      title: "Kurikulum Berbasis Montessori",
      description:
        "Menekankan kemandirian, konsentrasi, dan pembelajaran konkret sesuai minat serta kesiapan anak tanpa paksaan.",
    },
    {
      icon: "i-heroicons-heart",
      title: "Belajar Seperti Playdate",
      description:
        "Suasana belajar santai, hangat, dan menyenangkan seperti bermain bersama teman sehingga anak merasa aman dan bebas bereksplorasi.",
    },
    {
      icon: "i-heroicons-eye",
      title: "Observasi Perkembangan",
      description:
        "Setiap anak dipantau melalui observasi berkala sesuai tahap perkembangan untuk memastikan stimulasi yang tepat dan personal.",
    },
    {
      icon: "i-heroicons-sparkles",
      title: "Kegiatan Internal & Eksternal",
      description:
        "Keagamaan, musik, menari, sains, art & craft, memasak, renang, dan outing edukatif untuk memperkaya pengalaman belajar anak.",
    },
  ],

  benefits: [
    "Anak lebih mandiri sejak dini",
    "Perkembangan sesuai tahap usia",
    "Mendukung orang tua bekerja dengan tenang",
    "Anak lebih siap untuk jenjang pendidikan selanjutnya",
  ],

  facilities: {
    title: "Fasilitas Montessori & Lingkungan Belajar",
    items: [
      "Alat peraga Montessori lengkap sesuai usia",
      "5 Area Montessori: Practical Life, Sensorial, Bahasa, Matematika, Budaya",
      "Ruangan indoor nyaman & area outdoor aman dan luas",
      "Seluruh ruangan ber-AC dan dilengkapi CCTV",
      "Toilet & kamar mandi ramah anak untuk toilet training",
    ],
  },

  dailyActivities: [
    {
      time: "07:00 - 08:00",
      activity: "Penyambutan & Penerimaan Siswa",
      description:
        "Anak disambut hangat oleh guru untuk membantu transisi dari rumah ke sekolah dengan rasa aman dan nyaman.",
    },
    {
      time: "08:00 - 09:00",
      activity: "Circle Time, Motorik & Bahasa Inggris",
      description: "Membangun kedekatan, melatih sosial, motorik, serta pengenalan Bahasa Inggris secara menyenangkan.",
    },
    {
      time: "09:00 - 09:30",
      activity: "Kegiatan Ekstrakurikuler",
      description: "Keagamaan, musik, menari, sains, atau kegiatan tematik sesuai jadwal.",
    },
    {
      time: "09:30 - 11:00",
      activity: "Stimulasi Area Montessori",
      description:
        "Aktivitas pilihan di area Practical Life, Sensorial, Bahasa, Matematika, dan Budaya sesuai minat dan tahap perkembangan.",
    },
    {
      time: "11:00 - 11:30",
      activity: "Snack Time & Toilet Training",
      description: "Melatih kemandirian, kebiasaan hidup sehat, serta adab makan.",
    },
    {
      time: "11:30 - 12:00",
      activity: "Persiapan Pulang",
      description: "Merapikan area belajar, refleksi ringan, dan bersiap pulang dengan suasana tenang.",
    },
  ],

  schedule: [
    {
      title: "Program KB Amanah Preschool",
      days: ["Senin - Jumat"],
      time: "07:00 - 12:00 WIB",
      description: "Program reguler berbasis Montessori dengan kegiatan harian terstruktur dan menyenangkan.",
    },
  ],

  caregiverInfo: {
    ratio: "Maksimal 15 anak dengan 2 pendamping (guru/direktris)",
    qualifications: [
      "Berpengalaman dalam pendidikan anak usia dini",
      "Memahami pendekatan Montessori",
      "Mampu melakukan observasi perkembangan anak",
      "Pendampingan personal dan penuh perhatian",
    ],
    description:
      "Setiap kelas didampingi oleh 2 guru/direktris dengan maksimal 15 anak, sehingga setiap anak mendapatkan perhatian personal, observasi menyeluruh, serta rasa aman dan nyaman selama proses belajar.",
  },

  pricing: [
    {
      name: "Informasi Biaya",
      price: "Hubungi Admin",
      period: "",
      features: ["Detail biaya pendaftaran", "Informasi SPP bulanan", "Keterangan kegiatan tambahan"],
      recommended: true,
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
      question: "Usia berapa anak bisa masuk KB Amanah Preschool?",
      answer:
        "KB Amanah Preschool menerima anak usia 3–4 tahun dengan pendekatan sesuai tahap perkembangan masing-masing anak.",
    },
    {
      question: "Kurikulum apa yang digunakan?",
      answer:
        "Menggunakan kurikulum berbasis Montessori yang menekankan kemandirian, pembelajaran konkret, dan aktivitas sesuai kesiapan anak.",
    },
    {
      question: "Bagaimana sistem pendampingan di kelas?",
      answer:
        "Setiap kelas maksimal 15 anak dan didampingi oleh 2 guru/direktris untuk perhatian yang lebih personal dan optimal.",
    },
    {
      question: "Apakah anak harus sudah bisa membaca atau menulis?",
      answer:
        "Tidak. Anak tidak dituntut bisa membaca, menulis, atau berhitung. Semua proses dilakukan sesuai kesiapan dan perkembangan anak.",
    },
    {
      question: "Jam sekolah berlangsung pukul berapa?",
      answer: "Jam kegiatan belajar berlangsung dari 07.00 – 12.00 WIB.",
    },
    {
      question: "Bagaimana sekolah memantau perkembangan anak?",
      answer:
        "Guru melakukan observasi rutin dan memberikan laporan perkembangan sesuai tahap usia anak secara berkala.",
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
    message: "Halo Admin KB Amanah Preschool, saya tertarik mendaftarkan anak saya. Mohon informasi lebih lanjut.",
  },

  metaTitle: "KB Amanah Preschool - Montessori for Little Learners Usia 3-4 Tahun",
  metaDescription:
    "KB Amanah Preschool menghadirkan kurikulum Montessori untuk anak usia 3-4 tahun dengan pendekatan playdate yang menyenangkan, observasi perkembangan personal, dan fasilitas lengkap.",
  ogImage: "/img/programs/kb-amanah-preschool/og-image.jpg",
  keywords: [
    "KB Amanah Preschool",
    "Montessori untuk anak 3-4 tahun",
    "preschool montessori",
    "sekolah anak usia dini",
    "montessori indonesia",
    "kb usia 3 tahun",
    "montessori for little learners",
  ],
};
