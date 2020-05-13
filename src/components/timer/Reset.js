import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { resetTime } from '../../actions';

class Reset extends React.Component {
  render() {
    const { resetTime } = this.props;
    return (
      <div className="row mb-5">
        <div
          role="button"
          tabIndex="0"
          className="col-6 ml-auto btn mr-auto bg-primary"
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
