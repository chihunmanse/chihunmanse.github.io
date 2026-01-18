// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const organizationName = "chihunmanse";
const projectName = "chihunmanse.github.io";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Chihun's Dev Blog",
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
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
      }),
    ],
  ],

  plugins: [
    function tocScrollSyncPlugin(context, options) {
      return {
        name: "toc-scroll-sync",
        getClientModules() {
          return [require.resolve("./src/clientModules.ts")];
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
      },
      // Replace with your project's social card
      image: "img/m.png",
      navbar: {
        title: "Chihun's Dev Blog",
        hideOnScroll: true,
        items: [
          { to: "/tags", label: "Tags", position: "right" },
          {
            href: "https://github.com/chihunmanse",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["solidity", "docker", "groovy", "yaml", "python"],
      },
    }),
};

module.exports = config;
