/* eslint-disable react/prop-types */
import React from 'react';

class TimeCard extends React.Component {
  render() {
    const { time, unit } = this.props;
    return (
      <div className="col-3 ml-auto mr-auto bg-secondary">
        <h2 className="pt-3 pb-1">
          {time}
          {unit}
        </h2>
      </div>
    );
  }
}

export default TimeCard;
