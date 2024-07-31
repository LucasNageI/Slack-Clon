import React from 'react'
import "./Workspaces.css"
import { Link } from 'react-router-dom'

export const Workspaces = ({ workspace }) => {
    const workspaces_array = workspace.map((workspace) => {
        return (
            <div className='workspace' key={workspace.id}>
                <div className='img-info-container'>
                    <div className='workspace-img-container'>
                        <img className='workspace-img' src={workspace.workspace_img} alt="workspace image" />
                    </div>
                    <div className='info-workspace-container'>
                        <span className='workspace-title'>{workspace.name}</span>
                        <span>Creation date: {workspace.creation_date}</span>
                    </div>
                </div>
                <div className='launch-slack-container'>
                <Link to={`/Workspace/${workspace.id}/1`} className='launch-slack-btn'>LAUNCH SLACK</Link>
                </div>
            </div>
        )
    })
    return (workspaces_array)
}
