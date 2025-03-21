import React from "react";
import { useNavigate } from "react-router-dom";
import { DogIcon } from "lucide-react";
import BackButton from "@/components/BackButton";

export default function ExerciciosMentais() {
  const navigate = useNavigate();

  const lessons = [
    {
      name: "Jogos de Inteligência",
      description: "Atividades divertidas para estimular a mente do seu cão.",
      route: "/exercicios-mentais/jogos",
    },
    {
      name: "Brincadeiras Interativas",
      description: "Como brincar de forma divertida e educativa com seu cão.",
      route: "/exercicios-mentais/brincadeiras",
    },
    {
      name: "Enriquecimento Ambiental",
      description: "Crie um ambiente estimulante para seu cão se desenvolver.",
      route: "/exercicios-mentais/ambiente",
    },
  ];

  return (
    <div className="py-2.5 px-2.5 sm:px-0">
      <BackButton />
      
      <div className="flex gap-3 items-center">
        <DogIcon className="text-brand" />
        <h1 className="text-xl font-medium text-black/75">Exercícios Mentais e Diversão</h1>
      </div>

      <div className="mt-5 flex flex-col gap-4">
        {lessons.map((lesson) => (
          <div
            key={lesson.name}
            className="flex items-center justify-between border p-4 bg-white rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => navigate(lesson.route)}
          >
            <div className="flex flex-col gap-1">
              <p className="text-md font-medium text-brand">{lesson.name}</p>
              <p className="text-sm text-black/75">{lesson.description}</p>
            </div>
            <DogIcon className="h-6 w-6 text-brand" />
          </div>
        ))}
      </div>
    </div>
  );
} 