import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

const Home = () => {
  return (
    <div className='font-[satoshi]'>
        <h1 className='text-4xl font-bold bg-zinc-700'>
            HOME PAGE
        </h1>
        <Link className='px-2 py-10 text-blue-500 font-bold text-2xl' to={'/workshop'}>
            Workshop
        </Link>
    </div>
  )
}

export default Home