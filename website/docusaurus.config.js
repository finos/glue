const projectName = 'glue';

module.exports = {
  baseUrl: `/${projectName}/`,
  tagline: `FINOS ${projectName}`,
  title: `FINOS ${projectName}`,
  url: `https://finos.github.io/${projectName}`,
  favicon: 'img/favicon/favicon-finos.ico',
  organizationName: 'FINOS',
  projectName: projectName,
  githubHost: `https://github.com/finos/${projectName}`,
  scripts: ['https://buttons.github.io/buttons.js'],


  presets: [
    [
      '@docusaurus/preset-classic',
      { //TODO: CHECK IF ARRAY/OBJECT structure works this way
        docs: {
          // Docs folder path relative to website dir.
          path: '../docs',
          // Sidebars file relative to website dir.
          sidebarPath: require.resolve('./sidebars.json'),
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
        blog: {
          postsPerPage: 10,
        },
      },
    ],
  ],


  themeConfig: {
    algolia: {
      apiKey: '47ecd3b21be71c5822571b9f59e52544',
      indexName: 'docusaurus-2',
      algoliaOptions: { },
    },

    googleAnalytics: {
      trackingID: 'UA-141789564-1',
    },

    navbar: {
      title: 'Glue Data Model',
      logo: {
        alt: 'Finos Foundation',
        src: 'img/finos_wordmark_blue.svg',
      },
      items: [
        {to: 'docs/doc1', label: 'Getting Started', position: 'left'},
        {to: 'help', label: 'Help', position: 'left'},
        {
          href: 'https://github.com/',
          label: 'GitHub',
          position: 'right',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
      ],
    },

    footer: {
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'https://docusaurus.io/img/oss_logo.png',
        href: 'https://opensource.facebook.com/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`, // You can also put own HTML here.
    },
    image: 'img/docusaurus.png',
    // Equivalent to `docsSideNavCollapsible`.
    sidebarCollapsible: true,
  },

  plugins: ['docusaurus-plugin-sass']
  // ...
};