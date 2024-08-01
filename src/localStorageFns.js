import { MOOK } from "./data"

export const getMook = () => {
    const string_mook = localStorage.getItem('MOOK') /* obtiene el mook */
    if (string_mook) { /* si existe, guarda el MOOK en formato json, y lo devuelve */
        const mook = JSON.parse(string_mook)
        return mook
    } 
    else { /* si no existe, crea el mook, y devuelve mook */
        saveMook(MOOK)
        return MOOK
    }
}

export const saveMook = (mook) => { /* setea el mook */
    localStorage.setItem("MOOK", JSON.stringify(mook))
}

export const getWorkspace = (workspace_id) => {
    const mook = getMook()
    if (!mook || !mook.workspaces) { /* si mook o mook.workspaces son falsy, los convierte a truthly y devuelve undefined para que tire error */
        return undefined
    }
    const workspace_id_number = Number(workspace_id) /* convierte el parametro a number */
    return mook.workspaces.find(workspace => workspace.id === workspace_id_number) /* y lo busca en el array de workspaces del mook */
}

export const getChannel = (channel_id, workspace_id) => {
    const workspace = getWorkspace(workspace_id)
    if (!workspace) { /* si workspace no existe, devuelve undefined para tirar error */
        return undefined
    }

    if (!workspace.channels) { /* si workspace.channels no existe, devuelve undefined para tirar error */
        return undefined
    }

    const channel_id_number = Number(channel_id) /* convierte el parametro channel_id a number */

    const channel = workspace.channels.find(channel => { /* y lo busca en el array de canales */
        return channel.id === channel_id_number
    })
    return channel
}