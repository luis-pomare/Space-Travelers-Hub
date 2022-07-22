import React from 'react';
import { useDispatch } from 'react-redux';
import { missionJoin } from '../../../redux/mission/missions';
import Conditional from './conditional';

const Row = (prop) => {
  const dispatch = useDispatch();
  const {
    name, description, id, joined,
  } = prop;

  const clickHandler = (id) => {
    dispatch(missionJoin(id));
  };

  return (
    <tr id={id}>
      <td className="tableTittle column1">{name}</td>
      <td className="column2">{description}</td>
      <Conditional clickHandler={clickHandler} id={id} joined={joined} />
    </tr>
  );
};

export default Row;
