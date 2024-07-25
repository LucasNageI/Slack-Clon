import React from 'react'
import "./ChannelsAndDMs.css"
import { Channels } from './Channels/Channels'

export const ChannelsAndDMs = ({ id }) => {
    const local_mook = JSON.parse(localStorage.getItem("MOOK"))
    return (
        <section className='accessibility'>
            <div className='accessibility-workspace-name-container'>
                <button>
                    <span className='accessibility-workspace-name'>{local_mook.workspaces[id - 1].name} <i className="bi bi-chevron-down"></i></span>
                </button>
                <div className='accessibility-side-workspace-name-btns'>
                    <button><i className="bi bi-filter"></i></button>
                    <button><i className="bi bi-pencil-square"></i></button>
                </div>
            </div>

            <div className='top-accessibility-btns-container'>
                <button className='top-accessibility-btns'>
                    <i className="bi bi-chat-text"></i>
                    <span className='accessibility-btns-span'>Threads</span>
                </button>
                <button className='top-accessibility-btns'>
                    <i className="bi bi-send"></i>
                    <span className='accessibility-btns-span'>Drafts & sent</span>
                </button>
            </div>

            <div className='channels-main-container'>
                <button>
                    <span className='channels-span-title'><i className="bi bi-caret-down-fill"></i> Channels</span>
                </button>

                <Channels channel={local_mook.workspaces[id - 1].channels} />

                <button className='accessibility-create-channel'>
                    <span className='add-channels-span'><i className="bi bi-plus"></i> Add channels</span>
                </button>
            </div>

            <div className='MDs-main-container'>
                <button>
                    <span className='channels-span-title'><i className="bi bi-caret-down-fill"></i> Direct messages</span>
                </button>
            </div>
        </section>
    )
}
