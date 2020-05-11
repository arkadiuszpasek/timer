import { SOUND_CHANGE } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case SOUND_CHANGE:
      return [];
    default:
      return state;
  }
};
