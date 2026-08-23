import { useState } from 'react';
import './App.css'
import { Language } from './types/portfolio';



export default function App() {
  const [lang, setLang] = useState<Language>('EN');
  const toggleLanguage = () => {
    setLang(prev => prev === 'EN'? 'DE' : 'EN');
  };
  return(
    <div className='min-h-screen bg-white text-slate-900 antialised'></div>
  );
}