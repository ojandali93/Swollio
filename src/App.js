import React, {useState, useEffect} from 'react'
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import AddWorkout from './components/AddWorkout';

import { auth } from './firebase.js'

const App = () => {

  const [screen, setScreen] = useState('home')

  useEffect(() => {
    auth.currentUser ? setScreen('home') : setScreen('login')
  }, [])

  return (
    <div className="App">
      <Navbar screen={screen} setScreen={setScreen}/>
      {
        screen === 'home' ? <Home screen={screen} setScreen={setScreen}/> : null
      }
      {
        screen === 'addWorkout' ? <AddWorkout screen={screen} setScreen={setScreen}/> : null
      }
      {
        screen === 'login' ? <Signin screen={screen} setScreen={setScreen}/> : null
      }
      {
        screen === 'signup' ? <Signup screen={screen} setScreen={setScreen}/> : null
      }
    </div>
  );
}

export default App;
