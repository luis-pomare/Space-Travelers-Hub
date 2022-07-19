import React from 'react';

const Row = (prop) => {
  const { name, description, id } = prop;

  return (
    <tr id={id}>
      <td>{name}</td>
      <td>{description}</td>
      <td>Not a member</td>
      <td>
        <button className="join" type="button">
          Join Mission
        </button>
      </td>
    </tr>
  );
};

export default Row;
