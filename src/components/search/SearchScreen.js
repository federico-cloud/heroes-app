import React, { useMemo } from 'react'
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

  const heroesFiltered = useMemo(() => getHeroeByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${search}`);

  }

  return (
    <>
      <div className='row m-3'>
      
        <div className='col-5'>

          <h4>Buscar heroe</h4>

          <form onSubmit={handleSearch}>
            <input 
              type='text'
              placeholder='Buscar...'
              className='form-control p-2'
              name='search'
              autoComplete='off'
              onChange={handleInputChange}
              value={search}
            />
            <button
              className='btn btn-outline-primary mt-3'
              type='submit'
            >
              Buscar
            </button>
          </form>

        </div>

        <div className='col-7'>
        
          <h4>Resultados</h4>

          {
            (q === '')
              ? <div className='alert alert-info p-2'>No se ha buscado ningun heroe</div>
              : ( heroesFiltered.length === 0 ) && <div className='alert alert-danger p-2'>No hay resultados</div>
            }
          
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
