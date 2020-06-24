/* eslint-disable no-proto */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import { createAppStore } from '../../setupTests';
import Settings from './Settings';
import { changeSound, setTheme } from '../../actions';
import { LOCALSTORAGE } from '../../configs';

describe('Settings tests', () => {
  const store = createAppStore();
  let settingsComponent;

  beforeEach(() => {
    const modal = document.createElement('div');
    modal.setAttribute('id', 'modal');
    document.querySelector('body').appendChild(modal);
    settingsComponent = mount(
      <Provider store={store}>
        <Settings />
      </Provider>,
    );
  });

  afterEach(() => {
    settingsComponent.unmount();
  });

  it('Saves settings to localStorage on store', () => {
    localStorage.__proto__.setItem = jest.fn();
    settingsComponent.find('button').last().simulate('click');

    expect(localStorage.setItem).toHaveBeenCalledWith(
      LOCALSTORAGE.sound,
      store.getState().audio.name,
    );

    expect(localStorage.setItem).toHaveBeenCalledWith(
      LOCALSTORAGE.theme.key,
      store.getState().theme,
    );
  });

  it('Changes state audio after change in select element', () => {
    const initialSound = 'w3';
    const changedSound = 'ding';

    store.dispatch(changeSound(initialSound));
    settingsComponent
      .find('select')
      .simulate('change', { target: { value: changedSound } });

    expect(store.getState().audio.name).toBe(changedSound);
  });

  it('Toggles use dark theme after click', () => {
    store.dispatch(setTheme('dark'));

    expect(
      settingsComponent.find('.switch').find('input').prop('checked'),
    ).toBeTruthy();
    expect(store.getState().theme).toBe('dark');

    settingsComponent.find('.switch').find('span').simulate('click');
    expect(
      settingsComponent.find('.switch').find('input').prop('checked'),
    ).toBeFalsy();
    expect(store.getState().theme).toBe('light');
  });
});
