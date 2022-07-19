// import { useDispatch } from 'react-redux/es/exports';
import PropTypes from 'prop-types';

const NewRocket = (props) => {
  // const dispatch = useDispatch();

  const {
    id, description, rocketName, flickrImages,
  } = props;

  return (
    <article className="card">
      <section className="rocket-section">
        <div id={id} className="rocket-description">
          <img alt="this is a rocket" src={flickrImages} />
          <h4>{rocketName}</h4>
          <h2>{description}</h2>
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
};

export default NewRocket;
