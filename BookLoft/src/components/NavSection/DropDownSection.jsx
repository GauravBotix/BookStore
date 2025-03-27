import React from 'react'
import { Link } from 'react-router-dom'
const DropDownSection = ({listitems}) => {
    
  return (
    <>
        <div className="dropdown bg-slate-300 text-slate-800  dark:bg-slate-800 dark:text-slate-200">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>  
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content  bg-slate-300 text-slate-800  dark:bg-slate-800 dark:text-slate-200 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {listitems}
            </ul>
        </div>
      <Link to='/' className='pt-2 pl-2 hover:text-gray-700 dark:hover:text-slate-500 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]'>BookLoft
      </Link>
      
    </>
  )
}

export default DropDownSection;
