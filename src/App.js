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
        activeIndex: null
    };
  }

  handleClick = (index) => this.setState({ activeIndex: index })

  render() {
    const details = [
      {id:'home', label:'Home'},
      {id:'about', label:'About'},
      {id:'projects', label:'Projects'},
    ]

    return(
      <div>
        { details.map((details, i) => {
          return(
            <MainButton
              key={details.id}
              id={details.id}
              index={ i }
              isActive={ this.state.activeIndex === i }


              label={details.label}

              onClick={this.handleClick}
            />
          )
        }) }
      </div>
    )
  }
}

class MainButton extends Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => this.props.onClick(this.props.index)


  // handleClick = (index) => {
  //   console.log(this.activeIndex)
  //   this.setState({
  //   activeIndex: index})
  // }

  // handleClick() {
  //   var select = document.getElementById(this.props.id)
  //   var el = document.getElementsByClassName('buttons')
  //   for (var i = 0; i < el.length; i++ ) {
  //     el[i].classList.remove('visible')
  //     el[i].classList.add('invisible')
  //   }
  //   select.classList.remove('invisible')
  //   select.classList.add('visible')
  // }

  render() {
    return(
      <button className='btn buttons' id={this.props.id} onClick={this.handleClick}
        className={this.props.isActive ? 'visible' : 'invisible'}>
         {this.props.label}
      </button>
    )
  }
}


export default App;
