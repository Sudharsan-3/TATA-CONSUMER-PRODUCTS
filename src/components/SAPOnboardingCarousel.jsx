import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Note: Not all icons used here; imported in sub-components
import { useSlidesData } from '../useSlidesData';
import { CarouselHeader } from './CarouselHeader';
import { HomePage } from './HomePage';
import { PlatformSelection } from './PlatformSelection';
import { FeatureSlide } from './FeatureSlide';
import { SlideNavigation } from './SlideNavigation';
import { FullscreenModal } from './FullscreenModal';

const SAPOnboardingCarousel = () => {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'platform', 'slides'
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState('');
  const { slides, homePageData } = useSlidesData();

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const handleFeatureClick = () => setCurrentView('platform');

  const handlePlatformSelection = (platform) => {
    setSelectedPlatform(platform);
    setCurrentView('slides');
    setCurrentSlide(0);
  };

  const goBackToHome = () => {
    setCurrentView('home');
    setCurrentSlide(0);
  };

  const openFullscreen = (imageSrc) => {
    setFullscreenImage(imageSrc);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setFullscreenImage('');
  };

  const getHeaderContent = () => {
    if (currentView === 'home') {
      return { title: 'SAP Analytics Cloud', subtitle: 'Choose a feature to explore and get started with powerful analytics' };
    } else if (currentView === 'platform') {
      return { title: 'Platform Selection', subtitle: 'Choose your preferred platform to continue' };
    } else {
      const currentSlideData = slides[currentSlide];
      return { title: currentSlideData.title, subtitle: currentSlideData.subtitle };
    }
  };

  const headerContent = getHeaderContent();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col">
      <CarouselHeader
        title={headerContent.title}
        subtitle={headerContent.subtitle}
        currentSlide={currentView === 'slides' ? currentSlide : null}
        slidesLength={slides.length}
      />

      <div className="flex-1 flex items-center justify-center px-2 sm:px-4 py-4 sm:py-6">
        <div className="w-full">
          {currentView === 'home' && <HomePage content={homePageData} onFeatureClick={handleFeatureClick} onImageClick={openFullscreen} />}
          {currentView === 'platform' && <PlatformSelection onPlatformSelect={handlePlatformSelection} onBack={goBackToHome} />}
          {currentView === 'slides' && <FeatureSlide content={slides[currentSlide].content} onImageClick={openFullscreen} />}
        </div>
      </div>

      {currentView === 'slides' && (
        <SlideNavigation
          currentSlide={currentSlide}
          slidesLength={slides.length}
          onPrev={prevSlide}
          onNext={nextSlide}
          onJump={setCurrentSlide}
        />
      )}

      {isFullscreen && <FullscreenModal imageSrc={fullscreenImage} onClose={closeFullscreen} />}
    </div>
  );
};

export default SAPOnboardingCarousel;