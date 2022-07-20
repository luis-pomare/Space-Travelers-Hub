import React from 'react';
import PropTypes from 'prop-types';

function Joined(props) {
  const { clickHandler, id } = props;
  return (
    <>
      <td>
        <td className="tdJoined">Active Member</td>
        <button
          className="buttonJoined"
          type="button"
          onClick={() => {
            clickHandler(id);
          }}
        >
          Leave Mission
        </button>
      </td>
    </>
  );
}

function Unjoined(props) {
  const { clickHandler, id } = props;
  return (
    <>
      <td>
        <td className="tdUnJoined">NOT A MEMBER</td>
        <button
          className="buttonUnJoined"
          type="button"
          onClick={() => {
            clickHandler(id);
          }}
        >
          Join Mission
        </button>
      </td>
    </>
  );
}

export default function Conditional(props) {
  const { clickHandler, joined, id } = props;
  return joined ? (
    <Joined clickHandler={clickHandler} id={id} />
  ) : (
    <Unjoined clickHandler={clickHandler} id={id} />
  );
}

Joined.propTypes = {
  id: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

Unjoined.propTypes = {
  id: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

Conditional.propTypes = {
  id: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
  joined: PropTypes.bool.isRequired,
};