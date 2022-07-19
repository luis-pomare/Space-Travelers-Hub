import { createSlice } from '@reduxjs/toolkit';
import getRockets from '../../rocket-api';

const initialState = {
  rockets: [],
  status: null,
  reserved: false,
};

const rocketsSlice = createSlice({
  name: 'rocket',
  initialState,
  extraReducers: {
    [getRockets.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [getRockets.fulfilled]: (state, action) => ({
      ...state,
      status: 'success',
      rockets: action.payload,
    }),
    [getRockets.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
  },
});

export const getRocket = rocketsSlice.actions;
export default rocketsSlice;
