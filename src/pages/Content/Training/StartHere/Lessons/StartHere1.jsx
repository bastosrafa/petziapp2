import React from "react";
import LessonLayout from "@/components/LessonLayout";
import LessonCarousel from "@/components/LessonCarousel";
import { useProgress } from "@/hooks/useProgress";

export default function StartHere1() {
  const { completeLesson } = useProgress();

  const slides = [
    // Slide 1: Reforço Positivo vs. Negativo
    <div className="space-y-3">
      <h2 className="text-xl font-medium text-brand mb-2">
        Reforço Positivo vs. Negativo
      </h2>
      <div className="w-full h-48 bg-gray-100 rounded-2xl overflow-hidden mb-3 shadow-sm">
        <img 
          src="https://placehold.co/600x400/FF6B6B/FFFFFF/png?text=Reforço+Positivo" 
          alt="Cão recebendo carinho como recompensa" 
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-black/75 text-sm">
        Os cães aprendem através de associação e repetição. O reforço positivo
        (dar petiscos, carinho ou elogios quando fazem algo certo) é a forma
        mais eficaz.
      </p>
      <div className="bg-gray-50 p-3 rounded-lg mt-2">
        <h3 className="font-medium mb-2 text-sm">Por que o reforço positivo é melhor?</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>É mais eficaz a longo prazo</li>
          <li>Cria uma relação positiva entre cão e treinador</li>
          <li>Aumenta a confiança do cão</li>
          <li>Reduz o estresse durante o treinamento</li>
        </ul>
      </div>
    </div>,

    // Slide 2: Por que o Reforço Positivo é Melhor
    <div className="space-y-4">
      <h2 className="text-xl font-medium text-brand mb-3">
        Por que o Reforço Positivo é Melhor?
      </h2>
      <div className="bg-green-50 p-4 rounded-lg">
        <ul className="list-disc pl-5 space-y-2">
          <li>Fortalece o vínculo entre você e seu cão</li>
          <li>Torna o aprendizado mais divertido e prazeroso</li>
          <li>Evita problemas de comportamento causados pelo medo</li>
          <li>É mais ético e respeita o bem-estar do animal</li>
          <li>Funciona com cães de todas as idades e temperamentos</li>
        </ul>
      </div>
      <div className="bg-yellow-50 p-4 rounded-lg mt-4">
        <h3 className="font-medium mb-2">O que evitar:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Castigos físicos</li>
          <li>Gritos e ameaças</li>
          <li>Coleiras de choque ou estrangulamento</li>
          <li>Métodos que causam dor ou medo</li>
        </ul>
      </div>
    </div>,

    // Slide 3: Exercício Prático
    <div className="space-y-4">
      <h2 className="text-xl font-medium text-brand mb-3">
        Exercício Prático
      </h2>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-medium mb-2">Passo a Passo:</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Pegue um petisco e segure na mão</li>
          <li>Quando o cão olhar para você ou sentar espontaneamente, recompense imediatamente</li>
          <li>Repita 5 a 10 vezes para ensinar que prestar atenção no tutor traz benefícios</li>
          <li>Observe o comportamento do seu cão e ajuste o ritmo conforme necessário</li>
          <li>Termine a sessão com um sucesso</li>
        </ol>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg mt-4">
        <h3 className="font-medium mb-2">Dicas para o exercício:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Escolha um local calmo e sem distrações</li>
          <li>Use petiscos que seu cão adora</li>
          <li>Mantenha as sessões curtas (5-10 minutos)</li>
          <li>Seja paciente e positivo</li>
        </ul>
      </div>
    </div>,

    // Slide 4: Dicas Importantes
    <div className="space-y-4">
      <h2 className="text-xl font-medium text-brand mb-3">
        Dicas Importantes
      </h2>
      <div className="bg-yellow-50 p-4 rounded-lg">
        <ul className="list-disc pl-5 space-y-2">
          <li>Seja consistente com as recompensas</li>
          <li>Use petiscos de alto valor para o cão</li>
          <li>Mantenha as sessões curtas e divertidas</li>
          <li>Observe os sinais de estresse do seu cão</li>
          <li>Termine sempre com uma nota positiva</li>
        </ul>
      </div>
      <div className="bg-orange-50 p-4 rounded-lg mt-4">
        <h3 className="font-medium mb-2">Sinais de estresse para observar:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Bocejar excessivamente</li>
          <li>Lamber os lábios</li>
          <li>Desviar o olhar</li>
          <li>Ficar inquieto</li>
          <li>Respirar ofegante sem exercício</li>
        </ul>
      </div>
    </div>
  ];

  return (
    <LessonLayout
      moduleId="comece-aqui"
      lessonId="introducao"
      nextLessonRoute="/comece-aqui/comunicacao"
      isFirstLesson={true}
      slides={slides}
    >
      <h1 className="text-2xl font-medium text-black/75 mb-6">
        Introdução ao Treinamento
      </h1>
    </LessonLayout>
  );
}
