import React, { useEffect } from 'react'

import { getAuth } from 'firebase/auth'

import Workouts from './Workouts.js'

const Home = (props) => {
  const {setScreen} = props
  const auth = getAuth()

  useEffect(() => {
    auth.currentUser ? setScreen('home') : setScreen('login')
  })

  return (
    <div>
      <div>
        <Workouts setScreen={setScreen}/>
      </div>
      <div onClick={() => {setScreen('addWorkout')}}>
        <p>+ Add Workout</p>
      </div>
    </div>
  )
}

export default Home