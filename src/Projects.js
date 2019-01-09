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
      {name: 'HS Comic Maker', style: 'hscm', url: 'https://sburbd.github.io/Homestuck-Comic-Maker'},
      {name: 'Fansim Basemod', style: 'hsch', url: 'https://github.com/sburbd/friendsim-basemod'},
      {name: 'Fansim Tutorial', style: 'hsch', url: 'https://sburbd.github.io/fansim'},
      {name: 'Hiveswap Quirk Converter', style: 'hsqc', url: 'https://sburbd.github.io/hiveswap-quirk-generator'}
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
            url={el.url}
          />
        )
      })
      }
      <p>All of the code can be viewed on <a href="https://github.com/sburbd" target="_blank">GitHub</a></p>
      </div>

    )
  }
}

class LinkButton extends Component {
  render() {
    return(
      <a href={this.props.url} target="_blank">
        <div className={'linkbtns ' + this.props.style}>
          <p>{this.props.name}</p>
        </div>
      </a>
    )
  }
}


export default Links;
