module.exports = {
  title: '핀(Fin, Finance, 금융) + 프로덕트(상품)',
  tagline: '다양한 옵션을 쉽게 비교하여 최고의 금융 상품을 찾으세요.',
  url: 'https://keunyop.github.io/finproduct-blog',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'keunyop', // Usually your GitHub org/user name.
  projectName: 'finproduct-blog', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '핀프로덕트',
      logo: {
        alt: 'FinProduct',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/doc1', label: '금융상품검색', position: 'left'},
        {to: 'blog', label: '금융상품분석', position: 'left'},
        {to: 'dictionary', label: '금융용어사전', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FinProduct`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
