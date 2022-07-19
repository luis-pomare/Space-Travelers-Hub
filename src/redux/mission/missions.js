import { createSlice } from '@reduxjs/toolkit';

const initialState = [{ name: 'apolo' }];

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    getMissions(state, action) {
      return action.payload;
    },
  },
});

export const { getMissions } = missionSlice.actions;
export default missionSlice.reducer;
