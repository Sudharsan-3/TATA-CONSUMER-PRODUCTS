import React from "react";

export const PlatformSelection = ({ onPlatformSelect, onBack, featureType, platformData }) => {
  const { initial, os } = platformData;

  // Filter the OS list based on featureType.noOfOs (if provided)
  const availablePlatforms =
    featureType?.noOFOs && Array.isArray(featureType.noOFOs)
      ? featureType.noOFOs
      : Object.keys(os); // fallback to all platforms if not provided

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          {initial.heading}
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          {initial.subTitle}{" "}
          <span className="font-semibold text-gray-800">
            {featureType?.title
              ? featureType.title.charAt(0).toUpperCase() + featureType.title.slice(1)
              : ""}
          </span>
        </p>
      </div>

      {/* Platform Cards */}
      <div
  className={`grid gap-6 sm:gap-8 
    ${
      availablePlatforms.length === 1
        ? "grid-cols-1 place-items-center"
        : availablePlatforms.length === 2
        ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center"
        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    }`}
>
  {availablePlatforms.map((key) => {
    const platform = os[key];
    if (!platform) return null;

    return (
      <div
        key={key}
        className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
      >
        <div className="text-center">
          {/* Icon */}
          <div
            className={`w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br ${platform.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}
          >
            <img
              src={platform.icon}
              alt={`${platform.name} Icon`}
              className="w-12 h-12 sm:w-14 sm:h-14 text-white"
            />
          </div>

          {/* Info */}
          <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">
            {platform.name}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {platform.subTitle}
          </p>

          {/* Button */}
          <button
            onClick={() => onPlatformSelect(key)}
            className={`w-full bg-gradient-to-r ${platform.gradient} hover:brightness-110 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
          >
            {platform.buttonText}
          </button>
        </div>
      </div>
    );
  })}
</div>


      {/* Back Button */}
      <div className="text-center mt-8">
        <button
          onClick={onBack}
          className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300"
        >
          ← Back to features
        </button>
      </div>
    </div>
  );
};





// import React from 'react';

// export const PlatformSelection = ({ onPlatformSelect, onBack, featureType }) => (
//   <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="text-center mb-8 sm:mb-12">
//       <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Choose Your Platform</h2>
//       <p className="text-gray-600 text-lg max-w-2xl mx-auto">Select your preferred platform to continue with {featureType.title.charAt(0).toUpperCase() + featureType.title.slice(1)}</p>
//     </div>
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
//       <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
//         <div className="text-center">
//           <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br  from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
//             <img
//               src="/android-svgrepo-com1.svg"
//               alt="Android Icon"
//               className="w-12 h-12 sm:w-14 sm:h-14 text-white "
//             />

//             {/* <svg className="w-12 h-12 sm:w-14 sm:h-14 text-white" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1518-.5972.416.416 0 00-.5972.1518l-2.0223 3.5045c-.8025-.3688-1.7047-.5729-2.6584-.5729s-1.8559.2041-2.6584.5729L9.2967 5.8686a.4157.4157 0 00-.5972-.1518.4157.4157 0 00-.1518.5972L10.498 9.3214C7.5701 10.9833 5.9232 13.6 5.9232 16.5c0 .9998.8134 1.8132 1.8132 1.8132h8.5272c.9998 0 1.8132-.8134 1.8132-1.8132 0-2.9-.6365-5.5167-3.5647-7.1786"/>
//             </svg> */}
//           </div>
//           <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">Android</h3>
//           <p className="text-gray-600 mb-6 leading-relaxed">Optimized experience for Android devices with native performance</p>
//           <button
//             onClick={() => onPlatformSelect('android')}
//             className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
//           >
//             Continue with Android
//           </button>
//         </div>
//       </div>
//       <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
//         <div className="text-center">
//           <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
//           <img
//               src="/apple-svgrepo-com (2).svg"
//               alt="Apple Icon"
//               className="w-12 h-12 sm:w-14 sm:h-14 text-white "
//             />
            
//             {/* <svg className="w-12 h-12 sm:w-14 sm:h-14 text-white" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
//             </svg> */}
//           </div>
//           <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">iOS</h3>
//           <p className="text-gray-600 mb-6 leading-relaxed">Seamless integration with iOS ecosystem and Apple design principles</p>
//           <button
//             onClick={() => onPlatformSelect('ios')}
//             className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
//           >
//             Continue with iOS
//           </button>
//         </div>
//       </div>
//     </div>
//     <div className="text-center mt-8">
//       <button onClick={onBack} className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300">
//         ← Back to features
//       </button>
//     </div>
//   </div>
// );