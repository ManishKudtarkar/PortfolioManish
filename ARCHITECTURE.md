# MANISH.OS — Architecture

## 1. Goals
- Meet the portfolio challenge's three required content areas: About Me, Skills/Tech Superpowers, and Projects/Achievements.
- Deliver one discoverable, functional creative feature: the Superpower Terminal.
- Host a public, static frontend on AWS Amplify Hosting.
- Keep the implementation easy to build, test, explain, and maintain.

## 2. System context
```text
Visitor browser
  | HTTPS
  v
AWS Amplify Hosting (managed hosting/CDN and TLS)
  | serves built static assets
  v
React application (HTML + CSS + JavaScript)
  |-- Home / About
  |-- Skills / Superpowers
  |-- Projects
  |-- Journey / Achievements
  |-- Contact
  `-- Superpower Terminal (browser-local state and fixed command map)

Developer workflow:
Local Ubuntu -> Git -> GitHub repository -> Amplify build (npm ci/install + npm run build)
             -> dist/ artifact -> Amplify public URL
```

## 3. Runtime design
- **Frontend:** React 18.
- **Build tool:** Vite.
- **Icons:** lucide-react.
- **Styling:** CSS design tokens, responsive media queries, reduced-motion support.
- **Terminal:** React state and a fixed command map (`help`, `about`, `skills`, `projects`, `project <name>`, `aws`, `community`, `achievements`, `contact`, `resume`, `surprise`, `clear`, `sudo hire manish`). Unknown commands return a helpful error. User input is rendered as text; no shell execution, backend request, or `eval` is used. The modal manages initial focus, Escape-to-close, focus return, command history, bounded output, and auto-scroll.
- **Hosting:** AWS Amplify Hosting, connected to GitHub for repeatable builds and deployments.
- **Data storage:** None required. Portfolio content is bundled with the frontend.
- **Backend/API:** None required for current scope.

## 4. Build and deployment
1. Developer edits code locally.
2. Developer validates with `npm run build`.
3. Changes are pushed to the configured GitHub branch.
4. Amplify runs the build from `amplify.yml`.
5. Amplify publishes the `dist/` directory.
6. Visitor loads the public HTTPS URL.

## 5. Amplify build configuration
`amplify.yml` installs npm dependencies, runs `npm run build`, and publishes `dist/`. No environment variables or secrets are required for the static application.

## 6. Resilience, security, and accessibility
- Static hosting avoids application-server availability and database dependencies.
- The terminal is intentionally a simulated portfolio explorer; it cannot execute commands on a user's device.
- No credentials or private API keys should be committed.
- Use semantic landmarks, labels, visible focus states, descriptive link text, and keyboard-accessible controls.
- Reduced-motion preferences are respected in CSS.
- Validate all external links and test mobile navigation before submission.

## 7. Known limitations / next improvements
- Replace generic social links with exact public profile URLs.
- Point each project to its own verified repository or demo.
- Add verified screenshots of real projects and actual AWS deployment; never fabricate AWS-console evidence.
- Portfolio content is currently kept in `src/App.jsx` because the project remains a small static site; it can move to a data module as the content grows.
- No automated linting or component test runner is configured yet; browser smoke tests and the production build are the current validation layer.
