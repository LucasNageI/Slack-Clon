import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [isOpen, setChange] = useState(false);

    const handleHamMenu = () => {
        setChange(!isOpen);
    };

    return (
        <header className='header'>
            <nav className='nav'>
                <div className={`nav-list ${isOpen ? 'open' : 'closed'}`}>
                    <img src='https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-white.png' alt='slack icon' />
                    <ul className={`list-container ${isOpen ? 'open' : 'closed'}`}>
                        <li></li>
                        <li><button className={`li-btn ${isOpen ? 'open' : 'closed'}`}>Features <i className="bi bi-chevron-down"></i></button></li>
                        <li><button className={`li-btn ${isOpen ? 'open' : 'closed'}`}>Solutions <i className="bi bi-chevron-down"></i></button></li>
                        <li><button className={`li-btn ${isOpen ? 'open' : 'closed'}`}>Enterprise</button></li>
                        <li><button className={`li-btn ${isOpen ? 'open' : 'closed'}`}>Resources <i className="bi bi-chevron-down"></i></button></li>
                        <li><button className={`li-btn ${isOpen ? 'open' : 'closed'}`}>Pricing</button></li>
                    </ul>
                </div>
                <div className='btn-container'>
                    <button className='search btn'>
                        <i className="bi bi-search"></i>
                    </button>
                    <button onClick={handleHamMenu} className={`navbar-btn ${isOpen ? 'close-ham-menu' : 'open-ham-menu'}`}>
                        <i className={`bi ${isOpen ? 'bi-x' : 'bi-list'}`}></i>
                    </button>
                    <div className='btn-list'>
                        <button className='btn talk-to-sales'>TALK TO SALES</button>
                        <Link to={"/CreateWorkspace"} className='btn create-workspace-btn'>CREATE A NEW WORKSPACE</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
