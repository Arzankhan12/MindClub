import React, { useEffect, useRef } from 'react'
import Button from '../components/Button'
import { IoPlayOutline } from 'react-icons/io5'
import icon from '../assets/images/icon.png'
import dummyimg from '../assets/images/dummy.png'
import naturalImg from '../assets/images/natural.png'
import room from '../assets/images/room.png'
import workshopVid from '../assets/videos/workshop-vid.mp4'
import Footer from '../components/Footer'
import DayViewer from '../components/DayViewer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PiAirplaneTiltFill } from 'react-icons/pi'
import circularKnots from '../assets/images/circular-knotted.png'
import BtnOutlined from '../components/BtnOutlined'


gsap.registerPlugin(ScrollTrigger)

const Workshop = () => {
    const hzScrollRef = useRef();
    const hzSectionRef = useRef();

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(hzScrollRef.current, {
                x: '-201vw',
                ease: "none",
                delay: 2,
                scrollTrigger: {
                    trigger: hzSectionRef.current,
                    start: "top top",
                    end: "top -400%",
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                }
            });
        });
        return () => ctx.revert();
    }, []);

  return (
    <div className='w-screen overflow-hidden'>
        <div className="workshop-landing-section relative w-full h-screen bg-blue-600 bg-cover bg-bottom">
            <video autoPlay playsInline loop muted className='absolute top-0 left-0 w-full h-full object-cover ' src={workshopVid}></video>
            <div className='absolute w-full md:w-[28vw] top-[25vh] md:top-[20vh] md:left-[10vw] gap-4 flex flex-col'>
                <h1 className='font-[700] text-[7.5vw] text-center md:text-start md:text-5xl leading-[120%] text-[#ffffff]'>
                    Goa Edition Branding & Beyond
                </h1>
                <p className='text-md md:text-xl text-center md:text-start text-white font-[500] leading-[125%]'>
                    One beach, three skincare brands, 25 creative minds and four unforgettable days
                </p>
                <div className='flex gap-2 md:gap-4 justify-center md:justify-start'>
                    <Button active={true}>
                        Secure Your Spot
                    </Button>
                    
                    <Button active={false}>
                        <IoPlayOutline /> Watch Trailer
                    </Button>
                </div>
            </div>
            <div className='w-[99vw] md:w-[50vw] absolute bottom-[30px] left-1/2 -translate-x-1/2 rounded-[30px] bg-[#232323D9] flex justify-between items-center px-2 py-2'>
                <img className='hidden md:block' src={icon} alt="" />

                <div className='flex gap-2 w-full justify-around md:w-fit'>
                    <Button>
                        Download Bronchure
                    </Button>
                    <Button>
                        Request Callback
                    </Button>
                    <Button active={true}>
                        Book Now
                    </Button>
                </div>
            </div>
        </div>
    
        <div className="about-the-workshop relative w-full py-20 overflow-hidden">
            <div className='w-full md:w-[500px] pb-20 md:pl-[3vw] px-8'>
                <h1 className='md:text-4xl text-3xl text-center md:text-start font-[700]'>About the Workshop</h1>
                <p className='md:text-xl text-lg mt-2 md:mt-4 text-center md:text-start font-[500]'>
                    A 4-day creative sprint to craft your own skincare brand
                </p>
            </div>

            <DayViewer />
        </div>

        <div className='why-section w-full -mt-20 md:mt-20'>
            <div className='w-full md:w-[500px] pb-20 md:pl-[3vw] px-8'>
                <h1 className='md:text-4xl text-3xl text-center md:text-start font-[700]'>Why Goa?</h1>
                <p className='md:text-xl text-lg mt-2 md:mt-4 text-center md:text-start font-[500]'>
                    Goa gives you the space to think louder, live slower, and create deeper.
                </p>
            </div>

            <div className='w-full h-[370px] flex gap-4 justify-center items-center md:px-7'>
                <div className='flex-1 hover:flex-2 h-full transition-all ease-in-out duration-150'>
                    <img className='w-full h-full rounded-3xl object-cover' src={naturalImg} alt="" />
                </div>
                <div className='flex-1 hover:flex-2 h-full transition-all ease-in-out duration-150'>
                    <img className='w-full h-full rounded-3xl object-cover' src={room} alt="" />
                </div>
                <div className='flex-1 hover:flex-2 md:block hidden h-full transition-all ease-in-out duration-150'>
                    <img className='w-full h-full rounded-3xl object-cover' src={naturalImg} alt="" />
                </div>
                <div className='flex-1 md:block hidden hover:flex-2 h-full transition-all ease-in-out duration-150'>
                    <img className='w-full h-full rounded-3xl object-cover' src={room} alt="" />
                </div>
            </div>
        </div>

        <div className="workshop-overview w-full mt-30" >
            <div className='w-full md:w-[500px] pb-20 md:pl-[3vw] px-8'>
                <h1 className='working-head md:text-4xl text-3xl text-center md:text-start font-[700]'>Workshop Overview</h1>
                <p className='md:text-xl text-lg mt-2 md:mt-4 text-center md:text-start font-[500]'>
                    Goa gives you the space to think louder, live slower, and create deeper.
                </p>
            </div>

            <div ref={hzSectionRef} className='relative w-full h-screen overflow-hidden'>

                <div className='w-screen h-screen flex flex-col justify-between fixed left-0 top-0 z-20 pointer-events-none'>
                    <div className='scroll-top flex justify-between py-12 px-16'>
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-5xl font-bold'>
                                DAY ONE
                            </h1>
                            <h2 className='flex items-center text-lg gap-2 '>
                                <PiAirplaneTiltFill /> The Arrival
                            </h2>
                        </div>
                        <img className='object-contain' src={circularKnots} alt="" />
                    </div>
                    <div className='scroll-btm h-20 border-1 border-black flex justify-around items-center font-[500]'>
                        <h2>ARRIVAL</h2>
                        <h2>THINK</h2>
                        <h2>SHOOT</h2>
                        <h2>DESIGN & CREATE</h2>
                    </div>
                </div>

                <div ref={hzScrollRef} className='w-[400vw] h-full flex'>
                    <div className='w-[100vw] h-full bg-gradient-to-r from-[#FFFE81] to-[#FFEE81]'></div>
                    <div className='w-[100vw] h-full bg-gradient-to-r from-[#FFEE81] to-[#FFC265]'></div>
                    <div className='w-[100vw] h-full bg-gradient-to-r from-[#226BB8] to-[#094382]'></div>
                </div>
            </div>
        </div> 

        <div className='request-section w-3/5 mx-auto flex justify-center items-center flex-col px-20 gap-7 mt-40 mb-40'>
            <h2 className='text-5xl font-[500] text-center leading-[4vw]'>
                Confused about the workshop details? We've got you.
            </h2>
            
            <button className='px-5 py-3 cursor-pointer bg-gradient-to-r from-[#FF8C21] to-[#FFE040] rounded-full font-bold text-white text-md'>
                Request Callback
            </button>
        </div>

        <div className='join-ws-section flex flex-col items-center'>
            <div className="w-[95%] rounded-3xl bg-[#FFFE81] mx-auto flex flex-col justify-center items-center gap-10 py-16 ">
                <h1 className='text-4xl font-bold'>
                    Who can join this workshop?
                </h1>
                <div className='flex gap-2 p-2 w-[60%] gap-y-4 flex-wrap justify-center'>
                    <BtnOutlined>Graphic Designer</BtnOutlined>
                    <BtnOutlined>UI/UX Designers</BtnOutlined>
                    <BtnOutlined>Brand Owners</BtnOutlined>
                    <BtnOutlined>Branding Students</BtnOutlined>
                    <BtnOutlined>Creative Directors</BtnOutlined>
                    <BtnOutlined>Brand Owners</BtnOutlined>
                    <BtnOutlined>Anyone interested in learning branding</BtnOutlined>
                </div>
            </div>
            <button className='px-5 py-3 cursor-pointer bg-black rounded-full my-20 text-white text-md'>
                Join the workshop
            </button>
        </div>


        <div className='hear-it py-20'>
            <div className='w-full md:w-[35vw] pb-20 md:pl-[3vw] px-8'>
                <h1 className='working-head md:text-4xl text-3xl text-center md:text-start font-[700]'>Hear It From The Creators</h1>
                <p className='md:text-xl text-lg mt-2 md:mt-4 text-center md:text-start font-[500]'>
                    Unfiltered feedback from real participants who’ve been there.
                </p>
            </div>

            <div className='flex gap-5 px-10'>
                <img className='w-1/4 h-[70vh]' src={dummyimg} alt="" />
                <img className='w-1/4 h-[70vh]' src={dummyimg} alt="" />
                <img className='w-1/4 h-[70vh]' src={dummyimg} alt="" />
                <img className='w-1/4 h-[70vh]' src={dummyimg} alt="" />
                <img className='w-1/4 h-[70vh]' src={dummyimg} alt="" />
            </div>
        </div>


        <div className='mentor px-10'>
            <div className='w-full md:w-[40vw] pb-20 md:pl-[3vw] px-8'>
                <h1 className='working-head md:text-4xl text-3xl text-center md:text-start font-[700]'>Your Mentor for This Journey</h1>
                <p className='md:text-xl text-lg mt-2 md:mt-4 text-center md:text-start font-[500] pr-26'>
                    Bringing clarity, creativity, and real experience to the table.
                </p>
            </div>

            <div className='flex'>
                <img src={dummyimg} alt="" />
                <div className='flex flex-col items-start '>
                    <h2>Rajeev Mehta</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <button className='px-5 py-3 cursor-pointer bg-black rounded-full my-20 text-white text-md'>
                        Join the workshop
                    </button>
                </div>
            </div>
        </div>
        



        <Footer />
    </div>
  )
}

export default Workshop