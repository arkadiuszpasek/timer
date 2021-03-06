import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { renderTime } from './timeLogic';
import './Timer.scss';

class TimeDisplay extends React.Component {
  render() {
    const { time } = this.props;
    return (
      <div className="time-display">
        <h1>{renderTime(time)}</h1>
      </div>
    );
  }
}

TimeDisplay.propTypes = {
  time: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({ time: state.time });

export default connect(mapStateToProps)(TimeDisplay);
