import { useState } from 'react';
import type { Language } from './types/portfolio';
import { SiApple, SiDocker, SiFastapi, SiGit, SiGithub, SiMacos, SiOllama, SiPostgresql, SiPython, SiPytorch, SiRam, SiReact, SiTailwindcss, SiTypescript, SiVite } from 'react-icons/si';



export default function App() {
  const [lang, setLang] = useState<Language>('EN');
  const toggleLanguage = () => {
    setLang(prev => prev === 'EN'? 'DE' : 'EN');
  };
  return(
    <div className='min-h-screen bg-white text-slate-900 antialiased relative overflow-hidden selection:bg-violet-500 selection:text-white'>
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-linear-to-tr from-violet-500/10 via-sky-400/10 to-transparent blur-3xl pointer-events-none -z-10' />
      <header className='sticky top-4 z-50 max-w-5xl mx-auto px-4'>
        <nav className='glass-surface px-6 py-3 rounded-full flex items-center justify-between shadow-sm'>
          <div className='flex items-center gap-2'>
            <span className='w-8 h-8 rounded-lg bg-linear-to-tr from-violet-600 to-sky-500 flex items-center justify-center text-white font-mono font-bold text-sm md:text-base'>
              &lt;/&gt;
            </span>
            <span className='font-bold tracking-tight text-slate-900 text-sm md:text-base'>
              {lang === 'EN' ? 'Full-Stack and AI-Systems' : 'Full-Stack & KI-Projekte'}
            </span>
          </div>
          <div className='hidden md:flex items-center gap-6 text-sm font-medium text-slate-600'>
            <a href="#projects" className='hover:text-violet-600 transition'>
              {lang === 'EN' ? 'Projects' : 'Projekte'}
            </a>
            <a href="#skills" className='hover:text-violet-600 transition'>
              {lang === 'EN' ? 'Skills' : 'Fähigkeiten'}
            </a>
            <a href="#contact" className='hover:text-violet-600 transition'>
              {lang === 'EN' ? 'Contact' : 'Kontakt'}
            </a>
          </div>
          <div className='flex items-center gap-3'>
            <button className='px-3 py-1.5 text-xs font-mono font-semibold rounded-full border border-slate-200 bg-slate-50 hover:bg-slate-100 transition text-slate-700 flex items-center gap-1.5' onClick={toggleLanguage}>
              <span className={lang === 'EN' ? 'text-violet-600 font-bold' : 'text-slate-400'}>EN</span>
              <span className='text-slate-300'>|</span>
              <span className={lang === 'DE' ? 'text-violet-600 font-bold' : 'text-slate-400'}>DE</span>
            </button>
            <a href="#contact" className='hidden sm:inline-flex px-4 py-1.5 text-xs font-semibold rounded-full bg-violet-600 hover:bg-violet-700 text-white shadow-sm hover:shadow-violet-500/20 transition'>
              {lang === 'EN' ? 'Get in Touch' : 'Kontaktieren'}
            </a>
          </div>
        </nav>
      </header>
      <main className='max-w-5xl mx-auto px-4 py-16 space-y-24'>
        <section className='text-center space-y-6 pt-12'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-xs font-medium text-slate-600'>
            <span className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse' />
            {lang === 'EN' ? 'Available for remote Full-Stack & AI-Systems' : 'Verfügbar für Remote Full-Stack & KI-Projekte'}
          </div>
          <h1 className='text-4xl md:text-6xl font-bold tracking-tight text-slate-900 max-w-3xl mx-auto'>
            {lang === 'EN' ? 'Architecting High Performance ' : 'Entwicklung von Hochleistungs'}
            <span className='bg-linear-to-r from-violet-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent'>
              {lang === 'EN' ? 'Web & AI Applications' : 'Web & KI-Systemen'}
            </span>
          </h1>
          <p className='text-slate-600 text-base md:text-lg max-w-2xl mx-auto'>
            {lang === 'EN'? 'Security is My first priority' : 'Sicherheit hat für mich oberste Priorität'}
          </p>
        </section>
        <section id='#skills' className='space-y-8'>
          <div className='space-y-2'>
            <div className='text-xs font-mono font-bold tracking-wider text-violet-600 uppercase'>
              {lang === 'EN' ? 'SKILLS & ARCHITECTURE' : 'FÄHIGEITEN & STACK'}
            </div>
            <h3 className='text-2xl md:text-3xl font-bold tracking-tight text-slate-900'>
              {lang === 'EN' ? 'Modern Tools. Enterprise Standards' : 'Moderne Werkzeuge. Enterprise-Standards'}
            </h3>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='p-6 rounded-3xl bg-slate-50/60 border border-slate-200/80 hover:border-violet-300 hover:shadow-md transition space-y-4'>
              <span className='w-10 h-10 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center font-mono font-bold text-xs'>
                &lt;UI&gt;
              </span>
              <h3>
                {lang === 'EN' ? 'Frontend Architecture' : 'Frontend-Architektur'}
              </h3>
              <p>
                {lang === 'EN' ? 'Type-safe component trees in React ensure reliable data flow while responsive Tailwind utility classes deliver fluid layouts across all device screens' : 'Typsichere Komponentenbäume in React gewährleisten einen zuverlässigen Datenfluss, während responsive Tailwind-Utility-Klassen für fließende Layouts auf allen Bildschirmgrößen sorgen.'}
              </p>
              <span className='flex flex-wrap'>
                <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-violet-500/10 text-violet-600 border border-violet-500/20 '>
                  <SiReact className='w-3.5 h-3.5 text-violet-500'/>
                  React
                </span>
                <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-violet-500/10 text-violet-600 border border-violet-500/20 '>
                  <SiTailwindcss className='w-3.5 h-3.5 text-violet-500'/>
                  Tailwind
                </span>
                <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-violet-500/10 text-violet-600 border border-violet-500/20 '>
                  <SiTypescript className='w-3.5 h-3.5 text-violet-500'/>
                  TypeScript
                </span>
                <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-violet-500/10 text-violet-600 border border-violet-500/20 '>
                  <SiVite className='w-3.5 h-3.5 text-violet-500'/>
                  Vite
                </span>
              </span>
            </div>
            <div className='p-6 rounded-3xl bg-slate-50/60 border border-slate-200/80 hover:border-sky-300 hover:shadow-md transition space-y-4'>
              <span className='w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center font-mono font-bold text-xs'>
                API
              </span>
              <h3>
                {lang === 'EN' ? 'Backend & Relational DBs' : 'Backend & Relationale DBs'}
              </h3>
              <p>
                {lang === 'EN' ? 'Asynchronous Python APIs handle high-concurrency requests efficiently while structured PostgreSQL schemas ensure long-term data persistence and integrity.' : 'Asynchrone Python-APIs bewältigen Anfragen mit hoher Gleichzeitigkeit effizient, während strukturierte PostgreSQL-Schemata die langfristige Datenpersistenz und -integrität gewährleisten.'}
              </p>
              <div className='flex flex-wrap'>
                <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-sky-500/10 text-sky-600 border border-sky-500/20'>
                  <SiFastapi className='w-3.5 h-3.5 text-sky-500'/>
                    FastAPI
                </span>
                <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-sky-500/10 text-sky-600 border border-sky-500/20'>
                  <SiPostgresql className='w-3.5 h-3.5 text-sky-500'/>
                    PostgreSQL
                </span>
                <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-sky-500/10 text-sky-600 border border-sky-500/20'>
                  <SiPython className='w-3.5 h-3.5 text-sky-500'/>
                    Python
                </span>
              </div>
            </div>
            <div className='p-6 rounded-3xl bg-slate-50/60 border border-slate-200/80 hover:border-indigo-300 hover:shadow-md transition space-y-4'>
              <div className='w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-mono font-bold text-xs'>
                {lang === 'EN' ? 'AI' : 'KI'}
              </div>
              <h3>
                {lang === 'EN' ? 'AI Systems & Automation' : 'KI Systeme & Automation'}
              </h3>
              <p>
                {lang === 'EN' ? 'RAG pipelines privately process domain-specific documents to feed context into local LLMs , enabling precise, structured data extraction without cloud data leaks.' : 'Lokale RAG-Pipelines (Retrieval-Augmented Generation) verarbeiten domänenspezifische Dokumente vertraulich, um Kontext in lokale Large Language Models (LLMs) einzuspeisen und so eine präzise, ​​strukturierte Datenextraktion ohne das Risiko von Datenabflüssen in die Cloud zu ermöglichen.'}
              </p>
              <span className='flex flex-wrap'>
                <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-600 border border-indigo-500/20'>
                  <SiPytorch className='w-3.5 h-3.5 text-indigo-500'/>
                  PyTorch
                </span>
                <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-600 border border-indigo-500/20'>
                  <SiOllama className='w-3.5 h-3.5 text-indigo-500'/>
                  LLM
                </span>
                <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-600 border  border-indigo-500/20'>
                  RAG
                </span>
                <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-600 border border-indigo-500/20'>
                  PgVector
                </span>
              </span>
            </div>
            <div className='md:col-span-2 p-6 rounded-3xl bg-slate-50/60 border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition space-y-4'>
              <span className='w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center font-mono font-bold text-xs'>
                DEV
              </span>
              <h3>
                {lang === 'EN' ? 'Engineering Workflow and Dev OPS' : 'Entwicklungs-Workflow & DevOps'}
              </h3>
              <p>
                {lang === 'EN' ? 'Mastering local development on macOS demands a flawless Git architecture, isolated containerized workloads, and crisp system optimization for peak engineering velocity.' : 'Die Beherrschung der lokalen Entwicklung unter macOS erfordert eine einwandfreie Git-Architektur, isolierte, containerisierte Workloads sowie eine präzise Systemoptimierung für maximale Entwicklungsgeschwindigkeit.'}
              </p>
            <span className='flex flex-wrap'>
              <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-500/10 text-slate-600 border border-slate-500/20'>
                <SiDocker/>
                Docker
              </span>
              <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-500/10 text-slate-600 border border-slate-500/20'>
                <SiGit/>
                Git
              </span>
              <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-500/10 text-slate-600 border border-slate-500/20'>
                <SiGithub/>
                GitHub
              </span>
              <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-500/10 text-slate-600 border border-slate-500/20'>
                <SiMacos/>
                MacOs
              </span>
              <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-500/10 text-slate-600 border border-slate-500/20'>
                CI/CD
              </span>
            </span>
            </div>
            <div className='p-6 rounded-3xl bg-slate-50/60 border border-slate-200/80 hover:border-amber-300 hover:shadow-md transition space-y-4'>
              <span className='w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-mono font-bold text-xs'>
                <SiApple/>
              </span>
              <h3>
                {lang === 'EN' ? 'Hardware and Performance Lab' : 'Hardware- & Leistungslabor'}
              </h3>
              <p>
                {lang === 'EN' ? 'Native virtualization on Apple Silicon delivers unmatched execution speed and high thermal efficiency by running containerized workloads directly on unified memory.' : 'Native Virtualisierung auf Apple Silicon sorgt für unübertroffene Ausführungsgeschwindigkeit und hohe thermische Effizienz, indem containerisierte Workloads direkt auf dem Unified Memory ausgeführt werden.'}
              </p>
              <span className='flex flex-wrap'>
                <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-600 border border-amber-500/20'>
                  <SiApple/>
                  Apple Silicon
                </span>
                <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-600 border border-amber-500/20'>
                  16 GB Memory
                </span>
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}