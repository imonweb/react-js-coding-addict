import React from 'react'
import UserContainerPropDrilling from './UserContainerPropDrilling'

const NavLinksPropDrilling = () => {
  return (
    <div className='nav-container'>

      <ul className="nav-links">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
      </ul>
      <UserContainerPropDrilling />
    </div>
  )
}

export default NavLinksPropDrilling