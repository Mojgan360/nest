import React, { useEffect, useState } from 'react'
import UserContext from '../user/userContext'
import reducer from '../user/userReducer'
import { useAuth0 } from '@auth0/auth0-react'

const UserState = ({ children }) => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
    isLoading,
  } = useAuth0()

  const [myUser, setMyUser] = useState(null)

  useEffect(() => {
    // console.log('User:   ', user)
    // console.log('isAuthenticated:   ', isAuthenticated)
    // console.log('isLoading:   ', isLoading)
    if (isAuthenticated) {
      setMyUser(user)
    } else {
      setMyUser(false)
    }
  }, [isAuthenticated])

  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, myUser }}>
      {children}
    </UserContext.Provider>
  )
}
export default UserState
