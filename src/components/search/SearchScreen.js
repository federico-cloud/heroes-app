import React from 'react'
import { useForm } from '../../hooks/useForm'

export const SearchScreen = () => {

  const [formValues, handleInputChange, reset] = useForm({
    search: ''
  });

  const {search} = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    reset();
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
      </div>
    </>
  )
}
