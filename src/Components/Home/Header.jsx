import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className='header'>
            <nav className='nav'>
                <ul className='nav-list'>
                    <li><img src='https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-white.png' alt='slack icon' /></li>
                    <li><button className='btn'>Features</button></li>
                    <li><button className='btn'>Solutions</button></li>
                    <li><button className='btn'>Enterprise</button></li>
                    <li><button className='btn'>Resources</button></li>
                    <li><button className='btn'>Pricing</button></li>
                </ul>
                <ul className='btn-list'>
                    <li className='search'><button className='btn'><i className="bi bi-search"></i></button></li>
                    <li><button className='talk-to-sales'>TALK TO SALES</button></li>
                    <li><Link to={"/CreateWorkspace"} className='create-workspace-btn'>CREATE A NEW WORKSPACE</Link></li>
                </ul>
            </nav>
        </header>
    )
}
