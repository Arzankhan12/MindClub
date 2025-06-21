import React from 'react'
import Button from '../components/Button'
import { IoPlayOutline } from 'react-icons/io5'
import icon from '../assets/images/icon.png'
import dummyimg from '../assets/images/dummy.png'
import naturalImg from '../assets/images/natural.png'
import room from '../assets/images/room.png'
import workshopVid from '../assets/videos/workshop-vid.mp4'

const Workshop = () => {
  return (
    <div className='w-full'>
        <div className="workshop-landing-section relative mx-auto min-w-[1440px] h-screen bg-blue-600 \ bg-cover bg-bottom">
            <video autoPlay playsInline loop muted className='w-full h-full object-cover ' src={workshopVid}></video>
            <div className='absolute top-[160px] left-[179px] w-[433px] gap-4 flex flex-col'>
                <h1 className='font-[700] text-[45px] leading-[120%] text-[#ffffff]'>
                    Goa Edition Branding & Beyond
                </h1>
                <p className='text-[20px] text-white font-[500] leading-[125%]'>
                    One beach, three skincare brands, 25 creative minds and four unforgettable days
                </p>
                <div className='flex gap-4'>
                    <Button active={true}>
                        Secure Your Spot
                    </Button>
                    
                    <Button active={false}>
                        <IoPlayOutline /> Watch Trailer
                    </Button>
                </div>
            </div>
            <div className='w-[662px] h-[64px] absolute bottom-[30px] left-[389px] rounded-[30px] bg-[#232323D9] flex justify-between items-center px-2'>
                <img src={icon} alt="" />

                <div className='flex gap-2'>
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

        <div className="about-the-workshop relative min-w-[1440px] py-20 overflow-hidden">
            <div className='w-[421px] pb-20 pl-[50px]'>
                <h1 className='text-[39px] font-[700]'>About the workshop</h1>
                <p className='text-[20px] font-[500]'>
                    A 4-day creative sprint to craft your own skincare brand
                </p>
            </div>

            <div className='w-[1700px] flex whitespace-nowrap'>
                <div className='w-[20%] flex flex-col items-center justify-center gap-6'>
                    <h1 className='text-[35px] font-[700] text-[#BFBFBF]'>Think</h1>
                    <h1 className='text-[35px] font-[700]'>Shoot</h1>
                    <h1 className='text-[35px] font-[700] text-[#BFBFBF]'>Design</h1>
                    <h1 className='text-[35px] font-[700] text-[#BFBFBF]'>Create</h1>
                </div>
                <div className='w-[90%] relative whitespace-nowrap flex items-end'>
                    <div className='pl-20 w-[810px]'>
                        <img className='w-full h-full' src={dummyimg} alt="" />
                    </div>

                    <div className='pl-20 w-[539px] h-[40vh]'>
                        <img className='w-full h-full' src={dummyimg} alt="" />
                    </div>

                </div>
            </div>
        </div>

        <div className='why-section w-full mt-20 p-10'>
            <div className='w-[421px] pb-20 pl-[50px]'>
                <h1 className='text-[39px] font-[700]'>Why Goa?</h1>
                <p className='text-[20px] font-[500]'>
                    Goa gives you the space to think louder, live slower, and create deeper.
                </p>
            </div>

            <div className='w-full h-[370px] flex gap-4 justify-center items-center'>
                <div className='flex-1 hover:flex-2 h-full transition-all ease-in-out duration-150'>
                    <img className='w-full h-full rounded-3xl object-cover' src={naturalImg} alt="" />
                </div>
                <div className='flex-1 hover:flex-2 h-full transition-all ease-in-out duration-150'>
                    <img className='w-full h-full rounded-3xl object-cover' src={room} alt="" />
                </div>
                <div className='flex-1 hover:flex-2 h-full transition-all ease-in-out duration-150'>
                    <img className='w-full h-full rounded-3xl object-cover' src={naturalImg} alt="" />
                </div>
                <div className='flex-1 hover:flex-2 h-full transition-all ease-in-out duration-150'>
                    <img className='w-full h-full rounded-3xl object-cover' src={room} alt="" />
                </div>
            </div>
        </div>

        <div className="workshop-overview w-full mt-20 p-10">
            <div className='w-[421px] pb-20 pl-[50px]'>
                <h1 className='text-[39px] font-[700]'>About the workshop</h1>
                <p className='text-[20px] font-[500]'>
                    A 4-day creative sprint to craft your own skincare brand
                </p>
            </div>
        </div>
    </div>
  )
}

export default Workshop