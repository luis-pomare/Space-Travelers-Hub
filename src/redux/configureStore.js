import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rocket/rocket';

const rootReducer = {
  // books: bookReducer.reducer,
  // categories: categoriesReducer.reducer,
  rockets: rocketsSlice.reducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;
