import React from 'react'
import { Link } from 'react-router-dom'
const Navlinks = ({category, isActive}) => {
  return (
    <>
      <li className='mx-3'>
        <Link to={`/${category}`} className={`text-xl ${isActive?'text-red-500':'hover:text-red-500 duration-700'}`}>{category.charAt(0).toUpperCase() + category.slice(1)}</Link>
      </li>

    </>
  )
}

export default Navlinks