import React from 'react';
import Tabs from './Tabs.js';


class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: {},
    };
    this.els = {};
  }
  componentDidMount() {
    this.getSizes();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children && prevProps.active !== this.props.active) {
      this.getSizes();
    }
  }

  getSizes() {
    const rootBounds = this.root.getBoundingClientRect();

    const sizes = {};

    Object.keys(this.els).forEach((key) => {
      const el = this.els[key];
      const bounds = el.getBoundingClientRect();

      const left = bounds.left - rootBounds.left;
      const right = rootBounds.right - bounds.right;

      sizes[key] = {left, right};
    });

    this.setState({sizes});
    return sizes;
  }

  render() {
    console.log(JSON.stringify(this.state, null, 2));
    return (
      <div
        className="Tabs"
        ref={el => this.root = el}
      >
        {React.Children.map(this.props.children, (child, i) => {
          let className = `Tabs__Tab`;
          if (child.key === this.props.active) {
            className = `${className} Tabs__Tab--active`;
          }
          return (
            <div
              className={className}
              onClick={() => {
                this.props.onChange(child.key);
              }}
              ref={el => this.els[child.key] = el}
            >
              {child}
            </div>
          );
        })}
        <div
          className="Tabs__Underline"
          style={this.getUnderlineStyle()}
        />
      </div>
    );
  }

  getUnderlineStyle() {
    if (this.props.active == null || Object.keys(this.state.sizes).length === 0) {
      return {left: '0', right: '100%'};
    }

    const size = this.state.sizes[this.props.active];

    return {
      left: `${size.left}px`,
      right: `${size.right}px`,
      transition: transitionStyle,
    }
  }
}

export default Tabs;



const styles = {
  fontFamily: 'sans-serif',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: 'aTab'};
  }
  render() {
    const content = {
      aTab: 'Tab A',
      bTab: 'Tab B',
      cTab: 'Tab C',
    };
    return (
      <div style={styles}>
        <h1>Tabs Example</h1>
        <Tabs
          active={this.state.active}
          onChange={active => this.setState({active})}
        >
          <div key="aTab">A Title</div>
          <div key="bTab">B Very Long Title</div>
          <div key="cTab">{this.state.active === 'bTab' ? 'Title' : 'Very Long Title'}</div>
        </Tabs>
        <h2>Content</h2>
        <p>{content[this.state.active]}</p>
      </div>
    );
  }
};
export default App;
