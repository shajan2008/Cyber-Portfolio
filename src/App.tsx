import { useState } from 'react';
import type { Language } from './types/portfolio';
import { SiApple, SiCss, SiDocker, SiFastapi, SiGit, SiGithub, SiJavascript, SiMacos, SiOllama, SiPostgresql, SiPython, SiPytorch, SiReact, SiTailwindcss, SiTypescript, SiVite } from 'react-icons/si';



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
        <section id='skills' className='space-y-8'>
          <div className='space-y-2'>
            <div className='text-xs font-mono font-bold tracking-wider text-violet-600 uppercase'>
              {lang === 'EN' ? 'SKILLS & ARCHITECTURE' : 'FÄHIGKEITEN & STACK'}
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
              <h3 className='text-lg font-bold text-slate-900'>
                {lang === 'EN' ? 'Frontend Architecture' : 'Frontend-Architektur'}
              </h3>
              <p className='text-sm text-slate-600 leading-relaxed'>
                {lang === 'EN' ? 'Type-safe component trees in React ensure reliable data flow while responsive Tailwind utility classes deliver fluid layouts across all device screens' : 'Typsichere Komponentenbäume in React gewährleisten einen zuverlässigen Datenfluss, während responsive Tailwind-Utility-Klassen für fließende Layouts auf allen Bildschirmgrößen sorgen.'}
              </p>
              <div className='flex flex-wrap gap-2'>
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
              </div>
            </div>
            <div className='p-6 rounded-3xl bg-slate-50/60 border border-slate-200/80 hover:border-sky-300 hover:shadow-md transition space-y-4'>
              <span className='w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center font-mono font-bold text-xs'>
                API
              </span>
              <h3 className='text-lg font-bold text-slate-900'>
                {lang === 'EN' ? 'Backend & Relational DBs' : 'Backend & Relationale DBs'}
              </h3>
              <p className='text-sm text-slate-600 leading-relaxed'>
                {lang === 'EN' ? 'Asynchronous Python APIs handle high-concurrency requests efficiently while structured PostgreSQL schemas ensure long-term data persistence and integrity.' : 'Asynchrone Python-APIs bewältigen Anfragen mit hoher Gleichzeitigkeit effizient, während strukturierte PostgreSQL-Schemata die langfristige Datenpersistenz und -integrität gewährleisten.'}
              </p>
              <div className='flex flex-wrap gap-2'>
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
              <h3 className='text-lg font-bold text-slate-900'>
                {lang === 'EN' ? 'AI Systems & Automation' : 'KI Systeme & Automation'}
              </h3>
              <p className='text-sm text-slate-600 leading-relaxed'>
                {lang === 'EN' ? 'RAG pipelines privately process domain-specific documents to feed context into local LLMs , enabling precise, structured data extraction without cloud data leaks.' : 'Lokale RAG-Pipelines (Retrieval-Augmented Generation) verarbeiten domänenspezifische Dokumente vertraulich, um Kontext in lokale Large Language Models (LLMs) einzuspeisen und so eine präzise, ​​strukturierte Datenextraktion ohne das Risiko von Datenabflüssen in die Cloud zu ermöglichen.'}
              </p>
              <div className='flex flex-wrap gap-2'>
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
              </div>
            </div>
            <div className='md:col-span-2 p-6 rounded-3xl bg-slate-50/60 border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition space-y-4'>
              <span className='w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center font-mono font-bold text-xs'>
                DEV
              </span>
              <h3 className='text-lg font-bold text-slate-900'>
                {lang === 'EN' ? 'Engineering Workflow and Dev OPS' : 'Entwicklungs-Workflow & DevOps'}
              </h3>
              <p className='text-sm text-slate-600 leading-relaxed'>
                {lang === 'EN' ? 'By enforcing strict Git discipline through atomic commits and meticulous branch rebase strategies,I can maintain a flawless and transparent project history across all team environments;similarly, leveraging lightweight containerization ensures completely isolated local runtime setupsthat prevent dependency conflicts and configuration drift from corrupting the host machine.' : 'Durch die konsequente Einhaltung strenger Git-Disziplin – etwa mittels atomarer Commits und sorgfältiger Branch-Rebase-Strategien – gewährleiste ich eine makellose und transparente Projekthistorie über alle Team-Umgebungen hinweg; ebenso sorgt der Einsatz schlanker Containerisierung für vollständig isolierte lokale Laufzeitumgebungen, wodurch verhindert wird, dass Abhängigkeitskonflikte oder Konfigurationsabweichungen das Host-System beeinträchtigen.'}
              </p>
            <div className='flex flex-wrap gap-2'>
              <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-500/10 text-slate-600 border border-slate-500/20'>
                <SiDocker className='w-3.5 h-3.5 text-slate-600'/>
                Docker
              </span>
              <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-500/10 text-slate-600 border border-slate-500/20'>
                <SiGit className='w-3.5 h-3.5 text-slate-600'/>
                Git
              </span>
              <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-500/10 text-slate-600 border border-slate-500/20'>
                <SiGithub className='w-3.5 h-3.5 text-slate-600'/>
                GitHub
              </span>
              <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-500/10 text-slate-600 border border-slate-500/20'>
                <SiMacos className='w-3.5 h-3.5 text-slate-600'/>
                MacOs
              </span>
              <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-500/10 text-slate-600 border border-slate-500/20'>
                CI/CD
              </span>
            </div>
            </div>
            <div className='p-6 rounded-3xl bg-slate-50/60 border border-slate-200/80 hover:border-amber-300 hover:shadow-md transition space-y-4'>
              <span className='w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-mono font-bold text-xs'>
                <SiApple/>
              </span>
              <h3 className='text-lg font-bold text-slate-900'>
                {lang === 'EN' ? 'Hardware and Performance Lab' : 'Hardware- & Leistungslabor'}
              </h3>
              <p className='text-sm text-slate-600 leading-relaxed'>
                {lang === 'EN' ? 'Native virtualization on Apple Silicon delivers unmatched execution speed and high thermal efficiency by running containerized workloads directly on unified memory.' : 'Native Virtualisierung auf Apple Silicon sorgt für unübertroffene Ausführungsgeschwindigkeit und hohe thermische Effizienz, indem containerisierte Workloads direkt auf dem Unified Memory ausgeführt werden.'}
              </p>
              <div className='flex flex-wrap gap-2'>
                <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-600 border border-amber-500/20'>
                  <SiApple/>
                  Apple Silicon
                </span>
                <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-600 border border-amber-500/20'>
                  16 GB Memory
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id='projects' className='space-y-8'>
          <div className='space-y-2'>
            <div className='text-xs font-mono font-bold tracking-wider text-violet-600 uppercase '>
              {lang === 'EN' ? 'FEATURED BUILDS' : 'PRODUKTIONSPROJEKTE'}
            </div>
            <h2 className='text-2xl md:text-3xl font-bold tracking-tight text-slate-900'>
              {lang === 'EN' ? 'Engineered for Excecution & Scale' : 'Entwickelt für Performance & Skalierung.'}
            </h2>
            <div className='space-y-8'>
              <div className='p-8 rounded-3xl bg-slate-50/60 border border-slate-200/80 hover:border-violet-300 hover:shadow-lg transition grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                <div className='space-y-4'>
                  <div className='flex flex-wrap gap-2'>
                    <h3 className='text-xl font-bold text-slate-900'>
                      {lang === 'EN' ? 'Enterprise Multi-currency-Billing Machine' : 'Enterprise Multi-Währungs-Rechnungsengine'}
                    </h3>
                    <SiJavascript/>
                    <SiCss/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}