import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// User Screens
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import TestScreen from './screens/TestScreen'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path='/home' element={<HomeScreen />} />
        <Route path='/signup' element={<SignUpScreen />} />
        <Route path='/test' element={<TestScreen />} />
      </Routes>
    </Router>
  )
}

export default App
