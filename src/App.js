import React, { Component } from 'react';
import Content from './Content.js';
import './App.css';

class App extends Component {


  render() {

    const divStyle = {
      height: window.innerHeight
    };

    return (
      <div className='page' style={divStyle}>
        <div className='main animated fadeInBottom'>
          <Content />
        </div>
      </div>
    );
  }
}


export default App;
