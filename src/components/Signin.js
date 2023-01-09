import React, { useEffect, useState } from 'react'

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
    <div>
      <div>
        <p>Welcome to Sollio!</p>
        <p>Login below:</p>
      </div>
      <div>
        <form>
          <div>
            <label>Email: </label>
            <input onChange={(e) => {setEmail(e.target.value)}} type='email' name='email' placeholder='email'/>
          </div>
          <div>
            <label>Password:</label>
            <input onChange={(e) => {setPassword(e.target.value)}} type='password' name='password' placeholder='password'/>
          </div>
          <div>
            <div onClick={() => {submitLogin()}}>
              <p>Submit</p>
            </div>
          </div>
          <div>
            <div onClick={() => {setScreen('signup')}}>
              <p>Register Account</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signin