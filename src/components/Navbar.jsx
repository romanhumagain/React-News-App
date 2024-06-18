import React, {useState} from 'react'
import { FcNews } from "react-icons/fc";
import { Link, NavLink } from 'react-router-dom';
import categories from '../assets/categories';
import Navlinks from './Navlinks';
import { useLocation } from 'react-router-dom';
import { useSearch } from '../contexts/useSearch';


const Navbar = () => {
  const location = useLocation()
  const pathname = location.pathname

  const {searchText, setSearchText} = useSearch()

  const isActive = (path)=>{
    return pathname?.split('/').pop() === path
  }

  const handleSearch = (e)=>{
    setSearchText(e.target.value)
  }


  return (
    <>
      <nav className='p-5 bg-zinc-800 shadow-lg md:flex md:items-center  text-white '>
        <div className='flex gap-2'>
          <div className="icon text-3xl"><FcNews /></div>
          
          <Link to={'/'}><span className='flex text-2xl font-[Poppins] cursor-pointer'>MyNews</span></Link>
        </div>

        <ul className='md:flex md:items-center md:mx-60'> 
          {categories.map((category, ind)=>{
            return(
              <Navlinks key={ind} category = {category} isActive={isActive(category)}/>
            )
          })}
          
          <form>
          <div className='flex ml-36'>
            <input type='text' id='search-news ' value={searchText} className='rounded-md h-9 w-48 text-black mt-1 p-2' onChange={handleSearch} placeholder='Search News'/>

          </div>
          
        </form>
      </ul>

        
     
      </nav>

    </>
  )
}

export default Navbar