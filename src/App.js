import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div className='  h-screen bg-black text-white px-10 '>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App