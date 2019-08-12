import React, { Component } from 'react';

class About extends Component {
  render() {

    return(
      <div className="animated fadeIn">
        <h2>-PEAK HOMESTUCK-</h2>
        <h4>aka Zich Sburbd</h4>
        <p className='subtitle'>* (where zich rhymes with peach)</p>
        <br />
        <img width="260px" src="theatreofcoolty.png" alt="my icon is from Theatre of Coolty (The Movie), written by duckface and acted out by NakedBee"/>
        <p className='subtitle'>fyi, my icon is from <a href="https://www.youtube.com/watch?v=aIavjRkRKT0" target="_blank" rel="noopener noreferrer">Theatre of Coolty</a></p>
        <p>he/him - 22 - UK</p>
        <p>(web) Developer</p>
        <p>check out my projects!</p>
      </div>
    )
  }
}

export default About;
