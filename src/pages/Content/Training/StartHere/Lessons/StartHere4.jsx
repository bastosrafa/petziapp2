import React from "react";
import LessonLayout from "@/components/LessonLayout";
import LessonCarousel from "@/components/LessonCarousel";
import { useProgress } from "@/hooks/useProgress";

export default function StartHere4() {
  const { completeLesson } = useProgress();

  const slides = [
    <div className="space-y-3">
      <h2 className="text-xl font-medium text-brand mb-2">
        Criando o Ambiente Ideal
      </h2>
      <div className="w-full h-48 bg-gray-100 rounded-2xl overflow-hidden mb-3 shadow-sm">
        <span className="text-gray-400">Imagem ilustrativa</span>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-black/75 text-sm">
          O ambiente de treinamento é crucial para o sucesso do aprendizado. Vamos
          criar um espaço ideal que favoreça o foco e o aprendizado do seu cão.
        </p>
      </div>
      <div className="bg-gray-50 p-3 rounded-lg">
        <h3 className="font-medium mb-2 text-sm">O que vamos aprender:</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Como escolher o local ideal</li>
          <li>Preparação do ambiente</li>
          <li>Adaptação gradual</li>
          <li>Dicas para sucesso</li>
        </ul>
      </div>
    </div>,
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-medium text-brand mb-3">
        Escolhendo o Local
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Área livre e segura</li>
        <li>Poucas distrações</li>
        <li>Boa iluminação</li>
        <li>Superfície adequada</li>
        <li>Fácil acesso</li>
      </ul>
    </div>,
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-medium text-brand mb-3">
        Preparando o Ambiente
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Remova objetos perigosos</li>
        <li>Organize os equipamentos</li>
        <li>Tenha água disponível</li>
        <li>Prepare as recompensas</li>
        <li>Mantenha o local limpo</li>
      </ul>
    </div>,
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-medium text-brand mb-3">
        Adaptação Gradual
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Apresente o local ao cão</li>
        <li>Permita exploração inicial</li>
        <li>Comece com exercícios simples</li>
        <li>Aumente a complexidade gradualmente</li>
        <li>Observe o conforto do cão</li>
      </ul>
    </div>,
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-medium text-brand mb-3">
        Dicas para Sucesso
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Mantenha o ambiente consistente</li>
        <li>Varie os exercícios</li>
        <li>Faça pausas regulares</li>
        <li>Observe sinais de estresse</li>
        <li>Adapte conforme necessário</li>
      </ul>
    </div>,
  ];

  return (
    <LessonLayout
      moduleId="comece-aqui"
      lessonId="erros"
      nextLessonRoute="/comece-aqui/progresso"
      previousLessonRoute="/comece-aqui/rotina"
      isFirstLesson={false}
      slides={slides}
    >
      <h1 className="text-2xl font-medium text-black/75 mb-6">
        Erros Comuns no Treinamento
      </h1>
    </LessonLayout>
  );
} 