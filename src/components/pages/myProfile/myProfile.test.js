import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../../redux/configureStore';
import MyMissions from './myMissions';

function wrapperPage() {
  return (<Provider store={store}><MyMissions /></Provider>);
}

test('Profile displayed', () => {
  render(<MyMissions />, { wrapper: wrapperPage });
  expect(document.querySelector('section')).toBeInTheDocument();
});
