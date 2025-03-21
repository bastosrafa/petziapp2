import React from "react";
import LessonLayout from "@/components/LessonLayout";

export default function Higiene3() {
  return (
    <LessonLayout
      moduleId="higiene"
      lessonId="exercicios"
      nextModuleRoute="/maus-habitos"
    >
      <h1 className="text-2xl font-medium text-black/75 mb-6">
        Rotina de Exercícios
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Por que é importante?
          </h2>
          <p className="text-black/75">
            Uma rotina de exercícios regular é essencial para manter seu cão
            fisicamente e mentalmente saudável, ajudando a prevenir problemas
            de peso e comportamentos indesejados.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Tipos de exercícios
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black/75">
            <li>
              Passeios diários
            </li>
            <li>
              Brincadeiras interativas
            </li>
            <li>
              Jogos de busca
            </li>
            <li>
              Natação
            </li>
            <li>
              Exercícios mentais
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Como estabelecer
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-black/75">
            <li>
              Defina horários regulares para os exercícios
            </li>
            <li>
              Comece com atividades leves
            </li>
            <li>
              Aumente a intensidade gradualmente
            </li>
            <li>
              Varie as atividades para manter o interesse
            </li>
            <li>
              Adapte ao nível de energia do seu cão
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Dicas importantes
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black/75">
            <li>
              Considere a idade e condição física do cão
            </li>
            <li>
              Evite exercícios em horários muito quentes
            </li>
            <li>
              Mantenha água disponível durante as atividades
            </li>
            <li>
              Observe sinais de cansaço
            </li>
            <li>
              Mantenha as atividades divertidas
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Resumo
          </h2>
          <p className="text-black/75">
            Uma rotina de exercícios bem planejada é fundamental para a saúde
            e felicidade do seu cão. Com variedade e adaptação às necessidades
            do seu pet, você pode criar uma rotina que beneficia tanto a saúde
            física quanto mental do seu companheiro.
          </p>
        </section>
      </div>
    </LessonLayout>
  );
} 