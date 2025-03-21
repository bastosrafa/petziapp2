import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 text-brand hover:text-brand/80 transition-colors mb-4"
    >
      <ArrowLeftIcon className="h-5 w-5" />
      <span>Voltar</span>
    </button>
  );
} 