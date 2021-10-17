import './App.css';
import { useState,useEffect } from 'react';

function App() {
 const [count,setCount]=useState(0);
 useEffect(() => {
  console.log("effect is called")
   return () => {
    console.log("effect is clean up")
   }
 }, [count])

 const incrementCount=()=>{
    setCount(prevCount=>prevCount+1);
    console.log(count);
    setCount(prevCount=>prevCount+1);
    console.log(count);
 }
 const decrementCount=()=>{
  setCount(count-1)
 }
 
  return (
    <div className="App">
       <h1>Interview preparation</h1>
       
       <button onClick={decrementCount} className="btn btn-secondary">-</button>
       <span style={{padding:'10px'}}>Count is {count}</span>
       <button  onClick={incrementCount} className="btn btn-secondary">+</button>
       
    </div>
  );
}

export default App;
