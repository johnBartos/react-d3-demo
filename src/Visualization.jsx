import React, { Component, PropTypes } from 'react';
import dimensionable from './dimensionable';

const style = {
  height: '200px'
};

class Visualization extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  };

  render() {
    console.log(this.props.width);
    return (
      <div style={style}>yoyoyo</div>
    );
  }
}

export default dimensionable(Visualization);
