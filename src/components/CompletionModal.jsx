import React from "react";

export default function CompletionModal({ isOpen, onClose, nextModule, onNavigate }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h2 className="text-2xl font-medium text-black/75 mb-2">
          Parabéns! 🎉
        </h2>
        <p className="text-black/75 mb-6">
          Você completou este módulo e desbloqueou o próximo módulo. Continue sua jornada de aprendizado!
        </p>
        <div className="flex justify-end">
          <button
            onClick={onNavigate}
            className="px-4 py-2 text-sm font-medium text-white bg-brand hover:bg-brand/90 rounded-lg"
          >
            Ir para o próximo módulo
          </button>
        </div>
      </div>
    </div>
  );
} 