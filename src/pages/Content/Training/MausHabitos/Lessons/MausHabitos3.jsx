import React from "react";
import LessonLayout from "@/components/LessonLayout";

export default function MausHabitos3() {
  return (
    <LessonLayout
      moduleId="maus-habitos"
      lessonId="pular"
      nextModuleRoute="/exercicios-mentais"
    >
      <h1 className="text-2xl font-medium text-black/75 mb-6">
        Pular em Pessoas
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Por que é importante?
          </h2>
          <p className="text-black/75">
            Pular em pessoas pode ser perigoso e desconfortável, especialmente
            para crianças e idosos. É importante ensinar o cão a cumprimentar
            as pessoas de forma apropriada.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Causas comuns
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black/75">
            <li>
              Excitação ao ver pessoas
            </li>
            <li>
              Falta de treinamento
            </li>
            <li>
              Reforço acidental do comportamento
            </li>
            <li>
              Excesso de energia
            </li>
            <li>
              Falta de exercícios
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Como corrigir
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-black/75">
            <li>
              Ignore o comportamento de pular
            </li>
            <li>
              Recompense quando o cão estiver com as patas no chão
            </li>
            <li>
              Use comandos para sentar antes de cumprimentar
            </li>
            <li>
              Mantenha uma rotina de exercícios
            </li>
            <li>
              Seja consistente com todos os membros da família
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Dicas importantes
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black/75">
            <li>
              Não recompense o comportamento de pular
            </li>
            <li>
              Mantenha as patas do cão no chão durante cumprimentos
            </li>
            <li>
              Use recompensas para comportamentos positivos
            </li>
            <li>
              Seja paciente e consistente
            </li>
            <li>
              Pratique com diferentes pessoas
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Resumo
          </h2>
          <p className="text-black/75">
            Corrigir o comportamento de pular em pessoas requer paciência e
            consistência. Com as técnicas adequadas e um treinamento positivo,
            você pode ajudar seu cão a desenvolver maneiras mais apropriadas de
            interagir com as pessoas.
          </p>
        </section>
      </div>
    </LessonLayout>
  );
} 