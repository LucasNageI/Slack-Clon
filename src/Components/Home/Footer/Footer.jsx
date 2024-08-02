import React from 'react'
import "./Footer.css"
import { Links } from "./Links/Links.jsx"

export const Footer = () => {
    const handleResetLocalStorage = () => {
        localStorage.clear()
    }
    const handleRefresh = () => {
        window.location.reload()
    }
    return (
        <footer className='footer'>
            <div className='reset-localStorage-refresh-media-container'>
                <div className='reset-localStorage-refresh-container'>
                    <button onClick={handleResetLocalStorage} className='reset-localStorage-btn'>Reset localStorage</button>
                    <button onClick={handleRefresh} className='refresh-page-btn'>Refresh Page</button>
                </div>
                <div className='social-media-container'>
                    <a href="https://www.linkedin.com/company/tiny-spec-inc/" target="_blank">
                        <i className="social-media-item bi bi-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/slackhq/" target="_blank">
                        <i className="social-media-item bi bi-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/slackhq" target="_blank">
                        <i className="social-media-item bi bi-facebook"></i>
                    </a>
                    <a href="https://x.com/slackhq" target="_blank">
                        <i className="social-media-item bi bi-twitter-x"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCY3YECgeBcLCzIrFLP4gblw" target="_blank">
                        <i className="social-media-item bi bi-youtube"></i>
                    </a>
                    <a href="https://www.tiktok.com/@slackhq" target="_blank">
                        <i className="social-media-item bi bi-tiktok"></i>
                    </a>
                </div>
            </div>
            <div className='links-container'>
                <Links />
            </div>
            <div className='legal-section'>
                <div className='copyright-container'>
                    <p className='p-copyright'>
                        ©2024 Slack Technologies, LLC, a Salesforce company. All rights reserved.
                    </p>
                    <span className='span-copyright'>
                        Various trademarks held by their respective owners.
                    </span>
                </div>
            </div>
        </footer>
    )
}