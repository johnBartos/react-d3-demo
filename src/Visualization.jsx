import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import d3 from 'd3';
import dimensionable from './dimensionable';

const draw = (container, containerHeight, containerWidth) => {
  container.selectAll('*').remove();

  const margin = {
    top: 30,
    right: 30,
    bottom: 30,
    left: 30
  };

  const height = containerHeight;
  const width = containerWidth;

  const svg = container.append('svg')
    .attr('width', width)
    .attr('height', height);

  const circle = svg.append('circle')
    .attr('cx', width / 2)
    .attr('cy', height / 2)
    .attr('r', 50);

  circle.transition()
  .duration(1000)
  .delay(500)
  .attr('cy', height - 50)
  .transition()
  .attr('cx', width - 50);
};

const style = {
  height: 200,
  border: '1px solid red'
};

class Visualization extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  };

  componentDidMount() {
    this.setState({ container: d3.select(ReactDom.findDOMNode(this)) });
  }

  render() {
    if (this.state) {
      draw(this.state.container, this.props.height, this.props.width);
    }

    return <div className="visualization-container jiggle" style={style}></div>;
  }
}

export default dimensionable(Visualization);
