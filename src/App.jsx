import { useEffect, useRef, useState } from 'react'
import {
  ArrowUpRight, Check, ChevronRight, Cloud, Code2, Command, Database,
  Github, Linkedin, Menu, Network, Sparkles, Terminal as TerminalIcon, X,
} from 'lucide-react'

const profile = {
  github: 'https://github.com/ManishKudtarkar',
  linkedin: 'https://www.linkedin.com/in/manish-kudtarkar',
  email: 'manishkudtarkar467@gmail.com',
  phone: '+91 9324377433',
  resume: '/Manish.pdf',
  portfolio: 'https://dx9n5rt7fsato.cloudfront.net',
}

const projects = [
  { id: 'puverse', number: '01', title: 'PUVerse', kind: 'CAMPUS MANAGEMENT PLATFORM', summary: 'A centralized full-stack campus platform with administrative dashboards and fine-grained role-based access across student and faculty tiers.', stack: ['Next.js', 'Express', 'PostgreSQL', 'Prisma', 'Docker', 'AWS'], status: 'Live on Amplify', link: 'https://main.dxvhf7igg58iu.amplifyapp.com/', detail: 'Designed around normalized relational data and modular services, with containerized deployment on Amazon ECS and Amazon RDS using secure parameter configuration via AWS SSM.' },
  { id: 'ecopredict', number: '02', title: 'EcoPredict', kind: 'AI BIODIVERSITY FORECASTING', summary: 'An AI-driven biodiversity analysis system that turns noisy GBIF insect occurrence data into a curated dataset for forecasting work.', stack: ['Python', 'Pandas', 'GBIF', 'Scikit-learn'], status: 'Analysis complete', link: profile.github, detail: 'The ETL pipeline processed 2,868 raw records into 2,633 valid entries through duplicate resolution, missing-value handling, coordinate sanitization, and noise reduction.' },
  { id: 'open-ingest', number: '03', title: 'OpenIngest', kind: 'ENTERPRISE ETL FRAMEWORK', summary: 'An extensible Python ETL library for multi-cloud ingestion, schema validation, and optimized Parquet serialization.', stack: ['Python', 'Airflow', 'HDFS', 'S3', 'Parquet'], status: 'Published framework', link: 'https://open-ingest.vercel.app', detail: 'OpenIngest supports S3, Azure Blob, and GCS ingestion while automating production-ready Apache Airflow DAG generation for recurring pipelines.' },
  { id: 'smart-grid', number: '04', title: 'Industrial Smart Grid AI', kind: 'DISTRIBUTED ML PLATFORM', summary: 'A distributed telemetry platform for anomaly forecasting and fault detection across a 42-feature pipeline.', stack: ['Python', 'FastAPI', 'Scikit-learn'], status: 'Engineering build', link: 'https://industrial-smart-grid-ai.vercel.app', detail: 'The platform exposes 25 FastAPI endpoints and targets sub-50ms inference latency for its automated anomaly forecasting workflow.' },
]

const skillGroups = [
  { icon: Code2, title: 'Programming & CS', items: ['Java', 'Python', 'C / C++', 'TypeScript', 'SQL', 'DSA'] },
  { icon: Database, title: 'Data engineering', items: ['ETL pipelines', 'Airflow', 'Hadoop HDFS', 'Parquet', 'Pandas'] },
  { icon: Network, title: 'Full stack systems', items: ['Node.js', 'Express', 'React', 'Next.js', 'FastAPI', 'JWT'] },
  { icon: Cloud, title: 'Cloud & delivery', items: ['AWS ECS / RDS', 'S3 / Lambda', 'Docker', 'GitHub Actions', 'Linux'] },
]

const commandHelp = [
  ['help', 'show available commands'], ['about', 'read my builder story'],
  ['skills', 'explore my technology map'], ['projects', 'list selected builds'],
  ['project <name>', 'inspect a project'], ['aws', 'open my cloud journey'],
  ['community', 'see my community work'], ['achievements', 'view verified milestones'],
  ['contact', 'find professional links'], ['resume', 'check resume availability'],
  ['surprise', 'unlock a tiny easter egg'], ['clear', 'clear the output'],
  ['sudo hire manish', 'request builder access'],
]

function commandResponse(command) {
  const [name, ...args] = command.trim().toLowerCase().split(/\s+/)
  if (!name) return ''
  if (name === 'help') return commandHelp.map(([cmd, description]) => `${cmd.padEnd(20)} ${description}`).join('\n')
  if (name === 'about') return 'I am Manish Kudtarkar, a Computer Science Engineering student at Parul University. I learn by building practical systems, debugging honestly, and sharing what I discover. My curiosity lives where data, software, and cloud infrastructure meet.'
  if (name === 'skills') return 'PROGRAMMING     Python · Java · SQL · JavaScript\nDATA             Spark · Kafka · Airflow · ingestion\nSTORAGE / APIs   PostgreSQL · MongoDB · Redis · Flask · FastAPI\nCLOUD            AWS · Docker · Linux · CI/CD fundamentals'
  if (name === 'projects') return projects.map(project => `${project.number}  ${project.id.padEnd(14)} ${project.title}`).join('\n') + '\n\nTry: project ecommerce'
  if (name === 'project') {
    const project = projects.find(item => item.id === args.join('-') || item.title.toLowerCase().includes(args.join(' ')))
    return project ? `${project.title}\n${project.detail}\n\nStack: ${project.stack.join(' · ')}\nStatus: ${project.status}\nLink: ${project.link}` : 'Project not found. Try project ecommerce, project flood, project agri-credit, or project ecopredict.'
  }
  if (name === 'aws') return 'My cloud journey is about learning by shipping small, explainable systems. This portfolio uses AWS Amplify Hosting as a static deployment target; no AWS APIs, credentials, or backend services are required in the browser.'
  if (name === 'community') return 'I care about making student technology communities more welcoming: sharing resources, helping coordinate learning, and encouraging builders to try cloud tools without pretending the learning curve is not real.'
  if (name === 'achievements') return 'VERIFIED MILESTONES\n• Computer Science Engineering studies — Parul University\n• AWS Student Builder community involvement\n• Practical data and software projects\n\nDates and certification details should be added only after personal verification.'
  if (name === 'contact') return `GitHub   ${profile.github}\nLinkedIn ${profile.linkedin}\nEmail    ${profile.email}\nPhone    ${profile.phone}`
  if (name === 'resume') return `Resume: ${profile.resume}\nOpen the verified PDF resume to see experience, projects, skills, education, and certifications.`
  if (name === 'surprise') return 'SUPERPOWER UNLOCKED\nCuriosity is a compounding advantage. Keep asking better questions, then build the smallest thing that can answer one.'
  if (name === 'sudo' && args.join(' ') === 'hire manish') return "Permission granted. Let's build something meaningful."
  return `Command not found: ${command}\nType help to see what you can try.`
}

function SuperpowerShell({ onClose }) {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to SUPERPOWER SHELL.' },
    { type: 'system', text: 'Explore the systems I build, the technologies I use, and the journey behind the code.' },
    { type: 'system', text: 'Type help to get started. This terminal is browser-only; no commands run on your computer.' },
  ])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef(null)
  const outputRef = useRef(null)
  const executedRef = useRef([])

  useEffect(() => { inputRef.current?.focus() }, [])
  useEffect(() => { outputRef.current?.scrollTo(0, outputRef.current.scrollHeight) }, [history])
  const run = (event) => {
    event.preventDefault()
    const raw = input.trim()
    if (!raw) return
    executedRef.current = [raw, ...executedRef.current.filter(item => item !== raw)].slice(0, 30)
    if (raw.toLowerCase() === 'clear') { setHistory([]); setInput(''); return }
    setHistory(lines => [...lines, { type: 'input', text: `visitor@manish-os:~$ ${raw}` }, { type: 'output', text: commandResponse(raw) }].slice(-60))
    setInput('')
    setHistoryIndex(-1)
  }
  const navigateHistory = (direction) => {
    if (!executedRef.current.length) return
    const next = Math.max(-1, Math.min(executedRef.current.length - 1, historyIndex + direction))
    setHistoryIndex(next)
    setInput(next === -1 ? '' : executedRef.current[next])
  }
  return <div className="shell" role="dialog" aria-modal="true" aria-labelledby="shell-title">
    <div className="shell-bar"><div className="traffic"><i/><i/><i/></div><span id="shell-title"><TerminalIcon size={14}/> superpower-terminal</span><button aria-label="Close Superpower Shell" onClick={onClose}><X size={17}/></button></div>
    <div className="shell-output" ref={outputRef} aria-live="polite">{history.map((line, index) => <pre className={`shell-line ${line.type}`} key={`${line.text}-${index}`}>{line.text}</pre>)}</div>
    <form className="shell-prompt" onSubmit={run}><label htmlFor="shell-input">visitor@manish-os:~$</label><input ref={inputRef} id="shell-input" value={input} onChange={event => setInput(event.target.value)} onKeyDown={event => { if (event.key === 'ArrowUp') { event.preventDefault(); navigateHistory(-1) } if (event.key === 'ArrowDown') { event.preventDefault(); navigateHistory(1) } }} autoComplete="off" spellCheck="false" placeholder="type a command…" /></form>
  </div>
}

function App() {
  const [shellOpen, setShellOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSkill, setActiveSkill] = useState(null)
  const lastTrigger = useRef(null)
  const openShell = (event) => { lastTrigger.current = event?.currentTarget || document.activeElement; setShellOpen(true) }
  const closeShell = () => { setShellOpen(false); lastTrigger.current?.focus?.() }

  useEffect(() => {
    const onKey = event => {
      if (event.key === 'Escape' && shellOpen) closeShell()
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) { event.preventDefault(); openShell() }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [shellOpen])

  const nav = [['About', '#about'], ['Superpowers', '#skills'], ['Projects', '#projects'], ['Journey', '#journey'], ['Contact', '#contact']]
  return <div className="app-shell">
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="topbar"><a className="brand" href="#home" aria-label="MANISH.OS home"><span className="brand-mark">M<span>.</span></span><span className="brand-name">MANISH<span>.OS</span></span></a>
      <nav className={mobileOpen ? 'nav nav-open' : 'nav'} aria-label="Primary navigation">{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMobileOpen(false)}>{label}</a>)}</nav>
      <div className="top-actions"><span className="status"><i/> OPEN TO OPPORTUNITIES</span><button className="terminal-trigger" onClick={openShell}><TerminalIcon size={15}/> <span>Open shell</span><kbd>⌘ K</kbd></button></div>
      <button className="mobile-menu" aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileOpen} onClick={() => setMobileOpen(value => !value)}>{mobileOpen ? <X/> : <Menu/>}</button>
    </header>
    <main>
      <section className="hero section-wrap" id="home"><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line"/> PERSONAL DEVELOPER SYSTEM <span className="version">v1.0.26</span></div><h1>Turning data into<br/><span className="gradient-text">something meaningful.</span></h1><p className="hero-sub">I'm <strong>Manish Kudtarkar</strong> — a Computer Science Engineering student, aspiring data engineer, and cloud enthusiast building systems, exploring ideas, and growing technology communities.</p><div className="hero-buttons"><a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a><button className="button button-secondary" onClick={openShell}><TerminalIcon size={16}/> Try my superpower</button></div><p className="terminal-hint"><Sparkles size={14}/> Psst… open the terminal and type <code>help</code> to uncover my superpowers.</p><div className="social-row"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={12}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={12}/></a><span className="location">VADODARA, INDIA · IST</span></div></div>
        <div className="hero-visual" aria-label="Abstract data pipeline visualization"><div className="pipeline-line line-one"/><div className="pipeline-line line-two"/><div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="orbit orbit-c"/><div className="core-card"><div className="core-top"><span className="tiny-dot"/> SYSTEM ONLINE <span className="core-time">LOCAL / 01</span></div><div className="core-symbol"><Command size={48} strokeWidth={1.15}/></div><div className="core-name">MANISH<span>.OS</span></div><div className="core-caption">BUILD · LEARN · SHIP</div><div className="core-progress"><span/></div><div className="core-bottom"><span>DATA ENGINEERING</span><span>◈ CLOUD CURIOUS</span></div></div><div className="float-chip chip-one"><Database size={15}/><span>Data pipelines</span><b>↗</b></div><div className="float-chip chip-two"><Cloud size={15}/><span>Cloud curious</span><b>✦</b></div><div className="visual-index">FIG 01 / A WORK IN PROGRESS</div></div>
        <div className="hero-footer"><span>SCROLL TO EXPLORE</span><span className="scroll-line"/><span>MADE WITH CURIOSITY <span className="purple">✳</span></span></div>
      </section>
      <section className="about section-wrap" id="about"><div className="section-heading"><span className="section-index">01 / ABOUT</span><h2>Curious by default.<br/><span className="muted">Builder by choice.</span></h2></div><div className="about-grid"><p className="about-lead">I am a Computer Science Engineering student specializing in Big Data Analytics, interested in the systems behind the products we use every day: how data moves, how services communicate, and how thoughtful engineering turns an idea into something useful.</p><div className="about-detail"><p>My work spans full-stack enterprise architecture, relational database engineering, REST APIs, ETL pipelines, and cloud delivery. I learn by building practical systems, debugging honestly, and helping student technology communities grow.</p><div className="mini-stats"><div><strong>2027</strong><span>Expected graduation</span></div><div><strong>8+</strong><span>REST endpoints built</span></div><div><strong>40%</strong><span>Less manual handling</span></div></div></div></div></section>
      <section className="skills-section" id="skills"><div className="section-wrap"><div className="section-heading row-heading"><div><span className="section-index">02 / SUPERPOWERS</span><h2>A growing toolkit.</h2></div><p>Tools are only superpowers when you know what to build with them.</p></div><div className="skill-grid">{skillGroups.map(({ icon: Icon, title, items }, index) => <article className={`skill-card ${activeSkill === title ? 'skill-active' : ''}`} key={title} onClick={() => setActiveSkill(activeSkill === title ? null : title)} tabIndex="0" onKeyDown={event => event.key === 'Enter' && setActiveSkill(activeSkill === title ? null : title)}><div className="skill-card-top"><span>0{index + 1}</span><Icon size={20}/></div><h3>{title}</h3><div className="skill-items">{items.map(item => <span key={item}>{item}</span>)}</div><div className="skill-card-line"/>{activeSkill === title && <p className="skill-note">Used as a lens across the projects below.</p>}</article>)}</div></div></section>
      <section className="projects section-wrap" id="projects"><div className="section-heading row-heading"><div><span className="section-index">03 / SELECTED BUILDS</span><h2>Proof of curiosity.</h2></div><a className="text-link" href={profile.github} target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={15}/></a></div><div className="project-list">{projects.map(project => <article className="project-row" key={project.id}><span className="project-number">{project.number}</span><div className="project-main"><span className="project-tag">{project.kind}</span><h3>{project.title}</h3><p>{project.summary}</p><div className="tag-list">{project.stack.map(item => <span key={item}>{item}</span>)}</div><small><Check size={13}/> {project.status}</small></div><a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><ArrowUpRight size={20}/></a></article>)}</div></section>
      <section className="journey section-wrap" id="journey"><div className="journey-card"><div><span className="section-index">04 / THE JOURNEY</span><h2>Experience that<br/>turns ideas into <span className="gradient-text">systems.</span></h2><p>As a Full Stack Developer at Axflo Pump Solution, I worked across enterprise requirements, relational data models, REST APIs, automated business workflows, and GitHub Actions delivery pipelines.</p><div className="journey-badges"><span><Check size={15}/> 8+ REST endpoints</span><span><Check size={15}/> ~40% less manual handling</span><span><Cloud size={15}/> AWS Certified Cloud Practitioner</span></div></div><div className="journey-side"><div className="journey-glyph">✳</div><span className="journey-side-label">CURRENT MODE</span><strong>Learning<br/>in public.</strong><span className="side-line"/></div></div></section>
      <section className="contact section-wrap" id="contact"><span className="section-index">05 / NEXT TRANSMISSION</span><h2>Have a good problem?<br/><span className="gradient-text">Let's build something.</span></h2><p>Open to connecting with builders, learning from the community, and exploring data, full-stack systems, and cloud opportunities.</p><div className="contact-links"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={14}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={14}/></a><a href={`mailto:${profile.email}`}><span>@</span> Email <ArrowUpRight size={14}/></a><a href={profile.resume} target="_blank" rel="noreferrer"><span>↓</span> Download resume <ArrowUpRight size={14}/></a><button onClick={openShell}><TerminalIcon size={17}/> Say hello via shell <ArrowUpRight size={14}/></button></div></section>
    </main>
    <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">M<span>.</span></span><span className="brand-name">MANISH<span>.OS</span></span></a><span>DESIGNED TO KEEP LEARNING.</span><span>© 2026 MANISH KUDTARKAR</span></footer>
    {shellOpen && <div className="terminal-overlay" onMouseDown={event => event.target === event.currentTarget && closeShell()}><SuperpowerShell onClose={closeShell}/></div>}
    <button className="floating-terminal" onClick={openShell} aria-label="Open Superpower Shell"><TerminalIcon size={18}/><span>Try <code>help</code></span></button>
  </div>
}

export default App
