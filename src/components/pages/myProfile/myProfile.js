import React from 'react';
import MyRockets from './miRockets';
import MyMissions from './myMissions';

export default function MyProfile() {
  return (
    <main id="profileContainer">
      <MyMissions />
      <MyRockets />
    </main>
  );
}
