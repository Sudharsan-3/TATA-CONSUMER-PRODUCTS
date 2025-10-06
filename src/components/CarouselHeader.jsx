import React from 'react';

export const CarouselHeader = ({ title, subtitle, currentSlide, slidesLength, onSlideChange , featureType }) => (
  <div className="text-center py-4 sm:py-6 lg:py-8 relative px-4">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5"></div>
    <div className="relative">
      <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-4 leading-tight px-4">
        {title}
      </h1>
      <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
        { subtitle  }
      </p>
      {currentSlide !== null && (
        <div className="mt-3 sm:mt-4 inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-3 sm:px-6 py-2 sm:py-3 shadow-sm">
          <div className="flex space-x-1">
            {Array.from({ length: slidesLength }, (_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-blue-600 w-4 sm:w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-gray-600 ml-2 sm:ml-4 font-medium">
            {currentSlide + 1} of {slidesLength}
          </span>
        </div>
      )}
    </div>
  </div>
);