import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { Navigate, Outlet } from 'react-router-dom'
import AuthContext from './context/AuthContext'
import { reactLocalStorage } from 'reactjs-localstorage'

// const useAuth = ()=>{
//     const {user} = useContext(AuthContext)
//     console.log("user",user)
//     return user && user.loggedIn
// }

const useAuth =()=>{
  const user = reactLocalStorage.get("Authorization")
  return user
}

const ProtectedRoutes = () => {
    const location = useLocation()
    const isAuth = useAuth()
  return (
    isAuth ? <Outlet/> :( <Navigate to='/login' replace state={{from:location}} />)
  )
}

export default ProtectedRoutes