import React, { createContext } from 'react'
import useToggle from '../hooks/useToggle'

// create variable to call createContext
// it is not necessary to assign initial value
const ThemeContext = createContext();

function ThemeProvider(props){

    const[ isDarkMode, toggleTheme ] = useToggle(false)
    return(
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider};