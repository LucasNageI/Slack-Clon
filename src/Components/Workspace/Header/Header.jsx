import React from 'react'
import "./Header.css"
import { getMook } from '../../../localStorageFns.js'

const localStorage_mook = getMook()

export const Header = ({ workspace_id }) => {

  return (
    <header className='workspace-header'>
        <div className='workspace-btn-container'>
            <button><i className="bi bi-arrow-left-short"></i></button>
            <button><i className="bi bi-arrow-right-short"></i></button>
            <button><i className="bi bi-clock"></i></button>
            <button className='workspace-search-btn'>
                <span>Search {localStorage_mook.workspaces[workspace_id - 1].name}</span>
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
