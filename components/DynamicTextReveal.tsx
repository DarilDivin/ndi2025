'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NARRATIVE_STEPS = [
  {
    id: 1,
    title: "LE GRAND GÂCHIS",
    text: "Octobre 2025. Vos PC fonctionnent encore parfaitement. Pourtant, Windows a dit stop. Jeter du matériel opérationnel pour une simple mise à jour est un non-sens écologique total.",
    color: "text-red-500"
  },
  {
    id: 2,
    title: "LA FUITE DES DONNÉES",
    text: "Vos données partent en exil. Nos classes deviennent des annexes de la Silicon Valley, soumises aux lois américaines. Pendant que vous notez les devoirs, le système profile vos élèves.",
    color: "text-blue-500"
  },
  {
    id: 3,
    title: "LA SOLUTION NIRD",
    text: "Pourquoi jeter ? Le reconditionnement est notre arme absolue. On installe Linux, et un PC jugé obsolète redevient une bête de course. Autonome. Durable. Souverain.",
    color: "text-emerald-500"
  }
];

export default function DynamicTextReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const steps = gsap.utils.toArray<HTMLElement>('.step-container');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        start: 'top top',
        end: `+=${steps.length * 1500}`, 
        scrub: 1,
      }
    });

    steps.forEach((step, i) => {
      const title = step.querySelector('.step-title');
      const words = step.querySelectorAll('.word');

      // --- CONFIGURATION DES ANIMATIONS SELON L'ÉTAPE ---
      let fromVars = {};
      let toVars = {};

      if (i === 0) { 
        // SCÈNE 1 : LE GÂCHIS (Effet "Chute de Débris")
        // Les mots tombent du haut avec rotation chaotique
        fromVars = { 
          y: -150, 
          opacity: 0, 
          rotation: () => gsap.utils.random(-90, 90), 
          scale: 0.5,
          filter: 'blur(10px)'
        };
        toVars = { 
          y: 0, 
          opacity: 1, 
          rotation: 0, 
          scale: 1,
          filter: 'blur(0px)',
          stagger: { amount: 1, from: "random" }, // Arrivée désordonnée
          ease: 'bounce.out' // Rebondit au sol
        };
      
      } else if (i === 1) { 
        // SCÈNE 2 : LA FUITE (Effet "Flux de Données")
        // Les mots glissent latéralement comme un flux rapide
        fromVars = { 
          x: 200, 
          opacity: 0, 
          scaleX: 2, // Étiré horizontalement (Motion Blur simulé)
          filter: 'blur(8px)',
          skewX: -20
        };
        toVars = { 
          x: 0, 
          opacity: 1, 
          scaleX: 1,
          filter: 'blur(0px)',
          skewX: 0,
          stagger: 0.03, // Très rapide, séquentiel
          ease: 'power4.out'
        };

      } else { 
        // SCÈNE 3 : LA SOLUTION (Effet "Construction")
        // Les mots montent calmement et s'assemblent (Stable)
        fromVars = { 
          y: 50, 
          opacity: 0, 
          scale: 0.8,
          filter: 'blur(0px)' // Pas de flou, c'est net
        };
        toVars = { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          stagger: 0.05, // Rythmé et régulier
          ease: 'back.out(1.7)' // Petit effet de "pop" satisfaisant
        };
      }

      // 1. Apparition Titre (Standard)
      tl.fromTo(title, 
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1 }
      );

      // 2. Apparition Mots (Spécifique à la scène)
      tl.fromTo(words, fromVars, { ...toVars, duration: 2 });

      // 3. Pause lecture
      tl.to({}, { duration: 2 });

      // 4. Disparition (Sauf dernier)
      if (i < steps.length - 1) {
        tl.to([title, words], {
          opacity: 0,
          filter: 'blur(20px)',
          scale: 1.5,
          duration: 1,
          stagger: { amount: 0.5, from: "end" } // Disparait à l'envers
        });
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-[#020410] overflow-hidden font-sans flex flex-col items-center justify-center">
      
      {/* EFFETS DE FOND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900/30 via-[#020410] to-[#020410] pointer-events-none"></div>
      
      {/* Indicateur visuel de la timeline */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 h-32 w-1 bg-slate-800 rounded-full hidden md:block">
        <div className="w-full bg-blue-500 h-1/3 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6">
        {NARRATIVE_STEPS.map((step) => (
          <div key={step.id} className="step-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
            
            <h3 className={`step-title text-xl md:text-3xl font-black uppercase tracking-widest mb-12 opacity-0 ${step.color} drop-shadow-lg`}>
              {step.title}
            </h3>

            <p className="text-3xl md:text-4xl font-bold leading-tight text-white flex flex-wrap justify-center gap-x-4 gap-y-2 perspective-1000">
              {step.text.split(" ").map((word, i) => (
                <span 
                  key={i} 
                  className="word inline-block will-change-transform origin-center backface-hidden"
                >
                  {word}
                </span>
              ))}
            </p>

          </div>
        ))}
      </div>

      <div className="absolute bottom-10 flex flex-col items-center gap-2 text-slate-500 text-xs tracking-widest uppercase animate-pulse">
        <span>Scrollez pour révéler</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent"></div>
      </div>

    </section>
  );
}