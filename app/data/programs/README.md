# Program Pages Structure

## Overview

This directory contains static program pages for Amanah Edu Centre, starting with the Daycare program.

## Files Created

### TypeScript Types

- **`shared/types/program.d.ts`**: Comprehensive TypeScript types for all program pages
  - `ProgramData`: Main program data structure
  - `ProgramFeature`: Feature items with icon, title, description
  - `ProgramPricing`: Pricing packages with features
  - `ProgramSchedule`: Schedule information
  - `ProgramFAQ`: FAQ items
  - `Testimonial`: Testimonial structure
  - `TeacherProfile`: Teacher information

### Data Files

- **`app/data/programs/daycare.ts`**: Complete data for Daycare program
  - SEO metadata (title, description, OG image, keywords)
  - Hero section content
  - Features & benefits
  - Facilities & daily activities
  - Schedule information
  - Caregiver qualifications
  - Pricing packages (Harian, Mingguan, Bulanan)
  - Gallery images
  - FAQs
  - Testimonials
  - WhatsApp contact info

### Reusable Components

All components in `app/components/Program/`:

1. **`Hero.vue`**: Program hero section with background image, title, tagline, description, and CTA buttons
2. **`Features.vue`**: Display program features in a grid with icons, includes optional benefits list
3. **`Schedule.vue`**: Show program schedules with day/time information in cards
4. **`Pricing.vue`**: Pricing packages with feature lists, recommended badge, and WhatsApp CTA
5. **`Gallery.vue`**: Image gallery with lightbox modal for full-size viewing
6. **`FAQ.vue`**: Accordion-style FAQ section using Nuxt UI's UAccordion
7. **`CTA.vue`**: Floating/sticky CTA button that appears on scroll, responsive design

### Pages

- **`app/pages/program/daycare.vue`**: Complete Daycare page implementation

## Component Usage Example

```vue
<script setup lang="ts">
import { daycareProgram } from "~/app/data/programs/daycare";

// SEO automatically configured
useSeoMeta({
  title: daycareProgram.metaTitle,
  description: daycareProgram.metaDescription,
  ogImage: daycareProgram.ogImage,
});
</script>

<template>
  <div>
    <ProgramHero
      :title="daycareProgram.name"
      :tagline="daycareProgram.tagline"
      :description="daycareProgram.description"
      :age-range="daycareProgram.ageRange"
      :hero-image="daycareProgram.heroImage"
    />

    <ProgramFeatures :features="daycareProgram.features" :benefits="daycareProgram.benefits" />

    <ProgramPricing
      :pricing="daycareProgram.pricing"
      :whatsapp-number="daycareProgram.whatsapp.number"
      :whatsapp-message="daycareProgram.whatsapp.message"
    />

    <!-- More components... -->
  </div>
</template>
```

## Features

### SEO Optimized

- Complete meta tags with `useSeoMeta()`
- Open Graph tags for social sharing
- Twitter Card tags
- Structured data (Schema.org EducationalOrganization)
- Keywords for search engines

### Performance

- Lazy loading images with `<NuxtImg>`
- Optimized image sizes with responsive `sizes` attribute
- Page transitions
- Code splitting (automatic with Nuxt)

### Responsive Design

- Mobile-first approach
- Breakpoints: sm, md, lg, xl, 2xl
- Tailwind CSS utility classes
- Tested layouts for all screen sizes

### Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Screen reader friendly

### UI/UX

- Nuxt UI components (UCard, UButton, UIcon, UAccordion)
- Smooth transitions and animations
- Interactive elements (lightbox, accordion, etc.)
- WhatsApp integration for easy contact

## Next Steps

To create additional program pages (Infant Class, Toddler, PreSchool, etc.):

1. Create data file: `app/data/programs/{program-name}.ts`
2. Copy structure from `daycare.ts` and customize content
3. Create page: `app/pages/program/{program-name}.vue`
4. Copy structure from `daycare.vue` and import new data
5. Add images to `public/img/programs/{program-name}/`

## Image Requirements

Place program images in: `public/img/programs/{program-name}/`

Required images:

- `hero.jpg` - Hero background (min 1920x1080)
- `og-image.jpg` - Open Graph image (1200x630)
- `gallery-1.jpg` to `gallery-6.jpg` - Gallery images (min 800x800)

## Testing

Manual testing checklist:

- [ ] View page on different screen sizes
- [ ] Test lightbox functionality in gallery
- [ ] Verify FAQ accordion works
- [ ] Click WhatsApp CTA buttons
- [ ] Check floating CTA button behavior on scroll
- [ ] Verify SEO meta tags in browser dev tools
- [ ] Test page transitions when navigating

## Standards Followed

- ✅ Vue 3 `<script setup>` syntax
- ✅ TypeScript with proper typing
- ✅ Nuxt UI components
- ✅ Tailwind CSS for styling
- ✅ Responsive design
- ✅ SEO optimization
- ✅ Performance best practices
- ✅ Accessibility guidelines
- ✅ AI Development Rules from README.md
