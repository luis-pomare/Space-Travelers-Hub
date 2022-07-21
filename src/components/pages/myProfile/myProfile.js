import React from 'react';
import { useSelector } from 'react-redux';
import MyMissions from './myMissions';

export default function MyProfile() {
  const { rockets } = useSelector((state) => state.rockets);
  const rocketList = Object.keys(rockets);

  const rocketReserved = [];

  if (rocketList.length) {
    rocketList.forEach((item) => {
      if (rockets[item].reserved) {
        rocketReserved.push({
          id: rocketReserved.length + 1,
          rocketName: rockets[item].rocketName,
        });
      }
    });
  }

  return (
    <section className="profileContainer">
      <h2 className="myMissionsTitle">My Rockets</h2>
      <ul className="list-group">
        {
          rocketReserved.length ? rocketReserved.map((item) => (
            <li key={item.id}>{item.rocketName}</li>
          )) : <li>No Rockets Selected</li>
        }
      </ul>
      <MyMissions />
    </section>
  );
}
