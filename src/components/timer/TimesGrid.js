import React from 'react';
import TimeCard from './TimeCard';

class TimesGrid extends React.Component {
  render() {
    return (
      <>
        <div className="row mb-5">
          <TimeCard time={1} unit="h" />
          <TimeCard time={30} unit="m" />
          <TimeCard time={10} unit="m" />
        </div>
        <div className="row mb-5">
          <TimeCard time={5} unit="m" />
          <TimeCard time={2} unit="m" />
          <TimeCard time={1} unit="m" />
        </div>
        <div className="row mb-5">
          <TimeCard time={30} unit="s" />
          <TimeCard time={10} unit="s" />
          <TimeCard time={5} unit="s" />
        </div>
      </>
    );
  }
}

export default TimesGrid;
