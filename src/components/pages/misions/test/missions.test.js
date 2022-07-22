import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Missions from '../misions';

const Element = () => {
  <BrowserRouter>
    <Missions />
  </BrowserRouter>;
};

it('Renders ok', () => {
  const content = renderer.create(<Element />).toJSON();
  expect(content).toMatchSnapshot();
});
