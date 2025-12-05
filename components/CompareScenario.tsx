'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
    Zap, ShieldCheck, User, Cloud,
    AlertOctagon, Server, Database, Fingerprint
} from 'lucide-react';

export default function CompareScenario() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const [containerWidth, setContainerWidth] = useState(0);

    // Mettre à jour la largeur du conteneur pour le masque
    useEffect(() => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current.offsetWidth);
        }
        const handleResize = () => {
            if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMove = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
        setSliderPosition(percentage);
    }, []);

    const handleInteractionStart = (clientX: number) => {
        setIsDragging(true);
        handleMove(clientX);
    };

    useEffect(() => {
        const handleUp = () => setIsDragging(false);
        window.addEventListener('mouseup', handleUp);
        window.addEventListener('touchend', handleUp);
        return () => {
            window.removeEventListener('mouseup', handleUp);
            window.removeEventListener('touchend', handleUp);
        };
    }, [handleMove]); // Ajout de handleMove aux dépendances

    // --- CONTENU MARKETING (Illusion) ---
    // --- CONTENU MARKETING (Illusion) ---
    const MarketingUI = () => (
        <div className="w-full h-full bg-slate-50 text-slate-800 flex items-center justify-center p-6 md:p-12 select-none relative overflow-hidden">

            {/* --- NOUVEAU : BARRE LOGOS GAFAM (Haut Gauche) --- */}
            <div className="absolute top-6 left-6 flex items-center gap-4 z-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 cursor-help" title="Partenaires Officiels">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hidden md:block">Partners</span>

                {/* Microsoft Logo */}
                <svg className="w-5 h-5" viewBox="0 0 23 23">
                    <path fill="#f35325" d="M1 1h10v10H1z" />
                    <path fill="#81bc06" d="M12 1h10v10H12z" />
                    <path fill="#05a6f0" d="M1 12h10v10H1z" />
                    <path fill="#ffba08" d="M12 12h10v10H12z" />
                </svg>

                {/* Google Logo */}
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.5v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.6v3h3.9c2.28-2.1 3.6-5.2 3.6-8.84z" />
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.9-3c-1.08.72-2.47 1.16-4.03 1.16-3.1 0-5.7-2.1-6.63-4.9H1.36v3.07C3.37 21.41 7.42 24 12 24z" />
                    <path fill="#FBBC05" d="M5.37 14.29A7.08 7.08 0 0 1 4.8 12c0-.8.14-1.56.36-2.29V6.64H1.36A11.98 11.98 0 0 0 0 12c0 1.93.46 3.75 1.36 5.36l4.01-3.07z" />
                    <path fill="#EA4335" d="M12 4.77c1.76 0 3.33.6 4.6 1.82l3.42-3.42C17.95 1.19 15.24 0 12 0 7.42 0 3.37 2.59 1.36 6.64l4.01 3.07c.93-2.8 3.53-4.94 6.63-4.94z" />
                </svg>

                {/* Apple Logo */}
                <svg className="w-5 h-5" viewBox="0 0 384 512" fill="black">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
                </svg>

                {/* Meta Logo (Blue) */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#0668E1">
                    <path d="M16.924 5.568c-.628 0-1.428.164-2.28.616-1.928.988-3.02 3.12-4.14 5.252-.968 1.84-1.9 3.612-3.768 4.604-.848.452-1.64.608-2.256.608-1.552 0-2.476-1.12-2.476-2.996 0-1.944 1.052-4.328 2.812-6.372 1.252-1.456 2.86-2.5 4.392-2.5.64 0 1.136.14 1.472.384v-3.08c-.736-.5-1.636-.712-2.612-.712-2.616 0-5.18 1.624-7.068 3.816-2.14 2.484-3.4 5.48-3.4 8.1 0 3.776 2.308 6.136 5.88 6.136 1.832 0 3.32-.612 4.42-1.652 1.616-1.528 2.508-3.676 3.42-5.772.96-2.212 1.956-4.5 4.34-5.768.852-.452 1.652-.612 2.272-.612 1.544 0 2.488 1.144 2.488 3.06 0 1.908-1.04 4.312-2.78 6.332-1.24 1.436-2.836 2.468-4.364 2.468-.624 0-1.124-.152-1.488-.416v3.104c.732.48 1.608.672 2.544.672 2.628 0 5.196-1.624 7.08-3.812 2.136-2.48 3.396-5.464 3.396-8.084 0-3.72-2.316-6.052-5.836-6.052-1.824 0-3.3.608-4.396 1.64-1.608 1.516-2.504 3.66-3.42 5.768-.956 2.22-1.96 4.52-4.36 5.808z" />
                </svg>
            </div>

            {/* Fond décoratif */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>

            <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-8">
                {/* Texte */}
                <div className="space-y-4 md:space-y-6 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-blue-100 rounded-full shadow-sm text-[10px] md:text-xs font-bold text-blue-600 uppercase tracking-wider mx-auto md:mx-0">
                        <Zap size={12} className="fill-blue-600" /> Smart Education
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        L'école <span className="text-blue-600">Connectée</span>.
                    </h2>
                    <p className="text-sm md:text-lg text-slate-500 font-medium">
                        Une suite d'outils magiques et gratuits pour libérer la créativité.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
                        <span className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold shadow-lg shadow-blue-600/20 hover:scale-105 transition-transform cursor-pointer">
                            Gratuit
                        </span>
                        <span className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 text-sm font-bold">
                            <ShieldCheck size={16} className="text-green-500" /> Sécurisé
                        </span>
                    </div>
                </div>

                {/* Visuel Carte Bento */}
                <div className="relative w-full aspect-[4/3] md:aspect-square bg-white rounded-2xl shadow-xl shadow-blue-900/5 p-4 grid grid-cols-2 gap-3 border border-slate-100 rotate-1">
                    {/* Widget User */}
                    <div className="bg-blue-50 rounded-xl p-3 flex flex-col justify-between col-span-2">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-blue-700"><User size={16} /></div>
                            <div className="text-left">
                                <div className="font-bold text-slate-900 text-sm">Emma D.</div>
                                <div className="text-[10px] text-slate-500">Classe Bleue</div>
                            </div>
                        </div>
                        <div className="mt-2 h-1.5 w-full bg-blue-200 rounded-full overflow-hidden">
                            <div className="h-full w-3/4 bg-blue-500"></div>
                        </div>
                    </div>

                    <div className="bg-indigo-50 rounded-xl p-3 flex flex-col items-center justify-center text-center">
                        <Cloud size={24} className="text-indigo-500 mb-1" />
                        <div className="font-bold text-slate-900 text-xs">Cloud</div>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-3 flex flex-col items-center justify-center text-center">
                        <Zap size={24} className="text-purple-500 mb-1" />
                        <div className="font-bold text-slate-900 text-xs">IA Help</div>
                    </div>
                </div>
            </div>
        </div>
    );

    // --- CONTENU RÉALITÉ (Hacker) ---
    const RealityUI = () => (
        <div className="w-full h-full bg-[#0a0a0a] text-red-500 flex items-center justify-center p-6 md:p-12 select-none relative overflow-hidden">

            {/* Fond Technique */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,20,0.5)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

            <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Texte Hacker */}
                <div className="space-y-4 md:space-y-6 text-center md:text-left font-mono">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/30 border border-red-600 text-[10px] md:text-xs font-bold text-red-500 uppercase tracking-wider animate-pulse mx-auto md:mx-0">
                        <AlertOctagon size={12} /> Data Leak
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white leading-tight">
                        L'école <span className="text-red-600">Surveillée</span>.
                    </h2>
                    <div className="text-xs md:text-sm text-red-400/80 leading-relaxed border-l-2 border-red-900 pl-4 text-left mx-auto md:mx-0 max-w-sm md:max-w-none">
                        <p>- SERVER: USA (VIRGINIA)</p>
                        <p>- CLOUD ACT: APPLICABLE</p>
                        <p>- PROFILING: ACTIVE</p>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
                        <span className="px-4 py-2 border border-red-600 text-red-500 text-sm font-bold bg-red-950/20 uppercase tracking-widest">
                            Produit = Vous
                        </span>
                    </div>
                </div>

                {/* Visuel Wireframe */}
                <div className="relative w-full aspect-[4/3] md:aspect-square bg-black/80 border border-red-500/50 p-4 grid grid-cols-2 gap-3 rotate-1 shadow-[0_0_30px_rgba(220,38,38,0.2)]">
                    <div className="border border-red-800 bg-red-950/10 p-3 flex flex-col justify-between col-span-2 relative overflow-hidden">
                        <div className="absolute top-1 right-1 text-[8px] text-red-600">TRACKING_ID</div>
                        <div className="flex items-center gap-2 opacity-50 grayscale">
                            <div className="w-8 h-8 border border-red-500 flex items-center justify-center"><Fingerprint size={16} /></div>
                            <div className="text-left">
                                <div className="text-red-500 text-sm">PROFILE</div>
                                <div className="text-[10px]">Mining...</div>
                            </div>
                        </div>
                        <div className="mt-2 text-[8px] text-green-500 font-mono bg-black p-1 border border-red-900">
                            {`{ "weakness": "maths", "ads": true }`}
                        </div>
                    </div>

                    <div className="border border-red-800 bg-red-950/10 p-3 flex flex-col items-center justify-center text-center">
                        <Server size={24} className="text-red-600 mb-1 animate-pulse" />
                        <div className="text-red-500 font-bold text-xs">US Server</div>
                    </div>
                    <div className="border border-red-800 bg-red-950/10 p-3 flex flex-col items-center justify-center text-center">
                        <Database size={24} className="text-red-600 mb-1" />
                        <div className="text-red-500 font-bold text-xs">Sold Data</div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="w-full px-4 py-20 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg">
                La réalité
            </h1>
            <div
                ref={containerRef}
                className="relative w-full max-w-6xl h-[700px] md:h-[600px] rounded-3xl overflow-hidden cursor-col-resize shadow-2xl border border-white/10 group"
                onMouseDown={(e) => handleInteractionStart(e.clientX)}
                onTouchStart={(e) => handleInteractionStart(e.touches[0].clientX)}
                onMouseMove={(e) => isDragging && handleMove(e.clientX)}
                onTouchMove={(e) => isDragging && handleMove(e.touches[0].clientX)}
            >
                {/* COUCHE FOND (RÉALITÉ) */}
                <div className="absolute inset-0 w-full h-full">
                    <RealityUI />
                </div>

                {/* COUCHE DESSUS (MARKETING) */}
                <motion.div
                    className="absolute top-0 left-0 bottom-0 overflow-hidden border-r-4 border-white shadow-[10px_0_50px_rgba(0,0,0,0.5)] z-20"
                    style={{ width: `${sliderPosition}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {/* ASTUCE RESPONSIVE : On force la largeur du contenu à la taille du conteneur parent */}
                    <div style={{ width: containerWidth ? `${containerWidth}px` : '100vw' }} className="h-full">
                        <MarketingUI />
                    </div>
                </motion.div>

                {/* POIGNÉE */}
                <div
                    className="absolute top-0 bottom-0 w-1 bg-transparent z-30 cursor-col-resize"
                    style={{ left: `${sliderPosition}%` }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-slate-100 hover:scale-110 transition-transform">
                        <div className="flex gap-0.5">
                            <div className="w-1 h-5 bg-slate-300 rounded-full"></div>
                            <div className="w-1 h-5 bg-slate-300 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* LABEL INFO */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold pointer-events-none border border-white/10">
                    GLISSEZ POUR RÉVÉLER LA VÉRITÉ
                </div>

            </div>
        </div>
    );
}