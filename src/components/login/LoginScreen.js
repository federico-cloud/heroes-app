import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { types } from '../types/types';
import {AuthContext} from '../auth/authContext';

export const LoginScreen = () => {

  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext);
  
  const handleLogin = () => {
    
    const action = {
      type: types.login,
      payload:{
        name: 'Federico'
      }
    }
    dispatch(action);
    
    navigate('/marvel', {
      replace: true
    });
  }
  
  
  return (
    <>
      <h1>Login Screen</h1>
      
  
      <button
        className="btn btn-primary"
        onClick={handleLogin}
      >
        Login
      </button>

    </>
  )
}
