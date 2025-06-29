import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import dummyimg from "../assets/images/dummy.png";
import leftArrow from "/left-arrow.png";
import rightArrow from "/right-arrow.png";

const steps = [
  {
    title: "Think",
    label: "Day - 1",
    tag: "THINK",
    imgsrc:
      "https://images.unsplash.com/photo-1733226430566-6c956e111652?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Shoot",
    label: "Day - 2",
    tag: "SHOOT",
    imgsrc:
      "https://images.unsplash.com/photo-1601506521793-dc748fc80b67?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Design",
    label: "Day - 3",
    tag: "DESIGN",
    imgsrc:
      "https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Create",
    label: "Day - 4",
    tag: "CREATE",
    imgsrc:
      "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const DayViewer = () => {
  const swiperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="h-[70vh] flex gap-10 whitespace-nowrap">
      <div className="px-[8vw] h-full relative z-20 bg-white hidden md:flex flex-col items-center justify-center gap-6">
        {steps.map((step, idx) => (
          <h1
            key={idx}
            className={`cursor-pointer transition-all text-[35px] font-[700] duration-300 ${
              idx === activeIndex ? "text-black" : "text-[#BFBFBF]"
            }`}
            onClick={() => {
              const currentIndex = swiperRef.current.swiper.realIndex;
              const targetIndex = idx;
              const direction = targetIndex > currentIndex ? "next" : "prev";
              swiperRef.current.swiper.slideToLoop(
                targetIndex,
                undefined,
                direction === "next"
              );
            }}
          >
            {step.title}
          </h1>
        ))}
      </div>

      <div className="flex md:w-[90vw] w-full">
        <Swiper
          ref={swiperRef}
          onSlideChange={handleSlideChange}
          modules={[Navigation, EffectCreative]}
          slidesPerView="auto"
          centeredSlides={false}
          loop
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: false,
              translate: ["-120%", 0, -500],
              scale: 0.8,
            },
            next: {
              shadow: false,
              translate: ["120%", 200, -500],
              scale: 0.8,
            },
          }}
          className="w-full h-[50vh] md:h-[70vh]"
        >
          {steps.map((step, idx) => (
            <SwiperSlide
              key={idx}
              className="!w-[70vw] md:!w-[60vw] !h-full bg-[#e5e5e5] rounded-2xl relative flex justify-end items-end"
            >
              <img
                src={`${step.imgsrc}`}
                alt={`Step ${idx}`}
                className="object-cover w-full h-full rounded-2xl"
              />
              <div className="absolute top-4 left-4 text-white text-sm font-semibold">
                {step.label}
              </div>
              <div className="absolute top-4 right-4 text-white text-sm font-semibold">
                {step.tag}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute top-68 md:top-72 right-3 md:right-20 z-50 flex gap-2">
          <button className="cursor-pointer prev-btn w-8 h-8 rounded-full border border-black text-sm flex items-center justify-center">
            <img src={leftArrow} alt="Previous" />
          </button>
          <button className="cursor-pointer next-btn w-8 h-8 rounded-full border border-black text-sm flex items-center justify-center">
            <img src={rightArrow} alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DayViewer;
