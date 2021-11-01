import React from "react"
import responsedata from "./components/regions/responsedata";


const RegionContext=React.createContext();


export default function RegionProvider({children}){
    return(  
        <RegionContext.Provider value={responsedata.data}>
           {children}
        </RegionContext.Provider>      
    )
}
