import { createAsyncThunk } from '@reduxjs/toolkit';

const createRocketList = (obj) => {
  const result = obj.map((rocket) => ({
    id: rocket.id,
    rocketName: rocket.rocket_name,
    description: rocket.description,
    flickrImages: rocket.flickr_images[0],
    reserved: false,
  }));
  return result;
};

const getRockets = createAsyncThunk(
  'rocket/getRockets',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    return createRocketList(data);
  },
);

export default getRockets;
