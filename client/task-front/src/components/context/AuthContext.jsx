import { createContext, useState, useContext, useEffect } from "react";
import React from "react";
import { registerRequest,loginRequest } from "../../api/auth";

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


  const singin= async (user)=>{
   try {
      const res = await loginRequest(user);
      setIsAuthenticated(true);
      setUser(res.data);

    } catch (error) {
      setErrors(error.response.data);
      console.log(error)
    }
  }
useEffect(()=>{
  if(errors.length>0){
    const timer=setTimeout(()=>{
      setErrors([])
    },5000)
    return ()=>clearTimeout(timer)

  }
},[errors])

  
  return (
    <AuthContext.Provider value={{ singup,singin, user, isAuthenticated, errors }}>
      {children}
    </AuthContext.Provider>
  );
};
