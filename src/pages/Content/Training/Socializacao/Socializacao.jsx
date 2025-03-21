import React from "react";
import { useNavigate } from "react-router-dom";
import { HeartIcon } from "lucide-react";
import BackButton from "@/components/BackButton";
import { useProgress } from "@/hooks/useProgress";

export default function Socializacao() {
  const navigate = useNavigate();
  const { isLessonUnlocked, isLessonCompleted } = useProgress();

  const lessons = [
    {
      name: "Interação com Outros Cães",
      description: "Aprenda a socializar seu cão com outros cães de forma segura.",
      route: "/socializacao/outros-caes",
      moduleId: "socializacao",
      lessonId: "outros-caes"
    },
    {
      name: "Controle de Impulsos",
      description: "Técnicas para controlar a excitação e impulsividade do seu cão.",
      route: "/socializacao/impulsos",
      moduleId: "socializacao",
      lessonId: "impulsos"
    },
    {
      name: "Interação com Pessoas",
      description: "Ensine seu cão a interagir adequadamente com diferentes pessoas.",
      route: "/socializacao/pessoas",
      moduleId: "socializacao",
      lessonId: "pessoas"
    },
  ];

  return (
    <div className="py-2.5 px-2.5 sm:px-0">
      <BackButton />
      
      <div className="flex gap-3 items-center">
        <HeartIcon className="text-brand" />
        <h1 className="text-xl font-medium text-black/75">Socialização</h1>
      </div>

      <div className="mt-5 flex flex-col gap-4">
        {lessons.map((lesson) => {
          const isUnlocked = isLessonUnlocked(lesson.moduleId, lesson.lessonId);
          const isCompleted = isLessonCompleted(lesson.moduleId, lesson.lessonId);

          return (
            <div
              key={lesson.name}
              className={`flex items-center justify-between border p-4 bg-white rounded-md ${
                isUnlocked ? "cursor-pointer hover:bg-gray-50" : "opacity-50 cursor-not-allowed"
              } transition-colors`}
              onClick={() => isUnlocked && navigate(lesson.route)}
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <p className="text-md font-medium text-brand">{lesson.name}</p>
                  {isCompleted && (
                    <span className="text-green-500 text-sm">✓ Concluído</span>
                  )}
                </div>
                <p className="text-sm text-black/75">{lesson.description}</p>
                {!isUnlocked && (
                  <p className="text-sm text-red-500 mt-1">
                    Complete a aula anterior para desbloquear
                  </p>
                )}
              </div>
              <HeartIcon className="h-6 w-6 text-brand" />
            </div>
          );
        })}
      </div>
    </div>
  );
} 