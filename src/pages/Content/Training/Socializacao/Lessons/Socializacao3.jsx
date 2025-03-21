import React from "react";
import LessonLayout from "@/components/LessonLayout";

export default function Socializacao3() {
  return (
    <LessonLayout
      moduleId="socializacao"
      lessonId="pessoas"
      nextModuleRoute="/higiene"
    >
      <h1 className="text-2xl font-medium text-black/75 mb-6">
        Interação com Pessoas
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Por que é importante?
          </h2>
          <p className="text-black/75">
            A interação adequada com pessoas é fundamental para o desenvolvimento
            social do seu cão, ajudando a criar um cão confiante e bem-comportado
            em sociedade.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Tipos de interação
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black/75">
            <li>
              Com membros da família
            </li>
            <li>
              Com visitantes
            </li>
            <li>
              Com estranhos
            </li>
            <li>
              Com crianças
            </li>
            <li>
              Com profissionais (veterinários, tosadores)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Como treinar
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-black/75">
            <li>
              Comece com pessoas familiares
            </li>
            <li>
              Use comandos claros
            </li>
            <li>
              Recompense comportamentos positivos
            </li>
            <li>
              Exponha gradualmente a diferentes pessoas
            </li>
            <li>
              Pratique em diferentes ambientes
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Dicas importantes
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black/75">
            <li>
              Respeite o espaço do seu cão
            </li>
            <li>
              Ensine as pessoas a interagirem corretamente
            </li>
            <li>
              Mantenha as interações positivas
            </li>
            <li>
              Observe sinais de desconforto
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
            A socialização com pessoas é um processo contínuo que requer
            dedicação e paciência. Com as técnicas adequadas e um treinamento
            adaptado à personalidade do seu cão, você pode ajudar a desenvolver
            interações sociais saudáveis e positivas.
          </p>
        </section>
      </div>
    </LessonLayout>
  );
} 