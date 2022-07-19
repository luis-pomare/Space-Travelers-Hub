import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../../../redux/mission/missions';
import Row from './row';

export default function Missions() {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  function addJoin(data) {
    return data.map((mission) => ({
      ...mission,
      joinned: false,
      id: mission.mission_id,
    }));
  }

  useEffect(() => {
    const call = async () => {
      let response = await fetch('https://api.spacexdata.com/v3/missions');
      response = await response.json();
      dispatch(getMissions(addJoin(response)));
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
            <Row
              key={mission.mission_id}
              id={mission.mission_id}
              name={mission.mission_name}
              description={mission.description}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
}
