import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTime } from '../../actions';

class TimeCard extends React.Component {
  constructTimeAction = () => {
    const { time, unit } = this.props;
    const timeState = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    switch (unit) {
      case 'h':
        timeState.hours = time;
        break;
      case 'm':
        timeState.minutes = time;
        break;
      case 's':
        timeState.seconds = time;
        break;
      default:
        break;
    }

    return timeState;
  };

  render() {
    const { time, unit, addTime } = this.props;
    return (
      <div
        className="card btn"
        onClick={() => addTime(this.constructTimeAction())}
        onKeyDown={() => addTime(this.constructTimeAction())}
        tabIndex="0"
        role="button"
      >
        <h2>
          {time}
          {unit}
        </h2>
      </div>
    );
  }
}

TimeCard.propTypes = {
  time: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  addTime: PropTypes.func.isRequired,
};

export default connect(null, {
  addTime,
})(TimeCard);
