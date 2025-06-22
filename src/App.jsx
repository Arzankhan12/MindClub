import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Workshop from './pages/Workshop'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='font-[satoshi] overflow-hidden'>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/workshop' element={<Workshop />} />
      </Routes>
    </div>
  )
}

export default App