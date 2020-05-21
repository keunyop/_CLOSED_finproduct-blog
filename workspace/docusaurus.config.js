module.exports = {
  title: '핀(Fin, Finance, 금융) + 프로덕트(상품)',
  tagline: '다양한 옵션을 쉽게 비교하여 최고의 금융 상품을 찾으세요.',
  organizationName: 'keunyop', // Usually your GitHub org/user name.
  projectName: 'finproduct-blog', // Usually your repo name.
  url: 'https://keunyop.github.io/finproduct-blog', // Url to your site with no trailing slash
  baseUrl: '/workspace', // Base directory of your site relative to your repo
  favicon: 'img/FP_logo.ico',
  customFields: {
    description: '핀PD에서 다양한 옵션을 쉽게 비교하여 최고의 금융 상품을 찾으세요.',
  },
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: '핀PD',
      logo: {
        alt: '핀PD',
        src: 'img/FP_logo.svg',
      },
      links: [
        { to: 'docs/review/tier1/intro', label: '은행별상품보기', position: 'left' },
        { to: 'blog', label: '금융블로그', position: 'left' },
        { to: 'dictionary', label: '금융용어사전', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '핀PD',
          items: [
            {
              label: '은행별상품보기',
              to: 'docs/doc1',
            },
            {
              label: '금융블로그',
              to: 'blog',
            },
            {
              label: '금융용어사전',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Blog',
          items: [
            {
              label: '최고의 적금 TOP 10',
              to: 'blog/2020/03/31/2020년3월최고의적금TOP10',
            },
          ],
        },
        // {
        //   title: 'Community & Legal',
        //   items: [
        //     {
        //       label: 'Feedback',
        //       to: 'docs/doc2',
        //     },
        //     {
        //       label: 'About',
        //       to: 'docs/doc2',
        //     },
        //     {
        //       label: 'Privacy',
        //       to: 'docs/doc2',
        //     },
        //     {
        //       label: 'Terms',
        //       to: 'docs/doc2',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 핀PD`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./tier1-sidebars.js'),
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
