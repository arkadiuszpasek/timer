import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { resetTime } from '../../actions';

class Reset extends React.Component {
  render() {
    const { resetTime } = this.props;
    return (
      <div className="">
        <div
          role="button"
          tabIndex="0"
          className="btn btn-secondary"
          onClick={() => resetTime()}
          onKeyDown={() => resetTime()}
        >
          <h1 className="pt-2">Reset</h1>
        </div>
      </div>
    );
  }
}

Reset.propTypes = {
  resetTime: PropTypes.func.isRequired,
};

export default connect(null, {
  resetTime,
})(Reset);
