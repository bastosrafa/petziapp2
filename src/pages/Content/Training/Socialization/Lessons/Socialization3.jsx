import React from "react";

export default function Socialization3() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Controle de Latidos Excessivos</h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Por que controlar?</h2>
        <p className="text-gray-700">
          Latidos excessivos podem causar problemas com vizinhos e indicar ansiedade ou frustração no cão. Aprender a controlar é importante para o bem-estar do animal e da família.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Passo a Passo</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <ol className="list-decimal pl-5 space-y-2">
            <li>Identifique o gatilho dos latidos (visitantes, barulhos, etc.)</li>
            <li>Antecipe o comportamento e distraia o cão antes dele latir</li>
            <li>Use o comando "Silêncio" quando ele parar de latir</li>
            <li>Recompense quando ele obedecer ao comando</li>
            <li>Gradualmente, aumente o tempo que ele precisa ficar quieto</li>
          </ol>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Dicas Importantes</h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Não grite com o cão quando ele latir</li>
            <li>Use reforço positivo em vez de punição</li>
            <li>Mantenha o cão mentalmente e fisicamente ativo</li>
            <li>Considere usar brinquedos interativos</li>
            <li>Seja paciente e consistente no treinamento</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Situações Comuns</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Como Lidar com Diferentes Cenários:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Latidos para visitantes: Treine o cão a ir para seu lugar quando a campainha tocar</li>
            <li>Latidos na janela: Use cortinas ou bloqueie o acesso à janela</li>
            <li>Latidos por tédio: Aumente a quantidade de exercícios e brincadeiras</li>
            <li>Latidos por ansiedade: Considere consultar um veterinário comportamental</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Resumo Rápido</h2>
        <div className="bg-purple-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Identifique o motivo dos latidos</li>
            <li>Use o comando "Silêncio" e recompense quando obedecer</li>
            <li>Mantenha o cão ativo e estimulado</li>
          </ul>
        </div>
      </section>
    </div>
  );
} 