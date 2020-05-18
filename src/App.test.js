import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import reducers from './reducers/index';

describe('Application tests', () => {
  let store;

  beforeAll(() => {
    store = createStore(reducers);
  });

  it('renders correctly', () => {
    shallow(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });
});
