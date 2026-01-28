# TODO LIST: AMANAH EDU CENTRE

## FASE 1: PERSIAPAN KOMPONEN UNTUK HALAMAN PROGRAM

---

### 1.1 TypeScript Types & Data Structure

- [x] Buat TypeScript types untuk program data
  - [x] `shared/types/program.d.ts`
  - [x] Interface: `ProgramData`, `ProgramFeature`, `ProgramPricing`
  - [x] Interface: `TeacherProfile`, `ProgramSchedule`, `ProgramFAQ`
  - [x] Type untuk program categories: daycare, infant, toddler, preschool, kindergarten, serasi, homeschooling
- [x] Buat file data lokal untuk content (daycare)
  - [x] `app/data/programs/` directory
  - [x] JSON/TS files per program dengan typed content (`daycare.ts`)
  - [x] Centralized content management

### 1.2 Reusable Components (Vue 3 + TypeScript)

**Standards:** Gunakan `<script setup>`, TypeScript, Nuxt UI components, Tailwind CSS

- [x] `app/components/Program/Hero.vue`
  - [x] Props: `title`, `description`, `backgroundImage`, `videoUrl`
  - [x] Gunakan `<NuxtImg>` untuk optimized images
  - [x] Gunakan `UCard` atau `UContainer` dari Nuxt UI
  - [x] Responsive design (sm, md, lg, xl breakpoints)
  - [x] TypeScript: `defineProps<{ title: string; description: string; ... }>()`
- [x] `app/components/Program/Features.vue`
  - [x] Props: `features: ProgramFeature[]`
  - [x] Gunakan `UIcon` untuk feature icons
  - [x] Grid layout dengan Tailwind (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
  - [x] Animated entrance dengan transitions
- [x] `app/components/Program/Pricing.vue`
  - [x] Props: `pricing: ProgramPricing[]`
  - [x] Gunakan `UCard` untuk pricing cards
  - [x] Highlight recommended package
  - [x] Include CTA buttons
- [x] `app/components/Program/Gallery.vue`
  - [x] Props: `images: string[]`, `title?: string`
  - [x] Gunakan `<NuxtImg>` dengan lazy loading
  - [x] Implementasi lightbox/modal untuk full view
  - [x] Carousel atau grid layout
- [x] `app/components/Program/CTA.vue`
  - [x] Props: `whatsappNumber`, `whatsappMessage`, `registrationLink`
  - [x] Gunakan `UButton` dari Nuxt UI
  - [x] Icon dari `@nuxt/icon` (WhatsApp, phone, etc.)
  - [x] Sticky/floating button untuk mobile
- [x] `app/components/Program/FAQ.vue`
  - [x] Props: `faqs: ProgramFAQ[]`
  - [x] Gunakan `UAccordion` dari Nuxt UI
  - [x] Search/filter functionality (optional)
  - [x] Structured data untuk SEO (JSON-LD)
- [x] `app/components/Program/Schedule.vue`
  - [x] Props: `schedule: ProgramSchedule`
  - [x] Gunakan `UCard` untuk schedule items
  - [x] Responsive table/calendar view
  - [x] Day/week/month view options (simple implementation)
- [ ] `app/components/Program/Teacher.vue`
  - [ ] Props: `teacher: TeacherProfile`
  - [ ] Gunakan `UAvatar` untuk photo
  - [ ] Display qualifications, experience
  - [ ] Social media links (optional)
- [ ] `app/components/Program/Testimonial.vue`
  - [ ] Props: `testimonials: Testimonial[]`
  - [ ] Carousel/slider layout
  - [ ] Rating stars dengan `UIcon`
  - [ ] Avatar + name + role

### 1.3 Component Testing (Vitest + @vue/test-utils)

- [x] Vitest configured (existing)
- [x] Test structure setup in `test/` directory
- [ ] Create test file: `test/nuxt/components.program.test.ts`
- [ ] Test setiap component:
  - [ ] Props rendering
  - [ ] User interactions (clicks, hovers)
  - [ ] Conditional rendering
  - [ ] Emitted events
  - [ ] Accessibility (a11y)
- [ ] Coverage target: >80% untuk components
- [ ] Run: `bun run test test/nuxt/components.program.test.ts`

### 1.4 Assets & Content Preparation

- [ ] Optimasi aset visual
  - [ ] Foto untuk setiap program (WebP format recommended)
  - [ ] Video promosi (optimized, compressed)
  - [ ] Icons dari `@nuxt/icon` (collection: uil, heroicons)
  - [ ] Ilustrasi (SVG format preferred)
  - [ ] Simpan di `public/img/programs/`
- [ ] Persiapkan konten teks (typed)
  - [ ] File data: `app/data/programs/daycare.ts`, `infant-class.ts`, dll
  - [ ] Deskripsi masing-masing program
  - [ ] Benefit & features (array of objects)
  - [ ] FAQ (array dengan question & answer)
  - [ ] Informasi pricing (structured data)
  - [ ] Teacher profiles
  - [ ] Schedule information

## FASE 2: HALAMAN PROGRAM STATIS

---

**Note:** Halaman statis dengan content dari file data lokal (TypeScript/JSON).
**Standards:** Vue 3 `<script setup>`, TypeScript, Nuxt UI, SEO optimization, responsive design.

### 2.1 Early Childhood Programs (0-4 tahun)

#### 2.1.1 Daycare (0-2 tahun)

- [x] File: `app/pages/program/daycare.vue`
- [x] Import content dari `app/data/programs/daycare.ts`
- [x] Implementasi komponen:

  ```vue
  <script setup lang="ts">
  import type { ProgramData } from "~~/shared/types/program";
  import { daycareProgram } from "~/data/programs/daycare";

  // SEO metadata
  useSeoMeta({
    title: "Daycare Program - Amanah Edu Centre",
    description: "Program daycare untuk anak usia 0-2 tahun...",
    ogImage: "/img/programs/daycare-og.jpg",
  });
  </script>
  ```

- [x] Struktur halaman:
  - [x] `<ProgramHero>` - hero section dengan gambar/video
  - [x] `<ProgramFeatures>` - deskripsi & benefit
  - [x] Section: Fasilitas & kegiatan harian (custom dengan `UCard`)
  - [x] `<ProgramSchedule>` - jadwal operasional
  - [x] Section: Info pengasuh (rasio, kualifikasi)
  - [x] `<ProgramPricing>` - pricing & paket
  - [x] `<ProgramGallery>` - galeri foto/video
  - [x] Section: Testimonials (using existing `CardTestimonial`)
  - [x] `<ProgramFAQ>` - frequently asked questions
  - [x] `<ProgramCTA>` - floating/sticky CTA button
- [x] SEO optimization:
  - [x] `useSeoMeta()` dengan meta tags lengkap
  - [x] Structured data (Schema.org EducationalOrganization)
  - [x] Open Graph tags
  - [x] Twitter Card
  - [x] Canonical URL (default Nuxt)
- [x] Performance:
  - [x] Lazy loading images (`<NuxtImg>` dengan loading="lazy")
  - [x] Optimized image sizes dengan sizes attribute
  - [x] Page transitions: `pageTransition: { name: 'page', mode: 'out-in' }`
- [x] Responsiveness testing:
  - [x] Mobile (320px, 375px, 414px) - responsive grid implemented
  - [x] Tablet (768px, 1024px) - responsive grid implemented
  - [x] Desktop (1280px, 1440px, 1920px) - responsive grid implemented
  - [ ] Test di Chrome DevTools + real devices (manual testing required)

#### 2.1.2 Infant Class (1-2 tahun)

- [x] File: `app/pages/program/infant-class.vue`
- [x] Data: `app/data/programs/infant-class.ts`
- [x] Komponen:
  - [x] `<ProgramHero>`
  - [x] Section: Kegiatan Harian dengan Timeline
  - [x] Section: Aktivitas & pembelajaran terstruktur
  - [x] `<ProgramSchedule>`
  - [x] `<ProgramImageSection>` - Teacher info
  - [x] `<ProgramPricing>`
  - [x] `<ProgramGallery>`
  - [x] `<CardTestimonial>` - testimonial orang tua
  - [x] `<ProgramFAQ>`
  - [x] `<ProgramCTA>`
- [x] SEO: `useSeoMeta()` + structured data
- [x] Responsive testing (mobile, tablet, desktop)

#### 2.1.3 Toddler Class (2-3 tahun)

- [ ] File: `app/pages/program/toddler-class.vue`
- [ ] Data: `app/data/programs/toddler-class.ts`
- [ ] Komponen:
  - [ ] `<ProgramHero>`
  - [ ] Section: Kurikulum & metodologi
  - [ ] Section: Focus area (motorik, bahasa, sosial-emosional, kognitif)
  - [ ] Section: Aktivitas & pembelajaran (interactive cards)
  - [ ] `<ProgramSchedule>`
  - [ ] `<ProgramTeacher>`
  - [ ] `<ProgramPricing>`
  - [ ] `<ProgramGallery>`
  - [ ] `<ProgramTestimonial>`
  - [ ] `<ProgramFAQ>`
  - [ ] `<ProgramCTA>`
- [ ] SEO: `useSeoMeta()` + structured data
- [ ] Responsive testing (mobile, tablet, desktop)

### 2.2 Preschool & Kindergarten Programs (4-6 tahun)

#### 2.2.1 Pre-School (3-4 tahun)

- [ ] File: `app/pages/program/preschool.vue`
- [ ] Data: `app/data/programs/preschool.ts`
- [ ] Komponen:
  - [ ] `<ProgramHero>`
  - [ ] Section: Visi & misi program (card/banner)
  - [ ] Section: Kurikulum (tabs: nasional/internasional)
  - [ ] Section: Subject/mata pelajaran (grid dengan icons)
  - [ ] Section: Metode pembelajaran (timeline/steps)
  - [ ] Section: Kegiatan ekstrakurikuler (carousel)
  - [ ] `<ProgramSchedule>` - jadwal & kalender akademik
  - [ ] `<ProgramTeacher>` - teacher profile & kualifikasi
  - [ ] Section: Fasilitas kelas & playground (gallery + descriptions)
  - [ ] `<ProgramPricing>` - pricing & biaya pendaftaran
  - [ ] `<ProgramGallery>`
  - [ ] Section: Achievement & prestasi (badge/awards display)
  - [ ] `<ProgramTestimonial>`
  - [ ] `<ProgramFAQ>`
  - [ ] `<ProgramCTA>`
- [ ] SEO: `useSeoMeta()` + structured data (EducationalOrganization schema)
- [ ] Responsive testing

#### 2.2.2 Kindergarten (5-6 tahun)

- [ ] File: `app/pages/program/kindergarten.vue`
- [ ] Data: `app/data/programs/kindergarten.ts`
- [ ] Komponen:
  - [ ] `<ProgramHero>`
  - [ ] Section: Visi & misi program
  - [ ] Section: Kurikulum & persiapan SD
  - [ ] Section: Subject/mata pelajaran (interactive grid)
  - [ ] Section: Metode pembelajaran
  - [ ] Section: Program literasi & numerasi (highlighted)
  - [ ] Section: Kegiatan ekstrakurikuler
  - [ ] `<ProgramSchedule>`
  - [ ] `<ProgramTeacher>`
  - [ ] Section: Fasilitas
  - [ ] `<ProgramPricing>`
  - [ ] `<ProgramGallery>`
  - [ ] Section: Achievement
  - [ ] `<ProgramTestimonial>`
  - [ ] Section: Persiapan masuk SD (readiness checklist)
  - [ ] `<ProgramFAQ>`
  - [ ] `<ProgramCTA>`
- [ ] SEO: `useSeoMeta()` + structured data
- [ ] Responsive testing

### 2.3 Special Programs

#### 2.3.1 Serasi (Sekolah Ramah Inklusi)

- [ ] File: `app/pages/program/serasi.vue`
- [ ] Data: `app/data/programs/serasi.ts`
- [ ] Komponen:
  - [ ] `<ProgramHero>` - emphasized inclusive education
  - [ ] Section: Apa itu pendidikan inklusi (info cards)
  - [ ] Section: Visi & misi program
  - [ ] Section: Jenis kebutuhan khusus (dengan icons/badges)
  - [ ] Section: Pendekatan & metodologi khusus (detailed cards)
  - [ ] Section: Terapis & shadow teacher (team grid)
  - [ ] Section: Individual Education Plan (IEP) - process diagram
  - [ ] Section: Fasilitas khusus & sarana pendukung (gallery + descriptions)
  - [ ] Section: Program terapi terintegrasi (timeline)
  - [ ] `<ProgramSchedule>` - jadwal & kurikulum adaptif
  - [ ] `<ProgramTeacher>` - teacher & therapist profiles
  - [ ] `<ProgramPricing>` - flexible pricing packages
  - [ ] Section: Success stories (testimonials + case studies)
  - [ ] `<ProgramGallery>`
  - [ ] Section: Panduan orang tua (downloadable resources)
  - [ ] `<ProgramFAQ>` - extensive FAQ
  - [ ] `<ProgramCTA>` - konsultasi gratis emphasis
- [ ] SEO: `useSeoMeta()` + structured data (SpecialEducation schema)
- [ ] Accessibility: WCAG 2.1 AA compliance (extra important)
- [ ] Responsive testing

#### 2.3.2 HomeSchooling (7-18 tahun)

- [ ] File: `app/pages/program/homeschooling.vue`
- [ ] Data: `app/data/programs/homeschooling.ts`
- [ ] Komponen:
  - [ ] `<ProgramHero>` - flexibility & personalization emphasis
  - [ ] Section: Apa itu homeschooling & kelebihannya (benefits grid)
  - [ ] Section: Legalitas & ijazah (trust badges)
  - [ ] Section: Level tabs (SD, SMP, SMA) - interactive switching
  - [ ] Section: Kurikulum (multiple options)
  - [ ] Section: Metode pembelajaran (online, offline, hybrid) - comparison
  - [ ] Section: Jadwal fleksibel (calendar visualization)
  - [ ] `<ProgramTeacher>` - tutor profiles & kualifikasi
  - [ ] Section: Materi & resources (downloadable content list)
  - [ ] Section: Assessment & evaluasi (process flowchart)
  - [ ] Section: Ujian & sertifikasi (official badges)
  - [ ] Section: Ekstrakurikuler & kegiatan sosial (photo grid)
  - [ ] `<ProgramPricing>` - per semester/year pricing
  - [ ] `<ProgramGallery>` - kegiatan gallery
  - [ ] Section: Success stories & alumni (testimonials + achievements)
  - [ ] `<ProgramFAQ>`
  - [ ] `<ProgramCTA>` - konsultasi gratis
- [ ] SEO: `useSeoMeta()` + structured data (EducationalOrganization schema)
- [ ] Responsive testing

### 2.4 Navigation & Program Directory

- [ ] File: `app/pages/program/index.vue`
  - [ ] Import all program data types
  - [ ] Grid layout dengan `UCard` untuk program cards
  - [ ] Filter by category (Early Childhood, School, Special)
    - [ ] Use `USelectMenu` atau custom filter buttons
    - [ ] Client-side filtering dengan `computed`
  - [ ] Search functionality (optional)
  - [ ] Quick links ke masing-masing program
  - [ ] SEO: `useSeoMeta()` untuk directory page
- [ ] Update navigation component
  - [x] File: `app/components/NavBar.vue` (exists)
  - [ ] Tambahkan dropdown menu "Program"
  - [ ] Gunakan `UDropdown` dari Nuxt UI
  - [ ] Grouped links (Early Childhood, School, Special)
  - [ ] Icons untuk setiap program
  - [ ] Highlight active program page
- [ ] Breadcrumb component
  - [ ] File: `app/components/Breadcrumb.vue`
  - [ ] Dynamic breadcrumb based on route
  - [ ] Gunakan `UBreadcrumb` dari Nuxt UI
  - [ ] Schema.org BreadcrumbList structured data
  - [ ] Add to all program pages

## FASE 3: LMS (LEARNING MANAGEMENT SYSTEM)

---

**Standards:** Nuxt 4 + TypeScript, Drizzle ORM, Pinia stores, nuxt-auth-utils, structured logging

### 3.1 LMS Infrastructure & Architecture

#### 3.1.1 TypeScript Types from Backend API

**Note:** Database & backend logic dihandle oleh ElysiaJS backend terpisah (https://api.lkpamanaheducentre.id)

- [x] OpenAPI types auto-generated
  - [x] File: `shared/types/openapi.d.ts`
  - [x] Command: `bun run gen:openapi` (runs on dev start)
  - [x] Types untuk Course, Module, Lesson, Enrollment, Progress, dll
  - [ ] Ensure types up-to-date dengan backend schema

#### 3.1.2 API Proxy Layer (Nuxt Server Routes)

**Purpose:** Proxy requests ke backend ElysiaJS API untuk authentication, logging, dan error handling
**Backend:** https://api.lkpamanaheducentre.id (ElysiaJS)

- [x] Course APIs (existing)
  - [x] `server/api/course/list.get.ts` - proxy ke backend `/courses`
  - [x] `server/api/course/[id].get.ts` - proxy ke backend `/courses/{id}`
  - [x] `server/api/course/curriculum.get.ts` - proxy curriculum data
  - [ ] Add logging untuk API calls
  - [ ] Add error handling & retry logic

- [x] Lecture/Lesson APIs (existing)
  - [x] `server/api/lecture/index.get.ts` - proxy lecture data
  - [ ] Update ke LMS lesson endpoints
  - [ ] Add progress tracking proxy

- [x] Authentication APIs (existing)
  - [x] `server/api/auth/login.post.ts`
  - [x] `server/api/auth/register.post.ts`
  - [x] `server/api/auth/google.get.ts`
  - [x] Session management dengan `nuxt-auth-utils`

- [ ] LMS-specific proxy endpoints
  - [ ] `server/api/lms/enroll.post.ts` - enrollment proxy
  - [ ] `server/api/lms/progress/[courseId].get.ts` - progress proxy
  - [ ] `server/api/lms/progress/update.post.ts` - update progress
  - [ ] `server/api/lms/assignments/[id].get.ts` - assignment proxy
  - [ ] `server/api/lms/assignments/submit.post.ts` - submit assignment
  - [ ] `server/api/lms/quizzes/[id].get.ts` - quiz proxy
  - [ ] `server/api/lms/quizzes/[id]/submit.post.ts` - submit quiz
  - [ ] `server/api/lms/certificates/[courseId].get.ts` - certificate proxy

**API Proxy Standards:**

- [x] Use `apiFetch` helper dari `server/utils/api.ts`
- [x] Structured logging dengan `withEventLogger`
- [ ] Authentication forwarding (JWT token dari session)
- [ ] Input validation dengan Zod (before proxying)
- [ ] Error handling & user-friendly messages
- [x] Trace ID included in all logs (auto via middleware)

#### 3.1.3 TypeScript Types & Interfaces

- [x] OpenAPI types (auto-generated)
  - [x] File: `shared/types/openapi.d.ts`
  - [x] Includes: Course, Module, Lesson, Enrollment, Progress, etc.
- [ ] Additional frontend-specific types
  - [ ] `shared/types/lms.d.ts` (UI-specific types)

  ```typescript
  export interface Course {
    id: string;
    title: string;
    description: string;
    category: "tpq" | "lkp";
    level?: string;
    instructor: InstructorData;
    thumbnail: string;
    duration: number; // in minutes
    totalLessons: number;
    price?: number;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
  }

  export interface Module {
    id: string;
    courseId: string;
    title: string;
    description: string;
    order: number;
    lessons: Lesson[];
  }

  export interface Lesson {
    id: string;
    moduleId: string;
    title: string;
    content: string;
    videoUrl?: string;
    duration: number;
    order: number;
    resources: LessonResource[];
  }

  export interface Enrollment {
    id: string;
    userId: string;
    courseId: string;
    enrolledAt: Date;
    completedAt?: Date;
    progress: number; // 0-100
  }

  export interface LessonProgress {
    id: string;
    userId: string;
    lessonId: string;
    completed: boolean;
    timeSpent: number; // in seconds
    lastAccessedAt: Date;
  }

  // Assignment, Quiz, Submission, Grade, Certificate interfaces
  // ...
  ```

#### 3.1.4 Store Management (Pinia + Persistence)

- [x] `app/stores/course.ts` (existing)
  - [x] Basic course state management
  - [ ] Refactor/rename ke `lms-course.ts` (optional)
  - [ ] Add LMS-specific actions (enrollment, progress)

  ```typescript
  import { defineStore } from "pinia";
  import type { Course } from "~~/shared/types/lms";

  export const useLMSCourseStore = defineStore("lms-course", {
    state: () => ({
      courses: [] as Course[],
      selectedCourse: null as Course | null,
      loading: false,
      error: null as string | null,
    }),

    actions: {
      async fetchCourses(filters?: { category?: string; level?: string }) {
        this.loading = true;
        try {
          const { data } = await useFetch("/api/lms/courses", { query: filters });
          this.courses = data.value || [];
        } catch (err) {
          this.error = err.message;
        } finally {
          this.loading = false;
        }
      },

      async fetchCourseDetail(id: string) {
        this.loading = true;
        try {
          const { data } = await useFetch(`/api/lms/courses/${id}`);
          this.selectedCourse = data.value;
        } catch (err) {
          this.error = err.message;
        } finally {
          this.loading = false;
        }
      },
    },

    persist: true, // Cache courses locally
  });
  ```

- [x] `app/stores/lecture.ts` (existing)
  - [x] Basic lecture/lesson state
  - [ ] Refactor/rename ke `lms-learning.ts` (optional)
  - [ ] Add: currentLesson, progress, completedLessons
  - [ ] Add actions: updateProgress, markComplete
  - [ ] Enable persistence
- [ ] `app/stores/lms-assignment.ts` (new)
  - [ ] State: assignments, submissions, grades
  - [ ] Actions: fetchAssignments, submitAssignment, fetchQuiz, submitQuiz
  - [ ] Persist: false (sensitive data)
- [ ] Unit tests untuk stores
  - [ ] File: `test/unit/stores.lms.test.ts`
  - [ ] Test: state initialization, actions, error handling
  - [ ] Mock $fetch calls
  - [ ] Coverage: >80%

### 3.2 LMS Components Development (Vue 3 + Nuxt UI + TypeScript)

**Standards:** `<script setup>`, TypeScript props, Nuxt UI components, Tailwind CSS, accessibility

#### 3.2.1 Course Discovery Components

- [x] `app/components/Card/Course.vue` (existing)
  - [x] Basic course card layout
  - [ ] Refactor/move ke `app/components/LMS/CourseCard.vue`
  - [ ] Add props typing: `course: Course`, `featured?: boolean`
  - [ ] Update dengan `UCard` dari Nuxt UI
  - [ ] Add hover effects, rating stars
  - [ ] Test: `test/nuxt/components.lms.test.ts`

- [x] `app/components/Card/CourseSquare.vue` (existing)
  - [x] Square variant course card
  - [ ] Merge dengan CourseCard atau keep as variant
- [ ] `app/components/LMS/CourseGrid.vue`
  - [ ] Props: `courses: Course[]`, `columns?: number`
  - [ ] Responsive grid layout (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
  - [ ] Empty state handling
  - [ ] Loading skeleton dengan `USkeleton`
- [ ] `app/components/LMS/CourseFilter.vue`
  - [ ] Props: `categories: string[]`, `levels: string[]`
  - [ ] Emit: `@filter-change`
  - [ ] Gunakan `USelectMenu` untuk dropdowns
  - [ ] Price range slider (optional)
  - [ ] Clear filters button
- [ ] `app/components/LMS/CourseSearch.vue`
  - [ ] Gunakan `UInput` dengan search icon
  - [ ] Debounced search (300ms)
  - [ ] Emit: `@search`
  - [ ] Clear button

#### 3.2.2 Course Detail Components

- [ ] `app/components/LMS/CourseHero.vue`
  - [ ] Props: `course: Course`
  - [ ] Large banner dengan course image/video
  - [ ] Title, instructor, rating, enrolled count
  - [ ] Breadcrumb navigation
  - [ ] Share buttons
- [ ] `app/components/LMS/CourseInfo.vue`
  - [ ] Props: `course: Course`
  - [ ] Tabs: Overview, Curriculum, Instructor, Reviews
  - [ ] Gunakan `UTabs` dari Nuxt UI
  - [ ] Description, learning outcomes, requirements
- [ ] `app/components/LMS/CourseCurriculum.vue`
  - [ ] Props: `modules: Module[]`
  - [ ] Accordion layout dengan `UAccordion`
  - [ ] Show lesson count, duration per module
  - [ ] Lock icon untuk unenrolled users
  - [ ] Progress indicator untuk enrolled users
- [ ] `app/components/LMS/CourseInstructor.vue`
  - [ ] Props: `instructor: InstructorData`
  - [ ] Avatar (`UAvatar`), name, title
  - [ ] Bio, courses taught, rating
  - [ ] Social media links
- [ ] `app/components/LMS/CourseReviews.vue`
  - [ ] Props: `reviews: Review[]`, `averageRating: number`
  - [ ] Rating summary with stars
  - [ ] Review list with pagination
  - [ ] Filter/sort options
  - [ ] Write review form (if enrolled)
- [ ] `app/components/LMS/CourseEnroll.vue`
  - [ ] Props: `course: Course`, `enrolled: boolean`
  - [ ] Enrollment button dengan `UButton`
  - [ ] Price display, payment info
  - [ ] Loading state during enrollment
  - [ ] Success/error notifications dengan `useToast()`
  - [ ] Redirect to lesson after enrollment

#### 3.2.3 Learning Interface Components

- [ ] `app/components/LMS/LessonPlayer.vue`
  - [ ] Props: `lesson: Lesson`, `videoUrl: string`
  - [ ] Video player dengan controls (play, pause, volume, fullscreen, speed)
  - [ ] Consider: video.js, Plyr, atau native HTML5 video
  - [ ] Track progress, emit `@time-update`, `@complete`
  - [ ] Prevent skip (optional) untuk certain courses
  - [ ] Quality selection, subtitle support
- [ ] `app/components/LMS/LessonSidebar.vue`
  - [ ] Props: `modules: Module[]`, `currentLessonId: string`
  - [ ] Sidebar navigation dengan `UAccordion`
  - [ ] Highlight current lesson
  - [ ] Show completion checkmarks
  - [ ] Collapsible untuk mobile
  - [ ] Search lessons
- [ ] `app/components/LMS/LessonContent.vue`
  - [ ] Props: `content: string` (HTML/Markdown)
  - [ ] Render formatted content
  - [ ] Support: text, images, code blocks, embeds
  - [ ] Markdown parser jika perlu (e.g., marked.js)
  - [ ] Responsive typography
- [ ] `app/components/LMS/LessonResources.vue`
  - [ ] Props: `resources: LessonResource[]`
  - [ ] List downloadable files
  - [ ] File type icons (`UIcon`)
  - [ ] Download links dengan tracking
  - [ ] File size display
- [ ] `app/components/LMS/LessonNotes.vue`
  - [ ] Props: `lessonId: string`
  - [ ] Textarea untuk student notes
  - [ ] Auto-save dengan debounce (1s)
  - [ ] Load saved notes from store/API
  - [ ] Rich text editor (optional, e.g., Tiptap)
- [ ] `app/components/LMS/ProgressBar.vue`
  - [ ] Props: `progress: number` (0-100)
  - [ ] Linear progress bar dengan `UProgress` atau custom
  - [ ] Show percentage text
  - [ ] Animated transitions
  - [ ] Color coding (red < 30%, yellow < 70%, green >= 70%)
- [ ] `app/components/LMS/NavigationButtons.vue`
  - [ ] Props: `prevLesson?: Lesson`, `nextLesson?: Lesson`
  - [ ] Prev/Next buttons dengan `UButton`
  - [ ] Disabled state jika tidak ada prev/next
  - [ ] Keyboard shortcuts (arrow keys)
  - [ ] Mark complete button

#### 3.2.4 Assignment & Quiz Components

- [ ] `app/components/LMS/AssignmentCard.vue`
  - [ ] Props: `assignment: Assignment`
  - [ ] Display: title, due date, status (pending/submitted/graded)
  - [ ] `UCard` dengan badge untuk status
  - [ ] Countdown timer untuk deadline
  - [ ] Click: navigate to assignment detail
- [ ] `app/components/LMS/AssignmentDetail.vue`
  - [ ] Props: `assignment: Assignment`
  - [ ] Display: instructions, requirements, attachments
  - [ ] Deadline countdown prominent
  - [ ] Grading rubric (if available)
  - [ ] Submission history
- [ ] `app/components/LMS/AssignmentSubmission.vue`
  - [ ] Props: `assignmentId: string`
  - [ ] Form: text input atau file upload
  - [ ] File upload dengan drag & drop
  - [ ] Validation: file type, size limits
  - [ ] Preview before submit
  - [ ] Submit button dengan loading state
  - [ ] Success notification dengan `useToast()`
- [ ] `app/components/LMS/QuizCard.vue`
  - [ ] Props: `quiz: Quiz`
  - [ ] Display: title, question count, time limit, attempts left
  - [ ] `UCard` dengan status badge
  - [ ] Start quiz button
  - [ ] Best score display (if multiple attempts)
- [ ] `app/components/LMS/QuizPlayer.vue`
  - [ ] Props: `quiz: Quiz`
  - [ ] Question navigation (numbered buttons)
  - [ ] Question display dengan options (radio/checkbox/text)
  - [ ] Timer countdown (if time limit)
  - [ ] Mark for review
  - [ ] Submit confirmation modal
  - [ ] Auto-submit on time out
- [ ] `app/components/LMS/QuizResults.vue`
  - [ ] Props: `quiz: Quiz`, `submission: QuizSubmission`
  - [ ] Score display (prominent)
  - [ ] Correct/incorrect answers review
  - [ ] Explanations untuk each question
  - [ ] Pass/fail indicator
  - [ ] Retake button (if attempts available)

#### 3.2.5 Dashboard Components

- [ ] `app/components/LMS/DashboardStats.vue`
  - [ ] Props: `stats: DashboardStats`
  - [ ] Grid layout (courses enrolled, completed, in progress)
  - [ ] `UCard` untuk each stat
  - [ ] Icons (`UIcon`) untuk visual
  - [ ] Animated numbers (count up effect)
- [ ] `app/components/LMS/EnrolledCourses.vue`
  - [ ] Props: `courses: Course[]`
  - [ ] List dengan `<CourseCard>` atau simplified version
  - [ ] Progress bar untuk each course
  - [ ] "Continue Learning" button
  - [ ] Sort: by progress, by recent activity
- [ ] `app/components/LMS/RecentActivity.vue`
  - [ ] Props: `activities: Activity[]`
  - [ ] Timeline layout
  - [ ] Activity types: lesson completed, quiz taken, assignment submitted
  - [ ] Relative timestamps ("2 hours ago")
  - [ ] Link to activity detail
- [ ] `app/components/LMS/UpcomingDeadlines.vue`
  - [ ] Props: `deadlines: Deadline[]`
  - [ ] List sorted by date (soonest first)
  - [ ] Countdown timers
  - [ ] Urgent indicator (< 24 hours)
  - [ ] Quick action buttons
- [ ] `app/components/LMS/Achievements.vue`
  - [ ] Props: `achievements: Achievement[]`
  - [ ] Badge grid layout
  - [ ] Locked/unlocked states
  - [ ] Tooltip dengan achievement details
  - [ ] Progress untuk in-progress achievements
- [ ] `app/components/LMS/Certificates.vue`
  - [ ] Props: `certificates: Certificate[]`
  - [ ] Grid atau list dengan certificate previews
  - [ ] Download PDF button
  - [ ] Share to social media
  - [ ] Verification code display

#### 3.2.6 Component Testing

- [ ] File: `test/nuxt/components.lms.test.ts`
- [ ] Test each component:
  - [ ] Props rendering
  - [ ] User interactions (clicks, input, form submit)
  - [ ] Events emitted
  - [ ] Conditional rendering
  - [ ] Loading states
  - [ ] Error states
- [ ] Mock: $fetch, stores, user session
- [ ] Coverage target: >80%
- [ ] Run: `bun run test test/nuxt/components.lms.test.ts`

### 3.3 LMS Pages Development (File-based Routing + Authentication)

**Standards:** Vue 3 `<script setup>`, TypeScript, `useFetch`, middleware auth, SEO optimization

#### 3.3.1 Main LMS Pages

- [x] `app/pages/lms/index.vue` - LMS home/dashboard (exists)
  - [x] Page created
  - [ ] Add auth middleware: `definePageMeta({ middleware: 'auth' })`
  - [ ] Implement dashboard components:
    - [ ] `<DashboardStats>` - overview stats
    - [ ] `<EnrolledCourses>` - courses in progress
    - [ ] `<RecentActivity>` - latest activities
    - [ ] `<UpcomingDeadlines>` - assignments/quizzes due
    - [ ] `<Achievements>` - badges earned
  - [ ] Add course recommendations
  - [ ] Add SEO: `useSeoMeta()`
  - [ ] Add loading states
  - [ ] Add empty state
- [ ] `app/pages/lms/courses.vue` - Course catalog (create new or rename existing)
  - [ ] List semua courses (TPQ, LKP)
  - [ ] Components:
    - [ ] `<CourseSearch>` - search functionality
    - [ ] `<CourseFilter>` - filter by category, level, price
    - [ ] `<CourseGrid>` - responsive grid layout
  - [ ] Pagination atau infinite scroll
  - [ ] Sort options (popularity, rating, newest, price)
  - [ ] Filter state management (URL query params)
  - [ ] SEO: Static meta tags
- [ ] `app/pages/lms/my-courses.vue` - My enrolled courses (create new)
  - [ ] Auth required: `definePageMeta({ middleware: 'auth' })`
  - [ ] Fetch dari store atau API: `/api/lms/enrollments`
  - [ ] Tabs: "In Progress", "Completed", "All"
  - [ ] Components:
    - [ ] `<EnrolledCourses>` dengan filter
    - [ ] `<ProgressBar>` untuk each course
  - [ ] "Continue Learning" quick action
  - [ ] Sort: by recent activity, by progress, by name
  - [ ] SEO: `useSeoMeta()` dengan noindex (private page)

**Note: Authentication pages already exist:**

- [x] `app/pages/lms/login.vue` - Login page
- [x] `app/pages/lms/signup.vue` - Signup page

#### 3.3.2 Course Detail & Learning Pages

- [x] `app/pages/lms/course/[id].vue` - Course detail page (exists)
  - [x] Page created with dynamic route
  - [x] Fetch course detail from API
  - [ ] Check enrollment status (from user session)
  - [ ] Implement/refactor components:
    - [ ] `<CourseHero>` - course overview
    - [ ] `<CourseInfo>` - tabs (overview, curriculum, instructor)
    - [ ] `<CourseCurriculum>` - expandable modules
    - [ ] `<CourseInstructor>` - instructor profile
    - [ ] `<CourseReviews>` - student reviews
    - [ ] `<CourseEnroll>` - enrollment CTA
  - [ ] Add sticky sidebar
  - [ ] Add related courses section
  - [ ] Add SEO: Dynamic `useSeoMeta()`
  - [ ] Add structured data: Course schema
  - [ ] Add share buttons
- [x] `app/pages/lms/lecture/[id].vue` - Learning interface (exists)
  - [x] Page created with dynamic route
  - [ ] Rename/refactor to `/lms/learn/[courseId]/[lessonId].vue` (optional)
  - [ ] Add auth middleware: `definePageMeta({ middleware: 'auth' })`
  - [ ] Check enrollment: redirect if not enrolled
  - [ ] Update to support courseId + lessonId params
  - [ ] Layout: 2-column (sidebar + content) atau fullscreen
  - [ ] Components:
    - [ ] `<LessonSidebar>` - curriculum navigation (collapsible)
    - [ ] `<LessonPlayer>` - video player (main content)
    - [ ] `<LessonContent>` - text/rich content
    - [ ] `<LessonResources>` - downloadable files
    - [ ] `<LessonNotes>` - student notes section
    - [ ] `<NavigationButtons>` - prev/next lesson
    - [ ] `<ProgressBar>` - course progress (sticky top)
  - [ ] Auto-save progress on video watch
  - [ ] Mark lesson complete functionality
  - [ ] Keyboard shortcuts: Space (play/pause), Arrow keys (prev/next)
  - [ ] Fullscreen mode untuk video
  - [ ] SEO: `useSeoMeta()` dengan noindex (learning page)

#### 3.3.3 Assignment & Quiz Pages

- [ ] `app/pages/lms/assignment/[id].vue` - Assignment detail & submission
  - [ ] Auth required
  - [ ] Check enrollment untuk course terkait
  - [ ] Dynamic route: `assignmentId`
  - [ ] Fetch: `useFetch("/api/lms/assignments/{id}")`
  - [ ] Components:
    - [ ] `<AssignmentDetail>` - instructions & requirements
    - [ ] `<AssignmentSubmission>` - submission form
  - [ ] Deadline countdown (prominent)
  - [ ] Show previous submissions (if resubmit allowed)
  - [ ] Grading rubric display
  - [ ] Submit confirmation modal
  - [ ] Success notification after submit
  - [ ] SEO: noindex
- [ ] `app/pages/lms/quiz/[id].vue` - Quiz taking interface
  - [ ] Auth required
  - [ ] Check enrollment
  - [ ] Check attempts left
  - [ ] Dynamic route: `quizId`
  - [ ] Fetch: `useFetch("/api/lms/quizzes/{id}")`
  - [ ] Components:
    - [ ] `<QuizPlayer>` - quiz interface
    - [ ] Timer (if time limit)
  - [ ] Prevent browser back during quiz
  - [ ] Confirm before leaving page (unsaved answers)
  - [ ] Auto-submit on timeout
  - [ ] Submit confirmation modal
  - [ ] Redirect to results after submit
  - [ ] SEO: noindex
- [ ] `app/pages/lms/quiz/[id]/result.vue` - Quiz results page
  - [ ] Auth required
  - [ ] Fetch submission: `useFetch("/api/lms/quizzes/{id}/submission")`
  - [ ] Components:
    - [ ] `<QuizResults>` - score & answer review
  - [ ] Show correct/incorrect answers
  - [ ] Explanations untuk each question
  - [ ] Pass/fail indicator
  - [ ] Retake button (if attempts left)
  - [ ] Back to course button
  - [ ] SEO: noindex

#### 3.3.4 Progress & Certificate Pages

- [ ] `app/pages/lms/progress/[courseId].vue` - Course progress detail
  - [ ] Auth required
  - [ ] Check enrollment
  - [ ] Dynamic route: `courseId`
  - [ ] Fetch: `useFetch("/api/lms/progress/{courseId}")`
  - [ ] Display:
    - [ ] Overall progress percentage (large, prominent)
    - [ ] Module-by-module breakdown
    - [ ] Completed lessons list
    - [ ] Time spent on course
    - [ ] Grades (assignments, quizzes)
    - [ ] Achievements earned
  - [ ] Progress chart/graph (optional)
  - [ ] Export progress report (PDF)
  - [ ] SEO: noindex
- [ ] `app/pages/lms/certificate/[courseId].vue` - Certificate display
  - [ ] Auth required
  - [ ] Check: course completed & passing grade
  - [ ] Dynamic route: `courseId`
  - [ ] Fetch: `useFetch("/api/lms/certificates/{courseId}")`
  - [ ] Display:
    - [ ] Certificate preview (image/PDF embed)
    - [ ] Student name, course name, completion date
    - [ ] Verification code
    - [ ] Instructor signature
  - [ ] Download PDF button
  - [ ] Share to social media (LinkedIn, Facebook, Twitter)
  - [ ] Print button
  - [ ] Verify certificate link (public)
  - [ ] SEO: noindex (private), but allow sharing via OG tags

### 3.4 Program-Specific LMS Implementation

#### 3.4.1 TPQ (Taman Pendidikan Al-Qur'an)

- [ ] Buat course structure untuk TPQ
  - [ ] Level: Iqra 1-6, Jilid 1-6, Al-Qur'an
  - [ ] Modul per jilid/level
  - [ ] Audio/video bacaan
- [ ] Fitur khusus TPQ
  - [ ] Audio recorder untuk menyetor bacaan
  - [ ] Murojaah/review tracker
  - [ ] Tajwid lessons
  - [ ] Hafalan surah tracker
- [ ] Konten TPQ
  - [ ] Upload materi iqra/jilid
  - [ ] Audio contoh bacaan
  - [ ] Video pembelajaran tajwid
  - [ ] Interactive exercises
- [ ] Dashboard TPQ
  - [ ] Progress per jilid
  - [ ] Hafalan tracker
  - [ ] Jadwal setoran
  - [ ] Achievement badges

#### 3.4.2 LKP/Bimbingan Belajar

- [ ] Buat course structure untuk LKP
  - [ ] Kategori: SD, SMP, SMA
  - [ ] Mata pelajaran per tingkat
  - [ ] Modul per topik
- [ ] Fitur khusus LKP
  - [ ] Bank soal & latihan
  - [ ] Try out/ujian simulasi
  - [ ] Rapor digital
  - [ ] Konsultasi dengan tutor (chat/video)
- [ ] Konten LKP
  - [ ] Materi pelajaran (teks, video, animasi)
  - [ ] Soal latihan
  - [ ] Pembahasan soal
  - [ ] Tips & trik
- [ ] Dashboard LKP
  - [ ] Progress per mata pelajaran
  - [ ] Nilai try out
  - [ ] Jadwal belajar
  - [ ] Performance analytics

### 3.5 LMS Features & Functionality

#### 3.5.1 Video Player Features

- [ ] Implementasi video player (Vimeo/YouTube/Self-hosted)
  - [ ] Play/pause, volume, fullscreen
  - [ ] Speed control (0.5x - 2x)
  - [ ] Quality selection
  - [ ] Subtitle support
  - [ ] Progress save & resume
  - [ ] Prevent skip (for certain courses)

#### 3.5.2 Interactive Features

- [ ] Discussion forum per course
- [ ] Live chat dengan instructor
- [ ] Q&A section
- [ ] Peer review system
- [ ] Study groups

#### 3.5.3 Notification & Reminder

- [ ] Email notification
  - [ ] Enrollment confirmation
  - [ ] New lesson available
  - [ ] Assignment deadline reminder
  - [ ] Grade notification
  - [ ] Certificate earned
- [ ] In-app notification
- [ ] WhatsApp notification (optional)

#### 3.5.4 Gamification

- [ ] Points system
- [ ] Badges & achievements
- [ ] Leaderboard
- [ ] Streak counter
- [ ] Rewards & prizes

#### 3.5.5 Analytics & Reporting

- [ ] Student analytics
  - [ ] Time spent learning
  - [ ] Completion rate
  - [ ] Quiz scores
  - [ ] Strong/weak areas
- [ ] Admin/Instructor dashboard
  - [ ] Student progress monitoring
  - [ ] Course statistics
  - [ ] Engagement metrics
  - [ ] Export reports

### 3.6 Testing & Quality Assurance (Vitest + @vue/test-utils)

**Standards:** Coverage >80%, organized tests, mock external dependencies

- [ ] Unit tests untuk stores
  - [ ] File: `test/unit/stores.lms-course.test.ts`
  - [ ] File: `test/unit/stores.lms-learning.test.ts`
  - [ ] File: `test/unit/stores.lms-assignment.test.ts`
  - [ ] Test: state initialization, actions, getters
  - [ ] Mock: $fetch calls dengan `vi.mock()`
  - [ ] Test error handling
  - [ ] Coverage: >80%
- [ ] Component tests untuk UI
  - [ ] File: `test/nuxt/components.lms.test.ts`
  - [ ] Mount components dengan `@vue/test-utils`
  - [ ] Test props, events, slots
  - [ ] Test user interactions (clicks, input)
  - [ ] Test conditional rendering
  - [ ] Mock: stores, composables
  - [ ] Coverage: >80%
- [ ] Integration tests untuk API
  - [ ] File: `test/nuxt/api.lms.test.ts`
  - [ ] Test API endpoints dengan mock data
  - [ ] Test authentication flows
  - [ ] Test error responses
  - [ ] Test validation (Zod schemas)
  - [ ] Mock: database queries, external APIs
- [ ] E2E tests untuk user flows
  - [ ] Setup: Consider Playwright atau Cypress
  - [ ] Test flows:
    - [ ] User registration → login → browse courses → enroll
    - [ ] Learning flow: watch lesson → mark complete → progress update
    - [ ] Assignment: view → upload file → submit → check status
    - [ ] Quiz: start → answer questions → submit → view results
    - [ ] Certificate: complete course → check grade → view/download certificate
  - [ ] Test on multiple browsers (Chrome, Firefox, Safari)
  - [ ] Test responsive layouts (mobile, tablet, desktop)
- [ ] Performance testing
  - [ ] Lighthouse CI integration
  - [ ] Target scores: Performance >90, Accessibility >95, Best Practices >90, SEO >90
  - [ ] Test: page load times, time to interactive, largest contentful paint
  - [ ] Test: API response times (<200ms for most endpoints)
  - [ ] Load testing dengan k6 atau Artillery (optional)
- [ ] Security testing
  - [ ] OWASP Top 10 checklist
  - [ ] Test: SQL injection, XSS, CSRF protection
  - [ ] Test: authentication & authorization (role-based access)
  - [ ] Test: rate limiting effectiveness
  - [ ] Dependency vulnerability scan: `bun audit`
- [ ] Accessibility testing (WCAG 2.1 AA)
  - [ ] Automated: axe-core, Lighthouse accessibility audit
  - [ ] Manual: keyboard navigation, screen reader testing
  - [ ] Test: color contrast, focus indicators, ARIA labels
  - [ ] Test: form labels, error messages

**Testing Commands:**

- Run all tests: `bun run test`
- Watch mode: `bun run test:watch`
- Coverage: `bun run test:coverage`
- Specific test: `bun run test test/unit/stores.lms-course.test.ts`
- UI mode: `bun run test --ui`

**Existing Infrastructure (Already Complete):**

- [x] `app/middleware/auth.ts` - Authentication middleware
- [x] `app/layouts/base.vue` - Base layout
- [x] `app/layouts/default.vue` - Default layout
- [x] `app/layouts/sidebar.vue` - Sidebar layout
- [x] `app/components/NavBar.vue` - Navigation component
- [x] `app/components/Footer.vue` - Footer component
- [x] `app/components/Card/Testimonial.vue` - Testimonial card
- [x] Testing setup dengan Vitest
- [x] Server utils: `server/utils/api.ts`, `server/utils/log.ts`, `server/utils/session.ts`

## FASE 4: INTEGRASI & OPTIMIZATION

---

### 4.1 Integration

- [ ] Payment gateway integration
  - [ ] Provider: Midtrans atau Xendit
  - [ ] Server API: `server/api/payment/create.post.ts`
  - [ ] Callback handler: `server/api/payment/callback.post.ts`
  - [ ] Components: `app/components/Payment/Gateway.vue`
  - [ ] Payment verification dengan webhook
  - [ ] Invoice generation (PDF)
  - [ ] Email notification after payment
  - [ ] Logging: scope "payment"
- [ ] WhatsApp Business API integration
  - [ ] Server utils: `server/utils/whatsapp.ts`
  - [ ] Auto-reply untuk inquiry
  - [ ] Notification templates (enrollment, deadlines, certificates)
  - [ ] Rate limiting untuk prevent spam
  - [ ] Opt-in/opt-out mechanism
- [ ] Google Analytics & Tag Manager
  - [ ] Install: `@nuxtjs/google-analytics` atau custom
  - [ ] Track: page views, events (enrollment, completion)
  - [ ] E-commerce tracking (course purchases)
  - [ ] Custom events: video watch time, quiz scores
  - [ ] Privacy-compliant (GDPR)
- [ ] Social media sharing
  - [ ] Open Graph tags (already in `useSeoMeta()`)
  - [ ] Twitter Card tags
  - [ ] Share buttons component: `app/components/Social/Share.vue`
  - [ ] Share: certificates, achievements ke LinkedIn/Facebook/Twitter

### 4.2 SEO & Marketing

- [ ] SEO optimization untuk semua pages
  - [ ] Dynamic `useSeoMeta()` dengan relevant keywords
  - [ ] Meta tags: title, description, keywords
  - [ ] Open Graph tags: og:title, og:description, og:image, og:url
  - [ ] Twitter Card tags
  - [ ] Canonical URLs
- [ ] Structured data (JSON-LD)
  - [ ] Schema.org types:
    - [ ] Course (untuk course pages)
    - [ ] EducationalOrganization (untuk program pages)
    - [ ] BreadcrumbList (untuk breadcrumbs)
    - [ ] Review/Rating (untuk testimonials)
  - [ ] Implement: `useSchemaOrg()` composable atau manual `<script type="application/ld+json">`
- [ ] Sitemap generation
  - [ ] Install: `@nuxtjs/sitemap`
  - [ ] Config: `nuxt.config.ts`
  - [ ] Include: all public pages (exclude private/auth pages)
  - [ ] Dynamic routes: programs, courses
  - [ ] Update frequency, priority
- [ ] Robots.txt
  - [ ] Already exists: `public/robots.txt`
  - [ ] Allow: public pages, sitemap
  - [ ] Disallow: admin, API, private pages (/lms/learn, /lms/my-courses, etc.)
- [ ] Blog/artikel untuk content marketing
  - [ ] Optional: Setup Nuxt Content module
  - [ ] Directory: `content/blog/`
  - [ ] Pages: `app/pages/blog/[...slug].vue`
  - [ ] Topics: pendidikan, tips belajar, success stories
  - [ ] SEO-optimized articles
- [ ] Landing pages untuk ads campaign
  - [ ] Custom pages: `app/pages/landing/[campaign].vue`
  - [ ] A/B testing setup (optional)
  - [ ] Conversion tracking
  - [ ] Fast loading (<2s LCP)

### 4.3 Performance Optimization

- [ ] Image optimization
  - [ ] Use `<NuxtImg>` everywhere (already using `@nuxt/image`)
  - [ ] Lazy loading: `loading="lazy"` attribute
  - [ ] Responsive images: `sizes` attribute
  - [ ] WebP format automatic conversion
  - [ ] Optimize source images before upload
  - [ ] CDN untuk image serving
- [ ] Code splitting & lazy loading
  - [ ] Automatic code splitting per route (Nuxt default)
  - [ ] Lazy load heavy components:
    ```typescript
    const HeavyComponent = defineAsyncComponent(() => import("~/components/Heavy.vue"));
    ```
  - [ ] Lazy load below-the-fold content
  - [ ] Tree-shaking (automatic dengan Vite)
- [ ] Caching strategy
  - [ ] Browser caching: static assets (images, fonts, CSS, JS)
  - [ ] Service Worker untuk offline caching (optional PWA)
  - [ ] API response caching (Redis/Memory cache)
  - [ ] Nuxt `useFetch` cache by default
  - [ ] CDN caching rules
- [ ] CDN setup
  - [ ] Provider: Cloudflare, AWS CloudFront, atau Vercel Edge
  - [ ] Cache: static assets, images, fonts
  - [ ] Edge functions untuk dynamic content (optional)
  - [ ] DDoS protection
- [ ] Lighthouse score optimization
  - [ ] Target: Performance >90, Accessibility >95, Best Practices >90, SEO >90
  - [ ] Run: `npx lighthouse <url> --view`
  - [ ] CI integration: Lighthouse CI
  - [ ] Fix issues:
    - [ ] Reduce unused JavaScript
    - [ ] Eliminate render-blocking resources
    - [ ] Serve images in next-gen formats
    - [ ] Properly size images
    - [ ] Minimize main-thread work

### 4.4 Security

- [ ] Authentication & authorization
  - [ ] Already using: `nuxt-auth-utils`
  - [ ] Session management: HTTP-only cookies
  - [ ] JWT tokens (if using external API)
  - [ ] Role-based access control (RBAC)
  - [ ] Middleware: `auth.ts` untuk protected routes
- [ ] Input validation & sanitization
  - [ ] Server-side: Zod schemas untuk all inputs
  - [ ] Client-side: Form validation
  - [ ] SQL injection protection (Drizzle ORM parameterized queries)
  - [ ] XSS protection: sanitize HTML content
  - [ ] CSRF protection: tokens, SameSite cookies
- [ ] Rate limiting
  - [ ] Server middleware: `server/middleware/rate-limit.ts`
  - [ ] Limit: API requests per IP/user
  - [ ] Strategy: sliding window, token bucket
  - [ ] Response: 429 Too Many Requests
  - [ ] Storage: Memory (simple) atau Redis (distributed)
- [ ] HTTPS enforcement
  - [ ] Redirect HTTP → HTTPS
  - [ ] HSTS header: `Strict-Transport-Security`
  - [ ] Secure cookies: `secure` flag
- [ ] Security headers
  - [ ] CSP (Content Security Policy)
  - [ ] X-Content-Type-Options: nosniff
  - [ ] X-Frame-Options: DENY
  - [ ] X-XSS-Protection: 1; mode=block
  - [ ] Referrer-Policy: no-referrer-when-downgrade
  - [ ] Implement: `server/middleware/security-headers.ts` or Nuxt config
- [ ] GDPR compliance (if applicable)
  - [ ] Cookie consent banner
  - [ ] Privacy policy page
  - [ ] Data retention policy
  - [ ] User data export/deletion features
  - [ ] Logging: redact sensitive data (already implemented)

### 4.5 Documentation

- [ ] API documentation (OpenAPI/Swagger)
  - [ ] Already generating types: `bun run gen:openapi`
  - [ ] Setup Swagger UI: `/api/_docs` route
  - [ ] Document: all API endpoints, request/response schemas
  - [ ] Examples untuk each endpoint
- [ ] Component documentation (Storybook)
  - [ ] Install: `@nuxtjs/storybook` (optional)
  - [ ] Stories: for reusable components
  - [ ] Props documentation
  - [ ] Usage examples
- [ ] User guide untuk LMS
  - [ ] How to enroll in course
  - [ ] How to watch lessons
  - [ ] How to submit assignments
  - [ ] How to take quizzes
  - [ ] How to download certificates
  - [ ] FAQ section
- [ ] Admin guide
  - [ ] How to manage courses
  - [ ] How to grade assignments
  - [ ] How to view analytics
  - [ ] How to manage users
- [ ] Developer documentation
  - [ ] Already exists: `README.md` (AI Development Rules)
  - [ ] Update: architecture decisions, patterns used
  - [ ] Add: setup instructions, deployment guide
  - [ ] API documentation reference

## FASE 5: DEPLOYMENT & MAINTENANCE

---

### 5.1 Deployment

- [ ] Setup production environment
  - [ ] Platform: NuxtHub, Cloudflare Pages, Vercel, atau VPS
  - [ ] Environment variables:
    - [ ] Setup `.env.production`
    - [ ] Store secrets: database URL, API keys, tokens
    - [ ] Never commit secrets to git
  - [ ] Database:
    - [ ] Production database setup (PostgreSQL/MySQL recommended)
    - [ ] Run migrations: `bun run drizzle-kit migrate`
    - [ ] Seed initial data
  - [ ] Domain & DNS
    - [ ] Configure domain
    - [ ] SSL certificate (auto with Cloudflare/Vercel)
- [ ] CI/CD pipeline
  - [ ] Git workflow: main branch → production
  - [ ] Platform options:
    - [ ] GitHub Actions (recommended)
    - [ ] GitLab CI/CD
    - [ ] Cloudflare Pages (auto-deploy)
  - [ ] Pipeline steps:
    - [ ] Install dependencies: `bun install`
    - [ ] Run linting: `bun run lint`
    - [ ] Run tests: `bun run test`
    - [ ] Build: `bun run build`
    - [ ] Deploy: platform-specific command
  - [ ] Auto-deploy on:
    - [ ] Push to main (production)
    - [ ] Push to develop (staging)
  - [ ] Manual approval for production (optional)
- [ ] Monitoring & logging
  - [ ] Error tracking: Sentry integration
    - [ ] Install: `@nuxtjs/sentry`
    - [ ] Track: runtime errors, API errors
    - [ ] Source maps upload
  - [ ] Application monitoring: New Relic, Datadog, atau self-hosted
  - [ ] Performance monitoring:
    - [ ] Already have: `@artmizu/nuxt-prometheus`
    - [ ] Metrics: request rate, response time, error rate
  - [ ] Log aggregation:
    - [ ] Winston logs to file/stream
    - [ ] Ship logs to: CloudWatch, LogDNA, Papertrail
    - [ ] Log retention policy
  - [ ] Uptime monitoring:
    - [ ] Service: UptimeRobot, Pingdom, StatusCake
    - [ ] Alert on downtime
  - [ ] Analytics dashboard:
    - [ ] Google Analytics for user behavior
    - [ ] Custom dashboard for business metrics
- [ ] Backup strategy
  - [ ] Database backups:
    - [ ] Automated daily backups
    - [ ] Retention: 30 days (minimum)
    - [ ] Test restore procedure
  - [ ] File backups (user uploads, certificates)
    - [ ] S3, Cloudflare R2, atau equivalent
    - [ ] Versioning enabled
  - [ ] Code backups:
    - [ ] Git repository (primary)
    - [ ] Mirror to secondary service (GitLab/Bitbucket)
- [ ] Disaster recovery plan
  - [ ] Incident response playbook
  - [ ] Rollback procedure:
    - [ ] Quick rollback to previous deployment
    - [ ] Database rollback (if schema changed)
  - [ ] Failover strategy (if multiple servers)
  - [ ] Contact list for emergency
  - [ ] Post-mortem template

### 5.2 Training & Onboarding

- [ ] Training untuk admin/staff
  - [ ] User management (add/edit/delete users)
  - [ ] Course management (create/edit courses, modules, lessons)
  - [ ] Content upload (videos, documents)
  - [ ] Assignment & quiz creation
  - [ ] Grading assignments
  - [ ] Viewing analytics & reports
  - [ ] Certificate generation
  - [ ] Technical support basics
- [ ] Training untuk instructor
  - [ ] Course creation workflow
  - [ ] Content best practices
  - [ ] Student interaction (Q&A, discussion)
  - [ ] Grading guidelines
  - [ ] Using instructor dashboard
  - [ ] Communication dengan students
- [ ] Onboarding flow untuk students
  - [ ] Welcome email with instructions
  - [ ] Tutorial video atau walkthrough
  - [ ] First-time user tour (in-app)
  - [ ] Help center dengan common questions
  - [ ] Sample course untuk practice

### 5.3 Maintenance & Updates

- [ ] Regular security updates
  - [ ] Dependency updates:
    - [ ] Weekly check: `bun update --latest`
    - [ ] Security audit: `bun audit`
    - [ ] Auto-update: Dependabot (GitHub) or Renovate
  - [ ] Framework updates:
    - [ ] Nuxt minor/patch updates (monthly)
    - [ ] Major updates (quarterly, with testing)
  - [ ] Security patches: apply immediately
- [ ] Feature updates based on feedback
  - [ ] Feedback collection:
    - [ ] In-app feedback form
    - [ ] User surveys (quarterly)
    - [ ] Support tickets analysis
  - [ ] Feature request tracking (GitHub Issues, Jira)
  - [ ] Prioritization: impact vs effort
  - [ ] Release schedule: monthly or bi-weekly
- [ ] Bug fixes
  - [ ] Bug reporting channel (email, form, issue tracker)
  - [ ] Triage: critical/high/medium/low
  - [ ] SLA for fixes:
    - [ ] Critical: 24 hours
    - [ ] High: 3 days
    - [ ] Medium: 1 week
    - [ ] Low: next release
  - [ ] Hotfix procedure for critical bugs
- [ ] Performance monitoring
  - [ ] Weekly review: Lighthouse scores, Core Web Vitals
  - [ ] Monthly review: analytics, user behavior
  - [ ] Identify bottlenecks: slow queries, heavy pages
  - [ ] Optimization sprints (quarterly)
- [ ] User support system
  - [ ] Support channels:
    - [ ] Email: support@amanaheducentre.id
    - [ ] WhatsApp: business account
    - [ ] In-app chat (optional: Intercom, Crisp)
  - [ ] Knowledge base/FAQ
  - [ ] Support ticket system (optional: Zendesk, Freshdesk)
  - [ ] Response time SLA:
    - [ ] Critical: 2 hours
    - [ ] Normal: 24 hours
  - [ ] Support hours: define working hours

---

NOTES:

- Prioritaskan fase sesuai kebutuhan bisnis
- Bisa dikerjakan parallel untuk beberapa tugas yang independen
- Review & testing di setiap fase sebelum lanjut ke fase berikutnya
- Dokumentasikan setiap progress untuk memudahkan maintenance
- Ikuti AI Development Rules di README.md untuk consistency
- Testing adalah critical: maintain >80% coverage
- Security first: validate semua inputs, protect semua sensitive data
- Performance matters: target Lighthouse score >90
