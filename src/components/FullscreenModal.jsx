import React from 'react';
import { X } from 'lucide-react';

export const FullscreenModal = ({ imageSrc, onClose }) => (
  <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6">
    <div className="relative max-w-6xl max-h-full w-full">
      <button
        onClick={onClose}
        className="absolute -top-12 sm:-top-16 right-0 text-white hover:text-gray-300 z-10 bg-white/10 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 hover:bg-white/20"
      >
        <X className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
      <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-white/20">
        <img
          src={imageSrc}
          alt="Fullscreen preview"
          className="max-w-full max-h-[70vh] sm:max-h-[80vh] object-contain rounded-lg sm:rounded-xl shadow-2xl mx-auto"
        />
      </div>
    </div>
  </div>
);