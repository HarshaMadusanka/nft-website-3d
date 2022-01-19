import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import './assets/js/common.js'
import { Roadmap } from './components/roadmap/Roadmap';


function App() {
  return(
    <React.Fragment>
      <Home/>
      <About/>
      <Roadmap/>
    </React.Fragment>
    
  ) ;
}

export default App;
