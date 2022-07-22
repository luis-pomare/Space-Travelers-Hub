import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import MyProfile from '../myProfile';

const Element = () => {
  <BrowserRouter>
    <MyProfile />
  </BrowserRouter>;
};

it('Renders ok', () => {
  const content = renderer.create(<Element />).toJSON();
  expect(content).toMatchSnapshot();
});
