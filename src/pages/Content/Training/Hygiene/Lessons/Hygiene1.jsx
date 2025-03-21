import React from "react";

export default function Hygiene1() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Banho sem Estresse</h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Por que ensinar?</h2>
        <p className="text-gray-700">
          Um banho tranquilo é essencial para a higiene do cão e para evitar problemas de saúde. Ensinar o cão a aceitar o banho de forma positiva evita estresse e torna a experiência agradável para todos.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Passo a Passo</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <ol className="list-decimal pl-5 space-y-2">
            <li>Acostume o cão com o ambiente do banho → Deixe-o explorar o local seco</li>
            <li>Introduza a água gradualmente → Comece com um pano úmido e evolua para o chuveiro</li>
            <li>Use água morna e produtos específicos para cães</li>
            <li>Recompense com petiscos e elogios durante o processo</li>
            <li>Termine com uma experiência positiva → Brincadeira ou carinho</li>
          </ol>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Dicas Importantes</h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Prepare todo o material antes de começar</li>
            <li>Mantenha a água em temperatura agradável</li>
            <li>Evite molhar o rosto do cão inicialmente</li>
            <li>Use produtos específicos para cães</li>
            <li>Seja paciente e mantenha a calma</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Material Necessário</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Para um Banho Seguro e Efetivo:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Shampoo específico para cães</li>
            <li>Toalhas secas e limpas</li>
            <li>Pente ou escova adequada</li>
            <li>Petiscos para recompensa</li>
            <li>Tapete antiderrapante</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Resumo Rápido</h2>
        <div className="bg-purple-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Acostume o cão gradualmente com o ambiente do banho</li>
            <li>Use água morna e produtos específicos para cães</li>
            <li>Recompense com petiscos e elogios durante o processo</li>
          </ul>
        </div>
      </section>
    </div>
  );
} 