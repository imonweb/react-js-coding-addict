import React, { useState, createContext } from 'react'
import NavLinksPropDrilling from './NavLinksPropDrilling'

import { useContext } from 'react'

export const NavbarContext = createContext()
// console.log(NavbarContext)

//custom hook
export const useAppContext = () => useContext(NavbarContext)


const NavbarPropDrilling = () => {

  const [user, setUser] = useState({name: 'john'})
  const logout = () => {
    setUser(null);
  }
  return (
    <NavbarContext.Provider value={{ user, logout}}>
      <nav className='navbar'>
        <h5>CONTEXT API</h5>
        <NavLinksPropDrilling />
      </nav>
    </NavbarContext.Provider>
  )
}

export default NavbarPropDrilling