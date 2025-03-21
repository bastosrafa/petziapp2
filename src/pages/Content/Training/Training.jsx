import { useUserContext } from "@/hooks/useUserContext";
import {
  BadgePercentIcon,
  HandCoinsIcon,
  LockIcon,
  PiggyBankIcon,
  BrainCogIcon,
  HeartIcon,
  DogIcon,
  SparklesIcon,
  ShieldIcon,
  StarIcon,
} from "lucide-react";
import React from "react";

export default function Content() {
  const { userDoc } = useUserContext();
  const options2 = [
    {
      name: "Fundamentos do Adestramento",
      icon: (
        <StarIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0 text-brand" />
      ),
      description:
        "Criar um vínculo saudável entre tutor e pet e ensinar os princípios do aprendizado canino.",
    },
    {
      name: "Comportamento Essencial para o Dia a Dia",
      icon: (
        <DogIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0 text-brand" />
      ),
      description:
        "Ensinar comandos e hábitos que evitam problemas no dia a dia, garantindo um cão mais obediente e seguro.",
    },
    {
      name: "Socialização e Controle de Impulsos",
      icon: (
        <HeartIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0 text-brand" />
      ),
      description:
        "Ensinar o cão a se comportar bem em diferentes ambientes e situações sociais.",
    },
    {
      name: "Higiene e Rotina",
      icon: (
        <ShieldIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0 text-brand" />
      ),
      description:
        "Evita sujeira dentro de casa e proporciona um ambiente mais limpo e higiênico para o pet e para o tutor.",
    },
    {
      name: "Evitando Maus Hábitos",
      icon: (
        <BadgePercentIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0 text-brand" />
      ),
      description:
        "Corrigir comportamentos indesejáveis com técnicas eficazes.",
    },
    {
      name: "Exercícios Mentais e Diversão",
      icon: (
        <SparklesIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0 text-brand" />
      ),
      description:
        "Manter o cão mentalmente ativo e fisicamente saudável por meio de atividades divertidas e desafiadoras.",
    },
  ];
  return (
    <div>
      <h1 className="text-xl font-semibold">Módulos de Treinamento</h1>
      <div className="mt-2.5 flex flex-col lg:flex-row gap-2.5 sm:gap-6 flex-wrap">
        {options2.map((option) => (
          <div
            key={option.name}
            className={`${
              userDoc.startHere ? "" : "opacity-50 grayscale"
            } brightness-25 relative flex flex-nowrap items-center gap-2.5 sm:gap-5 border p-3 sm:p-6 bg-white //xl:w-[45%] rounded-md cursor-pointer`}
          >
            <div className="flex flex-col gap-1.5">
              <p className="text-md font-medium text-brand">{option.name}</p>
              <p className="text-black/75 text-sm">{option.description}</p>
            </div>
            {userDoc.startHere ? (
              option.icon
            ) : (
              <LockIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
