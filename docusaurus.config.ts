import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Gothic 2 Returning New Balance",
  tagline: "Dokumentation für den Gothic 2 Returning New Balance Mod",
  favicon: "img/gothic2-favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://pb-coding.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/gothic2-returning-new-balance-mod-docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "pb-coding", // Usually your GitHub org/user name.
  projectName: "gothic2-returning-new-balance-mod-docs", // Usually your repo name.
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
          href: "https://github.com/pb-coding/gothic2-returning-new-balance-mod-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Quellen & Beiträge",
          items: [
            {
              label: "📊 Polnisches Original-Spreadsheet",
              href: "https://docs.google.com/spreadsheets/d/1d0TUCKi6J3Mn57zedb9cbAmzvgR1Uc3KuVOuTazZXxo/edit?gid=0#gid=0",
            },
            {
              label: "🔧 GitHub Repository (Contributions)",
              href: "https://github.com/pb-coding/gothic2-returning-new-balance-mod-docs",
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
