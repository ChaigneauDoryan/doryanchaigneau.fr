export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Doryan Chaigneau',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Doryan Chaigneau. Currently in my 5th year of study at EPSI. The aimed title is: Expert in Computer Science and Information System (RNCP level 7)'
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: "author", content: "Doryan Chaigneau" },
      {
        name: "keywords",
        content: "Doryan, Chaigneau, Doryan Chaigneau, DoryanChaigneau, doryanChaigneau, Doryanchaigneau, doryanchaigneau, doryan, chaigneau, developpeur, full stack, fullstack, analyst developer, analyste developpeur, developpeur fullstack"
      },
      { property: "og:title", content: "Doryan Chaigneau" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://doryanchaigneau.fr/" },
      { property: "og:site_name", content: "Doryan Chaigneau" },
      {
        property: "og:description",
        content: "Doryan Chaigneau. Currently in my 5th year of study at EPSI. The aimed title is: Expert in Computer Science and Information System (RNCP level 7)"
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [ '~/assets/css/main.css' ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/sitemap', { hostname: 'https://locationgourette.fr' }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    port: 8080
  }
}
