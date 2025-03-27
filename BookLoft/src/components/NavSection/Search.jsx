import React from 'react'

const Search = () => {
  return (
    <div>
        <div className="searchBar hidden sm:block ">
            <label className="input outline-none rounded-lg bg-slate-300 text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                <input type="search"  placeholder="Search" className='outline-none '/>
                <svg className="h-[1.25em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
            </label>
        </div>
      
    </div>
  )
}

export default Search
