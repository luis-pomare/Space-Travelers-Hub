import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import getRockets from '../../../rocket-api';
import NewRocket from '../../newRocket/newRocket';

export default function Rockets() {
  // const dispatch = useDispatch();
  const { rockets } = useSelector((state) => state.rockets);
  const rocketList = Object.keys(rockets);
  console.log(rockets);
  console.log(rocketList);

  // useEffect(() => {
  //   dispatch(getRockets());
  // }, []);

  return (
    <section className="list-of-rockets">
      {
        rocketList ? rocketList.map((rocket) => (
          // console.log(rocket),
          <NewRocket
            key={parseFloat(rocket)}
            id={parseFloat(rocket)}
            rocketName={rockets[rocket].rocketName}
            description={rockets[rocket].description}
            flickrImages={rockets[rocket].flickrImages}
            reserved={rockets[rocket].reserved}
          />
        )) : <p>Rockets not found</p>

      }
    </section>
  );
}
