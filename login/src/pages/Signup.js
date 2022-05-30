import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    let [phoneNumber, setPhoneNumber] = useState("");
    let [username, setUsername] = useState("");
    let [signinId, setSigninId] = useState("");
    let [signinPassword, setSigninPassword] = useState("");
  
    let [savedPhoneNumber, setSavedPhoneNumber] = useState("");
    let [savedUsername, setSavedUsername] = useState("");
    let [savedSigninId, setSavedSigninId] = useState("");
    let [savedSigninPassword, setSavedSigninPassword] = useState("");
  
    let localStorage = window.localStorage;
  
    const navigate = useNavigate();

      
    const onSubmitSignIn = (e) => {
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


//   database
//   const onSubmitSignIn = async () => {
//     const item = {
//       phone: localStorage.getItem("phoneNumber"),
//       user_name: localStorage.getItem("username"), 
//       user_id: localStorage.getItem("signinId"),
//       user_password: localStorage.getItem("signinPassword")
//     }
//     console.log(item);


//     const result = await fetch("http://localhost:8090/signup", 
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
//   }


  return (
    <div className='signContainer'>
        <input label="연락처" name="phone" placeholder="연락처" onChange={(e) => {setPhoneNumber(e.target.value)}}></input>
        <input label="이름" name="username" placeholder="이름" onChange={(e) => {setUsername(e.target.value)}}></input>
        <input label="아이디" name="userId" placeholder="아이디"  onChange={ (e) => {setSigninId(e.target.value)}}></input>
        <input label="비밀번호" name="password" placeholder="비밀번호" type="password" onChange={(e) => {setSigninPassword(e.target.value)}}></input>
        <input label="비밀번호 확인" name="passwordConfirm" placeholder="비밀번호 확인" type="password"></input> 
        
        <button onClick={onSubmitSignIn} className='inputBtn'>
            회원가입
        </button>

      <div>
        <h3>USER INFO</h3>
        localstorage에 저장된<br/>
        loginId {savedSigninId}<br/>
        고객이름 {savedUsername}<br/>
        비밀번호 {savedSigninPassword}<br/>
        phon Number {savedPhoneNumber}<br/>
      </div>

    </div>
  )
}

export default Signup