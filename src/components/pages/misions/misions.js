import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../../../redux/mission/missions';

export default function Missions() {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    const call = async () => {
      let response = await fetch('https://api.spacexdata.com/v3/missions');
      response = await response.json();
      dispatch(getMissions(response));
    };
    call();
  }, []);

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
