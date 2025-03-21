import React from "react";
import { useNavigate } from "react-router-dom";
import { DogIcon } from "lucide-react";
import BackButton from "@/components/BackButton";

export default function MausHabitos() {
  const navigate = useNavigate();

  const lessons = [
    {
      name: "Morder e Roer",
      description: "Aprenda a evitar e corrigir comportamentos destrutivos de morder e roer.",
      route: "/maus-habitos/morder",
    },
    {
      name: "Latidos Excessivos",
      description: "Como controlar e reduzir latidos excessivos do seu cão.",
      route: "/maus-habitos/latidos",
    },
    {
      name: "Pular em Pessoas",
      description: "Técnicas para evitar que seu cão pule em pessoas.",
      route: "/maus-habitos/pular",
    },
  ];

  return (
    <div className="py-2.5 px-2.5 sm:px-0">
      <BackButton />
      
      <div className="flex gap-3 items-center">
        <DogIcon className="text-brand" />
        <h1 className="text-xl font-medium text-black/75">Evitando Maus Hábitos</h1>
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