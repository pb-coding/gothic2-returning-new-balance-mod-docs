import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--12")}>
            <div className={styles.translationInfo}>
              <Heading as="h2" className={styles.translationHeading}>
                📚 Über diese Dokumentation
              </Heading>
              <div className={styles.translationContent}>
                <p>
                  Diese Dokumentation ist eine <strong>KI-basierte Übersetzung</strong> der
                  polnischen Originaldokumentation für den Gothic 2 Returning New Balance Mod.
                </p>
                <p>
                  Die polnische Dokumentation basiert auf einem umfangreichen Spreadsheet,
                  das alle Details zu Charakterklassen, Ausrüstung, Waffen, Magie und mehr enthält.
                </p>
                <div className={styles.creditsBox}>
                  <h3>📊 Quelldokumentation</h3>
                  <p>
                    Die Originaldokumentation wurde von der polnischen Gothic 2 RNB Community erstellt.
                  </p>
                  <a
                    href="https://docs.google.com/spreadsheets/d/1d0TUCKi6J3Mn57zedb9cbAmzvgR1Uc3KuVOuTazZXxo/edit?gid=0#gid=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.sourceLink}
                  >
                    🔗 Zum polnischen Original-Spreadsheet
                  </a>
                </div>
                <div className={styles.contributionBox}>
                  <h3>🤝 Beitragen</h3>
                  <p>
                    Fehler gefunden oder Verbesserungsvorschläge? Contributions sind willkommen!
                  </p>
                  <a
                    href="https://github.com/pb-coding/gothic2-returning-new-balance-mod-docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubLink}
                  >
                    🔗 Zum GitHub Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
