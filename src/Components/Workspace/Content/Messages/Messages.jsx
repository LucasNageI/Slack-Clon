import React from 'react'
import './Messages.css'

export const Messages = ({channel}) => {
    console.log(channel)
    return (
    <div>
        <span className='message'>{channel}</span>
    </div>
  )
}
