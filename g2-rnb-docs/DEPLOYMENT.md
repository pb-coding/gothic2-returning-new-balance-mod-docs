# GitHub Pages Deployment Anleitung

Diese Anleitung erklärt, wie Sie die Docusaurus-Dokumentation auf GitHub Pages deployen.

## Voraussetzungen

- Ein GitHub-Repository unter `pb-coding/gothic2-returning-new-balance-mod-docs`
- GitHub Actions aktiviert in Ihrem Repository

## Konfiguration

Die folgenden Dateien wurden bereits konfiguriert:

### 1. `docusaurus.config.ts`

Die wichtigsten Einstellungen:
- `url`: `https://pb-coding.github.io`
- `baseUrl`: `/gothic2-returning-new-balance-mod-docs/`
- `organizationName`: `pb-coding`
- `projectName`: `gothic2-returning-new-balance-mod-docs`
- `deploymentBranch`: `gh-pages`
- `trailingSlash`: `false`

### 2. GitHub Actions Workflows

Zwei Workflows wurden erstellt:

#### `.github/workflows/deploy.yml`
- Wird bei jedem Push auf den `main` Branch ausgeführt
- Baut die Website und deployed sie auf GitHub Pages
- Verwendet die neue GitHub Pages Actions API

#### `.github/workflows/test-deploy.yml`
- Wird bei Pull Requests ausgeführt
- Testet nur den Build-Prozess ohne zu deployen
- Hilft Fehler frühzeitig zu erkennen

### 3. `.nojekyll` Datei

Die Datei `static/.nojekyll` ist bereits vorhanden und verhindert, dass GitHub Pages Jekyll verwendet.

## GitHub Repository Einstellungen

Um das Deployment zu aktivieren, müssen Sie folgende Schritte in Ihrem GitHub Repository durchführen:

### Schritt 1: GitHub Pages aktivieren

1. Gehen Sie zu Ihrem Repository auf GitHub
2. Klicken Sie auf **Settings** (Einstellungen)
3. Navigieren Sie zu **Pages** im linken Menü
4. Unter **Build and deployment**:
   - **Source**: Wählen Sie "GitHub Actions"
   - (NICHT "Deploy from a branch" - das ist die alte Methode)

### Schritt 2: Ersten Deployment auslösen

1. Committen und pushen Sie alle Änderungen zum `main` Branch:
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

2. Der GitHub Actions Workflow wird automatisch gestartet
3. Sie können den Fortschritt unter **Actions** in Ihrem Repository verfolgen

### Schritt 3: Deployment überprüfen

Nach erfolgreichem Deployment ist Ihre Website verfügbar unter:
```
https://pb-coding.github.io/gothic2-returning-new-balance-mod-docs/
```

## Lokales Testen

Bevor Sie deployen, können Sie die Website lokal testen:

```bash
cd g2-rnb-docs

# Dependencies installieren
npm install

# Development Server starten
npm start

# Production Build testen
npm run build
npm run serve
```

## Manuelle Deployment (Alternative)

Falls Sie manuell deployen möchten (nicht empfohlen):

```bash
cd g2-rnb-docs

# Mit HTTPS
GIT_USER=<IHR_GITHUB_USERNAME> npm run deploy

# Mit SSH (empfohlen)
USE_SSH=true npm run deploy
```

**Hinweis**: Für manuelles Deployment benötigen Sie einen Personal Access Token (PAT) mit `repo` Berechtigung.

## Troubleshooting

### Deployment schlägt fehl

1. Überprüfen Sie die GitHub Actions Logs unter **Actions** Tab
2. Stellen Sie sicher, dass GitHub Pages auf "GitHub Actions" eingestellt ist
3. Überprüfen Sie, ob alle Dependencies korrekt installiert sind

### 404 Fehler nach Deployment

1. Überprüfen Sie die `baseUrl` in `docusaurus.config.ts`
2. Für ein Repository `pb-coding/gothic2-returning-new-balance-mod-docs` sollte `baseUrl: '/gothic2-returning-new-balance-mod-docs/'` sein
3. Für ein Organization Pages Repository (`pb-coding.github.io`) sollte `baseUrl: '/'` sein

### CSS/JS Dateien werden nicht geladen

1. Überprüfen Sie die Browser-Konsole auf Fehler
2. Stellen Sie sicher, dass `trailingSlash` korrekt konfiguriert ist
3. Löschen Sie den Browser-Cache und laden Sie die Seite neu

## Weitere Informationen

- [Docusaurus Deployment Dokumentation](https://docusaurus.io/docs/deployment)
- [GitHub Pages Dokumentation](https://docs.github.com/en/pages)
- [GitHub Actions Dokumentation](https://docs.github.com/en/actions)

## Automatische Updates

Sobald alles eingerichtet ist, wird Ihre Website automatisch aktualisiert, wenn Sie Änderungen zum `main` Branch pushen. Der gesamte Prozess läuft über GitHub Actions und erfordert keine manuelle Intervention.