import React, { useReducer } from 'react'
import UserContext from '../user/userContext'
import userRducer from '../user/userReducer'
import reducer from '../user/userReducer'

const initialState = {
  user: '',
}

const UserState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={{ ...state }}>{children}</UserContext.Provider>
  )
}
export default UserState
