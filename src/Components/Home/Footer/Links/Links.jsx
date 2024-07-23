import React from 'react'
import "./Links.css"

export const Links = () => {
    return (
        <div className='main-footer'>
            <div className='slack-icon-container'>
                <img className='slack-icon' src={"/slack_icon.png"} alt="slack icon" />
            </div>
            <div className='footer-list'>

                <ul className='list-items-container'>
                    <li><span className='list-titles'>PRODUCT</span></li>
                    <li><a className='list-item' href="">Watch Demo</a></li>
                    <li><a className='list-item' href="">Pricing</a></li>
                    <li><a className='list-item' href="">Paid vs. Free</a></li>
                    <li><a className='list-item' href="">Accessibility</a></li>
                    <li><a className='list-item' href="">Featured Releases</a></li>
                    <li><a className='list-item' href="">Changelog</a></li>
                    <li><a className='list-item' href="">Status</a></li>
                    <li>
                        <ul className='list-items-container'>
                            <li><span className='list-titles'>WHY SLACK?</span></li>
                            <li><a className='list-item' href="">Slack vs. Email</a></li>
                            <li><a className='list-item' href="">Enterprise</a></li>
                            <li><a className='list-item' href="">Small Business</a></li>
                            <li><a className='list-item' href="">Productivity</a></li>
                            <li><a className='list-item' href="">Task Management</a></li>
                            <li><a className='list-item' href="">Scale</a></li>
                            <li><a className='list-item' href="">Trust</a></li>
                        </ul>
                    </li>
                </ul>

                <ul className='list-items-container'>
                    <li><span className='list-titles'>FEATURES</span></li>
                    <li><a className='list-item' href="">Channels</a></li>
                    <li><a className='list-item' href="">Slack Connect</a></li>
                    <li><a className='list-item' href="">Workflow Builder</a></li>
                    <li><a className='list-item' href="">Messaging</a></li>
                    <li><a className='list-item' href="">Huddles</a></li>
                    <li><a className='list-item' href="">Canvas</a></li>
                    <li><a className='list-item' href="">Lists</a></li>
                    <li><a className='list-item' href="">Clips</a></li>
                    <li><a className='list-item' href="">Search</a></li>
                    <li><a className='list-item' href="">Apps & Integrations</a></li>
                    <li><a className='list-item' href="">File Sharing</a></li>
                    <li><a className='list-item' href="">Slack AI</a></li>
                    <li><a className='list-item' href="">Security</a></li>
                    <li><a className='list-item' href="">Enterprise Key Management</a></li>
                    <li><a className='list-item' href="">Slack Atlas</a></li>
                </ul>

                <ul className='list-items-container'>
                    <li><span className='list-titles'>SOLUTIONS</span></li>
                    <li><a className='list-item' href="">Engineering</a></li>
                    <li><a className='list-item' href="">IT</a></li>
                    <li><a className='list-item' href="">Customer Service</a></li>
                    <li><a className='list-item' href="">Sales</a></li>
                    <li><a className='list-item' href="">Project Management</a></li>
                    <li><a className='list-item' href="">Marketing</a></li>
                    <li><a className='list-item' href="">Security</a></li>
                    <li><a className='list-item' href="">Technology</a></li>
                    <li><a className='list-item' href="">Media</a></li>
                    <li><a className='list-item' href="">Financial Services</a></li>
                    <li><a className='list-item' href="">Retail</a></li>
                    <li><a className='list-item' href="">Public Sector</a></li>
                    <li><a className='list-item' href="">Education</a></li>
                    <li><a className='list-item' href="">Health & Life Sciences</a></li>
                    <li><a className='list-item' href="">See all solutions</a></li>
                </ul>

                <ul className='list-items-container'>
                    <li><span className='list-titles'>RESOURCES</span></li>
                    <li><a className='list-item' href="">Help Center</a></li>
                    <li><a className='list-item' href="">What's New</a></li>
                    <li><a className='list-item' href="">Resources Library</a></li>
                    <li><a className='list-item' href="">Slack Blog</a></li>
                    <li><a className='list-item' href="">Community</a></li>
                    <li><a className='list-item' href="">Customer Stories</a></li>
                    <li><a className='list-item' href="">Events</a></li>
                    <li><a className='list-item' href="">Developers</a></li>
                    <li><a className='list-item' href="">Partners</a></li>
                    <li><a className='list-item' href="">Partner Offers</a></li>
                    <li><a className='list-item' href="">App Directory</a></li>
                    <li><a className='list-item' href="">Slack Certified</a></li>
                </ul>

                <ul className='list-items-container'>
                    <li><span className='list-titles'>COMPANY</span></li>
                    <li><a className='list-item' href="">About Us</a></li>
                    <li><a className='list-item' href="">News</a></li>
                    <li><a className='list-item' href="">Media Kit</a></li>
                    <li><a className='list-item' href="">Brand Center</a></li>
                    <li><a className='list-item' href="">Careers</a></li>
                    <li><a className='list-item' href="">Swag Store</a></li>
                    <li><a className='list-item' href="">Engineering</a></li>
                    <li><a className='list-item' href="">Design Blog</a></li>
                    <li><a className='list-item' href="">Contact Us</a></li>
                </ul>

            </div>
        </div>
    )
}
