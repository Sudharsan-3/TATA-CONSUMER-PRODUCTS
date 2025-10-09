import React, { useEffect, useState } from 'react';
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
  // const { slides, homePageData } = useSlidesData();
  // console.log("homePageData :" , homePageData)
  // console.log("slides :" , slides)
  const [homePageData, setHomePageData] = useState(null);
  const [slides, setSlides] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [featureType, setFeatureType] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Home.json
        const homeRes = await fetch("https://imagesbucketxlorit.s3.eu-north-1.amazonaws.com/datas/Home.json");
        if (!homeRes.ok) throw new Error(`Home.json HTTP error! Status: ${homeRes.status}`);
        const homeJson = await homeRes.json();
        setHomePageData(homeJson.homePageData);

        // Fetch Slides.json
        const slidesRes = await fetch("https://imagesbucketxlorit.s3.eu-north-1.amazonaws.com/datas/Slides.json");
        if (!slidesRes.ok) throw new Error(`Slides.json HTTP error! Status: ${slidesRes.status}`);
        const slidesJson = await slidesRes.json();
        setSlides(slidesJson.slides); // assuming your JSON has a key "slides"

        console.log("Home:", homeJson.homePageData);
        console.log("Slides:", slidesJson.slides);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Set initial featureType when homePageData is fetched
  useEffect(() => {
    if (homePageData && homePageData.tabs.length > 0) {
      setFeatureType(homePageData.tabs[0]);
    }
  }, [homePageData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;

  console.log(featureType?.type, "value for feature type");
  const feature = featureType?.type;

  // Filtering the slides data according to the osType
  const filteredData = slides
    ? slides.filter(
        (e) =>
          e.osType.toLowerCase() === selectedPlatform.toLowerCase() &&
          e.homePageData.toLowerCase() === feature?.toLowerCase()
      )
    : [];

  console.log(filteredData.length);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % filteredData.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + filteredData.length) % filteredData.length);

  const handleFeatureClick = () => setCurrentView('platform');

  console.log(currentView, "currentView");

  const handlePlatformSelection = (platform) => {
    setSelectedPlatform(platform);
    setCurrentView('slides');
    setCurrentSlide(0);
  };

  const goBackToHome = () => {
    setCurrentView('home');
    setCurrentSlide(0);
  };

  const goBackToPlatform = () => {
    setCurrentView("platform");
    setCurrentSlide(1);
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
      return {
        title: 'TATA CONSUMER PRODUCTS',
        subtitle: 'Easily explore and map TATA’s wide range of products with smart, data-driven insights.'
      };
    } else if (currentView === 'platform') {
      return { title: 'Platform Selection', subtitle: 'Choose your preferred platform to continue' };
    } else {
      const currentSlideData = filteredData[currentSlide];
      return { title: currentSlideData?.title || '', subtitle: currentSlideData?.subtitle || '' };
    }
  };

  const headerContent = getHeaderContent();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col">
      <CarouselHeader
        featureType={featureType}
        title={headerContent.title}
        subtitle={headerContent.subtitle}
        currentSlide={currentView === 'slides' ? currentSlide : null}
        slidesLength={filteredData.length}
      />

      <div className="flex-1 flex items-center justify-center px-2 sm:px-4 py-4 sm:py-6">
        <div className="w-full">
          {currentView === 'home' && (
            <HomePage
              setFeatureType={setFeatureType}
              content={homePageData}
              onFeatureClick={handleFeatureClick}
              onImageClick={openFullscreen}
            />
          )}
          {currentView === 'platform' && (
            <PlatformSelection
              featureType={featureType}
              onPlatformSelect={handlePlatformSelection}
              onBack={goBackToHome}
            />
          )}
          {currentView === 'slides' && filteredData.length > 0 && (
            <FeatureSlide content={filteredData[currentSlide]?.content} onImageClick={openFullscreen} />
          )}
        </div>
      </div>

      {currentView === 'slides' && filteredData.length > 0 && (
        <SlideNavigation
          currentSlide={currentSlide}
          slidesLength={filteredData.length}
          onPrev={prevSlide}
          onNext={nextSlide}
          onJump={setCurrentSlide}
          onBack={goBackToPlatform}
        />
      )}

      {isFullscreen && <FullscreenModal imageSrc={fullscreenImage} onClose={closeFullscreen} />}
    </div>
  );
};

export default SAPOnboardingCarousel;


