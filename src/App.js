import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import {Route, Switch, Link} from 'react-router-dom';
import ShopPage from './shop/shopPage';
import Header from './components/header';



function App() {
  return (
    <div >
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
      
    </div>
  );
}
 
export default App;
