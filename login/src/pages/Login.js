import React from 'react'
import './Login.css'

const Login = () => {
  return (
  <div className='login__container'>
    <div className='login__form'>

      <div className='login__input'>
        <label>ID </label>
        <input type="text" name='id' id='id'></input>

        <label>PW </label>
        <input type="password" name='password' id='password'></input>
      </div>

      <div className='login__btn'>
        <button type='submit'>Login</button>
      </div>
    </div>

  </div>
  )
}

export default Login