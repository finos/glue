// FINOS project blueprint setup for Docusaurus 1.x project documentation websites
// 
// Check comments below to know how to adapt the default configuration to your FINOS project.
// If a configuration is not commented, please do not change it.
//
// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// const projectName = 'glue'
// const copyrightOwner = 'EPAM Systems, Inc.'

// const siteConfig = {
//   // Header menu
//   headerLinks: [
//     {doc: 'home', label: 'Docs'},
//     {doc: 'roadmap', label: 'Roadmap'},
//     {doc: 'team', label: 'Team'},
//     {href: `https://github.com/finos/${projectName}`, label: 'GitHub'},
//     {blog: false}
//   ],

//   // Update icon files with program/project logos
//   headerIcon: 'img/favicon/favicon-finos.ico',   
//   footerIcon: 'img/favicon/favicon-finos.ico',
//   favicon: 'img/favicon/favicon-finos.ico',

//   colors: {
//     primaryColor: '#0086bf',
//     secondaryColor: '#0033A0'
//   },

//   // Change the copyright info with correct program/project names */
//   copyright: `Copyright © ${new Date().getFullYear()} ${projectName} - ${copyrightOwner}`,

//   highlight: {
//     theme: 'default',
//   },

//   scripts: ['https://buttons.github.io/buttons.js'],
//   onPageNav: 'separate',
//   cleanUrl: true,

//   // Update Open Graph and Twitter cards/links, if project have dedicated ones
//   ogImage: 'img/undraw_online.svg',
//   twitterImage: 'img/undraw_tweetstorm.svg',
//   twitterUsername: 'FinosFoundation'
// };

// module.exports = siteConfig;
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
          customCss: [require.resolve('./src/css/custom.css')],
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
      title: 'Docusaurus',
      logo: {
        alt: 'Docusaurus Logo',
        src: 'img/docusaurus.svg',
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

  // plugins: [
  //   [
  //     '@docusaurus/plugin-client-redirects',
  //     {
  //       fromExtensions: ['html'],
  //     },
  //   ],
  // ]
};