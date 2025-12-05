'use client';

import React from 'react';
import { Github, Menu } from 'lucide-react';

export default function Header() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-6 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/50 transition-all hover:bg-white/10 hover:border-white/20 hover:scale-105">
        
        {/* LOGO */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-bold text-white tracking-widest cursor-pointer select-none flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          NIRD_2025
        </div>

        {/* LIENS (Masqués sur mobile très petit) */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button onClick={() => scrollTo('constat')} className="hover:text-white transition-colors">Le Constat</button>
          <button onClick={() => scrollTo('realite')} className="hover:text-white transition-colors">La Réalité</button>
          <button onClick={() => scrollTo('agir')} className="hover:text-white transition-colors">Agir</button>
        </div>

        {/* SÉPARATEUR */}
        <div className="w-px h-4 bg-white/10 hidden md:block"></div>

        {/* CTA CODE SOURCE */}
        <a 
          href="https://gitlab.com" // Mets ton lien git ici
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          <Github size={14} />
          <span className="hidden sm:inline">SOURCE_CODE</span>
        </a>

      </div>
    </nav>
  );
}