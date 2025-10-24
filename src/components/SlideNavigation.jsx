import React from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export const SlideNavigation = ({ currentSlide, slidesLength, onPrev, onNext, onJump , onBack }) => (
  <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 space-y-4 sm:space-y-0">
    {/* Previous Button */}
    {currentSlide === 0 ?
    (
      <button
      onClick={onBack}
      
      className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-6 py-2 sm:py-2.5 text-gray-600 hover:text-gray-900 hover:bg-white/80 hover:shadow-lg rounded-lg sm:rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm w-full sm:w-auto justify-center sm:justify-start"
    >
      <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      <span className="font-medium text-sm sm:text-base hidden sm:inline">Back to platform selection</span>
    </button>
    )
    : <button
      onClick={onPrev}
      disabled={currentSlide === 0}
      className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-6 py-2 sm:py-2.5 text-gray-600 hover:text-gray-900 hover:bg-white/80 hover:shadow-lg rounded-lg sm:rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm w-full sm:w-auto justify-center sm:justify-start"
    >
      <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      <span className="font-medium text-sm sm:text-base hidden sm:inline">Previous</span>
    </button>
    
    
    }

   

    {/* Slide Indicators */}
    <div className="flex items-center justify-center overflow-x-auto scrollbar-hide flex-nowrap space-x-1 sm:space-x-4 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl px-2 sm:px-6 py-2 sm:py-3 shadow-lg">
  {Array.from({ length: slidesLength }, (_, index) => (
    <button
      key={index}
      onClick={() => onJump(index)}
      className={`relative flex-shrink-0 transition-all duration-300 ${
        currentSlide === index
          ? 'w-4 h-1 sm:w-12 sm:h-4 bg-blue-600 rounded-full' // active slide: smaller on mobile
          : 'w-2 h-2 sm:w-4 sm:h-4 bg-gray-300 hover:bg-gray-400 rounded-full hover:scale-125' // inactive slides
      }`}
    >
      {currentSlide === index && (
        <div className="absolute inset-0 bg-white rounded-full m-0.5 sm:m-1 shadow-sm"></div>
      )}
    </button>
  ))}
</div>

    {/* <div className="flex items-center justify-center flex-wrap sm:flex-nowrap space-x-2 sm:space-x-4 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl px-3 sm:px-6 py-2 sm:py-3 shadow-lg">
      {Array.from({ length: slidesLength }, (_, index) => (
        <button
          key={index}
          onClick={() => onJump(index)}
          className={`relative transition-all duration-300 ${
            currentSlide === index
              ? 'w-6 h-2 sm:w-12 sm:h-4 bg-blue-600 rounded-full'
              : 'w-2 h-2 sm:w-4 sm:h-4 bg-gray-300 hover:bg-gray-400 rounded-full hover:scale-125'
          }`}
        >
          {currentSlide === index && <div className="absolute inset-0 bg-white rounded-full m-0.5 sm:m-1 shadow-sm"></div>}
        </button>
      ))}
    </div> */}

    {/* Next / Get Started Button */}
    {currentSlide === slidesLength - 1 ? (
      <a
        href="/"
        className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 px-3 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
      >
        <span className="font-medium text-sm sm:text-base">Get Started</span>
        <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
    ) : (
      <button
        onClick={onNext}
        className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 px-3 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
      >
        <span className="font-medium text-sm sm:text-base">Next</span>
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    )}

    {/* 
    <button
      onClick={onNext}
      className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-6 lg:px-8 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
    >
      <span className="font-medium text-sm sm:text-base">
        {currentSlide === slidesLength - 1 ? <a href='/'>Get Started</a> : 'Next'}
      </span>
      {currentSlide === slidesLength - 1 ? (
        <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
      ) : (
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      )}
    </button> 
    */}
  </div>
);


// import React from 'react';
// import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

// export const SlideNavigation = ({ currentSlide, slidesLength, onPrev, onNext, onJump }) => (
//   <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
//     <button
//       onClick={onPrev}
//       disabled={currentSlide === 0}
//       className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-6 lg:px-8 py-2 sm:py-2.5 text-gray-600 hover:text-gray-900 hover:bg-white/80 hover:shadow-lg rounded-lg sm:rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
//     >
//       <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
//       <span className="font-medium text-sm sm:text-base hidden sm:inline">Previous</span>
//     </button>

//     <div className="flex items-center space-x-2 sm:space-x-4 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl px-3 sm:px-6 py-2 sm:py-3 shadow-lg">
//       {Array.from({ length: slidesLength }, (_, index) => (
//         <button
//           key={index}
//           onClick={() => onJump(index)}
//           className={`relative transition-all duration-300 ${
//             currentSlide === index
//               ? 'w-6 h-2 sm:w-12 sm:h-4 bg-blue-600 rounded-full'
//               : 'w-2 h-2 sm:w-4 sm:h-4 bg-gray-300 hover:bg-gray-400 rounded-full hover:scale-125'
//           }`}
//         >
//           {currentSlide === index && <div className="absolute inset-0 bg-white rounded-full m-0.5 sm:m-1 shadow-sm"></div>}
//         </button>
//       ))}
//     </div>

//     {currentSlide === slidesLength - 1 ? (
//   <a
//     href="/"
//     className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-6 lg:px-8 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
//   >
//     <span className="font-medium text-sm sm:text-base">Get Started</span>
//     <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
//   </a>
// ) : (
//   <button
//     onClick={onNext}
//     className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-6 lg:px-8 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
//   >
//     <span className="font-medium text-sm sm:text-base">Next</span>
//     <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
//   </button>
// )}


//     {/* <button
//       onClick={onNext}
//       className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-6 lg:px-8 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
//     >
//       <span className="font-medium text-sm sm:text-base">
//         {currentSlide === slidesLength - 1 ? <a href='/'>Get Started</a> : 'Next'}
//       </span>
//       {currentSlide === slidesLength - 1 ? (
//         <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
//       ) : (
//         <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
//       )}
//     </button> */}
//   </div>
// );