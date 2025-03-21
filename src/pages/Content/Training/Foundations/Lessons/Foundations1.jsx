import React from "react";

export default function Foundations1() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Como os cães aprendem?</h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Reforço Positivo vs. Negativo</h2>
        <p className="text-gray-700">
          O reforço positivo é a base do treinamento moderno e eficaz. Entenda por que ele funciona melhor que métodos punitivos.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Por que Reforço Positivo?</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Cria uma relação de confiança</li>
            <li>Reduz o estresse e a ansiedade</li>
            <li>Aumenta a motivação do cão</li>
            <li>Promove aprendizado mais rápido</li>
            <li>Previne comportamentos indesejados</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Exercício Prático</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Treinando com Reforço Positivo:</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Escolha um comportamento simples (ex: sentar)</li>
            <li>Prepare petiscos atrativos</li>
            <li>Observe e recompense o comportamento desejado</li>
            <li>Adicione o comando verbal</li>
            <li>Gradualmente, reduza as recompensas</li>
          </ol>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Dicas Importantes</h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Para um Treinamento Efetivo:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Seja consistente com as recompensas</li>
            <li>Use o timing correto</li>
            <li>Mantenha as sessões curtas e divertidas</li>
            <li>Observe os sinais de estresse</li>
            <li>Adapte o treino ao ritmo do seu cão</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Armadilhas a Evitar</h2>
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">O que Não Fazer:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Não use punição física</li>
            <li>Não grite ou intimide</li>
            <li>Não seja inconsistente com comandos</li>
            <li>Não treine quando estiver com raiva</li>
            <li>Não ignore os sinais de desconforto</li>
          </ul>
        </div>
      </section>
    </div>
  );
} 