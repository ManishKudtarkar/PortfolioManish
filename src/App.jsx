import { useEffect, useRef, useState } from 'react'
import {
  ArrowUpRight, Check, ChevronRight, Cloud, Code2, Command, Database,
  Github, Linkedin, Menu, Network, Sparkles, Terminal as TerminalIcon, X,
} from 'lucide-react'

const profile = {
  github: 'https://github.com/ManishKudtarkar',
  linkedin: 'https://www.linkedin.com/',
}

const projects = [
  { id: 'ecommerce', number: '01', title: 'Ecommerce Data Pipeline', kind: 'DATA ENGINEERING', summary: 'A containerized workflow for ingesting ecommerce data and shaping it into a queryable PostgreSQL destination.', stack: ['Python', 'Airflow', 'PostgreSQL', 'Docker'], status: 'Build in progress', link: profile.github, detail: 'The project explores ingestion, orchestration, and repeatable local development with Docker. It is a learning project, not a claim of production scale.' },
  { id: 'flood', number: '02', title: 'AI Flood Resilience System', kind: 'DATA + AI', summary: 'A forecasting-focused exploration of flood-risk analysis for Indian cities, paired with an API and interactive visualizations.', stack: ['Python', 'Flask', 'Plotly', 'Forecasting'], status: 'Exploration', link: profile.github, detail: 'The goal is to make environmental data easier to explore. It does not provide operational emergency warnings.' },
  { id: 'agri-credit', number: '03', title: 'Agri-Credit Intelligence', kind: 'DATA PLATFORM', summary: 'A concept for making agricultural credit workflows more informed through dependable data infrastructure.', stack: ['PostgreSQL', 'Kafka', 'Spark', 'Redis'], status: 'Concept', link: profile.github, detail: 'This is an architecture-led project. The listed technologies describe the planned platform components, not a claim that every service is already implemented.' },
  { id: 'ecopredict', number: '04', title: 'Ecopredict', kind: 'ENVIRONMENTAL ANALYTICS', summary: 'An environmental analytics experience that connects data with a clearer, more approachable interface.', stack: ['Analytics', 'Visualization', 'Web'], status: 'Live demo', link: 'https://eco-stat-b5l2.vercel.app', detail: 'Open the existing public demo to inspect the experience. Verify the URL and project details before a public submission.' },
]

const skillGroups = [
  { icon: Code2, title: 'Programming', items: ['Python', 'Java', 'SQL', 'JavaScript'] },
  { icon: Database, title: 'Data engineering', items: ['Apache Spark', 'Apache Kafka', 'Apache Airflow', 'Data ingestion'] },
  { icon: Network, title: 'Storage & APIs', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Flask', 'FastAPI'] },
  { icon: Cloud, title: 'Cloud & delivery', items: ['AWS', 'Docker', 'Linux', 'CI/CD fundamentals'] },
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
  if (name === 'contact') return `GitHub   ${profile.github}\nLinkedIn ${profile.linkedin}\nEmail    Not configured — no address is invented here.`
  if (name === 'resume') return 'Resume link not configured yet. Add a verified public URL or a real file before publishing.'
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
      <section className="about section-wrap" id="about"><div className="section-heading"><span className="section-index">01 / ABOUT</span><h2>Curious by default.<br/><span className="muted">Builder by choice.</span></h2></div><div className="about-grid"><p className="about-lead">I am interested in the systems behind the products we use every day: how data moves, how services communicate, and how thoughtful engineering turns an idea into something useful.</p><div className="about-detail"><p>I am studying Computer Science Engineering at Parul University and learning by building. I ship practical projects, debug openly, and improve one iteration at a time. Beyond code, I enjoy helping student technology communities grow.</p><div className="mini-stats"><div><strong>01</strong><span>Curiosity first</span></div><div><strong>∞</strong><span>Things to learn</span></div><div><strong>↗</strong><span>Build in public</span></div></div></div></div></section>
      <section className="skills-section" id="skills"><div className="section-wrap"><div className="section-heading row-heading"><div><span className="section-index">02 / SUPERPOWERS</span><h2>A growing toolkit.</h2></div><p>Tools are only superpowers when you know what to build with them.</p></div><div className="skill-grid">{skillGroups.map(({ icon: Icon, title, items }, index) => <article className={`skill-card ${activeSkill === title ? 'skill-active' : ''}`} key={title} onClick={() => setActiveSkill(activeSkill === title ? null : title)} tabIndex="0" onKeyDown={event => event.key === 'Enter' && setActiveSkill(activeSkill === title ? null : title)}><div className="skill-card-top"><span>0{index + 1}</span><Icon size={20}/></div><h3>{title}</h3><div className="skill-items">{items.map(item => <span key={item}>{item}</span>)}</div><div className="skill-card-line"/>{activeSkill === title && <p className="skill-note">Used as a lens across the projects below.</p>}</article>)}</div></div></section>
      <section className="projects section-wrap" id="projects"><div className="section-heading row-heading"><div><span className="section-index">03 / SELECTED BUILDS</span><h2>Proof of curiosity.</h2></div><a className="text-link" href={profile.github} target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={15}/></a></div><div className="project-list">{projects.map(project => <article className="project-row" key={project.id}><span className="project-number">{project.number}</span><div className="project-main"><span className="project-tag">{project.kind}</span><h3>{project.title}</h3><p>{project.summary}</p><div className="tag-list">{project.stack.map(item => <span key={item}>{item}</span>)}</div><small><Check size={13}/> {project.status}</small></div><a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><ArrowUpRight size={20}/></a></article>)}</div></section>
      <section className="journey section-wrap" id="journey"><div className="journey-card"><div><span className="section-index">04 / THE JOURNEY</span><h2>Tech is better<br/>when we build <span className="gradient-text">together.</span></h2><p>Alongside my engineering journey, I contribute to student technology communities and encourage more people to explore cloud technologies through practical, shared learning.</p><div className="journey-badges"><span><Cloud size={15}/> AWS community</span><span><Sparkles size={15}/> Student leadership</span></div></div><div className="journey-side"><div className="journey-glyph">✳</div><span className="journey-side-label">CURRENT MODE</span><strong>Learning<br/>in public.</strong><span className="side-line"/></div></div></section>
      <section className="contact section-wrap" id="contact"><span className="section-index">05 / NEXT TRANSMISSION</span><h2>Have a good problem?<br/><span className="gradient-text">Let's build something.</span></h2><p>Open to connecting with builders, learning from the community, and exploring data and cloud opportunities.</p><div className="contact-links"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={14}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={14}/></a><button onClick={openShell}><TerminalIcon size={17}/> Say hello via shell <ArrowUpRight size={14}/></button></div></section>
    </main>
    <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">M<span>.</span></span><span className="brand-name">MANISH<span>.OS</span></span></a><span>DESIGNED TO KEEP LEARNING.</span><span>© 2026 MANISH KUDTARKAR</span></footer>
    {shellOpen && <div className="terminal-overlay" onMouseDown={event => event.target === event.currentTarget && closeShell()}><SuperpowerShell onClose={closeShell}/></div>}
    <button className="floating-terminal" onClick={openShell} aria-label="Open Superpower Shell"><TerminalIcon size={18}/><span>Try <code>help</code></span></button>
  </div>
}

export default App
