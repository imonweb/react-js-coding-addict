import React from 'react'
import logo from './logo.svg'
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
    </aside>
  )
}

export default Sidebar