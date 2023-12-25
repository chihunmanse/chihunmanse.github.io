// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const organizationName = "chihunmanse";
const projectName = "chihunmanse.github.io";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "chihunmanse",
  tagline: "",
  favicon: "img/favicon.ico",
  url: `https://${organizationName}.github.io`,
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "main",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false
        // blog: {routeBasePath: '/', showReadingTime: true, postsPerPage: 10, blogSidebarTitle: 'All Posts', blogSidebarCount: 'ALL',
        // blogArchiveComponent: require.resolve('./src/theme/BlogArchivePage')
        // },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
      },
      // Replace with your project's social card
      image: "img/m.png",
      navbar: {
        title: "Chihunmanse",
        hideOnScroll: true,
        logo: {
          alt: "logo",
          src: "https://p.ipic.vip/o1ih3g.png",
        },
        items: [
          // {
          //   type: "docSidebar",
          //   sidebarId: "blockChain",
          //   position: "left",
          //   label: "BlockChain",
          // },
          // {
          //   type: "docSidebar",
          //   sidebarId: "backEnd",
          //   position: "left",
          //   label: "BackEnd",
          // },
          {to: '/tags', label: 'Tags', position: 'right'},
          {
            href: "https://github.com/chihunmanse",
            label: "GitHub",
            position: "right",
          },
          // {
          //   type: 'dropdown',
          //   to: 'tags',
          //   label: 'Category',
          //   position: 'right',
          //   items: [
          //     {to: 'tags/back-end', label: 'BackEnd'},
          //     {to: 'tags/block-chain', label: 'BlockChain'}
          //   ],
          // },
          // {to: 'archive', label: 'Archive', position: 'right'},
          // {
          //   href: "https://github.com/chihunmanse",
          //   label: "GitHub",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "light",
        // links: [
        //   {
        //     title: 'Blog',
        //     items: [
        //       {
        //         label: 'Home',
        //         to: '/',
        //       },
        //       {
        //         label: 'Archive',
        //         to: 'archive',
        //       },
        //       {
        //         label: 'Tags',
        //         to: 'tags',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/chihunmanse',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} Chihunmanse Blog, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["solidity", 'docker'],
      },
    }),
};

module.exports = config;
