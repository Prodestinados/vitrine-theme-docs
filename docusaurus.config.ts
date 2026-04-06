import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Vitrine Theme Documentation',
  tagline: 'A fashion-forward Shopify theme with three distinct presets',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://prodestinados.github.io',
  baseUrl: '/atelier-theme-docs/',

  organizationName: 'Prodestinados',
  projectName: 'atelier-theme-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Vitrine',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://tally.so/r/vG2kP8',
          label: 'Support',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Getting Started', to: '/'},
            {label: 'Setup Guides', to: '/setup-guides/logo-and-favicon'},
            {label: 'Sections Guide', to: '/sections-guide/header'},
          ],
        },
        {
          title: 'Support',
          items: [
            {label: 'FAQs', to: '/faqs/switching-presets'},
            {label: 'Contact Support', href: 'https://tally.so/r/vG2kP8'},
          ],
        },
      ],
      copyright: `Copyright \u00a9 ${new Date().getFullYear()} Adaptive Intel. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['liquid', 'css'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
