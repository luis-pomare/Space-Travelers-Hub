import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rocket/rocket';
import missions from './mission/missions';

const rootReducer = {
  rockets: rocketsSlice.reducer,
  missions,
};

const store = configureStore({ reducer: rootReducer });

export default store;
