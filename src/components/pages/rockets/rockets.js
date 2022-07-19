import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import getRockets from '../../../rocket-api';
import NewRocket from '../../newRocket/newRocket';

export default function Rockets() {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <section className="list-of-rockets">
      {
        rockets.length ? rockets.map((rocket) => (
          <NewRocket
            key={rocket.id}
            id={rocket.id}
            rocketName={rocket.rocketName}
            description={rocket.description}
            flickrImages={rocket.flickrImages}
          />
        )) : <p>Rockets not found</p>
      }
    </section>
  );
}
