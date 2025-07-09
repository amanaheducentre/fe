<!-- components/AppFooter.vue -->
<template>
  <div>
    <UContainer class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <!-- Logo dan Nama -->
      <div class="text-center md:text-left">
        <span class="text-lg font-bold">MyWebsite</span>
        <p class="text-sm text-gray-400">© 2025 All rights reserved.</p>
      </div>

      <!-- Navigasi Footer -->
      <div class="flex space-x-6">
        <UButton variant="link" to="/">Home</UButton>
        <UButton variant="link" to="/about">About</UButton>
        <UButton variant="link" to="/contact">Contact</UButton>
      </div>

      <!-- Ikon Sosial Media -->
      <div class="flex space-x-4">
        <UButton icon="i-simple-icons-twitter" variant="link" to="https://twitter.com" target="_blank" />
        <UButton icon="i-simple-icons-github" variant="link" to="https://github.com" target="_blank" />
      </div>
    </UContainer>
  </div>
</template>
