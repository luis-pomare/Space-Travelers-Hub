import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Missions() {
  const state = useSelector((state) => state.rockets);
  let id;
  useEffect(() => {
    const call = async () => {
      const response = await fetch('https://api.spacexdata.com/v3/missions');
      const missions = await response.json();
      id = missions[0].id;
      console.log(state);
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
            <th> {id}</th>
          </tr>
        </thead>
        <tbody>{}</tbody>
      </table>
    </main>
  );
}
