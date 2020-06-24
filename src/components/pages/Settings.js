import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { changeSound, toggleTheme } from '../../actions/index';
import { SOUNDS } from '../../reducers/audioReducer';
import { LOCALSTORAGE } from '../../configs';

import './Settings.scss';

class Settings extends React.Component {
  onSoundSelectChange = (e) => {
    const { changeSound } = this.props;
    changeSound(e.target.value);
  };

  onToggleThemeClick = () => {
    const { toggleTheme } = this.props;
    toggleTheme();
  };

  onStore = () => {
    const {
      audio: { name: soundName },
      theme,
    } = this.props;
    localStorage.setItem(LOCALSTORAGE.sound, soundName);
    localStorage.setItem(LOCALSTORAGE.theme.key, theme);
  };

  renderOptions = () =>
    Object.keys(SOUNDS).map((sound) => {
      const { fullName: soundName } = SOUNDS[sound];

      return (
        <option key={sound} value={sound}>
          {soundName}
        </option>
      );
    });

  renderSoundList = () => {
    const {
      audio: { sound },
    } = this.props;

    return (
      <div>
        <p className="form-control form-label">Finish sound</p>
        <Field
          name="soundSelect"
          component="select"
          onChange={this.onSoundSelectChange}
          className="form-control select"
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
      </div>
    );
  };

  renderToggleThemeButton() {
    const { theme } = this.props;
    const checked = theme === LOCALSTORAGE.theme.dark;

    return (
      <div className="form-control">
        <p>Use dark theme</p>
        <label className="switch">
          <input type="checkbox" checked={checked} readOnly />
          <span
            role="button"
            tabIndex={0}
            className="slider"
            onClick={this.onToggleThemeClick}
            onKeyDown={this.onToggleThemeClick}
          />
        </label>
      </div>
    );
  }

  renderSaving() {
    return (
      <div>
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
  }

  renderModal = () => (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-body">
          <form onSubmit={this.onSubmit}>
            {this.renderSoundList()}
            {this.renderToggleThemeButton()}
            {this.renderSaving()}
          </form>
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
  theme: PropTypes.string.isRequired,
  changeSound: PropTypes.func.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const storedSound = localStorage.getItem(LOCALSTORAGE.sound);

  return {
    audio: state.audio,
    theme: state.theme,
    initialValues: {
      soundSelect: storedSound || state.audio.name,
    },
  };
};

const form = reduxForm({
  form: 'settings',
})(Settings);

export default connect(mapStateToProps, {
  changeSound,
  toggleTheme,
})(form);
