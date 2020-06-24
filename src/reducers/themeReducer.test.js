import * as actions from '../actions';
import reducer from './themeReducer';

const defaultTheme = 'dark';

describe('Theme reducer tests', () => {
  it('returns dark theme as default', () => {
    expect(reducer(undefined, {})).toMatch(defaultTheme);
  });

  it('changes theme on CHANGE_THEME action', () => {
    expect(reducer(defaultTheme, actions.setTheme('light'))).toMatch('light');
    expect(reducer(defaultTheme, actions.setTheme('dark'))).toMatch('dark');
  });

  it('toggles themes between dark and light', () => {
    expect(reducer('light', actions.toggleTheme())).toMatch('dark');
    expect(reducer('dark', actions.toggleTheme())).toMatch('light');
  });
});
