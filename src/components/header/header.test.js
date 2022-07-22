import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import Header from './header';

test('header displayed', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );
  expect(document.querySelector('header')).toBeInTheDocument();
});
