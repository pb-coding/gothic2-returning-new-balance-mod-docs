import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Gothic 2 Returning New Balance - Dokumentation Sidebar
 * Strukturierte Hierarchie für alle Spielinhalte
 */
const sidebars: SidebarsConfig = {
  // Gothic 2 RNB Hauptsidebar
  mainSidebar: [
    "intro",
    {
      type: "category",
      label: "⚔️ Charakterklassen",
      items: [
        {
          type: "category",
          label: "Kampfklassen",
          items: [
            "klassen/soeldner",
            "klassen/paladin",
            "klassen/dunkler-ritter",
            "klassen/daemonenjäger",
            "klassen/späher",
          ],
        },
        {
          type: "category",
          label: "Magierklassen",
          items: [
            "klassen/feuermagier",
            "klassen/wassermagier",
            "klassen/nekromant",
            "klassen/schwarzmagier",
            "klassen/druide",
            "klassen/schamane",
          ],
        },
        {
          type: "category",
          label: "Hybridklassen",
          items: [
            "klassen/tempelwaechter",
            "klassen/guru",
            "klassen/giftmeister",
            "klassen/dunkler-beschwörer",
            "klassen/verdammter",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "🛡️ Ausrüstung & Waffen",
      items: [
        {
          type: "category",
          label: "Waffen",
          items: [
            "waffen/nahkampfwaffen-staerke",
            "waffen/nahkampfwaffen-geschicklichkeit",
            "waffen/boegen-armbrueste",
            "waffen/staebe-magische-schwerter",
          ],
        },
        {
          type: "category",
          label: "Schutzausrüstung",
          items: [
            "ausruestung/ruestungen",
            "ausruestung/schilde",
            "ausruestung/guertel-helme",
          ],
        },
        {
          type: "category",
          label: "Schmuck & Verbesserungen",
          items: [
            "ausruestung/schmuck-edelsteine",
            "ausruestung/verbesserungen-verzauberungen",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "📈 Charakterentwicklung",
      items: [
        "entwicklung/fertigkeiten",
        "entwicklung/boni",
        "entwicklung/gaben",
        "entwicklung/rhetorik",
      ],
    },
    {
      type: "category",
      label: "🔮 Magie & Alchemie",
      items: [
        "magie/zauber-schriftrollen",
        "magie/elixiere",
        "magie/pflanzen",
        "magie/tafeln",
        "magie/daemonische-tafeln",
      ],
    },
    {
      type: "category",
      label: "🌍 Spielwelt & Referenzen",
      items: [
        "welt/karten",
        "welt/teleporter",
        "welt/gold-eisenvorkommen",
        "welt/boss-verzeichnis",
        "welt/ognik-trophäen",
      ],
    },
    {
      type: "category",
      label: "🛠️ Hilfsmittel",
      items: ["hilfsmittel/cheat-codes"],
    },
  ],
};

export default sidebars;
