import './App.css';
import { useState,useEffect, useRef } from 'react';
import RegionProvider from './themeProvider';
import {BrowserRouter, Switch, Route,Redirect} from 'react-router-dom'
import RegionList from './components/regions/regionList';
import RegionDetails from './components/regions/regionDetails';
import Main from './components/contextTest/main';
import Reducertest from './components/reducerTest/reducertest';

function App() {

  return (
    <div className="container App">
      <BrowserRouter>
       <Switch>     
        <RegionProvider>
        <Route path="/" exact>
                <RegionList/>
        </Route>
        <Route path="/details/:iso" exact>
                <RegionDetails/>
        </Route>
        <Route path="/main" exact>
                <Main/>
        </Route>
        <Route path="/test" exact>
                <Reducertest/>
        </Route>
        </RegionProvider>
        </Switch>
      </BrowserRouter>  
    </div>
  );
}

export default App;
