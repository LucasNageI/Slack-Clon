import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
    const [is_open, setChange] = useState(false)

    const handleHamMenu = () => {
        setChange(!is_open)
    }

    return (
        <header className='header'>
            <nav className='nav'>
                <div className={`nav-list ${is_open ? 'open' : 'closed'}`}>
                    <img src='https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-white.png' alt='slack icon' />
                    <ul className={`list-container ${is_open ? 'open' : 'closed'}`}>
                        <li></li>
                        <li>
                            <button className={`li-btn ${is_open ? 'open' : 'closed'}`}>
                                <span> 
                                    Features
                                    <i className={'li-btn bi bi-chevron-down'}></i>
                                </span> 
                            </button>
                        </li>
                        <li>
                            <button className={`li-btn ${is_open ? 'open' : 'closed'}`}>
                                <span> 
                                    Solutions
                                    <i className={'li-btn bi bi-chevron-down'}></i>
                                </span> 
                            </button>
                        </li>
                        <li>
                            <button className={`li-btn ${is_open ? 'open' : 'closed'}`}>
                                <span>Enterprise</span> 
                            </button>
                        </li>
                        <li>
                            <button className={`li-btn ${is_open ? 'open' : 'closed'}`}>
                                <span> 
                                    Resources
                                    <i className={'li-btn bi bi-chevron-down'}></i>
                                </span> 
                            </button>
                        </li>
                        <li>
                        <button className={`li-btn ${is_open ? 'open' : 'closed'}`}>
                                <span>Pricing</span> 
                            </button>
                        </li>
                    </ul>
                </div>
                <div className='btn-container'>
                    <button onClick={handleHamMenu} className={`navbar-btn ${is_open ? 'close-ham-menu' : 'open-ham-menu'}`}>
                        <i className={`bi ${is_open ? 'bi-x' : 'bi-list'}`}></i>
                    </button>
                    <div className={`btn-list ${is_open ? 'open' : 'closed'}`}>
                        <Link to={'/CreateWorkspace'} className={`btn header-create-workspace-btn ${is_open ? 'open' : 'closed'}`}>
                        <span className='create-a-new-workspace-span'>CREATE A NEW WORKSPACE</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}
