import React from 'react'
import { Workspaces } from '../Components/Workspaces'
import "./Home.css"

const local_mook = JSON.parse(localStorage.getItem("MOOK"))

console.log((local_mook.workspaces).length)

export const Home = () => {
  return (
    <>
    <header className='header'>
        <nav className='nav'>
            <ul className='nav-list'>
                <li><img className='slack-icon' src='https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-white.png' alt='slack icon'/></li>
                <li><button className='btn'>Features</button></li>
                <li><button className='btn'>Solutions</button></li>
                <li><button className='btn'>Enterprise</button></li>
                <li><button className='btn'>Resources</button></li>
                <li><button className='btn'>Pricing</button></li>
            </ul>
            <ul className='btn-list'>
                <li className='search'><button className='btn'><i className="bi bi-search"></i></button></li>
                <li><button className='talk-to-sales'>TALK TO SALES</button></li>
                <li><button className='create-workspace'>CREATE A NEW WORKSPACE</button></li>
            </ul>
        </nav>
    </header>
    <main className='main'>

        <div className='welcome-back-container'>
            <img src="https://a.slack-edge.com/6c404/marketing/img/homepage/bold-existing-users/waving-hand.gif" alt="slack waving hand" />
            <span className='welcome-back-title'>Welcome back</span>
        </div>
        <div className='main-child'>
            <div className='workspaces-container'>
                <div className='user-workspaces-container'>
                    <span className='user-workspaces'>Workspaces for {local_mook.user_info.email}</span>
                </div>
                <div className='workspaces-list'>
                    <Workspaces workspace={local_mook.workspaces}/>
                </div> 
            </div>
        </div>
    </main>
    </>
  )
}
