import React, { Component } from 'react';

class Links extends Component {

  render() {
    const links = [
      {name: 'Github', style: 'github', url: 'https://github.com/sburbd'},
      {name: 'HS Twitter', style: 'twitter', url: 'https://twitter.com/sburbd'},
      {name: 'Main Twitter', style: 'twitter2', url: 'https://twitter.com/gayartoo'},
    ]

    return(
        <div className="animated fadeIn">
          <br/>
        { links.map((el, i) => {
          return(
            <ContactButton
              key={ i }
              name={el.name}
              style={el.style}
              url={el.url}
            />
          )
        })
        }
        </div>

    )
  }
}

class ContactButton extends Component {
  render() {
    return(
      <a href={this.props.url} target="_blank" rel="noopener noreferrer">
        <div className={'linkbtns ' + this.props.style}>
          <p>{this.props.name}</p>
        </div>
      </a>
    )
  }
}

export default Links;
