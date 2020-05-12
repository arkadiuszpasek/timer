import { combineReducers } from 'redux';
import { reducer as settingsFormReducer } from 'redux-form';

import timeReducer from './timeReducer';
import audioReducer from './audioReducer';

export default combineReducers({
  time: timeReducer,
  audio: audioReducer,
  form: settingsFormReducer,
});
