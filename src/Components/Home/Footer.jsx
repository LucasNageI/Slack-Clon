import React from 'react'
import "./Footer.css"
import { Links } from './Links'

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='region-and-media-container'>
                <div className='region-btn-container'>
                    <button className='region-btn'><i className="bi bi-globe"></i> Change Region <i className="bi bi-chevron-down"></i></button>
                </div>
                <div className='social-media-container'>
                    <a href="" className='social-media-item'><i className=" bi bi-linkedin"></i></a>
                    <a href="" className='social-media-item'><i className=" bi bi-instagram"></i></a>
                    <a href="" className='social-media-item'><i className=" bi bi-facebook"></i></a>
                    <a href="" className='social-media-item'><i className=" bi bi-twitter-x"></i></a>
                    <a href="" className='social-media-item'><i className=" bi bi-youtube"></i></a>
                    <a href="" className='social-media-item'><i className=" bi bi-tiktok"></i></a>
                </div>
            </div>
            <Links />
            <div className='legal-section'>
                <nav className='legal-section-nav'>
                    <ul className='legal-section-ul'>
                        <li><a className='download-slack' href="">Download Slack <i className="bi bi-cloud-arrow-down"></i></a></li>
                        <li><a className='legal-section-links' href="">Privacy</a></li>
                        <li><a className='legal-section-links' href="">Terms</a></li>
                        <li><a className='legal-section-links' href="">Cookie Preferences</a></li>
                        <li><a className='legal-section-links' href="">Your Privacy Choices <i className="bi bi-toggle-on"></i></a></li>
                    </ul>
                </nav>
                <div className='copyright-container'>
                    <p className='p-copyright'>©2024 Slack Technologies, LLC, a Salesforce company. All rights reserved.</p>
                    <span className='span-copyright'>Various trademarks held by their respective owners.</span>
                </div>
            </div>
        </footer>
    )
}
