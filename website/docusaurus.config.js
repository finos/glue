const projectName = 'glue';

module.exports = {
  baseUrl: `/`,
  tagline: `FINOS ${projectName}`,
  title: `FINOS ${projectName}`,
  url: `https://glue.finos.org`,
  favicon: 'img/favicon/favicon-finos.ico',
  organizationName: 'finos',
  projectName: projectName,
  scripts: ['https://buttons.github.io/buttons.js'],
  

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // Docs folder path relative to website dir.
          path: 'docs',
          // Sidebars file relative to website dir.
          sidebarPath: require.resolve('./sidebars.js'),
          // Equivalent to `editUrl` but should point to `website` dir instead of `website/docs`.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website',
          // Equivalent to `docsUrl`.
          routeBasePath: 'docs',
          // Remark and Rehype plugins passed to MDX. Replaces `markdownOptions` and `markdownPlugins`.
          remarkPlugins: [],
          rehypePlugins: [],
          // Equivalent to `enableUpdateBy`.
          showLastUpdateAuthor: true,
          // Equivalent to `enableUpdateTime`.
          showLastUpdateTime: true,
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
        {to: 'docs/summary', label: 'Docs', position: 'left'}
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
    hideableSidebar: true
  },

  plugins: ['docusaurus-plugin-sass']
  // ...
};
