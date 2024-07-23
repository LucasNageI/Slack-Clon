import React, { useState } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'



export const Header = () => {

    const [value, setvalue] = useState("")

    const handleHamMenu = () => {
    }

    return (
        <header className='header'>
            <nav className='nav'>
                <div className='nav-list'>
                <img src='https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-white.png' alt='slack icon' />
                    <ul className='list-container'>
                        <li></li>
                        <li><button className='btn'>Features <i className="bi bi-chevron-down"></i></button></li>
                        <li><button className='btn'>Solutions <i className="bi bi-chevron-down"></i></button></li>
                        <li><button className='btn'>Enterprise</button></li>
                        <li><button className='btn'>Resources <i className="bi bi-chevron-down"></i></button></li>
                        <li><button className='btn'>Pricing</button></li>
                    </ul>
                </div>
                <div className='ham-menu-container'>
                    <button onClick={handleHamMenu} className='navbar-btn open-ham-menu'><i className="bi bi-list"></i></button>
                    <button className='navbar-btn close-ham-menu'><i className="bi bi-x"></i></button>
                </div>
                <div className='btn-container'>
                    <ul className='btn-list'>
                        <li className='search'><button className='btn'><i className="bi bi-search"></i></button></li>
                        <li><button className='btn talk-to-sales'>TALK TO SALES</button></li>
                        <li><Link to={"/CreateWorkspace"} className='create-workspace-btn'>CREATE A NEW WORKSPACE</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
