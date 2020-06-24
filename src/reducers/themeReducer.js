import { THEME_CHANGE, THEME_TOGGLE } from '../actions/types';

const themes = {
  light: 'light',
  dark: 'dark',
};

export default (state = themes.dark, action) => {
  switch (action.type) {
    case THEME_CHANGE:
      return action.payload;
    case THEME_TOGGLE:
      return state === themes.light ? themes.dark : themes.light;
    default:
      return state;
  }
};
