import React from 'react';
import { useSelector } from 'react-redux';

export default function MyMissions() {
  const missions = useSelector((state) => state.missions);
  const selectedMissions = missions.filter((item) => item.joined);

  return (
    <section>
      <h2 id="myMissionsTitle">My Missions</h2>
      <ul id="myMissionsContainer">
        {selectedMissions.length > 0 ? (
          selectedMissions.map((item) => (
            <li key={item.id}>{item.mission_name}</li>
          ))
        ) : (
          <li>Not missions joined yet</li>
        )}
      </ul>
    </section>
  );
}
