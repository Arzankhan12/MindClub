import React from 'react'

const Button = ({children, active}) => {

  return (
    <button className={`px-[22px] py-[10px] rounded-full font-[700] ${active === true? "bg-[#FFFE81] text-black": "border-white border-[1px] text-white"} flex gap-1 items-center`}>
        {children}
    </button>
  )
}

export default Button