import React from 'react'
import { Link } from 'react-router-dom';
import { useTask } from '../components/context/TaskContext';
import { useEffect } from 'react';
import TaskCard from "../components/TaskCard";
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
     tasks.length<= 0 ? (
        <p className="text-white">No hay tareas disponibles</p>
      ) : (
        tasks.map(task => (
          <TaskCard task={task} key={task._id}></TaskCard>
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