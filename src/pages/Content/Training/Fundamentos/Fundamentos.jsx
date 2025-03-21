import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProgress } from "@/hooks/useProgress";
import Fundamentos1 from "./Lessons/Fundamentos1";
import Fundamentos2 from "./Lessons/Fundamentos2";
import Fundamentos3 from "./Lessons/Fundamentos3";
import BackButton from "@/components/BackButton";
import { DogIcon } from "lucide-react";

export default function Fundamentos() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const { isLessonUnlocked, isLessonCompleted } = useProgress();

  const lessons = [
    {
      name: "Criando um Vínculo Forte",
      description: "Aprenda a construir uma relação de confiança e respeito com seu cão.",
      route: "/fundamentos/vinculo",
      moduleId: "fundamentos",
      lessonId: "vinculo"
    },
    {
      name: "Comunicação Efetiva",
      description: "Entenda como se comunicar de forma clara e efetiva com seu cão.",
      route: "/fundamentos/comunicacao",
      moduleId: "fundamentos",
      lessonId: "comunicacao"
    },
    {
      name: "Recompensas e Reforço Positivo",
      description: "Aprenda a usar recompensas de forma efetiva no treinamento.",
      route: "/fundamentos/recompensas",
      moduleId: "fundamentos",
      lessonId: "recompensas"
    }
  ];

  // Se houver lessonId, renderiza a aula específica
  if (lessonId) {
    const lessonComponents = {
      "vinculo": Fundamentos1,
      "comunicacao": Fundamentos2,
      "recompensas": Fundamentos3
    };

    const LessonComponent = lessonComponents[lessonId];

    if (!LessonComponent) {
      return <div>Aula não encontrada</div>;
    }

    if (!isLessonUnlocked("fundamentos", lessonId)) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <h1 className="text-2xl font-medium text-black/75 mb-4">
            Aula Bloqueada
          </h1>
          <p className="text-black/75 mb-6">
            Complete as aulas anteriores para desbloquear esta aula.
          </p>
          <button
            onClick={() => navigate("/fundamentos/vinculo")}
            className="px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand/90"
          >
            Voltar para a primeira aula
          </button>
        </div>
      );
    }

    return <LessonComponent />;
  }

  // Se não houver lessonId, mostra a lista de aulas
  return (
    <div className="py-2.5 px-2.5 sm:px-0">
      <BackButton />
      
      <div className="flex gap-3 items-center">
        <DogIcon className="text-brand" />
        <h1 className="text-xl font-medium text-black/75">Fundamentos do Adestramento</h1>
      </div>

      <div className="mt-5 flex flex-col gap-4">
        {lessons.map((lesson) => {
          const isUnlocked = isLessonUnlocked(lesson.moduleId, lesson.lessonId);
          const isCompleted = isLessonCompleted(lesson.moduleId, lesson.lessonId);

          return (
            <div
              key={lesson.name}
              className={`flex items-center justify-between border p-4 bg-white rounded-md ${
                isUnlocked ? 'cursor-pointer hover:bg-gray-50 transition-colors' : 'opacity-50 cursor-not-allowed'
              }`}
              onClick={() => isUnlocked && navigate(lesson.route)}
            >
              <div className="flex flex-col gap-1">
                <p className="text-md font-medium text-brand">{lesson.name}</p>
                <p className="text-sm text-black/75">{lesson.description}</p>
                {!isUnlocked && (
                  <p className="text-sm text-red-500">
                    Complete as aulas anteriores para desbloquear
                  </p>
                )}
                {isCompleted && (
                  <p className="text-sm text-green-500">
                    ✓ Concluído
                  </p>
                )}
              </div>
              <DogIcon className="h-6 w-6 text-brand" />
            </div>
          );
        })}
      </div>
    </div>
  );
} 