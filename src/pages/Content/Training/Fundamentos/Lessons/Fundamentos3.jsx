import React from "react";
import LessonLayout from "@/components/LessonLayout";
import LessonCarousel from "@/components/LessonCarousel";
import heartImage from "@/assets/heart.png";
import { useProgress } from "@/hooks/useProgress";

export default function Fundamentos3() {
  const { completeLesson } = useProgress();

  const slides = [
    // Slide 1: O que são recompensas?
    <div className="space-y-3">
      <h2 className="text-xl font-medium text-brand mb-2">
        O que são recompensas?
      </h2>
      <div className="w-full h-48 bg-gray-100 rounded-2xl overflow-hidden mb-3 shadow-sm">
        <img 
          src={heartImage} 
          alt="Cão recebendo recompensa" 
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-black/75 text-sm">
        Recompensas são estímulos positivos que motivam seu cão a repetir 
        comportamentos desejados. Elas são essenciais para o treinamento 
        positivo e para criar uma experiência de aprendizado agradável.
      </p>
      <div className="bg-gray-50 p-3 rounded-lg mt-2">
        <h3 className="font-medium mb-2 text-sm">Tipos de recompensas:</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Petiscos</li>
          <li>Brinquedos</li>
          <li>Carinho e atenção</li>
          <li>Palavras de elogio</li>
        </ul>
      </div>
    </div>,

    // Slide 2: Tipos de recompensas
    <div className="space-y-4">
      <h2 className="text-xl font-medium text-brand mb-3">
        Tipos de recompensas
      </h2>
      <ul className="list-disc list-inside space-y-2 text-black/75">
        <li>Petiscos e alimentos</li>
        <li>Brincadeiras e jogos</li>
        <li>Carinho e atenção</li>
        <li>Palmadas e elogios verbais</li>
        <li>Liberdade para explorar</li>
      </ul>
    </div>,

    // Slide 3: Como usar recompensas
    <div className="space-y-4">
      <h2 className="text-xl font-medium text-brand mb-3">
        Como usar recompensas
      </h2>
      <ol className="list-decimal list-inside space-y-2 text-black/75">
        <li>Escolha recompensas que seu cão valoriza</li>
        <li>Dê a recompensa imediatamente após o comportamento desejado</li>
        <li>Seja consistente no uso das recompensas</li>
        <li>Varie os tipos de recompensas</li>
        <li>Use recompensas de forma gradual</li>
      </ol>
    </div>,

    // Slide 4: Dicas importantes
    <div className="space-y-4">
      <h2 className="text-xl font-medium text-brand mb-3">
        Dicas importantes
      </h2>
      <ul className="list-disc list-inside space-y-2 text-black/75">
        <li>Mantenha as recompensas pequenas e saudáveis</li>
        <li>Não use recompensas como suborno</li>
        <li>Observe o que motiva seu cão</li>
        <li>Seja criativo com as recompensas</li>
        <li>Mantenha o entusiasmo nas recompensas</li>
      </ul>
    </div>,

    // Slide 5: Resumo
    <div className="space-y-4">
      <h2 className="text-xl font-medium text-brand mb-3">
        Resumo
      </h2>
      <div className="bg-purple-50 p-4 rounded-lg">
        <p className="text-black/75">
          As recompensas são ferramentas poderosas no treinamento positivo. 
          Use-as de forma estratégica e consistente para motivar seu cão e 
          reforçar os comportamentos desejados.
        </p>
      </div>
    </div>
  ];

  return (
    <LessonLayout
      moduleId="fundamentos"
      lessonId="recompensas"
      nextLessonRoute={null}
      nextModuleRoute="/comportamento-essencial"
      previousLessonRoute="/fundamentos/linguagem"
      isFirstLesson={false}
    >
      <h1 className="text-2xl font-medium text-black/75 mb-6">
        Recompensas no Treinamento
      </h1>

      <LessonCarousel 
        slides={slides} 
        moduleId="fundamentos"
        lessonId="recompensas"
      />
    </LessonLayout>
  );
} 