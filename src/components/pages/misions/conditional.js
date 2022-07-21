import React from 'react';
import PropTypes from 'prop-types';

function Joined(props) {
  const { clickHandler, id } = props;
  return (
    <>
      <td className="tdJoined colum3">Active Member</td>
      <td className="column4">
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
      <td className="tdUnJoined column3">NOT A MEMBER</td>
      <td className="column4">
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
  id: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

Unjoined.propTypes = {
  id: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

Conditional.propTypes = {
  id: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  joined: PropTypes.bool.isRequired,
};
