import React from 'react'
import "./Header.css"

const local_mook = JSON.parse(localStorage.getItem("MOOK"))

export const Header = ({ id }) => {

  return (
    <header className='workspace-header'>
        <div className='workspace-btn-container'>
            <button><i className="bi bi-arrow-left-short"></i></button>
            <button><i className="bi bi-arrow-right-short"></i></button>
            <button><i className="bi bi-clock"></i></button>
            <button className='workspace-search-btn'>
                <span>Search {local_mook.workspaces[id - 1].name}</span>
                <i className="bi bi-search"></i>
            </button>
        </div>
        <div>
            <button>
                <i className="bi bi-question-circle"></i>
            </button>
        </div>
    </header>
  )
}
