import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createStore } from 'redux';
import reducers from './reducers';

configure({
  adapter: new Adapter(),
});

// eslint-disable-next-line import/prefer-default-export
export const createAppStore = () => createStore(reducers);
