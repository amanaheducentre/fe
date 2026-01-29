<script setup lang="ts">
import {
  daycareProgram,
  infantProgram,
  toddlerProgram,
  preschoolProgram,
  kindergartenProgram,
  serasiProgram,
  homeschoolingProgram,
} from "~~/app/data/programs";
import type { ProgramData } from "~~/shared/types/program";

// Get route params
const route = useRoute();
const programName = route.params.name as string;

// Map program names to data
const programMap: Record<string, ProgramData> = {
  daycare: daycareProgram,
  "infant-class": infantProgram,
  "toddler-class": toddlerProgram,
  preschool: preschoolProgram,
  kindergarten: kindergartenProgram,
  serasi: serasiProgram,
  homeschooling: homeschoolingProgram,
};

// Get program data
const program = programMap[programName];

// If program not found, redirect to 404
if (!program) {
  throw createError({
    statusCode: 404,
    message: "Program not found",
  });
}

// SEO Meta Tags
useSeoMeta({
  title: program.metaTitle,
  description: program.metaDescription,
  ogTitle: program.metaTitle,
  ogDescription: program.metaDescription,
  ogImage: program.ogImage,
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: program.metaTitle,
  twitterDescription: program.metaDescription,
  twitterImage: program.ogImage,
});

// Page transition
definePageMeta({
  pageTransition: {
    name: "page",
    mode: "out-in",
  },
});

// Conditional rendering helpers
const hasFeatures = computed(() => program.features && program.features.length > 0);
const hasBenefits = computed(() => program.benefits && program.benefits.length > 0);
const hasFacilities = computed(
  () => program.facilities && program.facilities.items && program.facilities.items.length > 0,
);
const hasDailyActivities = computed(() => program.dailyActivities && program.dailyActivities.length > 0);
const hasSchedule = computed(() => program.schedule && program.schedule.length > 0);
const hasCaregiverInfo = computed(() => program.caregiverInfo && program.caregiverInfo.qualifications);
const hasPricing = computed(() => program.pricing && program.pricing.length > 0);
const hasGallery = computed(() => program.gallery && program.gallery.length > 0);
const hasFaqs = computed(() => program.faqs && program.faqs.length > 0);
const hasTestimonials = computed(() => program.testimonials && program.testimonials.length > 0);

// Initialize animations on mount
onMounted(() => {
  // Lazy loading animations
  const { observeElements } = useScrollAnimation();

  nextTick(() => {
    // Animate sections
    observeElements(".program-section");
    // Animate cards
    observeElements(".program-card");
    // Animate gallery images
    observeElements(".gallery-item");
    // Animate activity items
    observeElements(".activity-item");
  });
});
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="program-section">
      <ProgramHero
        :title="program.name"
        :tagline="program.tagline"
        :description="program.description"
        :age-range="program.ageRange"
        :hero-video="program.heroVideo || ''"
        :hero-image="program.heroImage"
        cta-text="Daftar Sekarang"
        cta-link="#contact"
        :theme-color="program.themeColor"
      />
    </section>

    <!-- Features Section -->
    <section v-if="hasFeatures" class="program-section">
      <ProgramFeatures
        title="Keunggulan Program"
        :features="program.features"
        :benefits="hasBenefits ? program.benefits : undefined"
        :image="hasGallery ? program.gallery[0] : undefined"
        image-position="right"
        :theme-color="program.themeColor"
        :use-secondary-color="true"
      />
    </section>

    <!-- Facilities Section with Image -->
    <section v-if="hasFacilities && hasGallery" class="program-section">
      <ProgramImageSection
        :title="program.facilities.title"
        :image="(program.gallery.length > 1 ? program.gallery[1] : program.gallery[0]) || ''"
        image-position="left"
        :features="program.facilities.items"
        background-color="bg-gray-50 dark:bg-gray-900"
        :theme-color="program.themeColor"
      />
    </section>

    <!-- Daily Activities with Image -->
    <section v-if="hasDailyActivities" class="program-section py-16 md:py-24 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- Daily Activities Timeline -->
          <div>
            <ProgramSectionTitle
              title="Kegiatan Harian"
              :theme-color="program.themeColor"
              :use-secondary-gradient="true"
              align="left"
              size="md"
            />

            <div class="space-y-4">
              <div
                v-for="(activity, index) in program.dailyActivities"
                :key="index"
                :class="['border-l-4 pl-4 py-2 activity-item', `border-${program.themeColor}-500`]"
              >
                <div class="flex items-center gap-2 mb-1">
                  <UIcon name="i-heroicons-clock" :class="`text-${program.themeColor}-500`" />
                  <span class="font-semibold text-gray-900 dark:text-white">
                    {{ activity.time }}
                  </span>
                </div>
                <p class="font-medium text-gray-800 dark:text-gray-200">
                  {{ activity.activity }}
                </p>
                <p v-if="activity.description" class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {{ activity.description }}
                </p>
              </div>
            </div>
          </div>

          <!-- Activity Image -->
          <div v-if="hasGallery && program.gallery.length > 2" class="lg:sticky lg:top-24">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl">
              <NuxtImg
                :src="program.gallery[2]"
                alt="Kegiatan Harian"
                class="w-full h-100 lg:h-150 object-cover"
                loading="lazy"
                sizes="sm:100vw md:50vw lg:50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Schedule Section -->
    <section v-if="hasSchedule" class="program-section">
      <ProgramSchedule
        title="Jadwal Operasional"
        :schedules="program.schedule"
        :image="hasGallery && program.gallery.length > 3 ? program.gallery[3] : undefined"
        :theme-color="program.themeColor"
        :use-secondary-color="true"
      />
    </section>

    <!-- Caregiver/Teacher Info Section -->
    <section v-if="hasCaregiverInfo" class="program-section py-16 md:py-24 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <ProgramSectionTitle
            title="Pengasuh & Pendidik Profesional"
            :description="program.caregiverInfo.description"
            :theme-color="program.themeColor"
            align="center"
            size="md"
          />

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
            <!-- Photo Section -->
            <div
              v-if="program.caregiverInfo.photo || (hasGallery && program.gallery.length > 4)"
              class="order-2 lg:order-1"
            >
              <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                <NuxtImg
                  :src="program.caregiverInfo.photo || program.gallery[4]"
                  alt="Pengasuh & Pendidik"
                  class="w-full h-100 lg:h-125 object-cover"
                  loading="lazy"
                  sizes="sm:100vw md:50vw lg:50vw"
                />
              </div>
            </div>

            <!-- Info Cards -->
            <div class="order-1 lg:order-2 space-y-6">
              <!-- Ratio Card -->
              <UCard class="program-card hover:shadow-xl transition-shadow">
                <div class="flex items-center gap-6">
                  <div
                    :class="[
                      'w-20 h-20 rounded-full flex items-center justify-center shrink-0',
                      `bg-${program.themeColor}-100 dark:bg-${program.themeColor}-900/30`,
                    ]"
                  >
                    <UIcon name="i-heroicons-user-group" :class="['text-4xl', `text-${program.themeColor}-600`]" />
                  </div>
                  <div>
                    <div :class="['text-4xl font-bold mb-1', `text-${program.themeColor}-600`]">
                      {{ program.caregiverInfo.ratio }}
                    </div>
                    <p class="text-gray-600 dark:text-gray-400 font-medium">Rasio Pengasuh:Anak</p>
                  </div>
                </div>
              </UCard>

              <!-- Qualifications Card -->
              <UCard class="program-card hover:shadow-xl transition-shadow">
                <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <UIcon name="i-heroicons-academic-cap" :class="`text-${program.themeColor}-600 text-2xl`" />
                  Kualifikasi Tim
                </h3>
                <ul class="space-y-3">
                  <li
                    v-for="(qual, index) in program.caregiverInfo.qualifications"
                    :key="index"
                    class="flex items-start gap-3"
                  >
                    <UIcon name="i-heroicons-check-circle" :class="`text-${program.themeColor}-500 shrink-0 mt-0.5`" />
                    <span class="text-gray-700 dark:text-gray-300">{{ qual }}</span>
                  </li>
                </ul>
              </UCard>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section v-if="hasPricing" class="program-section">
      <ProgramPricing
        title="Investasi Pendidikan"
        :pricing="program.pricing"
        :whatsapp-number="program.whatsapp.number"
        :whatsapp-message="program.whatsapp.message"
        :theme-color="program.themeColor"
      />
    </section>

    <!-- Gallery Section -->
    <section v-if="hasGallery" class="program-section">
      <ProgramGallery
        title="Galeri Foto"
        :images="program.gallery"
        :theme-color="program.themeColor"
        :use-secondary-color="true"
      />
    </section>

    <!-- Testimonials Section -->
    <section v-if="hasTestimonials" class="program-section py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <ProgramSectionTitle title="Testimoni Orang Tua" :theme-color="program.themeColor" align="center" size="md" />

        <div
          class="flex justify-center gap-3 sm:gap-4 p-2 pb-3 -mx-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent w-full program-card"
        >
          <CardTestimonial
            v-for="(testimonial, index) in program.testimonials"
            :key="index"
            :name="testimonial.name"
            :role="testimonial.role"
            :avatar="testimonial.avatar"
            :rating="testimonial.rating"
            :comment="testimonial.comment"
          />
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section v-if="hasFaqs" class="program-section">
      <ProgramFAQ
        title="Pertanyaan Umum"
        :faqs="program.faqs"
        :theme-color="program.themeColor"
        :use-secondary-color="true"
      />
    </section>

    <!-- Final CTA Section with Background -->
    <section class="program-section py-16 md:py-24 relative overflow-hidden">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <NuxtImg
          v-if="hasGallery && program.gallery.length > 5"
          :src="program.gallery[5]"
          alt="Background"
          class="w-full h-full object-cover"
          loading="lazy"
        />
        <div :class="['absolute inset-0', `bg-linear-to-br from-black/95 to-black/70`]" />
      </div>

      <div class="container mx-auto px-4 text-center relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">
          Siap Mendaftarkan Anak Anda di {{ program.name }}?
        </h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto text-white/90">
          Bergabunglah dengan program pembelajaran berkualitas yang dirancang khusus untuk anak usia
          {{ program.ageRange }}!
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <UButton
            :to="`https://wa.me/${program.whatsapp.number}?text=${encodeURIComponent(program.whatsapp.message)}`"
            external
            target="_blank"
            size="xl"
            :color="program.themeColor"
            class="shadow-xl"
          >
            <UIcon name="i-heroicons-chat-bubble-left-right" class="mr-2" />
            Hubungi via WhatsApp
          </UButton>
          <UButton to="#pricing" size="xl" color="neutral" variant="outline" class="shadow-xl">
            <UIcon name="i-heroicons-banknotes" class="mr-2" />
            Lihat Paket & Harga
          </UButton>
        </div>

        <!-- Additional Info -->
        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div class="flex flex-col items-center text-white">
            <UIcon name="i-heroicons-phone" class="text-4xl mb-2" />
            <p class="text-sm opacity-90">Konsultasi Gratis</p>
          </div>
          <div class="flex flex-col items-center text-white">
            <UIcon name="i-heroicons-calendar-days" class="text-4xl mb-2" />
            <p class="text-sm opacity-90">Trial Day Available</p>
          </div>
          <div class="flex flex-col items-center text-white">
            <UIcon name="i-heroicons-chart-bar" class="text-4xl mb-2" />
            <p class="text-sm opacity-90">Monitoring Perkembangan</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
