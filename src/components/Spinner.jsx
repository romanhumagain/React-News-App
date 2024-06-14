import React from 'react'
import loading from '../assets/loading.gif'

const Spinner = () => {
  return (
    <>
    <div className="flex justify-center text-center">
    <img  src={loading}/>
    </div>
    </>
  )
}

export default Spinner