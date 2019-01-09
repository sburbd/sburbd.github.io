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
      var element = document.getElementsByTagName("BODY")[0];
      element.classList.toggle('fade')

      setTimeout(function(){
        var element = document.getElementsByTagName("BODY")[0];
        var stylesheet = document.getElementById("cssStyles");
        stylesheet.href.includes('prospit') ? stylesheet.setAttribute("href", "derse.css") : stylesheet.setAttribute("href", "prospit.css");

              element.classList.toggle('fade')
            }, 200)

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
