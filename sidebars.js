/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  'docs': [
    'introduction',
    {
      type: 'category',
      label: 'J\'utilise Superset',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'user/intro-user',
      ],
    },
    {
      type: 'category',
      label: 'Je suis développeur',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'developer/intro-developer',
      ],
    },
    {
      type: 'category',
      label: 'J\'installe et configure Superset',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'admin/intro-admin',
      ],
    },
    {
      type: 'category',
      label: 'Je suis ingénieur des données',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'data-eng/intro-data-eng',
      ],
    },
  ],
};

module.exports = sidebars;
