import React from 'react'
import HeaderNav from '../components/HeaderNav'
import Footer from '../components/Footer';
import Course from '../components/Course';

const Home = () => {
  return (
    <>
      <div className='bg-slate-300 text-slate-800 dark:bg-slate-900 dark:text-slate-400'>
      <HeaderNav />
      <div className="min-h-screen">
      <Course/>
      </div>
      <Footer />
      </div>
    </>
  )
}

export default Home
