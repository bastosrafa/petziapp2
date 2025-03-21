import React, { useState } from "react";
import { ArrowLeft, Dog, Users, Car, Store, Park } from "lucide-react";
import PublicBehavior1 from "./Lessons/PublicBehavior1";
import PublicBehavior2 from "./Lessons/PublicBehavior2";
import PublicBehavior3 from "./Lessons/PublicBehavior3";
import PublicBehavior4 from "./Lessons/PublicBehavior4";
import PublicBehavior5 from "./Lessons/PublicBehavior5";

export default function PublicBehavior() {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const options = [
    {
      name: "Andar na rua",
      icon: Dog,
      description: "Aprenda a fazer seu cão andar corretamente na rua sem puxar a guia.",
      component: PublicBehavior1
    },
    {
      name: "Interagir com pessoas",
      icon: Users,
      description: "Ensine seu cão a interagir adequadamente com pessoas na rua.",
      component: PublicBehavior2
    },
    {
      name: "Viajar de carro",
      icon: Car,
      description: "Aprenda a fazer seu cão viajar de carro de forma segura e confortável.",
      component: PublicBehavior3
    },
    {
      name: "Ir ao pet shop",
      icon: Store,
      description: "Prepare seu cão para visitas ao pet shop sem estresse.",
      component: PublicBehavior4
    },
    {
      name: "Ir ao parque",
      icon: Park,
      description: "Ensine seu cão a se comportar adequadamente em parques e áreas públicas.",
      component: PublicBehavior5
    }
  ];

  const LessonComponent = selectedLesson?.component;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Comportamento em Público</h1>
        <p className="text-gray-600 mb-8">
          Aprenda a preparar seu cão para diferentes situações em público, garantindo passeios seguros e agradáveis para todos.
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