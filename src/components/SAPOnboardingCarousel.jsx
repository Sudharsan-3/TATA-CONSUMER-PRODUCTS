import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Download,
  ExternalLink,
  BarChart3,
  Users,
  Settings,
  Shield,
  Zap,
  Globe,
} from "lucide-react";

const SAPOnboardingCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState("");

  const slidesData = {
    slides: [
      {
        id: 1,
        title: "Welcome to SAP onBoarding",
        subtitle:
          "Discover powerful features to transform your business insights",
        type: "hero",
        content: {
          header: "SAP Analytics Cloud",
          title: "Intelligence at your fingertips",
          description:
            "Connect, analyze, and visualize your data with our integrated analytics platform. Make data-driven decisions with real-time insights, predictive analytics, and collaborative planning tools.",
          buttonText: "Get Started",
          image:
            "https://via.placeholder.com/500x350/0070F3/FFFFFF?text=SAP+Analytics+Dashboard",
          icon: "bar-chart-3",
          gradient: "from-blue-600 via-blue-700 to-indigo-800",
        },
      },
      {
        id: 2,
        title: "Advanced Data Visualization",
        subtitle: "Create stunning reports and interactive dashboards",
        type: "feature",
        content: {
          header: "Smart Visualization",
          title: "Stories that drive action",
          description:
            "Build compelling data stories with our drag-and-drop designer. Create interactive charts, geo-maps, and custom visualizations that automatically adapt to your data changes and business context.",
          buttonText: "Explore Templates",
          image:
            "https://via.placeholder.com/500x350/059669/FFFFFF?text=Interactive+Charts+%26+Graphs",
          icon: "bar-chart-3",
          gradient: "from-emerald-500 via-teal-600 to-cyan-700",
        },
      },
      {
        id: 3,
        title: "Collaborative Planning",
        subtitle: "Unite teams with shared planning workflows",
        type: "feature",
        content: {
          header: "Enterprise Planning",
          title: "Plan together, succeed together",
          description:
            "Streamline your planning processes with collaborative workflows. Enable cross-functional teams to contribute, review, and approve plans in real-time with built-in governance and audit trails.",
          buttonText: "Start Planning",
          image:
            "https://via.placeholder.com/500x350/7C3AED/FFFFFF?text=Team+Collaboration+Board",
          icon: "users",
          gradient: "from-purple-600 via-violet-700 to-indigo-800",
        },
      },
      {
        id: 4,
        title: "Predictive Intelligence",
        subtitle: "Forecast trends with machine learning",
        type: "feature",
        content: {
          header: "Smart Predict",
          title: "See what's coming next",
          description:
            "Leverage built-in machine learning algorithms to predict future trends, identify anomalies, and simulate scenarios. Transform historical data into actionable insights for strategic decision-making.",
          buttonText: "Try Predictions",
          image:
            "https://via.placeholder.com/500x350/DC2626/FFFFFF?text=ML+Predictions+%26+Trends",
          icon: "zap",
          gradient: "from-red-500 via-pink-600 to-purple-700",
        },
      },
      {
        id: 5,
        title: "Enterprise Security",
        subtitle: "Protect your data with enterprise-grade security",
        type: "feature",
        content: {
          header: "Data Protection",
          title: "Security you can trust",
          description:
            "Enterprise-grade security with role-based access control, data encryption, and compliance frameworks. Ensure your sensitive business data is protected while maintaining seamless user experience.",
          buttonText: "Configure Security",
          image:
            "https://via.placeholder.com/500x350/1F2937/FFFFFF?text=Security+Dashboard",
          icon: "shield",
          gradient: "from-gray-700 via-slate-800 to-zinc-900",
        },
      },
      {
        id: 6,
        title: "Explore All Features",
        subtitle: "Choose your path to get started",
        type: "tabs",
        content: {
          header: "Start Your Journey",
          tabs: [
            {
              title: "Data Connection Hub",
              description:
                "Connect to 100+ data sources including SAP systems, cloud databases, and third-party applications",
              image:
                "https://via.placeholder.com/320x200/0070F3/FFFFFF?text=Data+Connectors",
              buttonText: "Connect Data",
              color: "blue",
              icon: "globe",
            },
            {
              title: "Template Gallery",
              description:
                "Browse pre-built dashboards and reports designed for your industry and business function",
              image:
                "https://via.placeholder.com/320x200/059669/FFFFFF?text=Dashboard+Templates",
              buttonText: "Browse Gallery",
              color: "emerald",
              icon: "bar-chart-3",
            },
            {
              title: "Learning Center",
              description:
                "Access tutorials, best practices, and certification programs to master SAP Analytics",
              image:
                "https://via.placeholder.com/320x200/7C3AED/FFFFFF?text=Learning+Resources",
              buttonText: "Start Learning",
              color: "purple",
              icon: "users",
            },
          ],
        },
      },
    ],
  };

  const slides = slidesData.slides;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const openFullscreen = (imageSrc) => {
    setFullscreenImage(imageSrc);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setFullscreenImage("");
  };

  const getIcon = (iconName) => {
    const icons = {
      "bar-chart-3": BarChart3,
      users: Users,
      shield: Shield,
      settings: Settings,
      zap: Zap,
      globe: Globe,
    };
    const IconComponent = icons[iconName] || BarChart3;
    return <IconComponent className="w-8 h-8" />;
  };

  const renderHeroSlide = (content) => (
    <div className="flex items-center justify-between max-w-7xl mx-auto px-8">
      <div className="w-1/2 pr-12">
        <div
          className={`bg-gradient-to-br ${content.gradient} rounded-3xl p-12 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
          onClick={() => openFullscreen(content.image)}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full mb-6 text-white border border-white/30">
                {getIcon(content.icon)}
              </div>
              <div className="bg-white/95 rounded-xl p-4 shadow-lg">
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-28 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 pl-12">
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <p className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wider">
            {content.header}
          </p>
          <h2 className="text-2xl font-bold mb-3 text-gray-900 leading-tight">
            {content.title}
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-base">
            {content.description}
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            {content.buttonText}
          </button>

          <div className="mt-3 grid grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">100+</div>
              <div className="text-sm text-gray-600">Data Sources</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-emerald-600">99.9%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFeatureSlide = (content) => (
    <div className="flex items-center justify-between max-w-7xl mx-auto px-8">
      <div className="w-1/2 pr-12">
        <div
          className={`bg-gradient-to-br ${content.gradient} rounded-3xl p-12 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group`}
          onClick={() => openFullscreen(content.image)}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 group-hover:bg-white/20 transition-all duration-300">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full mb-6 text-white">
                {getIcon(content.icon)}
              </div>
              <div className="bg-white/95 rounded-xl p-4 shadow-lg overflow-hidden">
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-24 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="mt-4 flex justify-center space-x-2">
                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 pl-12">
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <p className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wider">
            {content.header}
          </p>
          <h2 className="text-2xl font-bold mb-3 text-gray-900 leading-tight">
            {content.title}
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-base">
            {content.description}
          </p>

          <div className="space-y-3 mb-3 text-base">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span className="text-gray-700">Real-time data processing</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span className="text-gray-700">Drag-and-drop interface</span>
            </div>
          </div>

          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            {content.buttonText}
          </button>
        </div>
      </div>
    </div>
  );

  const renderTabsSlide = (content) => (
    <div className="max-w-7xl mx-auto px-8">
      {/* <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          {content.header}
        </h2>
        <p className="text-md text-gray-600 max-w-2xl mx-auto">
          Choose your preferred starting point and begin your SAP Analytics
          journey
        </p>
      </div> */}

      <div className="grid grid-cols-3 gap-8">
        {content.tabs.map((tab, index) => {
          const colorClasses = {
            blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
            emerald:
              "from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700",
            purple:
              "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
          };

          return (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div
                className="mb-4 cursor-pointer group"
                onClick={() => openFullscreen(tab.image)}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={tab.image}
                    alt={tab.title}
                    className="w-full h-24 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 right-4">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ExternalLink className="w-6 h-6 text-gray-700" />
                      </div>
                    </div>
                  </div>

                  {/* Feature icon overlay */}
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      {getIcon(tab.icon)}
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                {tab.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {tab.description}
              </p>

              <button
                className={`w-full bg-gradient-to-r ${
                  colorClasses[tab.color]
                } text-white px-6 py-3 text-sm rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
              >
                {tab.buttonText}
              </button>

              {/* Progress indicator */}
              <div className="mt-6 flex justify-center">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i < index + 2 ? `bg-${tab.color}-500` : "bg-gray-200"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const currentSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col">
      {/* Header with enhanced styling */}
      <div className="text-center py-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5"></div>
        <div className="relative">
          {/* <div className="inline-block bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-blue-700">
              SAP Analytics Cloud
            </span>
          </div> */}
          <h1 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
            {currentSlideData.title}
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {currentSlideData.subtitle}
          </p>
          <div className="mt-4 inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm">
            <div className="flex space-x-1">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-blue-600 w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-4 font-medium">
              {currentSlide + 1} of {slides.length}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-6">
        <div className="w-full">
          {currentSlideData.type === "hero" &&
            renderHeroSlide(currentSlideData.content)}
          {currentSlideData.type === "feature" &&
            renderFeatureSlide(currentSlideData.content)}
          {currentSlideData.type === "tabs" &&
            renderTabsSlide(currentSlideData.content)}
        </div>
      </div>

      {/* Enhanced Navigation */}
      <div className="flex items-center justify-between px-8 py-8">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center space-x-3 px-8 py-3 text-gray-600 hover:text-gray-900 hover:bg-white/80 hover:shadow-lg rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
          <span className="font-medium">Previous</span>
        </button>

        {/* Enhanced pagination */}
        <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative transition-all duration-300 ${
                currentSlide === index
                  ? "w-12 h-4 bg-blue-600 rounded-full"
                  : "w-4 h-4 bg-gray-300 hover:bg-gray-400 rounded-full hover:scale-125"
              }`}
            >
              {currentSlide === index && (
                <div className="absolute inset-0 bg-white rounded-full m-1 shadow-sm"></div>
              )}
            </button>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="flex items-center space-x-3 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <span className="font-medium">
            {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
          </span>
          {currentSlide === slides.length - 1 ? (
            <ExternalLink className="w-6 h-6" />
          ) : (
            <ChevronRight className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Enhanced Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <div className="relative max-w-6xl max-h-full">
            <button
              onClick={closeFullscreen}
              className="absolute -top-16 right-0 text-white hover:text-gray-300 z-10 bg-white/10 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:bg-white/20"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <img
                src={fullscreenImage}
                alt="Fullscreen preview"
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SAPOnboardingCarousel;
