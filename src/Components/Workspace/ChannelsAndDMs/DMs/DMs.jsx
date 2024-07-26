import React from 'react'
import './DMs.css'

export const DMs = ({id}) => {  
    const local_mook = JSON.parse(localStorage.getItem("MOOK"))
  return (
        <button className='DM'>
            <img className='DM-user-img' src={local_mook.user_info.profile_img} alt="DM user image" />
            <div className='DM-span-container'>
                <span className='DM-self-user'>{local_mook.user_info.username}</span><span className='you-span'>you</span>
            </div>
        </button>
  )
}
