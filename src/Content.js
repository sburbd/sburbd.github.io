import React, { Component } from 'react';
import MainInfo from './MainInfo.js';

class Content extends Component{
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
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
      <React.Fragment>
      <div id='btn-container'>
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

      <MainInfo handleClick={this.handleClick} details={details} actIn={this.state.activeIndex} />
      </React.Fragment>
    )
  }
}

class MainButton extends Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => this.props.onClick(this.props.index)

  render() {
    return(
      <button id={this.props.id} onClick={this.handleClick}
        className={'buttons ' + (this.props.isActive ? 'active-btn' : 'default-btn')}>
         {this.props.label}
      </button>
    )
  }
}

export default Content;
