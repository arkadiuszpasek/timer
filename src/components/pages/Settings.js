import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import history from '../../history';
import { changeSound } from '../../actions/index';
import { SOUNDS } from '../../reducers/audioReducer';

class Settings extends React.Component {
  onChange = () => {
    console.log(this);
    // history.push('/');
  }

  renderOptions = () => Object.keys(SOUNDS).map((sound) => {
    const { fullName: soundName } = SOUNDS[sound];
    const { changeSound } = this.props;
    return (
      <option
        key={soundName}
        value={sound}
        onClick={() => changeSound(sound)}
      >
        {soundName}
      </option>
    );
  })

  renderSoundList = () => {
    const { audio: { name: soundName } } = this.props;
    return (
      <div className="form-group">
        <label>Finish sound</label>
        <select className="form-control" defaultValue={soundName}>
          {this.renderOptions()}
        </select>
      </div>
    );
  }

  renderModal = () => (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Settings</h5>
        </div>
        <div className="modal-body">
          <form>
            {this.renderSoundList()}
          </form>
        </div>
      </div>
    </div>
  );

  render() {
    return ReactDOM.createPortal(this.renderModal(),
      document.querySelector('#modal'));
  }
}

const mapStateToProps = (state) => ({ audio: state.audio });

const formComponent = reduxForm({
  form: 'settings',
})(Settings);

export default connect(mapStateToProps, {
  changeSound,
})(formComponent);
