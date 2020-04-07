import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import {Route, Switch, Link} from 'react-router-dom';
import ShopPage from './shop/shopPage';



function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
      
    </div>
  );
}
 
export default App;
