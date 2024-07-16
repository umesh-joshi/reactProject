import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

function Profile() {

  const {user} = useContext(UserContext)

  return (
    <div>
      
      <h1>Profile : {user}</h1>
      
    </div>
  )
}

export default Profile