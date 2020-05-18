/* eslint-disable import/prefer-default-export */
import * as types from './types';

export const addTime = (timeObject) => ({
  type: types.ADD_TIME,
  payload: timeObject,
});

export const resetTime = () => ({
  type: types.RESET_TIME,
});

export const timeTick = () => ({
  type: types.TIME_TICK,
});

export const changeSound = (soundName) => ({
  type: types.SOUND_CHANGE,
  payload: soundName,
});
