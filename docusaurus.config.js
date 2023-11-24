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
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "main",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {routeBasePath: '/', showReadingTime: true, postsPerPage: 10, blogSidebarTitle: 'All Posts', blogSidebarCount: 'ALL',
        blogArchiveComponent: require.resolve('./src/theme/BlogArchivePage')
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        docs: false,
        // docs: {
        //   sidebarPath: require.resolve("./sidebars.js"),
        // },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: { defaultMode: "light", disableSwitch: false },
      // Replace with your project's social card
      image: "img/m.png",
      navbar: {
        title: "Chihunmanse",
        style: 'primary',
        hideOnScroll: true,
        logo: {
          alt: "logo",
          src: "img/dog.png",
        },
        items: [
          {to: '/', label: 'Home', position: 'right'},
          {
            type: 'dropdown',
            to: 'tags',
            label: 'Category',
            position: 'right',
            items: [
              {to: 'tags/back-end', label: 'BackEnd'},
              {to: 'tags/block-chain', label: 'BlockChain'}
            ],
          },

          {
            type: 'dropdown',
            to: 'tags',
            label: 'Tag',
            position: 'right',
            items: [
              {to: 'tags', label: 'All Tags'},
              {to: 'tags/solidity', label: 'Solidity'},
              {to: 'tags/nest-js', label: 'NestJS'},
              {to: 'tags/docker', label: 'Docker'},
              {to: 'tags/kubernetes', label: 'Kubernetes'},
              {to: 'tags/data-base', label: 'DataBase'},
            ],
          },

          {to: 'archive', label: 'Archive', position: 'right'},
          {
            href: "https://github.com/chihunmanse",
            label: "GitHub",
            position: "right",
          },
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
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: 'Blog',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'Archive',
                to: 'archive',
              },
              {
                label: 'Tags',
                to: 'tags',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/chihunmanse',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} Chihunmanse Blog, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["solidity", 'docker'],
      },
    }),
};

module.exports = config;
