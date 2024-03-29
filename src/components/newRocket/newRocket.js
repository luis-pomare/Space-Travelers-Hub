import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../redux/rocket/rocket';

const NewRocket = (props) => {
  const dispatch = useDispatch();

  const {
    id, description, rocketName, flickrImages, reserved,
  } = props;

  return (
    <article className="card">
      <section id={id} className="rocket-section">
        <img className="images" alt="this is a rocket" src={flickrImages} />
        <div className="rocket-description">
          <h2>{rocketName}</h2>
          {reserved ? <span className="reserved-description"><b>Reserved</b></span> : ''}
          <h4>{description}</h4>
          {reserved
            ? (
              <button
                type="button"
                className="cancel-reserve"
                onClick={() => dispatch(reserveRocket(id))}
              >
                Cancel Reservation
                {' '}
              </button>
            )
            : (
              <button
                type="button"
                className="reserve-button"
                onClick={() => dispatch(reserveRocket(id))}
              >
                Reserve Rocket
                {' '}
              </button>
            )}
        </div>
      </section>
    </article>
  );
};

NewRocket.propTypes = {
  id: PropTypes.number.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default NewRocket;
