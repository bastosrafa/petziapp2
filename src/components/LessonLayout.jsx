import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '@/hooks/useProgress';
import LessonCarousel from './LessonCarousel';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

export default function LessonLayout({ moduleId, lessonId, slides }) {
  const navigate = useNavigate();
  const { isLessonUnlocked, isLessonCompleted, completeLesson } = useProgress();
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false);

  const getNextLessonId = (currentLessonId) => {
    const lessons = {
      "introducao": "comunicacao",
      "comunicacao": "rotina",
      "rotina": "erros",
      "erros": "progresso"
    };
    return lessons[currentLessonId];
  };

  const getPreviousLessonId = (currentLessonId) => {
    const lessons = {
      "comunicacao": "introducao",
      "rotina": "comunicacao",
      "erros": "rotina",
      "progresso": "erros"
    };
    return lessons[currentLessonId];
  };

  const handlePrevious = () => {
    const previousLessonId = getPreviousLessonId(lessonId);
    if (previousLessonId) {
      navigate(`/${moduleId}/${previousLessonId}`);
    }
  };

  const handleNext = async () => {
    if (isCompleting) return;
    
    setIsCompleting(true);
    try {
      const nextLessonId = getNextLessonId(lessonId);
      if (nextLessonId) {
        await completeLesson(moduleId, lessonId);
        navigate(`/${moduleId}/${nextLessonId}`);
      }
    } catch (error) {
      console.error('Erro ao concluir aula:', error);
    } finally {
      setIsCompleting(false);
    }
  };

  const handleLastSlide = () => {
    setIsLastSlide(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <LessonCarousel
        slides={slides}
        moduleId={moduleId}
        lessonId={lessonId}
        onComplete={handleNext}
        onLastSlide={handleLastSlide}
      />

      {/* Navigation buttons */}
      <div className="fixed bottom-20 left-0 right-0 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-4 flex justify-between items-center">
          {lessonId !== "introducao" && (
            <button
              onClick={handlePrevious}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Lição anterior
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={!isLastSlide || isCompleting}
            className="flex items-center bg-brand text-white px-6 py-2 rounded-lg hover:bg-brand/90 ml-auto disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Próxima lição
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
} 