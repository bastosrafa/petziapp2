import React from "react";

export default function MentalExercises2() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Brincadeiras Interativas</h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Por que ensinar?</h2>
        <p className="text-gray-700">
          Brincadeiras interativas fortalecem o vínculo entre o cão e o tutor, além de promover o desenvolvimento físico e mental. Essas atividades ajudam a manter o cão ativo, feliz e socialmente engajado.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Passo a Passo</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <ol className="list-decimal pl-5 space-y-2">
            <li>Escolha brincadeiras adequadas ao tamanho e energia do cão</li>
            <li>Comece com brincadeiras simples e aumente a complexidade</li>
            <li>Use brinquedos seguros e apropriados</li>
            <li>Mantenha a brincadeira divertida e positiva</li>
            <li>Faça pausas regulares para descanso</li>
          </ol>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Dicas Importantes</h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Observe os sinais de cansaço do cão</li>
            <li>Mantenha as brincadeiras seguras</li>
            <li>Use reforço positivo</li>
            <li>Respeite o ritmo do cão</li>
            <li>Varie as brincadeiras para manter o interesse</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Brincadeiras Sugeridas</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Para Interação e Diversão:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Jogo de cabo de guerra</li>
            <li>Busca e traga</li>
            <li>Esconde-esconde</li>
            <li>Pegar bolhas de sabão</li>
            <li>Jogo de pista com petiscos</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Resumo Rápido</h2>
        <div className="bg-purple-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Escolha brincadeiras adequadas ao cão</li>
            <li>Mantenha as atividades seguras</li>
            <li>Faça pausas regulares</li>
          </ul>
        </div>
      </section>
    </div>
  );
} 