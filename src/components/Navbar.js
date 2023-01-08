import React from 'react'
import '../static/Header.css'
import logo from '../static/swollio-logo.png'
import userIcon from '../static/user-icon.png'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='left-nav'>
        <img className='logo' src={logo} alt='swollio logo' />
      </div>
      <div className='right-nav'>
        <img className='user' src={userIcon} alt='user icon' />
      </div>
    </div>
  )
}

export default Navbar