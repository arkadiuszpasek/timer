import * as actions from './index';
import * as types from './types';

describe('Actions tests', () => {
  it('addTime action returns correct object', () => {
    const timeObject = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    const expected = {
      type: types.ADD_TIME,
      payload: timeObject,
    };

    expect(actions.addTime(timeObject)).toMatchObject(expected);
  });

  it('timeTick action returns correct object', () => {
    const expected = {
      type: types.TIME_TICK,
    };

    expect(actions.timeTick()).toMatchObject(expected);
  });

  it('resetTime action returns correct object', () => {
    const expected = {
      type: types.RESET_TIME,
    };

    expect(actions.resetTime()).toMatchObject(expected);
  });

  it('timeTick action returns correct object', () => {
    const name = 'sound';
    const expected = {
      type: types.SOUND_CHANGE,
      payload: name,
    };

    expect(actions.changeSound(name)).toMatchObject(expected);
  });
});
