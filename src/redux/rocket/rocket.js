import { createSlice } from '@reduxjs/toolkit';
// createSlice

const initialState = {
  rockets: [
    {
      id: 1,
      rocket_name: 'rocket1',
      description: 'lorem1',
      flickr_images: 'https://imgur.com/DaCfMsj.jpg',
    },
    {
      id: 1,
      rocket_name: 'rocket1',
      description: 'lorem1',
      flickr_images: 'https://imgur.com/DaCfMsj.jpg',
    },
  ],
};

const rocketsSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    getRockets(state) {
      return state;
    },
  },
});

export default rocketsSlice;
