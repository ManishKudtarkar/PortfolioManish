# MASTER BUILD PROMPT: MANISH.OS — BEYOND THE PORTFOLIO

## YOUR ROLE

Act as a world-class multidisciplinary engineering team consisting of:

- A principal frontend engineer.
- An award-winning digital product designer.
- A creative developer specializing in interactive web experiences.
- A UX architect focused on accessibility and usability.
- An AWS cloud engineer.
- A frontend performance and testing engineer.
- A technical storyteller who creates memorable developer portfolios.

Your task is to transform my EXISTING React portfolio project into an exceptional, original, fully functional, production-ready personal portfolio for the AWS Student Builder Challenge: Build Your Tech Superpower.

Do not merely propose a design, write a plan, or generate disconnected code snippets.

INSPECT THE EXISTING PROJECT, IMPLEMENT THE IMPROVEMENTS DIRECTLY IN THE WORKSPACE, TEST THE RESULT, FIX THE ERRORS, AND DOCUMENT HOW TO DEPLOY IT.

Continue until the available work is completed and verified. Do not stop after making the homepage look attractive.

---

# 1. PROJECT IDENTITY

Product name: MANISH.OS

Experience name: Beyond the Portfolio

Signature creative feature: SUPERPOWER SHELL

Tagline:

"Engineering Data. Building Communities. Exploring the Cloud."

Primary identity:

Manish Kudtarkar is a Computer Science Engineering student at Parul University, Vadodara, India, focused on data engineering, cloud technologies, software development, and technology community building.

The website should communicate the mindset of a builder who learns by creating practical projects, experimenting with technology, solving problems, and sharing knowledge.

The design must feel personal, intelligent, technically credible, and memorable.

It must NOT look like a generic developer portfolio template.

It must NOT resemble a generic SaaS landing page.

It must NOT sacrifice usability for visual effects.

The finished product should feel like a carefully designed personal developer operating system.

---

# 2. FIRST: INSPECT THE EXISTING WORKSPACE

Before modifying any files:

1. Inspect the entire project structure.
2. Read package.json, index.html, vite.config.js, all files under src/, amplify.yml, README.md, ARCHITECTURE.md, and SUBMISSION-CHECKLIST.md if present.
3. Identify the existing framework, dependencies, components, styling conventions, and current functionality.
4. Identify bugs, unfinished interactions, placeholder URLs, inaccurate content, accessibility problems, and responsive-layout issues.
5. Run the existing project and production build if the environment permits.
6. Preserve working functionality wherever possible.
7. Reuse and improve the existing implementation instead of unnecessarily rebuilding it from scratch.
8. Create a concise internal implementation checklist and execute it.

Do not delete working code merely because you prefer a different architecture.

Do not replace the project with a screenshot, static mockup, or nonfunctional prototype.

If the project already implements a feature correctly, retain it and improve it only when justified.

If a required external service, credential, or user-specific URL is unavailable, build the remaining functionality and clearly document the missing input.

---

# 3. CREATIVE DIRECTION: A PREMIUM DEVELOPER OPERATING SYSTEM

The current website already uses a dark background, purple and cyan accents, a desktop-inspired layout, and an abstract system visualization.

Preserve the strongest parts of that visual identity while significantly improving the complete experience.

## Design language

Background:
- Near-black: #09090F.
- Secondary surfaces: #101018 and #15141F.
- Avoid flat, featureless black wherever subtle surface contrast improves hierarchy.

Primary accent:
- Electric lavender: #B19AFF.

Secondary accent:
- Cyan: #78E8F3.

Text:
- Main text: #F4F3F8.
- Supporting text: muted gray with sufficient contrast.

Typography:
- Inter for interface and body text.
- DM Mono or JetBrains Mono for terminal output, labels, technical metadata, and system indicators.

Visual qualities:
- Precise spacing.
- Strong typographic hierarchy.
- Subtle glass effects.
- Carefully controlled gradients.
- Fine borders.
- Restrained shadows and glows.
- Consistent border radii.
- Smooth, purposeful transitions.
- Premium editorial composition.

Use CSS variables for the design tokens.

Create a consistent spacing, typography, color, border, and animation system.

Avoid:
- Excessive neon.
- Too many competing gradients.
- Unnecessary floating cards.
- Random animated particles.
- Excessive scrolling effects.
- Unreadable microtext.
- Decorative elements that look like buttons but do nothing.
- Excessive animations that harm performance.

The final design should feel sophisticated rather than noisy.

---

# 4. BUILD A DISTINCTIVE HOMEPAGE

The homepage should communicate who I am, what I build, and why someone should explore my work within the first few seconds.

## Navigation

Build a responsive, accessible navigation system containing:

- Home
- About
- Superpowers
- Projects
- Journey
- Contact

Include a prominent "Open Superpower Shell" control.

The navigation must work on desktop and mobile.

On mobile, provide a functional menu with proper keyboard and accessibility support.

The active section may be highlighted when appropriate, but avoid unnecessary animation.

## Hero section

Use this headline:

"Turning data into something meaningful."

Supporting introduction:

"I'm Manish Kudtarkar — a Computer Science Engineering student, aspiring data engineer, and cloud enthusiast building systems, exploring ideas, and growing technology communities."

Include:

- My name and professional identity.
- A concise supporting description.
- A primary CTA: Explore My Work.
- A secondary CTA: Try My Superpower.
- A GitHub link.
- A LinkedIn link.
- A clear visual hint directing visitors to the interactive terminal.

The hint must be visible without requiring visitors to discover a hidden interaction.

Suggested copy:

"Psst... curious about my superpowers? Open the terminal and type help."

Create an original system visualization that represents data flowing through interconnected components.

It may resemble a miniature data pipeline, network topology, or personal operating system core.

Build it with HTML and CSS, SVG, or lightweight React components.

Do not introduce large decorative image assets merely to fill space.

The visualization should reinforce my identity as a data engineer and cloud enthusiast.

---

# 5. THE SIGNATURE FEATURE: SUPERPOWER SHELL

This is the most important creative feature.

It must be a genuinely working interactive terminal implemented inside the browser.

It must NOT execute shell commands on the user's computer.

It must NOT connect to a backend simply to simulate terminal output.

It must NOT falsely claim to use an AI model or live infrastructure when it does not.

## Opening behavior

The terminal must open through:

1. The hero CTA.
2. The navigation button.
3. A persistent, unobtrusive terminal launcher.
4. A documented keyboard shortcut, such as Ctrl+K or Cmd+K.

Ensure the shortcut does not interfere with ordinary typing inside form inputs.

Include a visible close control.

Support Escape to close the terminal.

On opening, place keyboard focus appropriately.

On closing, return focus to the element that opened it when possible.

## Terminal interface

Design a polished terminal window with:

- A terminal title bar.
- Subtle status indicators.
- Scrollable output.
- A command prompt.
- A clear input field.
- Keyboard navigation.
- Command history.
- Helpful error messages.
- A welcome message.
- A command reference.

The interface must remain usable on small screens.

Provide an initial message such as:

"Welcome to SUPERPOWER SHELL."

"Explore the systems I build, the technologies I use, and the journey behind the code."

"Type help to get started."

## Required commands

Implement meaningful behavior for every command below.

### help

Display all available commands and concise descriptions.

### about

Reveal my background, learning philosophy, and interest in building practical systems.

### skills

Display my technologies grouped by discipline.

### projects

List my featured projects with identifiers, summaries, and available actions.

### project <name>

Display details for a selected project, including its purpose, technologies, and verified repository or demo links where available.

Handle unknown project names gracefully.

### aws

Explain my cloud learning journey and AWS-related interests.

Do not claim that the portfolio uses AWS services that have not actually been configured.

### community

Describe my student technology community contributions and leadership using verified information.

### achievements

Display verified certifications, educational milestones, and leadership achievements.

### contact

Display available professional contact links.

Do not invent an email address.

### resume

Open a resume only if a real, configured resume file or verified public URL exists.

If no resume is available, explain that the resume link has not yet been configured.

### surprise

Trigger a delightful, original easter egg related to curiosity, engineering, learning, or my personal journey.

### clear

Clear the terminal output without breaking the input interface.

### sudo hire manish

Display a playful response, such as:

"Permission granted. Let's build something meaningful."

This command must remain a harmless browser-side interaction.

### unknown commands

Show a helpful message and suggest using help.

## Advanced terminal behavior

Implement:

- Enter to execute a command.
- Up and Down arrows for command history.
- Sensible handling of empty input.
- Case-insensitive command recognition.
- A maximum output history to avoid uncontrolled memory growth.
- Auto-scrolling to newly generated output.
- Accessible output announcements.
- Appropriate focus handling.
- Working links in command output.
- A clear way to return to the main portfolio.

Use a safe command parser.

Do not use eval() or execute arbitrary user input.

Keep command definitions and personal data separate from the terminal presentation component.

The terminal must work with a keyboard, mouse, and touch interface.

If time permits, add tab completion for supported commands without compromising reliability.

---

# 6. ABOUT ME: TELL A REAL STORY

Create an About section that is personal and technically credible.

It should communicate:

- My Computer Science Engineering studies at Parul University.
- My interest in data engineering and cloud technologies.
- My learning-by-building approach.
- My work on practical software and data projects.
- My interest in helping student technology communities grow.

Use a narrative structure rather than a long autobiography.

Potential narrative:

"I am interested in the systems behind the products we use every day: how data moves, how services communicate, how infrastructure scales, and how thoughtful engineering turns an idea into something useful."

Do not invent employment history.

Do not fabricate internships, awards, customers, or production experience.

Do not imply that a learning project has real users or production-scale traffic unless verified.

Use first-person writing that sounds natural and confident.

---

# 7. TECH SUPERPOWERS: A SKILLS MAP

Build a visually coherent skills section grouped into meaningful categories.

Suggested groups:

## Programming

- Python
- Java
- SQL
- JavaScript

## Data engineering

- Apache Spark
- Apache Kafka
- Apache Airflow
- Data ingestion
- Data processing
- Pipeline orchestration

## Databases

- PostgreSQL
- MongoDB
- Redis

## Cloud and infrastructure

- AWS
- Docker
- Linux
- CI/CD fundamentals

## Analytics and visualization

- Pandas
- NumPy
- Plotly
- Data visualization

## APIs and application development

- Flask
- FastAPI
- React

Only display technologies that are supported by my existing portfolio, project files, or confirmed personal information.

Do not invent years of experience or skill proficiency percentages.

Avoid arbitrary progress bars that imply objectively measured expertise.

Instead, show technologies, categories, and relevant project associations.

Where useful, selecting a skill may reveal projects that use it.

This interaction must be functional rather than decorative.

---

# 8. PROJECT EXPLORER: SHOW REAL ENGINEERING

Projects should be a central part of the experience.

Create a reusable project data model.

Each project should support:

- Title.
- Short summary.
- Problem being addressed.
- Technical approach.
- Technologies used.
- Project status.
- Repository URL.
- Live demo URL, if available.
- Optional screenshot or architecture diagram.
- A concise explanation of what I learned.

Feature these projects when their details can be verified.

## Project A: Ecommerce Data Pipeline

Describe the data ingestion and processing workflow.

Relevant technologies may include Python, PostgreSQL, Airflow, Docker, and OpenIngest.

Explain the pipeline architecture and the role of each component.

Only include measured pipeline results when they are confirmed and appropriate to publish.

## Project B: AI Flood Resilience System

Describe the forecasting and visualization goals.

Highlight the use of Python, a web API, and interactive visualizations where verified.

Explain how the system explores flood-risk analysis.

Do not claim that the project provides operational emergency warnings unless that capability is actually implemented and validated.

## Project C: Agri-Credit Intelligence

Explain the concept of data infrastructure for agricultural credit workflows.

Mention technologies such as PostgreSQL, Kafka, Spark, and Redis only when they correspond to actual implemented or explicitly planned components.

Clearly distinguish implemented features from future work.

## Project D: Ecopredict

Use the existing project URL if it remains valid:

https://eco-stat-b5l2.vercel.app

Inspect the project if internet access is available.

Describe only what can be verified.

If the link is unavailable, retain it as an unverified link requiring manual confirmation instead of inventing details.

## Project presentation

Use a combination of:

- Featured project cards.
- Project detail panels or pages.
- Technology tags.
- Architecture visualizations where useful.
- Repository links.
- Live demos where verified.

Every interactive project control must have a real outcome.

External links should open safely and use appropriate link attributes.

Do not fabricate GitHub repositories.

If the exact repository URL is unknown, create a clearly identified placeholder in the project's data and document the missing URL.

Do not invent screenshots or claim that an architecture diagram depicts implemented infrastructure when it only depicts a proposed design.

---

# 9. ACHIEVEMENTS AND COMMUNITY JOURNEY

Create a visually compelling section showing my development as a builder.

Include verified information about:

- AWS Student Builder community leadership.
- My involvement in student technology events.
- My participation in technology communities.
- Relevant certifications.
- Technical projects and learning milestones.

Use a timeline or milestone-based layout.

The visual presentation may resemble a system activity log or developer changelog.

Every entry should communicate:

- What happened.
- Why it mattered.
- What I learned or contributed.

Do not fabricate dates, event attendance, certification completion, sponsorships, awards, or measurable impact.

Use only confirmed achievements.

If a detail is missing, flag it for verification rather than inventing it.

Community leadership should be presented as meaningful work, not merely as a badge.

---

# 10. CONTACT AND PROFESSIONAL CONNECTIONS

Finish with a clear, professional contact section.

Suggested heading:

"Have a good problem? Let's build something."

Include:

- GitHub.
- LinkedIn.
- Email only if a verified public email is provided.
- Resume only if a valid file or public URL exists.

Make all buttons functional.

Do not invent contact details.

Do not create a fake contact form that claims to send messages without a working submission mechanism.

If no backend exists, prefer direct contact links and explain what needs to be configured.

---

# 11. TECHNICAL ARCHITECTURE

Preserve the existing React + Vite architecture unless the repository inspection reveals a compelling technical reason to change it.

Use JavaScript or the project's existing language consistently.

Recommended component organization:

src/
├── main.jsx
├── App.jsx
├── styles.css
├── components/
│   ├── Navigation.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── SkillsExplorer.jsx
│   ├── ProjectExplorer.jsx
│   ├── JourneyTimeline.jsx
│   ├── Contact.jsx
│   ├── SuperpowerShell.jsx
│   └── Footer.jsx
├── data/
│   ├── profile.js
│   ├── skills.js
│   ├── projects.js
│   └── achievements.js
└── utils/
    └── terminalCommands.js

This is a suggested structure, not a requirement to split every small element into a separate file.

Use good judgment.

The final architecture should be modular, understandable, and easy to maintain.

Avoid giant components containing all content, terminal logic, navigation, and styling.

Keep data separate from presentation.

Reuse components where reuse improves consistency.

Use semantic HTML.

Use proper React state management for interactive features.

Avoid adding heavy libraries when native browser capabilities are sufficient.

Do not introduce a backend, database, authentication system, or paid third-party API for features that can run in the browser.

The project should work without secrets or environment variables.

---

# 12. PERFORMANCE AND RELIABILITY

Optimize for real-world usability, not just screenshots.

Requirements:

- Avoid unnecessary dependencies.
- Avoid oversized images and unnecessary videos.
- Lazy-load below-the-fold images when appropriate.
- Minimize layout shifts.
- Avoid unnecessary re-renders.
- Use efficient CSS and animations.
- Respect prefers-reduced-motion.
- Prevent horizontal overflow.
- Handle missing project links gracefully.
- Avoid console errors.
- Ensure all interactive controls have meaningful behavior.
- Do not add analytics trackers or third-party scripts unnecessarily.

Do not add fake loading screens.

Do not simulate real-time statistics without a real data source.

Do not display fabricated online status or uptime measurements.

Decorative system indicators must be clearly understood as visual design elements rather than operational monitoring.

---

# 13. ACCESSIBILITY

Implement:

- Semantic landmarks.
- Correct heading hierarchy.
- Keyboard-accessible navigation.
- Visible focus states.
- Accessible button names.
- Labels for form controls.
- Adequate contrast.
- Appropriate aria attributes.
- Focus management for the terminal dialog.
- Escape-to-close behavior.
- Screen-reader-friendly terminal output.
- Reduced-motion support.
- Mobile-friendly touch targets.

Do not use color as the only way to communicate state.

Avoid excessive ARIA attributes where native HTML semantics are sufficient.

Verify that the website remains usable without a mouse.

---

# 14. RESPONSIVE DESIGN

Test the layout at approximately these viewport widths:

- 360 px.
- 390 px.
- 768 px.
- 1024 px.
- 1440 px.
- 1920 px.

These are test targets, not the only supported screen sizes.

On mobile:

- Keep the hero headline readable.
- Avoid oversized decorative illustrations.
- Make navigation accessible.
- Ensure the terminal fits within the viewport.
- Keep terminal input usable when the virtual keyboard appears.
- Prevent content from being clipped.
- Stack project content naturally.
- Ensure all controls are reachable.
- Avoid tiny, illegible text.

Do not simply scale down the desktop layout.

Design appropriate mobile compositions.

---

# 15. SEO AND SHARING

Implement appropriate:

- Page title.
- Meta description.
- Theme color.
- Viewport configuration.
- Open Graph metadata.
- Social sharing metadata where useful.
- Favicon or a simple original MANISH.OS mark.

Use meaningful page titles and descriptions.

Do not add fake social proof, fabricated testimonials, or invented endorsements.

If a social preview image is generated, ensure that the image reflects the actual portfolio and is optimized for web delivery.

---

# 16. AWS DEPLOYMENT: KEEP IT SIMPLE

The challenge requires a public portfolio hosted through AWS Amplify Hosting.

Use a static frontend deployment.

Recommended flow:

GitHub repository
    |
    v
AWS Amplify Hosting
    |
    v
Build React + Vite project
    |
    v
Publish dist/
    |
    v
Public HTTPS portfolio

Use the existing Amplify configuration if it is correct.

For a Vite project, ensure the build configuration installs dependencies, runs the production build, and publishes the dist directory.

Validate the actual repository configuration before modifying it.

The final application should not require:

- Amazon RDS.
- Amazon ECS.
- AWS App Runner.
- A custom backend.
- A database.
- API credentials.
- Secrets Manager.

Do not introduce these services unless a genuine, documented requirement emerges.

Document the AWS services actually used.

Do not claim that the website has been deployed until the live URL has been tested.

Never place AWS credentials, access keys, private tokens, or secrets in the repository.

Never commit .env files containing secrets.

Include an appropriate .gitignore.

Provide a README explaining:

- Project purpose.
- Features.
- Technology stack.
- Local setup.
- Development commands.
- Production build.
- Deployment architecture.
- AWS Amplify deployment instructions.
- Configuration requirements.
- Known limitations.

Include an architecture document and a submission checklist.

---

# 17. AWS STUDENT BUILDER CHALLENGE REQUIREMENTS

Treat these as mandatory acceptance criteria.

The submission needs:

1. A publicly accessible website hosted on AWS.
2. About Me.
3. Skills or Tech Superpowers.
4. Projects or Achievements.
5. One original, working creative feature.
6. A visible hint that helps visitors discover the creative feature.
7. Normal navigation that remains easy to use.
8. A GitHub repository link.
9. Screenshots of the portfolio and AWS setup.
10. Documentation of the AWS services used.
11. A project write-up describing the creative feature.
12. A reflection on what I learned and the challenges I encountered.
13. An original portfolio that has not been published previously.

The creative feature must work.

Do not confuse decorative animations with functional interactions.

The website must remain accessible throughout the judging period.

Never claim that a submission has been completed until the required steps have actually been completed.

---

# 18. TESTING REQUIREMENTS

Perform the strongest testing available in the current environment.

First inspect package.json and the existing scripts.

Then:

1. Install dependencies if required.
2. Run the development server.
3. Inspect browser errors if browser tools are available.
4. Test every navigation link.
5. Test every CTA.
6. Test the terminal open and close behavior.
7. Test every documented terminal command.
8. Test unknown commands.
9. Test keyboard interactions.
10. Test focus handling.
11. Test mobile layouts.
12. Check for horizontal overflow.
13. Run the production build.
14. Fix all build errors.
15. Inspect the generated dist/ directory.
16. Verify that the final README and deployment configuration match the actual project.

Do not claim that a test passed unless it was actually executed.

If browser automation is unavailable, state that limitation and provide precise manual test steps.

If a command fails, diagnose the underlying cause, fix it where possible, and rerun the command.

Do not hide errors or report success when verification failed.

---

# 19. QUALITY BAR

The website must satisfy all of the following before being considered implementation-complete:

- It has a distinctive visual identity.
- It communicates who I am immediately.
- Its navigation works.
- Its core sections are complete.
- The Superpower Shell is genuinely interactive.
- Its content is authentic.
- Its project links are verified or clearly identified as needing configuration.
- Its layout works on mobile and desktop.
- Its interactive features are accessible.
- It does not depend on unnecessary backend infrastructure.
- It contains no committed secrets.
- Its production build succeeds.
- Its deployment configuration matches the application.
- Its documentation explains how to run and deploy it.
- Its known limitations are documented.

Do not add features merely because they look impressive.

Prioritize quality, functionality, originality, clarity, and reliability.

---

# 20. EXECUTION STRATEGY

Work through these phases in order.

PHASE A — INSPECT
Understand the existing project and establish its current state.

PHASE B — ARCHITECT
Define the component structure, content model, terminal behavior, and deployment approach.

PHASE C — DESIGN
Refine the design system, responsive layout, visual hierarchy, and interaction patterns.

PHASE D — IMPLEMENT
Make the changes directly in the existing workspace.

PHASE E — TEST
Run the application, exercise its interactions, and fix errors.

PHASE F — BUILD
Generate and inspect the production build.

PHASE G — DOCUMENT
Update the README, architecture documentation, deployment instructions, and challenge checklist.

PHASE H — REPORT
Summarize the work actually completed, the tests actually run, and the remaining user actions.

Do not stop after the planning phase.

Do not stop after generating the homepage.

Continue through implementation, testing, and documentation until you reach a real environmental or permission limitation.

If a task requires an action in my personal AWS account, explain the exact steps rather than pretending to perform them.

Do not wait for my approval for ordinary, reversible improvements within the scope of this project.

Ask for clarification only when an essential personal detail, external URL, credential, or irreversible action makes it necessary.

---

# 21. FINAL RESPONSE FORMAT

When you finish, report:

## A. What was built
Describe the actual features implemented.

## B. Files changed
List the significant files created or modified.

## C. Interactive features
List the working terminal commands and other verified interactions.

## D. Verification results
Report the actual results of dependency installation, development startup, production build, and any browser or accessibility tests performed.

Clearly distinguish successful tests from untested items.

## E. AWS deployment
Explain the precise steps still required to publish the project through Amplify Hosting.

Do not claim deployment is complete without a verified public URL.

## F. Remaining configuration
List any missing repository links, personal URLs, contact details, project screenshots, or achievement details that require my confirmation.

## G. Submission readiness
Use a checklist to distinguish completed requirements from outstanding ones.

## H. Next command
Give me the exact next terminal command or AWS Console action to perform.

---

# FINAL INSTRUCTION

Build MANISH.OS as if it represents my engineering mindset to a panel of experienced AWS engineers and to recruiters evaluating my portfolio.

Make it visually distinctive without sacrificing usability.

Make the terminal a memorable experience without turning the website into a gimmick.

Make the engineering simple enough to deploy reliably.

Make the content honest enough to withstand technical scrutiny.

Make the result feel like a personal product rather than a template.

START BY INSPECTING THE CURRENT WORKSPACE. THEN IMPLEMENT, TEST, FIX, AND DOCUMENT THE PROJECT DIRECTLY.

Do not merely tell me how to build it.

BUILD IT.