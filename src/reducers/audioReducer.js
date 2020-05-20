import { SOUND_CHANGE } from '../actions/types';

export const SOUNDS = {
  ding: {
    url:
      'https://raw.githubusercontent.com/arkadiuszpasek/simple-timer/master/res/ding.mp3',
    fullName: 'Gentle Bell',
  },
  w3: {
    url:
      'https://raw.githubusercontent.com/arkadiuszpasek/Online-Youtube-Timer/master/res/w3QuestSound.mp3',
    fullName: 'Witcher 3 Quest Sound',
  },
};

const INITIAL_AUDIO = {
  name: 'ding',
  fullName: SOUNDS.ding.fullName,
  sound: new Audio(SOUNDS.ding.url),
};

const constructAudioObject = (name) => ({
  name,
  sound: new Audio(SOUNDS[name].url),
  fullName: SOUNDS[name].fullName,
});

export default (state = INITIAL_AUDIO, action) => {
  switch (action.type) {
    case SOUND_CHANGE:
      return constructAudioObject(action.payload);
    default:
      return state;
  }
};
