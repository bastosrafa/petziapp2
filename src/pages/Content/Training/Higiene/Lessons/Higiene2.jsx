import React from "react";
import LessonLayout from "@/components/LessonLayout";

export default function Higiene2() {
  return (
    <LessonLayout
      moduleId="higiene"
      lessonId="alimentacao"
      nextLessonRoute="/higiene/exercicios"
    >
      <h1 className="text-2xl font-medium text-black/75 mb-6">
        Rotina de Alimentação
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Por que é importante?
          </h2>
          <p className="text-black/75">
            Uma rotina de alimentação adequada é essencial para a saúde e
            bem-estar do seu cão, ajudando a prevenir problemas de peso e
            mantendo um metabolismo equilibrado.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Frequência ideal
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black/75">
            <li>
              Filhotes: 3-4 vezes ao dia
            </li>
            <li>
              Adultos: 2 vezes ao dia
            </li>
            <li>
              Idosos: 2-3 vezes ao dia
            </li>
            <li>
              Mantenha horários consistentes
            </li>
            <li>
              Ajuste conforme as necessidades do seu cão
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Como estabelecer
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-black/75">
            <li>
              Defina horários fixos para as refeições
            </li>
            <li>
              Escolha um local apropriado para alimentação
            </li>
            <li>
              Use tigelas adequadas ao tamanho do cão
            </li>
            <li>
              Mantenha água fresca sempre disponível
            </li>
            <li>
              Evite alimentar fora dos horários estabelecidos
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Dicas importantes
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black/75">
            <li>
              Escolha uma ração de qualidade
            </li>
            <li>
              Siga as quantidades recomendadas
            </li>
            <li>
              Evite dar restos de comida humana
            </li>
            <li>
              Monitore o peso do seu cão
            </li>
            <li>
              Consulte o veterinário para ajustes
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Resumo
          </h2>
          <p className="text-black/75">
            Uma rotina de alimentação bem estabelecida é fundamental para a
            saúde do seu cão. Com consistência e as escolhas adequadas, você
            pode garantir que seu cão receba a nutrição necessária para uma
            vida saudável.
          </p>
        </section>
      </div>
    </LessonLayout>
  );
} 