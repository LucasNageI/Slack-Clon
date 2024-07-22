import React from 'react'
import './FormWorkspace.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const FormWorkspace = () => {

    const [errorWorkspace, setErrorWorkspace] = useState("")
    const [errorChannel, setErrorChannel] = useState("")

    const handleSubmit = (e) => {
        let workspace_name = e.target.workspace_name.value
        let channel_name = e.target.channel_name.value
        e.preventDefault()

        if(workspace_name.length >= 31 || workspace_name.length <=3){
            setErrorWorkspace("Workspace name may have between 4 and 30 characters")
        }
        else{
            setErrorWorkspace("")
        }

        if(channel_name.length >= 21 || channel_name.length <= 1){
            setErrorChannel("Whannel name may have between 2 and 20 characters")
        }
        else{
            setErrorChannel("")
        }
    }

  return (
    <>
        <main className='create-workspace-form-container'>
            <h1 className='title'>Create a New Workspace</h1>
            <form className='create-workspace' onSubmit={handleSubmit}>
                <div className='inputs-container'>
                    <div className='workspace-name-container'>
                        <label className='label' htmlFor="workspace_name">Company or team name</label>
                        <input className='workspace-name' id='workspace_name' name='workspace-name' type="text" placeholder='Slack Development Team' autoComplete='off'/>
                        <span className='error-span' id='error_workspace_span'>{errorWorkspace}</span>
                    </div>
                    <div className='channel-name-container'>
                        <label className='label' htmlFor="channel_name">Aditional channel name</label>
                        <input className='channel-name' id='channel_name' name='channel-name' type="text" autoComplete='off' placeholder='Anounces'/>
                        <span className='error-span' id='error_channel_span'>{errorChannel}</span>
                    </div>
                </div>
                    <div className='btn-container'>
                    <button className='confirm-workspace' type='submit' >Create Workspace</button>
                    <Link to={"/Home"} className='back-workspace'>Back</Link>
                </div>
            </form>
        </main>

    </>
  )
}
