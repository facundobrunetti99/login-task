import {createContext, useContext,useState} from 'react';
import React from 'react';
import { createTaskRequest,getTasksRequest } from '../../api/task';

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
  console.error("Error al obtener las tareas:", error)

}
};

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            getTasks
          
        }}>
            {children}
        </TaskContext.Provider>
    );
};

