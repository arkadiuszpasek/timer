import { ADD_TIME, RESET_TIME } from '../actions/types';

const INITIAL_STATE = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const addTimeValues = (state, values) => {
  const time = {
    hours: (state.hours + values.hours),
    minutes: (state.minutes + values.minutes),
    seconds: (state.seconds + values.seconds),
  };

  while (time.seconds > 59) {
    time.seconds -= 60;
    time.minutes += 1;
  }
  while (time.minutes > 59) {
    time.minutes -= 60;
    time.hours += 1;
  }

  return time;
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TIME:
      return addTimeValues(state, action.payload);
    case RESET_TIME:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
