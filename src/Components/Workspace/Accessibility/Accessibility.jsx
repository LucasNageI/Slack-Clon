import React from 'react'
import "./Accessibility.css"
import { Channels } from './Channels/Channels'
import { getMook } from '../../../localStorageFns.js'

const localStorage_mook = getMook()

export const Accessibility = ({ workspace_id }) => {
    return (
        <section className='accessibility'>
            <div className='accessibility-workspace-name-container'>
                <button className='accessibility-workspace-name-btn'>
                    <span className='accessibility-workspace-name'>{localStorage_mook.workspaces[workspace_id - 1].name}</span>
                </button>
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
                <Channels channels={localStorage_mook.workspaces[workspace_id - 1].channels} />
                <button className='accessibility-create-channel'>
                    <span className='add-channels-span'><i className="bi bi-plus"></i> Add channels</span>
                </button>
            </div>
        </section>
    )
}
