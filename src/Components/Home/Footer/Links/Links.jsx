import React, { useState } from 'react'
import './Links.css'

const Dropdown = ({ title, items }) => {
    const [is_open, setIs_open] = useState(true)

    const toggleDropdown = () => {
        setIs_open(!is_open)
    }

    return (
        <div className={`dropdown ${is_open ? 'open' : ''}`}>
            <button className='dropdown-button' onClick={toggleDropdown}>
                {title}
                <i className={`section-titles-icon ${is_open ? 'bi bi-chevron-down' : 'bi bi-chevron-up'}`}></i>
            </button>
            <ul className='dropdown-menu'>
                {items.map((item, index) => (
                    <li key={index}>
                        <a className='list-item' href={item.href}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export const Links = () => {
    const sections = [
        {
            title: 'PRODUCT',
            items: [
                { label: 'Watch Demo', href: '' },
                { label: 'Pricing', href: '' },
                { label: 'Paid vs. Free', href: '' },
                { label: 'Accessibility', href: '' },
                { label: 'Featured Releases', href: '' },
                { label: 'Changelog', href: '' },
                { label: 'Status', href: '' },
            ],
        },
        {
            title: 'WHY SLACK?',
            items: [
                { label: 'Slack vs. Email', href: '' },
                { label: 'Enterprise', href: '' },
                { label: 'Small Business', href: '' },
                { label: 'Productivity', href: '' },
                { label: 'Task Management', href: '' },
                { label: 'Scale', href: '' },
                { label: 'Trust', href: '' },
            ],
        },
        {
            title: 'FEATURES',
            items: [
                { label: 'Channels', href: '' },
                { label: 'Slack Connect', href: '' },
                { label: 'Workflow Builder', href: '' },
                { label: 'Messaging', href: '' },
                { label: 'Huddles', href: '' },
                { label: 'Canvas', href: '' },
                { label: 'Lists', href: '' },
                { label: 'Clips', href: '' },
                { label: 'Search', href: '' },
                { label: 'Apps & Integrations', href: '' },
                { label: 'File Sharing', href: '' },
                { label: 'Slack AI', href: '' },
                { label: 'Security', href: '' },
                { label: 'Enterprise Key Management', href: '' },
                { label: 'Slack Atlas', href: '' },
            ],
        },
        {
            title: 'SOLUTIONS',
            items: [
                { label: 'Engineering', href: '' },
                { label: 'IT', href: '' },
                { label: 'Customer Service', href: '' },
                { label: 'Sales', href: '' },
                { label: 'Project Management', href: '' },
                { label: 'Marketing', href: '' },
                { label: 'Security', href: '' },
                { label: 'Technology', href: '' },
                { label: 'Media', href: '' },
                { label: 'Financial Services', href: '' },
                { label: 'Retail', href: '' },
                { label: 'Public Sector', href: '' },
                { label: 'Education', href: '' },
                { label: 'Health & Life Sciences', href: '' },
                { label: 'See all solutions', href: '' },
            ],
        },
        {
            title: 'RESOURCES',
            items: [
                { label: 'Help Center', href: '' },
                { label: 'What\'s New', href: '' },
                { label: 'Resources Library', href: '' },
                { label: 'Slack Blog', href: '' },
                { label: 'Community', href: '' },
                { label: 'Customer Stories', href: '' },
                { label: 'Events', href: '' },
                { label: 'Developers', href: '' },
                { label: 'Partners', href: '' },
                { label: 'Partner Offers', href: '' },
                { label: 'App Directory', href: '' },
                { label: 'Slack Certified', href: '' },
            ],
        },
        {
            title: 'COMPANY',
            items: [
                { label: 'About Us', href: '' },
                { label: 'News', href: '' },
                { label: 'Media Kit', href: '' },
                { label: 'Brand Center', href: '' },
                { label: 'Careers', href: '' },
                { label: 'Swag Store', href: '' },
                { label: 'Engineering', href: '' },
                { label: 'Design Blog', href: '' },
                { label: 'Contact Us', href: '' },
            ],
        },
    ]

    return (
        <div className='main-footer'>
            <div className='slack-icon-container'>
                <img className='slack-icon' src={"/slack_icon.png"} alt="slack icon" />
            </div>
            <div className='footer-list'>
                {sections.map((section, index) => (
                    <Dropdown key={index} title={section.title} items={section.items} />
                ))}
            </div>
        </div>
    )
}