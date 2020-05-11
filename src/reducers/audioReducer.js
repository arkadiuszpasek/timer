import { SOUND_CHANGE } from '../actions/types';

export const SOUNDS = {
  ding: {
    url: 'https://raw.githubusercontent.com/arkadiuszpasek/simple-timer/master/res/ding.mp3',
    fullName: 'Gentle Bell',
  },
  w3: {
    url: 'https://raw.githubusercontent.com/arkadiuszpasek/Online-Youtube-Timer/master/res/w3QuestSound.mp3',
    fullName: 'Witcher Quest Sound',
  },
};

const INITIAL_AUDIO = {
  name: 'ding',
  fullName: SOUNDS.ding.fullName,
  sound: new Audio(SOUNDS.ding.url),
};

export default (state = INITIAL_AUDIO, action) => {
  switch (action.type) {
    case SOUND_CHANGE:
      return {
        name: action.payload,
        fullName: SOUNDS[action.payload].fullName,
        sound: new Audio(SOUNDS[action.payload].url),
      };
    default:
      return state;
  }
};
