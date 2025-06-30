import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
 
const slides = [
  {
    title: 'Think',
    imgSrc: 'https://images.unsplash.com/photo-1592593402094-15dbb37064de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxmb3Jlc3Rmb3Jlc3R8ZW58MHx8fHwxNzUwOTQyOTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'skincare ideas',
  },
  {
    title: 'Shoot',
    imgSrc: 'https://images.unsplash.com/photo-1511497584788-876760111969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxmb3Jlc3R8ZW58MHx8fHwxNzUwOTQyMTUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'skincare photography',
  },
  {
    title: 'Design',
    imgSrc: 'https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxmb3Jlc3R8ZW58MHx8fHwxNzUwOTQyMTUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'skincare branding',
  },
  {
    title: 'Create',
    imgSrc: 'https://images.unsplash.com/photo-1592593402094-15dbb37064de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxmb3Jlc3Rmb3Jlc3R8ZW58MHx8fHwxNzUwOTQyOTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'skincare creation',
  },
];
 
const TWEEN_FACTOR = 1.8;
 
function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tweenValues, setTweenValues] = useState([]);
 
  const scrollTo = useCallback(
    (index) => {
      if (!emblaApi || index === selectedIndex) return;
      emblaApi.scrollTo(index, undefined, -1);
    },
    [emblaApi, selectedIndex]
  );
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
 
  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);
 
  const onScroll = useCallback(() => {
    if (!emblaApi) return;
 
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
 
    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;
 
      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) {
              diffToTarget = scrollSnap - (1 + scrollProgress);
            }
            if (sign === 1) {
              diffToTarget = scrollSnap + (1 - scrollProgress);
            }
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return Math.max(0, tweenValue);
    });
    setTweenValues(styles);
  }, [emblaApi]);
 
  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    onScroll();
    emblaApi.on('select', onSelect);
    emblaApi.on('scroll', onScroll);
    emblaApi.on('reInit', onScroll);
  }, [emblaApi, onSelect, onScroll]);
 
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        scrollPrev();
      } else if (event.key === 'ArrowRight') {
        scrollNext();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [scrollPrev, scrollNext]);
 
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:gap-12">
      <div className="hidden md:flex flex-col items-center justify-center gap-8 md:col-span-1">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`text-center text-xl font-semibold transition-colors duration-300 md:text-3xl ${
              selectedIndex === index
                ? 'text-black'
                : 'text-gray-500 hover:text-black/80'
            }`}
          >
            {slide.title}
          </button>
        ))}
      </div>
      <div className="relative col-span-1 md:col-span-3">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-end -ml-2">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="relative flex-[0_0_75%] pl-2 md:flex-[0_0_80%]"
              >
                <div
                  className="relative h-full origin-bottom transition-transform duration-100 ease-in-out"
                  style={{
                    transform: `scaleY(${tweenValues[index] || 0})`,
                  }}
                >
                  <div
                    className="relative aspect-[3/4] md:aspect-auto md:h-[550px] overflow-hidden rounded-3xl"
                  >
                    <img
                      src={slide.imgSrc}
                      alt={slide.title}
                      className="object-cover w-full h-full"
                      data-ai-hint={slide.dataAiHint}
                    />
                    {selectedIndex === index && (
                      <>
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute bottom-4 right-4 text-lg font-bold uppercase tracking-wider text-white md:bottom-auto md:top-4 md:left-4">
                          Day - {index + 1}
                        </div>
                        <div className="absolute bottom-4 left-4 text-lg font-bold tracking-widest text-white md:top-4 md:left-auto md:right-4">
                          {slide.title}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute z-10 flex space-x-2 top-0 right-2 md:top-4 md:right-4">
          <button
            onClick={scrollPrev}
            className="h-9 w-9 rounded-full bg-white flex items-center justify-center border border-gray-400 text-gray-400 md:h-11 md:w-11"
          >
            <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
            <span className="sr-only">Previous slide</span>
          </button>
          <button
            onClick={scrollNext}
            className="h-9 w-9 rounded-full bg-white flex items-center justify-center border border-gray-400 text-gray-400 md:h-11 md:w-11"
          >
            <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
            <span className="sr-only">Next slide</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;