import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Gothic 2 Returning New Balance",
  tagline: "Komplette Dokumentation für den Gothic 2 RNB Mod",
  favicon: "img/gothic2-favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://gothic2-rnb.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/g2-rnb-docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "gothic2-rnb", // Usually your GitHub org/user name.
  projectName: "g2-rnb-docs", // Usually your repo name.
  deploymentBranch: "gh-pages", // Branch where the built site will be deployed
  trailingSlash: false, // GitHub Pages adds trailing slashes by default

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // German localization
  i18n: {
    defaultLocale: "de",
    locales: ["de"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Remove edit links for now
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Remove edit links for now
          editUrl: undefined,
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "Gothic 2 RNB",
      logo: {
        alt: "Gothic 2 RNB Logo",
        src: "img/gothic2-logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "mainSidebar",
          position: "left",
          label: "Dokumentation",
        },
        {
          href: "https://github.com/gothic2-rnb/g2-rnb-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Dokumentation",
          items: [
            {
              label: "Einführung",
              to: "/docs/intro",
            },
            {
              label: "Charakterklassen",
              to: "/docs/klassen/paladin",
            },
            {
              label: "Waffen & Ausrüstung",
              to: "/docs/waffen/nahkampfwaffen_staerke",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Gothic 2 Forum",
              href: "https://forum.worldofgothic.de/",
            },
            {
              label: "ModDB",
              href: "https://www.moddb.com/mods/gothic-2-returning-20-new-balance",
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/results?search_query=gothic+2+returning+new+balance",
            },
          ],
        },
        {
          title: "Mehr",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/gothic2-rnb/g2-rnb-docs",
            },
            {
              label: "Download Mod",
              href: "https://www.moddb.com/mods/gothic-2-returning-20-new-balance/downloads",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Gothic 2 Returning New Balance Community. Erstellt mit Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ["bash", "diff", "json"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
