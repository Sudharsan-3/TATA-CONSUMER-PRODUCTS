import React from 'react';
import { IconRenderer } from './IconRenderer';

export const FeatureSlide = ({ content, onImageClick ,featureType }) => {
  
  return( 
    <div>
      {
        content.length !== 0 ?( <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 lg:space-y-0">
    <div className="w-full lg:w-1/2 lg:pr-6 xl:pr-10">
      <div
        className={`bg-gradient-to-br ${content.gradient} rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group`}
        onClick={() => onImageClick(content.image)}
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 group-hover:bg-white/20 transition-all duration-300">
          <div className="text-center">
            <div className="bg-white/95 rounded-lg sm:rounded-xl h-44 sm:h-64 shadow-lg overflow-hidden">
              <img
                src={content.image}
                alt={content.title}
                className="w-full h-full object-cover rounded-md sm:rounded-lg transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="w-full lg:w-1/2 lg:pl-8 xl:pl-12">
      <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
        {/* <p className="text-xs sm:text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wider">
          {content.header}
        </p> */}
        <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 leading-tight">
          {content.title}
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
          {content.description}
        </p>

        {/* <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full"></div>
            <span className="text-gray-700 text-sm sm:text-base">Real-time data processing</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full"></div>
            <span className="text-gray-700 text-sm sm:text-base">Drag-and-drop interface</span>
          </div>
        </div> */}

        {/* <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-2.5 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          {content.buttonText}
        </button> */}
      </div>
    </div>
  </div>):("nodata founded")
      }
      
    </div>
 
);}