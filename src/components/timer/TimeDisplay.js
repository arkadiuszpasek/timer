/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';

class TimeDisplay extends React.Component {
  render() {
    const { hours, minutes,seconds } = this.props.time;
    return (
      <div className="mt-5 mb-5">
        <h1>{hours}:{minutes}:{seconds}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ time: state.time });

export default connect(mapStateToProps)(TimeDisplay);
