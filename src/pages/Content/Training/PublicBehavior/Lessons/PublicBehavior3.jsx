import React from "react";

export default function PublicBehavior3() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Viajar de Carro</h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Por que ensinar?</h2>
        <p className="text-gray-700">
          Viajar de carro de forma segura e confortável é essencial para a mobilidade do cão e do tutor. Um cão bem adaptado a viagens de carro pode participar de mais atividades e ter acesso a diferentes locais, além de tornar as viagens mais seguras para todos.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Passo a Passo</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <ol className="list-decimal pl-5 space-y-2">
            <li>Acostume o cão ao carro parado primeiro</li>
            <li>Use uma caixa de transporte ou cinto de segurança</li>
            <li>Comece com viagens curtas</li>
            <li>Recompense comportamentos calmos</li>
            <li>Aumente gradualmente a duração das viagens</li>
          </ol>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Dicas Importantes</h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Nunca deixe o cão solto no carro</li>
            <li>Faça pausas regulares para água e exercícios</li>
            <li>Mantenha o carro bem ventilado</li>
            <li>Use brinquedos ou petiscos para distração</li>
            <li>Seja paciente e consistente no treinamento</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Material Necessário</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Para uma Viagem Segura:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Caixa de transporte ou cinto de segurança</li>
            <li>Água e bebedouro portátil</li>
            <li>Brinquedos e petiscos</li>
            <li>Toalha ou cobertor familiar</li>
            <li>Documentação do cão</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Resumo Rápido</h2>
        <div className="bg-purple-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Use equipamento de segurança adequado</li>
            <li>Comece com viagens curtas</li>
            <li>Faça pausas regulares</li>
          </ul>
        </div>
      </section>
    </div>
  );
} 