import React ,{useContext} from 'react'
import {  UseTheme, UseThemeUpdate } from './themeProvider'
const themeStyle=(dark)=>{
    return {
    'backgroundColor' : dark ? '#333' : '#ccc',
    'color':dark ?'#ccc': '#333',
    'padding':'2rem',
    'margin':'2rem'
    }
}
export default function FunctionalComponent() {
    const darkTheme= UseTheme();
    const updateTheme=UseThemeUpdate();
    return (
        <>
         <button className="btn btn-secondary" onClick={updateTheme}>Toggle theme</button>        
         <div>
            <div style={themeStyle(darkTheme)}><h1>Functional Component</h1></div>
        </div>
        </>
      
    )
}
