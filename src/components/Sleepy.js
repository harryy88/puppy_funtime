import React, { Component } from 'react';
import '../CSS/Sleepy.css';

class Sleepy extends Component {
  render() {
    return (
      <div>
        <nav>
          <a href="/">Home</a>
            <a href="/happy">Happy</a>
            <a href="/guilty">Guilty</a>
            <a href="/sleepy">Sleepy</a>
          </nav>
          <div id="sleepy"></div>
      </div>
    );
  }
}

export default Sleepy;
