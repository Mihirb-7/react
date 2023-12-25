
import { createContext, useContext } from "react";

//it is 2nd method to create context 1st method is in previous project
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},           //default object
    lightTheme: () => {},          //methods , anything will be passed in context ...like method , state
})

export const ThemeProvider = ThemeContext.Provider

//exporting theme provider
export default function useTheme(){
    return useContext(ThemeContext)
}