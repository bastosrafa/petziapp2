import React from "react";
import LessonLayout from "@/components/LessonLayout";

export default function MausHabitos1() {
  return (
    <LessonLayout
      moduleId="maus-habitos"
      lessonId="morder"
      nextLessonRoute="/maus-habitos/latidos"
    >
      <h1 className="text-2xl font-medium text-black/75 mb-6">
        Morder e Roer
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Por que é importante?
          </h2>
          <p className="text-black/75">
            Morder e roer são comportamentos naturais dos cães, mas precisam ser
            controlados para evitar danos e garantir a segurança de todos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Causas comuns
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black/75">
            <li>
              Dentição em filhotes
            </li>
            <li>
              Tédio ou excesso de energia
            </li>
            <li>
              Ansiedade ou estresse
            </li>
            <li>
              Falta de exercícios
            </li>
            <li>
              Brinquedos inadequados
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Como corrigir
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-black/75">
            <li>
              Forneça brinquedos apropriados para morder
            </li>
            <li>
              Redirecione o comportamento para objetos permitidos
            </li>
            <li>
              Use comandos claros para interromper o comportamento
            </li>
            <li>
              Mantenha uma rotina de exercícios
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
              Nunca use punição física
            </li>
            <li>
              Mantenha objetos valiosos fora do alcance
            </li>
            <li>
              Supervisione o cão durante o treinamento
            </li>
            <li>
              Seja consistente nas correções
            </li>
            <li>
              Considere consultar um profissional se necessário
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Resumo
          </h2>
          <p className="text-black/75">
            Corrigir comportamentos de morder e roer requer paciência e
            consistência. Com as técnicas adequadas e um ambiente propício, você
            pode ajudar seu cão a desenvolver hábitos mais saudáveis e
            apropriados.
          </p>
        </section>
      </div>
    </LessonLayout>
  );
} 