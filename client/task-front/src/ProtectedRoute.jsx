import React from 'react'
import { useAuth } from './components/context/AuthContext'
import { Link, Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {

    const {user,isAuthenticated}=useAuth();
    if(!isAuthenticated) {
        return <Navigate to={"/"} replace></Navigate>
    }

  return (
    <Outlet/>
  )
}

export default ProtectedRoute