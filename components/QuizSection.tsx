'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, ArrowRight, RefreshCw, Trophy } from 'lucide-react';
import { questions, Question } from '@/data/quizData'; // Assure-toi que le chemin est bon

export default function QuizSection() {
  const [quizSet, setQuizSet] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Au chargement, on pioche 5 questions aléatoires
  useEffect(() => {
    startQuiz();
  }, []);

  const startQuiz = () => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setQuizSet(shuffled.slice(0, 5)); // On prend 5 questions
    setCurrentIndex(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const handleAnswerClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === quizSet[currentIndex].correctAnswerIndex) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentIndex + 1;
    if (nextQuestion < quizSet.length) {
      setCurrentIndex(nextQuestion);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowScore(true);
    }
  };

  if (quizSet.length === 0) return null; // Attente du chargement

  return (
    <section className="relative min-h-screen w-full bg-[#020410] text-white flex flex-col items-center justify-center p-4">

      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg">
        Quiz Interactif
      </h1>

      
      {/* Fond décoratif subtil */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-[#020410] to-[#020410] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-2xl">
        
        {showScore ? (
          /* --- ÉCRAN DE RÉSULTAT --- */
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-10 text-center shadow-2xl"
          >
            <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Quiz Terminé !</h2>
            <p className="text-xl text-slate-300 mb-8">
              Tu as obtenu <span className="text-emerald-400 font-bold text-2xl">{score} / {quizSet.length}</span>
            </p>
            
            <p className="mb-8 text-slate-400">
              {score === 5 ? "Un véritable Résistant Numérique ! 🛡️" : 
               score >= 3 ? "Pas mal ! Encore un petit effort pour maîtriser le NIRD." : 
               "L'Empire t'a eu... Recommence pour te former !"}
            </p>

            <button 
              onClick={startQuiz}
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-full font-bold transition-all"
            >
              <RefreshCw size={20} /> Rejouer
            </button>
          </motion.div>
        ) : (
          /* --- ÉCRAN DE QUESTION --- */
          <div className="w-full">
            
            {/* Barre de progression */}
            <div className="mb-8 flex items-center justify-between text-sm text-slate-400 font-mono">
              <span>QUESTION {currentIndex + 1} / {quizSet.length}</span>
              <span>{quizSet[currentIndex].concept}</span>
            </div>
            <div className="w-full h-1 bg-slate-800 rounded-full mb-8 overflow-hidden">
              <motion.div 
                className="h-full bg-blue-500"
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / quizSet.length) * 100}%` }}
              />
            </div>

            <AnimatePresence mode='wait'>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-8 leading-tight">
                  {quizSet[currentIndex].question}
                </h2>

                <div className="grid gap-4">
                  {quizSet[currentIndex].options.map((option, index) => {
                    // Logique de couleur des boutons
                    const isCorrect = index === quizSet[currentIndex].correctAnswerIndex;
                    const isSelected = selectedOption === index;
                    
                    let buttonStyle = "border-slate-700 bg-slate-800/50 hover:bg-slate-700/50"; // Défaut
                    
                    if (isAnswered) {
                      if (isCorrect) buttonStyle = "border-emerald-500 bg-emerald-950/50 text-emerald-400"; // La bonne réponse
                      else if (isSelected) buttonStyle = "border-red-500 bg-red-950/50 text-red-400"; // Mauvaise réponse sélectionnée
                      else buttonStyle = "border-slate-800 opacity-50"; // Les autres
                    }

                    return (
                      <motion.button
                        key={index}
                        onClick={() => handleAnswerClick(index)}
                        disabled={isAnswered}
                        className={`w-full p-4 rounded-xl border text-left font-medium transition-all flex items-center justify-between ${buttonStyle}`}
                        whileHover={!isAnswered ? { scale: 1.02 } : {}}
                        whileTap={!isAnswered ? { scale: 0.98 } : {}}
                      >
                        {option}
                        {isAnswered && isCorrect && <CheckCircle size={20} />}
                        {isAnswered && isSelected && !isCorrect && <XCircle size={20} />}
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* --- EXPLICATION (LE SAVIEZ-VOUS) --- */}
            <AnimatePresence>
              {isAnswered && (
                <motion.div
                  initial={{ opacity: 0, y: 10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  className="mt-6 overflow-hidden"
                >
                  <div className="bg-blue-950/30 border border-blue-500/30 p-6 rounded-2xl">
                    <h3 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                      💡 Le Saviez-vous ?
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {quizSet[currentIndex].explanation}
                    </p>
                    <button
                      onClick={handleNextQuestion}
                      className="ml-auto flex items-center gap-2 px-6 py-2 bg-white text-black rounded-full font-bold text-sm hover:bg-slate-200 transition-colors"
                    >
                      {currentIndex === quizSet.length - 1 ? 'Voir le résultat' : 'Suivant'} <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        )}
      </div>
    </section>
  );
}