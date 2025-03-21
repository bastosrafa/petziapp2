<<<<<<< HEAD
import Loading from "@/components/Loading";
import { useUserContext } from "@/hooks/useUserContext";
import {
  BadgePercentIcon,
  LockIcon,
  MapPinIcon,
  PictureInPicture2Icon,
  BrainCogIcon,
  HeartIcon,
  DogIcon,
  SparklesIcon,
  ShieldIcon,
  StarIcon,
  RotateCcwIcon,
} from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useAuthContext } from "@/hooks/useAuthContext";
import Subscriptions from "../Subscriptions/Subscriptions";
import { useFirestore } from "@/hooks/useFirestore";
import { useProgress } from "../../hooks/useProgress";

export default function Dashboard() {
  const { user } = useAuthContext();
  const { userDoc } = useUserContext();
  const isWideScreen = useMediaQuery("(min-width: 1920px)");
  const navigate = useNavigate();
  const { updateDocument: updateUser } = useFirestore("users");
  const { isModuleUnlocked, resetProgress } = useProgress();
  const [isResetting, setIsResetting] = useState(false);

  const handleReset = async () => {
    setIsResetting(true);
    try {
      await resetProgress();
      window.location.reload();
    } catch (error) {
      console.error("Erro ao resetar progresso:", error);
    } finally {
      setIsResetting(false);
    }
  };

  const options = [
    {
      name: "Bem-vindo ao Petzi",
      icon: (
        <MapPinIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0 text-brand" />
      ),
      description:
        "Comece sua jornada de aprendizado sobre treinamento canino com nossas lições fundamentais.",
      route: "/comece-aqui",
    },
  ];
  const options2 = [
    {
      name: "Fundamentos do Adestramento",
      icon: (
        <StarIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0 text-brand" />
      ),
      description:
        "Criar um vínculo saudável entre tutor e pet e ensinar os princípios do aprendizado canino.",
      route: "/fundamentos",
      moduleId: "fundamentos",
    },
    {
      name: "Comportamento Essencial para o Dia a Dia",
      icon: (
        <DogIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0 text-brand" />
      ),
      description:
        "Ensinar comandos e hábitos que evitam problemas no dia a dia, garantindo um cão mais obediente e seguro.",
      route: "/comportamento-essencial",
      moduleId: "comportamento-essencial",
    },
    {
      name: "Socialização e Controle de Impulsos",
      icon: (
        <HeartIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0 text-brand" />
      ),
      description:
        "Ensinar o cão a se comportar bem em diferentes ambientes e situações sociais.",
      route: "/socializacao",
      moduleId: "socializacao",
    },
    {
      name: "Higiene e Rotina",
      icon: (
        <ShieldIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0 text-brand" />
      ),
      description:
        "Evita sujeira dentro de casa e proporciona um ambiente mais limpo e higiênico para o pet e para o tutor.",
      route: "/higiene",
      moduleId: "higiene",
    },
    {
      name: "Evitando Maus Hábitos",
=======
import { useUserContext } from "@/hooks/useUserContext";
import {
  BadgePercentIcon,
  HandCoinsIcon,
  LockIcon,
  PiggyBankIcon,
} from "lucide-react";
import React from "react";

export default function Content() {
  const { userDoc } = useUserContext();
  const options2 = [
    {
      name: "Name 1",
      icon: (
        <HandCoinsIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0 text-brand" />
      ),
      description:
        "lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Name 2",
>>>>>>> 92ceedfebe3e9a74095ea4dd8621d91cb999ccb8
      icon: (
        <BadgePercentIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0 text-brand" />
      ),
      description:
<<<<<<< HEAD
        "Corrigir comportamentos indesejáveis com técnicas eficazes.",
      route: "/maus-habitos",
      moduleId: "maus-habitos",
    },
    {
      name: "Exercícios Mentais e Diversão",
      icon: (
        <SparklesIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0 text-brand" />
      ),
      description:
        "Manter o cão mentalmente ativo e fisicamente saudável por meio de atividades divertidas e desafiadoras.",
      route: "/exercicios-mentais",
      moduleId: "exercicios-mentais",
    },
  ];

  if (!userDoc) return <Loading />;
  if (userDoc.plan.status !== "active") return <Subscriptions />;

  return (
    <div className="h-[200vh] py-2.5 px-2.5 sm:px-0 lg:w-1/2">
      <div className="flex justify-end mb-4">
        <button
          onClick={handleReset}
          disabled={isResetting}
          className="text-sm bg-red-100 text-red-700 px-3 py-1.5 rounded-md hover:bg-red-200 transition-colors flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RotateCcwIcon className="w-4 h-4" />
          {isResetting ? "Resetando..." : "Resetar (Temporário)"}
        </button>
      </div>

      <div className="flex gap-3 items-center">
        <MapPinIcon className="text-brand" />
        <h1 className="text-xl font-medium text-black/75">Comece aqui</h1>
      </div>
      <div className="mt-3 sm:mt-5 flex gap-6">
        {options.map((option) => (
          <div
            key={option.name}
            className="flex items-center sm:gap-5 border p-3 sm:p-6 bg-white //xl:w-[45%] rounded-md cursor-pointer"
            onClick={() => navigate(`${option.route}`)}
          >
            <div className="flex flex-col gap-1.5">
              <p className="text-md font-medium text-brand">{option.name}</p>
              <p className="text-black/75 text-[13px] sm:text-sm">
                {option.description}
              </p>
            </div>
            {option.icon}
          </div>
        ))}
      </div>

      <div className="mt-5 flex gap-3 items-center">
        <PictureInPicture2Icon className="text-brand" />
        <h1 className="text-xl font-medium text-black/75">Módulos de Treinamento</h1>
      </div>
      <div className="mt-1">
        <p className="text-xs text-muted-foreground">
          Conclua o módulo "Comece por aqui" para desbloquear o restante do
          conteúdo.
        </p>
      </div>

      <div className="mt-2.5 flex flex-col lg:flex-row gap-2.5 sm:gap-6 flex-wrap">
        {options2.map((option) => {
          const isUnlocked = userDoc.startHere || isModuleUnlocked(option.moduleId);
          return (
            <div
              key={option.name}
              className={`${
                isUnlocked ? "" : "opacity-50 grayscale"
              } brightness-25 relative flex flex-nowrap items-center gap-2.5 sm:gap-5 border p-3 sm:p-6 bg-white //xl:w-[45%] rounded-md cursor-pointer hover:bg-gray-50 transition-colors`}
              onClick={() => isUnlocked && navigate(option.route)}
            >
              <div className="flex flex-col gap-1.5">
                <p className="text-md font-medium text-brand">{option.name}</p>
                <p className="text-black/75 text-sm">{option.description}</p>
              </div>
              {isUnlocked ? (
                option.icon
              ) : (
                <LockIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0" />
              )}
            </div>
          );
        })}
      </div>
=======
        "lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Name 3",
      icon: (
        <PiggyBankIcon className="h-6 w-6 sm:w-8 sm:h-8 shrink-0 text-brand" />
      ),
      description:
        "lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <div>
      <h1 className="text-xl font-semibold">Conteúdo</h1>
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
          </div>
        ))}
      </div>
>>>>>>> 92ceedfebe3e9a74095ea4dd8621d91cb999ccb8
    </div>
  );
}
