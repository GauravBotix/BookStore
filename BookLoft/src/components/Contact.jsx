import React from 'react'
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-slate-300 text-slate-800 dark:bg-slate-900 dark:text-slate-400 h-screen">
      <p className='p-5'>Welcome to Contact section. Sorry No Contact info now, But soon be updated till now explore the home section and course secion.</p>
      <Link
        to="/"
        className=" inline-block  bg-pink-500 text-white px-2 py-2 hover:bg-pink-700 duration-300 mt-2 ml-5 rounded-lg w-[150px]  text-center"
      >
        Back
      </Link>
    </div>
  )
}

export default Contact
