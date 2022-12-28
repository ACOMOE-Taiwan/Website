// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ACOMOE',
  tagline: '心有所向，日復一日，必有精進',
  url: 'https://www.aco.moe',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BC413', // Usually your GitHub org/user name.
  projectName: 'ACOMOE-Website', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-tw',
    locales: ['zh-tw', 'zh-cn','en','ja'],
  },

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
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} **/
    ({
      announcementBar: {
        id: 'support_us',
        content: '本站仍在建設中，您可以關注我們的<a href="/blog">博客來獲得最新消息',
        backgroundColor: '#a26ac8',
        textColor: '#fff',
        isCloseable: true,
      },
      navbar: {
        title: 'ACOMOE',
        logo: {
          alt: 'ACOMOE Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '相關文檔',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {
            href: 'https://github.com/BC413/ACOMOE-Website',
            label: '群组',
            position: 'right',
          },
          {
            href: 'https://github.com/BC413/ACOMOE-Website',
            label: 'GitHub',
            position: 'right',
          },
          //{
          //  type: 'localeDropdown',
          //  position: 'right',
          //},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '關於',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '社群',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/groups/acomoe',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/v93hkBeABR',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/ACOMOE_Official',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ACOMOE-Taiwan',
              },
            ],
          },
        ],
        copyright: `Copyright © 2022 - ${new Date().getFullYear()} ACOMOE Taiwan , Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
