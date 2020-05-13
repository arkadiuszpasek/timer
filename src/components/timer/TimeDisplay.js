import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

TimeDisplay.propTypes = {
  time: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({ time: state.time });

export default connect(mapStateToProps)(TimeDisplay);
