import React from "react";
import LessonLayout from "@/components/LessonLayout";

export default function MausHabitos2() {
  return (
    <LessonLayout
      moduleId="maus-habitos"
      lessonId="latidos"
      nextLessonRoute="/maus-habitos/pular"
    >
      <h1 className="text-2xl font-medium text-black/75 mb-6">
        Latidos Excessivos
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Por que é importante?
          </h2>
          <p className="text-black/75">
            Latidos excessivos podem causar problemas com vizinhos e indicar
            desconforto ou ansiedade no cão. É importante entender e controlar
            esse comportamento.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Causas comuns
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black/75">
            <li>
              Ansiedade de separação
            </li>
            <li>
              Tédio ou falta de exercícios
            </li>
            <li>
              Territorialismo
            </li>
            <li>
              Medo ou insegurança
            </li>
            <li>
              Falta de socialização
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
              Use comandos para controlar os latidos
            </li>
            <li>
              Recompense o silêncio
            </li>
            <li>
              Mantenha uma rotina de exercícios
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
            Controlar latidos excessivos requer paciência e compreensão das
            causas. Com as técnicas adequadas e um ambiente propício, você pode
            ajudar seu cão a desenvolver um comportamento mais equilibrado.
          </p>
        </section>
      </div>
    </LessonLayout>
  );
} 