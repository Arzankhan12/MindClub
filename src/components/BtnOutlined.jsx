import React from 'react'

const BtnOutlined = ({children}) => {
  return (
    <button className={`px-5 py-3 text-[3vw] md:text-[1vw] rounded-full font-[700] border-black border-[1px] text-black flex md:gap-1 items-center justify-between cursor-pointer  `}>
        {children}
    </button>
  )
}

export default BtnOutlined