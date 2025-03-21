import React from "react";
import LessonLayout from "@/components/LessonLayout";
import LessonCarousel from "@/components/LessonCarousel";
import { useProgress } from "@/hooks/useProgress";

export default function StartHere2() {
  const { completeLesson } = useProgress();

  const slides = [
    <div className="space-y-3">
      <h2 className="text-xl font-medium text-brand mb-2">
        Preparando-se para o Treinamento
      </h2>
      <div className="w-full h-48 bg-gray-100 rounded-2xl overflow-hidden mb-3 shadow-sm">
        <span className="text-gray-400">Imagem ilustrativa</span>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="text-black/75 text-sm leading-relaxed space-y-2" style={{ width: '100%', overflowWrap: 'break-word' }}>
          <p>Preparar-se adequadamente para o treinamento é fundamental para o sucesso.</p>
          <p>Vamos ver os elementos essenciais que você precisa ter em mãos antes de começar.</p>
          <p>É importante ter tudo organizado para uma experiência positiva.</p>
          <p>Isso garantirá uma sessão produtiva e eficiente.</p>
        </div>
      </div>
      <div className="bg-gray-50 p-3 rounded-lg">
        <h3 className="font-medium mb-2 text-sm">O que você precisa ter em mãos:</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Petiscos e recompensas adequadas</li>
          <li>Equipamentos básicos de treinamento</li>
          <li>Ambiente preparado e seguro</li>
          <li>Paciência e disposição</li>
        </ul>
      </div>
    </div>,
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-medium text-brand mb-3">
        Petiscos e Recompensas
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Petiscos pequenos e saborosos</li>
        <li>Variedade de recompensas</li>
        <li>Quantidade adequada para a sessão</li>
        <li>Brinquedos preferidos do cão</li>
        <li>Bolsas ou recipientes para armazenar</li>
      </ul>
    </div>,
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-medium text-brand mb-3">
        Equipamentos Básicos
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Coleira adequada ao tamanho do cão</li>
        <li>Guia de treinamento</li>
        <li>Clicker (opcional)</li>
        <li>Brinquedos interativos</li>
        <li>Tapete ou cama para descanso</li>
      </ul>
    </div>,
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-medium text-brand mb-3">
        Preparação Mental
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Paciência e disposição</li>
        <li>Objetivos claros para a sessão</li>
        <li>Plano de exercícios</li>
        <li>Ambiente adequado</li>
        <li>Mente aberta para ajustes</li>
      </ul>
    </div>,
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-medium text-brand mb-3">
        Dicas para Sucesso
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Escolha um horário adequado</li>
        <li>Mantenha as sessões curtas</li>
        <li>Tenha um plano B</li>
        <li>Observe o estado do seu cão</li>
        <li>Mantenha um registro do progresso</li>
      </ul>
    </div>,
  ];

  return (
    <LessonLayout
      moduleId="comece-aqui"
      lessonId="comunicacao"
      nextLessonRoute="/comece-aqui/rotina"
      previousLessonRoute="/comece-aqui/introducao"
      isFirstLesson={false}
      slides={slides}
    >
      <h1 className="text-2xl font-medium text-black/75 mb-6">
        Comunicação Eficaz com o Cão
      </h1>
    </LessonLayout>
  );
}
