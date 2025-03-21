import React from "react";
import LessonLayout from "@/components/LessonLayout";
import LessonCarousel from "@/components/LessonCarousel";
import { useProgress } from "@/hooks/useProgress";

export default function StartHere6() {
  const { completeLesson } = useProgress();

  const slides = [
    <div className="space-y-3">
      <h2 className="text-xl font-medium text-brand mb-2">
        Medindo o Progresso do Treinamento
      </h2>
      <div className="w-full h-48 bg-gray-100 rounded-2xl overflow-hidden mb-3 shadow-sm">
        <span className="text-gray-400">Imagem ilustrativa</span>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-black/75 text-sm">
          Acompanhar o progresso do treinamento é essencial para garantir que
          estamos no caminho certo e fazer ajustes quando necessário.
        </p>
      </div>
      <div className="bg-gray-50 p-3 rounded-lg">
        <h3 className="font-medium mb-2 text-sm">O que vamos aprender:</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Como registrar o progresso</li>
          <li>Marcadores de sucesso</li>
          <li>Ajustes necessários</li>
          <li>Dicas para sucesso</li>
        </ul>
      </div>
    </div>,
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-medium text-brand mb-3">
        Importância do Acompanhamento
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Identifica áreas que precisam de mais atenção</li>
        <li>Motiva a continuar o treinamento</li>
        <li>Ajuda a ajustar as expectativas</li>
        <li>Permite celebrar pequenas conquistas</li>
        <li>Facilita a identificação de problemas</li>
      </ul>
    </div>,
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-medium text-brand mb-3">
        Como Registrar o Progresso
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Use um diário de treinamento</li>
        <li>Faça vídeos das sessões</li>
        <li>Registre a taxa de sucesso dos comandos</li>
        <li>Anote comportamentos novos ou melhorados</li>
        <li>Documente desafios e soluções encontradas</li>
      </ul>
    </div>,
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-medium text-brand mb-3">
        Marcadores de Progresso
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Velocidade de resposta aos comandos</li>
        <li>Consistência do comportamento</li>
        <li>Nível de distração aceitável</li>
        <li>Confiança do cão</li>
        <li>Qualidade da execução</li>
      </ul>
    </div>,
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-medium text-brand mb-3">
        Dicas para Sucesso
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Seja consistente com o registro</li>
        <li>Celebre todas as conquistas</li>
        <li>Mantenha expectativas realistas</li>
        <li>Use os dados para tomar decisões</li>
        <li>Compartilhe o progresso com outros treinadores</li>
      </ul>
    </div>,
  ];

  return (
    <LessonLayout
      moduleId="comece-aqui"
      lessonId="progresso"
      nextLessonRoute={null}
      nextModuleRoute="/fundamentos"
      previousLessonRoute="/comece-aqui/erros"
      isFirstLesson={false}
      slides={slides}
    >
      <h1 className="text-2xl font-medium text-black/75 mb-6">
        Progresso e Recompensas
      </h1>
    </LessonLayout>
  );
} 