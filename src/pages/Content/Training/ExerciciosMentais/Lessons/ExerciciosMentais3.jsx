import React from "react";
import LessonLayout from "@/components/LessonLayout";

export default function ExerciciosMentais3() {
  return (
    <LessonLayout
      moduleId="exercicios-mentais"
      lessonId="ambiente"
      nextModuleRoute="/socializacao"
    >
      <h1 className="text-2xl font-medium text-black/75 mb-6">
        Enriquecimento Ambiental
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Por que é importante?
          </h2>
          <p className="text-black/75">
            O enriquecimento ambiental é fundamental para manter seu cão
            mentalmente estimulado e fisicamente ativo, prevenindo o tédio e
            comportamentos indesejados.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Tipos de enriquecimento
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black/75">
            <li>
              Brinquedos interativos
            </li>
            <li>
              Jogos de busca
            </li>
            <li>
              Quebra-cabeças
            </li>
            <li>
              Brinquedos de morder
            </li>
            <li>
              Brinquedos de recompensa
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Como implementar
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-black/75">
            <li>
              Escolha brinquedos apropriados para a idade e tamanho do seu cão
            </li>
            <li>
              Rotacione os brinquedos para manter o interesse
            </li>
            <li>
              Crie áreas de brincadeira seguras
            </li>
            <li>
              Use recompensas para motivar o uso dos brinquedos
            </li>
            <li>
              Supervisione o uso dos brinquedos
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Dicas importantes
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black/75">
            <li>
              Mantenha os brinquedos limpos e em bom estado
            </li>
            <li>
              Evite brinquedos que possam ser engolidos
            </li>
            <li>
              Adapte o ambiente às necessidades do seu cão
            </li>
            <li>
              Mantenha o ambiente seguro e livre de perigos
            </li>
            <li>
              Observe o comportamento do seu cão com os brinquedos
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Resumo
          </h2>
          <p className="text-black/75">
            O enriquecimento ambiental é uma excelente forma de manter seu cão
            ativo e feliz. Com paciência e criatividade, você pode criar um
            ambiente estimulante que contribui para o bem-estar físico e mental
            do seu cão. Lembre-se de que o objetivo é tornar o ambiente
            divertido e seguro para seu companheiro.
          </p>
        </section>
      </div>
    </LessonLayout>
  );
} 