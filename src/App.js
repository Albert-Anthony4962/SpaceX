import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';
import Home from './Home';
import Amos from './Amos';
import Astronauts from './Astronauts';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/amos" component={Amos}/>
          <Route exact path="/astronauts" component={Astronauts}/>
        </Switch>
      </div>
    );
  }
}

export default App;
