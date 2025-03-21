import React from "react";
import LessonLayout from "@/components/LessonLayout";

export default function ExerciciosMentais1() {
  return (
    <LessonLayout
      moduleId="exercicios-mentais"
      lessonId="jogos"
      nextLessonRoute="/exercicios-mentais/brincadeiras"
    >
      <h1 className="text-2xl font-medium text-black/75 mb-6">
        Jogos de Inteligência
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Por que é importante?
          </h2>
          <p className="text-black/75">
            Exercícios mentais são essenciais para manter seu cão saudável e
            feliz. Além de prevenir o tédio, eles ajudam a desenvolver
            habilidades cognitivas, melhoram a concentração e fortalecem o
            vínculo entre você e seu cão.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Tipos de jogos
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black/75">
            <li>
              Jogos de busca e esconde
            </li>
            <li>
              Brinquedos interativos com recompensas
            </li>
            <li>
              Quebra-cabeças para cães
            </li>
            <li>
              Jogos de memória
            </li>
            <li>
              Atividades de resolução de problemas
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Como implementar
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-black/75">
            <li>
              Comece com jogos simples
            </li>
            <li>
              Aumente a dificuldade gradualmente
            </li>
            <li>
              Use recompensas motivadoras
            </li>
            <li>
              Mantenha as sessões curtas e divertidas
            </li>
            <li>
              Adapte os jogos ao nível do seu cão
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Dicas importantes
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black/75">
            <li>
              Supervisione sempre as atividades
            </li>
            <li>
              Use brinquedos seguros e apropriados
            </li>
            <li>
              Mantenha o ambiente calmo e sem distrações
            </li>
            <li>
              Celebre as conquistas do seu cão
            </li>
            <li>
              Não force o cão a continuar se ele estiver cansado
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Resumo
          </h2>
          <p className="text-black/75">
            Jogos de inteligência são uma excelente forma de manter seu cão
            mentalmente ativo e feliz. Com paciência e criatividade, você pode
            criar diversas atividades divertidas que estimulam o desenvolvimento
            cognitivo do seu cão. Lembre-se de que o objetivo é tornar o
            aprendizado uma experiência positiva e agradável para ambos.
          </p>
        </section>
      </div>
    </LessonLayout>
  );
} 