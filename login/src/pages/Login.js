import React, { useState } from 'react'
import './Login.css'
import UserLogin from './UserLogin';

const Login = () => {
  const adminUser = {
    /*
    email: "admin@admin.com",
    password: "admin",
    */
   /*
   id: sessionStorage.getItem("signinId"),
   password: sessionStorage.getItem("signinPassword"),
   */

   id: localStorage.getItem("signinId"),
   password: localStorage.getItem("signinPassword"),
  }
  /*
  console.log(sessionStorage.getItem("signinId"));
  console.log(sessionStorage.getItem("users"));
  */

  console.log(localStorage.getItem("signinId"));
  console.log(localStorage.getItem("users"));

  const [user, setUser]= useState({name: "", id:""});
  const [error, setError]=useState("");

  const Login = details => {
    console.log(details);

    if (details.id == adminUser.id && details.password == adminUser.password) {
      console.log("logged in");
      setUser({
        name: details.name,
        id: details.id
    });
    } else {
    console.log("Details do not match");
    setError("Details do not match")
    }
  } 

  const Logout = () => {
    console.log("log out");
    setUser({name: "", id: ""});
  }


  return (
  // <div className='login__container'>
  //   <div className='login__form'>

  //     <div className='login__input'>
  //       <label>ID </label>
  //       <input type="text" name='id' id='id'></input>

  //       <label>PW </label>
  //       <input type="password" name='password' id='password'></input>
  //     </div>

  //     <div className='login__btn'>
  //       <button type='submit'>Login</button>
  //     </div>
  //   </div>

  //   <div>
  //   </div>
  // </div>

  <div className='login__container'>
    {(user.id != "") ? (
      <div className='welcome'>
        <h2>Welcome, <span>{user.id}</span></h2>
        <button onClick={Logout}>
          <a href="/LoginSignin/LoginForm">
            Logout
          </a>
        </button>
        <button>
          <a href="/">
            Home
          </a>
        </button>
      </div>
    )  : (
      <UserLogin Login={Login} error={error}/>
    )}
  </div>

  )
}

export default Login