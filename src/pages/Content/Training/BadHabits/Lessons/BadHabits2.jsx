import React from "react";

export default function BadHabits2() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Cavar no Jardim</h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Por que corrigir?</h2>
        <p className="text-gray-700">
          Cavar no jardim pode danificar plantas, criar buracos perigosos e causar prejuízos ao paisagismo. Este comportamento geralmente ocorre por tédio, instinto natural ou para buscar alívio do calor. Aprender a redirecionar este comportamento é importante.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Passo a Passo</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <ol className="list-decimal pl-5 space-y-2">
            <li>Identifique as áreas onde o cão costuma cavar</li>
            <li>Crie uma área específica para cavar → Use uma caixa de areia ou local com terra fofa</li>
            <li>Enterre brinquedos e petiscos na área permitida</li>
            <li>Recompense quando o cão cavar no local correto</li>
            <li>Proteja as áreas indesejadas com barreiras físicas</li>
          </ol>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Dicas Importantes</h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Não use punição física</li>
            <li>Mantenha o cão mentalmente e fisicamente ativo</li>
            <li>Forneça sombra e água fresca no verão</li>
            <li>Use repelentes naturais nas áreas protegidas</li>
            <li>Seja consistente no redirecionamento</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Proteção do Jardim</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Para Proteger as Áreas Indesejadas:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Use grades ou cercas baixas</li>
            <li>Coloque pedras ou cascalho nas bordas</li>
            <li>Use plantas espinhosas como barreira natural</li>
            <li>Mantenha o cão supervisionado no jardim</li>
            <li>Considere usar um cercado específico para cães</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Resumo Rápido</h2>
        <div className="bg-purple-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Crie uma área específica para cavar</li>
            <li>Proteja as áreas indesejadas</li>
            <li>Mantenha o cão ativo e estimulado</li>
          </ul>
        </div>
      </section>
    </div>
  );
} 