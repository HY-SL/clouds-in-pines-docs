// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Clouds in Pines', // 你的网站标题
  tagline: '松间云 - 轻量优雅的技术文档站点', // 副标题
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // 关键：替换为你的 Netlify 主域名
  url: 'https://cloudsinpines.netlify.app',
  // Netlify 根域名部署，baseUrl 必须是 "/"
  baseUrl: '/',

  // 替换为你的 GitHub 信息（非必须，但建议修正）
  organizationName: 'HY-SL', // 你的 GitHub 用户名
  projectName: 'clouds-in-pines-docs', // 你的 GitHub 仓库名

  onBrokenLinks: 'throw',

  // 改为简体中文（适配中文文档）
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // 移除默认的编辑链接（避免指向 Facebook 仓库）
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: undefined, // 移除默认编辑链接
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 自定义社交卡片（可选，后续可替换为自己的图片）
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Clouds in Pines', // 导航栏标题改为你的站点名
        logo: {
          alt: 'Clouds in Pines Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档中心', // 中文标签更友好
          },
          {to: '/blog', label: '技术博客', position: 'left'},
          {
            // 替换为你的 GitHub 仓库链接
            href: 'https://github.com/HY-SL/clouds-in-pines-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '快速开始',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '技术博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/HY-SL/clouds-in-pines-docs',
              },
            ],
          },
        ],
        // 版权信息改为你的站点名
        copyright: `Copyright © ${new Date().getFullYear()} Clouds in Pines (松间云). Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;