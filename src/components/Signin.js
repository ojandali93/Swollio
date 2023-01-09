import React, { useEffect, useState } from 'react'

import '../static/SignIn.css'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'
import {auth, db} from '../firebase.js'

const Signin = (props) => {
  const {screen, setScreen} = props
  const auth = getAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitLogin = () => {
    if(auth.currentUser){
      setScreen('home')
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          console.log(userCredentials)
          setScreen('home')
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  return (
    <div className='content'>
      <div className='signin-section'>
        <div>
          <p className='welcome'>Welcome to Swollio!</p>
          <p className='login'>Login below:</p>
        </div>
        <div>
          <form className='form'>
            <div className='form-section'>
              <label>Email: </label>
              <input className='input' onChange={(e) => {setEmail(e.target.value)}} type='email' name='email' placeholder='name@example.com'/>
            </div>
            <div className='form-section'>
              <label>Password:</label>
              <input className='input' onChange={(e) => {setPassword(e.target.value)}} type='password' name='password' placeholder='password'/>
            </div>
            <div>
              <div className='submit-button' onClick={() => {submitLogin()}}>
                <p className='submit-text'>Submit</p>
              </div>
            </div>
            <div>
              <div onClick={() => {setScreen('signup')}}>
                <p className='register'>Create Account</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signin