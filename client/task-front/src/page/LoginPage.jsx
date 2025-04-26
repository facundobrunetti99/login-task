import React from 'react'
import { useForm } from 'react-hook-form'

const LoginPage = () => {
   const {register, handleSubmit,formState:{errors}}=useForm();
   const onSubmit=handleSubmit(data =>{
    console.log(data)
   })
    
  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
    <form onSubmit={onSubmit}>
    
    <input
      type="text"
      {...register("email", { required: true })}
      className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
      placeholder="Ingrese su email"
    />
      {
      errors.email &&(
        <p className="text-red-500">El mail es requerido</p>
      )
    }

    <input
      type="password"
      {...register("password", { required: true })}
      className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
      placeholder="Ingrese su contraseña"
    />
      {
      errors.password &&(
        <p className="text-red-500">La contraseña es requerida</p>
      )
    }

    <button type="submit">Registrar</button>
  </form>
    </div>

    </div>
  )
}

export default LoginPage