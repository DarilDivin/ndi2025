'use client';

import React from 'react';
import { Heart, ShieldCheck, Leaf, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-40 bg-[#010208] border-t border-white/5 pt-20 pb-10 px-6 text-slate-400 text-sm">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* COLONNE 1 : BRANDING */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white tracking-tighter">LE VILLAGE<br/>NUMÉRIQUE.</h3>
          <p className="max-w-xs leading-relaxed opacity-60">
            Une initiative pour reprendre le contrôle de nos vies numériques face aux géants de la Tech.
          </p>
        </div>

        {/* COLONNE 2 : VALEURS */}
        <div className="space-y-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs">Nos Valeurs</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-help">
              <ShieldCheck size={16} /> Souveraineté des données
            </li>
            <li className="flex items-center gap-2 hover:text-emerald-400 transition-colors cursor-help">
              <Leaf size={16} /> Sobriété écologique
            </li>
            <li className="flex items-center gap-2 hover:text-purple-400 transition-colors cursor-help">
              <Heart size={16} /> Inclusion pour tous
            </li>
          </ul>
        </div>

        {/* COLONNE 3 : RESSOURCES */}
        <div className="space-y-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs">Ressources Libres</h4>
          <ul className="space-y-2">
            <li><a href="https://framasoft.org" target="_blank" className="hover:text-white transition-colors flex items-center gap-1">Framasoft <ExternalLink size={10}/></a></li>
            <li><a href="https://apps.education.fr" target="_blank" className="hover:text-white transition-colors flex items-center gap-1">Apps.education.fr <ExternalLink size={10}/></a></li>
            <li><a href="https://linux.org" target="_blank" className="hover:text-white transition-colors flex items-center gap-1">Linux Foundation <ExternalLink size={10}/></a></li>
          </ul>
        </div>

        {/* COLONNE 4 : MENTIONS NIRD */}
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h5 className="text-white font-bold mb-2">Respect Vie Privée</h5>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">NO COOKIES</span>
              <span className="px-2 py-1 rounded-md bg-blue-500/20 text-blue-400 text-xs font-bold border border-blue-500/30">NO TRACKING</span>
              <span className="px-2 py-1 rounded-md bg-purple-500/20 text-purple-400 text-xs font-bold border border-purple-500/30">OPEN SOURCE</span>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 opacity-40 text-xs">
        <p>© 2025 Nuit de l'Info - Team "Les Patates Asynchrones".</p>
        <p className="font-mono">Développé avec Next.js 15 & Passion.</p>
      </div>

    </footer>
  );
}