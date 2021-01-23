import React, { useEffect, useState } from 'react'
import UserContext from '../user/userContext'
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
  console.log(isLoading)

  useEffect(() => {
    if (isAuthenticated) {
      setMyUser(user)
    } else {
      setMyUser(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated])

  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, myUser }}>
      {children}
    </UserContext.Provider>
  )
}
export default UserState
