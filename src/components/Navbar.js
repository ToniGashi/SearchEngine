import React from 'react'
import { Search } from './Search';
import { Link } from 'react-router-dom'
export const Navbar = ({isDark, setIsDark}) => {
  return (
    <div className="flex py-5 text-xl justify-between">
        <Link to='/'>
            <button className='py-3 text-xl px-5 font-bold dark:bg-gray-500 dark:text-gray-900'>Tongle</button>
        </Link>
        <Search />
        <button onClick={()=>{setIsDark((prev)=>!prev)}} className="text-lg dark:bg-gray-500 dark:text-gray-900 py-3 px-5 font-bold border drop-shadow-lg rounded hover:shadow-lg">{isDark ? '🌛' : '🌞'}</button>
    </div>
  );
}