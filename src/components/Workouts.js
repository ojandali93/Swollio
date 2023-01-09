import React, { useEffect, useState } from 'react'

import '../static/Workouts.css'
import { collection, where, query, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { getAuth } from 'firebase/auth'

const Workouts = (props) => {
  const {setScreen} = props
  const [workoutList, setWorkoutList] = useState([])
  const auth = getAuth()

  useEffect(() => {
    auth.currentUser ? grabWorkouts() : setScreen('login')
  }, [])

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

  return (
    <div className='workout-content'>
      {
        workoutList.map((workout, index) => {
          return(
            <div className='workout-list' key={index}>
              <div className='workout-exercises'>
                <div className='day-of-week'>SUNDAY</div>
                {
                  workout.exercises.map((exercise, index) => {
                    return(
                      <div>
                        {
                          exercise.dayOfTheWeek === 'Sunday' ?
                          <div className='exercise-workout'>
                            <div className='exercise-summary'>
                              <div className='exercise'>{exercise.exercise}</div> 
                              <div className='exercise'>({exercise.intensity})</div>
                            </div>
                            <div className='exercise-summary'>
                              <div className='exercise'>Reps: {exercise.reps}</div>  
                              <div className='exercise'>Sets: {exercise.sets}</div>  
                            </div>
                            <div className='breaker'></div>
                          </div> : null
                        }
                      </div>
                    )
                  })
                }
              </div>
              <div className='workout-exercises'>
                <div className='day-of-week'>MONDAY</div>
                {
                  workout.exercises.map((exercise, index) => {
                    return(
                      <div>
                        {
                          exercise.dayOfTheWeek === 'Monday' ?
                          <div className='exercise-workout'>
                            <div className='exercise-summary'>
                              <div className='exercise'>{exercise.exercise}</div> 
                              <div className='exercise'>({exercise.intensity})</div>
                            </div>
                            <div className='exercise-summary'>
                              <div className='exercise'>Reps: {exercise.reps}</div>  
                              <div className='exercise'>Sets: {exercise.sets}</div>  
                            </div>
                            <div className='breaker'></div>
                          </div> : null
                        }
                      </div>
                    )
                  })
                }
              </div>
              <div className='workout-exercises'>
                <div className='day-of-week'>TUESDAY</div>
                {
                  workout.exercises.map((exercise, index) => {
                    return(
                      <div>
                        {
                          exercise.dayOfTheWeek === 'Tuesday' ?
                          <div className='exercise-workout'>
                            <div className='exercise-summary'>
                              <div className='exercise'>{exercise.exercise}</div> 
                              <div className='exercise'>({exercise.intensity})</div>
                            </div>
                            <div className='exercise-summary'>
                              <div className='exercise'>Reps: {exercise.reps}</div>  
                              <div className='exercise'>Sets: {exercise.sets}</div>  
                            </div>
                            <div className='breaker'></div>
                          </div> : null
                        }
                      </div>
                    )
                  })
                }
              </div>
              <div className='workout-exercises'>
                <div className='day-of-week'>WEDNESDAY</div>
                {
                  workout.exercises.map((exercise, index) => {
                    return(
                      <div>
                        {
                          exercise.dayOfTheWeek === 'Wednesday' ?
                          <div className='exercise-workout'>
                            <div className='exercise-summary'>
                              <div className='exercise'>{exercise.exercise}</div> 
                              <div className='exercise'>({exercise.intensity})</div>
                            </div>
                            <div className='exercise-summary'>
                              <div className='exercise'>Reps: {exercise.reps}</div>  
                              <div className='exercise'>Sets: {exercise.sets}</div>  
                            </div>
                            <div className='breaker'></div>
                          </div> : null
                        }
                      </div>
                    )
                  })
                }
              </div>
              <div className='workout-exercises'>
                <div className='day-of-week'>THURSDAY</div>
                {
                  workout.exercises.map((exercise, index) => {
                    return(
                      <div>
                        {
                          exercise.dayOfTheWeek === 'Thursday' ?
                          <div className='exercise-summary'>
                            <div>
                              <div className='exercise'>{exercise.exercise}</div> 
                              <div className='exercise'>({exercise.intensity})</div>
                            </div>
                            <div>
                              <div className='exercise'>{exercise.reps}</div>  
                              <div className='exercise'>{exercise.sets}</div>  
                            </div>
                          </div> : null
                        }
                      </div>
                    )
                  })
                }
              </div>
              <div className='workout-exercises'>
                <div className='day-of-week'>FRIDAY</div>
                {
                  workout.exercises.map((exercise, index) => {
                    return(
                      <div>
                        {
                          exercise.dayOfTheWeek === 'Friday' ?
                          <div className='exercise-workout'>
                            <div className='exercise-summary'>
                              <div className='exercise'>{exercise.exercise}</div> 
                              <div className='exercise'>({exercise.intensity})</div>
                            </div>
                            <div className='exercise-summary'>
                              <div className='exercise'>Reps: {exercise.reps}</div>  
                              <div className='exercise'>Sets: {exercise.sets}</div>  
                            </div>
                            <div className='breaker'></div>
                          </div> : null
                        }
                      </div>
                    )
                  })
                }
              </div>
              <div className='workout-exercises'>
                <div className='day-of-week'>SATURDAY</div>
                {
                  workout.exercises.map((exercise, index) => {
                    return(
                      <div>
                        {
                          exercise.dayOfTheWeek === 'Saturday' ?
                          <div className='exercise-workout'>
                            <div className='exercise-summary'>
                              <div className='exercise'>{exercise.exercise}</div> 
                              <div className='exercise'>({exercise.intensity})</div>
                            </div>
                            <div className='exercise-summary'>
                              <div className='exercise'>Reps: {exercise.reps}</div>  
                              <div className='exercise'>Sets: {exercise.sets}</div>  
                            </div>
                            <div className='breaker'></div>
                          </div> : null
                        }
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Workouts