import React from 'react'
import "./Header.css"
import { getMook } from '../../../localStorageFns.js'
import { Link } from 'react-router-dom'

const localStorage_mook = getMook()

export const Header = ({ workspace_id }) => {
    return (
        <header className='workspace-header'>
            <nav className='header-nav'>
                <ul className='header-nav-list'>
                    <li className='header-list-item'>
                        <button>
                            <img className='header-workspace-img' src={localStorage_mook.workspaces[workspace_id - 1].workspace_img} alt="workspace image" />
                        </button>
                    </li>
                    <li className='header-list-item'>
                        <button className='header-btn-list'>
                            <Link to={"/Home"}><i className="bi bi-arrow-left header-btns"></i></Link>
                        </button>
                        <span className='header-span'>Back</span>
                    </li>
                </ul>
            </nav>
            <div className='header-profile-img-container'>
                <img className='header-profile-img' src={localStorage_mook.user_info.profile_img} alt="profile image" />
            </div>
        </header>
    )
}
