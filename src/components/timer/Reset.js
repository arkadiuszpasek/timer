/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import { resetTime } from '../../actions';

class Reset extends React.Component {
  render() {
    // eslint-disable-next-line no-shadow
    const { resetTime } = this.props;
    return (
      <div className="row mb-5">
        <div
          role="button"
          tabIndex="0"
          className="col-6 ml-auto btn mr-auto bg-primary"
          onClick={() => resetTime()}
        >
          <h1 className="pt-2">Reset</h1>
        </div>
      </div>
    );
  }
}

export default connect(null, {
  resetTime,
})(Reset);
