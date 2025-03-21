import React, { useState } from "react";
import { ArrowLeft, Bone, Paw, Dog, Home, Trash2 } from "lucide-react";
import BadHabits1 from "./Lessons/BadHabits1";
import BadHabits2 from "./Lessons/BadHabits2";
import BadHabits3 from "./Lessons/BadHabits3";
import BadHabits4 from "./Lessons/BadHabits4";
import BadHabits5 from "./Lessons/BadHabits5";

export default function BadHabits() {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const options2 = [
    {
      name: "Morder objetos",
      icon: Bone,
      description: "Aprenda a evitar que seu cão destrua objetos da casa.",
      component: BadHabits1
    },
    {
      name: "Cavar no jardim",
      icon: Paw,
      description: "Evite que seu cão cave buracos no jardim.",
      component: BadHabits2
    },
    {
      name: "Puxar roupas",
      icon: Dog,
      description: "Impeça que seu cão puxe roupas ou tecidos.",
      component: BadHabits3
    },
    {
      name: "Destruir móveis",
      icon: Home,
      description: "Evite que seu cão danifique móveis e objetos da casa.",
      component: BadHabits4
    },
    {
      name: "Mexer no lixo",
      icon: Trash2,
      description: "Impeça que seu cão revire o lixo.",
      component: BadHabits5
    }
  ];

  const LessonComponent = selectedLesson?.component;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Evitando Maus Hábitos</h1>
        <p className="text-gray-600 mb-8">
          Aprenda a identificar e corrigir comportamentos indesejados do seu cão, criando um ambiente mais harmonioso para todos.
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