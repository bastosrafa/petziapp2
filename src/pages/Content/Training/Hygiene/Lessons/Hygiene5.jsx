import React from "react";

export default function Hygiene5() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Rotina de Alimentação</h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Por que ensinar?</h2>
        <p className="text-gray-700">
          Uma rotina alimentar adequada é essencial para a saúde do cão. Horários regulares de alimentação ajudam a prevenir problemas digestivos, obesidade e comportamentos indesejados relacionados à comida.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Passo a Passo</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <ol className="list-decimal pl-5 space-y-2">
            <li>Defina horários fixos para as refeições</li>
            <li>Escolha um local específico para alimentação</li>
            <li>Use um comedouro adequado ao tamanho do cão</li>
            <li>Sirva a quantidade correta de ração</li>
            <li>Mantenha água fresca sempre disponível</li>
          </ol>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Dicas Importantes</h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Respeite os horários estabelecidos</li>
            <li>Use ração de qualidade adequada à idade e porte do cão</li>
            <li>Evite dar comida da mesa</li>
            <li>Mantenha o local de alimentação limpo</li>
            <li>Observe o apetite e comportamento do cão</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Material Necessário</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Para uma Alimentação Adequada:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Comedouro adequado ao tamanho do cão</li>
            <li>Bebedouro com água fresca</li>
            <li>Ração de qualidade</li>
            <li>Local limpo e tranquilo</li>
            <li>Medidor de ração</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Resumo Rápido</h2>
        <div className="bg-purple-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Mantenha horários fixos para as refeições</li>
            <li>Use um local específico para alimentação</li>
            <li>Sirva a quantidade correta de ração</li>
          </ul>
        </div>
      </section>
    </div>
  );
} 