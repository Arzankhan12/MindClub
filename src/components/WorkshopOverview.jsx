import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PiAirplaneTiltFill } from 'react-icons/pi';
import FooterNav from './FooterNav';
import CardLayout from './CardLayout';
import './WorkshopOverview.css';

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------
   Dummy image URLs – swap for local assets if available
-------------------------------------------------------------------*/
// Group slides by day for clarity and backend compatibility
const slidesByDay = [
  {
    day: 1,
    slides: [
      {
        title: 'DAY ONE',
        subtitle: 'INTRO',
        cards: [
          {
            img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=60',
            text: 'Welcome to the workshop! Get ready for an amazing experience.',
          },
          {
            img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=60',
            text: 'Meet your fellow participants and hosts.',
          },
        ],
      },
      {
        title: 'DAY ONE',
        subtitle: 'ARRIVAL',
        cards: [
          {
            img: 'https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            text: 'Be greeted with a refreshing welcome drink.',
          },
          {
            img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=60',
            text: 'Settle into your cozy room.',
          },
        ],
      },
    ]
  },
  {
    title: 'DAY TWO',
    subtitle: 'EXPLORATION',
    cards: [
      {
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=60',
        text: 'Morning yoga and meditation session.',
      },
      {
        img: 'https://www.gokitetours.com/wp-content/uploads/2024/09/goa-tour-packages-from-india.webp',
        text: 'Local culture and history tour.',
      },
    ],
  },
  {
    title: 'DAY THREE',
    subtitle: 'WORKSHOP',
    cards: [
      {
        img: 'https://img.freepik.com/free-photo/umbrella-chair_74190-2383.jpg',
        text: 'Creative brainstorming session.',
      },
      {
        img: 'https://img.freepik.com/premium-photo/beach-goa-india_78361-4717.jpg?semt=ais_hybrid&w=740',
        text: 'Hands-on workshop activities.',
      },
    ],
  },
  {
    title: 'DAY FOUR',
    subtitle: 'ADVENTURE',
    cards: [
      {
        img: 'https://t3.ftcdn.net/jpg/01/40/51/56/360_F_140515612_0MMpqpsIvs6xno5YXmPVy9FUmZ4uLnFB.jpg',
        text: 'Outdoor adventure activities.',
      },
      {
        img: 'https://t3.ftcdn.net/jpg/00/77/00/26/360_F_77002615_Gl1Hk6qZpi2xCAlX8EUTRLBqC4ei6QfC.jpg',
        text: 'Team building exercises.',
      },
    ],
  },
];

// Gradient / background for each slide (match order)
const backgrounds = [
  'linear-gradient(135deg,#FFF675 50%,#FFEB88 100%)', // Day 1 Intro
  'linear-gradient(135deg,#FFF675 50%,#FFEB88 100%)', // Day 1 Arrival
  'linear-gradient(135deg,#ffd6e8 50%,#ffb3d1 100%)', // Day 2
  'linear-gradient(135deg,#c5f6ff 50%,#a0e1ff 100%)', // Day 3
  'linear-gradient(135deg,#d4f4c5 50%,#b7e8a6 100%)', // Day 4
];


// Process slides to group by day
const processSlides = () => {
  const processed = [];
  
  slidesByDay.forEach(dayObj => {
    if (dayObj.slides) {
      // For day 1 with multiple slides
      processed.push({
        ...dayObj.slides[0], // Use first slide as base
        isGrouped: true,
        slides: dayObj.slides
      });
    } else {
      // For other days with single slide
      processed.push({
        ...dayObj,
        isGrouped: false
      });
    }
  });
  
  return processed;
};

const slides = processSlides();

const WorkshopOverview = () => {
  const containerRef = useRef(null);  // pin wrapper
  const trackRef = useRef(null);      // horizontal track
  const [slidesState] = useState(slides);
  const panels = slidesState.reduce((total, slide) => 
    total + (slide.isGrouped ? slide.slides.length : 1), 0);

  const [activeIdx, setActiveIdx] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Calculate progress percentage for animations
  const knobContainerRef = useRef(null);
  const knobX = useMotionValue((activeIdx / Math.max(1, panels - 1)) * 72);
  const lastDragIdx = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  
  const progressPercent = (activeIdx + scrollProgress) / (panels - 1);
  
  // Find the current slide based on active index
  const getCurrentSlide = (idx = activeIdx) => {
    let currentIdx = 0;
    for (const slide of slidesState) {
      if (slide.isGrouped) {
        if (currentIdx + slide.slides.length > idx) {
          return {
            slide,
            slideIndex: idx - currentIdx,
            isGrouped: true
          };
        }
        currentIdx += slide.slides.length;
      } else {
        if (currentIdx === idx) {
          return { slide, isGrouped: false };
        }
        currentIdx += 1;
      }
    }
    return null;
  };
  
  const currentSlide = getCurrentSlide();

  // Sync knob position with active index when not dragging
  useEffect(() => {
    if (!isDragging) {
      knobX.set((activeIdx / Math.max(1, panels - 1)) * 72);
    }
  }, [activeIdx, panels, isDragging, knobX]);

  // Clean up any existing resize listeners
  useEffect(() => {
    return () => {
      // Cleanup any potential listeners when component unmounts
      window.removeEventListener('resize', () => {});
    };
  }, []);

  // Refs to track scroll state without triggering re-renders
  const scrollState = useRef({
    lastIdx: 0,
    lastProgress: 0,
    rafId: null,
    isScrolling: false
  });

  // Update the active index and scroll progress
  const updateActiveState = useCallback((rawProgress) => {
    const newIdx = Math.min(panels - 1, Math.floor(rawProgress * panels));
    const slideProgress = (rawProgress * panels) % 1;
    
    // Only update state if values have changed significantly
    if (newIdx !== scrollState.current.lastIdx) {
      scrollState.current.lastIdx = newIdx;
      setActiveIdx(newIdx);
    }
    
    if (Math.abs(slideProgress - scrollState.current.lastProgress) > 0.001) {
      scrollState.current.lastProgress = slideProgress;
      setScrollProgress(slideProgress);
    }
  }, [panels]);

  /* ---------- GSAP ScrollTrigger for pin + scroll ---------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Calculate the total width to move (100vw per panel)
      const moveDistance = (panels - 1) * 100;
      
      // Set initial position
      gsap.set(trackRef.current, { x: 0 });
      
      // Main animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${moveDistance}%`,
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (scrollState.current.rafId) {
              cancelAnimationFrame(scrollState.current.rafId);
            }
            
            scrollState.current.rafId = requestAnimationFrame(() => {
              updateActiveState(self.progress);
            });
          },
          onEnter: () => {
            scrollState.current.isScrolling = true;
          },
          onLeave: () => {
            scrollState.current.isScrolling = false;
          },
          onEnterBack: () => {
            scrollState.current.isScrolling = true;
          },
          onLeaveBack: () => {
            scrollState.current.isScrolling = false;
          }
        }
      });
      
      // Add the horizontal movement animation
      tl.to(trackRef.current, {
        x: `-${moveDistance}vw`,
        ease: 'none'
      }, 0);
      
      // Initial state update
      updateActiveState(0);
      
      // Cleanup function
      return () => {
        if (scrollState.current.rafId) {
          cancelAnimationFrame(scrollState.current.rafId);
        }
        if (tl.scrollTrigger) {
          tl.scrollTrigger.kill();
        }
        tl.kill();
      };
    }, containerRef);
    
    return () => {
      ctx.revert();
    };
  }, [panels, updateActiveState]);

  // Mouse event handlers for dragging functionality have been removed as they're not being used

  return (
    <motion.section
      ref={containerRef}
      className="relative w-full overflow-hidden"
      initial={{ background: backgrounds[0] }}
      animate={{ background: backgrounds[activeIdx] }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Overlay header & footer (pinned with section) */}
      <div className="pointer-events-none absolute inset-0 w-full h-full flex flex-col justify-between z-10">
        {/* Header */}
        <div className="flex justify-between py-12 px-8 md:px-16">
          {/* dynamic heading based on active slide */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
              {currentSlide.slide.title}
              {currentSlide.isGrouped && `: ${currentSlide.slide.slides[currentSlide.slideIndex].subtitle}`}
            </h1>
            <h2 className="flex items-center gap-2 text-sm sm:text-base md:text-xl">
              <PiAirplaneTiltFill /> 
              {currentSlide.isGrouped 
                ? `Day ${slidesState.findIndex(s => s.title === currentSlide.slide.title) + 1} - ${currentSlide.slide.slides[currentSlide.slideIndex].subtitle}`
                : currentSlide.slide.subtitle}
            </h2>
          </div>
          {/* Days Pagination */}
          <div className="flex gap-2 md:gap-4 items-center mr-2">
            {slidesState.map((slide, idx) => (
              <div
                key={idx}
                className={`w-5 h-5 md:w-8 md:h-8 rounded-full border border-black flex items-center justify-center transition-all duration-200 
                  ${getCurrentSlide(activeIdx)?.slide.title === slide.title ? 'bg-black text-white' : 'bg-transparent text-black'}`}
                style={{ fontSize: '1rem', fontWeight: 500 }}
              >
                {getCurrentSlide(activeIdx)?.slide.title === slide.title ? idx + 1 : ''}
              </div>
            ))}
          </div>
        </div>

        {/* ----- derive day-level info ----- */}
        {(() => {
          const dayItems = slidesState.map((slide, idx) => {
              if (slide.isGrouped) {
                return slide.slides?.[0]?.subtitle || slide.title || `Day ${idx + 1}`;
              }
              return slide.subtitle || slide.title || `Day ${idx + 1}`;
            });

          // helper to map panel index -> day index & progress within day
          const getDayInfo = (panelIdx, panelProgress) => {
            let acc = 0;
            for (let di = 0; di < slidesState.length; di++) {
              const slide = slidesState[di];
              const panelsInDay = slide.isGrouped ? slide.slides.length : 1;
              if (panelIdx < acc + panelsInDay) {
                const progressInDay = (panelIdx - acc + panelProgress) / panelsInDay;
                return { dayIdx: di, progressInDay };
              }
              acc += panelsInDay;
            }
            return { dayIdx: 0, progressInDay: 0 };
          };

          const { dayIdx, progressInDay } = getDayInfo(activeIdx, scrollProgress);

          return (
            <FooterNav
              items={dayItems}
              activeIndex={dayIdx}
              progress={progressInDay}
              onSelect={(dayTarget) => {
                // compute first panel index of that day
                let panelStart = 0;
                for (let i = 0; i < dayTarget; i++) {
                  panelStart += slidesState[i].isGrouped ? slidesState[i].slides.length : 1;
                }
                setActiveIdx(panelStart);
                setScrollProgress(0);
                gsap.to(trackRef.current, {
                  x: -panelStart * window.innerWidth,
                  duration: 0.6,
                  ease: 'power2.inOut',
                });
              }}
            />
          );
        })()}
      </div>

      {/* Horizontal track */}
      <motion.div
        ref={trackRef}
        className="flex h-screen will-change-transform"
        style={{ 
          width: `${panels * 100}vw`,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transformStyle: 'preserve-3d'
        }}
      >
        {slidesState.flatMap((slide, idx) => {
          if (slide.isGrouped) {
            return slide.slides.map((groupedSlide, groupIdx) => (
              <div key={`${idx}-${groupIdx}`} className="w-full md:w-[50%] h-full flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-0 md:gap-16 p-4 md:p-20">
                {groupedSlide.cards.map((c, ci) => (
                  <CardLayout
                    key={ci}
                    img={c.img}
                    text={c.text}
                    variant={c.variant || (ci === 0 ? 'A' : 'B')}
                    className={c.className ?? ''}
                    style={c.style}
                  />
                ))}
              </div>
            ));
          }
          return (
            <div key={idx} className="w-full md:w-[40%] h-full flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-0 md:gap-16 p-4 md:p-20">
              {slide.cards.map((c, ci) => (
                <CardLayout
                  key={ci}
                  img={c.img}
                  text={c.text}
                  variant={c.variant || (ci === 0 ? 'A' : 'B')}
                  className={c.className ?? ''}
                  style={c.style}
                />
              ))}
            </div>
          );
      })} 
    </motion.div>

    {/* Drag hint */}
    <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-start justify-center gap-2">
      <span className="text-sm">Drag ➜</span>
      <div ref={knobContainerRef} className="w-27 max-md:w-24 h-6 lg:h-[34px] bg-white rounded-full flex items-center justify-start pl-1 custom-shadow">
        <motion.div
          drag="x"
          dragConstraints={knobContainerRef}
          dragElastic={0}
          layoutId="drag-knob"
          style={{ x: knobX, pointerEvents: 'auto' }}
          onDrag={() => {
            const ratio = knobX.get() / 72;
            const idx = Math.round(ratio * (panels - 1));
            if (idx !== lastDragIdx.current) {
              lastDragIdx.current = idx;
              setActiveIdx(idx);
              setScrollProgress(0);
              gsap.to(trackRef.current, {
                x: -idx * window.innerWidth,
                duration: 0.3,
                ease: 'power2.inOut',
              });
            }
          }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          className="w-4 h-4 lg:w-7 lg:h-7 rounded-full cursor-pointer custom-org"
        />
        </div>
      </div>
    </motion.section>
  );
};

export default WorkshopOverview;
