import React,{useEffect, useState,useContext} from "react";
import axios from "axios";
import Regions from './responsedata';
import RegionProvider from "../../themeProvider";
import { Link } from "react-router-dom";

export default function RegionList () {
    const [regions, setRegions]=useState([]);
    //const [isClicked, setisClicked]=useState(false);
   
    useEffect(() => {  
        console.log("effect is worked");
        axios.get('https://covid-api.com/api/regions?per_page=20')
        .then(response=>response.data)
        .then(obj=>obj.data)
        .then(regions=>setRegions(regions));
    }, [])

    return(
    <>
    <h2>Regions</h2>
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <td>ISO</td>
                    <td>NAME</td>
                    <td>#</td>
                </tr>               
            </thead>
            <tbody>
                 {
                     regions.map(r=>(
                         <tr key={r.iso}>
                             <td>{r.iso}</td>
                             <td>{r.name}</td>
                             <td><Link className="btn btn-default" to={`/details/${r.iso}`} >Details</Link></td>
                         </tr>
                     ))
                 }
            </tbody>
        </table>
        
    </>
    )
}