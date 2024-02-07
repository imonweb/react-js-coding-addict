import React from 'react'
import { useState, useRef } from 'react'
import { FaBars, FaToggleOff } from 'react-icons/fa'
import {links, social } from './data'
import logo from './imon.png'

const Navbar = () => {

  const [showLinks, setShowLinks] = useState(false)

  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  const toggleLinks = () => {
    // console.log(linksRef.current.getBoundingClientRect());
    setShowLinks(!showLinks)
  }

  const linkStyles = {
    height: showLinks?`${linksRef.current.getBoundingClientRect().height}px` : '0px'
  }

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img 
            src={logo} 
            alt="logo" 
            className='logo' 
          />
          <button
            className='nav-toggle'
            onClick={toggleLinks}
          >
            <FaBars /> {''}
          </button>
        </div>
        {/* {showLinks && ( */}
          {/* <div className="links-container"> */}
          {/* <div className={showLinks ? 'links-container show-container' : 'links-container'}> */}
           <div className="links-container" ref={linksContainerRef} style={linkStyles}> 
            <ul className="links" ref={linksRef}>
              {links.map((link) =>{
                const { id, url, text } = link
                return <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              })}
            </ul>
          </div>
        {/* )} */}
        
      </div>
    </nav>
  )
}

export default Navbar