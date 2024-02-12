import React from 'react'
// import logo from './logo.svg'
import logo from './imon.png'
import {social,links} from './data'
import {FaTimes} from 'react-icons/fa'
import { useGlobalContext } from './context'


const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useGlobalContext()
  return (
    <aside className='sidebar'>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className='logo' />
        <button
          className='close-btn'
          onClick={closeSidebar}
        >
          <FaTimes />
        </button>
      </div>
      <ul className="social-links">
        {links.map((link) => {
          const { id, url, icon } = link
          return ( 
          <>
          <li key={id}>
            <a href={url}>
              {icon}
            </a>
          </li>
          </>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar