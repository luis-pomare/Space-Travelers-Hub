import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rocket/rocket';

const rootReducer = {
  rockets: rocketsSlice.reducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;
