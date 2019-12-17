import React, { Component } from 'react';
import About from './About.js';
import Projects from './Projects.js';
import Links from './Links.js';


class MainInfo extends Component{
  render() {
    const d = this.props.details
    const actIn = this.props.actIn
    const el = [About, Projects, Links]

    return(
      <div id='content'>
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
    className={(this.props.actIn === this.props.index ? 'visible' : 'invisible')} >
      { <this.props.divTitle /> }
    </div>
    )
  }
}

export default MainInfo;
