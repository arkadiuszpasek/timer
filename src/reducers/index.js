import { combineReducers } from 'redux';

import timeReducer from './timeReducer';
import audioReducer from './audioReducer';

export default combineReducers({
  time: timeReducer,
  audio: audioReducer,
});
