import React from 'react'
import "./Channels.css"

export const Channels = ({ channel }) => {

    const channel_map = channel.map((channel) => {
        return(
        <button className='btn-channel-container' key={channel.id}>
            <span><i className="bi bi-hash"></i></span>
            <span className='channel-name-span'>{channel.name}</span>
        </button>
        )
    })
    return (
        channel_map
    )
}
