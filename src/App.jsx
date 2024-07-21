import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Screens/Home'


function App() {
  return (
    <Routes>
        <Route element={<Home/>} path='/'></Route>
        <Route element={<Home/>} path='/Screens/Home'></Route>
    </Routes>
  )
}

export default App
