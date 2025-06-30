import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Footer navigation bar with animated progress indicator under each label.
 *
 * Props:
 *  - items: string[]                   Labels to display
 *  - activeIndex: number              Currently active item index
 *  - progress: number                 Progress (0-1) across the active panel
 *  - onSelect: (index:number)=>void   Callback when a label is clicked
 */
const FooterNav = ({ items = [], activeIndex = 0, progress = 0, onSelect }) => {
  // refs for bars and dots
  const barRefs = useRef([]);
  const dotRefs = useRef([]);
  

  // Ensure the refs array has the right length
  // ensure refs arrays lengths
  if (barRefs.current.length !== items.length) {
    barRefs.current = Array(items.length)
      .fill()
      .map((_, i) => barRefs.current[i] || null);
  }
  if (dotRefs.current.length !== items.length) {
    dotRefs.current = Array(items.length)
      .fill()
      .map((_, i) => dotRefs.current[i] || null);
  }

  // Animate the width of each progress line and move the dot
  useEffect(() => {
    barRefs.current.forEach((bar, i) => {
      if (!bar) return;

      // Determine target width:
      //  - Completed items (before activeIndex) => 100%
      //  - Active item => progress * 100%
      //  - Upcoming items => 0%
      const progressValue = i < activeIndex ? 1 : i === activeIndex ? Math.min(1, Math.max(0, progress)) : 0;

      // get dot element
      const dot = dotRefs.current[i];
      // update bar and dot
      gsap.set(bar, { transformOrigin: 'left center' });

      if (i < activeIndex) {
        // completed
        gsap.set(bar, { scaleX: 1 });
        gsap.set(dot, { autoAlpha: 0 });
      } else if (i === activeIndex) {
        // active – animate
        gsap.to(bar, {
          scaleX: progressValue,
          duration: 0.35,
          ease: 'power1.out',
        });
        if (dot) {
          gsap.to(dot, {
            left: `${progressValue * 100}%`,
            duration: 0.35,
            ease: 'none',
            autoAlpha: 1,
          });
        }
      } else {
        // upcoming
        gsap.set(bar, { scaleX: 0 });
        gsap.set(dot, { autoAlpha: 0 });
      }
    });
  }, [activeIndex, progress]);

  return (
    <div className="fixed bottom-0 inset-x-0 z-30 border-t border-black flex justify-center items-center place-items-center h-20 backdrop-blur-md py-2 select-none">
      <div className="w-full px-8 flex justify-evenly items-center gap-8">
        {items.map((label, i) => (
          <button
            key={i}
            className={`${i === activeIndex ? 'flex' : 'hidden'} lg:flex items-center gap-2 text-sm md:text-base lg:text-sm xl:text-sm 2xl:text-base font-medium transition-colors duration-200 ${
              i === activeIndex ? 'text-black' : 'text-gray-500 hover:text-black'
            }`}
            onClick={() => onSelect && onSelect(i)}
          >
            <span>{label}</span>
            {/* render bar only for items before last */}
            {i < items.length - 1 && (
              <span className="relative w-40 md:w-60 lg:w-48 xl:w-48 2xl:w-72 h-[2px] bg-gray-300 overflow-visible">
                <span
                  ref={(el) => (barRefs.current[i] = el)}
                  className="absolute top-0 left-0 w-full h-full bg-black origin-left transform"
                />
                {/* dot */}
                <span
                  ref={(el) => (dotRefs.current[i] = el)}
                  className="absolute -top-1.5 w-3 h-3 rounded-full bg-white border-2 border-black opacity-0 transform -translate-x-1/2 z-10"
                  style={{ left: 0 }}
                />
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FooterNav;
