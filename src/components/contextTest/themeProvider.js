import React,{useContext, useState} from 'react';


export const ThemeContext=React.createContext();
export const ThemeContextUpdate=React.createContext();

export function UseTheme(){
    return useContext(ThemeContext);
}
export function UseThemeUpdate(){
    return useContext(ThemeContextUpdate);
}
export default function ThemeProvider({children}){
const [darkTheme,setDarkTheme]=useState(false);
const toggleTheme=()=>{
        console.log("toggle");
        setDarkTheme(prevTheme=>!prevTheme);
}
 return(
     <ThemeContext.Provider value={darkTheme}>
         <ThemeContextUpdate.Provider value={toggleTheme}>
               {children}
         </ThemeContextUpdate.Provider>      
     </ThemeContext.Provider>
 )
}