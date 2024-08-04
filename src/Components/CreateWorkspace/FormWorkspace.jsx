import React, { useState } from 'react'
import './FormWorkspace.css'
import { Link } from 'react-router-dom'
import { getMook, saveMook } from '../../localStorageFns'

export const FormWorkspace = () => {
    const mook = getMook()
    const workspaces = mook.workspaces
    
    const [errorWorkspace, setErrorWorkspace] = useState("") /* useState para manejar un posible error en el nombre del workspace */

    const [current_workspaces, setCurrentWorkspaces] = useState(workspaces) /* useState para subir el workspace al localStorage */

    const handleWorkspaceForm = (e) => {
        e.preventDefault()
        let workspace_name = e.target['workspace_name'].value.trim() 

        if (workspace_name.length > 30 || workspace_name.length < 4) { /* minimo 4 y maximo 30 caracteres */
            setErrorWorkspace("Workspace name may have between 4 and 30 characters.")
        } 
        else {
            setErrorWorkspace("")

            const new_workspace_object = { /* crea el objeto para el nuevo workspace */
                id: current_workspaces.length + 1,
                name: workspace_name,
                creation_date: new Date().toLocaleString(),
                workspace_img: "/workspace-default-icon.png",
                channels: [
                    {
                        id: 1,
                        name: "general",
                        messages: []
                    }
                ]
            }

            const updated_workspaces = [...current_workspaces, new_workspace_object] /* crea una copia de los workspaces actuales y le suma el nuevo workspace, esto es guadrado en la variable updated_workspaces */
            setCurrentWorkspaces(updated_workspaces) /* usa el setter del useState para modificar el valor del estado */

            const updated_mook = { ...mook } /* crea una copia del mook */
            updated_mook.workspaces = updated_workspaces /* se dirige al array de workspaces de updated_mook y reasigna los workspaces incluyendo el nuevo */

            saveMook(updated_mook) /* guarda el mook subido */

            e.target['workspace_name'].value = '' /* resetea el valor del input */
        }
    }

    return (
        <main className='create-workspace-form-container'>
            <h1 className='title'>Create a New Workspace</h1>
            <form className='create-workspace' onSubmit={handleWorkspaceForm}>
                <div className='inputs-container'>
                    <div className='workspace-name-container'>
                        <label className='label' htmlFor="workspace_name">Company or team name</label>
                        <input className='workspace-name' id='workspace_name' name='workspace_name' type="text" placeholder='Slack Development Team' autoComplete='off' />
                        <span className='error-span' id='error_workspace_span'>{errorWorkspace}</span>
                    </div>
                </div>
                <div className='btn-container'>
                    <button className='confirm-workspace' type='submit'>Create Workspace</button>
                    <Link to={"/Home"} className='back-workspace'>Back</Link>
                </div>
            </form>
        </main>
    )
}
