// import axios from 'axios'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Pardee Partner',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    script: [
      {
        src: 'https://e.infogram.com/js/dist/embed-loader-min.js',
        body: true,
        async: true,
        defer: true,
        ssr: false,
        id: 'infogram-async'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300;400;600;700&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {
      src: '@/assets/styles/main.scss'
    },
    {
      src: 'swiper/css/swiper.css'
    },
    {
      src: '@fortawesome/fontawesome-svg-core/styles.css'
    },
    {
      src: 'video.js/dist/video-js.css',
    },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/fontawesome.js',
    },
    {
      src: '~/plugins/vue-google-maps.js',
    },
    {
      src: '~/plugins/vue-js-modal.js',
    },
    {
      src: '~/plugins/lightGallery.client.js',
    },
    {
      src: '~/plugins/vue-vimeo-player.js',
      ssr: false,
      mode: 'client'
    },
    {
      src: '~/plugins/vuelidate.js',
    },
    {
      src: '~/plugins/nuxt-video-player-plugin.js',
      mode: 'client'
    },
    {
      src: '~/plugins/star-rating.js',
      mode: 'client',
    },
    {
      src: '~/plugins/youtube.js',
      ssr: false,
    },
    {
      src: '~/plugins/vue-awesome-swiper.js',
      ssr: false,
      mode: 'client'
    },
    {
      src: '~/plugins/vuejs-paginate.js',
      ssr: false,
      mode: 'client'
    },
    {
      src: '~/plugins/vue-youtube-player.js',
      ssr: false,
      mode: 'client'
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/svg',
    '@nuxtjs/eslint-module',
    '@nuxtjs/moment',
    '@nuxtjs/device',
  ],

  generate: {
    dir: 'dist',
    subholders: true,
    interval: 1000,
    crawler: false,
    fallback: true,

    // routes () {
    //   return Promise.all([
    //     axios.get('https://dev-tamipardee.pantheonsite.io/wp-json/api/v1/categories'),
    //     axios.get('https://dev-tamipardee.pantheonsite.io/wp-json/api/v1/all_blogsid_title'),
    //     axios.get('https://dev-tamipardee.pantheonsite.io/wp-json/api/v1/all_communitiesid_title'),
    //     axios.get('https://dev-tamipardee.pantheonsite.io/wp-json/api/v1/mlsid_address_state')
    //   ])
    //     .then(([res1, res2, res3, res4]) => {
    //       return [
    //         ...res1.data.data.categories.map(category => '/blog/' + category.slug.toLowerCase().replace(/\s/g, '-')),
    //         ...res2.data.data.blogs_data.map(blog => `/blog/${blog.blog_name}/${blog.blog_id}`),
    //         // eslint-disable-next-line
    //         ...res3.data.data.community_data.map(community => `/communities/${community.title.toLowerCase().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').replace(/\s/g, '-')}`),
    //         ...res4.data.data.map(property => {
    //           const full = property.full.replace(/\s/g, '-').replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').replace(/--/g, '-')
    //           const city = property.city.replace(/\s/g, '-')
    //           return `/listing/${property.state}/${city}/${full}/${property.id}`
    //         })
    //       ]
    //     })
    // }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/svg',
    '@nuxtjs/axios',
    '@nuxtjs/device',
    'vue-scrollto/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // live url : https://live-tamipardee.pantheonsite.io
  axios: {
    baseURL: 'https://dev-tamipardee.pantheonsite.io/wp-json/api/v1/'
  },

  moment: {
    defaultTimezone: 'America/Los_Angeles'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^vue2-google-maps($|\/)/],
    vendor: [
      'vue-vimeo-player'
    ],
  },

  target: 'static'
}
