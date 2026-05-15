import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Claude Code 插件学习指南',
  tagline: '从入门到精通 Claude Code 插件生态',
  favicon: 'img/favicon.ico',
  url: 'https://your-github-username.github.io',
  baseUrl: '/claude-plugin-site/',
  organizationName: 'your-github-username',
  projectName: 'claude-plugin-site',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/your-github-username/claude-plugin-site/tree/main/',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ] satisfies Preset.Options,
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    navbar: {
      title: 'Claude Code 插件指南',
      logo: { alt: 'Logo', src: 'img/logo.svg' },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: '文档',
        },
        {
          href: 'https://github.com/your-github-username/claude-plugin-site',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright ${new Date().getFullYear()} · Built with Docusaurus`,
    },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
  } satisfies Preset.ThemeConfig,
};

export default config;
