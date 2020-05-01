/* eslint-disable import/prefer-default-export */
import { ADD_TIME, RESET_TIME } from './types';

export const addTime = (timeObject) => ({
  type: ADD_TIME,
  payload: timeObject,
});

export const resetTime = () => ({
  type: RESET_TIME,
});
