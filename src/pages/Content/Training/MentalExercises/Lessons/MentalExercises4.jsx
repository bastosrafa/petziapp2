import React from "react";

export default function MentalExercises4() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Jogos de Busca</h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Por que ensinar?</h2>
        <p className="text-gray-700">
          Jogos de busca são excelentes para desenvolver o olfato e a concentração do cão, além de serem muito divertidos. Eles ajudam a manter o cão mentalmente ativo e satisfazem seu instinto natural de caça.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Passo a Passo</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <ol className="list-decimal pl-5 space-y-2">
            <li>Comece com objetos fáceis de encontrar</li>
            <li>Use petiscos com cheiro forte inicialmente</li>
            <li>Aumente gradualmente a dificuldade</li>
            <li>Recompense quando o cão encontrar o objeto</li>
            <li>Varie os locais e objetos escondidos</li>
          </ol>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Dicas Importantes</h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Escolha áreas seguras para esconder objetos</li>
            <li>Use objetos que não representem perigo</li>
            <li>Mantenha o cão motivado com recompensas</li>
            <li>Observe os sinais de frustração</li>
            <li>Faça pausas quando necessário</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Tipos de Busca</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Para Desenvolver o Olfato:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Busca de petiscos escondidos</li>
            <li>Busca de brinquedos favoritos</li>
            <li>Busca de objetos com cheiro específico</li>
            <li>Busca em diferentes superfícies</li>
            <li>Busca em diferentes alturas</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Resumo Rápido</h2>
        <div className="bg-purple-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Comece com buscas simples</li>
            <li>Use objetos seguros e apropriados</li>
            <li>Mantenha o cão motivado</li>
          </ul>
        </div>
      </section>
    </div>
  );
} 