import React from 'react';
import { useParams } from 'react-router-dom';
import './Content.css';
import { Messages } from './Messages/Messages.jsx';
import { getChannel } from '../../../localStorageFns.js';

export const Content = ({ workspace_id }) => {
    const { channel_id } = useParams()

    const channel_obj = getChannel(channel_id, workspace_id)
    const channel_name = channel_obj.name

    return (
        <section className='content-section'>
            <div className='accessibility-info'>
                <span className='accessibility-span-name'>
                    <i className="bi bi-hash"></i>{channel_name}
                </span>
            </div>
            <div className='messages'>
                <Messages channel={channel_obj} />
            </div>
        </section>
    )
}
