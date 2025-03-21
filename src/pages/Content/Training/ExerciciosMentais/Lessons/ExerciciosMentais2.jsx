import React from "react";
import LessonLayout from "@/components/LessonLayout";

export default function ExerciciosMentais2() {
  return (
    <LessonLayout
      moduleId="exercicios-mentais"
      lessonId="brincadeiras"
      nextLessonRoute="/exercicios-mentais/ambiente"
    >
      <h1 className="text-2xl font-medium text-black/75 mb-6">
        Brincadeiras Interativas
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Por que é importante?
          </h2>
          <p className="text-black/75">
            Brincadeiras interativas são fundamentais para fortalecer o vínculo
            entre você e seu cão, além de proporcionar exercícios físicos e
            mentais essenciais para o bem-estar do animal.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Tipos de brincadeiras
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black/75">
            <li>
              Jogos de busca
            </li>
            <li>
              Cabo de guerra
            </li>
            <li>
              Esconde-esconde
            </li>
            <li>
              Brincadeiras com bolinhas
            </li>
            <li>
              Jogos de agilidade
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Como implementar
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-black/75">
            <li>
              Escolha brinquedos seguros e apropriados
            </li>
            <li>
              Estabeleça regras claras para as brincadeiras
            </li>
            <li>
              Mantenha as sessões curtas e divertidas
            </li>
            <li>
              Use recompensas para reforçar comportamentos positivos
            </li>
            <li>
              Adapte as brincadeiras ao nível de energia do seu cão
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Dicas importantes
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black/75">
            <li>
              Supervisione sempre as brincadeiras
            </li>
            <li>
              Evite brincadeiras muito intensas antes de dormir
            </li>
            <li>
              Mantenha o ambiente seguro e livre de obstáculos
            </li>
            <li>
              Respeite os limites do seu cão
            </li>
            <li>
              Mantenha as brincadeiras positivas e divertidas
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Resumo
          </h2>
          <p className="text-black/75">
            Brincadeiras interativas são uma excelente forma de manter seu cão
            ativo e feliz. Com paciência e criatividade, você pode criar
            diversas atividades divertidas que fortalecem o vínculo entre você
            e seu cão. Lembre-se de que o objetivo é tornar o momento de
            brincadeira uma experiência positiva e agradável para ambos.
          </p>
        </section>
      </div>
    </LessonLayout>
  );
} 