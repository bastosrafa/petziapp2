import React from "react";

export default function DailyBehavior2() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Deitar (ajuda a manter o pet calmo em situações de espera)</h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Por que ensinar?</h2>
        <p className="text-gray-700">
          O comando "Deita" é ótimo para situações em que o cão precisa ficar mais calmo e relaxado, como no veterinário, durante refeições ou antes de dormir.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Passo a Passo</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <ol className="list-decimal pl-5 space-y-2">
            <li>Com o cão sentado, segure um petisco perto do focinho dele</li>
            <li>Arraste o petisco no chão lentamente para frente, guiando o cão para a posição deitada</li>
            <li>Assim que o cão deitar completamente, diga "Deita!" e entregue o petisco</li>
            <li>Repita o exercício várias vezes ao dia até que o cão obedeça sem precisar do petisco</li>
          </ol>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Dicas Importantes</h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Use o petisco para guiar o cão até o chão</li>
            <li>Diga "Deita" no momento certo para criar a associação correta</li>
            <li>Reforce com elogios sempre que o cão obedecer</li>
            <li>Pratique em diferentes superfícies e ambientes</li>
            <li>Mantenha as sessões curtas e positivas</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Situações de Uso</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Quando usar o comando "Deita":</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Durante consultas veterinárias</li>
            <li>Em restaurantes ou cafés pet-friendly</li>
            <li>Durante refeições da família</li>
            <li>Em situações que exigem calma</li>
            <li>Antes de dormir</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Resumo Rápido</h2>
        <div className="bg-purple-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Use o petisco para guiar o cão até o chão</li>
            <li>Diga "Deita" no momento certo para criar a associação correta</li>
            <li>Reforce com elogios sempre que o cão obedecer</li>
          </ul>
        </div>
      </section>
    </div>
  );
} 