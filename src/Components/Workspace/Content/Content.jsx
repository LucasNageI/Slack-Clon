import React from 'react';
import { useParams } from 'react-router-dom';
import './Content.css';
import { Messages } from './Messages/Messages.jsx';

export const Content = ({workspace_id}) => {
    const { channel_id } = useParams()
    console.log(channel_id)

    return (
        <section className='content-section'>
            <div className='accessibility-info'>
                    <span className='accessibility-span-name'><i className="bi bi-hash"></i>{channel_id}</span>
            </div>
            <div className='messages'>
                <Messages channel={channel_id} />
            </div>
        </section>
    )
}
