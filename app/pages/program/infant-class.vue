<script setup lang="ts">
import { infantProgram } from "~~/app/data/programs/infant-class";

// SEO Meta Tags
useSeoMeta({
  title: infantProgram.metaTitle,
  description: infantProgram.metaDescription,
  ogTitle: infantProgram.metaTitle,
  ogDescription: infantProgram.metaDescription,
  ogImage: infantProgram.ogImage,
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: infantProgram.metaTitle,
  twitterDescription: infantProgram.metaDescription,
  twitterImage: infantProgram.ogImage,
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
      :title="infantProgram.name"
      :tagline="infantProgram.tagline"
      :description="infantProgram.description"
      :age-range="infantProgram.ageRange"
      :hero-video="infantProgram.heroVideo!"
      hero-image=""
      cta-text="Daftar Infant Class"
      cta-link="#contact"
      theme-color="kb"
    />

    <!-- Features Section -->
    <ProgramFeatures
      title="Mengapa Memilih Infant Class Amanah?"
      :features="infantProgram.features"
      :benefits="infantProgram.benefits"
      :image="infantProgram.gallery[0]"
      image-position="right"
      theme-color="kb"
      :use-secondary-color="true"
    />

    <!-- Facilities Section with Image -->
    <ProgramImageSection
      title="Fasilitas Lengkap untuk Bayi 1-2 Tahun"
      :image="infantProgram.gallery[1]!"
      image-position="left"
      :features="infantProgram.facilities.items"
      background-color="bg-gray-50 dark:bg-gray-900"
      theme-color="kb"
    />

    <!-- Daily Activities with Image -->
    <section class="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- Daily Activities Timeline -->
          <div>
            <ProgramSectionTitle
              title="Kegiatan Harian"
              theme-color="kb"
              :use-secondary-gradient="true"
              align="left"
              size="md"
            />

            <div class="space-y-4">
              <div
                v-for="(activity, index) in infantProgram.dailyActivities"
                :key="index"
                class="border-l-4 border-kb-500 pl-4 py-2"
              >
                <div class="flex items-center gap-2 mb-1">
                  <UIcon name="i-heroicons-clock" class="text-kb-500" />
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
                :src="infantProgram.gallery[2]"
                alt="Kegiatan Harian di Infant Class"
                class="w-full h-125 lg:h-150 object-cover"
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
      title="Jadwal & Pilihan Program"
      :schedules="infantProgram.schedule"
      :image="infantProgram.gallery[4]"
      theme-color="kb"
      :use-secondary-color="true"
    />

    <!-- Teacher Info Section with Image -->
    <section class="py-16 md:py-24 bg-primary-50 dark:bg-primary-950">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Text Content -->
          <div>
            <ProgramSectionTitle
              title="Teacher Bersertifikat PAUD"
              theme-color="kb"
              :use-secondary-gradient="true"
              align="left"
              size="md"
            />

            <!-- Ratio -->
            <div class="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg mb-6 shadow-md">
              <UIcon name="i-heroicons-users" class="text-4xl text-kb-600 dark:text-kb-400" />
              <div>
                <p class="text-sm text-gray-600 dark:text-gray-400">Rasio Teacher & Bayi</p>
                <p class="text-2xl font-bold text-gray-900 dark:text-white">
                  {{ infantProgram.caregiverInfo.ratio }}
                </p>
              </div>
            </div>

            <!-- Description -->
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {{ infantProgram.caregiverInfo.description }}
            </p>

            <!-- Qualifications -->
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Kualifikasi Teacher:</h3>
            <div class="space-y-3">
              <div
                v-for="(qualification, index) in infantProgram.caregiverInfo.qualifications"
                :key="index"
                class="flex items-start gap-3"
              >
                <UIcon name="i-heroicons-shield-check" class="text-green-500 text-xl shrink-0 mt-0.5" />
                <span class="text-gray-700 dark:text-gray-300">{{ qualification }}</span>
              </div>
            </div>
          </div>

          <!-- Teacher Image -->
          <div>
            <div class="relative rounded-2xl overflow-hidden shadow-2xl">
              <NuxtImg
                :src="infantProgram.gallery[3]"
                alt="Teacher PAUD di Infant Class Amanah"
                class="w-full h-100 lg:h-137.5 object-cover"
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
      title="Paket Infant Class"
      :pricing="infantProgram.pricing"
      :whatsapp-number="infantProgram.whatsapp.number"
      :whatsapp-message="infantProgram.whatsapp.message"
      theme-color="kb"
      :use-secondary-color="true"
    />

    <!-- Gallery Section -->
    <ProgramGallery
      title="Galeri Infant Class Amanah"
      :images="infantProgram.gallery"
      theme-color="kb"
      :use-secondary-color="true"
    />

    <!-- Testimonials Section with Background Image -->
    <section class="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 relative">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <NuxtImg
          :src="infantProgram.gallery[5]"
          alt="Background"
          class="w-full h-full object-cover opacity-10"
          loading="lazy"
        />
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-12">
          <ProgramSectionTitle
            title="Testimoni Orang Tua"
            subtitle="Apa kata orang tua yang telah mempercayakan anaknya kepada kami"
            theme-color="kb"
            :use-secondary-gradient="true"
            align="center"
            size="md"
          />
        </div>

        <div
          class="flex justify-center items-center gap-3 sm:gap-4 p-2 pb-3 -mx-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent max-w-full"
        >
          <CardTestimonial
            v-for="(testimonial, index) in infantProgram.testimonials"
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
    <ProgramFAQ
      title="Pertanyaan Seputar Infant Class"
      :faqs="infantProgram.faqs"
      theme-color="kb"
      :use-secondary-color="true"
    />

    <!-- Final CTA Section with Background -->
    <section class="py-16 md:py-24 relative overflow-hidden">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <NuxtImg :src="infantProgram.gallery[6]" alt="Background" class="w-full h-full object-cover" loading="lazy" />
        <div class="absolute inset-0 bg-linear-to-br from-kb-600/95 to-kb-800/95" />
      </div>

      <div class="container mx-auto px-4 text-center relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">
          Siap Mendaftarkan Bayi Anda di Infant Class Amanah?
        </h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto text-white/90">
          Bergabunglah dengan program pembelajaran dan perkembangan yang dirancang khusus untuk bayi usia 1-2 tahun!
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <UButton
            :to="`https://wa.me/${infantProgram.whatsapp.number}?text=${encodeURIComponent(infantProgram.whatsapp.message)}`"
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
            <UIcon name="i-heroicons-chart-bar" class="text-4xl mb-2" />
            <p class="text-sm opacity-90">Monitoring Perkembangan</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Floating CTA Button -->
    <ProgramCTA
      :whatsapp-number="infantProgram.whatsapp.number"
      :whatsapp-message="infantProgram.whatsapp.message"
      cta-text="Daftar Infant Class"
    />
  </div>
</template>
