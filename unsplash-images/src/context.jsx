import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext() 

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches
  // console.log(prefersDarkMode);
  // const storedDarkMode = localStorage.getItem('darkTheme') === 'true';
  const storedDarkMode = localStorage.getItem('darkTheme');

  if(storedDarkMode === 'null'){
    return prefersDarkMode
  }


  // return storedDarkMode || prefersDarkMode
  return storedDarkMode === 'true'
}

export const AppProvider = ({children}) => {
  // const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode())
  const [searchTerm, setSearchTerm] = useState('techonology')

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme 
    setIsDarkTheme(newDarkTheme)
    // const body = document.querySelector('body')
    // console.log(body)
    // body.classList.toggle('dark-theme', newDarkTheme)
    // console.log(body);
    localStorage.setItem('darkTheme', newDarkTheme)
  }

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme)
  }, [isDarkTheme])

  return (
    <AppContext.Provider value={{isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}>{children}</AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)