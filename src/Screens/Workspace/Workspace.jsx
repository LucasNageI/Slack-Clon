import React from 'react'
import { useParams } from 'react-router-dom'
import { Aside, ChannelsAndDMs, Content, Header } from '../../Components/Workspace/index.js'
import './Workspace.css'

export const Workspace = () => {
    const { id } = useParams()
    return (
        <div className='main-page'>
            <Header id={id} />
            <div className='Aside-ChannelAndDMs-Content-container'>
                <Aside id={id} />
                <div className='channel-content-container'>
                    <ChannelsAndDMs id={id} />
                    <Content />
                </div>
            </div>
        </div>
    )
}