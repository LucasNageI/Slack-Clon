import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, CreateWorkspace, Workspace } from './Screens/index.js'
import { MOOK } from './data.js'
import { saveMook, getMook } from './localStorageFns.js'

function App() {
    useEffect(() => {
        const localStorageMook = getMook()
        if (!localStorageMook) {
            saveMook(MOOK)
        }
    }, []) /* solo cuando se renderiza por primera vez la pagina */

    return (
        <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<Home />} path='/Home' />
            <Route element={<CreateWorkspace />} path='/CreateWorkspace' />
            <Route element={<Workspace />} path="Workspace/:workspace_id/:channel_id/*" /> {/* "*" no entiendo que hace, lo pongo porque la consola tira un warning */}
            <Route element={<Workspace />} path="/*" />
        </Routes>
    )
}

export default App
