import React, { useState } from 'react'
import {db} from '../firebase.js'

import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

const Signup = (props) => {
  const {screen, setScreen} = props
  const auth = getAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [verify, setVerify] = useState('')
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')

  const submitSignup = () => {
    console.log(auth)
    if(password === verify){
      if(auth.currentUser){
        console.log('redirect')
        setScreen('home')
      } else {
        console.log('create user')
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredentials) => {
            console.log(userCredentials.username)
            // updatrUserProfile()
          })
          .catch((error) => {
            console.error(error)
          })
      }
    }
  }

  const userUpdateProfile = () => {
    updateProfile(auth.currentUser, {
      displayName: username,
      name: name
    }).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.error(error)
    })
  }

  return (
    <div>
      <div>
        <p>Welcome to Sollio!</p>
        <p>Save your favorite workouts</p>
        <p>Signup below:</p>
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
            <label>Verify:</label>
            <input onChange={(e) => {setVerify(e.target.value)}} type='password' name='verify' placeholder='verifyy'/>
          </div>
          <div>
            <label>Username: </label>
            <input onChange={(e) => {setUsername(e.target.value)}} type='text' name='username' placeholder='username'/>
          </div>
          <div>
            <label>Name: </label>
            <input onChange={(e) => {setName(e.target.value)}} type='text' name='name' placeholder='name'/>
          </div>
          <div>
            <div onClick={() => {submitSignup()}}>
              <p>Submit</p>
            </div>
          </div>
          <div>
            <div onClick={() => {setScreen('login')}}>
              <p>Login</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup