"use client";

import { useState, useEffect } from "react";

export function Card({ children, className = "", hover = true }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 ${
        hover ? "hover:shadow-lg hover:-translate-y-1" : ""
      } ${className} ${
        isVisible ? "animate-fade-in" : "animate-fade-out"
      }`}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>
  );
}

export function CardTitle({ children, className = "" }) {
  return (
    <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className = "" }) {
  return (
    <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = "" }) {
  return (
    <div className={`flex items-center p-6 pt-0 ${className}`}>{children}</div>
  );
} 