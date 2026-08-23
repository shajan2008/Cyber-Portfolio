import { useState } from 'react';
import type { Language } from './types/portfolio';



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
              Full-Stack and AI-Systems
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
      <main>
        
      </main>
    </div>
  );
}