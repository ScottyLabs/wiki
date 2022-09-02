// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ScottyLabs Wiki",
  tagline:
    "Documentation for applications and projects built by ScottyLabs for the CMU community",
  url: "https://wiki.scottylabs.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'scottylabs', // Usually your GitHub org/user name.
  // projectName: 'techwebsite', // Usually your repo name.

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
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "dining",
        path: "dining",
        routeBasePath: "dining",
        remarkPlugins: [],
        editCurrentVersion: true,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        // sidebarPath: require.resolve('./sidebars.js'),
      }),
    ],
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "course",
        path: "course",
        routeBasePath: "course",
        remarkPlugins: [],
        editCurrentVersion: true,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        // sidebarPath: require.resolve('./sidebars.js'),
      }),
    ],
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "hub-internal",
        path: "dochub/internal",
        routeBasePath: "dochub/internal",
        remarkPlugins: [],
        editCurrentVersion: true,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        // sidebarPath: require.resolve('./sidebars.js'),
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "ScottyLabs Tech",
        logo: {
          alt: "ScottyLabs Tech",
          src: "img/scotty.svg",
        },
        items: [
          {
            type: "doc",
            label: "About",
            docId: "intro",
          },
          {
            type: "dropdown",
            label: "API Docs",
            position: "left",
            items: [
              {
                type: "doc",
                label: "Course API",
                docId: "intro",
                docsPluginId: "course",
              },
              {
                type: "doc",
                label: "Dining API",
                docId: "intro",
                docsPluginId: "dining",
              },
            ],
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: "https://github.com/scottylabs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Pages",
            items: [
              {
                label: "About",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Follow ScottyLabs on Instagram",
                href: "https://href.scottylabs.org/instagram",
              },
              {
                label: "Subscribe to our Mailing List",
                href: "https://href.scottylabs.org/mail",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                href: "https://github.com/scottylabs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ScottyLabs. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
