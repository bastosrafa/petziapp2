import React, { useState } from "react";
import { ArrowLeft, Brain, Puzzle, Gamepad, Search, Target } from "lucide-react";
import MentalExercises1 from "./Lessons/MentalExercises1";
import MentalExercises2 from "./Lessons/MentalExercises2";
import MentalExercises3 from "./Lessons/MentalExercises3";
import MentalExercises4 from "./Lessons/MentalExercises4";
import MentalExercises5 from "./Lessons/MentalExercises5";

export default function MentalExercises() {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const options = [
    {
      name: "Jogos de Inteligência",
      icon: Brain,
      description: "Aprenda jogos que estimulam o raciocínio e a inteligência do seu cão.",
      component: MentalExercises1
    },
    {
      name: "Brincadeiras Interativas",
      icon: Puzzle,
      description: "Descubra brincadeiras que promovem a interação e o desenvolvimento mental.",
      component: MentalExercises2
    },
    {
      name: "Brinquedos Inteligentes",
      icon: Gamepad,
      description: "Conheça brinquedos que desafiam e estimulam o cão mentalmente.",
      component: MentalExercises3
    },
    {
      name: "Jogos de Busca",
      icon: Search,
      description: "Aprenda jogos de busca que desenvolvem o olfato e a concentração.",
      component: MentalExercises4
    },
    {
      name: "Treinos de Agilidade",
      icon: Target,
      description: "Exercícios que combinam atividade física e mental.",
      component: MentalExercises5
    }
  ];

  const LessonComponent = selectedLesson?.component;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Exercícios Mentais e Diversão</h1>
        <p className="text-gray-600 mb-8">
          Mantenha seu cão mentalmente ativo e feliz com jogos e exercícios que estimulam o raciocínio e a criatividade.
        </p>

        {!selectedLesson ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {options.map((option, index) => (
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