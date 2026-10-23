import React from 'react'
import { Link } from 'react-router-dom'

const Discountoffer = () => {
  return (
    <div className="w-full bg-black text-white text-center py-2.5 px-4 text-xs sm:text-sm transition-all">
      <p className="leading-tight">
        Sign up and get 20% off to your first order.
        <Link to="/signup" className="font-bold underline hover:text-gray-300 ml-1 inline-block">
          Sign up now
        </Link>
      </p>
    </div>
  )
}

export default Discountoffer
