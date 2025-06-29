import React, { useState, useEffect } from 'react';

export default function CardsGrid() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header Section */}
      <div className="max-w-8xl mx-auto mb-12">
        <h1 className="text-6xl font-bold text-black mb-6">Why Goa?</h1>
        <p className="text-xl text-gray-700 max-w-md">
          Goa gives you the space to think louder, live slower, and create deeper.
        </p>
      </div>

      {/* Cards Grid - Desktop */}
      {!isMobile && (
        <div className="max-w-8xl mx-auto flex gap-4 [&:hover_.card:not(:hover)]:flex-1 [&:hover_.card:hover]:flex-[2]">
          {/* Natural Card */}
          <div className="card relative bg-blue-500 rounded-3xl overflow-hidden h-96 flex-[2] transition-all duration-500 ease-in-out group">
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  {/* Magazine/Book mockup */}
                  <div className="w-32 h-40 bg-white rounded-lg shadow-2xl transform rotate-12 transition-transform duration-300">
                    <div className="w-full h-full bg-gradient-to-br from-pink-400 to-red-500 rounded-lg p-2 flex flex-col justify-center items-center">
                      <div className="text-white text-xs text-center mb-2">SAINT LAURENT</div>
                      <div className="w-full h-2/3 bg-white bg-opacity-20 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white">Natural</h2>
                <p className="text-sm text-blue-100 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  NATURE'S LIGHT STUDIO
                </p>
              </div>
            </div>
          </div>

          {/* Inspire Card */}
          <div className="card relative bg-gray-400 rounded-3xl overflow-hidden h-96 flex-1 transition-all duration-500 ease-in-out group">
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
          <div className="card relative bg-gray-300 rounded-3xl overflow-hidden h-96 flex-1 transition-all duration-500 ease-in-out group">
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
          <div className="card relative bg-gray-300 rounded-3xl overflow-hidden h-96 flex-1 transition-all duration-500 ease-in-out group">
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

      {/* Mobile Slider */}
      {isMobile && (
        <div className="max-w-xl mx-auto">
          {/* Slider Container */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {cards.map((card, index) => (
                <div key={card.id} className="w-full flex-shrink-0 px-4">
                  <div className={`relative ${card.bgColor} rounded-3xl overflow-hidden h-96 group`}>
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      {card.content}
                      <div>
                        <h2 className={`text-4xl font-bold ${card.textColor}`}>{card.title}</h2>
                        <p className={`text-sm ${card.descColor} uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-sm text-gray-500">
              {currentSlide + 1} / {cards.length}
            </span>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}