import React, { Component } from 'react';
import Content from './Content.js';
import './App.css';
// import './mediaq.css';
import './Buttons.css';

class App extends Component {


  render() {

    const divStyle = {
      height: window.innerHeight
    };

    function switchStylesheets(){
      var transBg = document.getElementById('transition-color');
      transBg.classList.toggle('fade')

      setTimeout(function(){
        var transBg = document.getElementById('transition-color');
        transBg.classList.toggle('fade')
      }, 500)

      setTimeout(function(){
        var mainBg = document.getElementById('theme-color');
        var stylesheet = document.getElementById("cssStyles");
        stylesheet.href.includes('prospit') ? stylesheet.setAttribute("href", "derse.css") : stylesheet.setAttribute("href", "prospit.css");
        mainBg.classList.toggle('fade')
      }, 200)

      setTimeout(function(){
        var mainBg = document.getElementById('theme-color');
        mainBg.classList.toggle('fade')
      }, 300)

    }

    return (
      <div className='page' style={divStyle}>
        <button className="switcher" onClick={switchStylesheets}>prospit/derse</button>
        <div className='main animated fadeInBottom'>
          <Content />
        </div>
      </div>
    );
  }
}


export default App;
