import React from 'react'
import { Link } from 'react-router-dom';
import { useTask } from '../components/context/TaskContext';
import { useEffect } from 'react';
const TaskPage = () => {

  const {getTasks,tasks} = useTask();

  useEffect(() => {
    getTasks(); 
  }, []);

  if (tasks.length<=0) {
    return <div className='flex flex-col justify-center items-center min-h-screen bg-gray-900'>
  <p className="text-white mb-4">No hay tareas disponibles</p>
  <div>
    <Link className='text-sky-200' to={"/tasks/new"}>Cargar tareas</Link>
  </div>
</div>

  
  }
  return (
    <div  className="flex  flex-col justify-center items-center min-h-screen bg-gray-900">
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {
      tasks.length === 0 ? (
        <p className="text-white">No hay tareas disponibles</p>
      ) : (
        tasks.map(task => (
          <div key={task._id} className="bg-white rounded-xl shadow-lg p-6 w-72">
            <h3 className="text-xl text-center center font-semibold text-gray-800">{task.title}</h3>
            <p className="text-gray-600 text-center mt-2">{task.description}</p>
          </div>
        ))
      )
    }
  </div>
  
</div>
     <  Link to={"/tasks/new"} className='text-sky-200 my-5' >Cargar tareas</Link>   

    </div>
    
  )
}

export default TaskPage