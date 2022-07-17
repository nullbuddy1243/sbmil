import React from 'react'
import "./banner.css"
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div className='banner'>
        <Link to="/" className="brand">Milady</Link>
        <Link to='/user'>0x123</Link>
    </div>

  )
}

export default Banner