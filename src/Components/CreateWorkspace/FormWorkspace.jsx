import React from 'react'
import './FormWorkspace.css'
import { Link } from 'react-router-dom'

const handleSubmit = (e) => {
    e.preventDefault()
    let valor = e.target.workspace_name.value
    if(valor.length >= 26){

    }
}

export const FormWorkspace = () => {
  return (
    <main className='create-workspace-form-container'>
        <h1 className='title'>Create a New Workspace</h1>
        <form className='create-workspace' onSubmit={handleSubmit}>
            <div className='inputs-container'>
                <div className='workspace-name-container'>
                    <label className='label' htmlFor="workspace_name">Company or team name</label>
                    <input className='workspace-name' id='workspace_name' name='workspace-name' type="text" autoComplete='off'/>
                    <span id='error_span'></span>
                </div>
                <div className='channel-name-container'>
                    <label className='label' htmlFor="channel_name">Aditional channel name</label>
                    <input className='channel-name' id='channel_name' name='channel-name' type="text" autoComplete='off'/>
                    <span id='error_channel_span'></span>
                </div>
            </div>
                <div className='btn-container'>
                <button className='confirm-workspace' type='submit' >Create Workspace</button>
                <Link to={"/Home"} className='cancel-workspace'>Cancel</Link>
            </div>
        </form>
    </main>
  )
}
