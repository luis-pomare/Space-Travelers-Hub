import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Missions() {
  const [missions] = useState(useSelector((state) => state.missions));

  useEffect(() => {
    const call = async () => {
      let response = await fetch('https://api.spacexdata.com/v3/missions');
      response = await response.json();
      console.log(response);
    };
    call();
  });

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>
              {' '}
              {missions[0].name}
            </th>
          </tr>
        </thead>
        <tbody>{}</tbody>
      </table>
    </main>
  );
}
