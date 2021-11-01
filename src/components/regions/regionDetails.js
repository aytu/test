
import axios from "axios";
import React, { useEffect, useState }  from "react"
import { useParams } from "react-router-dom";
import responsedata from "./responsedata";


export default function RegionDetails(){
let { iso } = useParams();
const [date,setDate]=useState('');
const [data,setData]=useState({});
console.log(iso);
const region=  responsedata.data.filter(x=>x.iso===iso)[0];
const handleDate=(e)=>{
    console.log(e.target.value);
  setDate(e.target.value);
}

const getResults=()=>{
    axios.get('https://covid-api.com/api/reports/total',{params:{date:date,iso:iso}})
    .then(response=>response.data)
    .then(result=>setData(result.data));
}
return(
    <div>
      <h3>Details</h3>
      <p><b>Name</b>: {region.name}</p> 
      <p><b>Iso</b>: {region.iso}</p> 
      <p><input  type="date" className="form-control" onChange={(e)=>handleDate(e)}/></p>
      <button className="btn btn-primary" onClick={getResults}>Get Statistika</button>
      {
           Object.keys(data).length===0 ? '' :   <pre>{JSON.stringify(data)}</pre>     
      }
   
    </div>
)
}