import React from 'react'
import queryString from 'query-string';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroeByName } from '../../selectors/getHeroeByName';
import {HeroCard} from '../hero/HeroCard';


export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const {q = '' }= queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    search: q
  });

  const {search} = formValues;

  const heroesFiltered = getHeroeByName(q);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${search}`);

  }

  return (
    <>
      <div className='row'>
      
        <div className='col-5'>

          <h4>Buscar heroe</h4>

          <form onSubmit={handleSearch}>
            <input 
              type='text'
              placeholder='Buscar...'
              className='form-control'
              name='search'
              autoComplete='off'
              onChange={handleInputChange}
              value={search}
            />
            <button
              className='btn btn-outline-primary mt-1'
              type='submit'
            >
              Buscar
            </button>
          </form>

        </div>

        <div className='col-7'>
        
          <h4>Resultados</h4>
          
          {
            heroesFiltered.map( heroe => (
              <HeroCard
                key={heroe.id}
                {...heroe}
              />
            )) 
          }

        </div>
      </div>
    </>
  )
}
