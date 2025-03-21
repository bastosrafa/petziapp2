import React, { useState } from "react";
import { ArrowLeft, Users, Dog, Volume2, Jump, Bowl, Hand } from "lucide-react";
import Socialization1 from "./Lessons/Socialization1";
import Socialization2 from "./Lessons/Socialization2";
import Socialization3 from "./Lessons/Socialization3";
import Socialization4 from "./Lessons/Socialization4";
import Socialization5 from "./Lessons/Socialization5";

export default function Socialization() {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const options2 = [
    {
      name: "Como socializar o cão com pessoas e outros pets",
      icon: Users,
      description: "Aprenda técnicas para socializar seu cão de forma segura e positiva.",
      component: Socialization1
    },
    {
      name: "Passeio sem puxar a guia",
      icon: Dog,
      description: "Ensine seu cão a andar sem puxar a guia, tornando os passeios mais prazerosos.",
      component: Socialization2
    },
    {
      name: "Latidos excessivos: Como reduzir e controlar",
      icon: Volume2,
      description: "Aprenda a controlar os latidos excessivos do seu cão.",
      component: Socialization3
    },
    {
      name: "Ensinar a não pular em visitas",
      icon: Jump,
      description: "Controle o comportamento de pular em visitas de forma positiva.",
      component: Socialization4
    },
    {
      name: "Controle na hora da refeição",
      icon: Bowl,
      description: "Ensine seu cão a ter um comportamento adequado durante as refeições.",
      component: Socialization5
    }
  ];

  const LessonComponent = selectedLesson?.component;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Socialização e Controle de Impulsos</h1>
        <p className="text-gray-600 mb-8">
          Aprenda a socializar seu cão e controlar seus impulsos, garantindo um convívio harmonioso com pessoas e outros animais.
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