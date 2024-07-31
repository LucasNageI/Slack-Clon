import { MOOK } from "./data"

export const getMook = () => {
    const JSON_mook = localStorage.getItem('MOOK')
    if (JSON_mook) {
        return JSON.parse(JSON_mook)
    } else {
        return saveMook(MOOK)
    }
}

export const saveMook = (mook) => {
    localStorage.setItem("MOOK", JSON.stringify(mook))
}

export const getWorkspace = (workspace_id) => {
    const mook = getMook()
    if (!mook || !mook.workspaces) {
        return undefined
    }
    const workspace_id_number = parseInt(workspace_id, 10)
    return mook.workspaces.find(workspace => workspace.id === workspace_id_number)
}

export const getChannel = (channel_id, workspace_id) => {
    const workspace = getWorkspace(workspace_id)
    if (!workspace) {
        return undefined
    }

    if (!workspace.channels) {
        return undefined
    }

    const channel_id_number = parseInt(channel_id, 10)

    const channel = workspace.channels.find(channel => {
        return channel.id === channel_id_number
    })

    return channel
}