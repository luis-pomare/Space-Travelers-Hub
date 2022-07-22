import { createSlice } from '@reduxjs/toolkit';
import getRockets from '../../rocket-api';

const initialState = {
  rockets: [],
  status: null,
};

const rocketsSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    reserveRocket: (state, action) => ({
      ...state,
      rockets: {
        ...state.rockets,
        [action.payload]: {
          ...state.rockets[action.payload],
          reserved: !state.rockets[action.payload].reserved,
        },
      },
    }),
  },
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
    [getRockets.rejected]: (state) => ({
      ...state,
      status: 'failed',
    }),
  },
});

export const { reserveRocket } = rocketsSlice.actions;
export const getRocket = rocketsSlice.actions;
export default rocketsSlice;
