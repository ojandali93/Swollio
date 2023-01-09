import React, { useEffect, useState } from 'react'

import { collection, where, query, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { getAuth } from 'firebase/auth'

const Workouts = (props) => {
  const {setScreen} = props
  const [workoutList, setWorkoutList] = useState([])
  const auth = getAuth()

  useEffect(() => {
    auth.currentUser ? grabWorkouts() : setScreen('login')
  })

  const grabWorkouts = () => {
    const collectionRef = collection(db, 'Workouts')
    const q = query(collectionRef, where('userId', '==', auth.currentUser.uid))
    onSnapshot(q, (snapshot) => {
      let workouts = []
      snapshot.forEach((doc) => {
        workouts.push({...doc.data(), id: doc.id})
      })
      setWorkoutList(workouts)
    })
  }

  useEffect(() => {
    grabWorkouts()
  }, [])

  useEffect(() => {
    console.log('updated workoutList')
  }, [workoutList])

  return (
    <div>
    <div>Workouts</div>
    {
      workoutList.map((workout, index) => {
        return(
          <div>
          {
            workout.exercises.map((exercise, index) => {
              return(
                
                <div>
                  <div>Day Of The Week: {exercise.dayOfTheWeek}</div>
                  <div>Exercise: {exercise.exercise}</div> 
                  <div>Reps: {exercise.reps}</div>  
                  <div>Sets: {exercise.sets}</div>  
                  <div>Intensity: {exercise.intensity}</div>  
                </div>
              )
            })
          }
          </div>
        )
      })
    }
    </div>
  )
}

export default Workouts