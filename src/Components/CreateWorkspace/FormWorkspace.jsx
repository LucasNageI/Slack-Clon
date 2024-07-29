import React, { useState } from 'react';
import './FormWorkspace.css';
import { Link } from 'react-router-dom';

export const FormWorkspace = () => {
    const [errorWorkspace, setErrorWorkspace] = useState("");
    const [errorChannel, setErrorChannel] = useState("");

    const local_mook = JSON.parse(localStorage.getItem("MOOK"));
    const workspaces = local_mook.workspaces;

    const new_workspace = {
        id: workspaces.length + 1,
        name: "",
        creation_date: "22/07/24",
        workspace_img: "",
        chanels: [
            {
                id: 1,
                name: "general",
                messages: []
            }
        ]
    };

    console.log(new_workspace.id);

    const handleSubmit = (e) => {
        let workspace_name = e.target.workspace_name.value;
        let channel_name = e.target.channel_name.value;
        e.preventDefault();

        if (workspace_name.length >= 31 || workspace_name.length <= 3) {
            setErrorWorkspace("Workspace name may have between 4 and 30 characters.");
        } else {
            setErrorWorkspace("");
        }

        if (channel_name === "") {
            setErrorChannel("");
        } else if (channel_name.length >= 21 || channel_name.length <= 1) {
            setErrorChannel("Channel name may have between 2 and 20 characters.");
        } else {
            setErrorChannel("");
        }
    };

    return (
        <main className='create-workspace-form-container'>
            <h1 className='title'>Create a New Workspace</h1>
            <form className='create-workspace' onSubmit={handleSubmit}>
                <div className='inputs-container'>
                    <div className='workspace-name-container'>
                        <label className='label' htmlFor="workspace_name">Company or team name</label>
                        <input className='workspace-name' id='workspace_name' name='workspace_name' type="text" placeholder='Slack Development Team' autoComplete='off' />
                        <span className='error-span' id='error_workspace_span'>{errorWorkspace}</span>
                    </div>
                    <div className='channel-name-container'>
                        <label className='label' htmlFor="channel_name">Additional channel name (optional)</label>
                        <input className='channel-name' id='channel_name' name='channel_name' type="text" autoComplete='off' placeholder='#Announces' />
                        <span className='error-span' id='error_channel_span'>{errorChannel}</span>
                    </div>
                </div>
                <div className='btn-container'>
                    <button className='confirm-workspace' type='submit'>Create Workspace</button>
                    <Link to={"/Home"} className='back-workspace'>Back</Link>
                </div>
            </form>
        </main>
    );
}
