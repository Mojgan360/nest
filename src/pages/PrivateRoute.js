import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import UserContext from '../context/user/userContext'

const PrivateRoute = ({ children, ...rest }) => {
  const userContext = useContext(UserContext)
  const { myUser } = userContext
  return (
    <Route
      {...rest}
      render={() => {
        return myUser ? children : <Redirect to='/'></Redirect>
      }}
    ></Route>
  )
}
export default PrivateRoute
