import React from "react";

export default function DailyBehavior3() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Ficar (para evitar que o cão saia correndo)</h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Por que ensinar?</h2>
        <p className="text-gray-700">
          O comando "Fica" evita que o cão saia correndo em situações perigosas, como atravessar uma rua ou sair pela porta de casa sem permissão.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Passo a Passo</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <ol className="list-decimal pl-5 space-y-2">
            <li>Peça para o cão sentar ou deitar</li>
            <li>Estenda a mão com a palma aberta e diga "Fica!"</li>
            <li>Dê um passo para trás. Se o cão ficar parado, volte e recompense</li>
            <li>Aumente gradualmente a distância e o tempo antes de dar a recompensa</li>
            <li>Repita o exercício até que o cão fique parado mesmo com distrações</li>
          </ol>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Dicas Importantes</h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Comece com distâncias curtas e aumente progressivamente</li>
            <li>Recompense frequentemente no início para reforçar o comportamento</li>
            <li>Evite chamar o cão logo após o "Fica"</li>
            <li>Use um gesto claro com a mão (palma aberta)</li>
            <li>Pratique em diferentes ambientes e situações</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Situações de Uso</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Quando usar o comando "Fica":</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Ao abrir a porta de casa</li>
            <li>Antes de atravessar a rua</li>
            <li>Durante a limpeza da casa</li>
            <li>Em situações que exigem que o cão fique parado</li>
            <li>Durante fotos ou momentos que precisam de controle</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Resumo Rápido</h2>
        <div className="bg-purple-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Comece com distâncias curtas e aumente progressivamente</li>
            <li>Recompense frequentemente no início para reforçar o comportamento</li>
            <li>Evite chamar o cão logo após o "Fica"</li>
          </ul>
        </div>
      </section>
    </div>
  );
} 