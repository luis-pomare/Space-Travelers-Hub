import React from 'react';
import { useDispatch } from 'react-redux';
import { missionJoin } from '../../../redux/mission/missions';

const Row = (prop) => {
  const dispatch = useDispatch();
  const { name, description, id } = prop;
  const clickHandler = () => {
    dispatch(missionJoin());
  };

  return (
    <tr id={id}>
      <td>{name}</td>
      <td>{description}</td>
      <td>Not a member</td>
      <td>
        <button
          className="join"
          type="button"
          onClick={() => {
            clickHandler();
          }}
        >
          Join Mission
        </button>
      </td>
    </tr>
  );
};

export default Row;
