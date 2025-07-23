import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../components/context/AuthContext";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const navigate = useNavigate();const { singin, singup, isAuthenticated, errors:singinErrors } = useAuth();


  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated])

  
  const onSubmit = handleSubmit((data) => {
    singin(data);
  });


  
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md my-2">
  {Array.isArray(singinErrors) &&
  singinErrors.map((error, i) => (
    <div key={i} className="bg-red-500 p-2">
      {error}
    </div>
))}


        <h1 className='text-2xl font-bold'>Iniciar Sesion</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Ingrese su email"
          />
          {errors.email && <p className="text-red-500">El mail es requerido</p>}

          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Ingrese su contraseña"
          />
          {errors.password && (
            <p className="text-red-500">La contraseña es requerida</p>
          )}

          <button type="submit">Inciar sesion</button>
        </form>
        <p className="flex gap-x-2 justify-between">No tienes una cuenta? 

          <Link to="/register" className="text-sky-200">Registrarse</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
