import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginScreen = () => {

  const navigate = useNavigate();
  
  const handleLogin = () => {
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
