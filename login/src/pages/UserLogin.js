import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'

const UserLogin = ({Login, error}) => {
    const [details, setDetails] = useState({id:"", password: ""});
    const [jwt, setJwt] = useState("", "jwt");
    
    const submitHandler = e => {
        e.preventDefault();
        

        Login(details);
        //details에 id, password 임시 저장되어있음
        
        Axios.post('http://localhost:8081/members/new', 
        {
            id: details.id,
            password: details.password
        }).then((details) => {
            console.log(details);
          });

          

        

        // const userBody = {
        //     userid: details.id,
        //     password: details.password
        // };

        // fetch("/members/new", {
        //     headers: {
        //         "Content-Type":'application/json',
        //     },
        //     method: "Post",
        //     body: JSON.stringify(userBody),
        // })
        // .then((response) => {
        //     if(response.status === 200) 
        //     return Promise.all([response.json(), response.headers]);
        //     else
        //         return Promise.reject("Invalid login attempt")
        // })
        // .then(([body, headers]) => {
        //     setJwt(headers.get("Authorization"));
        //         window.location.href ='dashboard';
        // })
    }

    return (
    <form onSubmit={submitHandler}>
        <div className='login__form'>
            <h2>Login</h2>
            {(error !== "") ? ( <div className='error'>Enter a correct ID and PASSWORD</div> ) : ""}
            <div className='login__input'>
                <label htmlFor="id">Id : </label>
                <input type="text" name='id' id='id' onChange={e => setDetails({...details, id: e.target.value})} value={details.id}/>
            </div>
            <div className='login__input'>
                <label htmlFor="password">Password : </label>
                <input type="password" name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            <input type="submit" value="LOGIN"/>
        </div>
    </form>
  )

}

export default UserLogin