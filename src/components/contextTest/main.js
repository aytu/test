import React, { useState } from 'react'
import FunctionalComponent from './functionalComp';
import ThemeProvider from './themeProvider';


export default function Main() {
    
    return (
        <div>                
             <ThemeProvider>        
               
                <FunctionalComponent/>
            </ThemeProvider>
        </div>
    )
}
