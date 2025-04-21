import React from 'react'
import { useForm } from 'react-hook-form'

const LoginPage = () => {
    const {register,handleSubmit}=useForm();
    
  return (
    <div>
        <form onSubmit={handleSubmit((values)=>{console.log(values)})}>
        <input type="text" {...register("username",{required:true})} />

        <input type="text" {...register("email",{required:true})} />
        <input type="password" {...register("password",{required:true})}/>    
        <button type="submit">Registrar</button>
        </form>
        </div>
  )
}

export default LoginPage