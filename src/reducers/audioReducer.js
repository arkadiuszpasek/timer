import { SOUND_CHANGE } from '../actions/types';

// const INITIAL_AUDIO = new Audio('../../res/ding.mp3');
const INITIAL_AUDIO = new Audio('https://raw.githubusercontent.com/arkadiuszpasek/Online-Youtube-Timer/master/res/w3QuestSound.mp3');

export default (state = INITIAL_AUDIO, action) => {
  switch (action.type) {
    case SOUND_CHANGE:
      return state;
    default:
      return state;
  }
};
