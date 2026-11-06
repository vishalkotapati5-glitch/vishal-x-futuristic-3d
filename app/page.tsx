"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight, ArrowRight, ArrowDown, Github, Linkedin, MapPin, Code2,
  Database, BrainCircuit, Server, ShieldCheck, ExternalLink, CheckCircle2, Menu, X
} from "lucide-react";

const InteractiveScene = dynamic(() => import("./components/InteractiveScene"), { ssr: false });

const projects = [
  { n: "01", name: "BrandShield AI", kind: "AI · Full-Stack", desc: "An AI-powered brand governance platform that checks marketing content against saved brand guidelines and routes findings to human review.", stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Gemini"], live: "https://brand-shield-m6x1qs9i3-vishalkotapati5-1116.vercel.app", repo: "https://github.com/vishalkotapati5-glitch/BrandShield-AI", features: ["Gemini-powered content auditing", "Brand guideline creation and management", "Findings with severity and suggested corrections", "Human review: approve, reject and request changes", "Audit history and PostgreSQL persistence"] },
  { n: "02", name: "Customer Support AI", kind: "Machine Learning · API", desc: "A machine-learning prototype that classifies customer support tickets by category and priority, exposed through a FastAPI endpoint.", stack: ["Python", "pandas", "scikit-learn", "FastAPI"], features: ["Dataset preparation and exploration", "Category and priority model training", "Prediction endpoint built with FastAPI", "Early prototype based on a small sample dataset"] },
  { n: "03", name: "Task Manager", kind: "Backend · Database", desc: "A task-management project focused on CRUD workflows, backend development and database integration.", stack: ["Node.js", "Prisma", "PostgreSQL"], repo: "https://github.com/vishalkotapati5-glitch/task_manager", features: ["CRUD-oriented task management", "Database integration and ORM practice", "Backend API development"] },
  { n: "04", name: "Profile Service Reliability Wrapper", kind: "Backend Engineering", desc: "A reliability exercise that improves an avatar service with timeouts, retries and fallback responses.", stack: ["JavaScript", "Node.js", "AbortController"], features: ["Timeout handling with AbortController", "Retryable-error detection", "Exponential backoff", "Fallback response when upstream service fails"] }
];

const skills = [
  { title: "Frontend", icon: Code2, items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Vite"] },
  { title: "Backend", icon: Server, items: ["Python", "FastAPI", "Node.js", "REST APIs"] },
  { title: "Database", icon: Database, items: ["PostgreSQL", "SQLAlchemy", "Prisma", "Alembic"] },
  { title: "AI / ML", icon: BrainCircuit, items: ["Google Gemini API", "pandas", "scikit-learn"] }
];

export default function Home() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";
  const [filter, setFilter] = useState("All");
  const [menu, setMenu] = useState(false);
  const shown = projects.filter(p => filter === "All" || p.kind.toLowerCase().includes(filter.toLowerCase()) || (filter === "AI" && p.name === "Customer Support AI"));

  return (
    <main>
      <header className="nav">
        <a className="brand" href="#home"><b>V</b><span>VISHAL<span className="brand-accent">.X</span></span></a>
        <button className="hamb" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? <X /> : <Menu />}</button>
        <nav className={menu ? "open" : ""}>
          {["About", "Skills", "Projects", "Journey", "Contact"].map(x => <a onClick={() => setMenu(false)} href={"#" + x.toLowerCase()} key={x}>{x}</a>)}
          <a className="navbtn" href="https://github.com/vishalkotapati5-glitch" target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>
      </header>

      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <motion.div className="status" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}><i /> OPEN TO INTERNSHIP OPPORTUNITIES</motion.div>
          <motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>FULL-STACK DEVELOPER · AI & ML STUDENT</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}>Building beyond<br /><em>the ordinary.</em><span>_</span></motion.h1>
          <motion.p className="intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>I’m Vishal Reddy — a developer exploring the space between full-stack engineering and intelligent applications. I turn ideas into practical, working products.</motion.p>
          <motion.div className="actions" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}><a className="primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a><a className="secondary" href="#contact">Let’s connect <ArrowRight size={16} /></a></motion.div>
          <div className="social"><a href="https://github.com/vishalkotapati5-glitch" target="_blank" rel="noreferrer"><Github /> GitHub ↗</a><a href="https://www.linkedin.com/in/kotapati-vishal-151645309/" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn ↗</a><span><MapPin /> Bengaluru, India</span></div>
        </div>
        <motion.div className="scene-wrap" initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          <InteractiveScene />
          <div className="scene-label"><span className="pulse-dot" /> INTERACTIVE 3D / DRAG TO EXPLORE</div>
          <div className="float-chip chip-one"><BrainCircuit /> AI-powered</div>
          <div className="float-chip chip-two"><Database /> Full-stack</div>
          <div className="float-chip chip-three"><ShieldCheck /> Reliable systems</div>
        </motion.div>
        <a className="scroll" href="#about">SCROLL TO EXPLORE <ArrowDown size={14} /></a>
      </section>

      <section className="section wrap" id="about"><label>01 / ABOUT</label><div className="two"><h2>Curious by nature.<br /><span>Builder by practice.</span></h2><div><p>I’m a second-year B.Tech student in Artificial Intelligence & Machine Learning at Yenepoya University. I enjoy building applications that connect clean user experiences with dependable backend systems.</p><p>My recent work spans AI-assisted content auditing, machine-learning prototypes, database-backed applications and backend reliability patterns. I learn by building, testing, debugging and improving real projects.</p><div className="facts"><div><small>BASED IN</small><b>Bengaluru, India</b></div><div><small>FOCUS</small><b>Full-Stack · Backend · AI</b></div><div><small>EDUCATION</small><b>B.Tech, AI & ML</b></div></div></div></div></section>

      <section className="section band" id="skills"><div className="wrap"><label>02 / TOOLKIT</label><div className="heading"><div><h2>Tools I work with<span>.</span></h2><p>A growing toolkit for building across the stack.</p></div><small>LEARN · APPLY · IMPROVE</small></div><div className="skillgrid">{skills.map((group, i) => { const Icon = group.icon; return <motion.article className="skill" key={group.title} whileHover={{ y: -9, rotateX: 4, rotateY: -4 }} transition={{ type: "spring", stiffness: 220 }}><div className="skilltop"><Icon /><small>0{i + 1}</small></div><h3>{group.title}</h3><div className="tags">{group.items.map(x => <span key={x}>{x}</span>)}</div></motion.article>; })}</div></div></section>

      <section className="section wrap" id="projects"><label>03 / SELECTED WORK</label><div className="heading"><div><h2>Things I’ve built<span>.</span></h2><p>Real projects, real implementation details.</p></div><small>PROJECT INDEX / 2026</small></div><div className="filters">{["All", "AI", "Full-Stack", "Backend"].map(x => <button className={filter === x ? "selected" : ""} onClick={() => setFilter(x)} key={x}>{x}</button>)}</div><div className="projectlist">{shown.map((p, i) => <motion.article className="project" key={p.n} initial={{ opacity: 0, y: 25, rotateX: 5 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} whileHover={{ y: -5 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}><div className="projectmeta"><span>PROJECT / {p.n}</span><span>{p.kind}</span></div><div className="projectbody"><div><h3>{p.name}</h3><p>{p.desc}</p><div className="tags">{p.stack.map(x => <span key={x}>{x}</span>)}</div><div className="links">{p.live && <a href={p.live} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14} /></a>}{p.repo && <a href={p.repo} target="_blank" rel="noreferrer">Source code <Github size={14} /></a>}{!p.live && !p.repo && <small>Public demo link not added yet</small>}</div></div><div className="features"><small>WHAT’S IMPLEMENTED</small>{p.features.map(x => <div key={x}><CheckCircle2 size={15} />{x}</div>)}</div></div></motion.article>)}</div></section>

      <section className="section band"><div className="wrap"><label>04 / ENGINEERING NOTES</label><div className="heading"><div><h2>How the pieces connect<span>.</span></h2><p>A simplified view of the BrandShield AI architecture.</p></div></div><div className="architecture"><div><Code2 /><b>React + TypeScript</b><small>Frontend experience</small></div><ArrowRight /><div><Server /><b>FastAPI</b><small>REST API layer</small></div><div className="branch" /><div className="bottomnodes"><div><BrainCircuit /><b>Google Gemini</b><small>Content analysis</small></div><div><Database /><b>PostgreSQL</b><small>Guidelines & audit records</small></div></div></div><p className="note"><ShieldCheck size={16} /> AI findings are recommendations; a human reviewer makes the final decision.</p></div></section>

      <section className="section wrap" id="journey"><label>05 / LEARNING JOURNEY</label><div className="two"><h2>Learning in public.<br /><span>Growing through building.</span></h2><div className="timeline"><article><small>EDUCATION · CURRENT</small><h3>B.Tech — Artificial Intelligence & Machine Learning</h3><p>Yenepoya University · Second Year</p></article><article><small>FOCUS AREAS</small><h3>Backend & database engineering</h3><p>REST APIs, PostgreSQL, relational modelling, transactions and ORM workflows.</p></article><article><small>BUILDING</small><h3>AI-integrated applications</h3><p>Experimenting with Gemini-powered workflows and practical machine-learning prototypes.</p></article></div></div></section>

      <section className="resume"><div className="wrap resumeinner"><div><label>06 / RESUME</label><h2>Let’s make something<br /><em>that matters.</em></h2><p>Add your current resume PDF to <code>public/resume.pdf</code> to activate the download.</p></div><a className="primary" href="/resume.pdf" download>Download resume <ArrowDown size={16} /></a></div></section>

      <section className="section wrap" id="contact"><label>07 / CONTACT</label><div className="two"><div><h2>Have a project<br />or opportunity<span>?</span></h2><p className="intro">I’m open to learning opportunities, internships and conversations about building useful software.</p></div><div className="contactlinks"><a href="https://www.linkedin.com/in/kotapati-vishal-151645309/" target="_blank" rel="noreferrer"><Linkedin /><span><small>CONNECT ON</small><b>LinkedIn</b></span>↗</a><a href="https://github.com/vishalkotapati5-glitch" target="_blank" rel="noreferrer"><Github /><span><small>EXPLORE MY CODE</small><b>GitHub</b></span>↗</a><a href={email ? `mailto:${email}` : "#contact"}><span><small>EMAIL</small><b>{email || "Add email in .env.local"}</b></span>↗</a></div></div></section>
      <footer className="footer wrap"><a className="brand" href="#home"><b>V</b><span>VISHAL<span className="brand-accent">.X</span></span></a><span>Designed & built with curiosity. © {new Date().getFullYear()} Vishal Reddy.</span><a href="#home">BACK TO TOP ↑</a></footer>
    </main>
  );
}
