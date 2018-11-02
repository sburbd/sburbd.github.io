import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

class Main extends Component{
  render() {
    return(
      <div className='main'>
        <Buttons />
        <MainInfo />
      </div>
    )
  }
}

class MainInfo extends Component{
  render() {
    return(
      <article className='about-div'>
        <h1>Name Lastname</h1>
        About
      </article>
    )
  }
}

class Buttons extends Component{
  constructor(props) {
    super(props);
    this.state = {
      details: [
        {id:'home', label:'Home'},
        {id:'about', label:'About'},
        {id:'projects', label:'Projects'},
      ]
    }
  }

  render() {
    const btnsArr = this.state.details.map((details) => {
      return(
        <MainButton
          id={details.id}
          label={details.label}
        />
      )
    })

    return(
      <div>
        {btnsArr}
      </div>
    )
  }
}

class MainButton extends Component{
  render() {
    return(
      <button className='btn buttons' id={this.props.id}>
         {this.props.label}
      </button>
    )
  }
}


export default App;
