import React, { Component } from 'react';
import '../CSS/Happy.css';

class Happy extends Component {
  render() {
    return (
      <div>
        
          <nav>
          <a href="/">Home</a>
            <a href="/happy">Happy</a>
            <a href="/guilty">Guilty</a>
            <a href="/sleepy">Sleepy</a>
          </nav>
          <div id="happy"></div>
      </div>
    );
  }
}

export default Happy;
