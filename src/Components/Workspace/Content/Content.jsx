import React from 'react'
import "./Content.css"

export const Content = ( {id} ) => {
    const local_mook = JSON.parse(localStorage.getItem("MOOK"))
  return (
    <section className='content-section'>
        <div className='user-info'>
            <button className='user-info-btn'>
                <img className='user-profile-img' src={local_mook.user_info.profile_img} alt="profile image" />
                <span className='profile-name'>{local_mook.user_info.username} <i className="bi bi-chevron-down"></i></span>
            </button>
        </div>
    </section>
  )
}
