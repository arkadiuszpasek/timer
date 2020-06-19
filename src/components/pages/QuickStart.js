import React from 'react';
import { Link } from 'react-router-dom';

import TimeDisplay from '../timer/TimeDisplay';
import TimeCard from '../timer/TimeCard';

import './QuickStart.scss';

const QuickStart = () => (
  <div className="container text-center">
    <TimeDisplay />
    <div className="quickstart-flex mt mb">
      <h3>
        The timer is stopped on this page, but normally it is always on.
        <br />
        By clicking time cards you add time to it.
        <br />
        Try clicking this 10 minute card twice to set the timer for 20 minutes!
      </h3>
      <TimeCard time={10} unit="m" />
    </div>
    <Link to="/">
      <div className="btn btn-primary wide-btn mt-big">
        Click here to go to main page and see it going!
      </div>
    </Link>
  </div>
);

export default QuickStart;
