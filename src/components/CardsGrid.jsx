import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Custom styles for Swiper
import './CardsGrid.css';

const CardsGrid = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [screenSize, setScreenSize] = useState({
    isSmall: window.innerWidth < 768,
    isMedium: window.innerWidth >= 768 && window.innerWidth < 992,
    isLarge: window.innerWidth >= 992
  });

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenSize({
        isSmall: width < 768,
        isMedium: width >= 768 && width < 992,
        isLarge: width >= 992
      });
      setIsMobile(width < 992);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const cards = [
    {
      id: 'natural',
      title: 'Natural',
      description: 'NATURE\'S LIGHT STUDIO',
      bgColor: 'bg-blue-500',
      textColor: 'text-white',
      descColor: 'text-blue-100',
      content: (
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-32 h-40 bg-white rounded-lg shadow-2xl transform rotate-12 transition-transform duration-300">
              <div className="w-full h-full bg-gradient-to-br from-pink-400 to-red-500 rounded-lg p-2 flex flex-col justify-center items-center">
                <div className="text-white text-xs text-center mb-2">SAINT LAURENT</div>
                <div className="w-full h-2/3 bg-white bg-opacity-20 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'inspire',
      title: 'Inspire',
      description: 'CREATIVE WORKSPACE',
      bgColor: 'bg-gray-400',
      textColor: 'text-white',
      descColor: 'text-gray-200',
      content: (
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-16 bg-gray-200 rounded-t-lg">
              <div className="w-full h-full bg-gray-100 rounded-t-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full opacity-80"></div>
              </div>
            </div>
            <div className="w-28 h-2 bg-gray-300 rounded-b-lg -mt-1"></div>
          </div>
        </div>
      )
    },
    {
      id: 'aesthetic',
      title: 'Aesthetic',
      description: 'VISUAL HARMONY',
      bgColor: 'bg-gray-300',
      textColor: 'text-gray-700',
      descColor: 'text-gray-600',
      content: null
    },
    {
      id: 'narrative',
      title: 'Narrative',
      description: 'STORY TELLING',
      bgColor: 'bg-gray-300',
      textColor: 'text-gray-700',
      descColor: 'text-gray-600',
      content: null
    }
  ];

  return (
    <div>
      <div className="min-h-screen bg-gray-50 p-8">
        {/* Header Section */}
        <div className="max-w-8xl mx-auto mb-12">
          <h1 className="text-6xl font-bold text-black mb-6">Why Goa?</h1>
          <p className="text-xl text-gray-700 max-w-md">
            Goa gives you the space to think louder, live slower, and create
            deeper.
          </p>
        </div>

        {/* Cards Grid - Desktop */}
        {screenSize.isLarge && (
          <div className="max-w-8xl mx-auto flex gap-4 [&:hover_.card:not(:hover)]:flex-1 [&:hover_.card:hover]:flex-[2]">
            {/* Natural Card */}
            <div className="card h-[545px] relative bg-blue-500 rounded-3xl overflow-hidden flex-[2] transition-all duration-500 ease-in-out group">
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    {/* Magazine/Book mockup */}
                    <div className="w-32 h-40 bg-white rounded-lg shadow-2xl transform rotate-12 transition-transform duration-300">
                      <div className="w-full h-full bg-gradient-to-br from-pink-400 to-red-500 rounded-lg p-2 flex flex-col justify-center items-center">
                        <div className="text-white text-xs text-center mb-2">
                          SAINT LAURENT
                        </div>
                        <div className="w-full h-2/3 bg-white bg-opacity-20 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">Natural</h2>
                  <p className="text-sm text-blue-100 uppercase tracking-wider opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                    NATURE'S LIGHT STUDIO
                  </p>
                </div>
              </div>
            </div>

            {/* Inspire Card */}
            <div className="card h-[545px] relative bg-gray-400 rounded-3xl overflow-hidden flex-1 transition-all duration-500 ease-in-out group">
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex justify-center mb-6">
                  {/* Laptop mockup */}
                  <div className="relative">
                    <div className="w-24 h-16 bg-gray-200 rounded-t-lg">
                      <div className="w-full h-full bg-gray-100 rounded-t-lg flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full opacity-80"></div>
                      </div>
                    </div>
                    <div className="w-28 h-2 bg-gray-300 rounded-b-lg -mt-1"></div>
                  </div>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white">Inspire</h2>
                  <p className="text-sm text-gray-200 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    CREATIVE WORKSPACE
                  </p>
                </div>
              </div>
            </div>

            {/* Aesthetic Card */}
            <div className="card h-[545px] relative bg-gray-300 rounded-3xl overflow-hidden flex-1 transition-all duration-500 ease-in-out group">
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div>
                  <h2 className="text-4xl font-bold text-gray-700">Aesthetic</h2>
                  <p className="text-sm text-gray-600 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    VISUAL HARMONY
                  </p>
                </div>
              </div>
            </div>

            {/* Narrative Card */}
            <div className="card h-[545px] relative bg-gray-300 rounded-3xl overflow-hidden flex-1 transition-all duration-500 ease-in-out group">
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div>
                  <h2 className="text-4xl font-bold text-gray-700">Narrative</h2>
                  <p className="text-sm text-gray-600 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    STORY TELLING
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile and Tablet Slider with FreeMode Swiper */}
        {(screenSize.isSmall || screenSize.isMedium) && (
          <div className="max-w-8xl mx-auto px-4">
            <Swiper
              ref={swiperRef}
              onSlideChange={handleSlideChange}
              modules={[FreeMode, Pagination]}
              slidesPerView={screenSize.isMedium ? 3 : 1} // Show 3 cards for medium screens (768-991px)
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
              breakpoints={{
                // For fine-tuning responsive behavior
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  freeMode: true,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  freeMode: true,
                },
                425: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                  freeMode: true,
                },
                375: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                  freeMode: true,
                },
                320: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                  freeMode: true,
                }
              }}
            >
              {cards.map((card) => (
                <SwiperSlide key={card.id}>
                  <div 
                    className={`relative ${card.bgColor} rounded-3xl overflow-hidden group`}
                    style={{
                      height: screenSize.isMedium ? '280px' : '380px', // Adjust height based on screen size
                    }}
                  >
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      {card.content}
                      <div>
                        <h2 
                          className={`font-bold ${card.textColor}`}
                          style={{ fontSize: screenSize.isMedium ? '1.75rem' : '2.25rem' }}
                        >
                          {card.title}
                        </h2>
                        <p className={`text-sm ${card.descColor} uppercase tracking-wider opacity-100 transition-opacity duration-300`}>
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  )
}

export default CardsGrid