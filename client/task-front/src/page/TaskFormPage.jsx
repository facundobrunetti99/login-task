import React from 'react'
import { useForm } from 'react-hook-form'
import { useTask } from '../components/context/TaskContext';
import { Link } from 'react-router';
function TaskFormPage() {

const { register, handleSubmit } = useForm();
const {tasks,createTask}=useTask();
const onSubmitt= handleSubmit((data) => {
  createTask(data);  
});
  return (

   <div className="flex justify-center items-center min-h-screen bg-gray-900">
  <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md flex flex-col gap-2">
    <form onSubmit={onSubmitt} className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="title"
        {...register("title")}
        className="bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
      />
      <textarea
        rows="3"
        placeholder="Description"
        {...register("description")}
        className="bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
      ></textarea>

      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
        Guardar
      </button>
    </form>
    <Link to={"/tasks"}  className="text-white-200" >Mostrar tareas</Link>
  </div>
</div>

  )
}

export default TaskFormPage