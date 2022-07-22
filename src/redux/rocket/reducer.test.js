import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../configureStore';
import rockets from './rocket';
import Rockets from '../../components/pages/rockets/rockets';
import getRockets from '../../rocket-api';

const renderReservedRockets = (reserved) => {
  const { tree } = render(
    <Provider store={store}>
      <Rockets
        reserved={reserved}
        id={0}
        rocketName="Falcon 1"
        description="Test description"
        flickrImages="https://imgur.com/DaCfMsj.jpg"
      />
    </Provider>,
  );
  return tree;
};

test('Renders first Rocket', () => {
  expect(renderReservedRockets(true)).toMatchSnapshot();
});

test('should return the initial state', () => {
  expect(rockets.reducer(undefined, { type: undefined })).toEqual(
    { rockets: [], status: null },
  );
});

test('should return the loading state', () => {
  const loadingState = { rockets: [], status: 'loading' };

  expect(rockets.reducer(loadingState, getRockets('loading'))).toEqual(
    { rockets: [], status: 'loading' },
  );
});

test('should return the success state', () => {
  const loadingState = { rockets: [], status: 'success' };

  expect(rockets.reducer(loadingState, getRockets('success'))).toEqual(
    { rockets: [], status: 'success' },
  );
});

test('should return the failed state', () => {
  const loadingState = { rockets: [], status: 'failed' };

  expect(rockets.reducer(loadingState, getRockets('failed'))).toEqual(
    { rockets: [], status: 'failed' },
  );
});
