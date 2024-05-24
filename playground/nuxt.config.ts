export default defineNuxtConfig({
  modules: ['../src/module'],
  myModule: {},
  devtools: { enabled: true },
  ssr: false,
  app: {
    baseURL: '/nuxt-module-playground/',
  },
  nitro: {
    output: {
      publicDir: '../docs',
    },
  },
})
