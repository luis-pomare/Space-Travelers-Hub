import { createSlice } from '@reduxjs/toolkit';

const initialState = [{ name: 'apolo' }];

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    getMissions(state, action) {
      return action.payload;
    },
    missionJoin(state, action) {
      const id = action.payload;
      return state.map((mission) => {
        if (mission.id === id) {
          return { ...mission, joined: !mission.joined };
        }
        return mission;
      });
    },
  },
});

export const { getMissions, missionJoin } = missionSlice.actions;
export default missionSlice.reducer;
