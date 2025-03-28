import React from 'react'
import bannerImage from './bannerImage.png';
const Banner = () => {
  return (
      <>
        <div className="fullbanner flex justify-evenly md:flex-row flex-col max-w-screen-2xl container mx-auto md:px-20 px-4 ">
              
        <div className="cont order-2 md:order-1 mt-25">
            <div className="sideProfile max-w-[600px]  space-y-8">
                <h1 className=' text-2xl md:text-4xl font-bold '>Hello, welcomes here to learn something <span className='text-red-400'>new everyday!!!</span>
                  </h1>
                <p className="text-sm md:text-xl">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                    et totam. Tempora amet atque expedita, quae corrupti totam sed
                    pariatur corporis at veniam est voluptas animi!
                </p>
            
                <label className="input input-bordered flex items-center gap-2 w-full bg-slate-300 text-slate-800  dark:bg-slate-800 dark:text-slate-200 h-12 rounded-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4 opacity-100"
                        >
                        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="email" className="grow " placeholder="Email" />
                </label>
              </div> 
              <button className="btn mt-6 btn-secondary">Get Started</button>
              </div>
              
            <div className="bannerProfile  order-1 md:order-2 ">
                <img src={bannerImage} className="h-[500px]"  alt=""/>
            </div>
        </div>
      
    </>
  )
}

export default Banner;
