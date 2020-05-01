/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';

import { renderTime } from './timeLogic';

class TimeDisplay extends React.Component {
  render() {
    const { time } = this.props;
    return (
      <div className="mt-5 mb-5">
        <h1>{renderTime(time)}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({ time: state.time });
};

export default connect(mapStateToProps)(TimeDisplay);
