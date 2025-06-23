import React from 'react'

const Button = ({children, active}) => {

  return (
    <button className={`px-3 md:px-4 py-2 text-[3vw] md:text-[1vw] rounded-full font-[700] ${active === true? "bg-[#FFFE81] text-black": "border-white border-[1px] text-white"} flex md:gap-1 items-center justify-between cursor-pointer  `}>
        {children}
    </button>
  )
}

export default Button