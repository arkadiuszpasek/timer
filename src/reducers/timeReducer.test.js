import * as actions from '../actions';
import reducer from './timeReducer';

const INITIAL_STATE = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};

describe('Time Reducer tests', () => {
  it('returns empty time object on initial call', () => {
    expect(reducer(undefined, {})).toMatchObject(INITIAL_STATE);
  });

  it('returns empty time object on reset', () => {
    expect(reducer(undefined, actions.resetTime())).toMatchObject(
      INITIAL_STATE,
    );
  });

  it('properly decreases values on time tick', () => {
    expect(
      reducer(
        {
          hours: 1,
          minutes: 15,
          seconds: 55,
        },
        actions.timeTick(),
      ),
    ).toMatchObject({
      hours: 1,
      minutes: 15,
      seconds: 54,
    });

    expect(
      reducer(
        {
          hours: 1,
          minutes: 15,
          seconds: 0,
        },
        actions.timeTick(),
      ),
    ).toMatchObject({
      hours: 1,
      minutes: 14,
      seconds: 59,
    });

    expect(
      reducer(
        {
          hours: 1,
          minutes: 0,
          seconds: 0,
        },
        actions.timeTick(),
      ),
    ).toMatchObject({
      hours: 0,
      minutes: 59,
      seconds: 59,
    });

    expect(reducer(INITIAL_STATE, actions.timeTick())).toMatchObject(
      INITIAL_STATE,
    );
  });

  it('properly adds time to state', () => {
    const time = {
      hours: 1,
      minutes: 3,
      seconds: 15,
    };

    expect(reducer(INITIAL_STATE, actions.addTime(time))).toMatchObject(time);

    expect(reducer(time, actions.addTime(time))).toMatchObject({
      hours: 2,
      minutes: 6,
      seconds: 30,
    });

    expect(
      reducer(
        INITIAL_STATE,
        actions.addTime({
          hours: 4,
          minutes: 13,
          seconds: 240,
        }),
      ),
    ).toMatchObject({
      hours: 4,
      minutes: 17,
      seconds: 0,
    });

    expect(
      reducer(
        INITIAL_STATE,
        actions.addTime({
          hours: 4,
          minutes: 58,
          seconds: 245,
        }),
      ),
    ).toMatchObject({
      hours: 5,
      minutes: 2,
      seconds: 5,
    });
  });
});
