import React, { useEffect, useState } from 'react'

import { getAuth } from 'firebase/auth'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { auth, db } from '../firebase'

const options = [
  {value: 'Sunday', label: 'Sunday'},
  {value: 'Monday', label: 'Monday'},
  {value: 'Tuesday', label: 'Tuesday'},
  {value: 'Wednesday', label: 'Wednesday'},
  {value: 'Thursday', label: 'Thursday'},
  {value: 'Friday', label: 'Friday'},
  {value: 'Saturday', label: 'Saturday'},
]

const AddWorkout = (props) => {
  const {setScreen} = props
  const auth = getAuth()

  const [dayOfTheWeek, setDayOfTheWeek] = useState('Sunday')
  const [exerciseList, setExerciseList] = useState([])
  const [exercise, setExercise] = useState('')
  const [reps, setReps] = useState('')
  const [sets, setSets] = useState('')
  const [intensity, setIntensity] = useState('')

  const addExercise = () => {
    let newExercise = {
      'dayOfTheWeek': dayOfTheWeek,
      'exercise': exercise,
      'reps': reps,
      'sets': sets,
      'intensity': intensity
    }
    setExerciseList([...exerciseList, newExercise])
  }

  const removeExercise = () => {

  }

  const storeWorkout = () => {
    const collectionRef = collection(db, 'Workouts')
    if(auth.currentUser){
      addDoc(collectionRef, {
        'userId': auth.currentUser.uid,
        'workout_day': dayOfTheWeek,
        'exercises': exerciseList,
        'createdAt': serverTimestamp()
      })
      .then(() => {
        setScreen('home')
      })
      .catch((error) => {
        console.error(error)
      })
    } else {
      setScreen('login')
    }
  }

  return (
    <div>
      <div>
        New Workout
      </div>
      <div>
        <form>
          <div>
            <label>Day of the week</label>
            <select value={dayOfTheWeek} onChange={(e) => {setDayOfTheWeek(e.target.value)}}>
              <option value="Sunday">Sunday</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
            </select>
          </div>
          <br></br>
          <div>Workout:</div>
          <br></br>
          <div>
            <div>
              <label>Exercise</label>
              <input onChange={(e) => {setExercise(e.target.value)}} type='text' name='exercise'/>
            </div>
            <div>
              <label>Reps</label>
              <input onChange={(e) => {setReps(e.target.value)}} type='text' name='reps'/>
            </div>
            <div>
              <label>Sets</label>
              <input onChange={(e) => {setSets(e.target.value)}} type='text' name='sets'/>
            </div>
            <div>
              <label>Intensity</label>
              <input onChange={(e) => {setIntensity(e.target.value)}} type='text' name='intensity'/>
            </div>
            <div onClick={() => {addExercise()}}>
              <p>Add Exercise</p>
            </div>
          </div>
        </form>
        <div>
          <div>
            Workout View:
          </div>
          <div>
            {
              exerciseList.map((exercise, index) => {
                return(
                  <div key={index}>
                    <div>
                      Exercise: {exercise.exercise}
                    </div>
                    <div>
                      Reps: {exercise.reps}
                    </div>
                    <div>
                      Sets: {exercise.sets}
                    </div>
                    <div>
                      Intensity: {exercise.intensity}
                    </div>
                    <div onClick={() => {removeExercise(index)}}>
                      <p>Remove Exercise</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div onClick={() => {storeWorkout()}}>
        Add Workout
      </div>
    </div>
  )
}

export default AddWorkout