'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- LES DONNÉES DU RÉCIT ---
const NARRATIVE_STEPS = [
  {
    id: 1,
    theme: "text-red-500", // Couleur d'accent
    title: "ANIMATION 1 : LE GRAND GÂCHIS",
    text: "Octobre 2025. Vos PC fonctionnent encore parfaitement. Pourtant, Windows a dit stop. Jeter du matériel opérationnel pour une simple mise à jour logicielle est un non-sens écologique total."
  },
  {
    id: 2,
    theme: "text-blue-500",
    title: "ANIMATION 2 : LA FUITE DES RESSOURCES",
    text: "Vos données partent en exil. Nos classes deviennent des annexes de la Silicon Valley, soumises aux lois américaines. Pendant que vous notez les devoirs, le système profile vos élèves."
  },
  {
    id: 3,
    theme: "text-emerald-500",
    title: "ANIMATION 3 : LA SOLUTION NIRD",
    text: "Pourquoi jeter ? Le reconditionnement est notre arme absolue. On installe Linux, et un PC jugé obsolète redevient une bête de course. Autonome. Durable. Souverain."
  }
];

export default function ScrubTextReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // On sélectionne tous les groupes de textes (les étapes)
    const steps = gsap.utils.toArray<HTMLElement>('.narrative-step');
    
    // TIMELINE MAÎTRESSE
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true, // On épingle l'écran
        start: 'top top',
        end: `+=${steps.length * 1000}`, // La durée dépend du nombre d'étapes
        scrub: 1, // Douceur extrême (1 seconde de lag pour lisser)
      }
    });

    steps.forEach((step, index) => {
      // Sélectionne les mots à l'intérieur de l'étape courante
      const titleChars = step.querySelectorAll('.title-word');
      const bodyWords = step.querySelectorAll('.body-word');
      
      // TIMELINE LOCALE POUR CHAQUE ÉTAPE
      // 1. Apparition
      tl.fromTo(titleChars, 
        { opacity: 0, y: 50, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', stagger: 0.05, duration: 1, ease: 'power2.out' }
      )
      .fromTo(bodyWords, 
        { opacity: 0.1, color: '#334155' }, // État initial (sombre/invisible)
        { opacity: 1, color: '#f8fafc', stagger: 0.02, duration: 2, ease: 'none' }, // État final (blanc brillant)
        '<' // Commence en même temps que le titre
      );

      // 2. Pause de lecture (Espace vide dans la timeline)
      tl.to({}, { duration: 1 });

      // 3. Disparition (Sauf pour le dernier)
      if (index < steps.length - 1) {
        tl.to([titleChars, bodyWords], {
          opacity: 0,
          y: -20,
          filter: 'blur(5px)',
          stagger: 0.01,
          duration: 0.5
        });
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-[#020410] text-white overflow-hidden flex flex-col items-center justify-center">
      
      {/* GRILLE DÉCORATIVE EN FOND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* CONTENEUR CENTRÉ */}
      <div ref={textContainerRef} className="relative z-10 max-w-4xl px-6 w-full h-full flex flex-col justify-center">
        
        {/* BOUCLE SUR LES ÉTAPES */}
        {NARRATIVE_STEPS.map((step, i) => (
          <div key={step.id} className="narrative-step absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
            
            {/* TITRE (Animé mot par mot) */}
            <h2 className={`text-sm md:text-base font-mono tracking-[0.2em] uppercase mb-8 ${step.theme}`}>
              {step.title.split(" ").map((word, w) => (
                <span key={w} className="title-word inline-block mr-2">{word}</span>
              ))}
            </h2>

            {/* PARAGRAPHE (Animé mot par mot) */}
            <p className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              {step.text.split(" ").map((word, w) => (
                <span key={w} className="body-word inline-block mr-3 opacity-10">
                  {word}
                </span>
              ))}
            </p>

          </div>
        ))}

      </div>

      {/* INDICATEUR SCROLL */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 text-xs animate-pulse">
        SCROLL POUR RÉVÉLER
      </div>

    </section>
  );
}