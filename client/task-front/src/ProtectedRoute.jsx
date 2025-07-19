import React from 'react'
import { useAuth } from './components/context/AuthContext'
import { Link, Navigate,Outlet } from 'react-router';

const ProtectedRoute = () => {

    const {user,isAuthenticated}=useAuth();
    if(!isAuthenticated) {
        return <Navigate to={"/login"} replace></Navigate>
    }

  return (
    <Outlet/>
  )
}

export default ProtectedRoute