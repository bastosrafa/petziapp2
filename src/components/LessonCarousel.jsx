import React, { useState, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useProgress } from '@/hooks/useProgress';

export default function LessonCarousel({ slides, moduleId, lessonId, onComplete, onLastSlide }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [isCompleting, setIsCompleting] = useState(false);
  const carouselRef = useRef(null);
  const { completeLesson } = useProgress();

  // Notifica quando chega ao último slide
  React.useEffect(() => {
    if (currentSlide === slides.length - 1) {
      onLastSlide();
    }
  }, [currentSlide, slides.length, onLastSlide]);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = async () => {
    if (!isDragging) return;
    setIsDragging(false);
    const diff = startX - currentX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentSlide < slides.length - 1) {
        await nextSlide();
      } else if (diff < 0 && currentSlide > 0) {
        prevSlide();
      }
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const nextSlide = async () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      await markAsCompleted();
    }
  };

  const markAsCompleted = async () => {
    if (isCompleting) return;

    setIsCompleting(true);
    try {
      await completeLesson(moduleId, lessonId);
      onComplete();
    } catch (error) {
      console.error('Erro ao concluir aula:', error);
    } finally {
      setIsCompleting(false);
    }
  };

  return (
    <div className="relative w-full">
      <div
        ref={carouselRef}
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            width: `${slides.length * 100}%`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-4"
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors ${
          currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={currentSlide === 0}
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors ${
          currentSlide === slides.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={currentSlide === slides.length - 1 || isCompleting}
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>

      {/* Progress Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-brand' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
} 