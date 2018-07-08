import React, { Component } from 'react';
import '../CSS/Guilty.css';

class Guilty extends Component {
  render() {
    return (
      <div>
        <nav>
            <a href="/">Home</a>
            <a href="/happy">Happy</a>
            <a href="/guilty">Guilty</a>
            <a href="/sleepy">Sleepy</a>
          </nav>
          <div id="guilty"></div>
      </div>
    );
  }
}

export default Guilty;
