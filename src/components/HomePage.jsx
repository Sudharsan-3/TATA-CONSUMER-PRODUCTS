import React from 'react';
import { IconRenderer } from './IconRenderer';

export const HomePage = ({ content, onFeatureClick, onImageClick }) => (
  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8 sm:mb-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        {content.header}
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Choose a feature to explore and get started with SAP Analytics
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {content.tabs.map((tab, index) => {
        const colorClasses = {
          blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
          emerald: 'from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700',
          purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
        };

        return (
          <div key={index} className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
            <div className="mb-4 cursor-pointer group" onClick={() => onImageClick(tab.image)}>
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
                <img
                  src={tab.image}
                  alt={tab.title}
                  className="w-full h-16 sm:h-20 lg:h-24 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <IconRenderer iconName={tab.icon} />
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-gray-900">{tab.title}</h3>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">{tab.description}</p>
            <button
              onClick={onFeatureClick}
              className={`w-full bg-gradient-to-r ${colorClasses[tab.color]} text-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
            >
              {tab.buttonText}
            </button>
          </div>
        );
      })}
    </div>
  </div>
);