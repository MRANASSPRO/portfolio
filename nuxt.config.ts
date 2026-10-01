// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  content: {
    experimental: {
      sqliteConnector: 'native'
    }
  },

  routeRules: {
    // robots.txt is only advisory; this header is what actually keeps the CV
    '/Anass_Radi_CV.pdf': {
      headers: { 'X-Robots-Tag': 'noindex, noarchive, noimageindex' }
    },
    '/anass-radi-cv.pdf': {
      redirect: { to: '/Anass_Radi_CV.pdf', statusCode: 301 }
    },
    '/hero/**': {
      headers: { 'X-Robots-Tag': 'noimageindex' }
    }
  },

  compatibilityDate: '2026-06-30',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  ogImage: {
    zeroRuntime: true
  }
})
