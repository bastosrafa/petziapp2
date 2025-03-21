import React, { useState } from "react";
import { ArrowLeft, Brain, Dog, Heart, Shield, Medal, Sparkles } from "lucide-react";
import Foundations1 from "./Lessons/Foundations1";
import Foundations2 from "./Lessons/Foundations2";
import Foundations3 from "./Lessons/Foundations3";
import Foundations4 from "./Lessons/Foundations4";
import Foundations5 from "./Lessons/Foundations5";
import Foundations6 from "./Lessons/Foundations6";

export default function Foundations() {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const options2 = [
    {
      name: "Como os cães aprendem?",
      icon: Brain,
      description: "Entenda os princípios básicos do aprendizado canino e como aplicar o reforço positivo.",
      component: Foundations1
    },
    {
      name: "Comunicação eficaz com o cão",
      icon: Dog,
      description: "Aprenda a se comunicar de forma clara e efetiva com seu cão.",
      component: Foundations2
    },
    {
      name: "Estabelecendo uma rotina de treinamento",
      icon: Heart,
      description: "Crie uma estrutura consistente para seus treinos.",
      component: Foundations3
    },
    {
      name: "Erros comuns no treinamento",
      icon: Shield,
      description: "Identifique e evite os erros mais comuns no treinamento.",
      component: Foundations4
    },
    {
      name: "Medindo o progresso do treinamento",
      icon: Medal,
      description: "Aprenda a avaliar e registrar o progresso do seu cão.",
      component: Foundations5
    },
    {
      name: "Mantendo a motivação no treinamento",
      icon: Sparkles,
      description: "Estratégias para manter seu cão motivado durante os treinos.",
      component: Foundations6
    }
  ];

  const LessonComponent = selectedLesson?.component;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Fundamentos do Adestramento</h1>
        <p className="text-gray-600 mb-8">
          Aprenda os princípios essenciais para um treinamento eficaz e positivo com seu cão.
        </p>

        {!selectedLesson ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {options2.map((option, index) => (
              <div
                key={index}
                onClick={() => setSelectedLesson(option)}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <option.icon className="w-6 h-6 text-blue-500 mr-2" />
                  <h2 className="text-xl font-semibold">{option.name}</h2>
                </div>
                <p className="text-gray-600">{option.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <button
              onClick={() => setSelectedLesson(null)}
              className="flex items-center text-blue-500 hover:text-blue-700 mb-6"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar para a lista de lições
            </button>
            <LessonComponent />
          </div>
        )}
      </div>
    </div>
  );
} 