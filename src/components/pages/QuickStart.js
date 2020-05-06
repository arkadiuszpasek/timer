import React from 'react';

import TimeDisplay from '../timer/TimeDisplay';
import TimeCard from '../timer/TimeCard';
import Reset from '../timer/Reset';


const QuickStart = () => (
  <div className="container text-center">
    <TimeDisplay />
    <div className="col-10 ml-auto mr-auto">
      <div className="card mb-5">
        <div className="card-body">
          The timer is stopped on this page, but normally it is always on.
          <br />
          By clicking time cards you add time to it.
          <br />
          Try clicking this 10 minute card twice to set the timer for 20 minutes!
        </div>
      </div>
    </div>
    <TimeCard time={10} unit="m" />
    <div className="col-8 ml-auto mr-auto mt-5">
      <div className="card mb-5">
        <div className="card-body">
          Now you can go to main page to see it going!
        </div>
      </div>
    </div>
  </div>
);

export default QuickStart;
