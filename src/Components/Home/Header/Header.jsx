import React, { useState } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

export const Header = () => {
    const [isOpen, setChange] = useState(false)

    const handleHamMenu = () => {
        setChange(!isOpen)
    }

    return (
        <header className={`header ${isOpen ? 'menu-open' : 'menu-closed'}`}>
            <nav className='nav'>
                    <div className={`nav-list ${isOpen ? 'open' : 'closed'}`}>
                        <img src='https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-white.png' alt='slack icon' />
                        <ul className={`list-container ${isOpen ? 'open' : 'closed'}`}>
                            <li></li>
                            <li><button className='btn'>Features <i className="bi bi-chevron-down"></i></button></li>
                            <li><button className='btn'>Solutions <i className="bi bi-chevron-down"></i></button></li>
                            <li><button className='btn'>Enterprise</button></li>
                            <li><button className='btn'>Resources <i className="bi bi-chevron-down"></i></button></li>
                            <li><button className='btn'>Pricing</button></li>
                        </ul>
                    </div>
                <div className='ham-menu-container btn-container'>
                    <button onClick={handleHamMenu} className={`navbar-btn ${isOpen ? 'close-ham-menu' : 'open-ham-menu'}`}>
                            <i className={`bi ${isOpen ? 'bi-x' : 'bi-list'}`}></i>
                        </button>
                    <ul className='btn-list'>
                        <li className='search'><button className='btn'><i className="bi bi-search"></i></button></li>
                        <li><button className='btn talk-to-sales'>TALK TO SALES</button></li>
                        <li><Link to={"/CreateWorkspace"} className='create-workspace-btn'>CREATE A NEW WORKSPACE</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}