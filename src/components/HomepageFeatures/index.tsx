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
                📚 Über diese Dokumentation / About / O dokumentacji
              </Heading>
              <div className={styles.translationContent}>
                <p>
                  <strong>🇩🇪 Deutsch:</strong> Diese Dokumentation ist eine <strong>KI-basierte Übersetzung</strong> der
                  polnischen Originaldokumentation für den Gothic 2 Returning New Balance Mod.
                  Die polnische Dokumentation basiert auf einem umfangreichen Spreadsheet,
                  das alle Details zu Charakterklassen, Ausrüstung, Waffen, Magie und mehr enthält.
                </p>
                <p>
                  <strong>🇬🇧 English:</strong> This documentation is an <strong>AI-based translation</strong> of the
                  Polish original documentation for the Gothic 2 Returning New Balance Mod.
                  The Polish documentation is based on a comprehensive spreadsheet
                  containing all details about character classes, equipment, weapons, magic, and more.
                </p>
                <p>
                  <strong>🇵🇱 Polski:</strong> Ta dokumentacja jest <strong>tłumaczeniem opartym na AI</strong> polskiej
                  oryginalnej dokumentacji dla moda Gothic 2 Returning New Balance.
                  Polska dokumentacja opiera się na obszernym arkuszu kalkulacyjnym
                  zawierającym wszystkie szczegóły dotyczące klas postaci, ekwipunku, broni, magii i więcej.
                </p>
                <div className={styles.creditsBox}>
                  <h3>📊 Quelldokumentation / Source / Źródło</h3>
                  <p>
                    <strong>🇩🇪</strong> Die Originaldokumentation wurde von der polnischen Gothic 2 RNB Community erstellt.
                  </p>
                  <p>
                    <strong>🇬🇧</strong> The original documentation was created by the Polish Gothic 2 RNB Community.
                  </p>
                  <p>
                    <strong>🇵🇱</strong> Oryginalna dokumentacja została stworzona przez polską społeczność Gothic 2 RNB.
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
                  <h3>🤝 Beitragen / Contribute / Wnieś wkład</h3>
                  <p>
                    <strong>🇩🇪</strong> Fehler gefunden oder Verbesserungsvorschläge? Contributions sind willkommen!
                  </p>
                  <p>
                    <strong>🇬🇧</strong> Found errors or have suggestions? Contributions are welcome!
                  </p>
                  <p>
                    <strong>🇵🇱</strong> Znalazłeś błędy lub masz sugestie? Wkłady są mile widziane!
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
