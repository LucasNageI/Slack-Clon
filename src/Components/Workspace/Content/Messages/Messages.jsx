import React from 'react';
import './Messages.css';

export const Messages = ({ messages_info }) => {

    const messages_map = messages_info.map((message, index) => {
        return (
            <div className='message-container' key={index}> {/* index es el indice de los elementos por los que pasa el map */}
                <div className='user-img-message-container'>
                    <img className='author-img' src={message.author_img} alt="user image" />
                </div>
                <div className='message-info-container'>
                    <div className='message-info'>
                        <span className='message-info-span author-name'>{message.author}</span>
                        <span className='message-info-span date'>{message.date}</span>
                    </div>
                    <div className='message-content'>
                        <p className='message-text'>{message.text}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            {messages_map}
        </>
    )
}