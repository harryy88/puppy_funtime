import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './components/Landing';
import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';

// your code goes here
class Home extends Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <Route exact path="/" component={ Landing } />
          <Route  path="/happy" component={ Happy } />
          <Route  path="/sleepy" component={ Sleepy } />
          <Route  path="/guilty" component={ Guilty } />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render( <Home />, document.getElementById('root') );
