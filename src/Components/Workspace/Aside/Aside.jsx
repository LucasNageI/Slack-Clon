import React from 'react'
import "./Aside.css"

export const Aside = ({id}) => {
    const local_mook = JSON.parse(localStorage.getItem("MOOK"))
  return (
    <aside className='aside'>
        <nav className='aside-nav'>
            <ul className='aside-nav-list'>
                <li className='aside-list-item'>
                    <button>
                        <img className='aside-workspace-img' src={local_mook.workspaces[id - 1].workspace_img} alt="workspace image" />
                    </button>
                </li>
                <li className='aside-list-item'>
                    <button className='aside-btn-list home'>
                        <i className="bi bi-house"></i>
                    </button>
                    <span className='aside-span'>Home</span>
                </li>
                <li className='aside-list-item'>
                    <button className='aside-btn-list DMs'>
                        <i className="bi bi-wechat"></i>
                    </button>
                    <span className='aside-span'>DMs</span>
                </li>
                <li className='aside-list-item'>
                    <button className='aside-btn-list activity'>
                        <i className="bi bi-bell"></i>
                    </button>
                    <span className='aside-span'>Activity</span>
                </li>
                <li className='aside-list-item'>
                    <button className='aside-btn-list later'>
                        <i className="bi bi-bookmark"></i>
                    </button>
                    <span className='aside-span'>Later</span>
                </li>
                <li className='aside-list-item'>
                    <button className='aside-btn-list more'>
                        <i className="bi bi-three-dots"></i>
                    </button>
                    <span className='aside-span'>More</span>
                </li>
            </ul>
        </nav>
        <div className='aside-profile-img-container'>
            <button className='create-new'><i className="bi bi-plus-lg"></i></button>
            <img className='aside-profile-img' src={local_mook.user_info.profile_img} alt="profile image" />
        </div>
    </aside>
  )
}
