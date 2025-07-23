import React from "react";

import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest,loginRequest,verifyTokenRequest } from "../../api/auth";
import Cookies from "js-cookie";


export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("el useProvider deberia estar dentro del contexto");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  const singup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };


const singin = async (user) => {
  try {
    const res = await loginRequest(user);
    setIsAuthenticated(true);
    setUser(res.data);  // res.data debería contener el user
    console.log(res.data);
  } catch (error) {
    if (Array.isArray(error.response.data)) {
      return setErrors(error.response.data);
    }
    setErrors([error.response.data.message || "Error al iniciar sesión"]);
  }
};

const logout = () => {
  Cookies.remove("token");
  setIsAuthenticated(false);
  setUser(null);
  setErrors([]);
};
useEffect(()=>{
  if(errors.length>0){
    const timer=setTimeout(()=>{
      setErrors([])
    },5000)
    return ()=>clearTimeout(timer)

  }
},[errors])

  useEffect(()=>{

 async function  checkLogin (){
  
   const cookies=Cookies.get();
  if(cookies.token){
    try { 
      const res= await verifyTokenRequest(cookies.token);
      if(!res.data) return setIsAuthenticated(false);
      setIsAuthenticated(true);
      setUser(res.data);
      
      console.log(res.data);
    }catch (error) {
      console.log(error);
      setIsAuthenticated(false);
      setUser(null);
    }}

    
 }
 checkLogin();
  },[])


  return (
    <AuthContext.Provider value={{ singup,singin,logout, user, isAuthenticated, errors }}>
      {children}
    </AuthContext.Provider>
  );
};
