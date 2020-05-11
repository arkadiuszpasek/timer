/* eslint-disable import/prefer-default-export */
import {
  ADD_TIME,
  RESET_TIME,
  TIME_TICK,
  SOUND_CHANGE,
} from './types';

export const addTime = (timeObject) => ({
  type: ADD_TIME,
  payload: timeObject,
});

export const resetTime = () => ({
  type: RESET_TIME,
});

export const timeTick = () => ({
  type: TIME_TICK,
});

export const changeSound = (soundName) => ({
  type: SOUND_CHANGE,
  payload: soundName,
});
