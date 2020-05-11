import { combineReducers } from 'redux';

import timeReducer from './timeReducer';
import audioReducer from './audioReducer';
import settingsFormReducer from './settingsFormReducer';

export default combineReducers({
  time: timeReducer,
  audio: audioReducer,
  settingsForm: settingsFormReducer,
});
