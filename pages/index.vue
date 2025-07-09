<template>
  <div class="bg-white text-gray-900">
    <UContainer class="prose max-w-none py-10 space-y-12">
      <section>
        <h1>👋 Selamat Datang di MyWebsite</h1>
        <p>
          Kami adalah tim pengembang dan kreator digital yang berfokus pada pembuatan aplikasi web modern dan responsif
          menggunakan teknologi terkini seperti <strong>Nuxt 3</strong>, <strong>Nuxt UI 3</strong>, dan
          <strong>Tailwind CSS</strong>.
        </p>
      </section>

      <section>
        <h2>🔍 Apa yang Kami Tawarkan</h2>

        <h3>💡 Solusi Digital</h3>
        <ul>
          <li>Website perusahaan</li>
          <li>Blog pribadi atau profesional</li>
          <li>Dashboard admin</li>
          <li>Dokumentasi produk</li>
        </ul>

        <h3>🚀 Performa dan Skalabilitas</h3>
        <p>
          Kami mengutamakan performa tinggi dan skalabilitas. Dengan Nuxt 3 dan SSR (Server-Side Rendering), situs Anda
          akan cepat, SEO-friendly, dan siap untuk berkembang.
        </p>

        <h3>🎨 Desain Konsisten</h3>
        <p>
          Kami menggunakan Nuxt UI dan Tailwind CSS untuk memastikan desain antarmuka konsisten, dapat dikustomisasi,
          dan tetap ringan.
        </p>
      </section>

      <section>
        <h2>📈 Studi Kasus</h2>

        <h3>Kasus 1: Situs Profil Perusahaan</h3>
        <ul>
          <li>⚡️ Load time di bawah 1 detik</li>
          <li>📈 Peningkatan trafik organik 45% dalam 3 bulan</li>
          <li>✅ Mudah di-maintain melalui CMS headless</li>
        </ul>

        <h3>Kasus 2: Portal Dokumentasi Internal</h3>
        <ul>
          <li>📝 Menulis dokumentasi dalam Markdown</li>
          <li>🔍 Menyediakan pencarian instan</li>
          <li>🌙 Menambahkan dark mode untuk kenyamanan</li>
        </ul>
      </section>

      <section>
        <h2>📚 Tips & Trik Nuxt 3</h2>
        <ol>
          <li>Gunakan <code>defineNuxtComponent()</code> untuk komponen ringan.</li>
          <li>Gunakan composables seperti <code>useRoute()</code>, <code>useHead()</code>, <code>useFetch()</code>.</li>
          <li>Render markdown dengan <code>&lt;ContentDoc /&gt;</code>.</li>
        </ol>
      </section>

      <section>
        <h2>🌐 Teknologi yang Kami Gunakan</h2>
        <table>
          <thead>
            <tr>
              <th>Teknologi</th>
              <th>Kegunaan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nuxt 3</td>
              <td>Framework utama</td>
            </tr>
            <tr>
              <td>Nuxt UI 3</td>
              <td>Komponen UI modern</td>
            </tr>
            <tr>
              <td>Tailwind CSS</td>
              <td>Utility-first styling</td>
            </tr>
            <tr>
              <td>Markdown</td>
              <td>Menulis konten statis</td>
            </tr>
            <tr>
              <td>Netlify/Vercel</td>
              <td>Hosting cepat dan gratis</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>📞 Hubungi Kami</h2>
        <ul>
          <li>✉️ Email: hello@mywebsite.com</li>
          <li>📱 WhatsApp: +62 812-3456-7890</li>
          <li>🌐 <NuxtLink to="/contact">Kontak Kami</NuxtLink></li>
        </ul>
      </section>

      <section>
        <h2>🔽 Konten Tambahan</h2>
        <p v-for="n in 30" :key="n">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis dolor in nisl tempor, a fermentum
          sapien lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
      </section>

      <section>
        <p><em>Terima kasih telah mengunjungi situs kami!</em></p>
      </section>
    </UContainer>
  </div>
</template>
