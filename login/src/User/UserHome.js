import React from 'react'
import { useNavigate } from 'react-router-dom';

const UserHome = () => {
    const navigate = useNavigate();

    const Logout = () => {
        // console.log("log out");
        // setUser({name: "", id: ""});
    
        localStorage.clear();
        navigate.push('/')
    }


  return (
    <div>
        user Info
       {localStorage.getItem('users')}
        <div className='welcome'>
        <h2>Welcome, <span></span></h2>
        <button onClick={Logout}>
          <a href="/login">Logout</a>
        </button>
        <button>
          <a href="/">Home</a>
        </button>
      </div>
    </div>
  )
}

export default UserHome