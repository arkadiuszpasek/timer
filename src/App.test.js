import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import { createAppStore } from './setupTests';
import App from './App';

describe('Application tests', () => {
  let store;

  beforeAll(() => {
    store = createAppStore();
  });

  it('renders correctly', () => {
    shallow(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });
});
