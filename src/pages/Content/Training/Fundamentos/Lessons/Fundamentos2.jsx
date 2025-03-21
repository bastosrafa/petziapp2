import React from "react";
import LessonLayout from "@/components/LessonLayout";
import LessonCarousel from "@/components/LessonCarousel";
import heartImage from "@/assets/heart.png";

export default function Fundamentos2() {
  const slides = [
    // Slide 1: Por que a comunicação é importante?
    <div className="space-y-3">
      <h2 className="text-xl font-medium text-brand mb-2">
        Por que a comunicação é importante?
      </h2>
      <div className="w-full h-48 bg-gray-100 rounded-2xl overflow-hidden mb-3 shadow-sm">
        <img 
          src={heartImage} 
          alt="Cão e tutor se comunicando" 
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-black/75 text-sm">
        A comunicação efetiva é fundamental para o sucesso do treinamento. 
        Quando você e seu cão se entendem bem, o aprendizado se torna mais 
        fácil e prazeroso para ambos.
      </p>
      <div className="bg-gray-50 p-3 rounded-lg mt-2">
        <h3 className="font-medium mb-2 text-sm">Por que a comunicação é essencial?</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Facilita o entendimento dos comandos</li>
          <li>Reduz frustrações e mal-entendidos</li>
          <li>Fortalece o vínculo entre cão e tutor</li>
          <li>Torna o treinamento mais eficiente</li>
        </ul>
      </div>
    </div>,

    // Slide 2: Elementos da comunicação
    <div className="space-y-4">
      <h2 className="text-xl font-medium text-brand mb-3">
        Elementos da comunicação
      </h2>
      <ul className="list-disc list-inside space-y-2 text-black/75">
        <li>Comandos verbais claros e consistentes</li>
        <li>Linguagem corporal e gestos</li>
        <li>Tom de voz apropriado</li>
        <li>Contato visual</li>
        <li>Timing das recompensas</li>
      </ul>
    </div>,

    // Slide 3: Como melhorar a comunicação
    <div className="space-y-4">
      <h2 className="text-xl font-medium text-brand mb-3">
        Como melhorar a comunicação
      </h2>
      <ol className="list-decimal list-inside space-y-2 text-black/75">
        <li>Use comandos curtos e claros</li>
        <li>Mantenha consistência nas palavras e gestos</li>
        <li>Observe as respostas do seu cão</li>
        <li>Use reforço positivo imediato</li>
        <li>Pratique regularmente</li>
      </ol>
    </div>,

    // Slide 4: Erros comuns
    <div className="space-y-4">
      <h2 className="text-xl font-medium text-brand mb-3">
        Erros comuns
      </h2>
      <ul className="list-disc list-inside space-y-2 text-black/75">
        <li>Comandos muito longos ou complexos</li>
        <li>Inconsistência nas palavras usadas</li>
        <li>Timing incorreto das recompensas</li>
        <li>Falta de atenção ao comportamento do cão</li>
        <li>Uso de múltiplos comandos simultaneamente</li>
      </ul>
    </div>,

    // Slide 5: Resumo
    <div className="space-y-4">
      <h2 className="text-xl font-medium text-brand mb-3">
        Resumo
      </h2>
      <div className="bg-purple-50 p-4 rounded-lg">
        <p className="text-black/75">
          Uma comunicação clara e efetiva é a chave para um treinamento bem-sucedido. 
          Mantenha seus comandos simples, seja consistente e observe as respostas 
          do seu cão para ajustar sua comunicação conforme necessário.
        </p>
      </div>
    </div>
  ];

  return (
    <LessonLayout
      moduleId="fundamentos"
      lessonId="comunicacao"
      nextLessonRoute="/fundamentos/recompensas"
    >
      <h1 className="text-2xl font-medium text-black/75 mb-6">
        Comunicação Efetiva
      </h1>

      <LessonCarousel 
        slides={slides} 
        moduleId="fundamentos"
        lessonId="comunicacao"
      />
    </LessonLayout>
  );
} 