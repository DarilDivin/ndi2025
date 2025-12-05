'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- DONNÉES DU RÉCIT ---
const NARRATIVE_STEPS = [
    {
        id: 1,
        title: "ANIMATION 1 : LE GRAND GÂCHIS",
        text: "Octobre 2025. Vos PC fonctionnent encore parfaitement. Pourtant, Windows a dit stop. Jeter du matériel opérationnel pour une simple mise à jour est un non-sens écologique total.",
        color: "text-red-400"
    },
    {
        id: 2,
        title: "ANIMATION 2 : LA FUITE DES RESSOURCES",
        text: "Vos données partent en exil. Nos classes deviennent des annexes de la Silicon Valley, soumises aux lois américaines. Pendant que vous notez les devoirs, le système profile vos élèves.",
        color: "text-blue-400"
    },
    {
        id: 3,
        title: "ANIMATION 3 : LA SOLUTION NIRD",
        text: "Pourquoi jeter ? Le reconditionnement est notre arme absolue. On installe Linux, et un PC jugé obsolète redevient une bête de course. Autonome. Durable. Souverain.",
        color: "text-emerald-400"
    }
];

// --- UTILITAIRE : GÉNÉRATEUR D'EFFETS ALÉATOIRES ---
const getRandomEffect = (index: number) => {
    // On cycle sur 4 styles d'apparition différents pour varier les plaisirs
    const effects = [
        { y: 50, rotation: 5, scale: 0.8, filter: 'blur(8px)' },  // 1. Glissement Bas + Rotation
        { y: -30, scale: 1.5, filter: 'blur(10px)' },             // 2. Zoom Out depuis le haut
        { x: -40, rotation: -5, opacity: 0, filter: 'blur(5px)' },// 3. Glissement Latéral Gauche
        { scale: 0.5, opacity: 0, filter: 'blur(12px)' }          // 4. Zoom In profond
    ];
    return effects[index % effects.length];
};

export default function ScrubWordReveal() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const steps = gsap.utils.toArray<HTMLElement>('.step-container');

        // CRÉATION DE LA TIMELINE MAÎTRESSE
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true, // Épingle l'écran
                start: 'top top',
                end: `+=${steps.length * 1500}`, // Ajuste la longueur du scroll ici
                scrub: 1.5, // Le "Smooth" de l'animation (plus c'est haut, plus c'est fluide)
            }
        });

        steps.forEach((step, i) => {
            // 1. Sélectionner tous les mots de l'étape
            const words = step.querySelectorAll('.word');
            const title = step.querySelector('.step-title');

            // 2. Animation d'entrée du TITRE
            tl.fromTo(title,
                { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
                { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1, ease: 'power2.out' }
            );

            // 3. Animation des MOTS (Le cœur de l'effet)
            // On utilise .fromTo avec une fonction pour les valeurs de départ
            tl.fromTo(words,
                (index: number) => getRandomEffect(index), // État initial (Aléatoire)
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    rotation: 0,
                    scale: 1,
                    filter: 'blur(0px)',
                    stagger: 0.05, // Décalage entre chaque mot (Vitesse d'écriture)
                    duration: 1.5,
                    ease: 'power3.out'
                }
            );

            // 4. Pause de lecture
            tl.to({}, { duration: 2 });

            // 5. Sortie (Sauf pour le dernier slide)
            if (i < steps.length - 1) {
                tl.to([title, words], {
                    opacity: 0,
                    y: -50,
                    filter: 'blur(10px)',
                    stagger: 0.02, // Ils partent plus vite qu'ils ne sont arrivés
                    duration: 1
                });
            }
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative h-screen w-full bg-[#020410] overflow-hidden font-sans">

            {/* FOND GRAPHIQUE */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 via-[#020410] to-[#020410]"></div>

            {/* CONTENEUR DES TEXTES */}
            <div className="relative z-10 w-full h-full max-w-5xl mx-auto px-6 flex items-center justify-center">

                {NARRATIVE_STEPS.map((step) => (
                    <div key={step.id} className="step-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">

                        {/* TITRE */}
                        <h2 className={`step-title text-xl md:text-2xl font-mono uppercase tracking-[0.3em] mb-12 ${step.color} opacity-0`}>
                            {step.title}
                        </h2>

                        {/* PARAGRAPHE DÉCOUPÉ EN MOTS */}
                        <p className="text-4xl md:text-6xl font-bold leading-tight text-slate-100 flex flex-wrap justify-center gap-x-3 gap-y-2">
                            {step.text.split(" ").map((word, index) => (
                                <span key={index} className="word inline-block opacity-0 will-change-transform">
                                    {word}
                                </span>
                            ))}
                        </p>

                    </div>
                ))}

            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600 text-xs animate-pulse">
                SCROLL &darr;
            </div>
        </section>
    );
}