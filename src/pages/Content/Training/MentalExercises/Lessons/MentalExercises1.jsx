import React from "react";

export default function MentalExercises1() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Jogos de Inteligência</h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Por que ensinar?</h2>
        <p className="text-gray-700">
          Jogos de inteligência são essenciais para manter o cão mentalmente ativo e estimulado. Além de prevenir o tédio, esses jogos ajudam a desenvolver o raciocínio, a memória e a capacidade de resolução de problemas do cão.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Passo a Passo</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <ol className="list-decimal pl-5 space-y-2">
            <li>Comece com jogos simples e aumente a complexidade gradualmente</li>
            <li>Use petiscos como recompensa para motivar o cão</li>
            <li>Demonstre o jogo antes de pedir que o cão participe</li>
            <li>Recompense pequenos progressos</li>
            <li>Mantenha as sessões curtas e divertidas</li>
          </ol>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Dicas Importantes</h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Escolha jogos adequados à idade e capacidade do cão</li>
            <li>Mantenha o ambiente calmo e sem distrações</li>
            <li>Use reforço positivo para encorajar o cão</li>
            <li>Observe os sinais de frustração</li>
            <li>Faça pausas quando necessário</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Jogos Sugeridos</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Para Desenvolver a Inteligência:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Esconde-esconde com petiscos</li>
            <li>Jogo de copos (esconder petisco)</li>
            <li>Puzzle com petiscos</li>
            <li>Jogo de memória com objetos</li>
            <li>Labirinto caseiro</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Resumo Rápido</h2>
        <div className="bg-purple-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Comece com jogos simples</li>
            <li>Use petiscos como recompensa</li>
            <li>Mantenha as sessões divertidas</li>
          </ul>
        </div>
      </section>
    </div>
  );
} 