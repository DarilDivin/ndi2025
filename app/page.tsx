'use client';

import dynamic from 'next/dynamic';
import Header from '@/components/Header'; // <-- Import Header
import Footer from '@/components/Footer'; // <-- Import Footer
import CompareScenario from '@/components/CompareScenario';
import DynamicTextReveal from '@/components/DynamicTextReveal';
import QuizSection from '@/components/QuizSection';

// Import dynamique pour éviter les erreurs SSR avec Three.js
const DependencyGlobe = dynamic(
  () => import('@/components/DependencyGlobe'),
  { ssr: false }
);

export default function Home() {
  const scrollDown = () => {
    const element = document.getElementById('constat');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#020410] text-white">
      
      {/* HEADER FIXE */}
      <Header />

      {/* --- HERO SECTION --- */}
      <div className="relative h-screen w-full bg-[#020410] overflow-hidden">
        {/* COUCHE 1 - Le Globe (arrière-plan) */}
        <div className="absolute inset-0 z-0">
          <DependencyGlobe />
        </div>

        {/* COUCHE 2 - Le Texte Hero (overlay) */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4">
          
          {/* Badge supérieur */}
          <div className="mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="text-sm text-blue-400 font-medium tracking-wide">
              NUIT DE L&apos;INFO 2025
            </span>
          </div>

          {/* Titre principal */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none mb-6">
            <span className="block">LA SOUVERAINETÉ</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 bg-clip-text text-transparent">
              NUMÉRIQUE
            </span>
          </h1>

          {/* Sous-titre */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mb-8 leading-relaxed">
            Visualisez la dépendance.{' '}
            <span className="text-white font-medium">Rejoignez la résistance.</span>
          </p>

          {/* Statistique dramatique */}
          <div className="flex items-center gap-3 mb-10 text-red-400/80">
            <div className="h-px w-12 bg-red-400/50" />
            <span className="text-sm font-mono tracking-wider">
              92% DES DONNÉES EU → USA
            </span>
            <div className="h-px w-12 bg-red-400/50" />
          </div>

          {/* Bouton CTA */}
          <button 
            onClick={scrollDown}
            className="pointer-events-auto group relative px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              DÉCOUVRIR L&apos;ALTERNATIVE
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        {/* Indicateur de scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          <div className="flex flex-col items-center gap-2 text-white/40 animate-bounce">
            <span className="text-xs tracking-widest">SCROLL</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* --- SCROLLYTELLING (Le Constat) --- */}
      <div id="constat" className="relative z-20">
        <DynamicTextReveal />
      </div>

      {/* --- COMPARE SCENARIO (La Réalité) --- */}
      <div id="realite" className="relative z-30 bg-[#020410]">
         <CompareScenario />
      </div>

      {/* --- QUIZ (Agir) --- */}
      <div id="agir" className="relative z-30">
         <QuizSection />
      </div>

      {/* FOOTER */}
      <Footer />
      
    </div>
  );
}