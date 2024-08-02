import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './Channels.css'

export const Channels = ({ channels }) => {
    const { workspace_id } = useParams()

    const channel_map = channels.map((channel) => {
        const channel_id = channel.id

        return (
            <Link to={`/Workspace/${workspace_id}/${channel_id}`} className='btn-channel-container' key={channel_id}>
                <span><i className="bi bi-hash"></i></span>
                <span className='channel-name-span'>{channel.name}</span>
            </Link>
        )
    })

    return (
        <div>
            {channel_map}
        </div>
    )
}

export default Channels
