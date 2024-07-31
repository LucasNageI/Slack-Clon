import { MOOK } from "./data"

export const getMook = () => {
    const JSON_mook = localStorage.getItem('MOOK')
    if(JSON_mook){
        return JSON.parse(JSON_mook)
    }
    else {
        return saveMook(MOOK)
    }
}

export const saveMook = (mook) => {
    localStorage.setItem("MOOK", JSON.stringify(mook))
}

export const getWorkspace = (workspace_id) => {
    const mook = getMook()
    return mook.workspaces.find(workspace => workspace.id === workspace_id)
}

export const getChannel = (channel_id, workspace_id) => {
    const workspace = getWorkspace(workspace_id)
    return workspace.channels.find(channel => channel.id === channel_id)
}