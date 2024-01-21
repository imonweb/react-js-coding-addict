// import React, { useContext } from 'react'
// import { NavbarContext } from './NavbarPropDrilling';

import { useAppContext } from "./NavbarPropDrilling"

const UserContainerPropDrilling = () => {

  // const {user, logout} = useContext(NavbarContext)
  const {user, logout} = useAppContext
  // const value = useContext(NavbarContext)
  // console.log( value )

  return (
    <div className='user-container'>
      {user ? 
        (
          <>
            <p>Hello There, {user?.name?.toUpperCase()}</p>
            <button className='btn' onClick={logout}>logout</button>
          </>
        ) : (
          <p>Please login</p>
        )
      }
    </div>
  )
}

export default UserContainerPropDrilling