import React from 'react'
import './Messages.css'

export const Messages = ( {channel} ) => {

    const messagesMap = (channel.messages).map(()=> {}) /* aca hacer el mapeo de los mensajes */

    return (
    <div>
        <span className='message'>{channel.messages[0].text}</span>
        {/* crear un componente nuevo para mandar mensajes */}
    </div>
  )
}
