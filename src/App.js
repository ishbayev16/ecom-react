import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import {Route, Switch, Link} from 'react-router-dom';

const HatsPage = () =>{
  return(
      <div>hast page</div>
  )
}

function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/hats' component={HatsPage}/>
      </Switch>
      
    </div>
  );
}
 
export default App;
