import React from 'react';

const Row = (prop) => {
  const { name, description, id } = prop;

  return (
    <tr key={id + 1}>
      <td key={id + 2}>{name}</td>
      <td key={id + 3}>{description}</td>
      <td key={id + 4}>Not a member</td>
      <td key={id + 5}>
        <button className="join" type="button">
          Join Mission
        </button>
      </td>
    </tr>
  );
};

export default Row;
