import React from 'react'
import HeaderNav from '../components/HeaderNav'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Freepics from '../components/Freepics'

const Home = () => {
  return (
    <>
      <div className='bg-slate-300 text-slate-800 dark:bg-slate-900 dark:text-slate-400'>
      <HeaderNav />
      <Banner />
      <Freepics/>
      <Footer />
      </div>
    </>
  )
}

export default Home
