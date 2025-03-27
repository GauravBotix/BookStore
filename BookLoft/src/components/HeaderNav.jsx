import React from 'react'
import { useState, useEffect } from 'react';
import Toggle from './NavSection/Toggle';
import Search from './NavSection/Search';
import DropDownSection from './NavSection/DropDownSection';
import { Link } from 'react-router-dom';
import Login from './Login';

const HeaderNav = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  useEffect(() => {
    const element = document.documentElement;
    if (theme === 'dark') {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const listitems = (
    <>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/Course'>Course</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/Contact'>Contact</Link></li>
    </>
  );
  
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return (
      
      <>
        <div className="relative shadow-slate-500">
          <div className={` max-w-screen-2xl container mx-auto md:px-20 px-4 flex justify-around bg-slate-300 text-slate-800 dark:bg-slate-900 dark:text-slate-400 text- md:text-2xl   shadow-sm pt-2 pb-2 font-bold min-w-screen scroll-smooth fixed top-0 left-0 right-0 z-50 ${
          sticky
            ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-700 dark:text-white duration-300 transition-all ease-in-out"
            : ""
        }`}>  
         
              <div className="navStart flex ">    
                  <DropDownSection listitems={listitems } />
              </div>
                
              <div className="navEnd flex justify-evenly gap-6 ">
                  <div className="navbar-center hidden lg:flex  bg-slate-300 text-slate-800 dark:bg-slate-900 dark:text-slate-400 text-xl md:text-2xl ">
                      <ul className="menu menu-horizontal px-1 ">{listitems} </ul>
                  </div>
                  <Search/>      
                  <Toggle setTheme={setTheme} theme={theme} />
                  
              
                <div >
                  
                  <span onClick={() => document.getElementById('my_modal_3').showModal()}
                    className="btn dark:bg-slate-300 dark:text-slate-800 bg-slate-900 text-slate-400 px-3 py-2 rounded-md duration-300 cursor-pointer"
                  >
                    <Login/>
                  </span>
                </div>
              </div>
            </div>
            </div>
    </>
  )
}
export default HeaderNav;

