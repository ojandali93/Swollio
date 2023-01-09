import React, { useEffect } from 'react'

import '../static/Home.css'

import { getAuth } from 'firebase/auth'

import Workouts from './Workouts.js'

const Home = (props) => {
  const {setScreen} = props
  const auth = getAuth()

  useEffect(() => {
    auth.currentUser ? setScreen('home') : setScreen('login')
  }, [])

  return (
    <div className='home-content'>
      <div className='header'>Workouts</div>
      <div>
        <Workouts setScreen={setScreen}/>
      </div>
      <div onClick={() => {setScreen('addWorkout')}}>
        <p className='add-workout-buttom'>+ Add Workout</p>
      </div>
    </div>
  )
}

export default Home