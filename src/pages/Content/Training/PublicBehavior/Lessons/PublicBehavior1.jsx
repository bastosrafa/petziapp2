import React from "react";

export default function PublicBehavior1() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Andar na Rua</h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-medium">Por que ensinar?</h2>
        <p className="text-gray-700">
          Andar corretamente na rua é essencial para a segurança do cão e do tutor. Um cão que puxa a guia pode causar acidentes e tornar os passeios estressantes. Aprender a andar sem puxar torna os passeios mais agradáveis e seguros para todos.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Passo a Passo</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <ol className="list-decimal pl-5 space-y-2">
            <li>Comece em um ambiente calmo e familiar</li>
            <li>Use uma guia curta e coleira adequada</li>
            <li>Mantenha a guia frouxa, sem tensão</li>
            <li>Recompense quando o cão andar ao seu lado</li>
            <li>Aumente gradualmente a distância e as distrações</li>
          </ol>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Dicas Importantes</h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Nunca use punição física</li>
            <li>Seja paciente e consistente</li>
            <li>Use petiscos e elogios como recompensa</li>
            <li>Faça pausas regulares durante o passeio</li>
            <li>Mantenha o cão hidratado</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Material Necessário</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Para um Passeio Seguro:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Guia adequada ao tamanho do cão</li>
            <li>Coleira confortável e segura</li>
            <li>Petiscos para recompensa</li>
            <li>Garrafa de água e bebedouro portátil</li>
            <li>Sacola para recolher fezes</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Resumo Rápido</h2>
        <div className="bg-purple-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>Comece em ambiente calmo</li>
            <li>Mantenha a guia frouxa</li>
            <li>Recompense comportamentos desejados</li>
          </ul>
        </div>
      </section>
    </div>
  );
} 