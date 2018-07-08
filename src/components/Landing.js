import React, { Component } from 'react';


class Landing extends Component {
  render() {
    return (
      <div>
        <nav>
            <a href="/">Home</a>
            <a href="/happy">Happy</a>
            <a href="/guilty">Guilty</a>
            <a href="/sleepy">Sleepy</a>
          </nav>
      </div>
    );
  }
}

export default Landing;