import { createSlice } from '@reduxjs/toolkit';

const initialState = [{ name: 'apolo' }];

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    getMissions(state, action) {
      return action.payload;
    },
    missionJoin(state) {
      return state.map((mission) => ({
        ...mission,
        joined: true,
      }));
    },
  },
});

export const { getMissions, missionJoin } = missionSlice.actions;
export default missionSlice.reducer;
