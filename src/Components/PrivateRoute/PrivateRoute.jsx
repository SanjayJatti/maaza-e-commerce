import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext'

export const PrivateRoute = ({children}) => {
  const { authState } = useAuth()
  const {isUserLoggedIn } = authState.userInfo;
  return (
   <>
   {isUserLoggedIn ? children : <Navigate to="/login" replace/> }
   </>
  )
}
