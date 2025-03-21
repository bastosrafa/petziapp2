import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function ModuleCompletePopup({ onClose, onNextModule }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex flex-col items-center text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Parabéns!</h2>
          <p className="text-gray-600 mb-6">
            Você completou o módulo de Fundamentos do Adestramento. 
            Continue sua jornada no próximo módulo!
          </p>
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Fechar
            </button>
            <button
              onClick={onNextModule}
              className="px-4 py-2 bg-brand text-white rounded hover:bg-brand/90"
            >
              Ir para o próximo módulo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 