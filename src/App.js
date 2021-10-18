import './App.css';
import { useState,useEffect, useRef } from 'react';
import RegionProvider from './themeProvider';
import {BrowserRouter, Switch, Route,Redirect} from 'react-router-dom'
import RegionList from './components/regions/regionList';
import RegionDetails from './components/regions/regionDetails';
const countfn =()=>{
  console.log("useState fn");
  return 0;
}
function App() {

  return (
    <div className="App">
      <BrowserRouter>
       <Switch>     
        <RegionProvider>
        <Route path="/" exact>
                <RegionList/>
        </Route>
        <Route path="/details/:iso" exact>
                <RegionDetails/>
        </Route>
        </RegionProvider>
        </Switch>
      </BrowserRouter>  
    </div>
  );
}

export default App;
