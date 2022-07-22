import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../../redux/configureStore';
import Rockets from './rockets';

function wrapperPage() {
  return (<Provider store={store}><Rockets /></Provider>);
}

test('Rockets displayed', () => {
  render(<Rockets />, { wrapper: wrapperPage });
  expect(document.querySelector('section')).toBeInTheDocument();
});
