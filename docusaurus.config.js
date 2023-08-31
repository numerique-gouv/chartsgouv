// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ChartsGouv - Projet 10%',
  tagline: 'L\'outil de visualisation de données de l\'État',
  favicon: 'img/lightgrey_rounded1000_chartsgouv_logo.ico',

  // Set the production url of your site here
  url: 'https://etalab-ia.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/chartsgouv/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  //organizationName: 'etalab-ia', // Usually your GitHub org/user name.
  organizationName: 'etalab-ia', // Usually your GitHub org/user name.
  projectName: 'chartsgouv', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },

  plugins: [
    [
      'content-docs',
        /** @type {import('@docusaurus/plugin-content-docs').Options} */
        ({
          id: 'community',
          path: 'community',
          routeBasePath: 'community',
          sidebarPath: require.resolve('./sidebarsCommunity.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        }),
    ],
    [
      'ideal-image',
      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      ({
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        // Use false to debug, but it incurs huge perf costs
        disableInDev: true,
      }),
    ],

  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/etalab-ia/chartsgouv',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/etalab-ia/chartsgouv',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('dsfr-connect/dist/infima-v1/index.css'),
          ]
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/chartsgouv_banner.png',
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        }
      },
      navbar: {
        hideOnScroll: true,
        title: 'ChartsGouv Docs',
        logo: {
          alt: 'ChartsGouv',
          src: 'img/logo_chartsgouv/lightgrey_rounded1000_chartsgouv_logo.png',
          srcDark: 'img/logo_chartsgouv/lightgrey_rounded1000_chartsgouv_logo.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Documentation',
            position: 'left',
            items: [
              {
                type: 'doc',
                docId: 'user/intro-user',
                label: 'J\'utilise Superset',
              },
              {
                type: 'doc',
                docId: 'developer/intro-developer',
                label: 'Je suis développeur',
              },
              {
                type: 'doc',
                docId: 'admin/intro-admin',
                label: 'J\'installe et configure Superset ',
              },
              {
                type: 'doc',
                docId: 'data-eng/intro-data-eng',
                label: 'Je suis ingénieur des données',
              },
            ],
          },
          {
            position: 'left',
            label: 'Communauté',
            to: 'community',
          },
          {
            position: 'left',
            label: 'Blog',
            to: 'blog',
          },
          {
            position: 'left',
            label: 'Cas d\'usage',
            to: 'showcase',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation utilisateur final',
                to: '/docs/user/intro-user',
              },
              {
                label: 'Documentation Développeur',
                to: '/docs/developer/intro-developer',
              },
              {
                label: 'Documentation Administateur',
                to: '/docs/admin/intro-admin',
              },
              {
                label: 'Documentation Ingénieur des données',
                to: '/docs/data-eng/intro-data-eng',
              },
            ],
          },
          {
            title: 'Communauté',
            items: [
              {
                label: 'Programme 10%',
                href: 'https://www.10pourcent.etalab.gouv.fr',
              },
              {
                label: 'Salon Tchap',
                href: 'https://tchap.gouv.fr/#/room/#Programme10LoutildevisualisationdesdonnesdeltatPuvO4oGZW9:agent.interieur.tchap.gouv.fr',
              },
            ],
          },
          {
            title: 'Plus',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Cas d\'usage',
                href: '/showcase',
              },
            ],
          },
        ],
        copyright: `${new Date().getFullYear()} ChartsGouv - Projet 10% DINUM INSEE, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
