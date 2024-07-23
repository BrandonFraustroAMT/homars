import { apiEndpoint, repositoryName } from "./slicemachine.config.json";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/prismic",
    '@nuxtjs/leaflet','@nuxtjs/leaflet',
  ],
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/global.css'
  ],
  prismic: {
    endpoint: 'https://homars.prismic.io/api/v2',
    modern: true,
    linkResolver: '@/link-resolver.js',
    htmlSerializer: '@/html-serializer.js',
  },
  head: {
    title: 'Homars',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Descripción Homars' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  }
})