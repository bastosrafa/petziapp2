import React, { useState } from "react";
import { ArrowLeft, Shower, Tooth, Paw, Bed, Clock, Dog } from "lucide-react";
import Hygiene1 from "./Lessons/Hygiene1";
import Hygiene2 from "./Lessons/Hygiene2";
import Hygiene3 from "./Lessons/Hygiene3";
import Hygiene4 from "./Lessons/Hygiene4";
import Hygiene5 from "./Lessons/Hygiene5";

export default function Hygiene() {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const options2 = [
    {
      name: "Banho sem estresse",
      icon: Shower,
      description: "Aprenda a dar banho no seu cão de forma tranquila e positiva.",
      component: Hygiene1
    },
    {
      name: "Escovação de dentes",
      icon: Tooth,
      description: "Mantenha a saúde bucal do seu cão com escovação regular.",
      component: Hygiene2
    },
    {
      name: "Corte de unhas",
      icon: Paw,
      description: "Aprenda a cortar as unhas do seu cão de forma segura.",
      component: Hygiene3
    },
    {
      name: "Rotina de sono",
      icon: Bed,
      description: "Estabeleça uma rotina saudável de sono para seu cão.",
      component: Hygiene4
    },
    {
      name: "Rotina de alimentação",
      icon: Clock,
      description: "Crie uma rotina alimentar adequada para seu cão.",
      component: Hygiene5
    }
  ];

  const LessonComponent = selectedLesson?.component;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Higiene e Rotina</h1>
        <p className="text-gray-600 mb-8">
          Aprenda a cuidar da higiene do seu cão e estabelecer rotinas saudáveis para seu bem-estar.
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