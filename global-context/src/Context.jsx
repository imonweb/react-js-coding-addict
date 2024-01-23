// import React, { useContext } from 'react'
import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext({});

export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = (props) => {
  const [name, setName] = useState( 'john' )

  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default AppContext