import React from 'react'
import { useParams } from 'react-router-dom'
import { Accessibility, Content, Header } from '../../Components/Workspace/index.js'
import './Workspace.css'
import { Route, Routes } from 'react-router-dom'

export const Workspace = () => {
    const { workspace_id } = useParams()  /* obtiene workspace_id de la URL (string) */
    return (
        <div className='workspace-page'>
            <Header workspace_id={workspace_id} />
            <div className='Accessibility-Content-container'>
                <div className='channel-content-container'>
                    <Accessibility workspace_id={workspace_id} />
                    <Routes>
                        <Route element={<Content workspace_id={Number(workspace_id)} />} path="/Workspace/:workspace_id/*"></Route>
                        <Route element={<Content workspace_id={Number(workspace_id)} />} path="/*"></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}