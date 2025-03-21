import React from "react";

export default function PublicBehavior4() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Ir ao Pet Shop</h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Por que ensinar?</h2>
        <p className="text-gray-700">
          Visitas ao pet shop são necessárias para a saúde e bem-estar do cão, mas podem ser estressantes se o cão não estiver preparado. Aprender a se comportar adequadamente no pet shop torna a experiência mais agradável para todos.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Passo a Passo</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <ol className="list-decimal pl-5 space-y-2">
            <li>Acostume o cão a diferentes texturas e superfícies</li>
            <li>Treine comandos básicos em ambiente com distrações</li>
            <li>Visite o pet shop em horários menos movimentados</li>
            <li>Recompense comportamentos calmos e obedientes</li>
            <li>Aumente gradualmente o tempo de permanência</li>
          </ol>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Dicas Importantes</h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Use guia curta e coleira adequada</li>
            <li>Mantenha o cão próximo a você</li>
            <li>Use petiscos para recompensar comportamentos positivos</li>
            <li>Observe os sinais de estresse do cão</li>
            <li>Seja paciente e consistente no treinamento</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Preparação</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Antes da Visita:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Exercite o cão antes da visita</li>
            <li>Leve petiscos e brinquedos favoritos</li>
            <li>Use equipamento de segurança adequado</li>
            <li>Prepare uma lista do que precisa comprar</li>
            <li>Escolha horários menos movimentados</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Resumo Rápido</h2>
        <div className="bg-purple-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Acostume o cão a diferentes ambientes</li>
            <li>Use equipamento de segurança adequado</li>
            <li>Recompense comportamentos positivos</li>
          </ul>
        </div>
      </section>
    </div>
  );
} 