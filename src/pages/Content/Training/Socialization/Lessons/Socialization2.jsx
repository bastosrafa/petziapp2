import React from "react";

export default function Socialization2() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Passeio sem puxar a guia</h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Por que ensinar?</h2>
        <p className="text-gray-700">
          Puxar a guia pode ser perigoso e desconfortável para o tutor e o cão. Ensinar a andar sem puxar torna os passeios mais prazerosos.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Passo a Passo</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <ol className="list-decimal pl-5 space-y-2">
            <li>Use uma guia curta para maior controle, sem enforcar</li>
            <li>Pare de andar sempre que o cão puxar. Assim, ele entende que puxar = parada</li>
            <li>Recompense quando a guia estiver solta (dê petiscos e elogie)</li>
            <li>Mude de direção aleatoriamente → Isso mantém o cão atento ao tutor</li>
            <li>Treine em diferentes ambientes → Comece em locais tranquilos e evolua para áreas movimentadas</li>
          </ol>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Dicas Importantes</h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Seja consistente com as paradas quando o cão puxar</li>
            <li>Use reforço positivo quando o cão andar corretamente</li>
            <li>Mantenha a guia frouxa, sem tensionar</li>
            <li>Pratique em diferentes ambientes e situações</li>
            <li>Seja paciente e mantenha as sessões curtas</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Equipamentos Recomendados</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Para um Passeio Mais Confortável:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Guia curta e resistente</li>
            <li>Coleira adequada ao tamanho do cão</li>
            <li>Peitoral anti-puxão (opcional)</li>
            <li>Petiscos para recompensa</li>
            <li>Bolsas para carregar os petiscos</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Resumo Rápido</h2>
        <div className="bg-purple-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Pare de andar sempre que o cão puxar</li>
            <li>Recompense quando ele andar com a guia solta</li>
            <li>Mude de direção para reforçar a atenção no tutor</li>
          </ul>
        </div>
      </section>
    </div>
  );
} 