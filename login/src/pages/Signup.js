import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'

const Signup = () => {
  let [phoneNumber, setPhoneNumber] = useState("");
  let [username, setUsername] = useState("");
  let [signinId, setSigninId] = useState("");
  let [signinPassword, setSigninPassword] = useState("");
  let [signinPasswordCheck, setSigninPasswordCheck] = useState("");
  
  let [savedPhoneNumber, setSavedPhoneNumber] = useState("");
  let [savedUsername, setSavedUsername] = useState("");
  let [savedSigninId, setSavedSigninId] = useState("");
  let [savedSigninPassword, setSavedSigninPassword] = useState("");
  
  let localStorage = window.localStorage;
  
  const navigate = useNavigate();

    /*
    const onSubmitSignUp = (e) => {
        //localstorage
        localStorage.setItem("phoneNumber", phoneNumber);
        localStorage.setItem("username", username);
        localStorage.setItem("signinId", signinId);
        localStorage.setItem("signinPassword", signinPassword);
        
        setSavedPhoneNumber(localStorage.getItem("phoneNumber"));
        setSavedUsername(localStorage.getItem("username"));
        setSavedSigninId(localStorage.getItem("signinId"));
        setSavedSigninPassword(localStorage.getItem("signinPassword"));
        

        const userData = {
        id: localStorage.getItem("signinId"),
        password: localStorage.getItem("signinPassword"),
        phone: localStorage.getItem("phoneNumber"),
        userName: localStorage.getItem("username"),
        }

        localStorage.setItem("users", JSON.stringify(userData));
        console.log('user added');
        alert('가입이 완료되었습니다')
        //navigate.push('/')
        //window.location = "/";
    } 
    console.log(localStorage);
    console.log(JSON.stringify(localStorage));
*/

//   database
//   const onSubmitSignIn = async () => {
//     const item = {
          //user signup service에서 변수명이랑 똑같이
          //🔑오른쪽부분을 db랑 같게 만들면 됨
//       phone: localStorage.getItem("phoneNumber"),
//       user_name: localStorage.getItem("username"), 
//       user_id: localStorage.getItem("signinId"),
//       user_password: localStorage.getItem("signinPassword")

//       phone: phoneNumber,
//       user_name: username, 
//       user_id: signinId,
//       user_password: signinPassword
//     }
//     console.log(item);


//     const result = await fetch("http://localhost:8090/members/new", 
//     {
//       method:'POST', 
//       body:JSON.stringify(item),
//       headers: {
//         "Content-Type":'application/json',
//         "Accept" : 'application/json'
//       }
//     })
//     result = await result.json()
//     localStorage.setItem("user-info", JSON.stringify(result))
//     navigate.push("/add")



      //API
      /*
      const item = {
        id: signinId,
        name: username,
        username: signinPassword,
        email: 'a@a.a',
        address: phoneNumber,
      }
      console.log(item);

        //localstorage
        /*
        localStorage.setItem("phoneNumber", phoneNumber);
        localStorage.setItem("username", username);
        localStorage.setItem("signinId", signinId);
        localStorage.setItem("signinPassword", signinPassword);

        setSavedPhoneNumber(localStorage.getItem("phoneNumber"));
        setSavedUsername(localStorage.getItem("username"));
        setSavedSigninId(localStorage.getItem("signinId"));
        setSavedSigninPassword(localStorage.getItem("signinPassword"));
        */

      /*
      await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }) */
//   }

//node.js
// const onSubmitSignIn1 = () => {
//   Axios.post('http://localhost:3001/resigter', {
//     userid: userId, password: password
//   }).then((response) => {
//     console.log(response);
//   });
  // }

  const onSubmitSignUp = async () => {
    const item = {
      userPhoneNumber: phoneNumber,
      userId: signinId,
      userName: username,
      userPassword: signinPassword,
      checkUserPassword: signinPasswordCheck
    }
    console.log(item);

    await fetch('http://localhost:8082/', {
      method: 'POST',
      // credentials: 'include',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json;',
        // 'Content-Type': 'application/json; charset=UTF-8',
        // 'Access-Control-Allow-Origin': 'http://localhost:8082/',
        // 'Accept': '*/*'
      },
      body: JSON.stringify(item),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('성공:', data);
      })
    .catch((error) => {
      console.error('실패:', error);
      });

    localStorage.setItem("userinfo", JSON.stringify(item))
    alert('가입이 완료되었습니다')
  }

  return (
    <div className='signContainer'>
      <h2>Sign up</h2>
      <input label="연락처" name="phone" placeholder="연락처" onChange={(e) => {setPhoneNumber(e.target.value)}}></input>
      <input label="이름" name="username" placeholder="이름" onChange={(e) => {setUsername(e.target.value)}}></input>
      <input label="아이디" name="userId" placeholder="아이디"  onChange={ (e) => {setSigninId(e.target.value)}}></input>
      <input label="비밀번호" name="password" placeholder="비밀번호" type="password" onChange={(e) => {setSigninPassword(e.target.value)}}></input>
      <input label="비밀번호 확인" name="passwordConfirm" placeholder="비밀번호 확인" type="password" onChange={(e) => {setSigninPasswordCheck(e.target.value)}}></input> 
          
      <button onClick={onSubmitSignUp} className='inputBtn'>
        회원가입
      </button>

      <div>
        <h3>USER INFO</h3>
        localstorage에 저장된<br/>
        loginId {savedSigninId}<br/>
        고객이름 {savedUsername}<br/>
        비밀번호 {savedSigninPassword}<br/>
        phon Number {savedPhoneNumber}<br/>
        {localStorage.userinfo}
      </div>

    </div>
  )
}

export default Signup