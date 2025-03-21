import React from "react";

export default function Hygiene3() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Corte de Unhas</h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Por que ensinar?</h2>
        <p className="text-gray-700">
          O corte regular das unhas é importante para evitar problemas como unhas quebradas, dor ao caminhar e danos ao piso. Ensinar o cão a aceitar o corte de unhas desde cedo evita estresse e possíveis acidentes.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Passo a Passo</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <ol className="list-decimal pl-5 space-y-2">
            <li>Acostume o cão com o toque nas patas → Comece com carinho e massagem</li>
            <li>Apresente o cortador de unhas sem cortar → Deixe o cão cheirar e explorar</li>
            <li>Comece cortando uma unha por vez → Recompense após cada corte</li>
            <li>Aumente gradualmente o número de unhas cortadas por sessão</li>
            <li>Mantenha a calma e seja paciente durante todo o processo</li>
          </ol>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Dicas Importantes</h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Use um cortador de unhas específico para cães</li>
            <li>Evite cortar muito próximo à polpa (parte sensível)</li>
            <li>Tenha um produto estancante de sangue por perto</li>
            <li>Corte em um ambiente bem iluminado</li>
            <li>Seja paciente e não force o cão</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Material Necessário</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Para um Corte Seguro:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Cortador de unhas específico para cães</li>
            <li>Produto estancante de sangue</li>
            <li>Petiscos para recompensa</li>
            <li>Toalha para limpar as unhas</li>
            <li>Ambiente bem iluminado e tranquilo</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Resumo Rápido</h2>
        <div className="bg-purple-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Acostume o cão gradualmente com o toque nas patas</li>
            <li>Use um cortador específico para cães</li>
            <li>Corte uma unha por vez e recompense após cada corte</li>
          </ul>
        </div>
      </section>
    </div>
  );
} 