import React from 'react'
import { Link } from 'react-router-dom';
import { useTask } from '../components/context/TaskContext';
import { useEffect } from 'react';
const TaskPage = () => {

  const {getTasks,tasks} = useTask();

  useEffect(() => {
    getTasks(); 
  }, []);
  return (
    <div>
      {
        tasks.map(task => (
          <div key={task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Estado: {task.completed ? 'Completada' : 'Pendiente'}</p>
          </div>
        ))
      }


          <Link to={"/tasks/new"} >Mostrar tareas</Link>

    </div>
    
  )
}

export default TaskPage