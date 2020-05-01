/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { addTime } from '../../actions';

class TimeCard extends React.Component {
  constructTimeAction = () => {
    const { time, unit } = this.props;
    const timeState = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    // eslint-disable-next-line default-case
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
    }

    return timeState;
  }

  render() {
    const { time, unit, addTime } = this.props;
    return (
      <div
        className="col-3 ml-auto mr-auto bg-secondary btn"
        onClick={() => addTime(this.constructTimeAction())}
      >
        <h2 className="pt-3 pb-1">
          {time}
          {unit}
        </h2>
      </div>
    );
  }
}

export default connect(null, {
  addTime,
})(TimeCard);
