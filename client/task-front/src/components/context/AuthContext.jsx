import { createContext, useState, useContext } from "react";
import React from "react";
import { registerRequest } from "../../api/auth";

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
  return (
    <AuthContext.Provider value={{ singup, user, isAuthenticated, errors }}>
      {children}
    </AuthContext.Provider>
  );
};
