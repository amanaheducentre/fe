<script setup lang="ts">
import { daycareProgram } from "~~/app/data/programs/daycare";

// SEO Meta Tags
useSeoMeta({
  title: daycareProgram.metaTitle,
  description: daycareProgram.metaDescription,
  ogTitle: daycareProgram.metaTitle,
  ogDescription: daycareProgram.metaDescription,
  ogImage: daycareProgram.ogImage,
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: daycareProgram.metaTitle,
  twitterDescription: daycareProgram.metaDescription,
  twitterImage: daycareProgram.ogImage,
});

// Page transition
definePageMeta({
  pageTransition: {
    name: "page",
    mode: "out-in",
  },
});
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <ProgramHero
      :title="daycareProgram.name"
      :tagline="daycareProgram.tagline"
      :description="daycareProgram.description"
      :age-range="daycareProgram.ageRange"
      :hero-video="daycareProgram.heroVideo!"
      hero-image=""
      cta-text="Daftar Daycare"
      cta-link="#contact"
    />

    <!-- Features Section -->
    <ProgramFeatures
      title="Mengapa Memilih Daycare Amanah?"
      :features="daycareProgram.features"
      :benefits="daycareProgram.benefits"
      :image="daycareProgram.gallery[0]"
      image-position="right"
    />

    <!-- Facilities Section with Image -->
    <ProgramImageSection
      title="Fasilitas Lengkap & Aman"
      :image="daycareProgram.gallery[1]!"
      image-position="left"
      :features="daycareProgram.facilities.items"
      background-color="bg-gray-50 dark:bg-gray-900"
    />

    <!-- Daily Activities with Image -->
    <section class="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- Daily Activities Timeline -->
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Kegiatan Harian</h2>
            <div class="w-20 h-1 bg-primary-500 rounded-full mb-8" />

            <div class="space-y-4">
              <div
                v-for="(activity, index) in daycareProgram.dailyActivities"
                :key="index"
                class="border-l-4 border-primary-500 pl-4 py-2"
              >
                <div class="flex items-center gap-2 mb-1">
                  <UIcon name="i-heroicons-clock" class="text-primary-500" />
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
          <div class="lg:sticky lg:top-24">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl">
              <NuxtImg
                :src="daycareProgram.gallery[2]"
                alt="Kegiatan Harian di Daycare"
                class="w-full h-[500px] lg:h-[600px] object-cover"
                loading="lazy"
                sizes="sm:100vw md:50vw lg:50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Schedule Section -->
    <ProgramSchedule
      title="Jadwal & Pilihan Waktu"
      :schedules="daycareProgram.schedule"
      :image="daycareProgram.gallery[4]"
    />

    <!-- Caregiver Info Section with Image -->
    <section class="py-16 md:py-24 bg-primary-50 dark:bg-primary-950">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Text Content -->
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Pengasuh Profesional & Berpengalaman
            </h2>
            <div class="w-20 h-1 bg-primary-500 rounded-full mb-6" />

            <!-- Ratio -->
            <div class="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg mb-6 shadow-md">
              <UIcon name="i-heroicons-users" class="text-4xl text-primary-600 dark:text-primary-400" />
              <div>
                <p class="text-sm text-gray-600 dark:text-gray-400">Rasio Pengasuh & Anak</p>
                <p class="text-2xl font-bold text-gray-900 dark:text-white">
                  {{ daycareProgram.caregiverInfo.ratio }}
                </p>
              </div>
            </div>

            <!-- Description -->
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {{ daycareProgram.caregiverInfo.description }}
            </p>

            <!-- Qualifications -->
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Kualifikasi Pengasuh:</h3>
            <div class="space-y-3">
              <div
                v-for="(qualification, index) in daycareProgram.caregiverInfo.qualifications"
                :key="index"
                class="flex items-start gap-3"
              >
                <UIcon name="i-heroicons-shield-check" class="text-green-500 text-xl flex-shrink-0 mt-0.5" />
                <span class="text-gray-700 dark:text-gray-300">{{ qualification }}</span>
              </div>
            </div>
          </div>

          <!-- Caregiver Image -->
          <div>
            <div class="relative rounded-2xl overflow-hidden shadow-2xl">
              <NuxtImg
                :src="daycareProgram.gallery[3]"
                alt="Pengasuh Profesional Daycare Amanah"
                class="w-full h-[400px] lg:h-[550px] object-cover"
                loading="lazy"
                sizes="sm:100vw md:50vw lg:50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <ProgramPricing
      title="Paket Daycare"
      :pricing="daycareProgram.pricing"
      :whatsapp-number="daycareProgram.whatsapp.number"
      :whatsapp-message="daycareProgram.whatsapp.message"
    />

    <!-- Gallery Section -->
    <ProgramGallery title="Galeri Daycare Amanah" :images="daycareProgram.gallery" />

    <!-- Testimonials Section with Background Image -->
    <section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 relative">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <NuxtImg
          :src="daycareProgram.gallery[5]"
          alt="Background"
          class="w-full h-full object-cover opacity-10"
          loading="lazy"
        />
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Testimoni Orang Tua</h2>
          <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Apa kata orang tua yang telah mempercayakan anaknya kepada kami
          </p>
          <div class="w-20 h-1 bg-primary-500 mx-auto rounded-full mt-4" />
        </div>

        <div
          class="flex justify-center items-center gap-3 sm:gap-4 p-2 pb-3 -mx-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent max-w-full"
        >
          <CardTestimonial
            v-for="(testimonial, index) in daycareProgram.testimonials"
            :key="index"
            :name="testimonial.name"
            :role="testimonial.role"
            :comment="testimonial.comment"
            :rating="testimonial.rating"
          />
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <ProgramFAQ title="Pertanyaan Seputar Daycare" :faqs="daycareProgram.faqs" />

    <!-- Final CTA Section with Background -->
    <section class="py-16 md:py-24 relative overflow-hidden">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <NuxtImg :src="daycareProgram.gallery[6]" alt="Background" class="w-full h-full object-cover" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-br from-primary-600/95 to-primary-800/95" />
      </div>

      <div class="container mx-auto px-4 text-center relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">Siap Bergabung dengan Daycare Amanah?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto text-white/90">
          Daftarkan anak Anda sekarang dan rasakan pengalaman penitipan anak yang aman, nyaman, dan penuh kasih sayang!
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <UButton
            :to="`https://wa.me/${daycareProgram.whatsapp.number}?text=${encodeURIComponent(daycareProgram.whatsapp.message)}`"
            external
            target="_blank"
            size="xl"
            color="neutral"
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
            <UIcon name="i-heroicons-clock" class="text-4xl mb-2" />
            <p class="text-sm opacity-90">Jadwal Fleksibel</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Floating CTA Button -->
    <ProgramCTA
      :whatsapp-number="daycareProgram.whatsapp.number"
      :whatsapp-message="daycareProgram.whatsapp.message"
      cta-text="Daftar Daycare"
    />
  </div>
</template>
