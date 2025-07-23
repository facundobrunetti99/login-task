import React, { use } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../components/context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar(){
    const {  isAuthenticated,logout,user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // cerrás sesión (puede borrar cookies, tokens, etc.)
    navigate("/"); // te lleva al menú principal
  };
    return (
        
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-lg font-bold">
                        Task Manager
                    </div>
                    <div className="space-x-4">
                    
                        
                        {!isAuthenticated ? (
                            <>
                            <Link to="/login" className="text-gray-300 hover:text-white">Iniciar sesion</Link>
                            <Link to="/register" className="text-gray-300 hover:text-white">Registrarse</Link></>
                     
                        ) : (        
                            <>
                          <p className="text-gray-400 hover:text-white">Bienvenido <b>{user.username}</b></p>
                            <Link to="/" className="text-gray-300 hover:text-white">Inicio</Link>
                        <Link to="/tasks" className="text-gray-300 hover:text-white">Tareas</Link>
                        <Link to="/tasks/new" className="text-gray-300 hover:text-white">Nueva tarea</Link>
                         <button onClick={handleLogout} className="text-gray-300 hover:text-white">

                            Salir
                            </button>
                                    </>    
                        )}
                        
                    </div>
                </div>
            </nav>


        )
}
export default Navbar;