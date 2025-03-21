import React from "react";
import LessonLayout from "@/components/LessonLayout";
import LessonCarousel from "@/components/LessonCarousel";
import { useProgress } from "@/hooks/useProgress";

export default function StartHere3() {
  const { completeLesson } = useProgress();

  const slides = [
    <div className="space-y-3">
      <h2 className="text-xl font-medium text-brand mb-2">
        Primeiros Passos no Treinamento
      </h2>
      <div className="w-full h-48 bg-gray-100 rounded-2xl overflow-hidden mb-3 shadow-sm">
        <span className="text-gray-400">Imagem ilustrativa</span>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-black/75 text-sm">
          Agora que você está preparado, vamos começar com os primeiros passos no
          treinamento. Vamos estabelecer uma base sólida para o aprendizado do seu
          cão.
        </p>
      </div>
      <div className="bg-gray-50 p-3 rounded-lg">
        <h3 className="font-medium mb-2 text-sm">O que vamos aprender:</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Como preparar o ambiente ideal</li>
          <li>Duração adequada das sessões</li>
          <li>Primeiro exercício prático</li>
          <li>Dicas para sucesso inicial</li>
        </ul>
      </div>
    </div>,
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-medium text-brand mb-3">
        Preparando o Ambiente
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Escolha um local calmo e sem distrações</li>
        <li>Remova objetos que possam atrapalhar</li>
        <li>Tenha as recompensas prontas</li>
        <li>Mantenha o ambiente limpo e organizado</li>
        <li>Certifique-se de que o cão está confortável</li>
      </ul>
    </div>,
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-medium text-brand mb-3">
        Duração das Sessões
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Comece com sessões curtas (5-10 minutos)</li>
        <li>Aumente gradualmente conforme o progresso</li>
        <li>Faça pausas regulares</li>
        <li>Observe sinais de cansaço</li>
        <li>Termine sempre com uma nota positiva</li>
      </ul>
    </div>,
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-medium text-brand mb-3">
        Primeiro Exercício
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Use um petisco para chamar a atenção</li>
        <li>Mova o petisco para diferentes direções</li>
        <li>Recompense quando o cão seguir o petisco</li>
        <li>Repita várias vezes</li>
        <li>Mantenha o cão engajado e motivado</li>
      </ul>
    </div>,
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-medium text-brand mb-3">
        Dicas para Sucesso
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Seja paciente e consistente</li>
        <li>Use reforço positivo</li>
        <li>Mantenha o treinamento divertido</li>
        <li>Celebre pequenas conquistas</li>
        <li>Observe o progresso do seu cão</li>
      </ul>
    </div>,
  ];

  return (
    <LessonLayout
      moduleId="comece-aqui"
      lessonId="rotina"
      nextLessonRoute="/comece-aqui/erros"
      previousLessonRoute="/comece-aqui/comunicacao"
      isFirstLesson={false}
      slides={slides}
    >
      <h1 className="text-2xl font-medium text-black/75 mb-6">
        Estabelecendo uma Rotina de Treinamento
      </h1>
    </LessonLayout>
  );
} 