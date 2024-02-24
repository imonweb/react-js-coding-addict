import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext() 

export const AppProvider = ({children}) => {
  const greeting = 'hello'

  return (
    <AppContext.Provider value={{greeting}}></AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)