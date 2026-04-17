# 🌐 GDG Talk Hub
![GDGoC Essen](https://img.shields.io/badge/Community-GDGoC%20Essen-blue?style=for-the-badge&logo=google)

The **GDG Talk Hub** is the central open-source repository for our GDG on Campus presentations and the corresponding web catalog.

This monorepo contains the static Next.js web application (`apps/web`) as well as our local admin tool (`apps/admin`), which makes it easy for GDG members to add new presentation slides.

## 🚀 Quick Start (Local Development)

To work on the platform locally or run the web application:

```bash
# 1. Install dependencies
npm install

# 2. Start the web app (available at http://localhost:3000)
npm run dev
```

## 🎤 How to add a New Talk

1. **Start the Admin Environment:**
   ```bash
   npm run add-talk
   ```
   *The tool opens automatically (usually at [http://localhost:3000](http://localhost:3000)).*

2. **Fill out the Form:** 
   Enter the metadata (Speaker, Title, Tags, etc.) and conveniently upload your presentation PDF via drag & drop. Save the form.

3. **Push Your Changes:**
   Stop the tool in your terminal (`Ctrl+C`). Simply commit and push the newly created folder inside `talks/` directly to your local GDG Git system:
   ```bash
   git add talks/
   git commit -m "feat(talks): add new [<Your Talk Title>] talk"
   git push origin main
   ```

As soon as your code has been reviewed by our repository (or your PR approved) and accepted by our CI, your presentation will automatically go live!

## 🛠️ Stack & Architecture

- **Architecture:** NPM Workspaces (Monorepo)
- **Web App:** Next.js (App Router, *Static Export*)
- **Theme:** Tailwind CSS v4, inspired by Google's Material Design 3.
- **Tests:** Automated via Playwright & GitHub Actions.

## 📁 Folder Structure
A brief overview of our monorepo setup:

- `apps/` – Our two main applications:
  - `web/`: The public website. Converts our metadata into static HTML pages during the build process.
  - `admin/`: The local admin dashboard to easily add new presentations.
- `packages/` – Shared libraries:
  - `ui-theme/`: Our central styling package, defining all GDG colors and the TypeScript metadata interfaces.
- `talks/` – Our "database". Sorted chronologically by year, every presentation gets its own folder here containing all setup information (`meta.json`) and the `.pdf` file.
- `bin/` – Our handy command-line scripts (e.g., the startup script for the admin tool).
- `.github/workflows/` – This is where the CI/CD pipeline is defined, controlling test runs and builds.
