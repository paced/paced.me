export default {
  modules: [
    '@nuxtjs/fontawesome',

    /* Used for boring standard HTTP stuff. */

    '@nuxtjs/redirect-module',
    '@nuxtjs/sitemap',
  ],
  ssr: false,
  target: 'static',
  head: {
    title: 'Thomas "paced" Wang',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
    ],
  },
  redirect: [
    {
      from: '^/security.txt',
      to: '/.well-known/security.txt',
      statusCode: 301,
    },
  ],
  css: [
    {
      src: "bulma/css/bulma.min.css",
    }
  ],
  fontawesome: {
    component: 'fa',
    icons: {
      solid: [
        /* Footer. */

        'faHeart',
      ],
      brands: [
        'faGithub',
        'faLinkedin',
      ],
    }
  },
  scripts: [],
  build: {},
  buildModules: [
    /* Allow TypeScript building/sources. */

    '@nuxt/typescript-build',
  ],
};
