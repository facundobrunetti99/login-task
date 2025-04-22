import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const { singup, user } = useAuth();
  console.log(user)

  const onSubmit =handleSubmit(async(values)=>{
    singup(values);
  })

  return (

    <div className="bg-zinc-800 max-w-md p-10 rounded-md m-auto mt-10">
      <h1 className="bg-zinc-800 ">Registrarse</h1>
      <form
        onSubmit={onSubmit}
      >
        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Nombre de usuario"
        />

        <input
          type="text"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Ingrese su email"
        />
        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Ingrese su contraseña"
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterPage;
