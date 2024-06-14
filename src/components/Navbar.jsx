import React from 'react'
import { FcNews } from "react-icons/fc";
import { Link, NavLink } from 'react-router-dom';
import categories from '../assets/categories';
import Navlinks from './Navlinks';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation()
  const pathname = location.pathname

  const isActive = (path)=>{
    return pathname?.split('/').pop() === path
  }


  return (
    <>
      <nav className='p-5 bg-zinc-800 shadow-lg md:flex md:items-center  text-white '>
        <div className='flex gap-3'>
          <div className="icon text-3xl"><FcNews /></div>
          
          <Link to={'/'}><span className='text-2xl font-[Poppins] cursor-pointer'>My News</span></Link>
        </div>

        <ul className='md:flex md:items-center md:mx-60'> 
          {categories.map((category, ind)=>{
            return(
              <Navlinks key={ind} category = {category} isActive={isActive(category)}/>
            )
          })}
      </ul>
      </nav>

    </>
  )
}

export default Navbar