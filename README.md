# MANISH.OS — Personal Developer Operating System

A React + Vite portfolio with a browser-only interactive Superpower Shell. Designed as a static site for AWS Amplify Hosting.

## Prerequisites
- Node.js 20 LTS or newer
- npm
- Git
- An AWS account for deployment

## Run locally (Ubuntu)
```bash
npm install
npm run dev
```
Open the local URL Vite prints (usually `http://localhost:5173`).

## Verify production build
```bash
npm run build
npm run preview
```
The production output is generated in `dist/`.

The shell is opened from the hero, navigation, floating launcher, or `Ctrl+K` / `Cmd+K`. It supports `help`, `about`, `skills`, `projects`, `project <name>`, `aws`, `community`, `achievements`, `contact`, `resume`, `surprise`, `clear`, and `sudo hire manish`. It never executes operating-system commands.

## Deploy using AWS Amplify Hosting
1. Create a GitHub repository named `manish-os-portfolio`.
2. From this project directory, initialize and push the code:
   ```bash
   git init
   git add .
   git commit -m "Build MANISH.OS portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/manish-os-portfolio.git
   git push -u origin main
   ```
   Replace the remote with your actual repository URL. If the repository already exists, do not run `git init` again.
3. In AWS Amplify, choose **Create new app / Host web app**, connect GitHub, and select the repository and `main` branch.
4. Amplify should detect `amplify.yml`. Confirm the build command is `npm run build` and the artifact directory is `dist`.
5. Deploy, then open the Amplify-provided URL and test all sections, links, and terminal commands.

## Project structure
```text
manish-os/
├── index.html              # HTML entry, metadata, fonts
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite + React configuration
├── amplify.yml             # Amplify build instructions
├── ARCHITECTURE.md         # System and component architecture
├── SUBMISSION-CHECKLIST.md # Hackathon validation checklist
├── .gitignore
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Page sections and interactive terminal
    └── styles.css          # Design system, layout, responsive styling
```

## Before public submission
- Replace generic LinkedIn links with your actual profile URL.
- Update each project link to its exact repository/demo; do not imply a generic GitHub profile is a project repository.
- Verify project descriptions and technologies reflect what is implemented.
- Add accurate certifications, dates, and community achievements.
- Test on mobile, keyboard-only navigation, and reduced-motion settings.
- Capture screenshots of the site and the actual Amplify deployment/console.
- Keep the website publicly reachable throughout judging.

## Security and privacy
The terminal only maps visitor-entered text to local, predefined responses. It does not execute shell commands, make API requests, or control the visitor's computer. Do not put credentials, tokens, private contact details, or secrets in the repository.
