# GitHub Pages Deployment - Schritt für Schritt

## ✅ Schritt 1: Dateien committen und pushen

Alle notwendigen Dateien wurden bereits erstellt und befinden sich jetzt im Root-Verzeichnis. Jetzt müssen Sie diese zu GitHub pushen:

```bash
# Im Hauptverzeichnis
cd c:/dev/gothic2-returning-new-balance-mod-docs

# Alle Änderungen hinzufügen
git add .

# Commit erstellen
git commit -m "Setup GitHub Pages deployment with GitHub Actions"

# Zum main Branch pushen
git push origin main
```

## ✅ Schritt 2: GitHub Pages in den Repository-Einstellungen aktivieren

1. Öffnen Sie Ihr Repository in GitHub:
   https://github.com/pb-coding/gothic2-returning-new-balance-mod-docs

2. Klicken Sie auf **Settings** (Einstellungen) oben rechts

3. Scrollen Sie im linken Menü nach unten zu **Pages**

4. Unter **Build and deployment**:
   - Bei **Source** wählen Sie: **GitHub Actions**
   - (NICHT "Deploy from a branch" auswählen!)

5. Klicken Sie auf **Save** falls ein Button erscheint

## ✅ Schritt 3: Workflow-Ausführung überprüfen

1. Gehen Sie zum **Actions** Tab in Ihrem Repository:
   https://github.com/pb-coding/gothic2-returning-new-balance-mod-docs/actions

2. Sie sollten einen Workflow namens "Deploy to GitHub Pages" sehen, der läuft oder bereits gelaufen ist

3. Klicken Sie auf den Workflow, um Details zu sehen

4. Warten Sie, bis beide Jobs (build und deploy) erfolgreich abgeschlossen sind (grüne Häkchen ✓)

## ✅ Schritt 4: Website aufrufen

Nach erfolgreichem Deployment ist Ihre Website verfügbar unter:

**https://pb-coding.github.io/gothic2-returning-new-balance-mod-docs/**

## 🔍 Troubleshooting

### Problem: Workflow wird nicht ausgeführt

**Lösung:**
- Überprüfen Sie, ob die Dateien wirklich gepusht wurden
- Gehen Sie zu: https://github.com/pb-coding/gothic2-returning-new-balance-mod-docs/tree/main/.github/workflows
- Sie sollten dort `deploy.yml` und `test-deploy.yml` sehen

### Problem: Workflow schlägt fehl

**Lösung:**
1. Klicken Sie auf den fehlgeschlagenen Workflow
2. Klicken Sie auf den fehlgeschlagenen Job (build oder deploy)
3. Lesen Sie die Fehlermeldung
4. Häufige Probleme:
   - **Node.js Version**: Workflow verwendet Node 18
   - **Dependencies**: `npm ci` schlägt fehl → Überprüfen Sie package-lock.json
   - **Build Error**: `npm run build` schlägt fehl → Testen Sie lokal mit `npm run build`

### Problem: 404 Fehler auf der Website

**Lösung:**
1. Überprüfen Sie die `baseUrl` in `docusaurus.config.ts`:
   - Sollte sein: `/gothic2-returning-new-balance-mod-docs/`
2. Leeren Sie den Browser-Cache (Strg + Shift + R)
3. Warten Sie 5-10 Minuten nach dem Deployment

### Problem: GitHub Pages zeigt "Deploy from a branch"

**Lösung:**
1. Gehen Sie zu Settings → Pages
2. Ändern Sie **Source** von "Deploy from a branch" zu **GitHub Actions**
3. Speichern Sie die Änderung
4. Pushen Sie einen neuen Commit, um das Deployment erneut auszulösen

## 📝 Lokales Testen vor dem Deployment

Bevor Sie deployen, können Sie die Website lokal testen:

```bash
# Im Root-Verzeichnis
cd c:/dev/gothic2-returning-new-balance-mod-docs

# Dependencies installieren (falls noch nicht geschehen)
npm install

# Development Server starten
npm start
# Öffnet automatisch http://localhost:3000

# Production Build testen
npm run build
npm run serve
# Öffnet http://localhost:3000
```

## 🔄 Zukünftige Updates

Nach der ersten Einrichtung ist das Deployment automatisch:

1. Änderungen an Dokumentation vornehmen
2. Committen und pushen:
   ```bash
   git add .
   git commit -m "Update documentation"
   git push origin main
   ```
3. GitHub Actions deployed automatisch die neue Version
4. Nach 2-3 Minuten ist die aktualisierte Website live

## 📞 Weitere Hilfe

Falls Probleme auftreten:
1. Überprüfen Sie die GitHub Actions Logs
2. Lesen Sie die vollständige Dokumentation in `DEPLOYMENT.md`
3. Docusaurus Dokumentation: https://docusaurus.io/docs/deployment