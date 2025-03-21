import React from "react";
import LessonLayout from "@/components/LessonLayout";

export default function ComportamentoEssencial2() {
  return (
    <LessonLayout
      moduleId="comportamento-essencial"
      lessonId="latidos"
      nextLessonRoute="/comportamento-essencial/passeio"
    >
      <h1 className="text-2xl font-medium text-black/75 mb-6">
        Controle de Latidos
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Por que é importante?
          </h2>
          <p className="text-black/75">
            O controle de latidos é essencial para uma convivência harmoniosa
            com vizinhos e para o bem-estar do seu cão, ajudando a prevenir
            problemas de comportamento.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Causas comuns
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black/75">
            <li>
              Ansiedade
            </li>
            <li>
              Tédio
            </li>
            <li>
              Territorialismo
            </li>
            <li>
              Falta de exercícios
            </li>
            <li>
              Medo ou insegurança
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Como controlar
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-black/75">
            <li>
              Identifique a causa dos latidos
            </li>
            <li>
              Use comandos para controlar
            </li>
            <li>
              Recompense o silêncio
            </li>
            <li>
              Mantenha o cão exercitado
            </li>
            <li>
              Considere enriquecimento ambiental
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Dicas importantes
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black/75">
            <li>
              Não grite com o cão
            </li>
            <li>
              Seja consistente no treinamento
            </li>
            <li>
              Mantenha o cão mentalmente estimulado
            </li>
            <li>
              Considere consultar um profissional
            </li>
            <li>
              Use técnicas de relaxamento
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Resumo
          </h2>
          <p className="text-black/75">
            O controle de latidos requer paciência e compreensão das causas.
            Com as técnicas adequadas e um ambiente propício, você pode ajudar
            seu cão a desenvolver um comportamento mais equilibrado.
          </p>
        </section>
      </div>
    </LessonLayout>
  );
} 