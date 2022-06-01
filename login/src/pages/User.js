import React from 'react'
import UserHome from '../User/UserHome'
import Login from './Login'
import Signup from './Signup'

const User = () => {
    const style = {
        margin: "5vw"
      }

  return (
    // <div className='user__container'style={style}>
    //     <Login />
    //     <Signup />
    // </div>
    <div>
      {localStorage.getItem('users') ? 
      <UserHome />
      :
  
      <div className='user__container'style={style}>
          <Login />
          <Signup />
      </div>
      }
    </div>
  )
}

export default User