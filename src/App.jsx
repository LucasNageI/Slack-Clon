import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, CreateWorkspace, Workspace }from './Screens/index.js'

const MOOK = {
    "user_info": {
        "id": "1",
        "username": "pepe",
        "email": "pepe@gmail.com",
        "profile_img": "/pepe.webp",
        "active": true
    },
    
    "workspaces": [
        {
            "id": 1,
            "name": "UTN web development",
            "creation_date": "04/10/2023",
            "workspace_img": "/utn_logo.png",
            "channels": [
                {
                    "id": 1,
                    "name": "general",
                    "messages": [
                        {
                            "id": 1,
                            "author": "pepe",
                            "author_img": "/pepe.webp",
                            "date": "20/07/24",
                            "text": "Buenas, este es el canal general, y es el primer mensaje"
                        }
                    ]
                },
                {
                    "id": 1,
                    "name": "anounces",
                    "messages": [
                        {}
                    ]
                }
            ]
        },
        {
            "id": 2,
            "name": "NASA web development",
            "creation_date": "04/10/2010",
            "workspace_img": "/nasa_logo_icon_181406.webp",
            "channels": [
                {
                    "id": 1,
                    "name": "general",
                    "messages": [
                        {
                            "id": 1,
                            "author": "pepe",
                            "author_img": "/pepe.webp",
                            "date": "20/07/24",
                            "text": "que hago aca?"
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "important",
                    "messages": [
                        {}
                    ]
                },
                {
                    "id": 3,
                    "name": "announcements",
                    "messages": [
                        {}
                    ]
                },
                {
                    "id": 4,
                    "name": "to-do",
                    "messages": [
                        {}
                    ]
                },
                {
                    "id": 5,
                    "name": "questions",
                    "messages": [
                        {
                            "id": 1,
                            "author": "pepe",
                            "author_img": "/pepe.webp",
                            "date": "20/07/24",
                            "text": "que hago aca?"
                        }
                    ]
                },
                {
                    "id": 6,
                    "name": "suggestions",
                    "messages": [
                        {}
                    ]
                },
                {
                    "id": 7,
                    "name": "tasks",
                    "messages": [
                        {}
                    ]
                },
                {
                    "id": 8,
                    "name": "memes",
                    "messages": [
                        {}
                    ]
                }
            ]
        }
    ]
}

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
