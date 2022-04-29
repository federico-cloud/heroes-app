import React, {useMemo} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getHeroeById } from '../../selectors/getHeroeById';
import { heroImages } from '../helpers/heroImages';

export const HeroScreen = () => {

  const handleReturn = () => {

    return navigate(-1);

  }

  const {heroId} = useParams();
  const navigate = useNavigate();
  
  const hero = useMemo ( () => getHeroeById(heroId), [heroId]);
  
  if (!hero) {
    return <h1>No existe el heroe</h1>
  }
  
  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;
    
  return (
    <div className='row mt-5'>

        <div className='col-4'>
          <img
            src={heroImages(`./${id}.jpg`)}
            alt={superhero}
            className='img-thumbnail animate__animated animate__fadeInTopLeft'
          />
        </div>
        <div className='col-8'>
          <h3>{superhero}</h3>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'><b>Alter ego:</b>{alter_ego}</li>
            <li className='list-group-item'><b>Publisher</b>{publisher}</li>
            <li className='list-group-item'><b>First Appearance:</b>{first_appearance}</li>
          </ul>

        <h5 className='mt-3'>Characters</h5>
        <p>{characters}</p>

        <button
          className='btn btn-outline-info'
          onClick={handleReturn}
        >
          Return
        </button>

        </div>
    </div>
  )
}
