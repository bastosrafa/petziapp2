import React from "react";
import { Star, MessageSquare, Calendar, AlertCircle, ChartBar, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useProgress } from "@/hooks/useProgress";

export default function StartHere() {
  const navigate = useNavigate();
  const { isModuleUnlocked, isLessonUnlocked, isLessonCompleted } = useProgress();

  const options2 = [
    {
      name: "Como os cães aprendem?",
      icon: Star,
      description: "Entenda os princípios básicos do aprendizado canino e como usar o reforço positivo.",
      route: "/comece-aqui/introducao",
      moduleId: "comece-aqui",
      lessonId: "introducao"
    },
    {
      name: "Comunicação eficaz com o cão",
      icon: MessageSquare,
      description: "Aprenda a se comunicar de forma clara e efetiva com seu cão.",
      route: "/comece-aqui/comunicacao",
      moduleId: "comece-aqui",
      lessonId: "comunicacao"
    },
    {
      name: "Estabelecendo uma rotina de treinamento",
      icon: Calendar,
      description: "Crie uma estrutura consistente para suas sessões de treinamento.",
      route: "/comece-aqui/rotina",
      moduleId: "comece-aqui",
      lessonId: "rotina"
    },
    {
      name: "Erros comuns no treinamento",
      icon: AlertCircle,
      description: "Identifique e evite os erros mais comuns no treinamento canino.",
      route: "/comece-aqui/erros",
      moduleId: "comece-aqui",
      lessonId: "erros"
    },
    {
      name: "Medindo o progresso do treinamento",
      icon: ChartBar,
      description: "Aprenda a acompanhar e avaliar o progresso do seu cão.",
      route: "/comece-aqui/progresso",
      moduleId: "comece-aqui",
      lessonId: "progresso"
    },
    {
      name: "Mantendo a motivação no treinamento",
      icon: Heart,
      description: "Estratégias para manter seu cão motivado durante o treinamento.",
      route: "/comece-aqui/motivacao",
      moduleId: "comece-aqui",
      lessonId: "motivacao"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Fundamentos do Adestramento</h1>
        <p className="text-gray-600">Comece sua jornada de treinamento com os conceitos básicos</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {options2.map((option, index) => {
          const isUnlocked = isLessonUnlocked(option.moduleId, option.lessonId);
          const isCompleted = isLessonCompleted(option.moduleId, option.lessonId);

          return (
            <button
              key={index}
              onClick={() => isUnlocked && navigate(option.route)}
              className={`flex flex-col items-start p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow ${
                !isUnlocked ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <div className="flex items-center space-x-2 mb-2">
                <option.icon className="w-6 h-6 text-blue-500" />
                <h2 className="text-lg font-medium">{option.name}</h2>
                {isCompleted && (
                  <span className="text-green-500 text-sm">✓ Concluído</span>
                )}
              </div>
              <p className="text-gray-600 text-sm">{option.description}</p>
              {!isUnlocked && (
                <p className="text-sm text-red-500 mt-2">
                  Complete a aula anterior para desbloquear
                </p>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
