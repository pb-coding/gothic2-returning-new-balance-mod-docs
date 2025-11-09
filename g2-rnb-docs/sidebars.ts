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
    "einfuehrung",
    {
      type: "category",
      label: "⚔️ Charakterklassen",
      items: [
        {
          type: "category",
          label: "Kampfklassen",
          items: [
            "klassen/paladin",
            "klassen/dunkler_ritter",
            "klassen/daemonenjäger",
            "klassen/spaeher",
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
            "klassen/dunkler_beschwörer",
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
            "waffen/nahkampfwaffen_staerke",
            "waffen/nahkampfwaffen_geschicklichkeit",
            "waffen/boegen_und_armbrueste",
            "waffen/staebe_und_magische_schwerter",
          ],
        },
        {
          type: "category",
          label: "Schutzausrüstung",
          items: [
            "ausruestung/ruestungen",
            "ausruestung/schilde",
            "ausruestung/guertel_und_helme",
          ],
        },
        {
          type: "category",
          label: "Schmuck & Verbesserungen",
          items: ["ausruestung/schmuck_edelsteine"],
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
        "entwicklung/verbesserungen_und_verzauberungen",
      ],
    },
    {
      type: "category",
      label: "🔮 Magie & Alchemie",
      items: [
        "magie/zauber_und_schriftrollen",
        "magie/tafeln",
        "magie/daemonische_tafeln",
      ],
    },
    {
      type: "category",
      label: "🌍 Spielwelt & Referenzen",
      items: ["welt/karten", "welt/teleporter", "welt/gold_und_eisenvorkommen"],
    },
    {
      type: "category",
      label: "🛠️ Hilfsmittel",
      items: [
        "hilfsmittel/cheat-codes",
        "hilfsmittel/boss_verzeichnis",
        "hilfsmittel/elixiere",
        "hilfsmittel/ognik_trophaeen",
        "hilfsmittel/pflanzen",
        "hilfsmittel/rhetorik",
      ],
    },
  ],
};

export default sidebars;
