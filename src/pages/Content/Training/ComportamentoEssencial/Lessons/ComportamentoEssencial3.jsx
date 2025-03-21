import React from "react";
import LessonLayout from "@/components/LessonLayout";

export default function ComportamentoEssencial3() {
  return (
    <LessonLayout
      moduleId="comportamento-essencial"
      lessonId="passeio"
      nextModuleRoute="/socializacao"
    >
      <h1 className="text-2xl font-medium text-black/75 mb-6">
        Passeio na Rua
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Por que é importante?
          </h2>
          <p className="text-black/75">
            O passeio na rua é essencial para a saúde física e mental do seu
            cão, proporcionando exercícios, socialização e estímulos mentais
            importantes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Preparação necessária
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black/75">
            <li>
              Coleira e guia adequadas
            </li>
            <li>
              Identificação atualizada
            </li>
            <li>
              Vacinas em dia
            </li>
            <li>
              Sacos para recolher fezes
            </li>
            <li>
              Garrafa de água
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Como treinar
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-black/75">
            <li>
              Comece com caminhadas curtas
            </li>
            <li>
              Use comandos básicos durante o passeio
            </li>
            <li>
              Mantenha o cão ao seu lado
            </li>
            <li>
              Recompense comportamentos positivos
            </li>
            <li>
              Aumente gradualmente a duração
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Dicas importantes
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black/75">
            <li>
              Escolha horários adequados
            </li>
            <li>
              Evite temperaturas extremas
            </li>
            <li>
              Mantenha o cão hidratado
            </li>
            <li>
              Observe sinais de cansaço
            </li>
            <li>
              Mantenha o passeio divertido
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Resumo
          </h2>
          <p className="text-black/75">
            O passeio na rua é uma atividade essencial para o bem-estar do seu
            cão. Com preparação adequada e treinamento consistente, você pode
            criar momentos agradáveis e seguros para ambos.
          </p>
        </section>
      </div>
    </LessonLayout>
  );
} 