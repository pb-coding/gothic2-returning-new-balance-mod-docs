import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "⚔️ Charakterklassen",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Detaillierte Übersicht aller Charakterklassen in Gothic 2 RNB - von
        Kampfklassen über Magierklassen bis hin zu einzigartigen Hybridklassen
        mit allen Fähigkeiten und Entwicklungsmöglichkeiten.
      </>
    ),
  },
  {
    title: "🛡️ Ausrüstung & Waffen",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Komplette Datenbank aller Waffen, Rüstungen und Ausrüstungsgegenstände.
        Finde die perfekte Ausrüstung für deinen Charakter mit detaillierten
        Statistiken und Fundorten.
      </>
    ),
  },
  {
    title: "🔮 Magie & Entwicklung",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Umfassende Guides zu Magie, Alchemie und Charakterentwicklung. Lerne
        alle Zauber, Elixiere und Entwicklungsmöglichkeiten für optimale
        Charakterbuilds kennen.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
