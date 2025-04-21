import { createContext,useState } from "react";
import React from 'react'
import { registerRequest } from "../api/auth";

export const AuthContext=createContext();


export const AuthProvider = ({children}) => {
    const[user,setUser] =useState(null);

    const signUp= async (user)=>{
        const res = await registerRequest(values);
        console.log(res.da)
    }
  return (
    <AuthContext.Provider value={{}}>


        {children}
    </AuthContext.Provider>
  )
}

