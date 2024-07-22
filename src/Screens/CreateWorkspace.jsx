import React from 'react'
import "./CreateWorkspace.css"
import { Link } from 'react-router-dom'

export const CreateWorkspace = () => {
    return (
        <main className='create-workspace-form-container'>
            <h1 className='title'>Create a New Workspace</h1>
            <form className='create-workspace'>
                <div className='inputs-container'>
                    <div className='workspace-name-container'>
                        <label className='label' htmlFor="workspace-name">Company or team name</label>
                        <input className='workspace-name' name='workspace-name' type="text" />
                    </div>
                    <div className='channel-name-container'>
                        <label className='label' htmlFor="channel-name">Aditional channel name</label>
                        <input className='channel-name' name='channel-name' type="text" />
                    </div>
                </div>
                    <div className='btn-container'>
                    <button className='confirm-workspace' type='submit'>Create Workspace</button>
                    <Link to={"/Home"} className='cancel-workspace' type='submit'>Cancel</Link>
                </div>
            </form>
        </main>
    )
}
