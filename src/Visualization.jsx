import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import d3 from 'd3';
import dimensionable from './dimensionable';

const draw = (container, containerHeight, containerWidth) => {
  container.selectAll('*').remove();

  const margin = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
  };

  const height = containerHeight - margin.left - margin.right;
  const width = containerWidth - margin.top - margin.bottom;
  const x = d3.scale.ordinal().domain(d3.range(1)).rangePoints([0, width]);

  const svg = container.append('svg')
		.attr('width', width + margin.left + margin.right)
		.attr('height', height + margin.top + margin.bottom)
		.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  function pulse() {
    let rect = svg.select('rect');
    (function repeat() {
      rect = rect.transition()
        .duration(1000)
        .attr('stroke-width', 20)
        .attr('width', width / 10)
        .transition()
        .duration(1000)
        .attr('width', width)
        .ease('sine')
        .each('end', repeat);
    })();
  }

  svg.selectAll('rect')
    .data(x.domain())
    .enter()
    .append('rect')
    .attr('stroke-width', 20)
    .attr('width', width / 10)
    .attr('height', height)
    .attr('x', 0)
    .attr('y', 0)
    .each(pulse);
};

const style = {
  height: 100
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

    return <div className="visualization-container" style={style}></div>;
  }
}

export default Visualization;
