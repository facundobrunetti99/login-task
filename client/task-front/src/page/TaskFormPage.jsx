import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTask } from '../components/context/TaskContext';
import { Link } from 'react-router';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
function TaskFormPage() {
  const { register, handleSubmit,setValue } = useForm();
  const { createTask,getTask,updateTask } = useTask();
  const [successMessage, setSuccessMessage] = useState("");
  const params= useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        setValue('title', task.title);
        setValue('description',task.description);

      }
    }
    loadTask();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      updateTask(params.id, data);
      setSuccessMessage("✅ Tarea actualizada con éxito");
    }
    else {
     await createTask(data);  
     setSuccessMessage("✅ Tarea creada con éxito");
    setTimeout(() => setSuccessMessage(""), 3000);  
      reset(); 
    }
          
                        
    
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md flex flex-col gap-2">
        <form onSubmit={onSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Título"
            {...register("title")}
            className="bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <textarea
            rows="3"
            placeholder="Descripción"
            {...register("description")}
            className="bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          ></textarea>

          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
            Guardar
          </button>
        </form>

        {/* Mensaje de éxito */}
        {successMessage && (
          <div className="text-green-400 font-medium mt-2">{successMessage}</div>
        )}

        <Link to="/tasks" className="text-blue-300 mt-4 hover:underline">
          Mostrar tareas
        </Link>
      </div>
    </div>
  );
}

export default TaskFormPage;


