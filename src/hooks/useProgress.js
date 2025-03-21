import { useState, useEffect, useCallback } from "react";
import { useUserContext } from "./useUserContext";
import { useFirestore } from "./useFirestore";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const MODULE_ORDER = [
  "comece-aqui",
  "fundamentos",
  "comportamento-essencial",
  "socializacao",
  "higiene",
  "maus-habitos",
  "exercicios-mentais",
];

const MODULE_LESSONS = {
  "comece-aqui": [
    "introducao",
    "comunicacao",
    "rotina",
    "erros",
    "progresso"
  ],
  "fundamentos": [
    "introducao",
    "comportamento",
    "comunicacao",
    "socializacao",
    "treinamento",
    "reforco"
  ],
  "comportamento": [
    "introducao",
    "comportamento",
    "comunicacao",
    "socializacao",
    "treinamento",
    "reforco"
  ],
  "comunicacao": [
    "introducao",
    "comportamento",
    "comunicacao",
    "socializacao",
    "treinamento",
    "reforco"
  ],
  "socializacao": [
    "introducao",
    "comportamento",
    "comunicacao",
    "socializacao",
    "treinamento",
    "reforco"
  ],
  "treinamento": [
    "introducao",
    "comportamento",
    "comunicacao",
    "socializacao",
    "treinamento",
    "reforco"
  ],
  "reforco": [
    "introducao",
    "comportamento",
    "comunicacao",
    "socializacao",
    "treinamento",
    "reforco"
  ],
  "recursos": [
    "introducao",
    "comportamento",
    "comunicacao",
    "socializacao",
    "treinamento",
    "reforco"
  ],
  "conclusao": [
    "introducao",
    "comportamento",
    "comunicacao",
    "socializacao",
    "treinamento",
    "reforco"
  ],
};

export function useProgress() {
  const { userDoc } = useUserContext();
  const { updateDocument: updateUser } = useFirestore("users");
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [nextModule, setNextModule] = useState(null);

  const isLastLesson = useCallback(
    (moduleId, lessonId) => {
      const moduleLessons = MODULE_LESSONS[moduleId];
      if (!moduleLessons) return false;
      const lastLesson = moduleLessons[moduleLessons.length - 1];
      return lastLesson === lessonId;
    },
    []
  );

  const isModuleUnlocked = useCallback(
    (moduleId) => {
      if (!userDoc?.progress?.unlockedModules) return false;
      return userDoc.progress.unlockedModules.includes(moduleId);
    },
    [userDoc]
  );

  const isLessonUnlocked = useCallback(
    (moduleId, lessonId) => {
      console.log('Verificando desbloqueio:', {
        moduleId,
        lessonId,
        unlockedModules: userDoc?.progress?.unlockedModules,
        completedLessons: userDoc?.progress?.completedLessons
      });

      if (!userDoc?.progress?.unlockedModules) {
        console.log('Módulos desbloqueados não encontrados');
        return false;
      }
      
      if (!isModuleUnlocked(moduleId)) {
        console.log('Módulo não desbloqueado:', moduleId);
        return false;
      }

      const moduleLessons = MODULE_LESSONS[moduleId];
      if (!moduleLessons) {
        console.log('Lições do módulo não encontradas:', moduleId);
        return false;
      }

      const lessonIndex = moduleLessons.indexOf(lessonId);
      if (lessonIndex === 0) {
        console.log('Primeira lição do módulo, desbloqueada');
        return true;
      }

      const previousLesson = moduleLessons[lessonIndex - 1];
      const previousLessonKey = `${moduleId}/${previousLesson}`;
      
      const isUnlocked = Boolean(userDoc.progress.completedLessons?.[previousLessonKey]);
      console.log('Verificação de desbloqueio:', {
        previousLesson,
        previousLessonKey,
        isUnlocked,
        completedLessons: userDoc.progress.completedLessons,
        currentLessonKey: `${moduleId}/${lessonId}`
      });
      
      return isUnlocked;
    },
    [userDoc, isModuleUnlocked]
  );

  const isLessonCompleted = useCallback(
    (moduleId, lessonId) => {
      if (!userDoc?.progress?.completedLessons) return false;
      const lessonKey = `${moduleId}/${lessonId}`;
      return Boolean(userDoc.progress.completedLessons[lessonKey]);
    },
    [userDoc]
  );

  const completeLesson = useCallback(async (moduleId, lessonId) => {
    if (!userDoc) {
      console.error('userDoc não encontrado');
      return;
    }

    try {
      if (isLessonCompleted(moduleId, lessonId)) {
        console.log('Aula já concluída:', { moduleId, lessonId });
        return;
      }

      const isLastLessonOfModule = isLastLesson(moduleId, lessonId);
      console.log('Verificando última aula:', {
        isLastLesson: isLastLessonOfModule,
        moduleId,
        lessonId
      });

      const updatedProgress = {
        completedLessons: {
          ...userDoc.progress?.completedLessons,
          [`${moduleId}/${lessonId}`]: true
        },
        unlockedModules: [...(userDoc.progress?.unlockedModules || [])]
      };

      if (isLastLessonOfModule) {
        const currentModuleIndex = MODULE_ORDER.indexOf(moduleId);
        const nextModuleId = MODULE_ORDER[currentModuleIndex + 1];
        console.log('Verificando próximo módulo:', {
          currentModuleIndex,
          nextModuleId,
          unlockedModules: updatedProgress.unlockedModules
        });
        
        if (nextModuleId && !updatedProgress.unlockedModules.includes(nextModuleId)) {
          updatedProgress.unlockedModules.push(nextModuleId);
          console.log('Próximo módulo definido:', nextModuleId);
          setNextModule(nextModuleId);
          setTimeout(() => {
            setShowCompletionModal(true);
          }, 100);
        }
      }

      await updateUser(userDoc.id, {
        progress: updatedProgress
      });

      window.dispatchEvent(new CustomEvent('lessonCompleted', {
        detail: { moduleId, lessonId }
      }));

      console.log('Aula marcada como concluída com sucesso:', { moduleId, lessonId });
    } catch (error) {
      console.error('Erro ao marcar aula como concluída:', error);
    }
  }, [userDoc, isLastLesson, isLessonCompleted, updateUser]);

  const handleNextModule = useCallback(async () => {
    try {
      console.log('Tentando navegar para o módulo 2');
      const updatedProgress = {
        completedLessons: {
          ...userDoc.progress?.completedLessons,
          [`fundamentos/introducao`]: false
        },
        unlockedModules: [...(userDoc.progress?.unlockedModules || [])]
      };

      if (!updatedProgress.unlockedModules.includes('fundamentos')) {
        updatedProgress.unlockedModules.push('fundamentos');
      }

      await updateUser(userDoc.id, {
        progress: updatedProgress
      });

      window.location.href = '/fundamentos';
    } catch (error) {
      console.error('Erro ao navegar para o módulo 2:', error);
    }
  }, [userDoc, updateUser]);

  const resetProgress = useCallback(async () => {
    if (!userDoc) return;

    try {
      const initialProgress = {
        completedLessons: {},
        unlockedModules: ["comece-aqui"]
      };

      await updateUser(userDoc.id, {
        progress: initialProgress
      });

      window.location.reload();
    } catch (error) {
      console.error('Erro ao resetar progresso:', error);
    }
  }, [userDoc, updateUser]);

  const getNextModule = useCallback((currentModuleId) => {
    const moduleIndex = MODULE_ORDER.indexOf(currentModuleId);
    if (moduleIndex === -1 || moduleIndex === MODULE_ORDER.length - 1) {
      return null;
    }
    return MODULE_ORDER[moduleIndex + 1];
  }, []);

  return {
    isModuleUnlocked,
    isLessonUnlocked,
    isLessonCompleted,
    completeLesson,
    showCompletionModal,
    setShowCompletionModal,
    nextModule,
    handleNextModule,
    resetProgress,
    getNextModule
  };
} 