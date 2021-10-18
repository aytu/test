
import React, { useEffect }  from "react"
import { useParams } from "react-router-dom";
import responsedata from "./responsedata";
export default function RegionDetails(){
let { iso } = useParams();
console.log(iso);
const region=  responsedata.data.filter(x=>x.iso===iso)[0];
console.log(region)
useEffect(()=>{
  
})
return(
    <div>
      <h3>Details</h3>
      <p><b>Name</b>: {region.name}</p> 
      <p><b>Iso</b>: {region.iso}</p> 
    </div>
)
}