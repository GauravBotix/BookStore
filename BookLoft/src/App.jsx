import React from 'react'
import Home from './Home/Home';
import { Routes, Route } from 'react-router-dom';
import Courses from './Courses/Courses';
import Signup from './components/Signup';
import { Toaster } from 'react-hot-toast';
import About from './components/About';
import Contact from './components/Contact';


const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Course' element={<Courses />} />
        <Route path='/Signup' element={< Signup />} />
        <Route path='/About' element={< About />} />
        <Route path='/Contact' element={< Contact />} />
        

      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
