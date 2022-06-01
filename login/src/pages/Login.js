import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import UserLogin from './UserLogin';

const Login = () => {
  const [user, setUser]= useState({name: "", id:""});
  const [error, setError]=useState("");

  const navigate = useNavigate();

  const adminUser = {
    /*
    email: "admin@admin.com",
    password: "admin",
    */
   id: localStorage.getItem("signinId"),
   password: localStorage.getItem("signinPassword"),
  }
  //console.log(localStorage.getItem("signinId"));
  //console.log(localStorage.getItem("users"));

  const Login = details => {
    console.log(details);

    if (details.id == adminUser.id && details.password == adminUser.password) {
      //여기서 adminUser.id가 members table의 id로 바꾸기
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
    // console.log("log out");
    // setUser({name: "", id: ""});

    localStorage.clear();
    navigate.push('/')
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

  // <div>


  <div className='login__container'>
    {(user.id != "") ? (
      <div className='welcome'>
        <h2>Welcome, <span>{user.id}</span></h2>
        <button onClick={Logout}>
          <a href="/login">Logout</a>
        </button>
        <button>
          <a href="/userhome">Home</a>
        </button>
      </div>
    )  : (
      <UserLogin Login={Login} error={error}/>
    )}
  </div>

  )
}

export default Login