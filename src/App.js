import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import {Route, Switch, Link} from 'react-router-dom';

const HatsPage = (props) => {
return(
  <div>
    <Link to='/sneakers/12'>sneakers by link</Link>
    <br/>
    <button onClick={()=> props.history.push('/sneakers/34')}>sneakers by button</button>
    <h1>Hats page</h1>

  </div>
)
}

const SneakersPage = (props) => {
  console.log(props);
  return(
  <div>
    <h1>Sneakers page: {props.match.params.sneakerId}</h1>
  </div>
)
}

function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/hats' component={HatsPage}/>
        <Route path='/sneakers/:sneakerId' component={SneakersPage}/>
      </Switch>
      
    </div>
  );
}
 
export default App;
