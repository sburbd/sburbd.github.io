import React, { Component } from 'react';
import Content from './Content.js';
import './App.css';
import './Animations.css';

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

        if (stylesheet.href.includes('prospit')) {
          stylesheet.setAttribute("href", "derse.css")
          document.getElementById('switch').style.display = "block"
          document.getElementById('switch2').style.display = "none"
        } else {
          stylesheet.setAttribute("href", "prospit.css");
          document.getElementById('switch').style.display = "none"
          document.getElementById('switch2').style.display = "block"
        }

        mainBg.classList.toggle('fade')
      }, 200)

      setTimeout(function(){
        var mainBg = document.getElementById('theme-color');
        mainBg.classList.toggle('fade')
      }, 300)

    }

    return (
      <div className='page' style={divStyle}>
        <div id="switch" onClick={switchStylesheets}></div>
        <div id="switch2" onClick={switchStylesheets}></div>
        <div className='main animated fadeInBottom'>
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
