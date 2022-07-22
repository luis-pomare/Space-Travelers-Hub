import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import MyMissions from '../myMissions';

const Element = () => {
  <BrowserRouter>
    <MyMissions />
  </BrowserRouter>;
};

it('Renders ok', () => {
  const content = renderer.create(<Element />).toJSON();
  expect(content).toMatchSnapshot();
});
