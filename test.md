import React from 'react'
import dummyimg from '../assets/images/dummy.png'

const DayViewer = () => {
  return (
    <div className='h-[70vh] flex mt-10 gap-10 whitespace-nowrap'>
        <div className='px-[8vw]  flex flex-col items-center justify-center gap-6'>
            <h1 className='text-[35px] font-[700] text-[#BFBFBF]'>Think</h1>
            <h1 className='text-[35px] font-[700]'>Shoot</h1>
            <h1 className='text-[35px] font-[700] text-[#BFBFBF]'>Design</h1>
            <h1 className='text-[35px] font-[700] text-[#BFBFBF]'>Create</h1>
        </div>
        <div className='gap-20 flex items-end'>
            <div className='inline w-200'>
                <img src={dummyimg} alt="" />
            </div>
            <div className='inline w-150'>
                <img src={dummyimg} alt="" />
            </div>
            <div className='inline w-150'>
                <img src={dummyimg} alt="" />
            </div>
            <div className='inline w-150'>
                <img src={dummyimg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default DayViewer