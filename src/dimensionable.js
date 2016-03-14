import React, { Component } from 'react';
import ReactDom from 'react-dom';

const dimensions = node => {
  const { width, height } = node.getBoundingClientRect();
  return {
    width,
    height
  };
};

export default ComposedComponent => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0
    };
  }

  handleResize = () => {
    this.setState(dimensions(this.state.node));
  };

  componentDidMount() {
    const node = ReactDom.findDOMNode(this);
    this.setState({ ...dimensions(node), node });
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <ComposedComponent
      height = {this.state.height}
      width = {this.state.width}
      {...this.props} />
    );
  }
};
