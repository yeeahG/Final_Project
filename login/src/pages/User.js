import React from 'react'
import Login from './Login'
import Signup from './Signup'

const User = () => {
    const style = {
        margin: "5vw"
      }

  return (
    <div className='user__container'style={style}>
        <Login />
        <Signup />
    </div>
  )
}

export default User