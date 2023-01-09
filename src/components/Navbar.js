import React, { useEffect } from 'react'
import { getAuth, signOut } from 'firebase/auth'
import '../static/Header.css'
import logo from '../static/swollio-logo.png'

const Navbar = (props) => {
  const {setScreen} = props
  const auth = getAuth()

  const logout = () => {
    signOut(auth)
      .then(() => {
        setScreen('login')
      })
      .catch((error) => {
        console.error(error)
      })
  }
  return (
    <div className='nav'>
      <div className='navbar'>
        <div className='left-nav'>
          <img className='logo' src={logo} alt='swollio logo' />
        </div>
        <div className='right-nav'>
          {
            auth.currentUser ? <h3 onClick={() => {logout()}}>Logout</h3> : null
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar