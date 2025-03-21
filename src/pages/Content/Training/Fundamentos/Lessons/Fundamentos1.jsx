import React from "react";
import LessonLayout from "@/components/LessonLayout";
import LessonCarousel from "@/components/LessonCarousel";
import heartImage from "@/assets/heart.png";

export default function Fundamentos1() {
  const slides = [
    // Slide 1: Por que é importante?
    <div className="space-y-3">
      <h2 className="text-xl font-medium text-brand mb-2">
        Por que é importante?
      </h2>
      <div className="w-full h-48 bg-gray-100 rounded-2xl overflow-hidden mb-3 shadow-sm">
        <img 
          src={heartImage} 
          alt="Cão e tutor com vínculo forte" 
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-black/75 text-sm whitespace-pre-wrap">
        Um vínculo forte entre você e seu cão é a base para um treinamento bem-sucedido.
        Quando seu cão confia em você e se sente seguro, ele está mais disposto a aprender
        e seguir suas orientações.
      </p>
      <div className="bg-gray-50 p-3 rounded-lg mt-2">
        <h3 className="font-medium mb-2 text-sm">Por que o vínculo é importante?</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Facilita o aprendizado</li>
          <li>Aumenta a confiança do cão</li>
          <li>Melhora a comunicação</li>
          <li>Torna o treinamento mais prazeroso</li>
        </ul>
      </div>
    </div>,

    // Slide 2: Como construir o vínculo
    <div className="space-y-4">
      <h2 className="text-xl font-medium text-brand mb-3">
        Como construir o vínculo
      </h2>
      <div className="bg-green-50 p-4 rounded-lg">
        <ul className="list-disc pl-5 space-y-2">
          <li>Dedique tempo de qualidade juntos</li>
          <li>Use reforço positivo</li>
          <li>Seja consistente nas interações</li>
          <li>Respeite os limites do seu cão</li>
          <li>Participe de atividades divertidas</li>
        </ul>
      </div>
    </div>,

    // Slide 3: Sinais de um vínculo forte
    <div className="space-y-4">
      <h2 className="text-xl font-medium text-brand mb-3">
        Sinais de um vínculo forte
      </h2>
      <div className="bg-blue-50 p-4 rounded-lg">
        <ul className="list-disc pl-5 space-y-2">
          <li>Seu cão procura sua companhia</li>
          <li>Ele mantém contato visual</li>
          <li>Responde positivamente aos seus comandos</li>
          <li>Mostra confiança em situações novas</li>
          <li>Demonstra afeto de forma natural</li>
        </ul>
      </div>
    </div>,

    // Slide 4: Dicas importantes
    <div className="space-y-4">
      <h2 className="text-xl font-medium text-brand mb-3">
        Dicas importantes
      </h2>
      <div className="bg-yellow-50 p-4 rounded-lg">
        <ul className="list-disc pl-5 space-y-2">
          <li>Seja paciente e consistente</li>
          <li>Evite punições físicas</li>
          <li>Celebre pequenas conquistas</li>
          <li>Mantenha uma rotina previsível</li>
          <li>Respeite o tempo do seu cão</li>
        </ul>
      </div>
    </div>,

    // Slide 5: Resumo
    <div className="space-y-4">
      <h2 className="text-xl font-medium text-brand mb-3">
        Resumo
      </h2>
      <div className="bg-purple-50 p-4 rounded-lg">
        <p className="text-black/75">
          Um vínculo forte é construído com tempo, paciência e consistência.
          Quando você investe nesse relacionamento, cria uma base sólida para
          todo o processo de treinamento.
        </p>
      </div>
    </div>
  ];

  return (
    <LessonLayout
      moduleId="fundamentos"
      lessonId="vinculo"
      nextLessonRoute="/fundamentos/comunicacao"
    >
      <h1 className="text-2xl font-medium text-black/75 mb-6">
        Criando um Vínculo Forte
      </h1>

      <LessonCarousel 
        slides={slides} 
        moduleId="fundamentos"
        lessonId="vinculo"
      />
    </LessonLayout>
  );
} 