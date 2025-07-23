import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../components/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { singup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks/new");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    singup(values);
  });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md m-auto mt-10">
      {registerErrors.map((error, i) => (
        <div key={i} className="bg-red-500 p-2">
          {error}
        </div>
      ))}
      <h1 className="bg-zinc-800 ">Registrarse</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Nombre de usuario"
        />
        {errors.username && (
          <p className="text-red-500">El usuario es requerido</p>
        )}

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

        <button type="submit">Registrar</button>
      </form>
       <p className="flex gap-x-2 justify-between">Ya tienes una cuenta? 

          <Link to="/login" className="text-sky-200">Inciar sesion</Link>
        </p>
    </div>
  );
};

export default RegisterPage;
