import React from 'react';

import TimeDisplay from './TimeDisplay';
import TimesGrid from './TimesGrid';
import Reset from './Reset';

class Timer extends React.Component {
  render() {
    return (
      <div className="container text-center">
        <TimeDisplay />
        <TimesGrid />
        <Reset />
      </div>
    );
  }
}

export default Timer;
