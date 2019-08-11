import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';
import Home from './Home';
import Amos from './Amos';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/amos" component={Amos}/>
        </Switch>
      </div>
    );
  }
}

export default App;
