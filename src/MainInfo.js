import React, { Component } from 'react';
import Home from './Home.js';
import About from './About.js';
import Projects from './Projects.js';

class MainInfo extends Component{
  render() {
    const d = this.props.details
    const actIn = this.props.actIn
    const el = [Home, About, Projects]

    return(
      <div>
        { d.map((details, i) => {
          return(
            <BoxInfo
              index={i}
              key={details.id}
              id={details.id + '-content'}
              actIn={actIn}
              title={details.label}
              divName={details.divName}
              divTitle={el[i]}
            />
          )
        }) }
      </div>
    )

  }
}

class BoxInfo extends Component{
  render() {

    return(
    <div id={this.props.id}
    className={(this.props.actIn === this.props.index ? 'visible' : 'invisible')}>

      { this.props.title }
      { <this.props.divTitle /> }
    </div>
    )
  }
}

export default MainInfo;
