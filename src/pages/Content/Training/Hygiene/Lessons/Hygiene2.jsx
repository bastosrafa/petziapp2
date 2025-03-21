import React from "react";

export default function Hygiene2() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Escovação de Dentes</h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Por que ensinar?</h2>
        <p className="text-gray-700">
          A escovação regular dos dentes é essencial para prevenir problemas bucais como tártaro, gengivite e mau hálito. Ensinar o cão a aceitar a escovação desde cedo garante uma saúde bucal adequada.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Passo a Passo</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <ol className="list-decimal pl-5 space-y-2">
            <li>Acostume o cão com o toque na boca → Comece com carinho no focinho</li>
            <li>Introduza o dedo com pasta de dente específica para cães</li>
            <li>Use uma escova de dentes macia e específica para cães</li>
            <li>Escove suavemente, começando pelos dentes da frente</li>
            <li>Recompense com petiscos e elogios após cada sessão</li>
          </ol>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Dicas Importantes</h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Use pasta de dente específica para cães (não use pasta humana)</li>
            <li>Escove com movimentos suaves e circulares</li>
            <li>Comece com sessões curtas e aumente gradualmente</li>
            <li>Escove pelo menos 3 vezes por semana</li>
            <li>Observe sinais de desconforto e ajuste a pressão</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Material Necessário</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Para uma Escovação Efetiva:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Escova de dentes específica para cães</li>
            <li>Pasta de dente específica para cães</li>
            <li>Petiscos para recompensa</li>
            <li>Toalha para limpar o excesso de pasta</li>
            <li>Ambiente calmo e tranquilo</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Resumo Rápido</h2>
        <div className="bg-purple-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Acostume o cão gradualmente com o toque na boca</li>
            <li>Use produtos específicos para cães</li>
            <li>Escove suavemente e recompense após cada sessão</li>
          </ul>
        </div>
      </section>
    </div>
  );
} 