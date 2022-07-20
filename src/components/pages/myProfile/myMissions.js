import React from 'react';
import { useSelector } from 'react-redux';

export default function MyMissions() {
  const missions = useSelector((state) => state.missions);
  const selectedMissions = missions.filter((item) => item.joined);

  return (
    <section>
      <h2 id="myMissionsTitle">My Missions</h2>
      <span id="myMissionsContainer">
        {selectedMissions.length > 0 ? (
          selectedMissions.map((item) => (
            <p key={item.id}>{item.mission_name}</p>
          ))
        ) : (
          <p>Not missions joined yet</p>
        )}
      </span>
    </section>
  );
}
