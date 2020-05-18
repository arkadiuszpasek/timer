import * as actions from '../actions';
import reducer from './audioReducer';

describe('Audio Reducer tests', () => {
  it('returns audio state object on initial call', () => {
    expect(reducer(undefined, {})).toHaveProperty('name', 'fullName', 'sound');
  });

  it('changes state on sound change action', () => {
    expect(reducer(undefined, actions.changeSound('ding'))).toMatchObject({
      name: 'ding',
      fullName: 'Gentle Bell',
      sound: new Audio(
        'https://raw.githubusercontent.com/arkadiuszpasek/simple-timer/master/res/ding.mp3',
      ),
    });
  });
});
