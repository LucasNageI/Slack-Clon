import React from 'react'
import "./Channels.css"
import { Link, Route, Routes } from 'react-router-dom'

export const Channels = ({ channel }) => {

    const btnChannelHandler = (e) => {
        let btn_id = e.target.id
    }

    const channel_map = channel.map((channel) => {
        return(
        <button to={'./' + channel.name} className='btn-channel-container' onClick={btnChannelHandler} id={channel.id} key={channel.id}>
            <span id={channel.id}><i className="bi bi-hash"></i></span>
            <span id={channel.id} className='channel-name-span'>{channel.name}</span>
        </button>
        )
    })
    return (
        channel_map
    )
}
