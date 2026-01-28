import { getSampleImage } from "~/utils/lorem";
import type { ProgramData } from "~~/shared/types/program";

// Export all program data
export { daycareProgram } from "./daycare";
export { infantProgram } from "./infant-class";
export { toddlerProgram } from "./toddler-class";
export { preschoolProgram } from "./preschool";
export { kindergartenProgram } from "./kindergarten";
export { serasiProgram } from "./serasi";
export { homeschoolingProgram } from "./homeschooling";

// Import for helper function
import { daycareProgram } from "./daycare";
import { infantProgram } from "./infant-class";
import { toddlerProgram } from "./toddler-class";
import { preschoolProgram } from "./preschool";
import { kindergartenProgram } from "./kindergarten";
import { serasiProgram } from "./serasi";
import { homeschoolingProgram } from "./homeschooling";

/**
 * Get program data by slug
 * @param slug - Program slug (e.g., "daycare", "infant-class", "serasi")
 * @returns Program data or undefined if not found
 */
export function getProgramBySlug(slug: string): ProgramData | undefined {
  const programMap: Record<string, ProgramData> = {
    daycare: daycareProgram,
    "infant-class": infantProgram,
    "toddler-class": toddlerProgram,
    preschool: preschoolProgram,
    kindergarten: kindergartenProgram,
    serasi: serasiProgram,
    homeschooling: homeschoolingProgram,
  };

  return programMap[slug];
}

/**
 * Get all programs as an array
 * @returns Array of all program data
 */
export function getAllPrograms(): ProgramData[] {
  return [
    daycareProgram,
    infantProgram,
    toddlerProgram,
    preschoolProgram,
    kindergartenProgram,
    serasiProgram,
    homeschoolingProgram,
  ];
}

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
  {
    id: "homeschooling",
    title: "Homeschooling",
    description: "Pendidikan fleksibel setara SD-SMP-SMA dengan ijazah resmi dan pembelajaran personalized.",
    image: getSampleImage(800, 600)!,
    href: "/program/homeschooling",
    ageRange: "7-18 tahun",
  },
];
