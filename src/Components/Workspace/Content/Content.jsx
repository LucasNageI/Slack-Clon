import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Content.css';
import { Messages } from './Messages/Messages.jsx';

export const Content = () => {
    const { clicked_btn } = useParams();

    return (
        <section className='content-section'>
            <div className='accessibility-info'>
                    <span className='accessibility-span-name'><i className="bi bi-hash"></i>{clicked_btn}</span>
            </div>
            <div className='messages'>
                <Messages channel={clicked_btn} />
            </div>
        </section>
    );
};
