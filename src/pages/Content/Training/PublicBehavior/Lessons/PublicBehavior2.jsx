import React from "react";

export default function PublicBehavior2() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Interagir com Pessoas</h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Por que ensinar?</h2>
        <p className="text-gray-700">
          A interação adequada com pessoas é essencial para a socialização do cão e para evitar situações desconfortáveis ou perigosas. Um cão bem socializado é mais confiante e seguro em diferentes situações sociais.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Passo a Passo</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <ol className="list-decimal pl-5 space-y-2">
            <li>Comece com interações controladas em ambiente familiar</li>
            <li>Apresente o cão a diferentes tipos de pessoas</li>
            <li>Ensine o cão a sentar antes de receber atenção</li>
            <li>Recompense comportamentos calmos e amigáveis</li>
            <li>Gradualmente aumente a complexidade das interações</li>
          </ol>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Dicas Importantes</h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Respeite o espaço e conforto do cão</li>
            <li>Nunca force interações</li>
            <li>Use petiscos para recompensar comportamentos positivos</li>
            <li>Observe os sinais de estresse do cão</li>
            <li>Seja consistente nas regras de interação</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Sinais de Estresse</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Fique Atento a:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Orelhas para trás</li>
            <li>Rabo entre as pernas</li>
            <li>Lamber os lábios</li>
            <li>Bocejar excessivamente</li>
            <li>Tentar se afastar</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Resumo Rápido</h2>
        <div className="bg-purple-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Comece com interações controladas</li>
            <li>Respeite o conforto do cão</li>
            <li>Recompense comportamentos positivos</li>
          </ul>
        </div>
      </section>
    </div>
  );
} 