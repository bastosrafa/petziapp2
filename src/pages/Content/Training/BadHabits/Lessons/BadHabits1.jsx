import React from "react";

export default function BadHabits1() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Morder Objetos</h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Por que corrigir?</h2>
        <p className="text-gray-700">
          Morder objetos pode ser perigoso para o cão e causar prejuízos materiais. Este comportamento geralmente ocorre por tédio, ansiedade ou necessidade de exercitar a mandíbula. Aprender a redirecionar este comportamento é essencial.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Passo a Passo</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <ol className="list-decimal pl-5 space-y-2">
            <li>Identifique os objetos que o cão costuma morder</li>
            <li>Remova ou proteja esses objetos do alcance do cão</li>
            <li>Ofereça brinquedos apropriados para morder</li>
            <li>Recompense quando o cão morder os brinquedos corretos</li>
            <li>Mantenha o cão mentalmente e fisicamente ativo</li>
          </ol>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Dicas Importantes</h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Não use punição física</li>
            <li>Mantenha brinquedos interessantes sempre disponíveis</li>
            <li>Faça rotação dos brinquedos para manter o interesse</li>
            <li>Exercite o cão regularmente</li>
            <li>Use brinquedos interativos para estimulação mental</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Brinquedos Recomendados</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Para Redirecionar o Comportamento:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Brinquedos de borracha resistente</li>
            <li>Ossos naturais ou sintéticos</li>
            <li>Brinquedos interativos com petiscos</li>
            <li>Cordas para puxar</li>
            <li>Brinquedos que fazem barulho</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Resumo Rápido</h2>
        <div className="bg-purple-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Remova objetos que o cão costuma morder</li>
            <li>Ofereça brinquedos apropriados</li>
            <li>Mantenha o cão ativo e estimulado</li>
          </ul>
        </div>
      </section>
    </div>
  );
} 