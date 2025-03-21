import React, { useState } from "react";
import { ArrowLeft, Dog, Bone, Home, Heart, Star, Target } from "lucide-react";
import DailyBehavior1 from "./Lessons/DailyBehavior1";
import DailyBehavior2 from "./Lessons/DailyBehavior2";
import DailyBehavior3 from "./Lessons/DailyBehavior3";
import DailyBehavior4 from "./Lessons/DailyBehavior4";
import DailyBehavior5 from "./Lessons/DailyBehavior5";

export default function DailyBehavior() {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const options2 = [
    {
      name: "Sentar (fundamental para controle e obediência)",
      icon: Dog,
      description: "Aprenda a ensinar o comando 'Senta' de forma efetiva e positiva.",
      component: DailyBehavior1
    },
    {
      name: "Deitar (ajuda a manter o pet calmo em situações de espera)",
      icon: Bone,
      description: "Ensine seu cão a deitar e ficar calmo em diferentes situações.",
      component: DailyBehavior2
    },
    {
      name: "Ficar (para evitar que o cão saia correndo)",
      icon: Target,
      description: "Controle efetivo do seu cão com o comando 'Fica'.",
      component: DailyBehavior3
    },
    {
      name: "Vem (chamada confiável, essencial para segurança)",
      icon: Heart,
      description: "Garanta que seu cão retorne quando chamado em qualquer situação.",
      component: DailyBehavior4
    },
    {
      name: "Lugar (definir um local seguro para o cão descansar)",
      icon: Home,
      description: "Ensine seu cão a ter um local próprio para descansar.",
      component: DailyBehavior5
    }
  ];

  const LessonComponent = selectedLesson?.component;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Comportamento Essencial para o Dia a Dia</h1>
        <p className="text-gray-600 mb-8">
          Aprenda os comandos e hábitos fundamentais que garantem um cão mais obediente e seguro em qualquer situação.
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