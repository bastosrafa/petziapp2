"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Carousel({ items, autoPlay = true, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [isAnimating, setIsAnimating] = useState(false);

  const next = () => {
    if (!isAnimating) {
      setDirection("left");
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      setIsAnimating(true);
    }
  };

  const prev = () => {
    if (!isAnimating) {
      setDirection("right");
      setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
      setIsAnimating(true);
    }
  };

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(next, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex transition-transform duration-300 ease-out ${
          isAnimating
            ? direction === "left"
              ? "animate-slide-left"
              : "animate-slide-right"
            : ""
        }`}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`min-w-full flex-shrink-0 ${
              index === currentIndex ? "block" : "hidden"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setDirection(index > currentIndex ? "left" : "right");
                setCurrentIndex(index);
                setIsAnimating(true);
              }
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 