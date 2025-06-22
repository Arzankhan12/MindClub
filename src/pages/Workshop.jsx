import React from 'react'
import Button from '../components/Button'
import { IoPlayOutline } from 'react-icons/io5'
import icon from '../assets/images/icon.png'
import dummyimg from '../assets/images/dummy.png'
import naturalImg from '../assets/images/natural.png'
import room from '../assets/images/room.png'
import workshopVid from '../assets/videos/workshop-vid.mp4'
import Footer from '../components/Footer'
import DayViewer from '../components/DayViewer'

const Workshop = () => {
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
            <div className='w-full md:w-[500px] pb-20 md:pl-[5vw] px-8'>
                <h1 className='md:text-4xl text-3xl text-center md:text-start font-[700]'>About the Workshop</h1>
                <p className='md:text-xl text-lg mt-2 md:mt-4 text-center md:text-start font-[500]'>
                    A 4-day creative sprint to craft your own skincare brand
                </p>
            </div>

            <DayViewer />
        </div>

        <div className='why-section w-full -mt-20 md:mt-20'>
            <div className='w-full md:w-[500px] pb-20 md:pl-[5vw] px-8'>
                <h1 className='md:text-4xl text-3xl text-center md:text-start font-[700]'>Why Goa?</h1>
                <p className='md:text-xl text-lg mt-2 md:mt-4 text-center md:text-start font-[500]'>
                    Goa gives you the space to think louder, live slower, and create deeper.
                </p>
            </div>

            <div className='w-full h-[370px] flex gap-4 justify-center items-center md:px-7'>
                <div className='flex-2 hover:flex-2 h-full transition-all ease-in-out duration-150'>
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

        <div className="workshop-overview w-full mt-30">
            <div className='w-full md:w-[500px] pb-20 md:pl-[5vw] px-8'>
                <h1 className='md:text-4xl text-3xl text-center md:text-start font-[700]'>Workshop Overview</h1>
                <p className='md:text-xl text-lg mt-2 md:mt-4 text-center md:text-start font-[500]'>
                    Goa gives you the space to think louder, live slower, and create deeper.
                </p>
            </div>
        </div>


        <Footer />
    </div>
  )
}

export default Workshop