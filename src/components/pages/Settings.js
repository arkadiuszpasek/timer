import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { changeSound } from '../../actions/index';
import { SOUNDS } from '../../reducers/audioReducer';
import { LOCALSTORAGE } from '../../configs';

import './Settings.scss';

class Settings extends React.Component {
  onSoundSelectChange = (e) => {
    const { changeSound } = this.props;
    changeSound(e.target.value);
  };

  onStore = () => {
    const {
      audio: { name: soundName },
    } = this.props;
    localStorage.setItem(LOCALSTORAGE.sound, soundName);
  };

  renderOptions = () =>
    Object.keys(SOUNDS).map((sound) => {
      const { fullName: soundName } = SOUNDS[sound];
      return (
        <option key={soundName} value={sound}>
          {soundName}
        </option>
      );
    });

  renderSoundList = () => {
    const {
      audio: { sound },
      initialValues: { soundSelect },
    } = this.props;
    return (
      <div className="form-group">
        <p className="form-control form-label">Finish sound</p>
        <Field
          name="soundSelect"
          component="select"
          onChange={this.onSoundSelectChange}
          className="form-control select"
          value={soundSelect}
        >
          {this.renderOptions()}
        </Field>
        <div>
          <button
            type="button"
            className="btn btn-primary form-control"
            onClick={() => sound.play()}
          >
            Play sound
          </button>
        </div>
        <p className="form-control">
          <small>
            Changes are remembered dynamically for the current session, while
            hitting &apos;Store&apos; will save them in your browser storage.
          </small>
        </p>
        <div className="form-group text-right">
          <button
            type="button"
            className="btn btn-dark form-control"
            onClick={this.onStore}
          >
            Store
          </button>
        </div>
      </div>
    );
  };

  renderModal = () => (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-body">
          <form onSubmit={this.onSubmit}>{this.renderSoundList()}</form>
        </div>
      </div>
    </div>
  );

  render() {
    return ReactDOM.createPortal(
      this.renderModal(),
      document.querySelector('#modal'),
    );
  }
}

Settings.propTypes = {
  audio: PropTypes.objectOf(PropTypes.any).isRequired,
  initialValues: PropTypes.objectOf(PropTypes.any).isRequired,
  changeSound: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  audio: state.audio,
  initialValues: {
    soundSelect: state.audio.name,
  },
});

const form = reduxForm({
  form: 'settings',
})(Settings);

export default connect(mapStateToProps, {
  changeSound,
})(form);
