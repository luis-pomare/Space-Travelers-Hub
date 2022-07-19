import React from 'react';
import { useDispatch } from 'react-redux';
import { missionJoin } from '../../../redux/mission/missions';

const Row = (prop) => {
  const dispatch = useDispatch();
  const {
    name, description, id, joined,
  } = prop;

  const clickHandler = (id) => {
    dispatch(missionJoin(id));
  };

  let buttonClass = '';
  let tdClass = '';
  let buttonText = '';
  let tdText = '';

  if (joined) {
    buttonClass = 'buttonJoined';
    tdClass = 'tdJoined';
    buttonText = 'Leave Mission';
    tdText = 'Active Member';
  } else {
    buttonClass = 'buttonUnJoined';
    tdClass = 'tdUnJoined';
    buttonText = 'Join Mission';
    tdText = 'NOT A MEMBER';
  }

  return (
    <tr id={id}>
      <td>{name}</td>
      <td>{description}</td>
      <td className={tdClass}>{tdText}</td>
      <td>
        <button
          className={buttonClass}
          type="button"
          onClick={() => {
            clickHandler(id);
          }}
        >
          {buttonText}
        </button>
      </td>
    </tr>
  );
};

export default Row;
