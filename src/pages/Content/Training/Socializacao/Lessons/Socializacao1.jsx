import React from "react";
import LessonLayout from "@/components/LessonLayout";

export default function Socializacao1() {
  return (
    <LessonLayout
      moduleId="socializacao"
      lessonId="outros-caes"
      nextLessonRoute="/socializacao/impulsos"
    >
      <h1 className="text-2xl font-medium text-black/75 mb-6">
        Socialização com Outros Cães
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Por que é importante?
          </h2>
          <p className="text-black/75">
            A socialização com outros cães é fundamental para o desenvolvimento
            social e emocional do seu cão, ajudando a prevenir problemas de
            comportamento e medos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Quando começar
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black/75">
            <li>
              Idealmente entre 3 e 16 semanas de idade
            </li>
            <li>
              Comece com cães calmos e amigáveis
            </li>
            <li>
              Mantenha as interações curtas e positivas
            </li>
            <li>
              Aumente gradualmente a complexidade
            </li>
            <li>
              Adapte ao ritmo do seu cão
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Como socializar
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-black/75">
            <li>
              Comece em ambientes controlados
            </li>
            <li>
              Use guia e coleira adequadas
            </li>
            <li>
              Mantenha distância segura inicialmente
            </li>
            <li>
              Observe os sinais de linguagem corporal
            </li>
            <li>
              Recompense comportamentos positivos
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Dicas importantes
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black/75">
            <li>
              Escolha parceiros de brincadeira adequados
            </li>
            <li>
              Mantenha as interações supervisionadas
            </li>
            <li>
              Respeite os limites do seu cão
            </li>
            <li>
              Use recompensas para reforçar comportamentos positivos
            </li>
            <li>
              Seja paciente e consistente
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Resumo
          </h2>
          <p className="text-black/75">
            A socialização com outros cães é um processo gradual que requer
            paciência e dedicação. Com as técnicas adequadas e um ambiente
            seguro, você pode ajudar seu cão a desenvolver habilidades sociais
            saudáveis.
          </p>
        </section>
      </div>
    </LessonLayout>
  );
} 