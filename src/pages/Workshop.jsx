import React, { useEffect, useRef } from "react";
import Button from "../components/Button";
import { IoPlayOutline } from "react-icons/io5";
import icon from "../assets/images/icon.png";
import dummyimg from "../assets/images/dummy.png";
// import naturalImg from '../assets/images/natural.png'
// import room from '../assets/images/room.png'
import workshopVid from "../assets/videos/workshop-vid.mp4";
import Footer from "../components/Footer";
import DayViewer from "../components/DayViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BtnOutlined from "../components/BtnOutlined";
import CardsGrid from "../components/CardsGrid";
import WorkshopOverview from "../components/WorkshopOverview";
import Mentor from "../components/Mentor";

gsap.registerPlugin(ScrollTrigger);

const Workshop = () => {

  return (
    <div className="w-screen overflow-hidden">
      <div className="workshop-landing-section relative w-full h-screen bg-blue-600 bg-cover bg-bottom">
        <video
          autoPlay
          playsInline
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover "
          src={workshopVid}
        ></video>
        <div className="absolute w-full md:w-[28vw] top-[25vh] md:top-[20vh] md:left-[10vw] gap-4 flex flex-col">
          <h1 className="font-[700] text-[7.5vw] text-center md:text-start md:text-5xl leading-[120%] text-[#ffffff]">
            Goa Edition Branding & Beyond
          </h1>
          <p className="text-md md:text-xl text-center md:text-start text-white font-[500] leading-[125%]">
            One beach, three skincare brands, 25 creative minds and four
            unforgettable days
          </p>
          <div className="flex gap-2 md:gap-4 justify-center md:justify-start">
            <Button active={true}>Secure Your Spot</Button>

            <Button active={false}>
              <IoPlayOutline /> Watch Trailer
            </Button>
          </div>
        </div>
        <div className="w-[99vw] md:w-[50vw] absolute bottom-[30px] left-1/2 -translate-x-1/2 rounded-[30px] bg-[#232323D9] flex justify-between items-center px-2 py-2">
          <img className="hidden md:block" src={icon} alt="" />

          <div className="flex gap-2 w-full justify-around md:w-fit">
            <Button>Download Bronchure</Button>
            <Button>Request Callback</Button>
            <Button active={true}>Book Now</Button>
          </div>
        </div>
      </div>

      <div className="about-the-workshop relative w-full py-20 overflow-hidden">
        <div className="w-full md:w-[500px] pb-20 md:pl-[3vw] px-8">
          <h1 className="md:text-4xl text-3xl text-center md:text-start font-[700]">
            About the Workshop
          </h1>
          <p className="md:text-xl text-lg mt-2 md:mt-4 text-center md:text-start font-[500]">
            A 4-day creative sprint to craft your own skincare brand
          </p>
        </div>

        <DayViewer />
      </div>

     {/* cards grid */}
     <CardsGrid/>
     {/* cards grid */}

      {/* WORKSHOP OVERVIEW SECTION  */}
      <WorkshopOverview/>
      {/* WORKSHOP OVERVIEW SECTION  */}

      <div className="request-section w-3/5 mx-auto flex justify-center items-center flex-col md:px-20 gap-7 mt-40 mb-40">
        <h2 className="text-3xl md:text-5xl font-[500] text-center leading-[8vw] md:leading-[4vw]">
          Confused about the workshop details? We've got you.
        </h2>

        <button className="px-5 py-3 cursor-pointer bg-gradient-to-r from-[#FF8C21] to-[#FFE040] rounded-full font-bold text-white text-md">
          Request Callback
        </button>
      </div>

      <div className="join-ws-section flex flex-col items-center">
        <div className="w-[95%] rounded-3xl bg-[#FFFE81] mx-auto flex flex-col justify-center items-center gap-10 py-16 ">
          <h1 className="text-4xl font-bold text-center md:text-start">
            Who can join this workshop?
          </h1>
          <div className="flex gap-2 p-2 w-[60%] gap-y-4 flex-wrap justify-center">
            <BtnOutlined>Graphic Designer</BtnOutlined>
            <BtnOutlined>UI/UX Designers</BtnOutlined>
            <BtnOutlined>Brand Owners</BtnOutlined>
            <BtnOutlined>Branding Students</BtnOutlined>
            <BtnOutlined>Creative Directors</BtnOutlined>
            <BtnOutlined>Brand Owners</BtnOutlined>
            <BtnOutlined>Anyone interested in learning branding</BtnOutlined>
          </div>
        </div>
        <button className="px-5 py-3 cursor-pointer bg-black rounded-full my-20 text-white text-md">
          Join the workshop
        </button>
      </div>

      <div className="hear-it py-20">
        <div className="w-full md:w-[35vw] pb-20 md:pl-[3vw] px-8">
          <h1 className="working-head md:text-4xl text-3xl text-center md:text-start font-[700]">
            Hear It From The Creators
          </h1>
          <p className="md:text-xl text-lg mt-2 md:mt-4 text-center md:text-start font-[500]">
            Unfiltered feedback from real participants who’ve been there.
          </p>
        </div>

        <div className="flex gap-5 px-10">
          <img className="w-1/4 h-[70vh]" src={dummyimg} alt="" />
          <img className="w-1/4 h-[70vh]" src={dummyimg} alt="" />
          <img className="w-1/4 h-[70vh]" src={dummyimg} alt="" />
          <img className="w-1/4 h-[70vh]" src={dummyimg} alt="" />
          <img className="w-1/4 h-[70vh]" src={dummyimg} alt="" />
        </div>
      </div>

     <Mentor/>

      <Footer />
    </div>
  );
};

export default Workshop;
