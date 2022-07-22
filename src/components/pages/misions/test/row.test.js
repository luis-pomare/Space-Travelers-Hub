import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Row from '../row';

const Element = () => {
  <BrowserRouter>
    <Row />
  </BrowserRouter>;
};

it('Renders ok', () => {
  const content = renderer.create(<Element />).toJSON();
  expect(content).toMatchSnapshot();
});
