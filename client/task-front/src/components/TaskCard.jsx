import React from 'react'
import { useTask } from '../components/context/TaskContext';
import { Link } from 'react-router-dom';
function TaskCard({task}) {

    const {deleteTask} = useTask();
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-72">
            <h3 className="text-xl text-center center font-semibold text-gray-800">{task.title}</h3>
            <p className="text-gray-600 text-center mt-2">{task.description}</p>

            <p className='text-blue-700 text-center'>Fecha: {new Date(task.date).toLocaleDateString()}</p>
            <div className='flex px-4 justify-between items-center mt-4'>
               
<button
  className='mt-4 bg-red-400 text-white px-4 py-2 rounded hover:bg-red-600'
  onClick={() => deleteTask(task._id)}
>
  Eliminar
</button>
            <Link to={`/tasks/${task._id}`} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Editar  
            </Link>

            </div>
           
          </div>
  )
}

export default TaskCard