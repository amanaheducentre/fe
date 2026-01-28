import { getSampleImage } from "~/utils/lorem";

export interface ProgramPreview {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  ageRange: string;
}

export const programPreviews: ProgramPreview[] = [
  {
    id: "daycare",
    title: "Daycare",
    description: "Penitipan anak terpercaya dengan pengasuhan penuh kasih sayang dan stimulasi tumbuh kembang optimal.",
    image: getSampleImage(800, 600)!,
    href: "/program/daycare",
    ageRange: "0-2 tahun",
  },
  {
    id: "infant",
    title: "Infant Class",
    description:
      "Program pembelajaran untuk bayi dengan kurikulum yang menstimulasi perkembangan motorik dan kognitif.",
    image: getSampleImage(800, 600)!,
    href: "/program/infant-class",
    ageRange: "1-2 tahun",
  },
  {
    id: "toddler",
    title: "Toddler Class",
    description: "Kelas untuk balita dengan aktivitas bermain sambil belajar yang menyenangkan dan edukatif.",
    image: getSampleImage(800, 600)!,
    href: "/program/toddler-class",
    ageRange: "2-3 tahun",
  },
  {
    id: "preschool",
    title: "Pre-School",
    description: "Persiapan masuk TK dengan pembelajaran dasar akademis dan pengembangan karakter anak.",
    image: getSampleImage(800, 600)!,
    href: "/program/preschool",
    ageRange: "3-4 tahun",
  },
  {
    id: "kindergarten",
    title: "Kindergarten",
    description: "Program TK lengkap dengan kurikulum nasional dan internasional untuk persiapan SD.",
    image: getSampleImage(800, 600)!,
    href: "/program/kindergarten",
    ageRange: "5-6 tahun",
  },
  {
    id: "serasi",
    title: "Serasi",
    description: "Sekolah Ramah Inklusi untuk anak berkebutuhan khusus dengan pendampingan profesional.",
    image: getSampleImage(800, 600)!,
    href: "/program/serasi",
    ageRange: "Semua usia",
  },
];
