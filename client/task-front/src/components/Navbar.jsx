import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/context/AuthContext";
import { Menu, X } from "lucide-react"; // opcional (puedes usar texto si no tenés íconos)

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex">
    
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } h-screen bg-gray-800 text-white transition-all duration-300 flex flex-col fixed top-0 left-0 z-50`}
      >
                <div className="p-4 flex items-center justify-between">
          <span className="text-lg font-bold">
            {isOpen ? "Administrador de Tareas" : " AT  "}
          </span>
          <button onClick={() => setIsOpen(!isOpen)} className="ml-auto">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div className="flex-1 flex flex-col gap-2 px-4">
          {!isAuthenticated ? (
            <>
            <Link to="/" className="text-gray-300 hover:text-white">
                {isOpen ? "Inicio" : "🏠"}
              </Link>
              <Link to="/login" className="text-gray-300 hover:text-white">
                {isOpen ? "Iniciar sesión" : "🔑"}
              </Link>
              <Link to="/register" className="text-gray-300 hover:text-white">
                {isOpen ? "Registrarse" : "📝"}
              </Link>
               
            </>
          ) : (
            <>
              {isOpen && (
                <p className="text-gray-400 mb-2">
                  Bienvenido <b>{user.username}</b>
                </p>
              )}
              <Link to="/" className="text-gray-300 hover:text-white">
                {isOpen ? "Inicio" : "🏠"}
              </Link>
              <Link to="/tasks" className="text-gray-300 hover:text-white">
                {isOpen ? "Tareas" : "📋"}
              </Link>
              <Link to="/tasks/new" className="text-gray-300 hover:text-white">
                {isOpen ? "Nueva tarea" : "➕"}
              </Link>
              <button
                onClick={handleLogout}
                className="text-gray-300 hover:text-white text-left mt-auto"
              >
                {isOpen ? "Salir" : "🚪"}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Espacio para empujar el contenido del dashboard */}
      <div className={`${isOpen ? "ml-64" : "ml-16"} transition-all w-full`}>
        {/* Aquí iría tu contenido, por ejemplo el <Outlet /> */}
      </div>
    </div>
  );
}

export default Navbar;
