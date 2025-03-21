import React from "react";
import LessonLayout from "@/components/LessonLayout";

export default function Higiene1() {
  return (
    <LessonLayout
      moduleId="higiene"
      lessonId="banho"
      nextLessonRoute="/higiene/alimentacao"
    >
      <h1 className="text-2xl font-medium text-black/75 mb-6">
        Banho e Escovação
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Por que é importante?
          </h2>
          <p className="text-black/75">
            A higiene regular é essencial para manter a saúde e o bem-estar do
            seu cão, prevenindo problemas de pele e mantendo o pelo bonito e
            saudável.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Frequência ideal
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black/75">
            <li>
              Banho: a cada 2-3 meses (ou conforme necessário)
            </li>
            <li>
              Escovação: 2-3 vezes por semana
            </li>
            <li>
              Limpeza de orelhas: semanalmente
            </li>
            <li>
              Corte de unhas: mensalmente
            </li>
            <li>
              Limpeza dos dentes: diariamente
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Como fazer
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-black/75">
            <li>
              Prepare o ambiente e os materiais necessários
            </li>
            <li>
              Escove o pelo antes do banho
            </li>
            <li>
              Use água morna e produtos específicos para cães
            </li>
            <li>
              Enxague bem para remover todo o shampoo
            </li>
            <li>
              Seque completamente com toalha e secador
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Dicas importantes
          </h2>
          <ul className="list-disc list-inside space-y-2 text-black/75">
            <li>
              Use produtos específicos para cães
            </li>
            <li>
              Mantenha a água em temperatura agradável
            </li>
            <li>
              Evite água nos ouvidos
            </li>
            <li>
              Seja gentil e paciente durante o processo
            </li>
            <li>
              Recompense o cão após a higiene
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-brand mb-3">
            Resumo
          </h2>
          <p className="text-black/75">
            A higiene regular é uma parte importante dos cuidados com seu cão.
            Com paciência e as técnicas adequadas, você pode tornar esse momento
            uma experiência positiva para ambos.
          </p>
        </section>
      </div>
    </LessonLayout>
  );
} 