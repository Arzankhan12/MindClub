import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/mindsclub-logo.png'

const Footer = () => {
  return (
    <div className='w-full h-[65vh] flex flex-col bg-[#25262B] text-white'>
        <div className='w-full h-[90%] flex justify-between items-center px-20'>
            <div>
                <div>
                    <img src={logo} alt="" />
                    <p className='text-lg'>A space to grow, together!</p>
                </div>
            </div>
            <div className='flex gap-30'>
                <div className='flex flex-col gap-3'>
                    <h2>Explore</h2>
                    <Link className='text-[#BCBCBC]' to>Workshops</Link>
                    <Link className='text-[#BCBCBC]' to>Shop</Link>
                    <Link className='text-[#BCBCBC]' to>The One</Link>
                </div>
                <div className='flex flex-col gap-3'>
                    <h2>Legal & Policies</h2>
                    <Link className='text-[#BCBCBC]' to>Privacy Policy</Link>
                    <Link className='text-[#BCBCBC]' to>Refund Policy</Link>
                    <Link className='text-[#BCBCBC]' to>Shipping Policy</Link>
                    <Link className='text-[#BCBCBC]' to>Terms & Conditions</Link>
                </div>
                <div className='flex flex-col gap-3'>
                    <h2>Connect With Us</h2>
                    <Link className='text-[#BCBCBC]' to>Instagram</Link>
                    <Link className='text-[#BCBCBC]' to>Youtube</Link>
                    <Link className='text-[#BCBCBC]' to>Facebook</Link>
                </div>
                <div className='flex flex-col gap-3'>
                    <h2>Contact</h2>
                    <Link className='text-[#BCBCBC]' to>Email: hello@brand.com</Link>
                    <Link className='text-[#BCBCBC]' to>Phone: +91 98765 43210</Link>
                </div>
            </div>
        </div>
        <div className='w-full h-[15%] flex justify-center items-center  border-t-[1px] border-white'>
            <p className='text-white'>
                @copyright 2025 all right reserved
            </p>
        </div>
    </div>
  )
}

export default Footer