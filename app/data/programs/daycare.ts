import type { ProgramData } from "~~/shared/types/program";
import { getSampleImages } from "~/utils/lorem";
export const daycareProgram: ProgramData = {
  id: "daycare",
  name: "Daycare Amanah",
  slug: "daycare",
  category: "daycare",
  tagline: "Penitipan Anak Terpercaya dengan Kasih Sayang & Profesional",
  description:
    "Program penitipan anak usia 0-2 tahun dengan pengasuhan yang penuh perhatian, aman, dan menstimulasi tumbuh kembang optimal dalam lingkungan yang nyaman dan Islami.",
  ageRange: "0-2 tahun",
  heroImage: "",
  heroVideo: "https://github.com/amanaheducentre/fe/raw/refs/heads/main/public/video/teaser.mp4",

  features: [
    {
      icon: "i-heroicons-heart",
      title: "Pengasuhan Penuh Kasih",
      description: "Caregiver berpengalaman dengan rasio 1:3 memberikan perhatian individual untuk setiap anak.",
    },
    {
      icon: "i-heroicons-shield-check",
      title: "Lingkungan Aman & Higienis",
      description: "Fasilitas bersih, aman, dengan protokol kesehatan ketat dan area bermain yang terstandar.",
    },
    {
      icon: "i-heroicons-academic-cap",
      title: "Stimulasi Tumbuh Kembang",
      description: "Program stimulasi sesuai tahapan perkembangan untuk motorik, kognitif, dan sosial-emosional.",
    },
    {
      icon: "i-heroicons-camera",
      title: "Live Monitoring",
      description: "Orang tua dapat memantau anak secara real-time melalui CCTV online dan laporan harian.",
    },
    {
      icon: "i-heroicons-clock",
      title: "Jadwal Fleksibel",
      description: "Pilihan jadwal harian, mingguan, atau bulanan sesuai kebutuhan orang tua yang bekerja.",
    },
    {
      icon: "i-heroicons-sun",
      title: "Nilai-Nilai Islami",
      description: "Pengenalan nilai-nilai akhlak mulia dan pembiasaan doa-doa sederhana sejak dini.",
    },
  ],

  benefits: [
    "Mendukung orang tua bekerja dengan tenang",
    "Stimulasi perkembangan optimal sejak dini",
    "Sosialisasi dengan teman sebaya",
    "Kemandirian bertahap sesuai usia",
    "Pemantauan kesehatan rutin",
    "Laporan perkembangan berkala",
  ],

  facilities: {
    title: "Fasilitas & Kegiatan Harian",
    items: [
      "Ruang tidur ber-AC dengan kasur & bantal khusus bayi",
      "Area bermain indoor dengan mainan edukatif aman",
      "Dapur bersih untuk persiapan makan/susu",
      "Ruang menyusui & ganti popok",
      "CCTV 24 jam dengan akses orang tua",
      "Peralatan sterilisasi & kebersihan",
      "Play gym & sensory toys",
      "Kotak P3K & termometer digital",
    ],
  },

  dailyActivities: [
    {
      time: "07:00 - 08:00",
      activity: "Penerimaan & Breakfast",
      description: "Sambutan hangat, cek kesehatan awal, sarapan/susu",
    },
    {
      time: "08:00 - 09:00",
      activity: "Free Play & Sensory",
      description: "Bermain bebas, stimulasi sensorik dengan mainan edukatif",
    },
    {
      time: "09:00 - 10:00",
      activity: "Circle Time & Story",
      description: "Bernyanyi, bercerita, pengenalan warna dan bentuk",
    },
    {
      time: "10:00 - 11:00",
      activity: "Snack Time & Tummy Time",
      description: "Makan camilan sehat, latihan tengkurap/motorik",
    },
    {
      time: "11:00 - 12:00",
      activity: "Lunch & Clean Up",
      description: "Makan siang, bersih-bersih, ganti popok",
    },
    {
      time: "12:00 - 14:00",
      activity: "Nap Time",
      description: "Tidur siang di ruang ber-AC dengan pengawasan",
    },
    {
      time: "14:00 - 15:00",
      activity: "Wake Up & Afternoon Snack",
      description: "Bangun tidur, snack sore, aktivitas ringan",
    },
    {
      time: "15:00 - 16:30",
      activity: "Play & Learning",
      description: "Bermain edukatif, musik, art & craft sederhana",
    },
    {
      time: "16:30 - 17:00",
      activity: "Wrap Up & Pick Up",
      description: "Persiapan pulang, briefing harian ke orang tua",
    },
  ],

  schedule: [
    {
      title: "Full Day Care",
      days: ["Senin - Jumat"],
      time: "07:00 - 17:00",
      description: "Program penuh untuk orang tua bekerja",
    },
    {
      title: "Half Day Care",
      days: ["Senin - Jumat"],
      time: "07:00 - 12:00 atau 12:00 - 17:00",
      description: "Program setengah hari pagi atau sore",
    },
    {
      title: "Saturday Care",
      days: ["Sabtu"],
      time: "07:00 - 12:00",
      description: "Penitipan khusus hari Sabtu (optional)",
    },
  ],

  caregiverInfo: {
    ratio: "1:3 (1 caregiver untuk 3 anak)",
    qualifications: [
      "Bersertifikat perawatan bayi & balita",
      "Pengalaman minimal 2 tahun",
      "Terlatih P3K & penanganan darurat",
      "Lulus pemeriksaan kesehatan",
      "Background check lengkap",
    ],
    description:
      "Caregiver kami adalah profesional berpengalaman yang mencintai anak, sabar, dan memahami tahapan tumbuh kembang bayi. Setiap caregiver menjalani pelatihan berkala untuk memastikan standar pengasuhan terbaik.",
  },

  pricing: [
    {
      name: "Harian",
      price: "Rp 150.000",
      period: "per hari",
      features: [
        "Full day care (07:00-17:00)",
        "3x makan + 2x snack",
        "Susu formula/MPASI",
        "Popok & wet wipes",
        "Laporan harian",
      ],
    },
    {
      name: "Mingguan",
      price: "Rp 650.000",
      period: "per minggu",
      features: [
        "Full day care 5 hari",
        "3x makan + 2x snack",
        "Susu formula/MPASI",
        "Popok & wet wipes",
        "Laporan harian + foto",
        "Live CCTV access",
      ],
      recommended: true,
    },
    {
      name: "Bulanan",
      price: "Rp 2.500.000",
      period: "per bulan",
      features: [
        "Full day care 20 hari kerja",
        "3x makan + 2x snack",
        "Susu formula/MPASI premium",
        "Popok & toiletries lengkap",
        "Laporan harian + weekly report",
        "Live CCTV 24/7",
        "Konsultasi parenting gratis",
        "Free 1x fotoshoot bulanan",
      ],
    },
  ],

  gallery: [...getSampleImages(1920, 1080, 8)],

  faqs: [
    {
      question: "Berapa usia minimal anak yang bisa dititipkan?",
      answer:
        "Kami menerima bayi mulai dari usia 3 bulan. Untuk bayi di bawah 3 bulan, silakan konsultasikan terlebih dahulu dengan kami untuk memastikan kesiapan dan kebutuhan khusus.",
    },
    {
      question: "Apakah orang tua perlu menyediakan makanan sendiri?",
      answer:
        "Tidak perlu. Kami menyediakan makanan bergizi sesuai usia anak (MPASI/finger food). Namun, jika anak memiliki alergi atau diet khusus, orang tua dapat membawa makanan sendiri atau kami sesuaikan dengan kebutuhan.",
    },
    {
      question: "Bagaimana jika anak sakit saat dititip?",
      answer:
        "Jika anak menunjukkan gejala sakit (demam, batuk, pilek berat), kami sarankan untuk tidak menitipkan. Jika anak sakit saat di daycare, kami akan segera menghubungi orang tua dan memberikan pertolongan pertama sambil menunggu penjemputan.",
    },
    {
      question: "Apakah ada biaya pendaftaran?",
      answer:
        "Ya, ada biaya pendaftaran sekali sebesar Rp 500.000 yang mencakup administrasi, seragam, tas, alat makan, dan assessment awal anak.",
    },
    {
      question: "Bisakah orang tua melihat anak melalui CCTV?",
      answer:
        "Ya, orang tua mendapat akses ke live streaming CCTV melalui aplikasi khusus (untuk paket mingguan dan bulanan). Untuk paket harian, orang tua dapat meminta update foto/video melalui WhatsApp.",
    },
    {
      question: "Apakah caregiver bisa membantu menyusui/memberi ASI?",
      answer:
        "Tentu! Kami menyediakan ruang khusus untuk menyimpan ASI perah (ASIP) di kulkas bersih. Caregiver terlatih akan memberikan ASI sesuai jadwal yang ditentukan orang tua.",
    },
    {
      question: "Bagaimana sistem penjemputan anak?",
      answer:
        "Hanya orang tua atau orang yang didaftarkan (maksimal 3 orang) yang boleh menjemput. Wajib menunjukkan KTP saat penjemputan pertama kali dan mengisi formulir otorisasi.",
    },
    {
      question: "Apakah ada trial day sebelum mendaftar?",
      answer:
        "Ya, kami menyediakan trial day seharga Rp 100.000 untuk 3 jam (09:00-12:00) agar orang tua dan anak dapat merasakan suasana daycare terlebih dahulu.",
    },
  ],

  testimonials: [
    {
      name: "Ibu Sarah Amalia",
      role: "Ibu dari Aisha (18 bulan)",
      rating: 5,
      comment:
        "Alhamdulillah, Aisha sangat senang di Daycare Amanah. Caregivernya sabar dan perhatian. Saya jadi tenang bekerja karena bisa lihat Aisha lewat CCTV. Perkembangan Aisha juga pesat!",
    },
    {
      name: "Ibu Dina Kartika",
      role: "Ibu dari Raffi (10 bulan)",
      rating: 5,
      comment:
        "Fasilitasnya bersih dan nyaman. Yang saya suka, ada laporan harian lengkap dengan foto-foto. Raffi yang tadinya pemalu jadi lebih aktif dan ceria. Recommended banget!",
    },
    {
      name: "Ibu Fitri Handayani",
      role: "Ibu dari twins Fathia & Fadhil (14 bulan)",
      rating: 5,
      comment:
        "Sebagai ibu bekerja dengan anak kembar, Daycare Amanah sangat membantu. Pengasuhnya profesional dan sayang sama anak-anak. Harga juga reasonable untuk kualitas yang didapat.",
    },
  ],

  whatsapp: {
    number: "6281234567890",
    message:
      "Halo Admin Amanah Edu Centre, saya tertarik mendaftarkan anak saya ke program Daycare. Mohon info lebih lanjut.",
  },

  // SEO
  metaTitle: "Daycare Amanah - Penitipan Anak Terpercaya Usia 0-2 Tahun",
  metaDescription:
    "Daycare profesional untuk bayi dan balita 0-2 tahun dengan pengasuhan penuh kasih sayang, fasilitas lengkap, caregiver bersertifikat, dan live monitoring CCTV. Daftar sekarang!",
  ogImage: "/img/programs/daycare/og-image.jpg",
  keywords: [
    "daycare jakarta",
    "penitipan anak",
    "daycare bayi",
    "daycare balita",
    "daycare islami",
    "daycare terpercaya",
    "tempat penitipan anak",
    "daycare 0-2 tahun",
    "baby daycare",
    "daycare cctv online",
    "amanah edu centre",
  ],
};
