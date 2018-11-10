import React, { Component } from 'react';
import Content from './Content.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='main'>
          <Content />
        </div>
      </React.Fragment>
    );
  }
}


export default App;
