import React from "react";
import LessonLayout from "@/components/LessonLayout";

export default function Socializacao2() {
  return (
    <LessonLayout
      moduleId="socializacao"
      lessonId="impulsos"
      nextLessonRoute="/socializacao/pessoas"
    >
      <h1 className="text-2xl font-medium text-black/75 mb-6">
        Controle de Impulsos
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Por que é importante?
          </h2>
          <p className="text-black/75">
            O controle de impulsos é essencial para a segurança e bem-estar do
            seu cão, ajudando a prevenir comportamentos indesejados e
            situações perigosas.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Exercícios básicos
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black/75">
            <li>
              Esperar antes de comer
            </li>
            <li>
              Não pular em pessoas
            </li>
            <li>
              Controle na porta
            </li>
            <li>
              Esperar antes de sair
            </li>
            <li>
              Controle com brinquedos
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Como treinar
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-black/75">
            <li>
              Comece com exercícios simples
            </li>
            <li>
              Use comandos claros e consistentes
            </li>
            <li>
              Aumente a dificuldade gradualmente
            </li>
            <li>
              Recompense comportamentos positivos
            </li>
            <li>
              Pratique regularmente
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Dicas importantes
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black/75">
            <li>
              Seja consistente no treinamento
            </li>
            <li>
              Use recompensas motivadoras
            </li>
            <li>
              Mantenha as sessões curtas
            </li>
            <li>
              Evite frustrar o cão
            </li>
            <li>
              Pratique em diferentes situações
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Resumo
          </h2>
          <p className="text-black/75">
            O controle de impulsos pode ser desenvolvido através de treinamento
            consistente e positivo. Com paciência e as técnicas adequadas, você
            pode ajudar seu cão a desenvolver autocontrole e comportamentos
            mais desejáveis.
          </p>
        </section>
      </div>
    </LessonLayout>
  );
} 