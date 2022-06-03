import React from 'react'
import AnimalInfo from './AnimalInfo'
import User from '../pages/User'

const Animal = () => {
    let user = JSON.parse(localStorage.getItem('users'))
    console.log(user);

  return (
    <div>
        <main>

            {/* 로그인 시에만 페이지가 로딩되도록*/}
           {/* {(user.id != "") ?  */}
           {localStorage.getItem('users') ? 
           <AnimalInfo />
            :
            <User />
            }
        </main>
    </div>
  )
}

export default Animal