import { useSelector } from 'react-redux';
import NewRocket from '../../newRocket/newRocket';

export default function Rockets() {
  const { rockets } = useSelector((state) => state.rockets);
  const rocketList = Object.keys(rockets);

  return (
    <section className="list-of-rockets">
      {
        rocketList ? rocketList.map((rocket) => (
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
