import React from 'react';
import { Link } from 'react-router-dom';

import TimeDisplay from '../timer/TimeDisplay';
import TimeCard from '../timer/TimeCard';

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
    <Link to="/">
      <div className="col-8 ml-auto mr-auto mt-5">
        <div className="card mb-5">
          <div className="card-body">
            Click here to go to main page and see it going!
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default QuickStart;
