import React from "react";
import LessonLayout from "@/components/LessonLayout";

export default function ComportamentoEssencial1() {
  return (
    <LessonLayout
      moduleId="comportamento-essencial"
      lessonId="comandos"
      nextLessonRoute="/comportamento-essencial/latidos"
    >
      <h1 className="text-2xl font-medium text-black/75 mb-6">
        Comandos Básicos
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Por que é importante?
          </h2>
          <p className="text-black/75">
            Os comandos básicos são fundamentais para a comunicação e controle
            do seu cão, ajudando a prevenir situações perigosas e melhorando
            a convivência diária.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Comandos essenciais
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black/75">
            <li>
              Senta
            </li>
            <li>
              Deita
            </li>
            <li>
              Fica
            </li>
            <li>
              Vem
            </li>
            <li>
              Junto
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Como treinar
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-black/75">
            <li>
              Comece com um comando por vez
            </li>
            <li>
              Use recompensas motivadoras
            </li>
            <li>
              Seja consistente com os comandos
            </li>
            <li>
              Pratique em diferentes ambientes
            </li>
            <li>
              Aumente gradualmente a dificuldade
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Dicas importantes
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black/75">
            <li>
              Mantenha as sessões curtas e divertidas
            </li>
            <li>
              Use reforço positivo
            </li>
            <li>
              Seja paciente e consistente
            </li>
            <li>
              Pratique regularmente
            </li>
            <li>
              Adapte ao ritmo do seu cão
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Resumo
          </h2>
          <p className="text-black/75">
            Os comandos básicos são essenciais para uma convivência harmoniosa
            com seu cão. Com paciência e treinamento consistente, você pode
            desenvolver uma comunicação clara e efetiva com seu companheiro.
          </p>
        </section>
      </div>
    </LessonLayout>
  );
} 