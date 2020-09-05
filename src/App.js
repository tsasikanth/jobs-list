import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Wrapper from './Wrapper/Wrapper'
import JobDetailView from './JobDetailView/JobDetailView'
import {Route,Switch} from 'react-router-dom';
function App() {
  return (
         <div>    
            {/* <Wrapper/> */}
            {/* <JobDetailView/> */}
            <Switch>
              <Route path ='/' exact component = {Wrapper}/>
              <Route path ='/JobDetail' exact component = {JobDetailView}/>
            </Switch>
            
          </div>  
  );
}

export default App;
