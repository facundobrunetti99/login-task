import {createContext, useContext,useState} from 'react';
import React from 'react';
import { createTaskRequest,getTasksRequest,deleteTaskRequest,getTaskRequest,updateTaskRequest } from '../../api/task.js';

const TaskContext = createContext();
export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask debe estar dentro de TaskProvider");
  }
  return context;
}



export function TaskProvider({children}) {

    const [tasks, setTasks] = useState([]);


    
const  createTask = async (task) => {
 const res=await createTaskRequest(task);
  setTasks([...tasks, res.data]);
  console.log(res.data);
}


const getTasks = async () => {
try {
  const res = await getTasksRequest();  
  setTasks(res.data);
} catch (error) { 

if (error.response && error.response.status === 401) {
    console.error(error.response.data.message);
  } else if (error.response && error.response.status === 404) {
    console.error("No se encontraron tareas."); 
  }



}


};

const deleteTask = async (id) => {
try {
  await deleteTaskRequest(id);
  setTasks(tasks.filter(task => task._id !== id));
  console.log(error)
}
catch (error) {
  if (error.response && error.response.status === 404) {
    console.error("Tarea no encontrada para eliminar.");
  } 
}
};

const getTask = async (id) => {
  try {
    const res = await getTaskRequest(id);
    return res.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error("Tarea no encontrada.");
    }
    }}


const updateTask = async (id, task) => {
  try {
    const res = await updateTaskRequest(id, task); 
    setTasks(tasks.map(t => (t._id === id ? res.data : t)));
    return res.data;
  } catch (error) {
    console.error(error);
    if (error.response && error.response.status === 404) {
      console.error("Tarea no encontrada para actualizar.");
    }
  }
}


    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            getTasks,
            deleteTask,
            getTask,updateTask
          
        }}>
            {children}
        </TaskContext.Provider>
    );
};

