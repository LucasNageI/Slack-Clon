import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, CreateWorkspace, Workspace }from './Screens/index.js'
import { MOOK } from './data.js'


function App() {
    localStorage.setItem("MOOK", JSON.stringify(MOOK))
  return (
    <Routes>
        <Route element={<Home/>} path='/'></Route>
        <Route element={<Home/>} path='/Home'></Route>
        <Route element={<CreateWorkspace/>} path='/CreateWorkspace'></Route>
        <Route element={<Workspace />} path="Workspace/:workspace_id/:channel_id/*"/>
        <Route element={<Workspace />} path="Workspace/:workspace_id/*"/>
    </Routes>
  )
}

export default App