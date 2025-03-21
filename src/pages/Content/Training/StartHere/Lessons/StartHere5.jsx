import React from "react";
import LessonLayout from "@/components/LessonLayout";
import LessonCarousel from "@/components/LessonCarousel";
import { useProgress } from "@/hooks/useProgress";

export default function StartHere5() {
  const { completeLesson } = useProgress();

  const slides = [
    <div className="space-y-3">
      <h2 className="text-xl font-medium text-brand mb-2">
        Erros Comuns no Treinamento
      </h2>
      <div className="w-full h-48 bg-gray-100 rounded-2xl overflow-hidden mb-3 shadow-sm">
        <span className="text-gray-400">Imagem ilustrativa</span>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-black/75 text-sm">
          Durante o treinamento, é comum cometer alguns erros. Vamos aprender a
          identificar e evitar os erros mais comuns para garantir um treinamento
          eficiente e positivo.
        </p>
      </div>
      <div className="bg-gray-50 p-3 rounded-lg">
        <h3 className="font-medium mb-2 text-sm">O que vamos aprender:</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Erros de timing</li>
          <li>Inconsistência nos comandos</li>
          <li>Expectativas irrealistas</li>
          <li>Dicas para sucesso</li>
        </ul>
      </div>
    </div>,
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-medium text-brand mb-3">
        Erros de Timing
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Recompensa atrasada</li>
        <li>Correção tardia</li>
        <li>Intervalos inconsistentes</li>
        <li>Duração inadequada das sessões</li>
        <li>Falta de pausas regulares</li>
      </ul>
    </div>,
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-medium text-brand mb-3">
        Inconsistência nos Comandos
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Palavras diferentes para o mesmo comando</li>
        <li>Tom de voz inconsistente</li>
        <li>Gestos diferentes</li>
        <li>Expectativas variáveis</li>
        <li>Regras que mudam frequentemente</li>
      </ul>
    </div>,
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-medium text-brand mb-3">
        Expectativas Irrealistas
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Progresso muito rápido</li>
        <li>Complexidade excessiva</li>
        <li>Ignorar limitações do cão</li>
        <li>Comparação com outros cães</li>
        <li>Falta de paciência</li>
      </ul>
    </div>,
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-medium text-brand mb-3">
        Dicas para Sucesso
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Seja consistente nos comandos</li>
        <li>Mantenha expectativas realistas</li>
        <li>Observe o progresso gradual</li>
        <li>Faça ajustes quando necessário</li>
        <li>Celebre pequenas conquistas</li>
      </ul>
    </div>,
  ];

  return (
    <LessonLayout
      moduleId="comece-aqui"
      lessonId="erros"
      nextLessonRoute="/comece-aqui/progresso"
      previousLessonRoute="/comece-aqui/ambiente"
      isFirstLesson={false}
      slides={slides}
    >
      <h1 className="text-2xl font-medium text-black/75 mb-6">
        Erros Comuns no Treinamento
      </h1>
    </LessonLayout>
  );
} 