import type { ProgramData } from "~~/shared/types/program";
import { getSampleImages } from "~/utils/lorem";

export const serasiProgram: ProgramData = {
  id: "serasi",
  name: "SERASI - Sekolah Ramah Inklusi",
  slug: "serasi",
  category: "serasi",
  tagline: "Setiap Anak Berhak Berkembang Optimal",
  description:
    "Program pendidikan inklusi untuk anak berkebutuhan khusus (ABK) usia 3-10 tahun dengan pendekatan individual, terapi terintegrasi, dan lingkungan yang suportif. Kami percaya setiap anak memiliki potensi luar biasa yang perlu dikembangkan dengan cara yang tepat.",
  ageRange: "3-10 tahun",
  heroImage: "",
  heroVideo: "https://github.com/amanaheducentre/fe/raw/refs/heads/main/public/video/teaser.mp4",
  themeColor: "serasi",

  features: [
    {
      icon: "i-heroicons-user-group",
      title: "Individual Education Plan (IEP)",
      description: "Program pembelajaran disesuaikan dengan kebutuhan, kemampuan, dan potensi setiap anak.",
    },
    {
      icon: "i-heroicons-heart",
      title: "Integrated Therapy",
      description: "Terapi wicara, okupasi, sensori integrasi, dan behavior therapy terintegrasi dalam pembelajaran.",
    },
    {
      icon: "i-heroicons-users",
      title: "Inclusive Environment",
      description: "Lingkungan yang aman, ramah, dan mendukung interaksi sosial anak ABK dengan typical peers.",
    },
    {
      icon: "i-heroicons-academic-cap",
      title: "Specialized Teacher",
      description: "Guru bersertifikat pendidikan khusus dengan rasio 1:3 untuk perhatian optimal.",
    },
    {
      icon: "i-heroicons-chart-bar",
      title: "Progress Monitoring",
      description: "Pemantauan perkembangan intensif dengan assessment berkala dan laporan detail ke orang tua.",
    },
    {
      icon: "i-heroicons-home",
      title: "Parent Training",
      description: "Workshop dan konseling rutin untuk orang tua dalam mendampingi anak di rumah.",
    },
  ],

  benefits: [
    "Perkembangan optimal sesuai potensi anak",
    "Keterampilan hidup mandiri meningkat",
    "Kemampuan komunikasi berkembang",
    "Perilaku adaptif lebih baik",
    "Kepercayaan diri bertumbuh",
    "Sosialisasi dengan peers",
  ],

  facilities: {
    title: "Fasilitas Khusus & Terapi",
    items: [
      "Ruang kelas khusus dengan sensory-friendly design",
      "Sensory room dengan berbagai peralatan terapi",
      "Speech therapy room dengan tools lengkap",
      "Occupational therapy room",
      "Ruang terapi individual soundproof",
      "Safe playground dengan equipment adaptif",
      "Visual schedule & communication boards",
      "Assistive technology & learning aids",
      "Calm down corner di setiap kelas",
      "Parent observation room dengan one-way mirror",
    ],
  },

  dailyActivities: [
    {
      time: "08:00 - 08:30",
      activity: "Arrival & Transition Routine",
      description: "Penyambutan dengan visual schedule, sensory break jika diperlukan",
    },
    {
      time: "08:30 - 09:00",
      activity: "Circle Time",
      description: "Greeting, calendar routine, social skills practice (disesuaikan kemampuan)",
    },
    {
      time: "09:00 - 10:00",
      activity: "Individual/Small Group Learning",
      description: "Pembelajaran akademik atau life skills sesuai IEP masing-masing anak",
    },
    {
      time: "10:00 - 10:30",
      activity: "Snack & Self-Care",
      description: "Makan mandiri, cuci tangan, toilet training dengan prompting",
    },
    {
      time: "10:30 - 11:30",
      activity: "Therapy Session 1",
      description: "Speech therapy, OT, atau sensory integration (rotasi per hari)",
    },
    {
      time: "11:30 - 12:00",
      activity: "Gross Motor/Movement",
      description: "Aktivitas fisik adaptif, outdoor play dengan supervision",
    },
    {
      time: "12:00 - 12:45",
      activity: "Lunch & Rest",
      description: "Makan siang dengan praktik self-help skills, istirahat",
    },
    {
      time: "12:45 - 13:45",
      activity: "Therapy Session 2",
      description: "Behavior therapy atau skill training individual",
    },
    {
      time: "13:45 - 14:30",
      activity: "Social Play/Art Activity",
      description: "Bermain sosial terstruktur, art & craft adaptif",
    },
    {
      time: "14:30 - 15:00",
      activity: "Wrap Up & Transition",
      description: "Review hari ini dengan visual, persiapan pulang, briefing ke orang tua",
    },
  ],

  schedule: [
    {
      title: "Full Day Program",
      days: ["Senin - Jumat"],
      time: "08:00 - 15:00",
      description: "Program full dengan 2 sesi terapi per hari",
    },
    {
      title: "Half Day Program",
      days: ["Senin - Jumat"],
      time: "08:00 - 12:00",
      description: "Program setengah hari dengan 1 sesi terapi",
    },
    {
      title: "Therapy Only",
      days: ["Senin - Sabtu (by appointment)"],
      time: "Flexible",
      description: "Terapi individual tanpa kelas (speech, OT, behavior)",
    },
  ],

  caregiverInfo: {
    ratio: "1:3 (1 teacher untuk maksimal 3 anak)",
    qualifications: [
      "Sarjana Pendidikan Luar Biasa (S.Pd PLB)",
      "Sertifikat terapi (speech therapy, OT, ABA, Sensory Integration)",
      "Pengalaman menangani ABK minimal 3 tahun",
      "Terlatih behavior management & crisis intervention",
      "Terapis berlisensi (Sp, OT, Psikolog)",
    ],
    description:
      "Tim kami terdiri dari guru pendidikan khusus, terapis wicara, okupasi terapis, shadow teacher, dan psikolog anak. Setiap anggota tim passionate, sabar, dan berkomitmen untuk membantu setiap anak mencapai potensi terbaiknya.",
  },

  pricing: [
    {
      name: "Full Day Program",
      price: "Rp 6.500.000",
      period: "per bulan",
      features: [
        "Senin - Jumat (08:00-15:00)",
        "Individual Education Plan (IEP)",
        "2 sesi terapi per hari",
        "2x makan + 2x snack",
        "Learning materials & sensory toys",
        "Progress report bulanan",
        "Monthly parent conference",
        "Home program guidance",
      ],
      recommended: true,
    },
    {
      name: "Half Day Program",
      price: "Rp 4.500.000",
      period: "per bulan",
      features: [
        "Senin - Jumat (08:00-12:00)",
        "Individual Education Plan (IEP)",
        "1 sesi terapi per hari",
        "1x snack",
        "Learning materials",
        "Progress report bulanan",
        "Home program guidance",
      ],
    },
    {
      name: "Therapy Only",
      price: "Rp 350.000 - 500.000",
      period: "per sesi",
      features: [
        "Speech therapy (60 menit)",
        "Occupational therapy (60 menit)",
        "Behavior therapy (60 menit)",
        "Assessment & progress notes",
        "Consultation dengan therapist",
        "Home program recommendation",
      ],
    },
    {
      name: "Assessment Fee",
      price: "Rp 2.000.000",
      period: "sekali bayar",
      features: [
        "Comprehensive assessment (3 sesi)",
        "IEP development",
        "Therapy recommendation",
        "Detailed report",
        "Parent counseling",
      ],
    },
  ],

  gallery: [...getSampleImages(1920, 1080, 8)],

  faqs: [
    {
      question: "Anak dengan kondisi apa saja yang bisa diterima?",
      answer:
        "Kami menerima anak dengan berbagai kebutuhan khusus: Autism Spectrum Disorder (ASD), ADHD, Speech Delay, Cerebral Palsy ringan-sedang, Down Syndrome, Learning Disability, Sensory Processing Disorder, Global Developmental Delay. Untuk kondisi spesifik, silakan konsultasi terlebih dahulu.",
    },
    {
      question: "Apakah perlu assessment sebelum masuk?",
      answer:
        "Ya, setiap anak akan menjalani comprehensive assessment (3 sesi) untuk mengetahui kemampuan, kebutuhan, dan therapy goals. Hasil assessment menjadi dasar pembuatan Individual Education Plan (IEP) yang disesuaikan untuk setiap anak.",
    },
    {
      question: "Berapa rasio guru dan anak di SERASI?",
      answer:
        "Kami menjaga rasio 1:3 (1 guru untuk maksimal 3 anak) untuk memastikan setiap anak mendapat perhatian personal yang maksimal. Untuk anak dengan behavioral challenges, tersedia shadow teacher 1:1.",
    },
    {
      question: "Apakah orang tua boleh menemani anak di kelas?",
      answer:
        "Di fase awal (adaptasi), orang tua boleh menemani dari parent observation room. Setelah anak mulai adaptasi, kami sarankan gradual separation agar anak belajar kemandirian. Namun, orang tua tetap bisa observasi kapan saja melalui one-way mirror.",
    },
    {
      question: "Berapa lama biasanya anak menunjukkan progress?",
      answer:
        "Progress berbeda untuk setiap anak tergantung kondisi, tingkat kebutuhan, dan konsistensi terapi. Biasanya mulai terlihat dalam 3-6 bulan dengan program intensif dan kolaborasi orang tua di rumah. Kami monitor progress tiap bulan dan adjust program jika diperlukan.",
    },
    {
      question: "Apakah terapi bisa dilakukan di luar jam sekolah?",
      answer:
        "Ya, kami menyediakan Therapy Only program yang bisa dijadwalkan fleksibel di luar jam sekolah, termasuk Sabtu. Cocok untuk anak yang sekolah reguler namun butuh terapi tambahan atau anak yang belum siap program full day.",
    },
    {
      question: "Bagaimana komunikasi dengan orang tua?",
      answer:
        "Kami sangat menekankan parent involvement. Ada daily communication book, monthly progress report, dan monthly parent-teacher conference. Kami juga provide parent training workshop dan konseling untuk mendukung orang tua.",
    },
    {
      question: "Apakah lulusan SERASI bisa masuk sekolah reguler?",
      answer:
        "Tergantung perkembangan anak. Jika anak menunjukkan kesiapan (akademik, behavior, sosial), kami akan memfasilitasi transisi ke sekolah reguler dengan shadow teacher jika diperlukan. Beberapa anak juga bisa lanjut ke sekolah inklusi atau SLB sesuai rekomendasi tim.",
    },
  ],

  testimonials: [
    {
      name: "Ibu Ratna Dewi",
      role: "Ibu dari Bima (ASD, 5 tahun)",
      rating: 5,
      comment:
        "Alhamdulillah Bima sudah banyak progress sejak di SERASI. Dari yang non-verbal sekarang sudah bisa minta menggunakan kata-kata sederhana. Teacher dan therapist-nya sabar dan profesional. Kami sebagai orang tua juga dapat support dan guidance yang sangat membantu.",
    },
    {
      name: "Bapak Andi Wijaya",
      role: "Ayah dari Keyla (ADHD, 6 tahun)",
      rating: 5,
      comment:
        "SERASI adalah tempat terbaik untuk Keyla. Program IEP-nya jelas dan terukur. Keyla yang tadinya impulsive dan sulit fokus sekarang sudah bisa mengikuti instruksi dan duduk tenang lebih lama. Behavioral therapy-nya sangat efektif!",
    },
    {
      name: "Ibu Sari Kusuma",
      role: "Ibu dari Dira (Speech Delay, 4 tahun)",
      rating: 5,
      comment:
        "Speech therapist-nya luar biasa! Dira yang tadinya hanya bisa beberapa kata, sekarang kosakatanya sudah 100+ dan mulai membuat kalimat. Fasilitasnya juga lengkap. Terima kasih SERASI, Dira jadi lebih percaya diri!",
    },
  ],

  whatsapp: {
    number: "6281234567890",
    message:
      "Halo Admin Amanah Edu Centre, saya tertarik konsultasi dan mendaftarkan anak saya ke program SERASI. Mohon info lebih lanjut.",
  },

  // SEO
  metaTitle: "SERASI - Sekolah Inklusi ABK Terbaik Jakarta | Amanah Edu Centre",
  metaDescription:
    "Sekolah inklusi untuk anak berkebutuhan khusus (ABK) dengan terapi terintegrasi, IEP, dan guru bersertifikat PLB. Program untuk autism, ADHD, speech delay, dan lainnya. Konsultasi gratis!",
  ogImage: "/img/programs/serasi/og-image.jpg",
  keywords: [
    "sekolah ABK",
    "sekolah inklusi",
    "sekolah autism",
    "terapi anak berkebutuhan khusus",
    "sekolah ADHD",
    "speech therapy jakarta",
    "occupational therapy",
    "sekolah down syndrome",
    "pendidikan khusus",
    "special needs school",
    "serasi",
    "amanah edu centre",
  ],
};
