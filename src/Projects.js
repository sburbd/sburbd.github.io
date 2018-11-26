import React, { Component } from 'react';

class Links extends Component {
  render() {

    return(
    <div className="animated fadeIn">
      <LinkButtons/>
    </div>
    )
  }
}

class LinkButtons extends Component {


  render() {
    const linkbtns = [
      {name: 'HS Comic Maker', style: 'hscm', url: 'url'},
      {name: 'HS Chittr gui', style: 'hsch', url: 'url'},
      {name: 'Hiveswap Quirk Converter', style: 'hsqc', url: 'url'}
    ]

    return(
      <div>
        <br/>
      { linkbtns.map((el, i) => {
        return(
          <LinkButton
            key={ i }
            name={el.name}
            style={el.style}
          />
        )
      })
      }
      <p>All of the code can be viewed on GitHub</p>
      </div>
    )
  }
}

class LinkButton extends Component {
  render() {
    const st = this.props.style
    return(
      <React.Fragment>
        <button className={'linkbtns ' + this.props.style}>
          {this.props.name}
        </button>
      </ React.Fragment>
    )
  }
}


export default Links;
